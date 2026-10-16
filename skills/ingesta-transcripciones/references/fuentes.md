# Índice de fuentes

Qué videos entraron a la base, de dónde salen, qué tan confiable es cada transcripción y dónde se pisan entre sí.

Regla de uso: antes de citar un ID de afirmación (B, T, S, L, A, H, J, LB), mirá acá la fiabilidad del video y del tramo. Una afirmación que sale de un tramo con fiabilidad **Baja**, o que Gemini solo pone en sus secciones de análisis, no cuenta como fuente para la rúbrica de confianza.

Estado: 2026-10-14. 17 entradas (16 videos más un documento de continuación). 764 afirmaciones extraídas.

---

## 1. Archivos crudos

Los originales están copiados sin editar en `conocimiento/fuentes/crudas/` (nombre nuevo → nombre de subida original):

| Archivo en el repo | Subida original |
|---|---|
| `2026-10-14_victor-heras_cambios-redes-y-teoria-del-faro.md` | `b20dd711-Pasted_text.txt` |
| `2026-10-14_victor-heras_trial-reels-comunicar-algoritmo.md` | `0f6f1360-Pasted_text.txt` |
| `2026-10-14_victor-heras_sistema-3x30.md` | `661e8d1a-Pasted_text.txt` |
| `2026-10-14_victor-heras_sistema-2-20-2000.md` | `badc6b8b-Pasted_text.txt` |
| `2026-10-14_adria-y-victor-heras_clase-2h12.md` | `015a926b-Pasted_text.txt` |
| `2026-10-14_compilado-low-ticket-brasil_version-condensada.md` | `f2f6745d-Pasted_text.txt` |
| `2026-10-14_compilado-low-ticket-brasil_literal-videos-2-a-7.md` | `68eb83a5-Pasted_text.txt` (idéntico a la primera parte del mensaje del chat) |
| `2026-10-14_pegado-en-chat_mentoria-jr-brasil-7-9-inventario-clase.md` | Texto pegado en el chat (antes `kb/fuente_inline_mensaje.md`) |

| Archivo crudo | Huella sha256 (12) | Líneas | Ruido de AI Studio | Contiene | Extracción |
|---|---|---|---|---|---|
| `b20dd711-Pasted_text.txt` | 475dc04d8d13 | 641 | Sí: 16 "ThinkingThoughts" y 16 "chevron_right" (líneas 1–65) | Dos respuestas intercaladas: V5 "faro" (A) y V1 + V2 parcial (B) | `extract_b20dd711.md` (B) |
| `0f6f1360-Pasted_text.txt` | 9f49c09a5d0d | 460 | No | Dos respuestas intercaladas: V2 desde ~02:04 + V3 (A, tiempos globales) y V2 cont. + V3 + V4 (B, tiempos locales) | `extract_0f6f1360.md` (T) |
| `661e8d1a-Pasted_text.txt` | 9025468ae340 | 400 | No | Sistema 3x30 (una respuesta, resumen con 9 secciones) | `extract_661e8d1a.md` (S) |
| `badc6b8b-Pasted_text.txt` | 120bee9a1971 | 315 | No | Sistema 2.20.2000 (una respuesta) | `extract_viralidad_varios.md` (H) |
| `015a926b-Pasted_text.txt` | d9340611ec0b | 312 | No | Clase 2:12 Adrià + Víctor: dos respuestas intercaladas (flujos X e Y) | `extract_viralidad_varios.md` (A) |
| `f2f6745d-Pasted_text.txt` | dfbb5c19db16 | 419 | No | Compilado BR, versión condensada (A-br): V1 literal, V2–V7 resumidos; se corta en §7 punto 5 | `extract_lowticket_br.md` (L) |
| `68eb83a5-Pasted_text.txt` | ef46f85978cf | 404 | No | Compilado BR, "continuación literal" V2–V7 (B-br) | `extract_lowticket_br.md` (L) |
| `fuentes/crudas/2026-10-14_pegado-en-chat_mentoria-jr-brasil-7-9-inventario-clase.md` | af01b91f8730 | 325 | No | Doc A: mentoría JR (J). Doc B: §7–9 del compilado BR (LB). Doc C: inventario de la clase 2:12 (A) | `extract_viralidad_varios.md` (J, LB, A) |

