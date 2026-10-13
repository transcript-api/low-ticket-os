# 11 · Pendientes

## Hoy

- [x] 2026-10-13: sustituir toda la sección rosa por resultados de Pame (7 semanas) y Lu (4 semanas), del reto online y con autorización escrita confirmada por Santiago. Videos pequeños de 8 s optimizados y publicación verificada.
- [ ] Antes de publicar el motion graphic como anuncio, confirmar qué representa `+152` y respaldarlo con datos reales. El archivo se revisó como referencia; no se editó ni se publicó en Meta.
- [x] 2026-10-12: miniaturas de asesoramiento y comunidad; "Todo lo que recibís hoy" en bucle horizontal compacto en celular, con pausa y movimiento reducido. Publicado y revisado online, con precio y accesos de compradoras conservados.
- [ ] Observar con tráfico real si se leen los cuatro accesos y si conviene ajustar la velocidad de la fila móvil.
- [x] 2026-10-12: tarjeta "Si comprás hoy te llevás", cuatro valores estimados por acceso (35 + 25 + 15 + 5 = US$ 80), asesoramiento personalizado conmigo y frase antes del precio; extras corregidos a semanas 5, 6 y 7, por instrucción expresa de Santiago.
- [ ] Medir compras por visita y costo del asesoramiento; documentar referencias comparables si se quiere convertir la valoración estimada en una comparación de precios de venta.
- [x] 2026-10-12: platos en bucle horizontal móvil; hero "Afiná tu cintura"; separar cuatro componentes principales de los extras y presentarlos antes del precio.

- [x] 2026-10-12: quitar el párrafo descriptivo bajo "Mirá la guía por dentro", por pedido de Santiago.

- [x] **2026-10-12 (hero y oferta):** hero con video integrado; quitar las dos tarjetas marcadas; nueva sección rosa; compra directa y test opcional. Añadidos asesoramiento por WhatsApp 7 semanas, comunidad y materiales de por vida. Publicado como sitio completo.
- [ ] Santiago: incluir contacto/invitación de WhatsApp para asesoramiento y comunidad en la entrega a compradoras; definir desde cuándo se cuentan las 7 semanas y cómo se organiza la atención.
- [ ] Medir compras reales por visita y costo de prestación del asesoramiento antes de atribuir mejoras de conversión.

- [x] **2026-10-12 (video):** sustituir la sección de la app por los últimos videos de Descargas, con selección celular/escritorio y fondo continuo. Publicado como sitio completo; app y gracias conservadas.

- [x] **2026-10-12 (Codex):** actualizar `#info` según la referencia de Santiago, quitar la foto y compactar la lista con movimiento vertical, pausa y modo de movimiento reducido. Publicado y verificado online con los 343 archivos del sitio completo, preservando app y gracias.
- [ ] Medir con tráfico real el inicio y la finalización del quiz después de este cambio visual; no hay datos nuevos de conversión.

| Tarea (agregado el 2026-10-09, feedback del socio) | Quién |
|---|---|
| ~~Casos reales / prueba social~~ Publicados el 2026-10-13: Pame y Lu, del reto online; permiso escrito confirmado por Santiago. La plantilla presencial queda para futuros casos de ese formato | — |
| Decidir si se testea el titular emocional (EXP-004) y el quiz como CTA principal contra compra directa (EXP-005) cuando haya tráfico | Santiago + Claude |
| ~~Encender descuento: Hotmart (base 45,43 · cupón 65 % · fin del cupón) + `launchEndsAt`~~ Hecho en Hotmart y en la página local el 2026-10-10 (`LANZAMIENTO65` hasta 24/10 23:59) | — |
| ~~Publicar la página nueva~~ Hecho: la publicó Santiago desde la carpeta armada por Claude (página nueva + app + gracias). Verificado online el 2026-10-12 en celular y escritorio | — |
| **Eliminar `LANZAMIENTO84`** (Hotmart no deja desactivarlo): con base 45,43 cobra US$ 7,27 hasta el 21/10 | Santiago (OK) |
| Decidir el 25/10 qué precio queda: US$ 45,43 o US$ 15,90 sin tachado | Santiago |
| Sacar o atar a fecha real el contador del checkout de Hotmart (contradice "por tiempo limitado") | Claude con OK |

| Tarea (agregado el 2026-10-09) | Quién |
|---|---|
| ~~Clarity~~ Hecho: ID cargado y verificado que carga | — |
| **Publicar el arreglo de la app (letras ilegibles en modo oscuro)**: está en la carpeta de publicación, falta subirlo a Vercel | Santiago |
| **Entrega de semanas 6 y 7:** Santiago confirmó que el regalo cubre semanas 5, 6 y 7 y pidió restaurarlo en la página. Los archivos de la app conservados solo contienen hasta el día 35; asegurar la entrega de las semanas 6 y 7 y sincronizarla con esta oferta | Santiago |
| Pasar el ID del píxel de Meta (`metaPixelId`) y cargarlo también en Hotmart (Herramientas → Píxel) para que Meta vea checkout y compra | Santiago + Claude |
| Configurar Utmify (script, `utmifyScript: true`, probar que conserve `offDiscount=` y las UTMs) | Claude, guiando |
| Decidir fecha real de fin del lanzamiento; cambiar en Hotmart precio base a US$ 45,43, cupón a 65 % y fin del cupón; recién ahí cargar `launchEndsAt` | Santiago (+ Claude con OK) |
| Checkout: contador, banner, texto del bump | Claude con OK |
| Reemplazar `app-hoy.webp` y actualizar las capturas incluidas en los videos de la app (dicen "12 de 31") | Santiago + agente |
| Más casos reales con permiso, si se decide ampliar la prueba social | Santiago |

