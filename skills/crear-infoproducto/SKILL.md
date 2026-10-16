---
name: "crear-infoproducto"
description: "Crear un infoproducto low-ticket completo para Hotmart y Meta Ads: plan, oferta (bumps, planes, ARPU), app web + guía, fotos con Higgsfield, página de ventas, creativos, campañas y lanzamiento. Coordina las skills de oferta, copy, tráfico y edición."
metadata:
  version: "2.0"
  actualizado: "2026-10-15"
---

# Crear un infoproducto low-ticket listo para facturar

Método probado con el Reto Cintura 28 (octubre 2026). Sirve para retos, guías y programas de 7 a 60 días que se venden en LATAM con Hotmart, Meta Ads y Utmify.
Escribí en el idioma y registro del dueño (Santiago: español rioplatense con voseo, directo y sin relleno).

## Skills hermanas (delegá en ellas)
| Tramo | Skill | Base de conocimiento |
|---|---|---|
| Oferta, bumps, planes, precio, checkout, post-compra | `oferta-low-ticket` | `conocimiento/oferta-trafico/oferta-low-ticket.md` |
| Ganchos, guiones, textos de anuncios y página | `copy-humanizada` | `conocimiento/copy/` |
| Campañas, corte, escala, métricas | `trafico-meta-low-ticket` | `conocimiento/oferta-trafico/meta-ads-operacion.md`, `metricas-benchmarks.md` |
| Edición de anuncios y Reels | `edicion-premium` | `conocimiento/organico-produccion/formatos-y-edicion.md` |
| Imágenes y video IA | `realismo-cinematico-ia`, `ai-cinematic-director` | — |
| Orgánico de Instagram | `contenido-organico-ig` | `conocimiento/organico-produccion/sistema-organico-ig.md` |
| Transcripciones nuevas de cursos o videos | `ingesta-transcripciones` | `conocimiento/criterio/protocolo-de-ingesta.md` |

Precedencia: reglas del negocio y políticas → datos propios con muestra suficiente → evidencia oficial de Meta → principios de confianza Alta → hipótesis.

## Entregables
1. Plan maestro escrito antes de producir (decisiones, estructura, fotos, oferta, creativos, créditos, riesgos, orden).
2. Contenido como datos: un solo origen que alimenta la app y el PDF.
3. App web del producto (HTML/CSS/JS sin dependencias, progreso en el navegador).
4. Guía PDF en formato historia (una página por día) + hojas A4 para imprimir.
5. Fotos realistas con Higgsfield, revisadas una por una.
6. Página de ventas estática + guía para publicarla + prompt de respaldo para Claude Code o Claude Design.
7. Creativos estáticos (feed 1080×1350 y story 1080×1920) con su porqué y textos para Meta en CSV.
8. Centro de mando privado: arranque paso a paso, ofertas A/B/C, Meta Ads, Hotmart, emails, guiones de video UGC, reglas y respaldo; también en PDF.
9. Order bump listo y upsell planificado.

## Reglas que no se negocian
- Planificá todo primero y recién después ejecutá. Escribí el plan, seguilo y actualizalo cuando algo cambie.
- Nada inventado: testimonios, reseñas, cifras de clientas, contadores, cupos ni precios tachados que nunca existieron. Urgencia solo con fechas reales.
- Personas generadas con IA = ilustrativas (decirlo en la página y en el PDF). Nunca presentarlas como clientas.
- Salud y Meta: solo +18, nada de antes/después de cuerpos, nada de hablarle al cuerpo de quien mira ("¿Tenés panza?"), nada de kilos garantizados ni zoom a zonas del cuerpo. Promesa medible y honesta (centímetros, ropa, fuerza, hábitos). Aviso de salud en página, app y PDF.
- Producto propio: del referente se toma la estructura del éxito (promesa, mecanismo, oferta), nunca marca, textos, fotos ni testimonios.
- Un solo número real para cada dato (días, semanas, recetas, precio) en anuncio, página, checkout, app y guía. Antes de escribir un número, verificalo en el producto.
- Todo servicio humano incluido (asesoramiento, comunidad, WhatsApp) tiene alcance escrito: qué, cuándo y por qué canal. Si no se puede cumplir a 10 ventas por día, no se promete.
- Sin contadores que vencen sin consecuencia, ni "valor total" con montos estimados. Se vende "app" o "guía", nunca "PDF".
- Ningún consejo de un curso o video entra al método sin pasar por `ingesta-transcripciones` (los gurús muestran solo sus casos ganadores).
- Rutas privadas (app y gracias) con nombre difícil de adivinar, sin enlazar desde la venta, con noindex y fuera de robots.txt (robots.txt es público).

