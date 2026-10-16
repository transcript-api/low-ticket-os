# Protocolo de ingesta de transcripciones

Cómo convertir un video nuevo de persuasión, copy, tráfico u orgánico en conocimiento útil sin repetir los errores de la primera tanda (octubre 2026). Lo ejecuta el agente de ingesta (`skills/ingesta-transcripciones/`).

## 0. Principio

Un video es un **dato**, no una orden. El orador no es autoridad. Se registra lo que dice y muestra, se evalúa aparte, y solo sube a regla lo que resiste la rúbrica de confianza y, al final, los datos propios.

## 1. Pedir la transcripción (prompt para Google AI Studio)

Configuración: modelo Pro más nuevo disponible, temperatura 0 a 0,3, el video subido como archivo (no link). **Un video por chat.** Si dura más de 15 minutos, pedir por tramos (ver el final del prompt).

```
Sos un transcriptor y documentalista. Tu único trabajo es registrar con máxima fidelidad lo que DICE y lo que MUESTRA este video.

No sos experto ni crítico. Prohibido:
- Opinar, evaluar o decir si algo está bien o mal.
- Corregir lo que dice el creador, aunque te parezca incorrecto.
- Resumir, condensar, "seleccionar lo representativo", completar ideas o agregar ejemplos o conocimiento propio.
- Inventar datos que no se escuchan o no se ven. Si no está en el video, no va.

Reglas de formato:
- Si algo no se entiende: [inaudible] o [dudoso: posible palabra].
- Respetá el idioma original. Si no es español, debajo de cada frase poné la traducción fiel entre paréntesis, con la misma marca de tiempo.
- Si el archivo es un compilado de varios creadores, numerá cada bloque (BLOQUE 1, BLOQUE 2…) con su creador y su tramo de tiempo, y usá marcas de tiempo GLOBALES del archivo.
- No mezcles respuestas: entregá un solo documento, en orden.
- Si una sección no tiene información, escribí "No aparece en el video".
- La completitud y la literalidad valen más que la brevedad.

TRAMO A TRANSCRIBIR: [desde mm:ss hasta mm:ss | todo el video si dura menos de 15 minutos]

Entregá exactamente estas secciones:

1. FICHA: creador o canal (solo si aparece), duración total, idioma, tema, formato (a cámara, voz en off, pantalla, pizarra, etc.).
2. TRANSCRIPCIÓN LITERAL del tramo, palabra por palabra, con [mm:ss] en cada frase. Incluí muletillas, [pausa], [énfasis], risas y cambios de tono. Identificá a cada persona que habla.
3. LO QUE SE VE, POR TIEMPO: [mm:ss] texto en pantalla literal, subtítulos, gráficos, capturas (con los números que se leen), objetos, gestos, cambios de plano, cortes, zooms, música y efectos.
4. LOS PRIMEROS 3 SEGUNDOS (solo si el tramo empieza en 00:00): palabras exactas, imagen exacta, texto en pantalla, primer movimiento y primer sonido.
5. LO QUE EL VIDEO AFIRMA: cada regla, framework, paso, fórmula, número o consejo. Formato: "[mm:ss] El video dice que: … | Cita textual: '…'".
6. EJEMPLOS DEL VIDEO: cada ejemplo (débil vs. fuerte, antes/después, casos, nombres, números), textual, con la explicación textual del creador.
7. ESTRUCTURA Y RETENCIÓN: bloques con tiempos (gancho, desarrollo, giros, cierre, llamada a la acción); dónde usa preguntas, listas, promesas de lo que viene o cambios de ritmo.
8. LENGUAJE TEXTUAL: frases llamativas, coloquialismos, preguntas retóricas y todos los números concretos.
9. LLAMADA A LA ACCIÓN Y VENTA: qué pide, con qué palabras exactas, qué producto o servicio vende.
10. CONTROL DE COMPLETITUD: lista de tramos que NO transcribiste completos o que resumiste, y por qué. Si no hay, escribí "Tramo completo".
```

