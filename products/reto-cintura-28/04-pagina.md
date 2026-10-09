# 04 · Página

## Estado

- **Versión actual (publicable, sin publicar):** página del centro de mando, con estructura de 10 secciones. Contenido bueno, diseño que Santiago considera feo.
- **Próximo paso:** rehacer con el plan de abajo. **Antes de construir**: proponer 2 direcciones visuales y esperar el OK de Santiago.
- **Config:** `landing-config.json` controla `checkoutUrl`, `price`, `priceNote`, `priceLabel`, `metaPixelId`, `utmifyScript`, `soporte`, `soporteTexto`. Mientras `checkoutUrl` esté vacío, los botones bajan a la sección de precio.

## Qué hay hoy en la página publicable (revisado el 2026-10-08)

Estructura del `index.html` actual, en orden: hero ("28 días para afinar tu cintura", precio visible) → 4 pilares (Mover, Comer, Sostener, Día 28) → "Si te pasa esto, este reto es para vos" (dolor) → reencuadre ("No es falta de ganas. Es que te dieron planes imposibles") y tabla "Lo de siempre / Reto Cintura 28" → "No es solo un PDF. Es tu app" (5 tarjetas) → "Mirá la guía por dentro" (páginas reales) → "Así son tus 28 días y la semana de regalo" → "Así es un día por dentro" (Día 12) → comparadores de platos tocables (milanesa, fideos, desayuno, merienda) → "¿Es para vos?" → 3 pasos → "Todo lo que recibís" → precio (con garantía de 7 días) → preguntas frecuentes → cierre. Hay un comentario para sumar testimonios reales con permiso por escrito.

**Lo que está bien:** el producto por dentro con capturas reales, el reencuadre de la culpa, los comparadores de platos, "es para vos / no es para vos", la garantía visible, el aviso de que no se promete un número, el comentario que prohíbe testimonios inventados.

**Lo que corregiría (a validar con Santiago):**
1. **Precio:** `landing-config.json` dice US$ 9,90 y "Precio de lanzamiento". Vigente: US$ 15,90. Mantener "de lanzamiento" solo con fecha real de suba.
2. **Edad y cuerpo dirigidos a quien mira:** "Sentís que después de los chicos, o de los 40, el cuerpo ya no responde" y "La ropa te aprieta en la cintura". Pasar a conducta o tercera persona (ver [10-decisiones.md](10-decisiones.md)).
3. **No hay quiz ni hero con el titular del socio** ("Transformá tu cintura en 28 días desde tu casa"): es el cambio de estructura propuesto abajo.
4. **No aparece el extra** (Menú Acelerador) ni el encuadre "completá tu reto": se ofrece en el checkout; la página puede anticiparlo sin vender dos cosas.
5. La página dice "después de los 40, ¿sirve?" en el FAQ: está bien como pregunta de quien lee.

## Cambios que quiere Santiago (2026-10-09)

- **Objetivo:** mejorar la conversión; que quien llega al final toque el checkout "sin pensar". Dice que el diseño está muy lindo pero hay "algo que falla": **pendiente que Santiago pase su lista de lo que cree que frena la conversión**.
- **Quiz:** sí, testearlo en la página (propuesta del socio: "¿El Reto Cintura 28 es para vos?"), con preguntas persuasivas basadas en cómo funcionan los quiz que más convierten. Investigación: [`docs/investigacion-quiz-funnels.md`](../../docs/investigacion-quiz-funnels.md). Reutilizar el diseño del quiz de la app.
- **Visual:** probar dos direcciones (oscuro premium / claro editorial) con sensación de urgencia y la misma prolijidad actual.
- **Precio:** Santiago pidió mostrar US$ 99,38 tachado y 84 % de descuento. Condición del repo: solo si ese precio se cobra de verdad (fecha real de fin del cupón y precio que sube). Si no, se muestra el precio final. Pendiente de confirmar. Ver [`compliance/precios-y-descuentos.md`](../../compliance/precios-y-descuentos.md).
- **Urgencia:** solo con un fin real. El contador del checkout hoy no lo cumple.

