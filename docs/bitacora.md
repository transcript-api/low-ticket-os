# Bitácora de trabajo

Registro cronológico de lo que se hizo, se decidió y se opinó, **lo más nuevo arriba**. Un agente nuevo lo lee junto con `AGENTS.md` y siente que estuvo en las sesiones anteriores. **Regla: al terminar cada tramo de trabajo, agregá una entrada acá** (qué se hizo, qué se decidió, qué opinás, qué falta). Los detalles viven en cada producto (`10-decisiones.md`, `11-pendientes.md`).

## 2026-10-13 — Seis pares de fotos recibidos, revisión privada preparada
- Santiago aportó 12 PNG y duraciones de 7, 11, 5, 4, 8 y 4 semanas. Pidió mejorar calidad sin cambiar rostros y normalizar tamaño para la galería mixta.
- Se inventarían dimensiones/huellas y se conservan copias exactas en `outputs/fotos-resultados/originales/` del workspace. Vista privada con imágenes originales completas en marcos 9:16, A/B por orden recibido. No se aplicó nitidez, IA o asignación definitiva de Antes/Después.
- Se pidió confirmar autorización escrita/programa, orden y tratamiento. Recomendación: mejora técnica no generativa para preservar exactamente rostros/cuerpos. El primer par parece invertido, pero el orden debe confirmarlo el dueño. Sigue pendiente la respuesta; no se publican fotos nuevas.
- Código preparado para etiquetas accesibles de casos anónimos; página y medios públicos conservados. Próximo paso al recibir confirmaciones: exportar al mismo marco, revisar fidelidad y ambos lados de cada par, integrar y publicar.
- Opinión/mejora: la resolución baja obliga a ser conservador y no reconstruir detalles como si fueran evidencia. Conservar fuentes y usar el mismo tratamiento en Antes y Después.

## 2026-10-13 — Galería horizontal mixta preparada
- Santiago pidió mezclar videos y fotos de Antes/Después interactivas en la misma sección de resultados, como los platos. Se prepara una fila horizontal: bucle cuando hay desborde, pausa/reanudación, pausa al reproducir o comparar, teclado y movimiento reducido. En escritorio los dos videos actuales entran sin repetirse; en celular corren.
- Comparador de fotos implementado y probado localmente con imágenes de colores neutros: cambio reversible, etiquetas y estados accesibles, sincronización de copia/original y bucle sin salto. Plantilla interna documentada, fuera del sitio publicado.
- **Faltan las fotos reales** y datos/autorización de los nuevos casos. No se publican pruebas, marcadores ni casos inventados: la fila actual contiene solo los videos de Pame y Lu ya autorizados.
- Validación local y online en cuatro anchos, videos/fases, bucle y pausa, teclado, movimiento reducido, IDs únicos, precio/cupón, quiz y rutas de compradoras; sin errores JS, archivos fallidos ni desborde. Publicado `dpl_6t81CAudiRff2yVPwVTmpCcnuTto`, 358 archivos y HTML servido verificados; medios, app y gracias conservados.
- Opinión/mejora: mantener todos los casos en una fila evita que la página crezca con cada incorporación. Revisar la legibilidad de las fotos reales y observar interacción antes de variar la velocidad.