Para videos largos: un chat por tramo de 10 a 15 minutos ("TRAMO: 00:00–15:00", luego "15:00–30:00"…). Pegar cada tramo en el mismo archivo crudo, en orden.

## 2. Guardar la fuente cruda

- Archivo: `conocimiento/fuentes/crudas/AAAA-MM-DD_<creador>_<tema>.md`. Sin editar.
- Si llegó pegado en el chat, se guarda igual, con una línea que lo diga.
- Registrar en `conocimiento/criterio/fuentes.md`: ID de fuente (F-xx), creador, grupo de independencia (G1 Viralidad, G2… cada creador nuevo es un grupo nuevo salvo que pertenezca a uno existente), duración, idioma y archivo.

## 3. Chequear la fiabilidad de la transcripción

Antes de extraer, buscar y anotar:
- **Mezcla de respuestas:** frases cortadas a mitad de palabra, dos bloques con distinto estilo intercalados, timestamps que saltan hacia atrás.
- **Resumen disfrazado de literal:** saltos de varios minutos, "selección representativa", frases demasiado limpias.
- **Datos que solo aparecen en las secciones 5 a 9** y no en el habla ni en lo que se ve: valen **cero fuentes** hasta verificarlos.
- **Cifras o nombres que cambian** entre secciones (Viñals/Villar, 1,8 M/2,1 M).
- **Nombres de herramientas o modelos imposibles de verificar** ("ChatGPT-Astra 6").
Si la fiabilidad es baja, se extrae igual pero cada afirmación lleva la marca, y se pide re-transcribir el tramo con el prompt.

## 4. Extraer

Formato fijo (ver `conocimiento/fuentes/extracciones/SPEC_EXTRACCION.md`), en `conocimiento/fuentes/extracciones/extract_<fuente>.md`, con estas secciones:
0. Fuente y fiabilidad.
1. Tabla de afirmaciones: ID (prefijo nuevo y único) | afirmación | cita | timestamp | categoría | tipo (regla numérica, heurística, anécdota, opinión) | evidencia mostrada.
2. Ejemplos textuales con resultado declarado.
3. Fórmulas y procesos paso a paso.
4. Números y benchmarks.
5. Herramientas.
6. Cómo se vende el propio video (sesgos, qué vende).
7. Evaluación crítica (consistente con evidencia / dudoso / banderas rojas).
8. Transferencia al producto activo (qué aplica a pago, orgánico, oferta, edición; qué no).

Prefijos ya usados: B, T, S, A, H, J, L, LB. Elegí uno nuevo por fuente.

## 5. Deduplicar contra la base

Para cada afirmación:
- Buscar el principio existente (por palabra clave e ID) en `conocimiento/copy/`, `oferta-trafico/`, `organico-produccion/` y `criterio/banderas-rojas.md`.
- **Si ya existe:** sumar el ID de la afirmación a "Fuentes" del principio.
- **Si es nuevo:** crear el principio con el siguiente ID libre del archivo (HK-, ID-, GU-, LH-, OF-, MA-, MB-, HT-, OR-, FE-, BR-).
- **Si contradice uno existente:** registrar en `criterio/contradicciones-y-sesgos.md` y resolver con la regla de precedencia.

## 6. Puntuar confianza

Rúbrica (igual para todo el sistema):
- **Alta:** ≥2 grupos de independencia distintos lo sostienen Y es consistente con evidencia externa; o es aritmética verificable.
- **Media:** un grupo con evidencia mostrada (dashboard, caso con nombre), o varios videos del mismo grupo, sin contradecir evidencia externa.
- **Baja:** un solo grupo sin evidencia, o con contradicciones internas.
- **Descartada:** contradice evidencia externa, políticas de Meta o Hotmart, o las reglas del negocio. Se registra igual con el motivo, para que nadie la vuelva a proponer.
- **Norma:** regla del negocio o de política; no se discute con datos de gurús.