## Quiz de ventas: propuesta (pendiente de OK)

Nombre: **"¿El Reto Cintura 28 es para vos?"** Test de 1 minuto, 6 preguntas, una por pantalla, avanza al tocar. Sin email ni datos corporales. Ningún dato va al píxel.

| # | Pregunta | Opciones (en sus palabras) |
|---|---|---|
| 1 | ¿Qué te pasó las otras veces? | Empecé con todo y a la semana abandoné · Me quedé sin tiempo · Las dietas eran muy estrictas · Me aburrí · No veía resultados · Nunca empecé en serio |
| 2 | ¿Cuánto tiempo real tenés en un día normal? | 10 a 15 min · 20 a 30 min · Depende del día |
| 3 | ¿Qué describe mejor tu día a día? | Poco tiempo y mucho para hacer · Trabajo muchas horas · Cuido a otros · Otra situación |
| 4 | ¿Qué te gustaría que sea distinto esta vez? | Que alguien me diga qué hacer cada día · Un plan para los días que no puedo · Comer normal, sin prohibidos · Ver mi avance |
| 5 | ¿Qué querés sentir el Día 28? | Que la ropa me quede cómoda · Más energía · Terminar algo por primera vez · Sentirme más fuerte |
| 6 | Si hoy tuvieras el plan armado día por día, ¿cuándo empezarías? | Hoy · Mañana · Esta semana |

**Resultado:** "Por lo que respondiste, no necesitás otro plan complicado." Repite sus respuestas ("Me contaste que…"), muestra la parte del producto que responde a su motivo (tiempo → Plan B de 8 min; dietas → plato armado y 32 recetas; abandono → plan día por día y protocolo de regreso; aburrimiento → cada semana cambia el ritmo; resultados → centímetros, ropa y fuerza), y cierra con precio, garantía de 7 días y un solo botón al checkout.

Sin "tengo más de 40" ni preguntas de peso o cuerpo.

**Dos versiones para el test (EXP-002):** A = página directa; B = página con el quiz después de los beneficios.

## Estructura propuesta (con aportes del socio)

| # | Sección | Contenido |
|---|---|---|
| 1 | Hero | RETO CINTURA 28. Transformá tu cintura en 28 días desde tu casa. 20-30 min · sin gimnasio · sin dieta. [Quiero empezar] y precio visible |
| 2 | Dolor y reencuadre | "No es falta de ganas: te dieron planes imposibles". Una hora de gimnasio, dietas de hambre, todo o nada |
| 3 | 2 o 3 beneficios | Plan día por día · plan B de 8 minutos · comida normal |
| 4 | Quiz corto (a testear) | 4 preguntas de opción múltiple |
| 5 | Resultado personalizado | "Por tus respuestas no necesitás otro plan complicado: necesitás un sistema que te diga qué hacer cada día, desde casa, con alternativa para los días sin tiempo. Por eso creamos el Reto Cintura 28" |
| 6 | Producto por dentro | Capturas reales de la app, páginas reales de la guía, 5 semanas ("la 5 de regalo"), cómo es un día |
| 7 | Comida | Comparadores tocables: plato de siempre contra versión Cintura |
| 8 | Para quién es y para quién no | Filtro honesto |
| 9 | Oferta | Qué incluye, precio, garantía de 7 días, **un solo botón al checkout**. Los extras, en el checkout |
| 10 | Preguntas, cierre y aviso | FAQ, imagen y botón, aviso de salud, barra de compra fija en celular |

Lo que **no** va: testimonios, reseñas, cifras de clientas, contadores, antes/después, videos de "clientas". Cuando existan reseñas reales con permiso, entran en la sección 6 o 8.

## Quiz (propuesta, pendiente de OK)

**Principio:** personaliza, no es la puerta de entrada. El resultado sale de lo que respondió. Ningún dato va al píxel.

