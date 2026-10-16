#!/usr/bin/env node
// Lista las afirmaciones extraídas (IDs de conocimiento/fuentes/extracciones/extract_*.md)
// que ningún archivo de principios cita. Sirve para que una ingesta no deje nada atrás.
//
// Uso: node tools/kb-cobertura.mjs            → reporte; sale con error si hay afirmaciones sin citar
//      node tools/kb-cobertura.mjs --lista    → además imprime cada afirmación sin citar
//
// Las afirmaciones que se revisaron y no generan principio se registran en
// conocimiento/criterio/contradicciones-y-sesgos.md (§5) y así quedan citadas.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const K = join(ROOT, 'conocimiento');
const DIR_EXT = join(K, 'fuentes', 'extracciones');
const CARPETAS_PRINCIPIOS = ['copy', 'oferta-trafico', 'organico-produccion', 'criterio'];
const ID = /\b([A-Z]{1,3})(\d+)\b/g;
const RANGO = /\b([A-Z]{1,3})(\d+)\s*[–-]\s*(?:([A-Z]{1,3}))?(\d+)\b/g;
const clave = (p, n) => `${p}${Number(n)}`;

// 1. Afirmaciones: filas de la tabla de la sección "1." de cada extracción ("| S06 | ...").
//    Las tablas de otras secciones (reglas derivadas R1, RA1…) no cuentan.
const afirmaciones = new Map();
const prefijos = new Set();
for (const f of readdirSync(DIR_EXT).filter((n) => /^extract_.*\.md$/.test(n))) {
  let seccion = null;
  for (const linea of readFileSync(join(DIR_EXT, f), 'utf8').split(/\r?\n/)) {
    const h = linea.match(/^#{2,4} (\d+)\./);
    if (h) seccion = h[1];
    if (seccion !== '1') continue;
    const m = linea.match(/^\| ([A-Z]{1,3})(\d+) \|/);
    if (m) {
      afirmaciones.set(clave(m[1], m[2]), { id: `${m[1]}${m[2]}`, archivo: f, texto: linea.slice(0, 180) });
      prefijos.add(m[1]);
    }
  }
}

// 2. Citas en los archivos de principios (IDs sueltos y rangos "B03–B09").
let texto = '';
for (const c of CARPETAS_PRINCIPIOS) {
  const dir = join(K, c);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.md'))) texto += readFileSync(join(dir, f), 'utf8') + '\n';
}
const citadas = new Set();
for (const m of texto.matchAll(RANGO)) {
  const [, p, a, p2, b] = m;
  if (!prefijos.has(p) || (p2 && p2 !== p)) continue;
  const ini = Number(a), fin = Number(b);
  if (fin >= ini && fin - ini < 120) for (let i = ini; i <= fin; i++) citadas.add(clave(p, i));
}
for (const m of texto.matchAll(ID)) if (prefijos.has(m[1])) citadas.add(clave(m[1], m[2]));

// 3. Reporte.
const sinCitar = [...afirmaciones.entries()].filter(([k]) => !citadas.has(k)).map(([, v]) => v);
const total = afirmaciones.size;
console.log(`${total} afirmaciones · ${total - sinCitar.length} citadas · ${sinCitar.length} sin citar`);
if (sinCitar.length) {
  if (process.argv.includes('--lista')) for (const a of sinCitar) console.log(`  ${a.id.padEnd(5)} ${a.archivo}  ${a.texto}`);
  else console.log('Corré con --lista para verlas. Cada una se incorpora a un principio o se registra en criterio/contradicciones-y-sesgos.md §5.');
  process.exit(1);
}