| Tarea | Quién |
|---|---|
| **Decidir cómo se muestra el precio** (hay un precio base de US$ 99,38 con cupón "84" que deja US$ 15,90): leer [`compliance/precios-y-descuentos.md`](../../compliance/precios-y-descuentos.md) antes de escribir "84 % de descuento" en anuncios o página | Santiago |
| Ponerle al cupón `84` fecha de fin o tope de usos en Hotmart, y decidir qué precio real se cobra después del lanzamiento (el bump estaba a US$ 40 y hoy cuesta 4,90) | Santiago |
| **Checkout, correcciones (detalle en [08-hotmart-y-emails.md](08-hotmart-y-emails.md)):** usar el link con `offDiscount=`; revisar el contador "última oportunidad"; cambiar el texto del bump (sin "resultados más rápido"); cambiar el banner por uno con la app real | Santiago, o Claude con OK explícito |
| Revisar en Hotmart lo que falta: order bump, apariencia del checkout, píxel, página de gracias, área de miembros | Claude (con OK) / Santiago |
| Activar recuperador de carritos o cupón de recuperación | Santiago |
| Configurar materiales y reglas de afiliados antes de aprobar a nadie (el programa ya está activo) | Santiago |
| Pasar la lista de cambios que quiere en la página | Santiago |
| **Página v3 (ver [pagina/README.md](pagina/README.md)):** elegir tema (noche u hueso), aprobar las 6 preguntas del quiz, confirmar fecha real de fin del cupón y precio posterior para activar el tachado US$ 99,38 y la cuenta regresiva; pasar videos e imágenes del reto presencial con permiso escrito | Santiago |
| **Verificar el estado de Hotmart** (producto, precio, bump, garantía, afiliación, píxel, página de gracias): sin acceso, pedir capturas o iniciar sesión en una ventana que Claude pueda usar | Santiago / Claude |
| Elegir el nombre del bump ("Menú Acelerador" o "Menú armado de 28 días") | Santiago |
| Subir este repo a GitHub (privado) | Santiago |

## Desfasajes de precio a corregir (US$ 9,90 → US$ 15,90)

| Dónde | Qué dice hoy | Acción |
|---|---|---|
| C01 (texto principal) | "Empezá hoy por US$ 9,90" | Sacar el precio del texto o poner el vigente |
| C13 (texto, titular e **imagen**) | "28 días por US$ 9,90"; la comparación con la pizza | Rehacer; revisar si la pizza sigue siendo una buena comparación a US$ 15,90 |
| C18 (titular e **imagen**) | "Todo por US$ 9,90" | Rehacer |
| `landing-config.json` | `price`: US$ 9,90; `priceLabel`: "Precio de lanzamiento" | Actualizar; dejar "Precio de lanzamiento" solo si hay fecha real de suba |
| Página de ventas | Precio en hero, oferta y barra | Se toma de `landing-config.json`; revisar el texto fijo |
| Reglas de corte de Meta | Apagar a US$ 13,50, escalar a US$ 6 | Usar [07-meta-ads.md](07-meta-ads.md) con la oferta vigente |
| Centro de mando y emails | US$ 9,90 | Actualizar al regenerar |

## Esta semana

| Tarea | Quién | Depende de |
|---|---|---|
| Definir el contenido del Kit Antiexcusas | Claude | Decisión de oferta |
| Armar el Meal & Shopping Kit desde el menú de 28 días | Claude | Decisión de oferta |
| Escribir las 4 preguntas del quiz y los 4 resultados (versión final) | Claude y socio | OK a [04-pagina.md](04-pagina.md) |
| Proponer 2 direcciones visuales y el plan de secciones de la página | Claude | OK de Santiago |
| Rehacer la página con el hero del socio | Claude | OK a las direcciones |
| Corregir V07 (24 → 32 recetas) y los títulos de C28 y C31 (`<em>`) | Claude | — |
| Crear producto y extras en Hotmart (verificar límite de order bumps y comisión) | Santiago | Decisión de oferta |
| Publicar el sitio en Cloudflare Pages con dominio propio | Santiago | Página |
| Compra de prueba completa | Santiago | Hotmart y página |
| Píxel de Meta y Utmify conectados | Santiago | Sitio publicado |

## Después

| Tarea | Quién |
|---|---|
| Subir lote 1 a Meta (US$ 20-25/día) y aplicar regla de 72 horas | Santiago |
| Cargar resultados en [09-metricas.md](09-metricas.md) y decidir | Claude |
| Pedir permiso a las primeras compradoras para testimonios reales | Santiago |
| Investigar competidores (biblioteca de Meta y Hotmart) y completar [00-brief.md](00-brief.md) | Claude |
| Producir los videos de prioridad 1 (V03, V01, V06, V02) | Santiago / Claude con Higgsfield |
| Venta siguiente: definir el seguimiento de 60 días | Claude |
| Decidir si Glúteos 28 es producto aparte | Santiago |
| Entregar la app desde el área de miembros | Santiago |

## Hecho

- Estrategia del chat organizada, criticada y decidida (2026-10-06).
- Repo creado con método, plantillas y este producto.
