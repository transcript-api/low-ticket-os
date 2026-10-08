# Fuentes

Material de origen de Reto Cintura 28. Los archivos pesados **no están en el repo** (`.gitignore` los excluye). Acá se anota qué es cada uno, de dónde baja y cómo reconocer la versión correcta con su huella SHA-256 (primeros 16 caracteres).

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
