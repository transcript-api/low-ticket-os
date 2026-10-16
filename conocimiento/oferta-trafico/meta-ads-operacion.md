# Meta Ads: estructura de test, corte, escala, tracking y contingencia

Base de conocimiento del dominio **tráfico pago**. Prefijo de IDs: **MA**.
Producto de referencia: **Reto Cintura 28** (Hotmart, US$ 15,90 + bump "Menú" US$ 4,90 al 25 % supuesto, Meta Ads en LATAM, Reels 9:16).
Última síntesis: 2026-10-15.

## Cómo leer este archivo

- **Mandan sobre todo lo de acá:** `docs/01-principios.md`, `compliance/meta-ads-politicas.md` y los umbrales de `playbook/formulas.md`. Si una regla de una fuente choca con eso, figura como **Descartado** con el motivo y el riesgo.
- **Método actual del repo:** `playbook/08-meta-ads.md`, `playbook/09-medicion-y-escala.md` y `products/reto-cintura-28/07-meta-ads.md`. Cada principio dice si **mantiene**, **ajusta** o **agrega** algo a ese método. El contraste completo está en la sección J y el diff propuesto en la K.
- **Fuentes** (IDs de afirmación de las extracciones):
  - `L` = compilado low ticket de Brasil. Cada creador es una fuente independiente: Borba (L01–L44), Gaspar (L45–L86), Asvi y Alexander (L87–L115, una sola fuente), creador LATAM (L116–L130), creador NY (L131–L145), André (L146–L161), Ferreira (L162–L179). `LB` = adiciones del Documento B al mismo compilado. Lo marcado "solo A" o "solo Doc B" cuenta como **cero fuentes** hasta verificarlo contra el habla o la pantalla (`criterio/fuentes.md`).
  - `S`, `B`, `T`, `A`, `H`, `J` = Víctor Heras y su equipo (Viralidad.com). Cuentan como **una sola fuente**.
  - **E1–E4** = evidencia externa ya investigada (hook rate, primeros 3 s, Andromeda, políticas de Meta; ver `SPEC_SINTESIS.md`). **Meta-doc** = documentación pública de Meta (fase de aprendizaje, ediciones significativas, gasto diario, elusión de sistemas). Verificar en el Centro de ayuda si cambia.
- **Confianza:** Alta · Media · Baja · Descartada, según la rúbrica de `SPEC_SINTESIS.md`. Todo lo Media o Baja que se aplica lleva **Hipótesis: testear** con una variable y una métrica principal.
- **"ROI" de los brasileños = facturación ÷ gasto**, que en el repo se llama ROAS. Nunca compares un "ROI 2" brasileño con el CPA del repo sin traducirlo (MA-13 y `metricas-benchmarks.md`, MB-14 y MB-15).
- Moneda: R$ → US$ con la tasa que usa la propia fuente (US$ 10 ≈ R$ 55, L123), solo como orden de magnitud.
- Referencias cruzadas: `oferta-low-ticket.md` (OF-xx), `metricas-benchmarks.md` (MB-xx), `high-ticket-y-ventas.md` (HT-xx), `copy/ganchos.md` (HK-xx), `copy/guiones.md` (GU-xx), `copy/ideas-y-angulos.md` (ID-xx), `organico-produccion/formatos-y-edicion.md` (FE-xx), `organico-produccion/sistema-organico-ig.md` (OR-xx), `criterio/banderas-rojas.md` (BR-xx).

## Resumen en 10 líneas

1. Todo umbral sale de la oferta que está corriendo. Hoy: corte a **US$ 21,38** gastados sin venta, dejar correr hasta **US$ 14,26** de CPA, escalar con CPA ≤ **US$ 9,27** y 3 ventas o más (MA-00).
2. Lote de test = **8 a 10 conceptos distintos** (unos 7 videos y unos 3 estáticos), no 6 anuncios con microvariantes. Andromeda premia la diversidad real (MA-01, MA-20).
3. **ABO para testear, CBO para escalar.** La "CBO 1-1-10" es un solo conjunto con 10 anuncios: el rótulo no agrega nada; lo que decide es cuántos anuncios compiten por el mismo presupuesto (MA-02, MA-03).
4. Antes del gasto de corte, el diagnóstico va por capa: hook rate, hold, CTR de enlace, llegada, IC y compra (MA-10).
5. La regla de 1,5 × CPA de equilibrio sin venta es un buen punto medio: mata un anuncio "de objetivo" solo 1 de cada 10 veces. Excepción: con 2 IC o más, se estira a 2 × y se revisa el checkout (MA-09).
6. **No se apaga por un mal día** lo que tiene historial; se mira en ventanas de 3 días. Un anuncio que casi no gastó no perdió: no fue evaluado (MA-11, MA-12).
7. Escala gradual: +20 a 30 % cada 48 h con CPA ≤ objetivo; +50 % o duplicar a `ESCALA` solo con CPA claramente mejor y 5 ventas o más; nunca más de × 2 por cambio, y los cambios al empezar el día (MA-13 a MA-15).
8. El bid cap "al precio del front" de Gaspar **no sirve hoy** para el Reto: con un ARPU de solo 1,08 veces el front, daría pérdida. Si se usa cost cap, se ancla al CPA de equilibrio u objetivo y solo en escala (MA-17).
9. Tracking: Utmify, UTM por anuncio con el código del creativo en el nombre, una sola zona horaria y solo 4 eventos de píxel (MA-25 a MA-27).
10. Si cae una cuenta, se apela. Multilogin, cuentas de agencia de repuesto y cuentas nuevas para seguir anunciando están **descartados**: es elusión de sistemas y arriesga perder todo (MA-28 a MA-32).

---

## A. Base

### MA-00 · Los umbrales salen de la oferta que está corriendo, y se recalculan con el ARPU real
**Regla.** Corte, "dejar correr" y escala se calculan con `playbook/formulas.md` sobre la oferta vigente. No se copian números de otra oferta ni de otro producto. Con 30 ventas, la tasa supuesta del bump se reemplaza por la real y se recalcula todo.
- **Ámbito:** pago · **Confianza:** Alta (aritmética; Gaspar mide ARPU y CPA por oferta, L59 y L73; regla del repo).
- **Fuentes:** `formulas.md`; L §3.12; L59, L73; OF-32.
- **Números vigentes** (`products/reto-cintura-28/07-meta-ads.md`, verificados con la fórmula):

| Concepto | Cálculo | Valor |
|---|---|---|
| Bruto medio por venta | 15,90 + 4,90 × 0,25 | US$ 17,13 |
| Neto medio | 17,13 − (9,9 % × 17,13 + 0,10) | US$ 15,33 |
| CPA de equilibrio | 15,33 × (1 − 7 %) | **US$ 14,26** |
| CPA objetivo (escalar) | 14,26 × (1 − 35 %) | **US$ 9,27** |
| Apagar sin ventas | 1,5 × 14,26 | **US$ 21,38** |
| ROAS de equilibrio | 17,13 ÷ 14,26 | **1,20** |
| ROAS al CPA objetivo | 17,13 ÷ 9,27 | **1,85** |

- **Por qué:** el CPA que se puede pagar lo define lo que deja cada venta, no el precio del front (OF-24). Un umbral copiado de la oferta A (US$ 13,50) apaga anuncios que con la oferta vigente serían rentables.
- **Contraste con el repo:** se **mantiene**. Se **agrega** la columna de ROAS para poder leer a las fuentes brasileñas y a Utmify en el mismo idioma (MB-15).

---

## B. Estructura de test