## 2026-10-13 — Resultados reales de Pame y Lu en la sección rosa
- Santiago aportó dos videos de antes/después y pidió reemplazar toda la sección "Tu día cambia" por casos pequeños. Confirmó permiso escrito de ambas y que hicieron la versión online: Pame 7 semanas, Lu 4 semanas. Estos datos sustituyen la hipótesis anterior de casos exclusivamente presenciales.
- Se mantienen los clips completos de 8 s y su secuencia, sin retocar el cuerpo. Codificación H.264 540 × 960 con `faststart`, de 2,67 MB a 0,68 MB entre ambos; posters WebP. Tarjetas pequeñas en una fila, incluso en celular, con nombres, tiempos, contexto de resultados individuales y CTA. Reproducción al tocar y etiquetas Antes/Después, un video a la vez, pausa fuera de pantalla. Se quitan selector y tarjetas anteriores; apoyo/comunidad siguen en hero y oferta.
- Motion graphic revisado como referencia visual (app guiada, timer y alimentación); no editado ni publicado en Meta. El gráfico `+152` no tiene una base aportada y no se incorpora a la página. Archivos, tamaños y huellas en fuentes.
- Validado local y online en 320, 390, 768 y 1440 px: tamaño, fila, contexto, reproducción y duración, etiquetas al buscar, pausa, precio/cupón, quiz y rutas de compradoras. Revalidada la fila de accesos y valores US$ 80. Sin errores JS, archivos fallidos ni desborde; capturas revisadas.
- Publicado `dpl_B2cZrYyX3PnLFN6RpatAZ6nsAQi5`: huellas de los 358 archivos y HTML servido verificados; app, gracias y medios anteriores conservados.
- Opinión/mejora: los dos casos online aportan evidencia identificable sin convertir sus tiempos en una promesa. Medir reproducciones y compras por visita; respaldar cifras del creativo antes de usarlo en anuncios.

## 2026-10-12 — Miniaturas y accesos en horizontal en celular
- Santiago pidió imágenes para asesoramiento y comunidad y compactar "Todo lo que recibís hoy" como la fila de platos. Dos ilustraciones 3D decorativas generadas con imagegen y exportadas a WebP 320 × 320, unos 14 KB entre ambas; prompts y fuentes registrados. No representan miembros reales ni conversaciones.
- Cuatro tarjetas en una fila móvil continua de 40 s, altura de 224–243 px, con pausa, interacción/teclado, pausa fuera de pantalla y alternativa sin animación con movimiento reducido o sin JS. Copias decorativas fuera de accesibilidad. Escritorio conserva la lista completa y el precio no cambia.
- Validación local y online en 320, 390, 768 y 1440 px: movimiento, pausa/reanudación, bucle sin salto, miniaturas, teclado, movimiento reducido, valores US$ 80, precio/cupón, extras, quiz y rutas de compradoras. Sin errores JS, archivos fallidos ni desborde; capturas revisadas.
- Publicado `dpl_GpF27b3TwYLdsLQ7vdUi8Ra3Sksa`: verificados los 354 archivos subidos y HTML servido. Solo cambian tres archivos de la página y se agregan las dos miniaturas; app, gracias y medios conservados.
- Opinión/mejora: reduce altura y hace reconocibles los servicios. Observar lectura y uso de pausa con tráfico real antes de ajustar velocidad o atribuir cambios de conversión.

## 2026-10-12 — Tarjeta con valores estimados por acceso: total US$ 80
- Santiago pidió un ajuste breve de la tarjeta, conservando el diseño. Se muestra "Si comprás hoy te llevás": asesoramiento personalizado conmigo por WhatsApp durante 7 semanas US$ 35, app de por vida US$ 25, comunidad de por vida US$ 15, guía/materiales de por vida US$ 5. Importes identificados como estimados, con total US$ 80 y la frase "Todo eso lo llevás hoy por tan solo" antes del precio real US$ 15,90. Checkout y promoción existentes conservados.
- Santiago corrigió el regalo a semanas 5, 6 y 7. Extras, tarjeta de semanas, FAQ y quiz quedan coherentes. Esto reemplaza la descripción anterior de solo Semana 5. No se cambia el contenido de la app; la entrega de las semanas confirmadas queda a cargo del dueño. Se conservan las guías prácticas de hinchazón, sueño y eventos.
- Revisado local y online en cuatro anchos de 320 a 1440 px: importes alineados y sin superposición, suma correcta, textos, precio/cupón, quiz y rutas de compradoras. Sin errores JS, archivos faltantes ni desborde. Capturas revisadas.
- Publicado `dpl_8cGb9uLgdmpuNFFtB7HubCB2TsRA`, con las huellas de los 352 archivos y el HTML servido verificados. Solo cambian tres archivos de página; app, gracias y videos conservados.
- Opinión/mejora: destacar el asesoramiento refleja la prioridad indicada por Santiago. Medir ventas por visita y costo del servicio; la mejora de conversión es una hipótesis y los valores no son precios independientes verificados.