---

## 2. Grupos de independencia (para la rúbrica)

| Grupo | Quiénes | Cuenta como |
|---|---|---|
| G1 · Viralidad.com | Víctor Heras, Mike Moreno, Iván Rives, y la clase con Adrià (anfitrión; el contenido es de Víctor). Todos los videos F-01 a F-09 | **Una sola fuente**, aunque aparezca en 9 videos |
| G2 | Guilherme Borba | Fuente independiente |
| G3 | Arthur Gaspar | Fuente independiente |
| G4 | Guilherme Asvi + Alexander Máximo (mismo video) | Una fuente |
| G5 | Creador LATAM (sin nombre) | Fuente independiente |
| G6 | Creador en Nueva York (sin nombre) | Fuente independiente |
| G7 | André | Fuente independiente |
| G8 | Guilherme Ferreira | Fuente independiente |
| — | Datos que solo pone Gemini (marcados "solo A", "solo Doc B", "solo §5–§9", "no verificable") | **Cero fuentes** hasta verificarlos contra el habla o la pantalla |

Ojo: G2–G8 los juntó un curador desconocido en un compilado. Son independientes entre sí, pero la selección tiene sesgo de supervivencia (solo casos ganadores).

---

## 3. Índice de videos

Fiabilidad: **Alta** = literal y cruzada con pantalla o con otra respuesta. **Media** = paráfrasis cercana o literal sin cruce. **Baja** = resumen presentado como literal, mezcla de respuestas o datos inventados. El detalle de cada problema está en la sección 4.