### MA-01 · El lote de test son 8 a 10 conceptos distintos, no variantes de uno
**Regla.** Cada lote lleva entre 8 y 10 anuncios que salen de **ideas distintas** (ángulo + concepto) y, cuando se puede, de ejecuciones distintas (formato, persona, escena): unos 7 videos y unos 3 estáticos. Las variantes de gancho de un mismo cuerpo cuentan como **un** concepto. Las microvariantes (flip, velocidad, color) no cuentan.
- **Ámbito:** pago · **Confianza:** **Alta** para la diversidad de conceptos (Ferreira L165, Gaspar L47, Alexander L99, Víctor B37 y A69–A70, más E3). **Media** para la cifra 8–10 y la mezcla 7 + 3 (una fuente; "lo que pide Andromeda" no es una regla oficial, L §7.2).
- **Fuentes:** L165 ("7 em vídeo com ângulos completamente diferentes e 3 em imagem, que é o que a Meta Andrômeda pede"), L99 ("de 10 criativos que eu testei, um tava vendendo constantemente"), L112 (10 creativos por cuenta), L47 ("muito teste de criativo, muito volume"), B37, B40, A69, A70; E3.
- **Por qué funciona:** con segmentación amplia, el creativo es la segmentación (E3, HK-11). Andromeda recupera anuncios para cada persona según el contenido; diez conceptos le dan diez "puertas" a públicos distintos dentro de las mujeres de 25 a 55. Diez versiones del mismo concepto son una sola puerta. Además, si gana 1 de cada 5 a 10 conceptos (MA-20), un lote de 6 deja demasiadas chances de no encontrar ninguno.
- **En Reto Cintura 28 (Adaptación):** hoy el lote 1 tiene 6 anuncios (C03, C11, C17 en el conjunto A y C04, C09, C15 en el B). Sumar 2 a 4 conceptos del banco que no se parezcan a esos seis, de los cuales 2 o 3 sean estáticos (mockup de la app en contexto, FE-13). Mezclar las dos familias de pago: lineal y embudo comprimido (FE-45, Plantillas L y E de `copy/guiones.md`). Nombrar cada pieza `C<concepto>-E<ejecución>-V<variante>` (FE-38).
- **Contradicciones:** Víctor recomienda 20 piezas por tanda (A69), pero en orgánico, donde el costo es solo de producción. En pago cada anuncio necesita gasto para ser evaluado: con US$ 20–25 por día, más de 10 anuncios activos se reparten un presupuesto que no alcanza (MA-12).
- **Hipótesis: testear.** Ya está en FE-42: lote con 3 estáticos contra lote sin estáticos. Métrica: CPA del conjunto a 7 días.

### MA-02 · ABO para testear, CBO para escalar
**Regla.** En el test, el presupuesto va **por conjunto** (ABO), para que cada grupo de conceptos reciba gasto. Lo que gana se duplica en una campaña de escala con presupuesto **de campaña** (CBO), donde Meta mueve la plata hacia lo que vende.
- **Ámbito:** pago · **Confianza:** Media (Gaspar lo dice explícito, L48, con dashboard; Ferreira y André testean con CBO de un solo conjunto, que en la práctica es lo mismo que un ABO de un conjunto, MA-03; el repo ya usa esta lógica).
- **Fuentes:** L48 ("Eu testo em ABO e escalo em CBO"), L63 (un test en ABO con CTR "muy, muy alto"), L47, L171, L160.
- **Por qué funciona:** en ABO, ningún conjunto se queda sin gasto porque otro arrancó mejor en las primeras horas; la comparación es más justa. En CBO, Meta concentra el presupuesto en lo que convierte; eso es eficiente cuando ya sabés qué funciona y peligroso cuando todavía no.
- **En Reto Cintura 28:** se mantiene la estructura de `07-meta-ads.md` (campaña `R28 | TESTEO | VENTAS` con presupuesto por conjunto y campaña `R28 | ESCALA` con presupuesto de campaña). Ajuste: cada conjunto amplio pasa de 3 a **4 o 5 conceptos** (MA-01).
- **Contraste con el repo:** se **mantiene**, con el ajuste de cantidad.

### MA-03 · "CBO 1-1-10": qué es de verdad y qué decide
**Regla.** La "CBO 1-1-10" de Ferreira es 1 campaña, 1 conjunto y 10 anuncios. Con un solo conjunto, el presupuesto de campaña es igual al del conjunto: el rótulo CBO no cambia nada. Lo que sí importa es **cuántos anuncios compiten por el mismo presupuesto**. Dentro de un conjunto, Meta reparte el gasto de forma muy despareja: 2 o 3 anuncios se llevan casi todo.
- **Ámbito:** pago · **Confianza:** Alta para la mecánica (lógica de la herramienta, señalada en L §7.2). Media para la estructura como método (una fuente, con dashboard de 2 días y R$ 360 de gasto total).
- **Fuentes:** L171 ("CBO 1-1-10 com R$ 100 de orçamento diário"), L160 (André, CBO de US$ 3 por día, "1-1-5" solo en A), L §7.2.
- **Por qué importa:** con 10 anuncios en un conjunto, los que Meta descarta en las primeras horas casi no gastan. No perdieron: el sistema los juzgó con señales tempranas (MA-12). Si querés que cada concepto tenga una oportunidad mínima, separalos en conjuntos (ABO); si preferís que Meta elija rápido y barato, juntalos.
- **En Reto Cintura 28:** el lote 1 va con 2 conjuntos ABO de 4 o 5 conceptos cada uno. La versión 1-1-10 (un conjunto con US$ 20–25 y los 8–10 anuncios) es una alternativa más simple y más barata por venta, a costa de que varios conceptos queden sin evaluar.
- **Hipótesis: testear.** Variable: estructura (1 conjunto con 8–10 anuncios contra 2 conjuntos de 4–5), con los mismos creativos y la herramienta de prueba A/B de Meta para que no compitan entre sí. Métrica: CPA del lote a 7 días; secundaria: cuántos conceptos recibieron al menos 1 × CPA de equilibrio de gasto.

### MA-04 · Público amplio y ubicaciones Advantage+: el creativo segmenta
**Regla.** Sin intereses: país, edad, sexo (si el producto lo pide) y ubicaciones Advantage+. El gancho llama a la persona correcta por su dolor en lenguaje cotidiano.
- **Ámbito:** pago · **Confianza:** Alta (creador LATAM L117 segmenta "el mundo todo"; André L160 "público aberto"; Víctor J17–J18 sobre el algoritmo de anuncios; E3).
- **Fuentes:** L117, L160, J17, J18; E3; HK-11; ID-07.
- **Por qué funciona:** con Andromeda, el sistema encuentra a la compradora mejor que una lista de intereses, siempre que el creativo le diga quién es la destinataria. Por eso el gancho tiene que ser "ancho dentro del público": un dolor que tiene la mayoría de las mujeres de 25 a 55 (HK-11), no uno de nicho.
- **En Reto Cintura 28:** se mantiene "mujeres 25-55, ubicaciones Advantage+". Edad mínima siempre 18 o más, obligatoria en anuncios de pérdida de peso (E4, `compliance/meta-ads-politicas.md`).
- **Contradicciones:** J18 dice que "con 50 clics ya sabe qué gente es". Lo que Meta documenta es otra cosa: unos 50 **eventos de optimización** (compras) por conjunto en 7 días para salir del aprendizaje (MA-05). Con clics no alcanza.
- **Contraste con el repo:** se **mantiene**.

### MA-05 · Evento Compra; con US$ 10 por día el conjunto no sale del aprendizaje, y está bien en el test
**Regla.** Se optimiza por Compra. En el test se acepta "Aprendizaje limitado": con el presupuesto de test ningún conjunto llega a 50 compras por semana. En escala, el presupuesto se concentra en pocos conjuntos hasta que cada uno pueda acercarse a ese volumen, antes de abrir más.
- **Ámbito:** pago · **Confianza:** Alta (Meta-doc: ~50 eventos de optimización en 7 días por conjunto; aritmética).
- **Fuentes:** Meta-doc (fase de aprendizaje); J18 (corregido en MA-04); repo.
- **Aritmética para el Reto:** 50 compras × US$ 9,27 = US$ 464 por semana ≈ **US$ 66 por día por conjunto** al CPA objetivo (al de equilibrio, ≈ US$ 102 por día). Un conjunto de US$ 10 por día junta como mucho unas 5 a 8 compras por semana.
- **En Reto Cintura 28:** en el test, no perseguir la salida del aprendizaje. En escala, una campaña CBO `R28 | ESCALA` con 1 o 2 conjuntos amplios, y no 5 conjuntos chicos. Si Meta restringe la optimización por Compra para la categoría, optimizar por Vista de página de destino y medir ventas con Utmify (regla del repo, se mantiene).
- **Contraste con el repo:** se **agrega** la aritmética de aprendizaje, para que nadie lea "Aprendizaje limitado" como falla.

### MA-06 · Hora de inicio: a las 00:00 de la zona horaria de la cuenta, y una sola zona horaria para todo
**Regla.** Programá el inicio de cada campaña nueva a las 00:00 de la zona horaria de la cuenta publicitaria, así el día 1 es completo y comparable. Usá la misma zona horaria en Meta, Hotmart y Utmify para que "el día" signifique lo mismo en los tres.
- **Ámbito:** pago · **Confianza:** Baja (Ferreira programa a las 23:59, L171, sin explicar por qué; L §7.2 lo trata como folklore). La parte de la zona horaria única es control de calidad de datos, no una hipótesis de rendimiento.
- **Fuentes:** L171 ("inicio programado a las 23:59"), L §7.2.
- **Por qué:** lo único demostrable del 23:59 es que el primer día cuenta entero. Si lanzás a las 17:00, el día 1 tiene 7 horas y Meta puede gastar el presupuesto diario de golpe. Con zonas horarias distintas, la venta de las 23:30 en Hotmart cae en "mañana" en Meta y las reglas de 48 h se miden mal.
- **En Reto Cintura 28:** verificar la zona horaria de la cuenta publicitaria antes de lanzar y alinear Utmify y la lectura de Hotmart a esa zona.
- **Contraste con el repo:** se **agrega** (no estaba).

