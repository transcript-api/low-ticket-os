# Miro: contenido organizado y banco de ideas

Los dos tableros se crearon a partir del chat entre Santiago y su socio y del centro de mando. Esta nota guarda su contenido en el repo, ordenado, y marca qué ideas siguen vivas. Releído el 2026-10-09.

| Tablero | Qué es | Link |
|---|---|---|
| Mapa de flujo (vigente) | Flujo horizontal con flechas, 5 zonas: Origen (chat) → Crítica y decisión → Qué hacemos → Embudo punta a punta → Control de anuncios | https://miro.com/app/board/uXjVEd4QLlE=/ |
| Primera versión, vertical | 10 marcos: Chat, Decidido vs abierto, Producto, Oferta y números, Embudo, Página, Creativos y videos, Meta Ads, Crítica y opinión final, Tareas | https://miro.com/app/board/uXjVEd4QDE0=/ |

**Cuidado con las cifras:** los tableros se hicieron cuando el principal costaba US$ 9,90. Hoy es US$ 15,90 con el Menú a US$ 4,90. Los equilibrios de abajo están viejos; los vigentes están en [`products/reto-cintura-28/02-oferta.md`](../products/reto-cintura-28/02-oferta.md) y en `tools/unit-economics.mjs`.

## 1. Origen: el chat (72 mensajes y audios)
Ver [`fuentes/chat-santi-amigo.md`](../products/reto-cintura-28/fuentes/chat-santi-amigo.md) y la parte 2, [`chat-santi-amigo-2.md`](../products/reto-cintura-28/fuentes/chat-santi-amigo-2.md).

## 2. Decidido, descartado y abierto (del tablero)
- **Decidido:** el PDF no es lo que vende, vende el sistema; landing de conversión directa (anuncio → página → checkout); hero que se entiende en segundos; el anuncio vende el problema; low ticket con bumps en el checkout; los bumps resuelven dos fricciones ("no sé qué comer", "voy a abandonar"); el principal debe sentirse completo y los extras son "extra opcional"; el quiz es corto y no va primero; glúteos y "el ex" son nichos aparte.
- **Descartado:** antes/después, "mentiras", reseñas inventadas, ángulo del ex y oferta "black" (rompen Meta y Hotmart).
- **Abierto entonces** (y cómo está hoy): precio del principal (hoy 15,90, test EXP-001); bumps en página o solo checkout (solo checkout); bump combinado a US$ 6 o US$ 3 + 5 por separado (EXP-003); seguimiento de 60 días (idea de continuidad, sin hacer); comidas dentro de la promesa o aparte; quiz en página (hecho, EXP-002); reseñas (pendientes de material real); cantidad de bumps (Hotmart admite hasta 9, por confirmar).

## 3. Producto e ideas de extras
- Principal: app de 36 días (hoy se suman semanas 6 y 7 de regalo), 22 ejercicios con 3 niveles, método del plato y 32 recetas, Plan B de 8 min, guías de eventos, hinchazón y sueño, guía en PDF, hojas A4.
- **Kit Antiexcusas (+US$ 3):** plan B, rutina exprés de 5-10 min, protocolo de regreso, "qué hago si comí de más".
- **Meal & Shopping Kit (+US$ 5):** menú de 7 días, lista de compras, recetas, porciones, sustituciones. Base: el Menú de 28 días ya existente.
- **Continuidad:** seguimiento de 60 días como venta siguiente (se abre con unas 50 ventas).
- **Aparte:** "Glúteos 28" como producto distinto.
- Riesgo conocido: la app abre con un link sin usuario; conviene entregarla desde el área de miembros de Hotmart.

## 4. Tres armados de oferta (cifras viejas, método vigente)
| Armado | Composición | CPA de equilibrio (con precios viejos) |
|---|---|---|
| A · Control | US$ 9,90 + menú US$ 4,90 | 9,23 |
| B · Chat | US$ 15 + 3 + 5 | 14,40 |
| C · Recomendada | US$ 9,90 o 14,90 + 3 + 5 | 10,13 o 14,32 |
Gana el armado con mayor **neto por visita**, en test de 7 días o 50 ventas, **una variable por vez**. Supuestos: 35 % toma el extra de US$ 3 y 25 % el de US$ 5; comisión de Hotmart 9,9 % + US$ 0,10; equilibrio = neto medio × 0,93.

## 5. Embudo y qué medir
Anuncio → página → quiz → resultado → oferta → checkout con extras → entrega → 7 emails (Día 0, 1, 3, 7, 14, 29, 35) → venta siguiente. Recuperación: carritos abandonados con cupón real en las primeras 24 h; prueba social real pedida en los emails 6 y 7 y como reseña en Hotmart. Medidas por paso en [`playbook/09-medicion-y-escala.md`](../playbook/09-medicion-y-escala.md).