## 2026-10-12 — Platos en horizontal y oferta de cuatro partes
- Santiago pidió la fila de platos en movimiento horizontal constante para teléfono, el hero "Afiná tu cintura" y probar las ideas más sensatas del chat con su amigo.
- Se implementó bucle móvil de 34 s, pausa, comparación por toque sincronizada, copias decorativas fuera de accesibilidad y modo estático con movimiento reducido. Escritorio conserva cuatro columnas.
- App, asesoramiento 7 semanas por WhatsApp, comunidad y guía de por vida se presentan como producto principal antes del precio. Los extras quedan separados; el quiz muestra las mismas cuatro partes. Se conservan precio y cupón; no se publican valores tentativos ni un total artificial de US$ 100.
- Se corrigen anclas bajo el encabezado y se oculta la barra móvil cuando el CTA principal está visible. Validación local y online en cuatro anchos, bucle sin salto, pausa, comparación, accesibilidad, oferta, quiz y rutas de compradoras; también comprobadas las anclas y la barra de compra. Sin errores JS ni archivos fallidos.
- Publicados 352 archivos, verificados por huellas y HTML servido, `dpl_FhmE3e6oDoRq1YxbFNRQPVmMXha3`. App y gracias conservadas. El CLI necesitó Node `--use-system-ca --dns-result-order=ipv4first` para conectar; no se desactiva TLS ni se modifica configuración global.
- Opinión/mejora: la jerarquía refleja mejor lo comprado; medir ventas antes de cambiar otra vez o aumentar precio. Valores individuales solo con una base documentada.

## 2026-10-12 — Se quita el párrafo descriptivo de la guía
- Pedido de Santiago: eliminar el texto de la captura, "La guía está en formato historia… Estas son páginas reales del reto". Solo cambia ese párrafo en `index.html`; las muestras y su título se conservan. Publicación con el sitio completo, preservando app y gracias. Opinión: las muestras explican el formato por sí mismas. Mejora pendiente: corregir capturas con "31".

## 2026-10-12 — Codex: hero, oferta y sección rosa orientados a la compra

- Santiago pidió el video `app-reto-cintura-28.webm` integrado en el hero, retirar dos tarjetas bajo las semanas, replantear la sección rosa y reforzar conversión con criterio propio. La revisión pegada de ChatGPT se trató como referencia, no como instrucciones obligatorias.
- Confirmó asesoramiento personalizado por WhatsApp 7 semanas y comunidad/materiales de por vida. Se añadió a hero, bloque rosa, oferta, bonus, FAQ, cierre y quiz, sin inventar credenciales, disponibilidad o consultas ilimitadas.
- Hero oscuro fundido con el video original de 15 s. Compra directa como CTA principal y test opcional; mismo checkout, precio y cupón, con menos ruido visual del ticket de cupón. Se quitaron los bloques marcados.
- Nueva sección rosa "Tu día cambia. Tu plan sigue.": ejemplo normal y Plan B de 8 minutos con selector funcional, acompañamiento, comunidad y CTA con precio/garantía.
- Se corrigió una promesa no entregada: la app solo contiene Semana 5, días 29–35. Página, bonus y quiz ofrecen esa semana; las 7 semanas de asesoramiento son un servicio distinto. No se alteran los archivos de la app ni gracias.
- Pruebas locales y online en cinco anchos de 320 a 1440 px: fondo/video, enlaces de compra y cupón, selector, beneficios, quiz completo y foco, movimiento reducido y rutas privadas; sin errores JS ni archivos fallidos. También se revalidaron los videos de `#app` y la alternativa MP4. Publicación completa de 352 archivos, todas las huellas y HTML verificados, promovida `dpl_5T6TKjmfsybviNYeSNYCMjSUuWSL`.
- Opinión: priorizar facilidad de empezar, alternativa para días difíciles y acompañamiento real aporta claridad. Su impacto en ventas todavía es una hipótesis; medir compras por visitante, no solo tests o clics. Pendiente: acceso/contactos de WhatsApp en entrega y corregir capturas originales con "31".