### MA-07 · Presupuesto y duración del test: cuántas ventas esperar y cuándo no concluir
**Regla.** US$ 20 a 25 por día durante 5 a 7 días (repo). Antes de lanzar, calculá cuántas ventas da ese gasto en el mejor y el peor caso. Con menos de ~10 ventas en el lote, la decisión es "seguir testeando", no "ganó" ni "perdió".
- **Ámbito:** pago · **Confianza:** Alta (aritmética; regla de muestra del repo, 09).
- **Fuentes:** repo (08 y 09); L171 (Ferreira, R$ 100 por día ≈ US$ 18); L160 (André, US$ 3 por día); L172 y L177 (2 días de muestra).
- **Aritmética para el Reto:** 7 días × US$ 20–25 = US$ 140 a 175. Al CPA objetivo (9,27), 15 a 19 ventas; al de equilibrio (14,26), 10 a 12. Eso alcanza para elegir conceptos que pasan a la etapa siguiente, no para declarar el ARPU real (hacen falta 30 ventas, OF-32).
- **Contradicciones:** Ferreira "valida" y escala en 2 días con R$ 360 de gasto total (L172–L177). Es muestra chica (L §6) y su resultado mezcla bumps y escala el mismo día (OF-28). André arranca con US$ 3 por día (L160), que con un CPA del orden de US$ 9–14 da menos de una venta cada 3 días: no se puede leer nada en una semana.
- **Contraste con el repo:** se **mantiene**; se agrega la cuenta de ventas esperadas.

---

## C. Reglas de corte

### MA-08 · Las primeras 72 horas no se toca nada, salvo el corte por gasto; y nunca se edita un anuncio activo
**Regla.** 72 horas sin cambios, salvo apagar lo que llegó al gasto de corte (MA-09). Para cambiar texto, gancho o enlace de un anuncio que ya corre, se **duplica**; no se edita el que está activo.
- **Ámbito:** pago · **Confianza:** Media-Alta (repo; Gaspar L64 "Fazer nada. Só esperar cair as vendas", entre revisión y revisión; Meta-doc: cambios de creativo, segmentación, puja o presupuesto grande son ediciones significativas que reinician el aprendizaje).
- **Fuentes:** repo (regla 1); L64; Meta-doc.
- **Por qué:** cada edición significativa reinicia el aprendizaje y le saca a Meta los datos que ya juntó. Editar el anuncio también resetea su revisión y puede perder interacciones acumuladas.
- **Contraste con el repo:** se **mantiene**; se agrega "duplicar, no editar".

### MA-09 · Corte por gasto sin venta: 1,5 × CPA de equilibrio, con una excepción por IC
**Regla.** Apagá el anuncio que gastó **1,5 × CPA de equilibrio sin ninguna venta** (hoy US$ 21,38). Excepción: si en ese gasto trajo **2 o más inicios de checkout (IC)**, estiralo hasta 2 × (US$ 28,52) y revisá el checkout antes de culpar al creativo.
- **Ámbito:** pago · **Confianza:** **Alta** para el umbral como punto medio (aritmética de abajo; tres fuentes cortan entre 1 y 1,5 × CPA). **Media** para la excepción por IC (Borba L07 y L09 con dashboard; frase de Ferreira solo en Doc B, LB08) → **Hipótesis: testear.**
- **Fuentes:** repo (regla 2); L173 (Ferreira: "Os criativos que gastaram R$ 10 e não venderam, eu pausei", 1 ticket de front ≈ 1,15 × su CPA); LB18 (matiz "más de R$ 10", solo Doc B); L71 (Gaspar apaga lo que "já bateu o CPA" sin vender); L §7.2 (R$ 10 son ~200–650 impresiones: muy poco); OF-37; LB08.
- **Por qué (aritmética):** si un anuncio tiene un CPA real *c*, la probabilidad de gastar *S* sin ninguna venta es aproximadamente e^(−S/c) (modelo de Poisson).

| Regla de corte | Anuncio con CPA real = objetivo (9,27) | Anuncio con CPA real = equilibrio (14,26) |
|---|---|---|
| 1 × front (Ferreira, US$ 15,90) | 18 % de chance de matarlo por error | 33 % |
| **1,5 × CPA eq. (repo, US$ 21,38)** | **10 %** | **22 %** |
| 2 × CPA eq. (US$ 28,52) | 5 % | 14 % |

  La regla del repo mata un anuncio "de objetivo" 1 de cada 10 veces y uno "de equilibrio" 1 de cada 5. Es un costo aceptable a cambio de no regalar gasto. La de Ferreira es más agresiva y solo cierra con mucho volumen de creativos.
- **Por qué la excepción:** un IC dice que el creativo y la página convencieron. Si no hay compra, puede ser pago rechazado, moneda o cuotas (OF-37), y eso no se arregla apagando el anuncio.
- **En Reto Cintura 28:** umbral US$ 21,38; con IC ≥ 2, US$ 28,52 y revisión en Hotmart de compras rechazadas por país.
- **Hipótesis: testear.** Variable: corte a 1,5 × contra 2 × cuando hay IC ≥ 2 (registrar cada caso en `10-decisiones.md`). Métrica: % de anuncios "salvados" que terminan con CPA ≤ equilibrio a 7 días.
- **Contraste con el repo:** se **mantiene** el umbral; se **agrega** la excepción por IC.

### MA-10 · Antes del gasto de corte, diagnóstico por capa
**Regla.** Cada anuncio se lee en este orden, y la acción cambia según dónde falla. Con más de 2.000 impresiones ya se puede mirar la parte de arriba.

| Capa | Métrica (definición en MB) | Señal mala (arranque, hipótesis) | Qué se cambia |
|---|---|---|---|
| Gancho | Hook rate (MB-01) | Menos de 30 % (HK-01) | El gancho; el cuerpo se mantiene (HK-14) |
| Cuerpo | Hold rate (MB-02) | Menos de 20 % | Ritmo, promesa cumplida, resets visuales (GU-12) |
| Llegada al precio | Retención al momento del precio (MB-03) | Cae mucho antes del precio | Mover el producto antes o acortar (GU-07) |
| Clic | CTR de enlace (MB-04) | Menos de 0,8 % | Transición y CTA (GU-09, GU-16) |
| Página | Vistas de página ÷ clics (MB-07) | Muy por debajo de ~90 % (Borba: 91,8 %) | Velocidad de carga, enlace roto |
| Página | IC ÷ clics (MB-08) | Muy por debajo del promedio del lote | Coherencia anuncio–página (OF-00) |
| Checkout | Compras ÷ IC (MB-09) | IC sin compras | Medios de pago, país (OF-37) |

- **Ámbito:** pago · **Confianza:** **Alta** para el orden (E1, E2, HK-01, HK-02; ningún creador brasileño mide hook ni hold, L §7.2, pero la lógica de embudo es aritmética). **Media** para los umbrales: vienen de evidencia externa general, no de este nicho → se reemplazan por la mediana propia con 20 anuncios.
- **Fuentes:** repo (regla 3); E1, E2; HK-01, HK-02; L07 (embudo de Borba en Utmify); L §7.2.
- **Por qué:** un anuncio que no vende puede fallar en cinco lugares distintos. Si lo apagás sin mirar dónde falla, tirás también la parte que funcionaba (por ejemplo, un cuerpo que convierte con un gancho flojo).
- **Contraste con el repo:** se **mantiene** la regla de CTR; se **agregan** hook rate, hold rate, llegada e IC.