## Fase 0 · Ingeniería inversa del referente
Promesa + plazo, mecanismo, dolores y objeciones, estructura de oferta y precio, ángulos de anuncios. Salida: tabla "qué tomamos (estructura) / qué hacemos distinto".
- **Minería en la Biblioteca de anuncios:** buscá por frases de precio y formato ("por solo US$", "pago único", "acceso inmediato", "reto 28 días"; en portugués "por apenas", "desafio") y por nicho. Señal de validación: un mismo anunciante con varios anuncios activos de la oferta (umbral de trabajo: ≥ 5 y uno con ≥ 30 días). Hoja: anunciante, anuncios activos, países, precio, planes, bumps (abrí el checkout sin pagar), mecanismo, promesa, ángulo, choque con políticas y **lógica a modelar**.
- Descartá lo que no podés producir con calidad, lo que ya corren muchos en tu idioma y país, lo que depende de promesas prohibidas y lo que solo funciona copiando. Se modela la lógica; nunca el texto, la VSL ni las piezas, ni traducidas.

## Fase 1 · Plan maestro (antes de gastar créditos)
- Decisiones con su porqué y arquitectura de entrega (dónde vive cada pieza y cómo le llega a la compradora).
- Estructura día por día con progresión: cada semana cambia dificultad, formato y color, para que el producto se sienta que avanza.
- Si el pedido es "más días que el nombre": Día 0 de preparación + los días del reto + semana bonus "para sostenerlo".
- Sistema de diseño: 2 fuentes (títulos y texto), paleta de 5 colores, un elemento memorable (ej. número del día gigante + anillo de racha).
- Lista de fotos por grupo y modelo, oferta A/B/C con bumps y upsell, ángulos de creativos con nivel de consciencia, presupuesto de créditos, riesgos y orden de ejecución.

## Fase 2 · Contenido como datos
- `js/data-core.js` (semanas, niveles, totales), `data-days-*.js` (un archivo por bloque de días), `data-food-*.js` (recetas y comparadores), `data-guides.js`, `data-extra.js`.
- Cada día: tipo, título, bajada, bloques (mover con rutina y niveles, comer, cabeza, misión, hoja del día) y "mañana…" para dejar un bucle abierto.
- Validá con un script (`checkdata.js`): ids de recetas y ejercicios, imágenes existentes, días completos.

## Fase 3 · Fotos con Higgsfield
- Primero casting (6 a 8 opciones) con personas latinoamericanas acordes al público (por defecto mujer latina rioplatense o latinoamericana mestiza, piel trigüeña clara a media, pelo castaño u oscuro). Describí siempre tono de piel, rasgos, pelo y edad en el prompt; nunca dejes la etnia sin especificar. Elegí 1 cara y 1 casa y usalas como referencia en todo.
- `nano_banana_pro` (≈2 créditos a 2k) para poses, comida y consistencia con referencias (rol image_references). `soul_2` (≈0,12) para escenas de vida diaria.
- Realismo: cámara de celular, luz de ventana, piel con textura, ropa común sin marcas, casa real con algo de desorden. No escribas "foto de Instagram" ni "story": aparece la interfaz. Comida cenital o a 45° con luz natural.
- Ejercicios: 2 cuadros (inicio y final) que la app alterna, en vez de video IA (más barato y sin cuerpos deformes). Si el segundo cuadro sale casi igual, regenerá con un prompt más explícito o dejalo estático.
- QA obligatorio por lote con hoja de contacto: manos, pies, articulaciones, texto falso, interfaz de cámara. Recortá o regenerá.
- Flujo: `generate_image_batch` → `jobs_wait` → bajar en el sandbox → WebP grande + chica (`-s`) → repositorio.