## 2026-10-12 — Codex: bloque de la app sustituido por video

- Santiago pidió revisar los dos últimos videos descargados y reemplazar todo el bloque de teléfonos, título, párrafo y beneficios por solo el video, fundido con su fondo blanco cálido.
- Se usan ambos originales: vertical 1080×1350 para celular hasta 860 px y horizontal 1920×1080 para escritorio. Duran 24 s, VP9, sin audio. Se copian al repo sin editar y se agregan conversiones MP4/H.264 y posters para compatibilidad.
- Se retiran los teléfonos y la lista de beneficios antiguos del HTML/CSS/JS. `#info` conserva su lista compacta. `#app` tiene solo el video visible; el título y descripción para accesibilidad están ocultos visualmente.
- Solo se descarga la versión correspondiente al acercarse a la sección. Reproducción silenciosa en bucle, pausa por toque/teclado y fuera de pantalla. Movimiento reducido o bloqueo de autoplay habilitan controles manuales. Sin JavaScript se ofrece el MP4 vertical.
- Fondo inicial `#FCFAF8`, igualado al fotograma decodificado para evitar diferencias de un punto de RGB entre navegador y archivo. Sin borde, sombra ni redondeado exterior.
- Validación local: selección de versión, descarga única, reproducción, pausa, cambio de ancho, MP4, movimiento reducido, color del fondo, apertura del quiz y acceso a app/gracias; sin errores de JavaScript ni archivos fallidos.
- Se verificaron las huellas de los 349 archivos subidos y el HTML servido antes de promover `dpl_3AYP6mrDooMfgxmjU6NifNsGJf5T` a https://reto-cintura-28.vercel.app/#app. Todos los archivos de compradoras y de gracias se conservan.
- Opinión y mejora: la presentación se integra mejor al fondo; medir su efecto con tráfico real antes de seguir cambiando. El "12 de 31" que muestran las fuentes originales sigue pendiente; no se editó el contenido de los videos en este pedido.

## 2026-10-12 — Codex: identificación sin foto y con movimiento vertical

- Santiago pidió implementar la referencia visual de "Si te pasa esto"; luego precisó que quede sin la foto de la mujer y que las tarjetas se desplacen en vertical para reducir la altura. Autorizó planificación y ejecución en el chat.
- Se editan solo `products/reto-cintura-28/pagina/index.html`, `venta.css` y `venta.js`: título fucsia con serif en cursiva, tarjetas rosadas con checks, bloque centrado, cierre destacado y CTA ancho con flecha. El quiz y la oferta conservan su funcionamiento.
- Bucle de 28 s, ventana de 180/200 px, pausa explícita y por puntero/toque. Movimiento reducido y ausencia de JavaScript muestran las cinco tarjetas completas. Duplicados ocultos a lectores de pantalla.
- Se validó local y online en seis anchos entre 320 y 1819 px: movimiento, pausa, continuidad del bucle, movimiento reducido, seis preguntas del quiz, foco al cerrar, precio y checkout. Sin errores de JavaScript ni archivos fallidos. App y gracias responden correctamente.
- El CLI autenticado permitió recuperar los 343 archivos de la publicación anterior y verificar sus SHA-1; se mantienen app y gracias. Se compararon todos los archivos subidos contra la versión probada y se promovió `dpl_5By649uzWAhMJrgxjGUsG7SJN7fk` a https://reto-cintura-28.vercel.app.
- No se agregó fotografía al resultado final. El intento previo de extraer la foto con IA fue rechazado por el filtro de imágenes; la posterior instrucción de Santiago eliminó esa foto del alcance.
- Opinión y mejora sugerida: la ventana compacta acerca el CTA; medir con visitas reales si mejora el inicio y finalización del quiz. No se inventan métricas ni se declara un test A/B.