### MA-11 · No se apaga por un mal día: lo que tiene historial se juzga en ventanas de 3 días
**Regla.** Un anuncio o conjunto con historial (3 ventas o más) se juzga por su CPA de los **últimos 3 días**, no por el de hoy. Se apaga si ese CPA supera el de equilibrio. Un conjunto **sin historial** que pasa **2 días seguidos** sin ventas habiendo gastado el umbral de corte, se apaga.
- **Ámbito:** pago · **Confianza:** Media (Gaspar, una fuente con dashboard; L §7.1 lo considera razonable; consistente con la varianza diaria de muestras chicas).
- **Fuentes:** L51 ("são campanhas que já me deram resultado em outros dias"), L58 ("ele já me deu 11 vendas em um dia"), L52 ("ontem e hoje já não me deu resultado, então eu vou matar"), L §7.1.
- **Por qué:** con 1 o 2 ventas esperadas por día, un día con cero ventas es normal aunque el anuncio sea bueno (con 1,5 ventas esperadas, la probabilidad de un día en cero es ≈ 22 %). Mirar un solo día confunde ruido con señal.
- **En Reto Cintura 28:** hoja diaria con la columna "CPA 3 días" por anuncio. Decisiones de apagar lo que tiene historial, solo con esa columna.
- **Contraste con el repo:** se **agrega** (el repo no dice qué hacer con un ganador que tiene un mal día).

### MA-12 · Un anuncio que casi no gastó no perdió: no fue evaluado
**Regla.** Si a los 7 días un anuncio gastó menos de 0,5 × CPA de equilibrio (hoy ≈ US$ 7), se marca "no evaluado", no "perdedor". Si el concepto te parece fuerte, vuelve en el lote siguiente con otra ejecución o en un conjunto propio.
- **Ámbito:** pago · **Confianza:** Media (mecánica de reparto despareja dentro del conjunto, L §7.2; consistente con MA-03).
- **Fuentes:** L §7.2; L99 (de 10 creativos, 1 vendía constante: los otros no necesariamente se probaron igual).
- **Por qué:** Meta decide en horas a qué anuncio darle gasto, con señales tempranas. Eso no es lo mismo que un test. Registrar "perdió" sin gasto contamina el banco de ángulos (ID-14).
- **Contraste con el repo:** se **agrega**.

---

## D. Reglas de escala

### MA-13 · Escalones de escala por CPA, con la traducción del "ROI" brasileño
**Regla.** Se escala por escalones según el CPA de los últimos 3 días y la cantidad de ventas:

| Situación (oferta vigente) | Equivale a ROAS ("ROI" brasileño) | Acción |
|---|---|---|
| CPA > 14,26 (sobre equilibrio) | < 1,20 | Bajar o apagar (MA-11) |
| CPA entre 9,27 y 14,26 | 1,20 a 1,85 | Dejar correr, sin subir |
| CPA ≤ 9,27 con 3 ventas o más | ≥ 1,85 | **+20 a 30 %** cada 48 h |
| CPA ≤ ~6,85 con 5 ventas o más | ≥ 2,5 | **+50 %** o duplicar el anuncio en `R28 | ESCALA` |

- **Ámbito:** pago · **Confianza:** **Alta** para escalar de a escalones y solo con CPA bajo el objetivo (Gaspar y Ferreira, independientes, con dashboard; repo; Meta-doc sobre ediciones grandes). **Media** para los cortes exactos de la tabla (traducción propia de lo que hacen ellos) → **Hipótesis: testear.**
- **Fuentes:** repo (regla 5); L49 (CBO con ROI 7: 50 → 75), L53 (ROI 10: 30 → 60), L68 (ROI 5: → 130 "não vou dobrar"), L69 (ROI 5: +40), L72 (ROI 2,47: 60 → 90), L175 (Ferreira: "como o ROI tava acima de 2, dobrei o orçamento da CBO para R$ 200"), L84 (testea +20, +30, +40 % o × 2), LB14 (escalones R$ 50 → 800); L86 y L176 (reglas "ROI > 2" y "ROI 1,5–2 → +50 %", **solo A: cero fuentes**).
- **Por qué funciona:** subir de a poco le deja a Meta encontrar más compradoras parecidas sin reiniciar el aprendizaje en cada cambio. Subir solo con CPA claramente bajo el objetivo deja margen para que el CPA empeore al escalar (siempre empeora algo).
- **Traducción:** el "ROI ≥ 2" con el que Ferreira duplica equivale, en el Reto, a un CPA ≤ US$ 8,56, apenas mejor que el objetivo del repo (9,27). Las dos reglas están cerca; la del repo es un poco más permisiva para el escalón chico.
- **Hipótesis: testear.** Variable: ritmo de escala (+20 % contra +50 % cada 48 h) en dos conjuntos ganadores parecidos. Métrica: CPA de los 7 días siguientes a la subida. Gaspar recomienda exactamente esto: testear el ritmo en la propia operación (L84).
- **Contraste con el repo:** se **ajusta**: el repo tiene un solo escalón (+20 % o duplicar); se agrega el escalón alto con más ventas.

### MA-14 · Tope por cambio: nunca más de × 2; la escala fuerte se hace duplicando, no multiplicando
**Regla.** Ningún cambio de presupuesto supera × 2. Lo normal es +20 a 50 %. Para crecer más rápido, se duplica el anuncio ganador en `R28 | ESCALA` (escala horizontal) en vez de triplicar el presupuesto del conjunto original.
- **Ámbito:** pago · **Confianza:** Alta (Gaspar casi nunca duplica y avisa del riesgo; Borba corre el mismo creativo en varias campañas a la vez con ROAS 2,24 a 3,20; Meta-doc).
- **Fuentes:** L49 ("Eu vou passar pra 75, tá? Não vou jogar pra 100"), L68, L76 (150 → 300: "puede salir muy mal"), L66 (la oferta que tambalea: "fiz escala errada, teve muito dia que eu não otimizei campanha"), L11 (Borba: "125 de lucro, 142 de lucro, em campanhas diferentes"); Meta-doc.
- **Por qué:** un salto grande es una edición significativa y además obliga a Meta a salir a buscar mucha gente nueva de golpe. Duplicar el anuncio en otra campaña deja intacto el conjunto que funciona.
- **En Reto Cintura 28 (práctica estándar, fuera de las fuentes):** al duplicar, usar la **publicación existente** del anuncio ganador (mismo identificador) para que conserve comentarios e interacciones.
- **Contraste con el repo:** se **mantiene** "duplicar en ESCALA"; se **agrega** el tope × 2.

### MA-15 · Los cambios se hacen al empezar el día de la cuenta, mirando cuándo vende la oferta
**Regla.** Subidas de presupuesto, en la primera revisión del día (temprano en la zona horaria de la cuenta). No se juzga el día antes de la noche. Con unas 50 ventas, se mira en Utmify en qué franja horaria vende la oferta.
- **Ámbito:** pago · **Confianza:** Baja para "cada oferta tiene su franja" (Gaspar, sin evidencia). Media para el horario de los cambios (Meta-doc: un día puede gastar hasta 75 % más que el presupuesto diario si ve oportunidades, sin pasar 7 × el diario en la semana; un aumento a la tarde puede gastarse en las horas que peor venden).
- **Fuentes:** L65 ("tende a dar muita venda lá pro final do dia"), L70 ("De tarde não vende muito aqui essa oferta"), L74 (−80 a las 18:30 con el panel total en +400); Meta-doc.
- **En Reto Cintura 28:** cambios en la revisión de la mañana. Nada de decidir a las 15:00 que "hoy no vende".
- **Hipótesis: testear** (con ≥ 50 ventas): programación horaria del anuncio (todo el día contra excluir la franja que peor vende). Métrica: CPA a 7 días. Solo si los datos muestran una franja claramente peor.
- **Contraste con el repo:** se **agrega**.

### MA-16 · "Susto" de presupuesto y serrucho: no en el test; como mucho, experimento en escala
**Regla.** Bajar el presupuesto "para darle un susto" a la campaña, o bajar y subir en serrucho para "bajar el CPA", no se usa en la etapa de test. Si se quiere probar, es un experimento registrado, en una campaña de escala con historial.
- **Ámbito:** pago · **Confianza:** Baja (una sola fuente, sin evidencia; la lectura "reiniciar el aprendizaje" es de Gemini, no del orador, LB21; L §7.2 lo trata como folklore).
- **Fuentes:** L57 ("colocar pra 30 pila pra ver se dá um sustinho"), L75, L81, L83 ("Abaixar o orçamento, abaixar o CPA, cair venda, e aí depois eu aumento o orçamento de novo"), LB21, LB20 ("Cassino Ads").
- **Por qué no en el test:** con presupuestos chicos, cada cambio reinicia un aprendizaje que nunca terminó (MA-05) y no deja leer nada. El propio Gaspar llama a la plataforma "Cassino Ads": parte de lo que él atribuye al susto puede ser varianza.
- **Hipótesis: testear** (solo en escala). Variable: bajar 50 % durante 24 h y volver, contra no tocar, en dos campañas con CPA parecido que empeoró. Métrica: CPA de los 3 días siguientes.
- **Contraste con el repo:** el repo no lo menciona; se **agrega** como "no hacer en test".

