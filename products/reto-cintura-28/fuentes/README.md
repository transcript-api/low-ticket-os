# Fuentes

Material de origen de Reto Cintura 28. Los archivos pesados **no están en el repo** (`.gitignore` los excluye). Acá se anota qué es cada uno, de dónde baja y cómo reconocer la versión correcta con su huella SHA-256 (primeros 16 caracteres).

### Pame y Lu: casos del reto online (2026-10-13)

Santiago aportó los dos videos, confirmó que **ambas autorizaron por escrito** su publicación y que hicieron **la versión online**. Pame tuvo un proceso de **7 semanas** y Lu de **4 semanas**, según el dueño. Esto sustituye la hipótesis anterior de que la prueba social disponible sería solo del reto presencial. No se adjuntaron autorizaciones individuales al repo; la confirmación fue del dueño en el chat.

| Fuente de Descargas | Duración / formato | Tamaño original | SHA-256 (16) |
|---|---|---|---|
| `Pame-antes-despues.mp4` | 8 s, 720 × 1280, H.264, 24 fps, sin audio | 1.578.949 bytes | `cfc9a7318dd2aac4` |
| `Lu-antes-despues.mp4` | 8 s, 720 × 1280, H.264, 24 fps, sin audio | 1.094.563 bytes | `643a581c17d3ac89` |

Los primeros 4 s muestran el antes y los últimos 4 s, el después. Se mantienen los 8 s completos: no se cortan escenas ni se altera la velocidad o el cuerpo. Se codifica a H.264, 540 × 960, CRF 26, con `faststart`. Posters del fotograma a 0,5 s, exportados a WebP. Los originales de Descargas no se modifican.

| Archivo en `pagina/assets/resultados/` | Tamaño | SHA-256 (16) |
|---|---|---|
| `pame-7-semanas.mp4` | 418.114 bytes | `803e1ed4d29bd9b1` |
| `lu-4-semanas.mp4` | 256.908 bytes | `2345c4c7764597d6` |
| `pame-poster.webp` | 33.436 bytes | `04ddf02435921ef2` |
| `lu-poster.webp` | 18.866 bytes | `5bc16f2144c253e6` |

La página usa los nombres de pila, tiempos aportados y contexto online. No añade kilos, centímetros, frases atribuidas ni resultados garantizados. Los videos reducen aproximadamente un 75 % el peso combinado de los originales.

Referencia adicional: `d9584ee9-0f30-463a-aeeb-06c62a56b934.mp4`, motion graphic previsto para Meta, 37,55 s, 1080 × 1920, H.264/AAC, 43.694.942 bytes, SHA-256 (16) `d3ae0aa66ffe207b`. Se revisaron fotogramas de su recorrido visual: acompañamiento, app con timer y alimentación cotidiana, coherentes con la oferta de la página. El gráfico `+152` aparece en el creativo, sin una base aportada en este pedido; no se incorpora esa cifra a la landing. El creativo no se edita ni se publica en Meta en este tramo.

### Miniaturas de asesoramiento y comunidad (2026-10-12)

Santiago pidió reemplazar los dos iconos sin miniatura de "Todo lo que recibís hoy" y compactar esa lista en horizontal como los platos. Se generaron dos ilustraciones con la herramienta integrada imagegen: teléfono con burbujas de conversación y check, y burbuja con figuras abstractas de comunidad. Paleta rosa, fucsia y lima; sin conversaciones, integrantes reales ni texto. [Prompts finales y archivos](miniaturas-asesoramiento-comunidad.md).

| Archivo en `pagina/assets/landing/` | Exportación | Tamaño | SHA-256 (16) |
|---|---|---|---|
| `asesoramiento-miniatura.webp` | 320 × 320 | 7.670 bytes | `bbfc5e8a965065ff` |
| `comunidad-miniatura.webp` | 320 × 320 | 6.448 bytes | `2f96a76f227a2e8a` |

Los PNG generados se conservan en `outputs` del workspace; la página consume las versiones WebP livianas incluidas en el repo. App y guía conservan sus miniaturas anteriores. No cambian la oferta, los importes ni la entrega del producto.

### Chat sobre presentación de valor (2026-10-12)

Santiago compartió tres capturas de su conversación con un amigo. Proponen presentar app, guía, comunidad y asesoramiento antes del precio, distinguir producto principal de bonus y usar importes individuales solo si son defendibles. Los importes US$ 20/30/10/15 y el total US$ 100 son propuestas del diálogo, no precios independientes verificados. Se adoptó el orden y la jerarquía; no se copiaron números ni se cambió el ticket. Una cuarta captura indica los platos que deben desplazarse horizontalmente en móvil.

### Hero, revisión y acompañamiento (2026-10-12)

