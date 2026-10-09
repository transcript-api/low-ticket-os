# Página de ventas · versión v3 (apertura de una pantalla + quiz)

Código estático listo para Cloudflare Pages. Incluye `assets/landing` (imágenes). **No** incluye la app de miembros ni la página de gracias (rutas privadas) ni los PDF del producto: viven en el ZIP del sitio en la PC de Santiago. Para publicar: `vercel deploy --prod --yes` desde la carpeta del sitio (el sitio publicado además lleva esas dos carpetas privadas, copiadas del ZIP).

## Qué cambió respecto de la v2
- Se eliminó el film con scroll (5 escenas, ~6 pantallas de scroll antes del primer argumento).
- **Apertura de una sola pantalla** (`#top`): titular, 3 chips, botón "Fijate si es para vos" (abre el quiz) y precio. El teléfono es la pantalla real del timer de la app.
- **Quiz de 6 preguntas** (`quiz.js`): una por pantalla, avanza al tocar, barra de progreso. El resultado repite lo que respondió, explica por qué el reto encaja y cierra con precio, garantía y botón directo al checkout (con barra pegajosa).
- **Dos temas**: `noche` (oscuro, por defecto) y `hueso` (claro). Se elige con `?tema=hueso` o con `tema` en `landing-config.json`. `?preview=1` muestra un selector solo para revisar.
- Todo lo que estaba debajo (producto por dentro, comparadores, FAQ, oferta) se mantiene. Se corrigieron dos frases de la sección "Si te pasa esto" (edad y cuerpo dirigidos a quien lee).

## Regla de honestidad del precio
`landing-config.json` tiene `listPrice`, `launchEndsAt` y `discountLabel`. **El precio tachado, el % y la cuenta regresiva solo aparecen si `listPrice` está cargado y `launchEndsAt` es una fecha futura.** Si no, se muestra solo el precio final. Esa fecha tiene que coincidir con el fin real del cupón en Hotmart y con un precio posterior que se cobre de verdad. Ver [`compliance/precios-y-descuentos.md`](../../../compliance/precios-y-descuentos.md).
Para ver el diseño con descuento sin activar nada real: `?demo=lanzamiento` (marca "Vista previa").

## Datos y pixel
El quiz no envía respuestas a ninguna herramienta. Solo dos eventos sin datos: `QuizStart` y `QuizComplete`. `InitiateCheckout` se dispara al tocar cualquier botón `data-buy`.

## Pendiente
- Testimonios del reto presencial: hay una plantilla comentada en `index.html` (antes de las preguntas frecuentes). Solo con permiso escrito.
- Cargar `listPrice`/`launchEndsAt` cuando Santiago confirme el precio real posterior y la fecha de fin del cupón.
- Actualizar la captura `app-hoy.webp` ("12 de 31") a "12 de 28".

## Publicación
Online en Vercel (cuenta de Santiago, proyecto `reto-cintura-28`): https://reto-cintura-28.vercel.app . Se sube con `vercel deploy --prod` desde la carpeta del sitio (sin `assets/world`, con `vercel.json`). Cada cambio de la página se republica así.