### MA-17 · Bid cap y cost cap: anclalos al CPA que podés pagar, nunca al precio del front si tu ARPU no lo banca
**Regla.** El tope de puja se ancla a un CPA que deje ganancia: **cost cap** al CPA de equilibrio (US$ 14) para arrancar, y se baja de a poco hacia el objetivo (US$ 9,27). Solo en escala, nunca en el test. El **bid cap** (tope por subasta) no se usa con presupuesto de test: limita cada puja, no el CPA promedio, y suele dejar la campaña sin entrega.
- **Ámbito:** pago · **Confianza:** Alta para la aritmética del ancla. Baja para "bid cap igual al ticket = ROI seguro" (una fuente; exagera, L §3.6 y §7.2).
- **Fuentes:** L47 ("É bid cap, CBO e muito teste de criativo"), L55 ("Limite de lance tá 21. Eu vou agora abaixar pro nosso ticket, nosso primeiro ticket da oferta"), L56 ("vou abaixando gradualmente... aí é ROI na certa"), L §3.6, L §7.2.
- **Por qué funciona el ancla de Gaspar en su caso:** si el CPA queda en el precio del front y el ARPU es 2,5 a 5 veces el front (bumps, plan completo, downsell), el ROAS mínimo es ARPU ÷ front. Con el ARPU de Borba (≈ 3 × el front), eso da ROAS ≥ 2,5–3.
- **Por qué NO sirve hoy en el Reto (aritmética):** ARPU bruto 17,13 ÷ front 15,90 = **1,08**, por debajo del ROAS de equilibrio (1,20). Con CPA = US$ 15,90, cada venta pierde US$ 1,64 (14,26 − 15,90). Para que el ancla al front cubra el equilibrio, el ARPU bruto tendría que llegar a ≈ US$ 19,1; para dar el ROAS del objetivo (1,85), a ≈ US$ 29,4. Eso solo es posible con una escalera de planes (OF-29).
- **Fórmula general:** `Tope = Neto medio × (1 − r) × (1 − m)` (el CPA objetivo). El ancla al front solo vale si `Bruto medio ÷ front ≥ ROAS objetivo`.
- **Hipótesis: testear** (en escala). Variable: estrategia de puja (volumen más alto contra cost cap a US$ 14) en una campaña duplicada. Métrica: CPA y gasto efectivo a 7 días (si el cost cap no gasta, no sirve aunque el CPA se vea lindo). Como condición previa, presupuesto diario de varias veces el tope (hipótesis: ≥ 3 ×), para que tenga margen de entregar.
- **Contraste con el repo:** se **agrega** (el repo no habla de puja).

### MA-18 · Revisión a hora fija y registro de cada decisión
**Regla.** En test, una revisión por día a la misma hora y acciones solo cada 48 h (salvo el corte). En escala, dos revisiones por día (mañana y noche). Toda acción va a `10-decisiones.md` con dato y regla.
- **Ámbito:** pago · **Confianza:** Media (Gaspar con vlog por horas: 10:00, 11:00, 14:19, 18:30, 20:30; reconoce que perdió una oferta por "días sin optimizar"; regla de registro del repo).
- **Fuentes:** L64, L66, L67 ("Acorda cedo, vai otimizando ela... Não deixa o momento passar"); repo (registro, ritmo de 09).
- **Por qué:** la disciplina evita las dos fallas que reconoce Gaspar: tocar todo el tiempo y abandonar una oferta que funciona.
- **Contraste con el repo:** se **mantiene** el ritmo de 09; se agrega la segunda revisión en escala.

### MA-19 · La caja limita la escala: prever el retiro de Hotmart
**Regla.** Antes de escalar, calculá cuántos días de gasto podés bancar sin retirar ventas. El creador LATAM dice que Hotmart tarda ~15 días en liberar el retiro de las ventas en dólares (verificar en la cuenta propia).
- **Ámbito:** pago · **Confianza:** Media (una fuente, plausible, L §7.1; la parte de la caja es aritmética).
- **Fuentes:** L129 ("demora um pouco para liberar o saque, cerca de 15 dias"), LB05 (si R$ 100 vuelven R$ 500, "vai dar o seu jeito"; atribución dudosa).
- **En Reto Cintura 28 (Adaptación):** caja mínima para escalar = presupuesto diario × días hasta que se libera la primera tanda de ventas (≈ 15, a verificar) + margen para reembolsos.
- **Contraste con el repo:** se **agrega**.

---

## E. Andromeda, diversidad creativa y fatiga

### MA-20 · Esperá que gane 1 de cada 5 a 10 conceptos y planificá el volumen con eso
**Regla.** La reposición de creativos se calcula con la tasa de acierto. Con 10 a 20 % de ganadores, 3 creativos nuevos por semana dan menos de un ganador por semana. Propuesta: un lote semanal de 6 a 10 piezas, mitad **ejecuciones nuevas del concepto ganador** (otro formato, otra escena, no solo otro gancho) y mitad **conceptos nuevos**.
- **Ámbito:** pago · **Confianza:** Media (la tasa de 10–20 % viene de Víctor en orgánico, S69, H22, A70, y coincide con Alexander en pago, L99: 1 de 10; aritmética para el volumen).
- **Fuentes:** S69 ("entre 2 y 4 van a irse por encima de la media"), H21–H22 (10–20 %, o 5 de 20 "es un completo éxito"), A70 ("El 80% no va a funcionar"), L99; H19 y S81 (cada tanda se evalúa por la información que deja: "Cuando un vídeo funciona te da información, no solo visitas"); repo (regla 7); FE-41, ID-15, OR-28.
- **Por qué:** con Andromeda, si todos los creativos nuevos son "el ángulo ganador con otro gancho", el sistema los ve como el mismo concepto y no encuentra públicos nuevos (FE-38, HK-15). La fatiga llega igual, solo que más tarde.
- **En Reto Cintura 28:** cada semana, 3 a 5 fotocopias del ganador en ejecuciones distintas (FE-41) + 3 a 5 conceptos nuevos del banco (ID-14).
- **Hipótesis: testear.** Variable: composición del lote semanal (solo iteraciones del ganador contra mitad y mitad). Métrica: CPA de la cuenta en las 2 semanas siguientes y semanas hasta que la frecuencia pasa de 3.
- **Contraste con el repo:** se **ajusta** la regla 7 ("cada semana, 3 creativos nuevos con el ángulo ganador").

### MA-21 · Fatiga: frecuencia mayor a 3 en 7 días, CTR que cae y CPA que sube
**Regla.** Cuando la frecuencia del conjunto supera 3 en 7 días, o el CTR de enlace cae y el CPA sube durante 3 días, entra el lote siguiente. No se "reactiva" un anuncio cansado con microvariantes.
- **Ámbito:** pago · **Confianza:** Media (repo; consistente con E3). La tesis de Víctor de que "Instagram te sube el costo cuando detecta que pagás" (S21–S22) se reinterpreta como fatiga medible (MA-31).
- **Fuentes:** repo (regla 6); `formulas.md` (frecuencia); FE-40.
- **Contraste con el repo:** se **mantiene**; se agregan las señales de CTR y CPA a 3 días.

### MA-22 · Mismo cuerpo, varios ganchos: es iteración del ganador, no diversidad
**Regla.** Cambiar solo los primeros 2–3 s de un cuerpo que ya vende es la forma más barata de mejorar un ganador. En el lote cuenta como un concepto.
- **Ámbito:** pago · **Confianza:** Alta (Borba L38–L40, Alexander L107–L109, Víctor; ver HK-14 y FE-39, donde está desarrollado).
- **Fuentes:** L38 ("só muda ali o hook, que é o ângulo que eu tô atacando"), L107–L109; HK-14, HK-15, FE-39.
- **Contraste con el repo:** consistente con `06-creativos.md`. Se aclara cómo se cuenta en el lote.

---

## F. Retargeting