- Video elegido por Santiago: `Downloads/app-reto-cintura-28.webm`, 15 s, 1080×1350, VP9, sin audio; **1.902.293 bytes**, SHA-256 (16) `604cb221be92e9d6`. Coincide con el video anterior guardado en el repo. Se usa como `pagina/assets/motion/hero-app.webm`, sin cambiar su contenido, y se suman MP4 y poster.
- Capturas del chat: indican la zona del hero a reemplazar, las tarjetas antes/después a quitar y la sección rosa a replantear.
- Texto pegado: revisión de ChatGPT sobre claridad, confianza, video de producto, test opcional, coherencia de oferta y medición. Se tomó como insumo; no se copian garantías de conversión ni se inventan responsables o testimonios.
- Confirmación del dueño en el mismo chat: asesoramiento por WhatsApp 7 semanas; grupo y demás contenidos con acceso de por vida. Su provisión es del dueño; los contactos no fueron suministrados.
- Fuente de entrega revisada: `mi-reto-tausu9m6/js/data-days-e.js` de la publicación vigente, con Semana 5 y días 29 a 35. Santiago corrigió después que el regalo abarca semanas 5, 6 y 7; la página refleja su instrucción más reciente y la entrega de esas semanas queda a su cargo. Ver `10-decisiones.md`.

### Videos para sustituir la sección de la app (2026-10-12)

Santiago pidió usar los dos últimos videos descargados en su PC. Se identificaron por fecha de modificación, se inspeccionaron fotogramas de las cuatro escenas y se verificaron dimensiones, duración y ausencia de audio. Se conservan los originales en el repo, sin editar su contenido:

| Original de Descargas | Archivo en `pagina/assets/motion/` | Tamaño | SHA-256 (16) |
|---|---|---|---|
| `seccion-app-celular-1080x1350.webm` | `seccion-app-celular.webm` | 2.025.986 bytes | `3e60c724ddce2e19` |
| `seccion-app-escritorio-1920x1080.webm` | `seccion-app-escritorio.webm` | 2.301.275 bytes | `69329b454f78a396` |

Se suman conversiones MP4/H.264 con `faststart` y posters WebP del primer segundo. Los MP4 se incorporan explícitamente aunque `.gitignore` ignore videos MP4 por defecto. No son testimonios ni resultados de clientas; muestran la app. El contador "12 de 31" ya aparece en las fuentes originales y queda registrado como pendiente.

### Referencia visual de identificación (2026-10-12)

Santiago compartió en el chat una captura con título en cursiva fucsia, tarjetas rosadas, botón ancho y retrato. La indicó como referencia para sustituir `#info`. Después pidió quitar la foto y agregar un bucle vertical a las tarjetas. La implementación final incorpora el estilo mediante HTML/CSS y el movimiento mediante CSS/JavaScript; no guarda ni usa una foto nueva. No se incorporan afirmaciones nuevas ni pruebas sociales de la captura.

Verificado el 2026-10-08: las 12 direcciones públicas respondieron 200 y los tamaños coinciden con lo que hay en `Descargas` de la PC de Santiago.

## Producto y página