| ID | Creador | Título / tema | Duración | Idioma | Archivo de origen | Extracción · IDs | Tipo | Qué vende el creador | Fiabilidad |
|---|---|---|---|---|---|---|---|---|---|
| F-01 | Víctor Heras (G1) | "Las redes sociales están cambiando: 5 cambios clave" | 27:49 | ES-España | `b20dd711` (flujo B, completo, sin registro visual) | `extract_b20dd711.md` · B01–B71 | Orgánico IG, marca personal | Consultoría 1 a 1 y mentoría Viralidad (high ticket) | Media |
| F-02 | Víctor Heras (G1) | "ChatGPT-Astra 6 y Trial Reels" (3 fases + PCN) | 19:27 | ES-España | `b20dd711` (00:00–08:48) + `0f6f1360` (≈01:45–19:22) | B72–B92 y T01–T43 (se pisan) | Orgánico IG | Consultoría Viralidad (high ticket) | Media (Alta donde coinciden las dos respuestas) |
| F-03 | Víctor Heras (G1) | "Aprende a comunicar: 6 cambios prácticos" | 17:45 | ES-España | `0f6f1360` (completo en B; cuasi literal en A hasta 10:40) | `extract_0f6f1360.md` · T45–T87 | Comunicación y venta consultiva | Sin venta directa (contenido de confianza) | Media |
| F-04 | Víctor Heras (G1) | "El nuevo algoritmo de Instagram (2026)": banquero, "El Aval", 3 movimientos | 16:38 según encabezado / 22:53 según tabla | ES-España | `0f6f1360` (solo respuesta B, condensada) | T88–T110 | Orgánico IG | Auditoría o implementación (DM "Algoritmo") | Baja |
| F-05 | Víctor Heras (G1) | "Por qué el 95% de marcas personales van a morir": teoría del faro y 5 apagones (video de YouTube) | 20:52 | ES-España | `b20dd711` (flujo A: habla 05:42–20:44, registro visual completo) | B93–B145 | Orgánico, marca personal | DM a @herasmedia, consultoría 1 a 1 (high ticket) | Media en 05:42–20:44; Baja en 00:00–05:42 |
| F-06 | Víctor Heras (G1) + 3 "mentorías filtradas" | "Cómo conseguir 100.000 seguidores en 90 días: el Sistema 3x30" | 1:06:08 | ES-España | `661e8d1a` | `extract_661e8d1a.md` · S01–S106 | Orgánico IG + embudo de historias/DM high ticket | Programas Viralidad, "reto de desintoxicación", consultoría | Baja (resumen disfrazado de literal) |
| F-07 | Víctor Heras (G1) | "Sistema 2 · 20 · 2.000" (100.000 € con una cuenta) | 28:11 | ES-España | `badc6b8b` | `extract_viralidad_varios.md` · H01–H45 | Orgánico IG + oferta high ticket (2.000 €) | Implementación y consultoría Viralidad | Media (la más limpia del lote; visual 00:00–00:57 no confiable) |
| F-08 | Adrià (anfitrión) + Víctor Heras (G1) | "Cómo ganar 100.000 seguidores y generar 100.000 € con una cuenta de Instagram" (clase) | 2:12:05 | ES-España | `015a926b` (flujos X e Y intercalados) + Doc C de `fuente_inline_mensaje.md` | A01–A90 | Orgánico IG + embudo a high ticket | Consultoría 1 a 1 "garantizada por contrato" | Baja |
| F-09 | Víctor Heras, Mike Moreno, Iván Rives (G1) con el cliente JR Fernández | "Mentoría real" (4:03:56 condensada) | 1:01:11 | ES-España | Doc A de `fuente_inline_mensaje.md` (pegado en el chat) | J01–J61 | Orgánico + producto + ventas con setter/closer | Mentoría y consultoría Viralidad (high ticket) | Media-baja |
| F-10 | Guilherme Borba @adsborba (G2) | Funnel "+500 Dinâmicas prontas para Catequese": página, 2 planes, downsell, 3 bumps, creativos | ~08:35 dentro de 34:49 | PT-BR, traducido por Gemini | `f2f6745d` (literal) | `extract_lowticket_br.md` · L01–L44 | Low ticket, tráfico pago | Curso "Low Ticket Automatizado" (con Claude Code) | Alta |
| F-11 | Arthur Gaspar @ogapar.digital / @ogaspar.digital (G3) | Vlog "24 horas rodando ofertas low ticket" (ABO, CBO, bid cap) | Slot de 2:00; el "literal" dura 20:35 | PT-BR | `f2f6745d` (resumen) + `68eb83a5` (literal) | L45–L86 | Tráfico pago, operación | Entrenamiento "de 0 a 1k por día" + Instagram | Media |
| F-12 | Guilherme Asvi + Alexander Máximo (G4) | "Como clonar e validar oferta na gringa" (disfunción eréctil, inglés → francés) | Slot de 3:00; literal ~09:50 | PT-BR | Ídem | L87–L115 | Low ticket "gringa", VSL, salud | Material por DM; afiliados de Minera ROI (solo Doc B) | Media-baja |
| F-13 | Creador LATAM, sin nombre (G5) | Por qué vender en LATAM y en español es más fácil que en Brasil | Slot de 3:00; literal ~09:20 | PT-BR | Ídem | L116–L130 | Tráfico pago, mercado | Mentoría "Do Zero aos 1.000 Dólares por Dia" | Media-baja |
| F-14 | Creador en Nueva York, sin nombre (G6) | Nicho tiendas de ropa: reposicionar y subnichar | Slot de 5:50; literal ~15:32 | PT-BR | Ídem | L131–L145 | Low ticket, ángulo y nicho | Grupo de espera de WhatsApp para su curso | Media-baja |
| F-15 | André @andreluiz… (handle incompleto) (G7) | Modelar la oferta "cards de enfermagem" de punta a punta | Slot de 7:55; literal ~12:00 | PT-BR | Ídem | L146–L161 | Low ticket, minería, producción | Link de socio de MoreLogin (solo Doc B) | Media-baja |
| F-16 | Guilherme Ferreira @hguiferreira (G8) | "Parte 2": creativos, pixel/Utmify, test y escala a +1k/día | Slot de 4:29 (u 11:04); literal ~14:16 | PT-BR | Ídem | L162–L179 | Low ticket, tráfico pago | Mentoría individual | Media |
| F-17 | Gemini (continuación del compilado) | §7 (fin), §8 y §9 de la versión condensada del compilado BR | — | ES (traducción) | Doc B de `fuente_inline_mensaje.md` | LB01–LB28 | Mezcla | — | Baja: la mayoría de los datos nuevos no está en ningún original |