### MA-23 · Retargeting por nivel de consciencia, chico y desde ~1.000 visitas
**Regla.** El retargeting le habla a quien ya conoce el problema y el producto (niveles 3–4): precio, qué recibe, garantía, producto por dentro. Se abre con ~1.000 visitas, con presupuesto chico y fijo, y siempre excluyendo compradoras.
- **Ámbito:** pago · **Confianza:** Media (repo; Víctor y su equipo con los niveles de consciencia, B53–B56 y A76–A78, y el caso Alfredo de "microanuncios de retargeting" a quienes vieron el orgánico, S99, con capturas; los brasileños no lo mencionan).
- **Fuentes:** repo (conjunto RT); B53–B56; A76–A78; S99; OR-39; ID-06.
- **En Reto Cintura 28:**
  - **Públicos:** visitantes de la página de 7 días sin compra; IC de 7 días sin compra; quienes vieron el 50 % o más de un anuncio en 14 días (cuando haya volumen). Excluir compradoras de 180 días.
  - **Creativos:** Plantilla D de demostración (`copy/guiones.md`), objeciones y garantía, precio y "pago único" (GU-17). Los C28, C29, C14, C13, C18 y C21 del repo.
  - **Presupuesto:** US$ 3–5 por día (repo). A US$ 20–25 por día, 1.000 visitas llegan recién después del test: el retargeting es de la etapa 2.
  - **Política:** nada que diga o insinúe algo de quien mira ("¿Volviste porque te cuesta bajar la panza?" está prohibido, BR-23). El retargeting usa solo eventos de navegación (MA-26).
- **Contraste con el repo:** se **mantiene**; se agregan el público de IC, el de video y el tipo de creativo.

---

## G. Países, idioma y moneda

### MA-24 · Países: LATAM amplio, rioplatense aparte, y un test de hispanohablantes en EE. UU. y España
**Regla.** Se mantiene el conjunto amplio LATAM y el rioplatense medido aparte. Como hipótesis, un conjunto separado con EE. UU. (incluido Puerto Rico) y España en español, con el texto principal en "tú".
- **Ámbito:** pago · **Confianza:** Media (creador LATAM con mapa de Hotmart: ventas en 55 países; los que más compran son Colombia, México, EE. UU., Chile, España, Perú, Ecuador, Costa Rica, Puerto Rico, República Dominicana y Paraguay; una fuente).
- **Fuentes:** L117 ("a gente faz segmentar o mundo todo"), L118 (US$ 142.314,35 en agosto, 55 países), L120, L124 (600 contra 201 millones de hablantes: comparación entre cosas distintas, L §7.2); repo.
- **Por qué:** EE. UU. y España tienen más poder de compra y suelen tener CPM más alto. Medidos aparte, se ve si el CPA cierra sin contaminar el conjunto LATAM.
- **En Reto Cintura 28:** la lista del repo no incluye EE. UU., Puerto Rico ni España, que en la fuente están entre los que más compran.
- **Hipótesis: testear.** Variable: conjunto "Hispanohablantes EE. UU. + PR + España" (segmentación por idioma español), con los mismos 4–5 anuncios ganadores. Métrica: CPA a 7 días contra el conjunto LATAM.
- **Contraste con el repo:** se **agrega**.

### MA-25 · Moneda, precio y voseo
**Regla.** Cuenta publicitaria en USD (repo). Hotmart cobra en moneda local y convierte a dólares. En Argentina, pagar en dólares tiene recargos: medir aparte. Voseo para rioplatenses; "tú" para México, Colombia, Centroamérica, EE. UU. y España.
- **Ámbito:** pago · **Confianza:** Media (L119 es consistente con cómo funciona Hotmart; repo).
- **Fuentes:** L119 ("a Hotmart converte todas essas transações internacionais pro dólar"), L121–L123 (poder de compra; la tabla de salarios mínimos solo está en A, L122, cero fuentes), L61 contra L126 (CPM LATAM de R$ 40–54 contra R$ 14,20: se contradicen), LB16 (CPC LATAM contra Brasil, solo Doc B); repo; FE-33.
- **Por qué:** el precio de US$ 10–16 pesa distinto según el país (L123: en México, US$ 10 ≈ 2,4 % del salario mínimo, cálculo de A). El CPM también cambia por país y nicho: no hay un "CPM LATAM" único (MB-05).
- **Contraste con el repo:** se **mantiene** (test de voseo contra "tú" en México y Colombia).

---

## H. Tracking

### MA-26 · Utmify, UTM por anuncio y nombres con el código del creativo
**Regla.** Utmify conectado a Hotmart y a la cuenta publicitaria; los parámetros UTM del repo en cada anuncio; el script de UTM de Utmify en la página, para que los parámetros lleguen al checkout de Hotmart; y el nombre de cada anuncio con su código `C<concepto>-E<ejecución>-V<variante>`, así la venta queda atribuida a la pieza exacta.
- **Ámbito:** pago · **Confianza:** Alta (Ferreira con capturas, L170; Víctor y su equipo con el caso de Ramón, S93–S94; Borba, Gaspar y Ferreira leen todo en Utmify; repo).
- **Fuentes:** repo (UTM); L170 ("gerei a credencial de API, colei o token no app da Cakto"; script de UTM en la página y píxel); S93 ("La UTM te dice de qué vídeo exacto viene esa persona"); S94 (Ramón: un Reel con 55.000 USD en ventas trazadas por UTM); L07; L59.
- **Por qué:** sin el nombre codificado, Utmify dice "C03 vendió", pero no qué concepto, ejecución y gancho. Con el código, el banco de ángulos se alimenta solo (ID-14) y el sistema multiagente puede cruzar ganchos con ventas.
- **En Reto Cintura 28:**
  - Nombre del anuncio: `C03-E1-V2 | plan-imposible | HAC | gancho-lunes`.
  - Compra de prueba antes de gastar: tiene que aparecer en Utmify atribuida al anuncio de prueba (checklist del repo).
  - Una sola fuente de verdad: **ventas y ARPU, de Utmify y Hotmart**; entrega (impresiones, hook rate, CTR), de Meta. Si Meta y Utmify no coinciden en las compras, manda Utmify.
- **Contraste con el repo:** se **mantiene**; se agregan el script de UTM, el nombre codificado y la regla de fuente de verdad.

### MA-27 · Solo 4 eventos de píxel, y el IC por creativo como indicador adelantado
**Regla.** El píxel manda solo PageView, ViewContent, InitiateCheckout y Purchase (principio 3 del repo). Nunca respuestas del quiz, medidas ni datos de salud. El IC por creativo se mira como indicador adelantado: un creativo con IC alto y pocas compras apunta al checkout (OF-37).
- **Ámbito:** pago · **Confianza:** Alta para los eventos (regla del negocio). Media para el IC adelantado (Borba con dashboard, L07; frase de Ferreira solo en Doc B, LB08).
- **Fuentes:** `docs/01-principios.md` §3; LB08 ("Porque eu tô com muito IC, saca?"); L07 (embudo de Borba: IC 31,2 % sobre clics); OF-37.
- **Contraste con el repo:** se **mantiene**; se agrega la lectura del IC por creativo.

---

## I. Contingencia de cuentas

### MA-28 · Contingencia legítima: lo que sí se hace para no depender de la suerte
**Regla.** La protección contra un bloqueo es preventiva y por canales oficiales:
1. Portafolio comercial verificado, con 2 administradores reales y verificación en dos pasos.
2. Cada creativo pasa `compliance/checklist-previa.md` antes de subir (la mayoría de los bloqueos en salud y peso vienen de anuncios rechazados que se acumulan).
3. Si Meta restringe algo, se pide revisión desde **Calidad de la cuenta** y se corrige lo señalado.
4. Un canal propio de respaldo: lista de compradoras por email, cuenta orgánica (OR-xx) y afiliados cuando abra esa fase (09).
5. Página en dominio propio con direcciones neutras (repo).
- **Ámbito:** pago · **Confianza:** Alta (reglas del negocio; Meta-doc).
- **Fuentes:** repo (08, `compliance/`); `docs/01-principios.md`; L §7.3.
- **Contraste con el repo:** se **agrega** como sección.

### MA-29 · DESCARTADO: navegadores multilogin o antidetección para "subir anuncios sin riesgo de bloqueo"
**Regla descartada.** Usar MoreLogin u otro navegador que aísla perfiles de Facebook para manejar cuentas que Meta no vincule.
- **Fuentes:** L159 ("Pra subir os anúncios sem risco de bloqueio, usei o MoreLogin"), LB13 (precios), LB25 (link de socio con descuento: André cobra comisión por recomendarlo); BR-03.
- **Motivo:** su único propósito es que Meta no detecte la relación entre cuentas, o sea, eludir los sistemas de cumplimiento. Meta lo prohíbe expresamente.
- **Riesgo:** inhabilitación permanente del portafolio, de los perfiles personales vinculados, de las páginas y de los medios de pago; pérdida del historial del píxel. Para el Reto, perder la cuenta es perder el único canal de venta.

