#!/usr/bin/env node
// Copia la base de conocimiento a la carpeta references/ de cada skill
// y, opcionalmente, instala las skills en Hermes Agent.
//
// Uso:
//   node tools/skills-sync.mjs                 regenera skills/*/references/ desde conocimiento/
//   node tools/skills-sync.mjs --check         solo verifica (sale con error si falta algo o hay diferencias)
//   node tools/skills-sync.mjs --hermes        además copia skills/ a ~/.hermes/skills/low-ticket-os/
//   node tools/skills-sync.mjs --hermes=<dir>  ídem, a otra carpeta (ej. la de un perfil:
//                                              ~/.hermes/profiles/copywriter/skills/low-ticket-os)

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, copyFileSync } from 'node:fs';
import { join, dirname, basename, resolve } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const K = (p) => join(ROOT, 'conocimiento', p);

// Qué archivos de conocimiento lleva cada skill en references/.
export const MAPA = {
  'copy-humanizada': [
    'copy/ganchos.md', 'copy/ideas-y-angulos.md', 'copy/guiones.md', 'copy/lenguaje-humanizado.md',
    'criterio/banderas-rojas.md',
  ],
  'ingesta-transcripciones': [
    'criterio/protocolo-de-ingesta.md', 'criterio/fuentes.md', 'criterio/contradicciones-y-sesgos.md',
    'criterio/banderas-rojas.md', 'fuentes/extracciones/SPEC_EXTRACCION.md',
  ],
  'oferta-low-ticket': [
    'oferta-trafico/oferta-low-ticket.md', 'oferta-trafico/metricas-benchmarks.md',
    'oferta-trafico/high-ticket-y-ventas.md', 'criterio/banderas-rojas.md',
  ],
  'trafico-meta-low-ticket': [
    'oferta-trafico/meta-ads-operacion.md', 'oferta-trafico/metricas-benchmarks.md', 'criterio/banderas-rojas.md',
  ],
  'contenido-organico-ig': [
    'organico-produccion/sistema-organico-ig.md', 'organico-produccion/formatos-y-edicion.md',
    'copy/ideas-y-angulos.md', 'criterio/banderas-rojas.md',
  ],
  'edicion-premium': ['organico-produccion/formatos-y-edicion.md'],
  'plan-carrusel': ['copy/ganchos.md', 'copy/ideas-y-angulos.md', 'copy/lenguaje-humanizado.md'],
  'realismo-cinematico-ia': ['organico-produccion/formatos-y-edicion.md', 'criterio/banderas-rojas.md'],
};

const args = process.argv.slice(2);
const check = args.includes('--check');
const hermesArg = args.find((a) => a.startsWith('--hermes'));

let problemas = 0;
let copiados = 0;

for (const [skill, archivos] of Object.entries(MAPA)) {
  const dirSkill = join(ROOT, 'skills', skill);
  if (!existsSync(join(dirSkill, 'SKILL.md'))) {
    console.error(`✗ falta skills/${skill}/SKILL.md`);
    problemas++;
    continue;
  }
  const dirRefs = join(dirSkill, 'references');
  for (const rel of archivos) {
    const origen = K(rel);
    if (!existsSync(origen)) {
      console.error(`✗ falta conocimiento/${rel} (lo usa ${skill})`);
      problemas++;
      continue;
    }
    const destino = join(dirRefs, basename(rel));
    const contenido = readFileSync(origen);
    const igual = existsSync(destino) && readFileSync(destino).equals(contenido);
    if (check) {
      if (!igual) {
        console.error(`✗ skills/${skill}/references/${basename(rel)} desactualizado`);
        problemas++;
      }
    } else if (!igual) {
      mkdirSync(dirRefs, { recursive: true });
      writeFileSync(destino, contenido);
      copiados++;
    }
  }
}

function copiarCarpeta(origen, destino) {
  mkdirSync(destino, { recursive: true });
  for (const nombre of readdirSync(origen)) {
    const o = join(origen, nombre);
    const d = join(destino, nombre);
    if (statSync(o).isDirectory()) copiarCarpeta(o, d);
    else copyFileSync(o, d);
  }
}

if (!check && hermesArg) {
  const destino = hermesArg.includes('=')
    ? resolve(hermesArg.split('=')[1].replace(/^~(?=$|[\\/])/, homedir()))
    : join(homedir(), '.hermes', 'skills', 'low-ticket-os');
  const skills = readdirSync(join(ROOT, 'skills')).filter((n) => existsSync(join(ROOT, 'skills', n, 'SKILL.md')));
  for (const s of skills) copiarCarpeta(join(ROOT, 'skills', s), join(destino, s));
  console.log(`✓ ${skills.length} skills instaladas en ${destino}`);
}

if (check) {
  if (problemas) {
    console.error(`\n${problemas} problema(s). Corré: npm run skills:sync`);
    process.exit(1);
  }
  console.log('✓ references/ al día con conocimiento/');
} else {
  if (problemas) process.exit(1);
  console.log(`✓ references/ regeneradas (${copiados} archivo(s) actualizados)`);
}