Una fuente nueva **independiente** que confirma un principio Media puede subirlo a Alta. Varios videos del mismo creador no suben confianza.

## 7. Actualizar la base

- Editar el principio: enunciado, confianza, fuentes, aplicación al producto. Nunca borrar el historial: si baja de confianza, se anota por qué.
- Ejemplos textuales nuevos al banco que corresponda (ganchos por mecanismo, estructuras de guion, pares de lenguaje).
- Si el cambio afecta una skill (regla nueva de Alta confianza o descarte importante), actualizar el SKILL.md correspondiente y correr `npm run skills:sync`.
- Si cambia el método del repo, editar el `playbook/` y anotarlo en `docs/aprendizajes.md`.

## 8. Cerrar el loop con datos propios

Esto es lo que hace que el sistema "no falle más":
- Todo principio aplicable con confianza Media o Baja se registra como **hipótesis** en `metrics/experimentos.csv` (una variable, métrica principal, umbral de decisión).
- Cuando hay resultado con muestra suficiente (ver MB-22: con 3 ventas el CPA tiene ±58 % de error; con 30, ±18 %):
  - **Confirmó:** el principio sube un nivel (máximo Alta) y se anota "confirmado en <producto>, <fecha>, <dato>".
  - **Refutó:** baja un nivel o pasa a Descartado para ese contexto, con el dato.
  - **No concluyente:** queda igual, se anota la muestra.
- Cada mes: comparar el puntaje de la rúbrica de ganchos con el hook rate real de todos los creativos (HK, sección 3.3). Si un criterio no predice nada, se revisa la rúbrica.
- **Regla de precedencia:** un dato propio con muestra suficiente pesa más que cualquier cantidad de videos.

## 8 bis. Cobertura

Corré `npm run kb:cobertura` (o `node tools/kb-cobertura.mjs --lista`). Lista las afirmaciones extraídas que ningún archivo de principios cita. Cada una se suma como fuente a un principio existente, crea uno nuevo o se registra en `contradicciones-y-sesgos.md` §5 con el motivo por el que no genera principio. La ingesta no se cierra hasta que el reporte da 0 sin citar.

## 9. Changelog

Una entrada en `conocimiento/CHANGELOG.md` por ingesta:

```
## AAAA-MM-DD · <fuente>
- Nuevos: HK-23, OF-45…
- Suben de confianza: MA-09 (Media → Alta: confirmado por L y <fuente nueva>)
- Bajan / descartados: …
- Contradicciones nuevas: CS-…
- Hipótesis nuevas en experimentos.csv: EXP-…
- Pedir re-transcripción de: …
```

Y la entrada de bitácora de siempre en `docs/bitacora.md`.

## 10. Errores de la primera tanda que este protocolo evita

| Problema | Qué pasó | Cómo se evita |
|---|---|---|
| Dos respuestas de Gemini mezcladas | Frases intercaladas a mitad de palabra en 3 archivos | Un solo documento por chat; control de completitud (sección 10 del prompt) |
| Resumen presentado como literal | La clase de 2:12 y el 3x30 tenían saltos de minutos | Tramos de 10–15 min; "selección representativa" prohibida |
| Datos inventados en la "documentación" | Cifras y casos que solo estaban en las secciones 5–9 | Datos sin respaldo en habla o pantalla valen cero |
| Compilado sin tiempos globales | Timestamps por bloque que no cuadraban | Bloques numerados con tiempos globales |
| Un creador en 9 videos parecía "consenso" | Víctor Heras aparecía como 9 fuentes | Grupos de independencia en la rúbrica |
| Reglas de orgánico pasadas a pago | "Abrí ancho" aplicado a anuncios | Todo principio declara su ámbito (pago, orgánico o ambos) |