### MA-30 · DESCARTADO: cuentas de agencia como "repuesto" cuando Meta bloquea
**Regla descartada.** Alquilar cuentas de agencia (pagando ~10 % de lo invertido) para que, si una cae, "la desvinculen y te den otra al instante".
- **Fuentes:** L111 ("Você paga 10% do que você investe... desvinculam na hora e te dão outra"), L112 (10 creativos × 3 cuentas); BR-01.
- **Motivo:** usar una cuenta nueva para seguir publicando lo que Meta restringió es elusión, aunque la cuenta sea "de agencia". Las cuentas de agencia legítimas existen para clientes de agencias reales, no como repuesto para sancionados.
- **Riesgo:** el mismo de MA-29, más depender de un tercero que controla tus activos, y un costo fijo de 10 % del gasto que por sí solo se come buena parte del margen (con el CPA objetivo, el lucro por venta es ≈ 35 % del CPA de equilibrio).

### MA-31 · DESCARTADO: "lateralizar" en más cuentas, abrir cuentas nuevas o migrar a otro portafolio después de una restricción
**Regla descartada.** Subir el mismo ganador en varias cuentas "para esquivar la estacionalidad" o los bloqueos, o crear o mudarse a otra cuenta publicitaria o portafolio cuando una queda restringida.
- **Fuentes:** L100 ("decidi também lateralizar em mais contas"), L114 ("quanto mais contas de anúncio você sobe...", **solo A**), L101 (la propia fuente pierde ~2k de lucro por "uma conta lá que tá desativada"); BR-02, BR-04; OR-23 (la migración de seguidores en orgánico es otra cosa: es legal y cara).
- **Motivo:** las políticas de Meta prohíben crear o usar cuentas nuevas para seguir anunciando después de una restricción. Distinto es tener una segunda cuenta **legítima** para otro negocio real, que no se usa para esquivar nada.
- **Riesgo:** Meta vincula cuentas por persona, dispositivo, medio de pago y dominio; cuando detecta la elusión, inhabilita todo el grupo.

### MA-32 · DESCARTADO: "los anuncios intoxican la cuenta" e "Instagram te cobra más cuando detecta que pagás"
**Regla descartada.** Que anunciar baja el alcance orgánico y que Meta empeora los resultados a propósito para que pagues más.
- **Fuentes:** S19 ("Hacer anuncios es la forma más rápida de joder tu cuenta"), S20, S21, S22 ("tienes que pagar dos veces, o tres veces, o cinco veces más"), S23 (anécdota sin datos); OR-20.
- **Motivo:** no hay evidencia y contradice cómo funciona la subasta (cada impresión se compite con otros anunciantes). La suba de costos con el tiempo tiene explicaciones medibles: fatiga creativa, frecuencia y saturación (MA-21). El orador vende un método 100 % orgánico.
- **Lo rescatable:** no usar campañas de "seguidores" o "interacción" para la cuenta orgánica, que la llenan de gente que no consume (RH4 de la extracción, OR-20).

### MA-33 · DESCARTADO: clonar ofertas, VSL o copy, bajar videos ajenos e inventar expertos con IA
**Regla descartada.** Ya desarrollado en otros archivos; se lista acá para que el agente de tráfico no lo reproponga.
- **Fuentes:** L97, L89, L164, L153, L103–L104, L107 (Frankenstein do ROI).
- **Motivo y detalle:** BR-09 a BR-14, OF-05, OF-06, OF-34, FE-36, FE-37.

---

## Glosario para leer transcripciones brasileñas de tráfico

| Expresión | Qué quiere decir | Equivalente en este archivo |
|---|---|---|
| "ROI" | Facturación ÷ gasto (ROAS) | MB-14, MA-13 |
| "Lucro" | Facturación − gasto (antes de impuestos; a veces antes de comisiones) | MB-14 |
| ARPU | Ticket medio por venta (preguntar si es bruto o neto) | MB-11 |
| IC | Inicio de checkout; en Utmify, sobre clics | MB-08 |
| "Deixar o pau torar" | Dejar correr sin tocar | MA-08 |
| "Matar o criativo" | Apagar el anuncio | MA-09 |
| "Socar / macetar orçamento" | Subir el presupuesto fuerte | MA-14 |
| "Dar um sustinho no orçamento" | Bajar el presupuesto para "asustar" a la campaña | MA-16 |
| "Escalar / pré-escalar" | Subir presupuesto / primeras subidas con un ganador | MA-13 |
| "Lateralizar em mais contas" | Repetir en varias cuentas (descartado si es para eludir) | MA-31 |
| "Conta de agência" | Cuenta publicitaria alquilada a una agencia | MA-30 |
| "Troçalhada de campanha" | Un montón de campañas | MA-18 |
| "Cassino Ads" / "Meta merda Ads" | Queja por la volatilidad de la plataforma | MA-16 |
| "Validar" una oferta | Que un creativo venda de forma constante con ROI positivo | MA-07 |

Fuentes del glosario: LB20, LB22 (jerga que solo figura en el Documento B, salvo "socar" y "matar"), L §3.12.

---

## J. Contraste regla por regla con `08-meta-ads.md` y `09-medicion-y-escala.md`

| Regla del repo | Qué dicen las fuentes | Veredicto | Principio |
|---|---|---|---|
| Checklist "antes de gastar" (portafolio, USD, píxel, Utmify, compra de prueba) | Ferreira hace lo mismo (L170) | **Mantener**; agregar script de UTM y zona horaria única | MA-06, MA-26 |
| Campaña de test con presupuesto por conjunto | Gaspar testea en ABO (L48) | **Mantener** | MA-02 |
| 2 conjuntos amplios de US$ 10 con 3 anuncios cada uno | Ferreira 10, Alexander 10, Gaspar "mucho volumen"; Andromeda pide diversidad | **Cambiar** a 4–5 conceptos por conjunto (8–10 en el lote, ~3 estáticos) | MA-01, MA-03 |
| Conjunto rioplatense aparte | Sin contradicción | **Mantener** | MA-24 |
| (No existe) | Ventas en EE. UU., Puerto Rico y España (L120) | **Agregar** como hipótesis | MA-24 |
| Retargeting desde ~1.000 visitas, US$ 3–5 | Víctor: microanuncios de RT (S99), niveles (A76–A78) | **Mantener**; agregar públicos de IC y de video | MA-23 |
| US$ 20–25 por día, 5–7 días | Ferreira R$ 100 (≈ US$ 18) por día | **Mantener**; agregar cuenta de ventas esperadas | MA-07 |
| Regla 1: 72 h sin tocar | Gaspar "fazer nada" entre revisiones (L64) | **Mantener**; agregar "duplicar, no editar" | MA-08 |
| Regla 2: apagar con 1,5 × CPA eq. sin ventas | Ferreira 1 × front (L173), Gaspar 1 × CPA (L71) | **Mantener**; agregar excepción por IC ≥ 2 | MA-09 |
| Regla 3: CTR de enlace < 0,8 % con > 2.000 impresiones | Ningún brasileño mide hook ni hold | **Mantener**; agregar hook rate, hold y llegada | MA-10 |
| Regla 4: CPA ≤ equilibrio, dejar correr | Gaspar no apaga lo que tiene historial (L51, L58) | **Mantener**; agregar ventana de 3 días y "2 días seguidos" | MA-11 |
| (No existe) | Andromeda reparte gasto desparejo | **Agregar** "no evaluado" | MA-12 |
| Regla 5: CPA ≤ objetivo con ≥ 3 ventas, +20 % cada 48 h o duplicar | Gaspar +50 % habitual, Ferreira × 2 con ROI > 2 | **Ajustar**: dos escalones, tope × 2, cambios temprano | MA-13 a MA-15 |
| (No existe) | Bid cap al front (L55–L56) | **Agregar**: cost cap solo en escala, anclado al CPA eq./objetivo; el ancla al front no aplica hoy | MA-17 |
| Regla 6: frecuencia > 3 en 7 días, entra lote | Sin contradicción | **Mantener**; sumar CTR y CPA a 3 días | MA-21 |
| Regla 7: cada semana, 3 creativos nuevos con el ángulo ganador | Tasa de acierto de 10–20 % (S69, H22, L99) | **Cambiar** a lote de 6–10, mitad iteraciones y mitad conceptos nuevos | MA-20 |
| UTM por anuncio | Utmify en las tres fuentes que muestran dashboard | **Mantener**; agregar nombres codificados | MA-26 |
| Si Meta restringe Compra: Vista de página de destino | Sin contradicción | **Mantener** | MA-05 |
| Voseo y "tú" | Sin contradicción | **Mantener** | MA-25 |
| Registro en `10-decisiones.md` y `experimentos.csv` | Gaspar: el error fue no optimizar (L66) | **Mantener**; dos revisiones por día en escala | MA-18 |
| 09: tabla "qué se mide" | Falta hook, hold, retención al precio, IC por creativo | **Agregar** | MA-10, MB-01 a MB-09 |
| 09: "muestra chica no concluye" | Ferreira escala con 2 días (L172–L177) | **Mantener** la regla del repo; Ferreira es el contraejemplo | MA-07 |
| 09: escalar con CPA bajo objetivo, ≥ 3 ventas, reembolsos normales | Igual a las fuentes, salvo reembolsos (que no miran) | **Mantener**; el control de reembolsos del repo es mejor que el de las fuentes | MA-13, OF-38 |
| 09: ROAS en "Resultado" | Las fuentes lo llaman ROI | **Agregar** la tabla de traducción | MB-14, MB-15 |
| (No existe) | Cuentas de agencia, multilogin, lateralizar | **Agregar** sección de contingencia con lo descartado | MA-28 a MA-32 |
| (No existe) | Retiro de Hotmart en ~15 días (L129) | **Agregar** control de caja | MA-19 |