## Fase 4 · App web
- Vanilla, rutas con hash, estado en localStorage (una clave con versión), PWA (manifest + ícono), `noindex`.
- Pantallas: Hoy (anillo de progreso), calendario, día (foto, misión, entreno con timer, demo en dos tiempos, plato, cabeza, hábito, "terminé el día"), biblioteca de ejercicios, cocina (recetas, armador de plato, comparadores tocables), progreso (medidas y test), descargas.
- Timer con trabajo, pausa, rondas, calentamiento y vuelta a la calma. Plan B corto que cuenta como día hecho.
- Probá con Playwright en 390×844 y 1440×900.

## Fase 5 · PDF
- Mismo origen de datos que la app. Formato historia 108×192 mm para leer en el celular, una página por día, aperturas de semana con su color.
- Autoajuste (clases fit1/fit2/fit3 y truncado de respaldo) y "Tu hoja del día" aparte para días con tareas (checklists, medidas, test).
- Fotos en JPG livianos (grandes 900 px q66, chicas 480 px q62): ~12 MB para 128 páginas.
- Hojas A4 imprimibles aparte (calendario, medidas, compras, reglas).
- Revisá todas las páginas en hojas de contacto y el reporte de desbordes antes de entregar.

## Fase 6 · Página de ventas
Estructura: héroe (promesa + plazo + "sin X y sin Y" + botón y precio visibles) → dolor e identificación → reencuadre de la culpa con tabla "lo de siempre vs nosotros" → el producto por dentro (capturas reales de la app y páginas reales del PDF) → semanas con el bonus marcado → un día por dentro → comparadores o demo interactiva → para quién es y para quién no → cómo empezás en 3 pasos → oferta (lista de lo que recibís + precio + garantía) → preguntas frecuentes → cierre → aviso de salud → barra de compra fija en celular. Dejá un comentario donde irán testimonios reales. En la primera pantalla, un video corto del producto real funcionando (la app en un celular en contexto); es la prueba que sí se puede usar sin testimonios. Sin contadores falsos ni precios de referencia que no existieron. El titular dice lo mismo que el anuncio.
Técnica: estática y sin dependencias, rutas relativas, `landing-config.json` (checkoutUrl, price, priceNote, priceLabel, metaPixelId, utmifyScript, soporte, soporteTexto). Píxel: PageView, ViewContent al ver el precio e InitiateCheckout al tocar comprar. Utmify: `https://cdn.utmify.com.br/scripts/utms/latest.js` con `data-utmify-prevent-subids`. Opcional: film que avanza con el scroll (clips por tramo cargados como blob).
Publicación: Cloudflare Pages (gratis y sin corte por tráfico; arrastrar carpeta o ZIP, hasta 1.000 archivos y 25 MiB por archivo). Netlify gratis no sirve para anuncios (~15 GB por mes y después pausa el sitio). Un sitio de Higgsfield pide iniciar sesión: solo sirve de vista previa.
Entregá un ZIP con `sitio/` + `LEEME-PUBLICAR.txt` (fuera de la carpeta del sitio para que no quede público) + prompt de respaldo.