Preguntas de opción múltiple, rápidas:

1. ¿Qué te frena más hoy? Mi tiempo · No sé qué hacer cada día · No sé qué comer · Abandono a la primera semana
2. ¿Cuánto tiempo real tenés en un día normal? Menos de 10 min · 10 a 20 min · 20 a 30 min · Depende del día
3. ¿Qué te daría más tranquilidad? Que me digan qué hacer cada día · Un plan para los días malos · Saber qué comprar y cocinar · Ver mi avance
4. ¿Con qué empezarías hoy? Un entreno corto · Mi plan de comidas · Medirme y marcar el Día 0

Resultados (uno por respuesta principal de la pregunta 1):

| Respuesta | Resultado | Ángulo | Extra sugerido en el checkout |
|---|---|---|---|
| Mi tiempo | "Necesitás un plan que entre en tu día" | 20-30 min y plan B de 8 min | Kit Antiexcusas |
| No sé qué hacer | "Necesitás un sistema que te diga qué hacer cada día" | Plan día por día con timer | — |
| No sé qué comer | "Necesitás un plato armado, sin contar calorías" | Método del plato, 32 recetas | Meal & Shopping Kit |
| Abandono a la primera semana | "Necesitás una salida para los días malos" | Plan B y protocolo de regreso | Kit Antiexcusas |

Todos cierran con el mismo producto, el mismo precio y el mismo botón.

Test: EXP-002 (con quiz contra sin quiz, una variable, mismo tráfico). Si el quiz baja la conversión, se queda como bloque opcional o se elimina.

## Variantes A/B

| Variante | Una idea que cambia | Estado |
|---|---|---|
| A | Página del centro de mando (control) | Lista, sin publicar |
| B | Hero del socio + quiz mid-page | A construir tras OK |
| C (futuro) | Precio arriba / hero más directo para frío | Pendiente |

## Sistema de diseño (marca)

- Tipografías: Bricolage Grotesque (títulos, 800, eje de ancho 75-100, interletra −0,03 em) + Instrument Sans (texto).
- Colores: tinta #1C1324, tinta 2 #463A4E, gris #6E6475, fucsia #E5156E (único acento: botones), lima #CFF56A (solo logros y "de regalo"), rosa #FFE4EE, blush #F3D3D0, fondo #FCF9F7, tarjetas #FFFFFF.
- Tarjetas con radio 22-30 px y sombra suave, botones pastilla, fotos de celular con luz natural.
- Logo: cuadrado redondeado fucsia con anillo de progreso lima y "28" blanco.
- Mobile primero (390 px), luego escritorio (1440 px). Barra de compra fija en celular.

## Técnica

- HTML/CSS/JS sin dependencias, rutas relativas, publicable en Cloudflare Pages con dominio propio.
- Píxel: PageView al cargar, ViewContent al ver la sección de precio, InitiateCheckout al tocar un botón de compra (los botones llevan `data-buy`; los textos editables `data-cfg`).
- Utmify: si `utmifyScript` es true, cargar el script de Utmify con `data-utmify-prevent-subids`.
- Primera pantalla en menos de 2,5 s en 4G. Imágenes WebP con lazy loading.
- No enlazar ni nombrar en la página las rutas privadas de la app y de gracias.

## Eventos del píxel

- [ ] PageView · [ ] ViewContent · [ ] InitiateCheckout · [ ] Purchase (Hotmart)

## Para rehacerla con otro agente (prompt resumido)

Producto, marca y reglas están en este archivo y en [00-brief.md](00-brief.md). Reglas: nada de testimonios ni contadores falsos, nada de antes/después ni lenguaje que avergüence el cuerpo, imágenes de IA marcadas como ilustrativas, aviso de salud en el pie, solo mayores de 18, nada de marcas ni fotos de otras cuentas. Entregable: carpeta lista para subir con capturas en celular y escritorio y lista de qué se cambió y por qué. Si es variante B, cambiar una sola idea grande.