## 6. Página (orden propuesto en el tablero)
Hero → dolor y reencuadre → quiz → resultado → producto por dentro → oferta → cierre. Lo vigente y las mejoras: [`products/reto-cintura-28/04-pagina.md`](../products/reto-cintura-28/04-pagina.md) y [`12-mejoras-pagina.md`](../products/reto-cintura-28/12-mejoras-pagina.md).

## 7. Creativos y videos
31 creativos (C01 a C31) y 15 videos (V01 a V15). Lote 1 para el test: C03 "No abandonás por falta de ganas", C04 "Mamá con poco tiempo", C09 "Lo de siempre vs…", C11 "No es un PDF, es una app", C15 "Plan B de 8 minutos", C17 "¿Cuántos lunes empezaste?". Otros: C06 "Centímetros, no kilos", C08 "Tu reto en un post-it", C10 "Día 1 de 28", C16, C23 (rioplatense), C24 "Tu mesada es tu gimnasio", C25 "Todo en tu celular". Videos: V01 "Mito de los abdominales", V02 "3 ejercicios para tu living", V03 "Abrí la app conmigo". Detalle y desfasajes de precio: [`07-meta-ads.md`](../products/reto-cintura-28/07-meta-ads.md).

## 8. Meta Ads
- **Estructura:** campaña R28 | TESTEO | VENTAS (objetivo Ventas). Conjunto A amplio LATAM lote 1a (US$ 10/día; MX, CO, CL, PE, EC, CR, PA, DO, GT; mujeres 25-55); B lote 1b; C rioplatense opcional (US$ 5/día; UY, AR, PY); retargeting US$ 3 a 5/día con visitantes de 7 días sin compradoras.
- **Reglas de corte:** 72 h sin tocar; apagar lo que gastó 1,5 × CPA de equilibrio sin vender; CTR de enlace bajo 0,8 % con más de 2.000 impresiones: cambiar gancho; CPA ≤ equilibrio: dejar correr; CPA ≤ objetivo con 3 ventas: escalar 20 % cada 48 h; frecuencia > 3 en 7 días: lote siguiente; 3 creativos nuevos por semana. **Recalcular con la oferta vigente** (hoy apagar ≈ 21,38, objetivo ≈ 9,27).
- **Meta no permite:** antes/después o cuerpos comparados; afirmar o insinuar algo de quien mira (edad, peso, salud); prometer kilos o plazos irreales; mostrar o apuntar a menores; que la página diga otra cosa que el anuncio. **Si restringe Compra:** optimizar por Vista de página de destino, medir con Utmify, dominio propio y no mandar datos de salud en eventos.
- **Antes de gastar:** portafolio comercial, cuenta en USD, píxel en página y Hotmart, compra de prueba registrada.

## 9. Crítica y opinión final de Claude (del tablero)
- **La ideal (mediano plazo):** sistema completo + extras opcionales + continuidad: sube el ticket sin subir la barrera de entrada.
- **La que más vende en frío:** anuncio que vende el problema, precio de impulso, compra en un paso, extras recién en el checkout.
- **Se combinan:** entrar barato, ganar margen con extras y continuidad, probar precio con datos.
- **Riesgos y lo que no se haría:** mentiras y contenido "basura" (reembolsos, chargebacks, suspensión); antes/después, videos de "clientas" y reseñas sin clientas reales; ángulo del ex y oferta "black"; quiz con frases que sirven para cualquiera; un precio de US$ 15 sin dato (se testea); glúteos en la misma promesa.
- **Opinión final (de entonces):** lanzar con control barato, extras en el checkout, página corta con quiz opcional, cero mentiras. Lo mejor de la charla: vender el sistema y no las páginas, bumps que resuelven fricciones y la palabra "extra opcional".
- **Faltaba definir:** contenido exacto de los kits, textos de cada extra, preguntas y resultados del quiz (hecho), tasa real de compra de cada extra, qué es éxito en cada etapa del embudo, dominio, píxel, Utmify y compra de prueba, entrega por área de miembros.

## 10. Tareas (kanban del tablero) → hoy
El estado vigente vive en [`products/reto-cintura-28/11-pendientes.md`](../products/reto-cintura-28/11-pendientes.md); no se actualiza más el kanban de Miro.

## Ideas del banco que todavía no se usaron
1. Combo de los dos extras a US$ 6.
2. Seguimiento de 60 días como upsell post-compra.
3. Cupón real de recuperación de carritos a las 24 h.
4. Producto aparte "Glúteos 28".
5. Retargeting con los creativos C28, C29, C14, C13, C18, C21 desde ~1.000 visitas.
6. Entrega por área de miembros de Hotmart.