---

## K. Cambios concretos propuestos al playbook (diff en palabras)

### `playbook/08-meta-ads.md`

**Mantener (y por qué):**
- La lista "Antes de gastar", el objetivo Ventas y el evento Compra: son correctos y coinciden con las fuentes.
- La campaña de test con presupuesto por conjunto y la de escala con presupuesto de campaña (MA-02).
- Las reglas 1, 2, 4 y 6 tal como están: la aritmética del corte (MA-09) muestra que 1,5 × es un buen punto medio.
- Los parámetros UTM, el plan B de Vista de página de destino y el test de voseo contra "tú".

**Cambiar:**
1. En la tabla de estructura, "3 anuncios" pasa a **"4 a 5 conceptos distintos por conjunto (lote de 8 a 10, unos 3 estáticos). Las variantes de gancho de un mismo cuerpo cuentan como un concepto; las microvariantes no se suben"**. Por qué: MA-01.
2. Regla 5 pasa a dos escalones: **"CPA ≤ objetivo con 3 ventas o más: +20 a 30 % cada 48 h. CPA ≤ 0,75 × objetivo con 5 ventas o más: +50 % o duplicar en `ESCALA`. Nunca más de × 2 por cambio. Los cambios se hacen en la primera revisión del día"**. Por qué: MA-13 a MA-15.
3. Regla 7 pasa a **"Cada semana, un lote de 6 a 10: mitad ejecuciones nuevas del concepto ganador (otro formato o escena, no solo otro gancho) y mitad conceptos nuevos"**. Por qué: MA-20.

**Agregar:**
1. A la regla 2: **"Excepción: si el anuncio trajo 2 IC o más, estirar a 2 × CPA de equilibrio y revisar compras rechazadas en Hotmart antes de apagar"** (MA-09).
2. A la regla 3: **"Hook rate bajo 30 % con más de 2.000 impresiones: cambiar el gancho y mantener el cuerpo"**, con la tabla de diagnóstico por capa (MA-10).
3. Regla nueva: **"No se apaga por un mal día: lo que tiene 3 ventas o más se juzga por el CPA de 3 días. Un conjunto sin historial con 2 días seguidos sin ventas y gasto en el umbral, se apaga"** (MA-11).
4. Regla nueva: **"Un anuncio que gastó menos de 0,5 × CPA de equilibrio en 7 días no fue evaluado; no se registra como perdedor"** (MA-12).
5. Sección "Puja": **cost cap solo en escala, arrancando en el CPA de equilibrio y bajando hacia el objetivo; bid cap no con presupuesto de test. El ancla "al precio del front" solo vale si Bruto medio ÷ front ≥ ROAS objetivo"** (MA-17).
6. En "Antes de gastar": **"inicio programado a las 00:00 de la zona horaria de la cuenta; la misma zona horaria en Meta, Hotmart y Utmify"** y **"script de UTM de Utmify en la página"** (MA-06, MA-26).
7. Convención de nombres: **`C<concepto>-E<ejecución>-V<variante> | ángulo | formato | gancho`** (MA-26).
8. Línea: **"Editar un anuncio activo reinicia el aprendizaje: para cambiarlo, duplicalo"** (MA-08).
9. Línea: **"Sin 'susto' de presupuesto ni serrucho en la etapa de test"** (MA-16).
10. Sección "Contingencia de cuentas" con MA-28 (lo que sí) y la lista de prohibidos con su riesgo (MA-29 a MA-31).
11. Línea de caja: **"Antes de escalar, caja para ~15 días de gasto sin retirar (verificar el plazo de retiro de Hotmart)"** (MA-19).
12. Conjunto opcional de hipótesis: **"Hispanohablantes EE. UU. + Puerto Rico + España, texto en 'tú', medido aparte"** (MA-24).

### `playbook/09-medicion-y-escala.md`

**Mantener:** el ritmo (diario las primeras 72 h, cada 48 h, semanal), el cierre de tests con una variable y "una muestra chica no concluye". El control de reembolsos antes de escalar es mejor que el de las fuentes (ninguna lo mira): se mantiene.

**Agregar:**
1. En la tabla "Qué se mide", fila Anuncio: **hook rate, hold rate, retención al momento del precio (percentil de reproducción) e IC por creativo** (MB-01 a MB-03, MB-08).
2. En "Resultado": **ROAS y ROI real, con la tabla de traducción "ROI brasileño = ROAS"** (MB-14, MB-15).
3. En "Ritmo": **"En escala, dos revisiones por día (mañana y noche). No se juzga el día antes de la noche"** (MA-15, MA-18).
4. En "Cuándo escalar": los dos escalones de MA-13 y el tope × 2.
5. En "Cuándo abrir fases": **"Tramo de acompañamiento pago: después de validarlo en vivo con compradoras (HT-10, HT-13)"**.

### `playbook/formulas.md`

**Agregar:** ROAS de equilibrio (`Bruto medio ÷ CPA de equilibrio`), ROI real (`(Neto medio × (1 − r) − CPA) ÷ CPA`), la tabla de probabilidad de matar un anuncio bueno con cada regla de corte (MA-09), la fórmula del tope de puja (MA-17) y, en benchmarks de arranque, hook rate (30–40 %) y hold rate (20–25 %) como hipótesis (MB-01, MB-02).

### `products/reto-cintura-28/07-meta-ads.md`

**Agregar:** columnas "ROAS de equilibrio 1,20" y "ROAS objetivo 1,85" a la tabla de la oferta vigente; "corte con IC ≥ 2: US$ 28,52"; 2 a 4 conceptos más en el lote 1 (2 o 3 estáticos); la columna "CPA 3 días" en la bitácora.

---

## L. Hipótesis a testear (orden sugerido)

| # | Hipótesis | Variable (una) | Métrica principal | Cuándo | Principio |
|---|---|---|---|---|---|
| 1 | Un lote con estáticos encuentra ganadores más baratos | 3 estáticos sí o no | CPA del conjunto a 7 días | Lote 1 | MA-01, FE-42 |
| 2 | Estirar el corte con IC ≥ 2 salva anuncios rentables | 1,5 × contra 2 × con IC ≥ 2 | % de salvados con CPA ≤ equilibrio | Lotes 1–3 | MA-09 |
| 3 | Un solo conjunto con 8–10 anuncios es más barato por venta que dos de 4–5 | Estructura (prueba A/B de Meta) | CPA del lote a 7 días | Lote 2 | MA-03 |
| 4 | El ritmo de escala cambia el CPA | +20 % contra +50 % cada 48 h | CPA de los 7 días siguientes | Primera escala | MA-13 |
| 5 | Mezclar iteraciones y conceptos nuevos retrasa la fatiga | Composición del lote semanal | CPA de la cuenta a 2 semanas | Desde la semana 3 | MA-20 |
| 6 | EE. UU. + PR + España cierran el CPA | Conjunto nuevo por idioma | CPA a 7 días | Con un ganador | MA-24 |
| 7 | Cost cap estabiliza el CPA en escala sin frenar el gasto | Estrategia de puja | CPA y gasto efectivo a 7 días | Escala estable | MA-17 |
| 8 | Excluir la peor franja horaria baja el CPA | Programación horaria | CPA a 7 días | Con ≥ 50 ventas | MA-15 |
| 9 | El "susto" de presupuesto recupera una campaña que cayó | Bajar 50 % por 24 h contra no tocar | CPA de los 3 días siguientes | Solo en escala | MA-16 |
