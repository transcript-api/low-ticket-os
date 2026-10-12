# 05 · Página de ventas

**Objetivo:** que quien entra frío entienda en segundos qué es y para quién es, y llegue al checkout.

## Principios (de la experiencia con Reto Cintura 28)

1. **Landing de conversión, no artículo.** Experiencia de compra directa. Una sola salida: el checkout.
2. **Vende el sistema, no la cantidad.** Se muestra el producto por dentro con capturas reales.
3. **Coherencia con el anuncio.** Misma promesa, mismo vocabulario. Si el anuncio habla del problema, el hero también.
4. **Mobile primero.** El 90 % del tráfico de Meta es celular. Barra de compra fija.
5. **Rápida.** La primera pantalla se ve en menos de 2,5 s en 4G. Imágenes WebP con carga diferida.
6. **Sin inventos.** Sin testimonios, cifras o contadores falsos.

## Estructura de referencia

| # | Sección | Qué hace |
|---|---|---|
| 1 | Hero | Promesa + plazo + qué le sacamos ("sin gimnasio, sin dieta") + botón + precio visible |
| 2 | Dolor y reencuadre | La persona se reconoce. El enemigo es el plan, no ella |
| 3 | 2 o 3 beneficios | Respuesta corta a "¿qué gano?" |
| 4 | Quiz corto (opcional) | Personaliza el mensaje según su problema |
| 5 | Resultado personalizado | Une su respuesta con el producto ("por eso creamos…") |
| 6 | Producto por dentro | Capturas reales, plan de un día, comida, qué incluye |
| 7 | Para quién es / no es | Filtra y sube la confianza |
| 8 | Oferta | Precio, garantía, un botón. Los extras se ofrecen en el checkout |
| 9 | Preguntas frecuentes | Objeciones reales |
| 10 | Cierre | Imagen + botón, aviso de salud, barra de compra fija |

## El quiz

Se prueba como **personalización**, no como puerta de entrada.

- Orden: hero → beneficios → quiz → resultado → oferta. Si lo primero que ve es "Respondé 4 preguntas", parece una página de quiz y agrega fricción.
- **Corto:** 4 preguntas, opción múltiple, rápidas. No "descubrí tu tipo de cuerpo".
- **El resultado depende de lo que respondió** (constancia, tiempo, qué hacer, alimentación) y todos llevan al mismo producto con otro ángulo.
- **Nada de frases que sirven para cualquiera** presentadas como si fueran personalizadas. La curiosidad se logra con un resultado útil.
- **Datos:** ninguna respuesta va al píxel ni a herramientas de anuncios.
- **Test:** página con quiz contra página sin quiz, mismo tráfico, una variable.

## Técnica

- HTML/CSS/JS sin dependencias, relativas, publicable en hosting estático (Cloudflare Pages recomendado: gratis y sin corte por tráfico; Netlify gratis pausa el sitio por consumo).
- Configuración editable en un archivo (`landing-config.json`): link de pago, precio, píxel, Utmify, soporte.
- Eventos del píxel: PageView, ViewContent (llega al precio), InitiateCheckout (toca comprar). Compra desde Hotmart.
- Utmify con parámetros UTM en cada anuncio.
- Dominio propio verificado en Meta.
- Rutas privadas (app, gracias) no enlazadas ni indexadas.

## Variantes A/B

Cambiar **una** idea grande por variante (héroe más directo, precio arriba, con/sin quiz). Si cambian dos, no se sabe cuál ganó.

## Entregable: `04-pagina.md`

Estructura elegida, copy de cada sección, especificación del quiz, variantes y resultados.

## Criterio de salida

Página publicada, con eventos verificados, compra de prueba pasando por ella, y coherencia revisada contra los creativos del lote 1.

## Estándar de toda página de ventas (decidido el 2026-10-09)

1. **Microsoft Clarity siempre instalado** (`clarityId` en `landing-config.json`). Mapas de calor y grabaciones son la fuente de la lista de "qué frena la conversión". Todo bloque que muestre respuestas de quiz o datos de salud va con `data-clarity-mask="True"`.
2. **Píxel de Meta** en la página y también en Hotmart (Herramientas → Píxel) para que Meta vea ViewContent, InitiateCheckout y Purchase. Eventos sin datos personales: QuizStart, QuizComplete, Scroll50, Scroll90.
3. **Utmify** activo y probado con compra de prueba.
4. **Apertura de una sola pantalla**: nada de scroll largo antes del primer argumento. Un botón principal, un link directo al precio y precio visible.
5. **Precio tachado y cuenta regresiva solo con fecha real** (`listPrice` + `launchEndsAt` iguales al fin del cupón en Hotmart). Sin fecha real quedan apagados. La fecha visible y el contador son opcionales (`mostrarFecha`, `mostrarCuenta`): "por tiempo limitado" sin fecha vale si el fin existe y se cumple. Al vencer, la página pasa sola al precio de lista y saca el cupón del link, para que nunca diga algo distinto al checkout.
6b. **Mundo real, sin relleno ni repetición** (decidido el 2026-10-12, regla 8 de `AGENTS.md`): cada bloque responde "¿por qué compro?"; nada de tareas internas de la app como argumento; una idea, un lugar; "guía", no "PDF".
6. **Sin cifras de contenido como argumento** ("128 páginas" asusta). Se vende la transformación y la facilidad de empezar; los bonus van en letra chica dentro de la tarjeta de precio.
7. Botones que bajan directo al precio para quien ya quiere comprar.
8. Código de la página guardado en `products/<producto>/pagina/` y publicado con `vercel deploy --prod`.