Fechas: F-04 dice "a mitad del 2026". F-10 muestra un dashboard del 12/05/2026 al 18/06/2026. F-11 dice "hoy es 12 de septiembre" (2026). F-14 cuenta números de la pandemia (2020–2021). El resto **no tiene fecha**: no se sabe si sus casos son de antes o después de los cambios de algoritmo que citan.

---

## 4. Problemas de transcripción por video

### F-01 · V1 "5 cambios clave" (B01–B71)
- Sin registro visual: lo que "se ve" no existe para este video.
- Duplicación interna típica de Gemini: [05:16] y [05:40] repiten "Piensa qué ve alguien que llega por primera vez…"; [05:22] y [05:50] repiten "50 personas / 50 vídeos".
- Loop abierto sin cerrar: promete "un plan de 30 días" al final y no aparece.
- Cifras dichas vs mostradas (en el mismo archivo): Alejandro "20.000 seguidores nuevos" contra perfiles de "20,6k" y "86,3k".

### F-02 · V2 "Trial Reels" (B72–B92, T01–T43)
- Está partido en dos archivos con dos líneas de tiempo: en `0f6f1360` la respuesta A usa tiempo global (global = local + 27:49) y la B, tiempo local. El tramo 02:04–08:48 está **duplicado** entre `b20dd711` y `0f6f1360`.
- Mezcla frase por frase: "[09:15] Una PCN es una Pregunta Común de tu Duplica el contenido que haces hoy" (definición de PCN + "Número 1: Duplica…").
- Timestamp imposible: "[10:05] 147 millones de visitas…" aparece entre [00:55] y [01:17] (debería ser ~[01:05]).
- Nombres de modelos no verificables: "ChatGPT-Astra 6" (con "8 GB de RAM, 16 mejor", raro para un servicio en la nube) y "Claude Fable 5". Pueden ser mala transcripción o invento.
- Gemini inventa en su tabla un CTA con palabra clave ("Trial Reels") que no está en el habla, y una "regla de oro" ("no duplicar sin 3 variables") que contradice la Fase 1.
- Discrepancia entre respuestas: la pausa del video es "(el presentador se acomoda)" en B y "[chasquea los dedos, cambia el fondo]" en A.

### F-03 · V3 "Aprende a comunicar" (T45–T87)
- Dos versiones que no coinciden: "si no está terminado no vamos a poder entregárselo" (B) vs "si no se lo entregamos no vamos a poder cobrárselo" (A).
- El "ejemplo integrador" y el "desglose" los numera Gemini, fuera del orden de los 6 puntos.
- Cita de Warren Buffett deformada (agrega "mañana").

### F-04 · V4 "El algoritmo / El Aval" (T88–T110)
- Resumen disfrazado de literal: encabezados "Caso 1 / Error / Qué hicimos / Resultado / Números reales" y saltos de 50–90 s ([03:22]→[04:14], [07:32]→[08:46], [10:44]→[11:38], [14:11]→[15:40]).
- Duración incoherente: 16:38 en el encabezado, 22:53 en la tabla.
- Cifras que cambian: 4.000 vs 4.400 seguidores; +35.000 vs 30.000 con un video; "en un mes" vs "en días"; "3 movimientos" vs 4 pasos en "Qué hicimos".
- Caso Giranda: "más de 290.000 en 3 meses" acá y en F-07, "250.000 en 90 días" en F-06.