## 2026-10-12 · Limpieza de la página y regla "mundo real"

- **App: letras ilegibles en modo oscuro (reportado por Santiago).** Causa: `styles.css` de la app usaba `var(--ink)` como fondo oscuro (timer, pantalla de inicio, tarjeta de hoy, cabecera de semana, tarjeta "Para la cabeza"), y en modo oscuro del celular ese color pasa a rosa claro con letras blancas. Arreglo: color fijo `--night` (#1C1324) en esos fondos, botón de la celebración con letra fija y color del "kicker" en `app.js`. Barrido de contraste en 10 pantallas y las fases del timer: antes 10 problemas en modo oscuro, después 0 (modo claro: 0 antes y después). **La app no está en el repo** (vive en la carpeta de publicación y en Vercel): el arreglo está en la carpeta armada por Claude y falta publicarlo.

- Santiago pidió borrar "Buscá compañía" y "Misión del día" (no venden), borrar "¿Es para vos?" (repetida) y cambiar "PDF" por "guía" (incluido el título "No es solo un PDF…"). Hecho en `pagina/index.html` y `venta.css` (grilla de "Así es un día" pasó a 3 columnas). Revisado en escritorio y celular, sin errores de consola.
- **Regla nueva (AGENTS.md punto 8):** la página vende, no documenta la app; cada bloque responde "¿por qué compro?", sin relleno, sin repetición, "guía" y no "PDF".
- Corrección posterior: el título correcto era "No es solo una guía. También es tu app del reto." (había sido acortado de más). La primera tarjeta ya no habla de "idea para la cabeza y misión". **En celular**, la lista de 5 beneficios de la app es ahora una columna vertical que sube sin parar (bucle de 30 s, se pausa mientras se toca, se queda quieta si la persona tiene "reducir movimiento"); en escritorio no cambia. Implementado con CSS + duplicado de la lista en `venta.js`.
- **Prueba de la app online (sin cuenta, navegador móvil emulado):** 26 pantallas recorridas, 0 errores de consola, 0 imágenes rotas, 0 fallos de red; cuestionario, Día 0, timer (cuenta regresiva y ejercicios), descargas PDF OK. **Hallazgo: la app tiene Semana 5 (días 29-35) pero no semanas 6 y 7**, y la página las promete.
- Miniaturas nuevas en "Todo lo que recibís hoy": `assets/landing/guia-s.webp` (imagen "GUÍA", recortada) y `hojas-s.webp` (imagen "Hojas para imprimir"), en lugar de los íconos de texto.
- Falta publicar (la publicación en producción la hace Santiago o la autoriza en Claude Code).

## 2026-10-10 · Descuento 65 % en Hotmart y en la página, mejoras del quiz

- **Actualización 2026-10-12:** Santiago publicó la página desde la carpeta armada por Claude. Verificado online: descuento, línea roja, link con `LANZAMIENTO65`, quiz, app y gracias (200), sin errores de consola. Falta el OK para eliminar `LANZAMIENTO84`.

- Se instaló la CLI de Vercel (63.1.2) y Santiago la conectó a su cuenta. El repo no tiene dependencias de npm.
- **Hotmart (Santiago inició sesión en una ventana de Playwright; Claude operó):** precio base US$ 99,38 → **US$ 45,43**; cupón **`LANZAMIENTO65`** 65 % hasta el 24/10/2026 23:59 (Montevideo). Verificado recargando.
- **Página (local, sin publicar):** tachado + "−65 %" + ticket del cupón + "Precio de lanzamiento por tiempo limitado" en rojo chico (hero, debajo del botón al checkout, final del quiz, barra fija). Sin fecha ni contador, a pedido de Santiago. Al vencer pasa sola al precio de lista. Probado en 360, 393 px y escritorio, sin errores de consola, y simulando la fecha vencida.
- **Quiz:** titular según la meta, la respuesta "día a día" ahora se usa, "Ver todo lo que incluye" lleva al precio (antes a "Si te pasa esto"), eventos `quiz_p1…6` en Clarity.
- **Bloqueos:** (1) Claude Code no permitió publicar en producción sin autorización explícita de Santiago. (2) `LANZAMIENTO84` sigue válido: Hotmart solo deja eliminarlo y Claude había dicho "desactivar sin borrar", así que espera OK. Mientras la página vieja siga online, su link con `LANZAMIENTO84` cobra US$ 7,27.
- **Aprendizaje:** el sitio en Vercel lleva la app y gracias, que no están en el repo. Antes de publicar desde `pagina/` hay que sumarlas, o se borran. Se bajaron de la publicación anterior con la API de Vercel (271 archivos, verificados).
- **Opinión:** las dos semanas deberían arrancar con los anuncios; el contador del checkout contradice el "por tiempo limitado" y conviene sacarlo; el 25/10 hay que decidir el precio sin repetir el lanzamiento.

## 2026-10-09 (cierre de la noche) · Feedback del socio, Miro al repo, dónde paramos

- Santiago pasó 8 capturas con la revisión del socio (7/10: mucha explicación, poco deseo y prueba). Se transcribió a `products/reto-cintura-28/fuentes/chat-santi-amigo-2.md` y se analizó en `12-mejoras-pagina.md`.
- Página publicada de nuevo: el quiz es el botón principal (hero, mitad y cierre) y queda "Ir directo al precio" como secundario; app en beneficios; "¿Es para vos?" restituida (error mío haberla sacado); menos repetición.
- Se leyeron los dos tableros de Miro y se organizó su contenido y banco de ideas en `docs/miro-ideas.md`. Aviso: sus cifras de equilibrio son de cuando el precio era US$ 9,90.
- Experimentos nuevos: EXP-004 (titular) y EXP-005 (quiz como CTA principal vs compra directa).
- **Pendiente que Santiago volvió a señalar:** que el descuento aparezca en la página. Sigue apagado a propósito; falta que Hotmart tenga precio base US$ 45,43, cupón 65 % y fin real, y cargar `launchEndsAt`. Es lo primero a resolver cuando vuelva.
- **Dónde paramos y qué sigue:** ver "Dónde paramos" en `products/reto-cintura-28/INFORME.md`.

## 2026-10-09 (noche) · Ajustes, Clarity activo, GitHub

- Clarity activo (ID en `landing-config.json`). Se sacó "Pago seguro con Hotmart" (Santiago: no genera confianza). Hero con la pregunta del socio: "¿Querés saber si el Reto Cintura 28 es para vos?" + botón "Hacer el test".
- **Semanas 5, 6 y 7 de regalo** nombradas en la página, con el mensaje de que la rutina se repite y se sube de nivel cuando quiera. **Las semanas 6 y 7 las agrega Santiago el 2026-10-10: no lanzar anuncios hasta que existan.**
- Santiago pidió borrar la fecha y dejar "tiempo limitado" con cronómetro. Se hizo la parte visual (sin fecha, "por tiempo limitado · quedan …") pero el cronómetro y el tachado **siguen apagados** hasta que haya un fin real del cupón (`launchEndsAt`). Claude mantiene la opinión de la entrada de abajo.
- Repo subido a GitHub privado: github.com/transcript-api/low-ticket-os.

## 2026-10-09 · Página v3 publicada, quiz, Clarity, precio, bonus

**Hecho**
- Se eliminó el film con scroll de 5 escenas (los usuarios se iban antes del primer argumento). Nueva **apertura de una pantalla** con titular, teléfono real de la app, botón al quiz y precio. Dos temas (noche / hueso), hoy `noche`.
- **Quiz de 6 preguntas** con resultado personalizado y botón directo al checkout (barra fija). Investigación en `docs/investigacion-quiz-funnels.md`.
- **Publicada en Vercel**: https://reto-cintura-28.vercel.app (cuenta de Santiago, proyecto `reto-cintura-28`). Código en `products/reto-cintura-28/pagina/` (incluye `assets/landing`).
- Se sacó todo "128 páginas" (asusta: es contenido, no transformación), se borró lo repetido (tabla "lo de siempre", "¿Es para vos?", "3 pasos") y la lista de lo que recibe quedó en 5 ítems. Los **bonus** (acompañamiento, Semana 5, Plan B, guías) pasaron a la tarjeta de precio, en letra chica con tilde.
- Botones directos al precio (header "Ver precio" y link en el hero "Ya lo quiero").
- Soporte para **Microsoft Clarity** (`clarityId` en `landing-config.json`; el quiz va enmascarado) y eventos de píxel sin datos personales: QuizStart, QuizComplete, Scroll50, Scroll90, ViewContent, InitiateCheckout.
- Precio: **US$ 15,90 fijo.** Santiago decidió pasar de "84 % sobre US$ 99,38" a **"65 % sobre US$ 45,43"** (15,90 / 0,35 = 45,43). Cargado en `landing-config.json` (`listPrice`, `discountLabel`) pero **apagado hasta tener fecha real** (`launchEndsAt`).

**Decisiones y desacuerdos (para no repetir la discusión)**
- Santiago pidió un contador que "baje de a poco" aunque no sea el tiempo real, y cree que la urgencia falsa ayuda. **Opinión de Claude (se mantiene):** no se implementa un contador inventado; engaña a quien compra y puede frenar anuncios o cuenta en Meta. Lo que sí se hizo: la cuenta regresiva y el tachado funcionan **con una fecha real**: si se pone `launchEndsAt` (misma fecha en que termina el cupón en Hotmart y el precio vuelve a subir) aparece y baja segundo a segundo. Es el mismo efecto sin el riesgo. Santiago puede decidir otra cosa; si lo hace, registrarlo acá.
- El contador del checkout de Hotmart (por visitante, sin consecuencia al llegar a cero) tiene el mismo problema: se arregla atándolo a una fecha real o sacándolo. Pendiente de un "dale".
- Texto del order bump: Santiago quiere enfatizar "acelerá tus resultados con el menú". Claude advierte que "resultados más rápido" promete algo que el archivo no entrega. Alternativa sugerida: "Acelerá tu reto: sumá el Menú armado de 28 días y no pienses qué cocinar" (acelera la *organización*). Decide Santiago.
- Primero publicar y medir, después optimizar: la lista de "qué frena la conversión" se arma **con datos de Clarity y Meta**, no con opiniones.

**Opinión general de Claude (a revisar con datos)**
1. Falta prueba social: los videos y fotos del reto presencial, con permiso por escrito, son lo que más puede mover la conversión. Lugar sugerido: justo antes del precio (hay una plantilla comentada en `index.html`).
2. El quiz puede ayudar o estorbar: testear contra la página sin quiz (EXP-002) cuando haya tráfico.
3. Medir antes de recortar más secciones.
4. Arreglo técnico pendiente: la captura `app-hoy.webp` dice "12 de 31" (debe decir "12 de 28").

**Falta** (ver `products/reto-cintura-28/11-pendientes.md`): ID de Clarity, píxel de Meta (en la página y en Hotmart), configurar Utmify, fecha real del cupón, cambiar en Hotmart el precio base a US$ 45,43 y el cupón a 65 %, correcciones del checkout (contador, banner, bump), testimonios, afiliados.

## 2026-10-08 y anteriores
- Se creó el repo (método + producto Reto Cintura 28), se organizó en Miro todo el chat entre Santiago y su socio (flujo horizontal con flechas), se revisó el material y el Hotmart real (nombre sin "cm", Lorem ipsum borrado del checkout, link correcto con `offDiscount=LANZAMIENTO84`). Detalle: `products/reto-cintura-28/08-hotmart-y-emails.md` y `10-decisiones.md`.
- Santiago pidió explícitamente **no seguir al 100 % el material que pasa**: usar mejor criterio (ver `AGENTS.md`).