## Fase 7 · Creativos estáticos
- Plantillas HTML (1080×1350 y 1080×1920 con zona segura: textos entre 240 y 1640 px en historia) → capturas con Playwright → JPG q90 + miniaturas.
- 25 a 35 creativos por lotes. **Lote 1 con 8 a 10 conceptos distintos** (≈ 7 videos y ≈ 3 estáticos; la mezcla es hipótesis): diez ideas distintas, no variantes de dos. Mismo cuerpo con otro gancho cuenta como el mismo concepto; flip, velocidad o color no cuentan. Lote de producto por dentro (platos, páginas reales, demos, imprimibles); retargeting (garantía, lo que incluye, precio frente a algo cotidiano).
- Copy de cada pieza con `copy-humanizada` (rúbrica de gancho: filtros de políticas, honestidad y verdad + 10 criterios). Nombres `C<concepto>-E<ejecución>-V<variante>` iguales en el archivo, el anuncio y el UTM.
- Cada uno con ángulo, nivel de consciencia (1 a 5), palanca psicológica, para quién, por qué funciona, texto principal, titular y botón. Exportá un CSV con BOM y separador ";" para abrirlo en Excel.
- Ideas de video UGC con IA para que el dueño produzca: gancho, guion con tiempos, tomas y pedido listo. La persona presenta el producto: nunca dice que lo usó ni cuánto bajó, no tiene credenciales y no tiene "vida" inventada (nada de "un día en mi vida"). Text hook escrito desde el frame 0, fijo 3 s o más; voz a ritmo final 1,1–1,2×; música al 3–5 %; se entiende sin sonido y solo con audio (checklist de 15 puntos en `edicion-premium`).

## Fase 8 · Oferta y lanzamiento (centro de mando)
- Ofertas para testear de a una: A control; B impulso (precio menor + bump); C precio mayor + garantía extendida. Hotmart deja elegir garantía de 7, 15, 21 o 30 días. Calculá neto (comisión aprox. 9,9 % + US$ 0,10 hasta US$ 15; confirmala en la cuenta), CPA de equilibrio y CPA objetivo.
- **El margen está en el ARPU, no en el front.** Order bumps de un clic: 2 a 4, complementarios, uno por fricción que ya siente la compradora y nombrados por lo que resuelven (US$ 3 a 7,90 en fronts de US$ 10–20; testeá el monto absoluto). Combo como tercera casilla. Sumalos con ~20 ventas, en una semana sin cambios grandes. Hipótesis fuerte: dos planes (básico = todo lo que promete el anuncio; completo = continuidad) con downsell real si elige el básico. Upsell de continuidad que no compita con lo que ya se regala. Afiliados cuando el CPA esté estable. Recuperación de carritos con cupón real que vence. Detalle en `oferta-low-ticket`.
- Front de referencia en LATAM: alrededor de US$ 10 (una sola fuente: testealo contra tu precio). El freno es más la confianza y el medio de pago que el bolsillo: garantía visible y medios locales.
- Meta (detalle en `trafico-meta-low-ticket`): campaña de ventas con presupuesto por conjunto, dos conjuntos con 4 a 5 conceptos cada uno + retargeting; 72 horas sin tocar (para cambiar, duplicar: editar reinicia el aprendizaje); cortar con 1,5 × CPA de equilibrio sin ventas (2 × si trajo 2 IC o más, revisando el checkout); diagnóstico por capa antes de apagar (hook rate < 30 % → gancho; CTR de enlace < 0,8 % → transición; IC sin compras → checkout); no apagar por un mal día lo que tiene historial (ventana de 3 días); escalar +20–30 % cada 48 h con CPA ≤ objetivo y 3 ventas, +50 % o duplicar a `ESCALA` con CPA ≤ 0,75 × objetivo y 5 ventas, nunca más de × 2 por cambio; cost cap solo en escala y anclado al CPA que podés pagar; UTM de Utmify en cada anuncio y una sola zona horaria en Meta, Hotmart y Utmify.
- El "ROI" de los cursos brasileños es ROAS (facturación ÷ gasto). Pasalo a CPA antes de comparar.
- Caja: antes de escalar, plata para ~15 días de gasto sin retirar (verificá el plazo de retiro internacional de Hotmart).
- Cuentas: si Meta restringe, se apela y se corrige la causa. Multilogin, cuentas de agencia de repuesto o cuentas nuevas para seguir anunciando están prohibidos (elusión de sistemas).
- Hotmart: textos del producto, archivos, página de gracias, área de miembros con un módulo "Empezá acá", píxel en el checkout (la compra se marca ahí, no en la página de gracias).
- Emails: compra, Día 1, Día 3, Día 7, mitad, medición final y graduación con pedido de experiencia con permiso (así nacen los testimonios reales). **Victoria rápida antes de que venza la garantía:** el correo 1, la página de gracias y el módulo "Empezá acá" llevan a lograr algo medible el Día 0 (abrir la app, terminar el primer entreno, armar el primer plato).
- Motor de ventas dentro del producto: capturas de racha con permiso, calificación en Hotmart, reenviar a una amiga, puente al siguiente producto.
- En el centro, un campo "Tu dominio" que reescribe todos los links (gracias, app, emails).