### F-05 · V5 "Teoría del faro" (B93–B145)
- **Falta el habla literal de 00:00–05:42.** Ese tramo solo se reconstruye con el registro visual y el resumen.
- La sección "Lenguaje textual" de Gemini cita frases que no están en el tramo disponible ("141 mentorías en directo", "10% audiencia que llega al final"…). No verificables.
- Cifras dichas vs pantalla: Bernardo "más de 1,8 millones" vs "2,1M"; Instalaciones Llorente "menos de 6.000" vs "6.985".
- Conflaciones de Gemini: "45 € por sesión a más de 3.000 € por venta en 3 meses" (los 3 meses son la promesa al cliente de Laura); "45 € la hora" vs "45 € por sesión"; atribuye "cursos" a Sergio Llorente, que nunca los nombra.
- Loops prometidos y no cerrados: "la lista del faro" y "un giro positivo con datos de su cuenta".

### F-06 · Sistema 3x30 (S01–S106)
- Gemini lo llama "transcripción literal completa y exhaustiva" y es un **resumen**. Saltos sin texto: 12:28→14:12, 15:44→17:47, 19:55→22:20, 24:30→25:26, 39:20→42:25, 50:53→54:15, 58:34→60:38→63:15. Elipsis "(...)" en 04:58 y 13:28.
- La misma cita con dos redacciones (CTA final en §2 vs §9).
- Datos que solo están en §5–§8 (velas, caso Susana, Ramón "150.000 $/mes a los 64 años", "R.I. inicial cercano al 100%", giro "en el segundo 45"): tratarlos como no verificables.
- Cruces: "974 mil visitas" de Susana es la cifra de seguidores de la tarjeta de Melkis; "1.080 a 1.321 impresiones cayendo" describe como caída números que suben.
- Contaminación probable con F-07: el recap usa ratios 5% / 30%, que contradicen el 40–100% dicho en 09:48.
- Rótulo "EL ARRANQUE" repetido en la Fase 1 y la Fase 2.
- Cifras de casos contradictorias: Bernardo 500k en 45 días vs 20k→340k en 30 días; tarjeta 644k vs "1,7 millones"; Alfredo 100k en 30 días vs 800k "en meses" vs 373k en IG; Jordan 3,3M / 3,4M / 5M.

### F-07 · Sistema 2.20.2000 (H01–H45)
- Una sola respuesta, sin intercalado. La §2 es paráfrasis cercana, no palabra por palabra (saltos 03:47→04:03→04:30; 10:40→11:36; 16:13→18:41).
- **El registro visual de 00:00–00:57 es casi idéntico a la apertura del 3x30** (`@tucuenta` con 117k y "90 Días", "Dejando de publicar", "Sin bailes tontos", las mismas tarjetas de casos). O comparten intro o Gemini copió el visual de otro video de la misma sesión. No confiable.
- §5 nombra "sorteos" que el habla no dice (cruce con S13/S15). §6 agrega detalles que no están en el habla ("500 contactos más cercanos", "superó los 370.000").
- Contradicción interna: "5 de cada 20 (25%)" [09:55] vs "entre el 10 y el 20%" [10:40]; la §8 lo traduce como "2 a 4 de cada 20".

### F-08 · Clase 2:12 Adrià + Víctor (A01–A90)
- **Dos respuestas intercaladas frase por frase, a veces a mitad de palabra**: "cómo generar 100.0 estrategias sus clientes facturen… 00 euros"; "1Ma. Quiero que agarres papel"; "comisión media de 1[…]5.000€".
- Ninguna es literal: X se declara "selección representativa"; Y salta de 07:18 a 10:26 y después resume por bloques. Desde ~33:40 los tiempos de Y están comprimidos (Checklist 44:48 vs 62:27 en X y C).
- Hueco: X no describe 45:00–53:12.
- **Nombres que cambian**: Adrià Solà Pastor / Adrián Sáenz; Cristian Viñals / Cristian Villar; Julieta Tijeras / Julieta Tejería (@julietatejeria); "Padre Bueno" / "Padre Mediocre" vs Padre Rico.
- Cifras que no cierran: "100 ventas de 1.000 € = 3 al mes o 1 cada 3 días" (1 cada 3 días ≈ 10 por mes); Julieta 1.000 USD/día "≈ 20.000 USD/mes" (serían 30.000); Diego "10,9M", la misma cifra que Tío Luzardo (posible cruce); Alflo "ventas" vs "comisiones".
- Calco del inglés: "4,3 billones de visitas" (*billion* = 4.300 millones).
- Numeración de bloques distinta entre las hojas impresas y la §7 de X.

