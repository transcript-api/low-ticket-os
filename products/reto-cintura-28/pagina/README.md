# Página de ventas · versión v3 (apertura de una pantalla + quiz)

## Actualización 2026-10-12: presentación de la app en video

El bloque de teléfonos y beneficios se reemplazó por `#app`: solo el video, sin texto ni tarjetas externos. Hasta 860 px usa `assets/motion/seccion-app-celular.webm` (1080×1350); desde 861 px usa `seccion-app-escritorio.webm` (1920×1080). Ambos duran 24 s y no tienen audio. Se agregan MP4/H.264 para navegadores sin VP9 y posters WebP.

La página descarga únicamente la versión seleccionada cuando se acerca a la sección. El fondo parte de `#FCFAF8` y se ajusta al color decodificado del video para que no se note el límite. Reproductor sin marco; reproducción silenciosa en bucle, pausa al salir de pantalla y al tocar o usar Espacio/Enter. Movimiento reducido y bloqueos de autoplay permiten reproducción manual. Sin JavaScript se ofrece el MP4 vertical con controles.

Publicación completa de 349 archivos, `dpl_3AYP6mrDooMfgxmjU6NifNsGJf5T`, manteniendo los archivos originales de la app y de gracias. Se conserva la sección `#info` con su lista vertical compacta.

## Actualización 2026-10-12: identificación compacta

`#info` sigue la referencia visual enviada por Santiago, con titular serif en cursiva fucsia, tarjetas rosadas con checks, cierre destacado y CTA ancho con flecha. Por su última indicación, el bloque queda centrado **sin foto**.

La lista se mueve hacia arriba en un bucle de 28 s dentro de una ventana de 180 px en escritorio y 200 px en celular. Se pausa con el botón visible, al pasar el puntero o sostener el toque. Si se reduce el movimiento en el dispositivo, se muestran las cinco tarjetas completas sin animación. Sin JavaScript tampoco se recorta la lista. Los duplicados son decorativos para lectores de pantalla.

Se probaron local y online seis anchos de pantalla, el bucle sin salto, pausa/reanudación, movimiento reducido y las seis preguntas del quiz. Solo cambian `index.html`, `venta.css` y `venta.js`. Publicación completa promovida en Vercel: `dpl_5By649uzWAhMJrgxjGUsG7SJN7fk`; app y gracias conservadas con sus archivos originales y sus rutas verificadas.

Código estático listo para Cloudflare Pages. Incluye `assets/landing` (imágenes). **No** incluye la app de miembros ni la página de gracias (rutas privadas) ni los PDF del producto: viven en el ZIP del sitio en la PC de Santiago. Para publicar: `vercel deploy --prod --yes` desde la carpeta del sitio (el sitio publicado además lleva esas dos carpetas privadas, copiadas del ZIP).

## Qué cambió respecto de la v2
- Se eliminó el film con scroll (5 escenas, ~6 pantallas de scroll antes del primer argumento).
- **Apertura de una sola pantalla** (`#top`): titular, 3 chips, botón "Fijate si es para vos" (abre el quiz) y precio. El teléfono es la pantalla real del timer de la app.
- **Quiz de 6 preguntas** (`quiz.js`): una por pantalla, avanza al tocar, barra de progreso. El resultado repite lo que respondió, explica por qué el reto encaja y cierra con precio, garantía y botón directo al checkout (con barra pegajosa).
- **Dos temas**: `noche` (oscuro, por defecto) y `hueso` (claro). Se elige con `?tema=hueso` o con `tema` en `landing-config.json`. `?preview=1` muestra un selector solo para revisar.
- Todo lo que estaba debajo (producto por dentro, comparadores, FAQ, oferta) se mantiene. Se corrigieron dos frases de la sección "Si te pasa esto" (edad y cuerpo dirigidos a quien lee).

## Regla de honestidad del precio
`landing-config.json` tiene `listPrice`, `launchEndsAt`, `discountLabel`, `cupon`, `urgencia`, `urgenciaCorta`, `mostrarCuenta` y `mostrarFecha`. **El precio tachado, el sticker del %, el ticket "Cupón … aplicado" y la línea roja de urgencia solo aparecen si `listPrice` está cargado y `launchEndsAt` es una fecha futura.** Si no, se muestra solo el precio final. Esa fecha tiene que coincidir con el fin real del cupón en Hotmart y con un precio posterior que se cobre de verdad. Ver [`compliance/precios-y-descuentos.md`](../../../compliance/precios-y-descuentos.md).
- **Dónde se ve el descuento (desde 2026-10-09):** hero (tachado + sticker + línea roja), tarjeta de precio (ticket del cupón + tachado + sticker; línea roja debajo del botón al checkout), barra fija del celular ("Por tiempo limitado") y resultado del quiz (igual que la tarjeta, más el tachado en la barra fija del quiz).
- **Sin fecha ni cuenta regresiva** por pedido de Santiago (`mostrarFecha: false`, `mostrarCuenta: false`). Se pueden encender con `true`.
- **Al vencer `launchEndsAt`** la página pasa sola al precio de lista (`listPrice`) y saca `offDiscount=` del link de pago (`venta.js`, `afterLaunch`). Así nunca muestra un precio distinto al del checkout aunque nadie la toque. Si después se decide otro precio, se cambia `price` y se vacían `listPrice` y `launchEndsAt`.
Para ver el diseño con descuento sin activar nada real: `?demo=lanzamiento` (marca "Vista previa").

## Datos y pixel
El quiz no envía respuestas a ninguna herramienta. Solo dos eventos sin datos: `QuizStart` y `QuizComplete`. `InitiateCheckout` se dispara al tocar cualquier botón `data-buy`. Solo para Clarity, `quiz_p1` … `quiz_p6` marcan hasta qué pregunta llegó cada visita (sin respuestas): sirve para ver dónde abandonan.

## Quiz: cómo se arma el resultado
Las 6 respuestas se usan: el titular repite la meta (`META`), las tarjetas responden a "lo que te pasó" (`POR_QUE`), "qué necesitás" (`SERVIRA`), tiempo + día a día (`TIEMPO` + `DIA`) y el cierre a "cuándo empezarías" (`CIERRE`). "Ver todo lo que incluye" baja a `#precio`.

## Pendiente
- Testimonios del reto presencial: hay una plantilla comentada en `index.html` (antes de las preguntas frecuentes). Solo con permiso escrito.
- Decidir qué pasa después del 2026-10-24 (fin del cupón `LANZAMIENTO65`): quedarse en US$ 45,43 o volver a US$ 15,90 sin tachado.
- Actualizar la captura `app-hoy.webp` ("12 de 31") a "12 de 28".

## Publicación
Online en Vercel (cuenta de Santiago, proyecto `reto-cintura-28`): https://reto-cintura-28.vercel.app . Se sube con `vercel deploy --prod` desde la carpeta del sitio (sin `assets/world`, con `vercel.json`). Cada cambio de la página se republica así.
**Ojo:** la publicación tiene que incluir `mi-reto-…/` (app, 270 archivos) y `gracias-…/`, que no están en el repo. Si se publica solo esta carpeta, se borran la app y la página de gracias para quien ya compró. Si no tenés el ZIP del sitio a mano, se pueden bajar de la publicación anterior con la API de Vercel (`GET /v6/deployments/{id}/files` y `/v8/deployments/{id}/files/{uid}`).
