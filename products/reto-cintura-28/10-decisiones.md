# 10 · Decisiones

Lo más nuevo arriba. Fuente de las del 2026-10-06: chat entre Santiago y su socio + crítica posterior (ver [fuentes/chat-santi-amigo.md](fuentes/chat-santi-amigo.md)). Fuente de las del 2026-10-08: material y datos que pasó Santiago.

### 2026-10-10 — Descuento encendido: base US$ 45,43 + cupón `LANZAMIENTO65` por dos semanas
- Decisión (de Santiago): mostrar el 65 % al lado del precio, cupón `LANZAMIENTO65` por dos semanas, sin decir en la página cuánto dura; solo "Precio de lanzamiento por tiempo limitado" en rojo chico en el hero, debajo del botón al checkout y al final del quiz.
- Hecho en Hotmart (verificado recargando, 2026-10-10): precio base de la oferta `eucnkmyz` de US$ 99,38 a **US$ 45,43**; cupón **`LANZAMIENTO65`**, 65 %, todas las ofertas, del 10/10/2026 18:39 al **24/10/2026 23:59** (America/Montevideo). El cupón `84` ya no existía; solo estaba `LANZAMIENTO84`.
- Hecho en la página (local): tachado + sticker "−65 %" + ticket "Cupón LANZAMIENTO65 aplicado" + línea roja; sin fecha ni contador (`mostrarFecha`/`mostrarCuenta` en false); `launchEndsAt` = 2026-10-24T23:59-03:00; al vencer pasa sola a US$ 45,43 y saca el cupón del link.
- Quiz: titular según la meta, se usa la respuesta "día a día" (antes no se usaba), "Ver todo lo que incluye" baja al precio, eventos de Clarity por pregunta.
- **Pendiente crítico:** `LANZAMIENTO84` sigue válido hasta el 21/10 y con base 45,43 deja el precio en US$ 7,27. Hotmart no permite desactivarlo, solo eliminarlo: espera OK de Santiago. La página publicada todavía usa ese link hasta que se publique la nueva.
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