## Entorno técnico (Higgsfield)
- Si tu contenedor no llega al CDN ni a las subidas de Higgsfield (proxy 403), producí todo en `sandbox_exec`: tiene internet, Node, Playwright con Chromium, Pillow, ImageMagick y poppler.
- El sandbox se borra pronto: trabajá dentro del repo del sitio (`website_repo_access` checkout y push) y commiteá después de cada paso.
- Comandos de hasta 16.000 caracteres: escribí archivos grandes por partes (ej. `parts/*.html` que se concatenan) y dejá los scripts en el repo.
- Comandos de más de un minuto pueden volver con 502: usá `background: true` y consultá el log con comandos cortos.
- Nunca uses `pkill -f <patrón>` si el patrón aparece en el mismo comando: matás tu propio shell. Usá `pgrep -f '^node tools/'`.
- Exportar a PDF con Playwright: pasá las imágenes `loading="lazy"` a eager antes de esperarlas (decode() de una imagen lazy fuera de pantalla no termina nunca).
- Subidas: `media_upload` → en el mismo comando que crea el archivo, `curl -f -X PUT -H "Content-Type: …" -T archivo '<upload_url>'` → `media_confirm` (type file) → URL permanente. Nunca pases bytes como base64 entre entornos.
- Inspección visual: hasta 4 imágenes y 512 KiB por llamada: hacé hojas de contacto en JPG chicos.
- `deploy_website` puede quedar "queued": consultá con `website_status`.

## Verificación final
- Capturas en celular y escritorio sin errores de consola ni scroll horizontal.
- PDF: todas las páginas revisadas, sin desbordes.
- Links públicos con respuesta 200 o 206. Compra de prueba: checkout → gracias → email → app y PDF. Píxel visible en el asistente de Meta.
- Buscá números viejos en todos los textos (días, páginas, recetas) después de cada cambio de versión.

## Estructura del repo
- `app/public/<app-secreta>/`: app + PDFs. `app/public/<gracias-secreta>/`. `app/public/<centro-secreto>/`: centro de mando.
- `app/public/assets/landing`: imágenes de venta. `tools/`: print2 (PDF), static (venta), creatives, v2 (fotos y hojas de contacto) y `README.md` con el índice del kit.

## Aprendizajes de la tanda de transcripciones (octubre 2026)
Lo que entró al método después de analizar 16 videos de cursos (Viralidad y 7 operadores brasileños de low ticket), con su confianza en `conocimiento/`:
- Lote de 8 a 10 conceptos distintos (Andromeda premia la diversidad real); se espera que gane 1 de cada 5 a 10.
- Diagnóstico por capa antes de tocar algo; los cursos casi nunca miran hook rate ni hold, y es lo primero que explica un anuncio flojo.
- El ARPU manda: bumps complementarios, planes honestos y upsell de continuidad.
- Mostrar el producto real funcionando reemplaza a la prueba social que todavía no existe.
- Descartado por riesgo o engaño: clonar ofertas o VSL (aunque sea traducidas), "experto" con IA, contadores falsos, anclas de valor inventadas, multilogin y cuentas de repuesto, comparar cuerpos, "un día en mi vida" de una presentadora IA.

