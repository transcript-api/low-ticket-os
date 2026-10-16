# Orquestación: flujos, contratos y aprobaciones

Cómo trabajan juntos los 7 agentes. Cada flujo dice quién hace qué, qué archivo entrega y quién aprueba antes del siguiente paso. Todo se escribe en el repo: si no quedó en un archivo, no pasó.

## 1. Brief de tarea (lo que manda el director)

Va como instrucción de `delegate_task` (modo simple) o como archivo `hermes/tareas/AAAA-MM-DD_<rol>_<tema>.md` (modo equipo):

```
Rol: copywriter
Producto: reto-cintura-28
Objetivo: lote 2 de anuncios fríos, 8 conceptos distintos de los activos
Contexto que leer: products/reto-cintura-28/README.md, 05-creativos.md, 06-videos.md, 09-metricas.md
Restricciones: precio y números solo de 02-oferta.md; nivel de consciencia 1 y 2; voseo y "tú"
Entrega: products/reto-cintura-28/06-videos.md (sección "Lote 2"), formato de copy-humanizada §9
Criterio de terminado: 8 conceptos con rúbrica ≥ 7, chequeo final sin fallas, hipótesis por pieza
Fecha límite / prioridad: P1
```

## 2. Entrega (lo que devuelve cada rol)

```
Rol · Tarea · Estado (terminado / bloqueado / necesita decisión)
Archivos tocados: [rutas]
Resumen en 3 líneas
Decisiones que tomé y por qué (con IDs de principios o reglas)
Supuestos e hipótesis marcadas
Qué necesita OK de Santiago (si algo)
Siguiente rol: [auditor / director / …]
```

El director no reenvía a Santiago nada que no haya pasado por el auditor.

## 3. Flujos

### A. Transcripción nueva (aprender sin creerle al orador)

| Paso | Rol | Entrega | Aprueba |
|---|---|---|---|
| 1 | investigador | Cruda en `conocimiento/fuentes/crudas/`, extracción en `fuentes/extracciones/`, principios actualizados, hipótesis en `metrics/experimentos.csv`, entrada en `conocimiento/CHANGELOG.md` | auditor |
| 2 | auditor | Revisa descartes, banderas rojas nuevas y que nada viole políticas | — |
| 3 | director | `npm run skills:sync`, actualiza la skill si cambió una regla Alta, bitácora, commit y push | — |

Prompt para pedir la transcripción: `conocimiento/criterio/protocolo-de-ingesta.md` §1.

### B. Lote de creativos (anuncios pagos)

| Paso | Rol | Entrega | Aprueba |
|---|---|---|---|
| 1 | director | Brief con objetivo, nivel de consciencia y qué se aprendió del lote anterior (`09-metricas.md`) | — |
| 2 | copywriter | Ideas, 5-10 ganchos por idea con rúbrica, guiones con tiempos, texto principal, titular, botón, hipótesis | auditor |
| 3 | auditor | Chequeo final de `copy-humanizada` §8 + `compliance/checklist-previa.md`; devuelve con correcciones o aprueba | — |
| 4 | productor-creativo | Keyframes, video, voz, edición; checklist de 15 puntos de `edicion-premium` | auditor |
| 5 | auditor | Revisa la pieza terminada (sin audio, solo audio, políticas, números = página) | — |
| 6 | director | Presenta a Santiago el lote con sus hipótesis | **Santiago** |
| 7 | media-buyer | Arma la campaña con nombres `C-E-V` y UTM; **no publica hasta el OK** | **Santiago** |

### C. Lectura de resultados y decisiones de gasto

| Paso | Rol | Entrega | Aprueba |
|---|---|---|---|
| 1 | media-buyer | Datos en `09-metricas.md`, diagnóstico por capa, decisiones propuestas con la regla aplicada (formato de reporte de `trafico-meta-low-ticket` §10) | — |
| 2 | director | Pide OK de lo que cambia gasto o publica | **Santiago** |
| 3 | media-buyer | Ejecuta lo aprobado; registra en `10-decisiones.md` y `metrics/experimentos.csv` | — |
| 4 | investigador | Si un test cerró con muestra suficiente: sube o baja la confianza del principio (protocolo, paso 8) y lo anota en el CHANGELOG | auditor |

### D. Oferta o producto nuevo

| Paso | Rol | Entrega | Aprueba |
|---|---|---|---|
| 1 | investigador | Hoja de minería (Biblioteca de anuncios) con la lógica a modelar, nunca el texto | — |
| 2 | estratega-oferta | `02-oferta.md` con precio, bumps, planes, upsell, cadena anuncio → página → checkout y números de `unit-economics.mjs` | auditor |
| 3 | copywriter | Copy de página y correos | auditor |
| 4 | director | Plan para Santiago (primero planificar, después ejecutar) | **Santiago** |

### E. Orgánico semanal

| Paso | Rol | Entrega | Aprueba |
|---|---|---|---|
| 1 | copywriter | Tanda de la semana (Reels, historias, Trial Reels) con `contenido-organico-ig` | auditor |
| 2 | productor-creativo | Piezas editadas | auditor |
| 3 | director | Calendario a Santiago; publicar solo con su OK | **Santiago** |
| 4 | copywriter | Lectura a las 24 h y cierre semanal; ganadoras → fotocopiadora y banco de ganchos de pago | — |

## 4. Quién puede escribir dónde

| Carpeta o archivo | Escribe | Revisa |
|---|---|---|
| `conocimiento/` | investigador | auditor |
| `skills/` | director (después de una ingesta o un aprendizaje) | auditor |
| `products/<p>/02-oferta.md`, `03-producto.md` | estratega-oferta | auditor |
| `products/<p>/05-creativos.md`, `06-videos.md` | copywriter, productor-creativo | auditor |
| `products/<p>/07-meta-ads.md`, `09-metricas.md` | media-buyer | director |
| `products/<p>/10-decisiones.md`, `11-pendientes.md`, `docs/bitacora.md` | todos (cada uno lo suyo) | director |
| `playbook/`, `AGENTS.md`, `docs/01-principios.md`, `compliance/` | director, con OK de Santiago si cambia una regla | auditor |

## 5. Escalamiento

- **Bloqueo** (falta un dato, una cuenta, un acceso): el rol para y lo reporta; no inventa el dato.
- **Desacuerdo** con una idea de Santiago que choca con las reglas: se registra en `10-decisiones.md` con la alternativa honesta (ver `docs/01-principios.md` §6) y decide Santiago.
- **Contradicción entre un curso nuevo y un dato propio:** gana el dato propio con muestra suficiente.