### F-09 · Mentoría JR Fernández (J01–J61)
- Gemini la titula "selección cronológica representativa y completa por fases": **no es literal**. Huecos de 20:09→23:35, 31:08→41:47 y 58:30→60:38. Además el original duraba 4:03:56; lo que vemos ya es un recorte editado por el propio creador.
- Timestamps mal asignados: las citas de Iván en §5 (35:56, 39:20, 44:35) caen antes de que Iván hable en §2 (41:47).
- Datos que solo están en §8: "30–45 videos en una jornada de 6–7 h", "10–15 horas mínimas de formación".
- Error de lectura: "1. Agua (Agencia / Servicio)" (probable cruce con la palabra clave "AGUA").

### F-10 a F-16 · Compilado low ticket Brasil (L01–L179)
Problemas comunes a todo el compilado:
- **Duraciones imposibles**: los "literales" de V2–V7 suman ~90 minutos en un compilado de 34:49. O el compilado traía los videos completos, o Gemini reconstruyó o expandió el texto.
- **Dos líneas de tiempo incompatibles** dentro de la versión condensada (Ficha: Borba 00:00–02:00; §3: Borba 00:00–08:35). La §5 cita a Gaspar en [05:45] y a Alexander en [06:20], cuando en esos minutos habla Borba.
- **Traducción**: el original es portugués; todo lo que tenemos es la traducción de Gemini, a veces con interpretación metida (ver LB21: "dar um sustinho" traducido como "reiniciar el aprendizaje", que Gaspar no dice).
- **"ROI" mal nombrado**: todos llaman ROI a facturación ÷ gasto, que es ROAS.
- Datos que **solo están en la versión condensada (A)** y no en la literal: umbral "ROI 2.0" de Gaspar, regla de Ferreira "ROI 1,5–2 sube 50%; duplicar con 2-4-8-16", CPM de Brasil R$80–100, salarios mínimos (R$1.412 es el mínimo de 2024), DreamFace, el "español" de la Lead 3, "CBO 1-1-5", precios de los bumps de Borba, "Lista con 1000 proveedores", "Grow Sport". Tratarlos como posible invento.

Por video:
- **F-10 Borba**: lo más fiable de toda la base. Literal, con cifras que cruzan con la pantalla (Utmify R$43.226,70; IC 31,2%; pop-up R$17,90). Los guiones de los anuncios vienen cortados con "...". Navegador "Safari" en un momento y "Chrome" en otro; archivos "CTV 2/3" vs "Criativo 1/2" en el habla.
- **F-11 Gaspar**: ROI 2,35 (literal) vs 2,36 (condensado). Lucro LATAM ~500, −80 y 366 en distintos momentos. Handle @ogapar.digital (pantalla) vs @ogaspar.digital (Doc B).
- **F-12 Asvi y Alexander**: la condensada infla ("más de 150" anuncios vs "más o menos 150"), exagera la mejora de la Lead 3 (en el literal la retención arrancó en 25%, cayó a 15% y la Lead 3 recuperó 24%), convierte un acumulado de R$196k en "mensual" e inventa una cita sobre "más cuentas para esquivar la estacionalidad". "R$40 mil por semana" y "por mes" en boca de la misma persona; lucro 8k vs 6k.
- **F-13 LATAM**: la Ficha condensada lo llama "Infoproductor de Grow Sport" (no aparece en ningún otro lado). Lo que muestra es facturación (US$142k), no lucro (ROAS 1,72 según pantalla). CPM R$14,20 contra los R$40–54 de Gaspar para LATAM.
- **F-14 Nueva York**: la condensada atribuye los R$200 mil a la lista de proveedores con ROI > 5; en el literal, R$200 mil es la suma de todos sus productos y el ROI 5–6 es del curso de R$27. Números de la pandemia, posiblemente viejos.
- **F-15 André**: el dashboard de R$8k **no corresponde a la oferta que demuestra**. "Un anunciante con 10 resultados" (condensada) vs "10 anuncios activos" (literal).
- **F-16 Ferreira**: "7 ventas" a R$10 o R$22,90 nunca dan R$115,93. Timestamps desfasados ~1 min entre versiones. Nombres de bumps distintos ("Pack de Slides" vs "Slides Prontos").

