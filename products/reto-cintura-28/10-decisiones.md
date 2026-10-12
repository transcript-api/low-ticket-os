# 10 · Decisiones

Lo más nuevo arriba. Fuente de las del 2026-10-06: chat entre Santiago y su socio + crítica posterior (ver [fuentes/chat-santi-amigo.md](fuentes/chat-santi-amigo.md)). Fuente de las del 2026-10-08: material y datos que pasó Santiago.

### 2026-10-12 — Hero con video, compra directa y acompañamiento confirmado
- Santiago pidió reemplazar el teléfono del hero por `Downloads/app-reto-cintura-28.webm`, fundir los fondos, eliminar los dos bloques señalados bajo las semanas y mejorar la sección rosa con criterio propio. Aportó una revisión de ChatGPT como referencia, no como instrucciones obligatorias. Autorizó cambios para mejorar el recorrido de compra.
- Confirmación expresa del dueño: asesoramiento personalizado por WhatsApp durante **7 semanas**; comunidad en WhatsApp, app y materiales **de por vida**. Se incorpora en hero, sección rosa, resumen de oferta, bonus, FAQ, cierre y resultado del quiz, sin prometer horas de atención, consultas ilimitadas o credenciales no confirmadas.
- Hero: video original de 15 s, VP9, 1080×1350, sin audio; MP4/H.264 alternativo y poster. Fondo oscuro igualado al fotograma decodificado, sin teléfono ficticio ni tarjetas flotantes. Titular orientado al proceso de trabajar la cintura con un plan de 28 días, sin asegurar un resultado corporal en un plazo.
- La compra es la acción principal del hero y del cierre; el test sigue disponible como alternativa. Los botones nuevos usan el mismo checkout y cupón. Se elimina el ticket visible del código de cupón para reducir ruido; el descuento y su aplicación real en el enlace se conservan.
- Se eliminan las tarjetas "Día 0, antes de empezar" y "Después del Día 28". La sección rosa ahora muestra "Tu día cambia. Tu plan sigue.", elección entre día normal y Plan B de 8 minutos, acompañamiento y comunidad, más CTA de compra con precio y garantía.
- Corrección de oferta: la app publicada contiene `data-days-e.js`, Semana 5, días 29–35; no hay contenido de semanas 6 y 7. La página, bonus y quiz pasan a ofrecer Semana 5 de regalo. Las 7 semanas de asesoramiento son un servicio distinto confirmado por Santiago. No se modifican archivos de la app de compradoras ni precios.
- Validación local y online: 320, 390, 768, 1024 y 1440 px, sin desborde; coincidencia de fondo/video, compra directa con `LANZAMIENTO65`, selector día normal/complicado, bonus, quiz completo y foco al cerrar, movimiento reducido y rutas de compradoras. Se revalidaron los videos celular/escritorio de `#app`, carga única, cambio de ancho, reproducción y alternativa MP4. Sin errores de JavaScript ni archivos fallidos.
- Publicación completa: 352 archivos, cinco archivos de página actualizados y tres medios nuevos. Comparadas las huellas de todos los archivos subidos y el HTML servido; promovido `dpl_5T6TKjmfsybviNYeSNYCMjSUuWSL` a https://reto-cintura-28.vercel.app.
- Criterio: hipótesis de claridad, menor fricción y mejor explicación del valor; no se promete un multiplicador de conversión ni se inventan testimonios. Referencias de UX: [información necesaria para decidir una compra](https://baymard.com/research-articles/current-state-ecommerce-product-page-ux) y [mostrar opciones en lugar de exigir recordarlas](https://www.nngroup.com/articles/recognition-and-recall/).
- Mejora siguiente: medir compras confirmadas por visita y rentabilidad; los tests completos y clics de checkout no equivalen a ventas. Quedan pendientes enlaces de WhatsApp en la entrega y las capturas/videos originales que muestran "31".

### 2026-10-12 — Presentación de la app: solo video, adaptado a la pantalla
- Santiago pidió revisar los dos últimos videos de Descargas, dar preferencia al de celular y sustituir todo el bloque de la captura (teléfonos, título, párrafo y beneficios) por el video. El fondo debe fundirse con el del video para que no se perciba un marco. Su duda sobre usar los dos se resolvió mediante selección automática según el ancho de pantalla.
- Fuentes originales: `seccion-app-celular-1080x1350.webm` y `seccion-app-escritorio-1920x1080.webm`. Ambos duran 24 s, VP9 a 30 fps, sin audio. Los originales se conservan sin editar en `pagina/assets/motion/seccion-app-{celular,escritorio}.webm`; se agregan versiones MP4/H.264 para compatibilidad y posters del primer segundo.
- Implementación: nueva sección `#app`, sin contenido visual externo al video. Celular hasta 860 px usa 1080×1350; escritorio desde 861 px usa 1920×1080. Solo se descarga el video seleccionado al acercarse a la sección. Al cambiar de ancho se cambia de versión. Fondo inicial `#FCFAF8`; al cargar un fotograma se iguala con su esquina para compensar pequeñas diferencias de decodificación entre navegadores y formatos. Sin bordes, sombra ni esquinas redondeadas en el reproductor.
- Reproducción: silenciosa, en bucle y dentro de la página; se pausa al salir de la sección y al tocar el video o usar Espacio/Enter. Con movimiento reducido o si el navegador bloquea la reproducción automática, aparecen controles nativos. Sin JavaScript, queda el video vertical MP4 con controles. Un título y descripción ocultos visualmente mantienen una alternativa para lectores de pantalla.
- Se retiran el HTML, CSS y duplicación de la antigua lista de beneficios de la app. La lista vertical de `#info`, agregada antes, se mantiene.
- Validación local: versiones celular y escritorio correctas, sin descarga doble ni desborde; pausa por toque/teclado y al salir de pantalla; cambio de tamaño; modo de movimiento reducido y compatibilidad MP4. Coincidencia exacta entre el color del video decodificado y el fondo de la sección. Quiz abre, app y gracias responden; sin errores de JavaScript ni archivos fallidos.
- Publicación completa: 349 archivos. Los 343 de la versión anterior se mantienen, salvo los tres archivos de la página (`index.html`, `venta.css`, `venta.js`); se suman seis archivos de medios. Se compararon las huellas de todos los archivos subidos contra la versión probada y se verificó el HTML servido antes de promover `dpl_3AYP6mrDooMfgxmjU6NifNsGJf5T` a https://reto-cintura-28.vercel.app/#app.
- Mejora sugerida: medir con tráfico real si la presentación se ve y si ayuda a llegar al precio. No hay métricas nuevas de conversión ni se declara un test A/B. El detalle visual "12 de 31" pertenece al material original y sigue pendiente de actualizar junto con las capturas de la app.

### 2026-10-12 — Identificación: referencia visual, sin foto y lista vertical compacta
- Pedido de Santiago: reemplazar el diseño de "Si te pasa esto" por la captura compartida y "planifica y ejecuta". Durante el trabajo precisó "mejor sin la foto de la mujer" y pidió que las tarjetas se muevan en vertical para ocupar menos espacio. Estas son las instrucciones vigentes para este cambio.
- Implementación: bloque centrado, título con remate serif en cursiva fucsia, cinco tarjetas rosadas con checks, frase de cierre en dos estilos y botón ancho con flecha que abre el mismo quiz. Sin foto ni nuevos archivos de imagen. Se mantienen las frases, el precio y el checkout.
- Lista: ventana de 180 px en escritorio y 200 px en celular; bucle continuo de 28 segundos. Pausa al pasar el puntero o sostener el toque, y botón "Pausar movimiento / Reanudar movimiento". Con `prefers-reduced-motion: reduce`, las cinco tarjetas aparecen completas y quietas. Sin JavaScript, también queda la lista completa. Las copias del bucle están ocultas a lectores de pantalla.
- Validación local y online: 320, 390, 768, 1024, 1440 y 1819 px, sin desborde horizontal; las cinco tarjetas originales accesibles; movimiento, pausa y continuidad verificados. Quiz completo de seis preguntas, devolución del foco al cerrar, enlace al precio y checkout con `LANZAMIENTO65`. Sin errores de JavaScript ni archivos fallidos. App y gracias responden correctamente.
- Publicación: se recuperaron y verificaron por SHA-1 los 343 archivos de la versión anterior. Solo cambian `index.html`, `venta.css` y `venta.js`; los archivos de la app y de gracias permanecen idénticos. La versión final fue preparada como producción sin asignar el dominio principal, comparada contra la versión probada y promovida: `dpl_5By649uzWAhMJrgxjGUsG7SJN7fk`, https://reto-cintura-28.vercel.app/#info.
- Acceso: el conector de Vercel rechazó el listado de archivos por permisos del equipo; el CLI ya instalado y autenticado sí tuvo acceso. La comprobación HTTP del enlace protegido se hizo con `vercel curl`, conforme a la guía `vercel:access-protected-vercel-deployment`, sin copiar credenciales al repo.
- No es un test A/B ni se atribuyen resultados de conversión. Mejora sugerida: comparar inicio y finalización del quiz con tráfico real antes de modificar su velocidad o altura.

### 2026-10-12 — Página: se borran "Buscá compañía", "Misión del día" y "¿Es para vos?"; "PDF" pasa a "guía"
- Decisión (de Santiago): en "Así es un día por dentro" quedan solo Mover y Comer (se sacan "Para la cabeza: Buscá compañía" y "Misión del día: Contale a una persona…", que no venden). Se borra la sección "¿Es para vos?" porque repite lo que ya dicen "Si te pasa esto", el quiz y el precio. Donde decía "PDF" ahora dice "guía"; el título "No es solo un PDF. Es tu app del reto." pasó a "Es tu app del reto.".
- Cambia lo registrado el 2026-10-09 (noche): "¿Es para vos?" había sido restituida por pedido del socio. Santiago la vuelve a sacar por repetida.
- Opinión de Claude: de acuerdo con "Buscá compañía/Misión", son mundo-app, no argumento de compra. Sobre "¿Es para vos?": filtra y da confianza, pero la advertencia de embarazo y lesión sigue en el pie y en el resultado del quiz, así que no se pierde la parte legal. Si Clarity muestra dudas antes de comprar, se puede volver a una versión de una línea.
- Regla nueva en `AGENTS.md` (punto 8) y `playbook/05-pagina.md`.

### 2026-10-10 — Descuento encendido: base US$ 45,43 + cupón `LANZAMIENTO65` por dos semanas
- Decisión (de Santiago): mostrar el 65 % al lado del precio, cupón `LANZAMIENTO65` por dos semanas, sin decir en la página cuánto dura; solo "Precio de lanzamiento por tiempo limitado" en rojo chico en el hero, debajo del botón al checkout y al final del quiz.
- Hecho en Hotmart (verificado recargando, 2026-10-10): precio base de la oferta `eucnkmyz` de US$ 99,38 a **US$ 45,43**; cupón **`LANZAMIENTO65`**, 65 %, todas las ofertas, del 10/10/2026 18:39 al **24/10/2026 23:59** (America/Montevideo). El cupón `84` ya no existía; solo estaba `LANZAMIENTO84`.
- Hecho en la página (local): tachado + sticker "−65 %" + ticket "Cupón LANZAMIENTO65 aplicado" + línea roja; sin fecha ni contador (`mostrarFecha`/`mostrarCuenta` en false); `launchEndsAt` = 2026-10-24T23:59-03:00; al vencer pasa sola a US$ 45,43 y saca el cupón del link.
- Quiz: titular según la meta, se usa la respuesta "día a día" (antes no se usaba), "Ver todo lo que incluye" baja al precio, eventos de Clarity por pregunta.
- **Pendiente crítico:** `LANZAMIENTO84` sigue válido hasta el 21/10 y con base 45,43 deja el precio en US$ 7,27. Hotmart no permite desactivarlo, solo eliminarlo: espera OK de Santiago. La página nueva (online desde 2026-10-12) ya usa `LANZAMIENTO65`; el riesgo queda solo para links viejos.
- Opinión de Claude: las dos semanas deberían empezar cuando arranquen los anuncios; el día 25/10 hay que decidir entre quedarse en US$ 45,43 o volver a US$ 15,90 sin tachado. Relanzar el mismo "−65 % por tiempo limitado" sería un descuento permanente disfrazado.

### 2026-10-09 (noche) — Feedback del socio: quiz como CTA principal, "¿Es para vos?" vuelve, app en beneficios
- Fuente: [fuentes/chat-santi-amigo-2.md](fuentes/chat-santi-amigo-2.md). Análisis punto por punto: [12-mejoras-pagina.md](12-mejoras-pagina.md).
- Hecho: quiz como botón principal (hero, mitad, cierre) con "Ir directo al precio" secundario; sección de app reescrita en beneficios; "¿Es para vos?" restituida (Santiago y Claude la habían sacado; el socio y la lógica de confianza decían que se quede); páginas más cortas.
- No aplicado (a testear): titular "Volvé a sentirte cómoda…" por riesgo de asumir un atributo personal; alternativa "Sentite cómoda…" (EXP-004).
- Santiago insiste en ver el descuento en la página. Sigue apagado hasta tener fin real del cupón (ver bitácora).

### 2026-10-09 — Página v3 publicada en Vercel; precio 65 % sobre US$ 45,43; contador solo real
- Decisiones de Santiago: apertura de una pantalla + quiz; publicar ya en Vercel y medir; instalar Clarity en todas las páginas; sacar "128 páginas" y lo repetido; bonus en letra chica dentro de la tarjeta de precio; botones directos al precio; pasar el descuento a 65 % (lista US$ 45,43, final US$ 15,90).
- Desacuerdo registrado: Santiago pidió un contador que baje aunque no sea el tiempo real. Claude no lo implementó (engaña a quien compra y arriesga anuncios y cuenta). Alternativa lista: poner `launchEndsAt` real y coincidente con el fin del cupón.
- Bump: Santiago quiere "acelerá tus resultados con el menú"; Claude sugiere "acelerá tu reto" (ver bitácora). Decide Santiago.
- Estado: página online en https://reto-cintura-28.vercel.app; tachado y contador apagados hasta tener fecha real.

### 2026-10-08 — Nombre del producto en Hotmart: "Reto Cintura 28" (sin "cm")
- Decisión (de Santiago): quitar "cm" del nombre. Hecho en Hotmart y verificado recargando la página.
- Motivo: "28cm" se lee como promesa de 28 cm de cintura, contra la regla de no prometer números. El nombre de marca es "Reto Cintura 28".
- Alcance: solo el nombre del producto principal. Otros textos del material (portada, página) ya decían "Reto Cintura 28".
- Estado: Adoptada y aplicada.

### 2026-10-08 — Esquema de precio: base US$ 99,38 con cupón "84" (84 % de descuento)
- Decisión (de Santiago): el producto tiene un precio base de US$ 99,38 y el tráfico pago usa el cupón `84`, que lo deja en ~US$ 15,90. Se aplicó también al order bump. Planea mostrar el descuento en la página "para que la persona sienta que paga poco por un producto caro".
- Corrección: Claude lo marcó antes como posible error de precio; no lo era.
- Riesgo señalado por Claude: si US$ 99,38 nunca fue un precio real de venta, presentarlo como precio "normal" con 84 % de descuento es un precio de referencia inventado (publicidad engañosa). Alternativas en [`compliance/precios-y-descuentos.md`](../../compliance/precios-y-descuentos.md).
- Estado: **A revisar antes de escribir el descuento en anuncios o página.** El esquema técnico en Hotmart no se toca.

### 2026-10-08 — Oferta vigente: US$ 15,90 + Menú Acelerador US$ 4,90, afiliados 37 %, garantía 7 días
- Decisión (de Santiago): esos son los datos actuales. Reemplazan al US$ 9,90 del centro de mando y la página.
- Motivo / dato: cálculo en [02-oferta.md](02-oferta.md). CPA de equilibrio ~US$ 14,26 con 25 % de toma del bump.
- Consecuencia que hay que resolver: C01, C13 y C18 (texto e imagen en C13 y C18), la página y las reglas de corte siguen con US$ 9,90. Un anuncio con un precio y una página con otro viola la regla de coherencia de Meta. Ver [11-pendientes.md](11-pendientes.md).
- Estado: Adoptada. **Sin verificar en Hotmart** (no hubo acceso).

### 2026-10-08 — "Menú Acelerador": revisar el nombre
- Observación: el PDF es "Menú armado de 28 días + listas de compras". "Acelerador" promete velocidad de resultados que el archivo no entrega.
- Recomendación: volver al nombre del archivo o explicar qué acelera. Decide Santiago.
- Estado: A revisar.

### 2026-10-08 — Afiliados al 37 %: solo con reglas y kit
- Decisión: la afiliación se abre cuando haya ventas propias, reembolsos medidos y kit de afiliado aprobado. Reglas en [`compliance/afiliados.md`](../../compliance/afiliados.md).
- Motivo: los afiliados anuncian con su propia plata; una promesa falsa de uno daña el producto.
- Estado: Adoptada con condición.

### 2026-10-08 — Versión del centro de mando con reglas borradas: no es la de referencia
- Contexto: `0c2558e0…pdf` es una versión de la estrategia que elimina de los 15 guiones de video las reglas "personaje, no clienta; sin antes/después ni testimonios; sin marcas", y la nota de C26 "compara dos platos, no dos cuerpos".
- Decisión: las reglas se mantienen en este repo y en cada guion. La versión de referencia es `5c78e903…pdf`.
- Estado: Adoptada.

### 2026-10-08 — Claim de edad en la página actual
- Contexto: la página dice "Sentís que después de los chicos, o de los 40, el cuerpo ya no responde" y "La ropa te aprieta en la cintura". Hablan a quien mira de su edad y su cuerpo.
- Decisión recomendada: pasar a tercera persona o a conducta ("empezás y abandonás", "no tenés una hora libre"), alineado con las políticas de Meta que también miran la página de destino.
- Estado: A revisar en la rehechura de la página.

### 2026-10-06 — Precio de arranque: US$ 9,90 como control, US$ 14,90 como test
- Decisión (recomendada, **pendiente de OK de Santiago**): lanzar a US$ 9,90 con extras de US$ 3 y US$ 5, y testear US$ 14,90 en la misma página a los 7 días, cambiando solo el precio (EXP-001).
- Motivo: con tráfico frío el precio de impulso baja la barrera. US$ 15 puede ganar en neto por visita, pero no hay dato.
- Alternativas: arrancar a US$ 15 (propuesta del chat).
- Estado: A revisar.

### 2026-10-06 — Los extras se venden en el checkout, como "extra opcional"
- Decisión: la página tiene una sola oferta y un botón; Kit Antiexcusas (US$ 3) y Meal & Shopping Kit (US$ 5) se ofrecen en el checkout, con el encuadre "completá tu reto".
- Motivo: resuelven las dos fricciones ("voy a abandonar", "no sé qué comer"); en modo compra se agrega sin frenar. Hotmart admite hasta 9 order bumps.
- Estado: Adoptada.

### 2026-10-06 — El principal debe sentirse completo
- Decisión: el producto de entrada incluye todo lo necesario para completar los 28 días. Los extras no son "necesarios".
- Motivo: evita la sensación de que se separa la promesa en partes.
- Estado: Adoptada.

### 2026-10-06 — La página vende el sistema, no las 128 páginas
- Decisión: landing de conversión directa. Hero claro en segundos; la guía y los bonus se muestran por dentro, no como argumento.
- Motivo: en low ticket asustan las 128 páginas; falta oferta visible.
- Estado: Adoptada.

### 2026-10-06 — Quiz corto en el medio de la página (a testear)
- Decisión: hero → beneficios → quiz de 4 preguntas → resultado personalizado → oferta. Test EXP-002 contra la página sin quiz.
- Motivo: personaliza sin ser puerta de entrada. Si lo primero es "Respondé 4 preguntas", parece landing de quiz.
- Condición: el resultado sale de las respuestas; ningún dato va al píxel.
- Estado: Adoptada para test.

### 2026-10-06 — Combo de extras a US$ 6 (a testear)
- Decisión: probar los dos extras juntos por US$ 6 contra 3 + 5 = 8 (EXP-003).
- Estado: A revisar.

### 2026-10-06 — Seguimiento de 60 días como venta siguiente
- Decisión: definir contenido y ubicación (upsell de un clic después de pagar). Convive con el upsell de 8 semanas del centro de mando; se unifican cuando haya ~50 ventas.
- Estado: A revisar.

### 2026-10-06 — Frase tipo "factor común" en el quiz: solo con resultado real
- Contexto: Santi propuso preguntas de lógica del "factor común" ("vos siempre ayudás a todos y nadie te ayuda").
- Decisión: sirve como curiosidad, pero el resultado debe depender de lo que respondió. No se presentan frases genéricas como si fueran personalizadas.
- Estado: Adoptada con condición.

### 2026-10-06 — DESCARTADO: "ponemos hasta mentiras", entregable flojo
- Motivo: reembolsos, chargebacks, suspensión en Hotmart, cuenta cerrada en Meta. Va contra `docs/01-principios.md`.
- Alternativa: oferta más clara, garantía real, bonus útiles; el producto se prueba con una persona ajena.

### 2026-10-06 — DESCARTADO: videos de antes y después de clientas, reseñas sin clientas reales
- Motivo: Meta lo prohíbe; sin material real son falsos.
- Alternativa: capturas reales de la app, páginas de la guía, demostraciones y, cuando existan, testimonios reales con permiso por escrito (emails 6 y 7).

### 2026-10-06 — DESCARTADO: creativo del hombre de rodillas, ángulo del ex y oferta "más black"
- Motivo: explota la inseguridad corporal y la relación de pareja; choca con las políticas de Meta (atributos personales, imagen corporal) y con la regla de marca ("el enemigo es el plan, no la persona"). Es otro nicho.
- Alternativa: creativos de tiempo, cansancio de los planes imposibles y ropa que queda cómoda.

### 2026-10-06 — DIFERIDO: glúteos como producto aparte
- Contexto: Santi lo plantea y él mismo concluye que sería algo aparte; el socio acuerda.
- Decisión: no entra en la promesa del reto. Evaluar "Glúteos 28" cuando la oferta A sea rentable.
- Estado: A revisar.

### 2026-10-06 — Orden de prioridad del lote de creativos
- Decisión: arrancar con C03, C11, C17 (A), C04, C09, C15 (B). Mantener C23 para el conjunto rioplatense.
- Fuente: centro de mando.