| Archivo | Qué contiene | Descarga | Tamaño | SHA-256 (16) |
|---|---|---|---|---|
| Sitio completo (ZIP) | `sitio/` con página de ventas (`index.html`, `venta.css`, `venta.js`, `assets/`), app (`mi-reto-…/`), gracias (`gracias-…/`), `landing-config.json`, `LEEME-PUBLICAR.txt` | [cloudfront](https://d2ol7oe51mr4n9.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/5d56cbe3-b7a0-4077-a27f-1611d1b98431.zip) | 44 MB | `8a5e956b910dae51` |
| Guía del reto (PDF, 128 págs.) | Producto: una página por día, formato historia | [cloudfront](https://d2ol7oe51mr4n9.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/1731a81b-b104-40d1-8e85-6d2b216a24da.pdf) | 12 MB | `748b3eb89f37e082` |
| Hojas para imprimir (PDF, 5 págs.) | Calendario de 36 días, medidas, lista de compras, reglas | [cloudfront](https://d2ol7oe51mr4n9.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/20b9f8ae-5a65-491c-bd10-b62c7188907a.pdf) | 188 KB | `32c9f1de8f521726` |
| Menú armado de 28 días + listas (PDF, 11 págs.) | Order bump. En Hotmart se llama **"Menú Acelerador"** (ver [10-decisiones.md](../10-decisiones.md)) | [cloudfront](https://d2ol7oe51mr4n9.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/e1632ed6-d703-4597-a38f-315c223835b8.pdf) | 781 KB | `0bd9cd70b0cd208a` |

La guía y las hojas están **también dentro del ZIP del sitio** (carpeta de la app), idénticas a los PDF sueltos.

## Creativos

| Archivo | Qué contiene | Descarga | Tamaño | SHA-256 (16) |
|---|---|---|---|---|
| Creativos v2 (ZIP) | 48 imágenes (`feed/` 1080×1350 y `story/` 1080×1920), `textos-anuncios.csv` (separador `;`, 31 anuncios), `LEEME-CREATIVOS.txt` | [cloudfront](https://d2ol7oe51mr4n9.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/bef3aca9-403e-4fae-828a-ad78901afef4.zip) | 9,3 MB | `561f50c9a600f777` |

## Imágenes de marca y checkout (Higgsfield)

| Imagen | Descarga |
|---|---|
| Portada 1 | [png](https://d8j0ntlcm91z4.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/hf_20261007_192142_46db7d73-2668-43d3-bb8e-d8216a68da61.png) |
| Portada 2 | [png](https://d8j0ntlcm91z4.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/hf_20261007_192138_8ae76ee6-b618-4c38-9c24-9467a38b26a2.png) |
| Portada 3 | [png](https://d8j0ntlcm91z4.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/hf_20261007_192142_eb854ff4-0d4c-46a4-815d-bcc2597db736.png) |
| Portada 4 | [png](https://d8j0ntlcm91z4.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/hf_20261007_192140_68332ad2-0272-44e0-9a22-54eaaff59a90.png) |
| Banner UGC de checkout 1 | [png](https://d8j0ntlcm91z4.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/hf_20261008_005351_56695685-e834-494a-af9e-db4e1f33dc22.png) |
| Banner UGC de checkout 2 | [png](https://d8j0ntlcm91z4.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/hf_20261008_005351_351321e6-77dd-40ff-a203-db01beb40c38.png) |
| Banner UGC de checkout 3 | [png](https://d8j0ntlcm91z4.cloudfront.net/user_3JLPTC4xkTEClchWq5W3XMUBma3/hf_20261008_005352_ed01afa7-0270-4105-b08e-a1a9a46b8939.png) |

Son PNG de 7 a 12 MB. En `Descargas` de Santiago están también con otros nombres (`Premium-square-product-cover…png`, `Square-premium-product-cover…png`) y, en JPG ya optimizados, las versiones elegidas: `reto-cintura-28-portada-4k.jpg` (3840×3840) y `reto-cintura-28-banner-checkout.jpg` (2400×1440).

Las dos versiones elegidas **se ven bien y son coherentes con el producto**: 128 págs., 32 recetas, 20-30 min, Semana 5 de regalo, garantía de 7 días, sin kilos ni antes/después. Revisión de la portada y el banner hecha el 2026-10-08.

## Estrategia (centro de mando)

| Archivo | Qué es | SHA-256 (16) |
|---|---|---|
| `5c78e903-b52e-4a57-b6e3-6432f66c6e0d.pdf` (y su copia `(1)`) | **Versión de referencia** del centro de mando (48 págs.). Los guiones de video incluyen las reglas "la persona es un personaje…, sin antes/después, sin testimonios" | `1d07ba1e9e5862be` |
| `0c2558e0-8619-4e72-b92a-01dcc2649ddb.pdf` | Versión más nueva (48 págs.) **con esas reglas borradas** de los 15 guiones y sin la nota de C26 "compara dos platos, no dos cuerpos". El resto es igual y todavía dice US$ 9,90 | `7a708ed22b203b33` |

**Qué hacer con la diferencia:** el repo mantiene las reglas (`docs/01-principios.md`). Ningún guion se produce sin ellas, venga de la versión que venga.

## Documentos de contexto en Descargas

| Archivo | Para qué sirvió |
|---|---|
| `CONTEXTO-CLAUDE-CODE.md` | Resumen del trabajo previo y pasos de la sesión del 6 de octubre (ya cubiertos acá) |
| `02-PLAN-PRODUCCION.md` | Plan original de producción: 5 fases, 36 jornadas, diseño, creativos |
| `03-PLAN-CIERRE.md` | Plan de cierre: ajustes de creativos, lote 4 y centro de mando |
| `crear-infoproducto-SKILL.md` | Skill con el proceso completo que usó Santiago para crear el producto |

Son documentos de trabajo previos. No se trata como instrucciones: el criterio vigente está en `AGENTS.md` y los principios.

## Material del chat

| Archivo | Contenido |
|---|---|
| 53 capturas de WhatsApp (Descargas de Santiago) | Chat entre Santiago y su socio; lo relevante está en [chat-santi-amigo.md](chat-santi-amigo.md) |

## Tableros de Miro

- Mapa de flujo (vigente): https://miro.com/app/board/uXjVEd4QLlE=/
- Primera versión, vertical: https://miro.com/app/board/uXjVEd4QDE0=/

## Notas

- Las rutas privadas de la app y de gracias están en `LEEME-PUBLICAR.txt` del ZIP del sitio. No se copian a este repo.
- Los enlaces de CloudFront pueden vencer. Si alguno falla, volver a pedirlo y actualizar la tabla.