### F-17 · Doc B, continuación del compilado (LB01–LB28)
- Es el final de la versión condensada (A-br), que se había cortado en §7.
- **No están en ningún original**: El Chavo del Ocho, "111% entregue", Minera ROI, link de socio de MoreLogin, "mentorías grupales disfrazadas", R$207 de bonos, VTurb R$97/mes, MoreLogin US$5,40, escalón de R$800, ROI 2,84, IC de 16,9–28,6%, CPC LATAM R$0,60–0,80 vs Brasil R$0,88–1,50, R$300,09, mentoría LATAM "en vivo y WhatsApp". Pueden venir de tramos no transcriptos o ser invención. **No usar como benchmark.**
- Mezcla las dos líneas de tiempo del compilado: [12:17] y [15:35] tienen atribución dudosa.

---

## 5. Superposiciones y duplicados

| Qué se pisa | Dónde | Qué hacer |
|---|---|---|
| V2 "Trial Reels", tramo 02:04–08:48 | B72–B92 (`b20dd711`) y T01–T21 (`0f6f1360`) | Es el mismo texto. Contar una sola vez. Preferir la versión donde coinciden las dos respuestas |
| V1 "5 cambios" | Completo en `b20dd711`; en `0f6f1360` solo aparece en la tabla comparativa (T44) | T44 no es fuente nueva |
| V3 y V4 | Listados como títulos en la Ficha de `b20dd711`; contenido solo en `0f6f1360` | — |
| Sistema 3x30 (F-06) y Sistema 2.20.2000 (F-07) | ITV 5%/30%, "malas acciones", migración de Alfredo, 20 videos, 10–20% de ganadores, embudo dentro del video, casos Julieta y Ramón; **intro visual casi idéntica** | Mismo creador: no suman independencia. Tratar el visual 00:00–00:57 de F-07 como no confiable |
| Clase 2:12 (F-08) con F-06, F-07 y F-09 | APC/R.I., filtro 5/50, embudo en el video, 20 videos, niveles de consciencia, CTA con palabra clave | Mapa completo en `extract_viralidad_varios.md` (al principio). Ver la corrección de IDs J en la sección 6 |
| Compilado BR condensado y literal | `f2f6745d` (A-br) y `68eb83a5` (B-br) son el mismo compilado | Ante diferencias, manda la literal (B-br). Lo "solo A" queda como no verificable |
| Doc B de `fuente_inline_mensaje.md` | Es el resto de `f2f6745d` (§7 final, §8, §9) | LB solo suma lo que no estaba en L |
| "Continuación literal V2–V7" pegada en el chat | Idéntica a `68eb83a5` | No se guardó dos veces |
| Doc C de `fuente_inline_mensaje.md` | Tercera respuesta de Gemini sobre la clase 2:12 | Sirve para cruzar X; los tiempos de X y C coinciden |

Casos que se repiten entre videos de G1 (no cuentan como evidencia nueva cada vez que aparecen, y sus cifras cambian):

| Caso | Aparece en | Cifras que no coinciden |
|---|---|---|
| Giranda | F-04, F-06, F-07 | 250k en 90 días vs 290k en 3 meses; 4.000 vs 4.400 iniciales |
| Bernardo Jurado | F-05, F-06, F-07 | 500k en 45 días vs 340k en 30; 644k vs 1,7M vs 1,8M vs 2,1M |
| Alfredo Marín | F-06, F-07, F-08, F-09 | 500 vs 507 migrados; 100k en 30 días vs 800k vs 373k |
| Laura (logopeda) | F-05, F-07 | 3.000 € "por venta" vs programa de 2.000 € y "más de 3.000 € por cliente" |
| Julieta Tejería / Tijeras | F-06, F-07, F-08 | ~20k USD/mes vs +25k USD/mes |
| Ramón Páez | F-05, F-06, F-07, F-09 | 150k USD/mes solo en §6 de F-06 |
| Jordan Belfort, El Sensei | F-05, F-06, F-08, F-09 | Jordan 3,3M / 3,4M / 5M |

---

## 6. Integridad de IDs en las extracciones

Todos los IDs citados existen (chequeo automático del 2026-10-14). Pero **el mapa de solapamientos de `extract_viralidad_varios.md` y dos reglas de la Fuente H apuntan a IDs J equivocados** (desfase de ~2 a 4 números; el mapa se escribió antes de cerrar la tabla J). Quien sintetice, usá la columna "correcto":

| Dónde | Dice | Tema | Correcto |
|---|---|---|---|
| Mapa fila 1 y H §8.b | J09 | Cuenta de 14k "muerta" | J11 |
| Mapa fila 2 y fila 20 | J47 | Mike pone "Ads" en Exposición | J51 |
| Mapa fila 4 | J19–J22 | Círculos de consciencia | J21–J22 |
| Mapa fila 5 | J18 | "¿Lo puede comprar el 50%?" | J20 |
| Mapa fila 6 | J24–J29 | Transición en el segundo 30 | J26–J29 |
| Mapa fila 7 | J42 | Cuenta de pruebas: 2 de 50–60; 5 de 7 | J46 |
| Mapa fila 8 | J19 | Niveles como círculos | J21 |
| Mapa fila 10 y fila 20 | J15–J17 / J15–J16 | En pago la lógica lineal funciona; "50 clics" | J17–J19 |
| Mapa filas 11 y 17 | J39 | Ramón Páez con peto y casco | J43 |
| Mapa fila 12 | J30 | Pantalla verde / IA | J34 |
| Mapa fila 14 | J26, J48 | CTA con palabra clave + ManyChat | J31, J52 |
| Mapa fila 15 | J44–J46 | High ticket | J48–J50 |
| Mapa fila 18 | J35–J36 | Hasta 3,5 días por mes | J39 (y J40) |
| Mapa fila 19 | J28 | "No es cómo empiezas, es cómo terminas" | J32 |
| H §8.c y regla RH6 | J53 | Victoria rápida / "15 Days to Win" | J58 |

Otra trampa de nombres: en `extract_lowticket_br.md`, "A" y "B" marcan **versiones** del compilado ("[solo A]", "A §6"), y en `extract_viralidad_varios.md` A y B también son **prefijos de afirmaciones**. Cuando cites, escribí siempre el ID completo (A42, B105) y las versiones como [A-br] / [B-br].

---

## 7. Qué conviene re-transcribir (con el prompt nuevo)

Prioridad según lo que le sirve a Reto Cintura 28 (tráfico pago low ticket primero):

1. **Compilado BR completo (F-10 a F-16)**, por tramos, con el original en portugués y la traducción debajo. Objetivo: confirmar o descartar todo lo "solo A" y lo de F-17, y fijar la línea de tiempo real.
2. **Mentoría JR (F-09)**: los huecos 20:09–23:35, 31:08–41:47 y 58:30–60:38. Es el único video de G1 que distingue anuncio pago de orgánico.
3. **Clase 2:12 (F-08)**: entera, en una sola respuesta por tramo (hoy no hay ni una versión literal).
4. **F-05 "faro"**: el habla de 00:00–05:42.
5. **F-06 3x30**: los saltos listados en la sección 4.
6. **F-04 algoritmo**: entero (hoy es un resumen).
7. **F-07**: el visual de 00:00–00:57, en un chat nuevo, para saber si la intro es compartida o copiada.
