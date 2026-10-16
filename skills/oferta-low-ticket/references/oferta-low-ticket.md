# Oferta low ticket: minería, arquitectura, checkout y post-compra

Base de conocimiento del dominio **oferta, funnel y tráfico pago**. Prefijo de IDs: **OF**.
Producto de referencia: **Reto Cintura 28** (Hotmart, US$ 15,90 con cupón, Meta Ads en LATAM).
Última síntesis: 2026-10-14.

## Cómo leer este archivo

- **Mandan sobre todo lo de acá:** `docs/01-principios.md`, `compliance/meta-ads-politicas.md` y `compliance/hotmart.md`. Si un principio choca con esas reglas, figura como **Descartado** con el motivo.
- **Fuentes** (IDs de afirmación de las extracciones):
  - `L` = compilado low ticket de Brasil. Cada creador es una fuente independiente: V1 Borba (L01–L44), V2 Gaspar (L45–L86), V3 Asvi y Alexander (L87–L115), V4 creador LATAM (L116–L130), V5 creador NY (L131–L145), V6 André (L146–L161), V7 Ferreira (L162–L179). `LB` = adiciones al mismo compilado.
  - `S`, `B`, `T`, `A`, `H`, `J` = Víctor Heras y su equipo. Cuentan como **una sola fuente**.
- **Confianza:** Alta (≥2 fuentes independientes y consistente con evidencia externa, o aritmética verificable) · Media (una fuente con evidencia mostrada, o varias del mismo grupo) · Baja (una fuente sin evidencia, o con contradicciones) · Descartada (choca con evidencia externa, políticas o reglas del negocio).
- Todo lo Media o Baja que se puede aplicar lleva **Hipótesis: testear**, con una sola variable y una métrica principal.
- Los ejemplos de las fuentes van textuales y con su resultado declarado. Lo marcado **Adaptación** es propuesta propia para el Reto.
- Moneda: las cifras brasileñas se convierten a US$ con la tasa que usa la propia fuente (US$ 10 ≈ R$ 55, L123), solo como orden de magnitud.

## Resumen en 10 líneas

1. Validá ofertas mirando quién sostiene muchos anuncios activos en la Biblioteca de anuncios; modelá la lógica, nunca el texto (OF-01 a OF-06).
2. El producto puede ser hiperespecífico; el gancho, "ancho dentro del público" (OF-08, OF-09).
3. Lo que el anuncio promete tiene que existir el día 1 y decirse igual en página y checkout (OF-14, OF-15).
4. Mostrá el producto real funcionando: es la prueba que sí se puede usar sin testimonios (OF-17).
5. No se escala con el front solo: el margen está en el ARPU (OF-24, OF-32).
6. Bumps: 2 o 3, complementarios, cada uno contra una fricción; en un front de US$ 15,90 se testea el precio absoluto, no la proporción brasileña (OF-25 a OF-27).
7. Escalera de planes con downsell real: hipótesis fuerte para triplicar ARPU, con la condición de que el plan básico cumpla todo lo que promete el anuncio (OF-29, OF-30).
8. Checkout limpio, sin contador falso; IC alto sin compras es un problema de pago, no del creativo (OF-35 a OF-37).
9. Victoria rápida antes de que venza la garantía de 7 días (OF-40).
10. El asesoramiento personalizado de 7 semanas incluido a US$ 15,90 no escala: definir alcance o moverlo a un tramo pago (OF-41 y cambios al final).

---

## A. Reglas base de la oferta

### OF-00 · Cadena alineada: creativo → página → checkout → ticket
**Regla.** El creativo, la página y el checkout dicen lo mismo: mismo nombre, mismos números (días, recetas), mismo precio y el mismo producto. Los bumps continúan esa promesa; no la cambian.
- **Ámbito:** ambos · **Confianza:** Alta (Borba con diagrama y dashboard + Víctor B42 + política de Meta "la página no puede decir otra cosa que el anuncio" + regla del repo).
- **Fuentes:** L15, L19, L20, B42, B67.
- **Ejemplo textual (Borba, L20):** diagrama en pantalla "Criativo alinhado com página de vendas -> Página de vendas alinhada com checkout -> Checkout alinhado com ticket médio e order bumps". Resultado declarado del funnel: R$ 43.226,70 en 38 días, ROI 3,09.
- **Mecanismo:** cada desajuste obliga a la persona a "reinterpretar" qué compra; el que duda se va (L15: "acaba deixando muito escondido qual que é realmente o produto"). Además Meta revisa la página de destino.
- **En Reto Cintura 28 (Adaptación):** hoy hay tres desajustes conocidos: (1) el sistema de copy dice "más de 70 recetas", pero la página, el creativo C25 y `03-producto.md` dicen **32 recetas**; (2) la página nombra semanas 5, 6 y 7 de regalo y la app solo tiene la Semana 5 verificada; (3) el asesoramiento y la comunidad de WhatsApp están en `02-oferta.md` pero la entrega todavía no incluye las invitaciones. Se usa un solo número, el real, en todo.
- **Contradicciones:** ninguna.

---

## B. Minería y validación de ofertas

### OF-01 · Minar en la Biblioteca de anuncios con palabras de precio y formato
**Regla.** Buscá en la Biblioteca de anuncios de Meta por frases de precio y de formato, no solo por el nicho. Anotá cada oferta en una hoja con criterios fijos.
- **Ámbito:** pago · **Confianza:** Alta (André, Asvi/Alexander y creador NY usan la Biblioteca o anuncios ajenos como señal de mercado; la herramienta muestra anuncios activos de verdad).
- **Fuentes:** L147, L102, L139.
- **Ejemplo textual (André, L147):** palabra clave de minería "Por apenas 10 reais". Resultado declarado del creador: R$ 7.966,93 en 7 días, aunque no con la oferta que demuestra (L146, L161).
- **Mecanismo:** el precio y el formato en el texto del anuncio filtran rápido a los que venden low ticket con checkout directo, que es tu modelo.
- **En Reto Cintura 28 (Adaptación):**
  - Términos en español: "reto 28 días", "plan de 28 días", "por solo US$", "pago único", "acceso inmediato", "sin gimnasio", "desde casa", "app de entrenamiento", "recetas". En portugués, para ver mecanismos que todavía no llegaron a LATAM: "desafio 28 dias", "por apenas".
  - Países: México, Colombia, Argentina, Chile, Perú y Brasil.
  - Hoja (va a `products/reto-cintura-28/02-oferta.md`, sección Competencia): anunciante · anuncios activos de esa oferta · fecha del anuncio activo más viejo (agregado propio, no está en las fuentes) · países · precio del front · planes · bumps (se ven abriendo el checkout, sin pagar) · mecanismo · promesa · ángulo del gancho · ¿choca con políticas? · **lógica a modelar**.
  - El brief dice "Competidores: sin investigación formal todavía". Esto la cierra.
- **Contradicciones:** ninguna.

### OF-02 · Señal de validación: un anunciante sosteniendo varios anuncios de la misma oferta
**Regla.** Una oferta está "validada" cuando un mismo anunciante mantiene varios anuncios activos de ella. Mucha cantidad de anuncios activos indica una oferta en escala.
- **Ámbito:** pago · **Confianza:** Media para la señal (dos fuentes independientes, sin verificación). **Baja** para los umbrales.
- **Fuentes:** L150, L102.
- **Ejemplos textuales:** André (L150): "Apenas um anunciante com 10 anúncios ativos" → la considera "más que validada" (150 cards de enfermería a R$ 10). Asvi (L102): "mais ou menos 150 anúncios ativos na biblioteca de anúncios" como señal de oferta escalada.
- **Mecanismo:** nadie sostiene muchos anuncios activos semanas enteras si pierde plata. Límite: también hay anunciantes que testean mucho y pierden; el conteo no mide rentabilidad.
- **En Reto Cintura 28 (Adaptación):** usarlo para elegir qué estructuras de oferta mirar (planes, bumps, garantía, precio) y para futuros productos (Glúteos 28, Nivel 2). Umbral de trabajo propuesto: ≥5 anuncios activos del mismo anunciante y al menos uno con ≥30 días (este último criterio es propio).
- **Hipótesis: testear.** No se testea con plata: se valida comparando, al mes, cuántas de las ofertas marcadas como "validadas" siguen activas.
- **Contradicciones:** André busca poca competencia; Asvi busca ofertas muy escaladas para llevarlas a otro idioma. Las dos usan el mismo indicador para fines distintos.

### OF-03 · Criterios de descarte
**Regla.** Descartá una oferta o una idea de producto si: (a) no podés producirla con calidad; (b) ya la corren muchos anunciantes en tu mismo idioma y país; (c) depende de promesas prohibidas (peso, salud, antes y después); (d) solo funciona copiando lo ajeno.
- **Ámbito:** pago · **Confianza:** Alta para (c) y (d) (reglas del negocio y políticas). Media para (a). **Baja** para el umbral de (b).
- **Fuentes:** L148, L149, L43, L96, L97.
- **Ejemplos textuales:** André descarta un curso de albañil ("como não tenho como gravar um curso desse, a gente descarta", L148) y una oferta de herrería por competencia ("mais de 4 anunciantes rodando, então tá fora do nosso critério de concorrência", L149). Borba (L43): "não é ficar rodando emagrecimento ali perca 10 kg em 2 dias".
- **En Reto Cintura 28 (Adaptación):** el nicho ya está elegido. Los criterios se aplican a bumps, upsells y productos nuevos: cada idea pasa por "¿la puedo producir con calidad en menos de una semana?", "¿cuántos la venden en español?" y "¿se puede vender sin prometer kilos ni centímetros?".
- **Contradicciones:** ver OF-04.

### OF-04 · La competencia no se esquiva: se diferencia con mecanismo o subnicho
**Regla.** En un nicho con competencia, la salida es un mecanismo propio o un subnicho claro, no cambiar de nicho.
- **Ámbito:** ambos · **Confianza:** Baja (creador NY y creador LATAM, opiniones sin datos).
- **Fuentes:** LB03, L125, L141.
- **Ejemplo textual (NY, LB03):** "Subnichar uma oferta ampla validada é o caminho mais rápido para nadar em oceano azul sem concorrência."
- **En Reto Cintura 28 (Adaptación):** el diferencial declarado del repo es "el plan que sí se sostiene": plan B de 8 minutos, timer, protocolo para volver después de faltar. La minería (OF-01) dice si alguien más lo promete igual.
- **Hipótesis: testear.** Variable: el ángulo del creativo (diferencial "plan B de 8 minutos" contra "28 días sin gimnasio"). Métrica: CPA atribuido en Utmify a igualdad de gasto.

---

## C. Modelar sin clonar

### OF-05 · Modelá la lógica, nunca el texto ni las piezas
**Regla.** De una oferta ajena se toma la **estructura** (escalera de precios, tipo de bump, mecanismo, formato de demostración, orden de la página). Nunca el copy, el guion, las imágenes, los videos ni el nombre.
- **Ámbito:** ambos · **Confianza:** Alta (Víctor S62, T108, B88; el creador NY modela la idea, no el producto, L139; política de originalidad de Instagram; principio 5 del repo).
- **Fuentes:** S62, T108, A52, B88, T11, L139.
- **Ejemplo textual (Víctor, S62):** "No quiero que te robes el vídeo: quiero que te robes la lógica detrás."
- **Mecanismo:** la lógica es lo que convierte; el texto ajeno trae riesgo legal, denuncia de propiedad intelectual y un mensaje que no es tuyo.
- **En Reto Cintura 28 (Adaptación):** la hoja de minería (OF-01) tiene la columna "lógica a modelar". Ejemplos: de Borba se toma "plan básico y plan completo con downsell" (OF-29); de André, "mostrar el producto físico en la mano" (OF-17); del creador NY, "mismo producto para dos públicos" (OF-09).
- **Contradicciones:** Asvi/Alexander (L97) y el "Frankenstein do ROI" (L107) proponen copiar texto. Ver OF-06.

### OF-06 · DESCARTADO: clonar oferta, VSL o copy, aunque sea traducido
**Regla descartada.** Transcribir la VSL de otro, traducirla "sin cambiar el copy", tomar la lead de una oferta ajena, bajar videos de TikTok para los creativos o maquetar sobre la captura de la página del competidor.
- **Confianza:** Descartada.
- **Fuentes:** L97 ("foi idêntica... Eu só peguei a mesma copy"), L107 ("pegar uma lead de uma oferta que tá escalando e colocar na minha oferta"), L153, L164, LB23.
- **Motivo:** derechos de autor y denuncias que Meta atiende; política de originalidad de Instagram; principio 5 del repo ("nada copiado de otros negocios"). Además, la traducción literal suena mal en LATAM (LB23: "tradução cachorra do ChatGPT").
- **Alternativa honesta:** OF-05 (modelar la lógica) y escribir leads propias para testear (OF-33).

### OF-07 · Llevar un mecanismo validado a otro mercado de cultura parecida
**Regla.** Un mecanismo que escala en un país tiene buenas chances en otro de cultura parecida, si se adapta de verdad (idioma, ejemplos, medios de pago).
- **Ámbito:** pago · **Confianza:** Baja (Asvi, sin datos aislables: Alexander cambió muchas cosas a la vez).
- **Fuentes:** L89, L94, L95, LB04.
- **Ejemplo textual (Asvi, L94):** "se tiver uma cultura parecida, a chance dessa oferta manter a conversão é muito alta".
- **En Reto Cintura 28 (Adaptación):** dos usos. (1) Mirar el low ticket fitness de Brasil para anticipar mecanismos (desafíos, apps, quiz) y modelar su lógica. (2) Más adelante, llevar el Reto a portugués de Brasil con una localización humana, no una traducción automática.
- **Hipótesis: testear.** Solo cuando la oferta en español sea rentable. Variable: idioma y país (Brasil en portugués contra LATAM). Métrica: CPA y reembolsos a 14 días.

---

## D. Subnichar y adaptar la promesa

### OF-08 · Producto específico para un avatar específico
**Regla.** En low ticket con tráfico pago, cuanto más específico es el producto para un avatar, más fuerte es la sensación de "esto es para mí".
- **Ámbito:** pago · **Confianza:** Media (lo afirma el creador NY; los productos de Borba, André y Ferreira son hiperespecíficos y muestran dashboards, pero ninguno aísla la especificidad como causa; sesgo de supervivencia).
- **Fuentes:** L141, LB06, L139, L140; productos: L01 (catequesis), L150 (enfermería), L166 (profesores de Historia).
- **Ejemplo textual (NY, L141):** "Quanto mais específico for o produto, maior a sensação de: 'Caramba, isso aqui tá falando comigo!'"
- **Contradicción a resolver (orgánico contra pago):** Víctor dice que "el contenido nicho ni se hace viral ni vende" (A31) y que hay que abrir para todo el mundo. Eso es para **contenido orgánico**, donde no elegís a quién se muestra. En pago, con segmentación amplia, el **creativo hace la segmentación**: el producto puede ser específico y el gancho tiene que ser "ancho dentro del público" (un dolor o una situación que le pasa a la mayoría de las mujeres de 25 a 50, dicho en lenguaje cotidiano). Ver MA-01 y MA-04.
- **En Reto Cintura 28 (Adaptación):** el producto ya es específico (mujeres, cintura, en casa, 28 días). No hace falta achicarlo más; hace falta que el anuncio no se vuelva de gremio ("déficit calórico", "macros").

### OF-09 · Mismo producto, varios públicos: subnichá el mensaje antes que el producto
**Regla.** Antes de crear una versión del producto para cada público, probá el mismo producto con mensajes distintos por avatar (creativo y, si gana, variante de página).
- **Ámbito:** pago · **Confianza:** Media (creador NY y Borba, independientes; Borba con dashboard).
- **Fuentes:** L140, L38, L138.
- **Ejemplos textuales:** NY (L140): "foquei em dois públicos" (la misma lista para quien arranca de cero y para quien ya tiene tienda). Borba (L38): "só muda ali o hook, que é o ângulo que eu tô atacando" (catequista que empieza contra catequista que ya trabaja).
- **En Reto Cintura 28 (Adaptación):** avatares por situación, nunca por atributo del cuerpo: "la que empezó muchos lunes y abandonó" (C17), "la que tiene 25 minutos entre los chicos y la cena" (C04), "la que trabaja sentada todo el día", "la rioplatense del mate" (C23). Se escribe en conducta o en tercera persona. No se pone "mamá" en la segmentación (nota de C04).
- **Hipótesis: testear.** Variable: titular de la página por avatar (control: titular actual; variante: titular del avatar ganador en anuncios). Métrica: compras por visita.

### OF-10 · Cuando cambia el contexto, cambiá la promesa (página y creativos), no el producto
**Regla.** Si cambia la situación de la gente (temporada, fecha, crisis), se reescribe la promesa y la página. El producto queda igual.
- **Ámbito:** ambos · **Confianza:** Baja (solo el creador NY, sin datos; casos de 2020–2021).
- **Fuentes:** L135, L137, L138.
- **Ejemplos textuales (NY):** durante el confinamiento, "Volte a vender roupas pelo Instagram, mesmo com as portas fechadas" (curso de R$ 27, ROI 5 a 6). Con las tiendas abiertas, "Dobre as vendas da sua loja de roupas usando o Instagram". "A única coisa que fiz foi mudar a página e os criativos" (L138).
- **En Reto Cintura 28 (Adaptación):** calendario por hemisferio. En el Cono Sur (Uruguay, Argentina, Paraguay, Chile): enero "volver a la rutina después de las fiestas", marzo "vuelta a la rutina", octubre a diciembre "llegar al verano con energía y una rutina que se sostiene". En México, Colombia y el Caribe no hay estaciones marcadas: usar enero y la vuelta a clases local. Nunca "llegá al verano con otro cuerpo" (presión corporal, choca con imagen corporal).
- **Hipótesis: testear.** Variable: titular contextual contra titular base, en la misma página y período. Métrica: compras por visita.

### OF-11 · La promesa vende el punto B; el titular dice qué es el producto
**Regla.** La oferta se escribe como un paso de A a B en 28 días, en términos de vivencia (cómo se siente su día). En la primera pantalla, el titular dice qué es literalmente (nombre, número, formato) para que nadie tenga que adivinar.
- **Ámbito:** ambos · **Confianza:** Media (Víctor B134–B141 y S35, y Borba L14–L16, independientes; cada uno aporta una mitad).
- **Fuentes:** B134, B137, B141, S35, L14, L16, L18.
- **Ejemplos textuales:** Víctor (B141): "Solo puedes escribir de qué punto A a qué punto B vas a llevar a la persona y en cuánto tiempo", sin "sesiones", "horas", "curso" ni "módulos". Borba (L14): "Headline direta converte muito"; su headline es el nombre literal del producto con número: "+500 Dinâmicas prontas para Catequese".
- **En Reto Cintura 28 (Adaptación):** titular: "Reto Cintura 28: tu plan de 28 días en una app, desde casa, en 20 a 30 minutos". Bajada A→B: "De empezar y abandonar a tener un plan que sí se sostiene". Nunca centímetros o kilos garantizados.
- **Límite:** la promesa tipo Laura de Víctor ("Tu hijo va a hablar correctamente en tres meses", B138) es un resultado de salud garantizado. En el Reto choca con las políticas de Meta: el A→B es de hábito y vivencia, no de cuerpo.
- **Hipótesis: testear.** Ya existe EXP-004 (titular emocional contra el actual). Métrica: compras por visita.

### OF-12 · "Qué recibís" en tarjetas explícitas
**Regla.** Una sección muestra exactamente qué recibe la persona, en tarjetas cortas con imagen real de cada parte.
- **Ámbito:** ambos · **Confianza:** Media (Borba con captura y dashboard; consistente con el aprendizaje del repo "la primera pantalla vende sola").
- **Fuentes:** L18, L19, L22.
- **Ejemplo textual (Borba, L18):** "deixo bem explícito exatamente o que a pessoa vai receber". Muestra 4 ejemplos del contenido en "cardzinhos animados" y un video de niños usando las dinámicas (L22).
- **En Reto Cintura 28 (Adaptación):** tarjetas con capturas reales: app (pantalla del día), timer, plan B, recetas (con el número real), hojas imprimibles, comunidad. Cada tarjeta dice para qué sirve en una línea.
- **Hipótesis: testear.** Variable: tarjetas con captura real contra lista de texto. Métrica: % de visitas que llegan a la tarjeta de precio (Clarity) y compras por visita.

### OF-13 · Vendé "ya decidido por vos", no cantidad de contenido
**Regla.** La información suelta es gratis; se paga la información filtrada y ordenada. El argumento es "no tenés que pensar qué hacer cada día", no "70 recetas".
- **Ámbito:** ambos · **Confianza:** Media (Víctor; coincide con el aprendizaje del repo del 2026-10-06).
- **Fuentes:** B18, B19, B136.
- **Ejemplo textual (Víctor, B19):** "lo que sí compran es la información real filtrada y la experiencia". B136: "nadie en la historia de la humanidad se ha emocionado comprando apuntes".
- **En Reto Cintura 28 (Adaptación):** "Abrís la app y ya sabés qué entrenar, qué cocinar y qué hacer si el día no da". El número de recetas va como detalle, no como titular.

---

## E. Entregable

### OF-14 · Entregable de primer nivel antes que más creativos
**Regla.** Si hay reembolsos, el primer arreglo es el entregable, no el anuncio. El producto tiene que valer lo que promete.
- **Ámbito:** ambos · **Confianza:** Alta (Borba con dashboard de reembolsos; Víctor A18; principio 1 del repo; evidencia general sobre reembolsos y contracargos).
- **Fuentes:** L08, L42, L43, A18.
- **Ejemplo textual (Borba, L08):** "no início eu não tava ligando tanto pro entregável" → muchos reembolsos; al enfocarse en el entregable, bajaron. Reembolsos visibles: R$ 1.797,71 sobre R$ 43.226,70 (≈ 4,2 %, cálculo propio).
- **Descartado dentro de este punto:** "con un buen marketing da igual que tengas un producto mediocre" (B62). En Hotmart se paga con reembolsos, contracargos y reputación del producto.
- **En Reto Cintura 28 (Adaptación):** antes de gastar: semanas 6 y 7 cargadas y probadas en la app; invitación a la comunidad y forma de contacto del asesoramiento en la entrega; captura "12 de 31" corregida a "12 de 28"; prueba de usuario (una persona ajena completa el Día 1 sin preguntar).

### OF-15 · Mejorar lo del competidor en utilidad, no en volumen
**Regla.** Si modelás una oferta, mejorala en lo que la compradora siente (menos fricción, más claridad), no solo en cantidad.
- **Ámbito:** ambos · **Confianza:** Baja para "más volumen" (solo André, sin resultado de esa oferta). Media para "utilidad" (coincide con OF-13 y con el aprendizaje del repo).
- **Fuentes:** L151, L152.
- **Ejemplo textual (André, L151):** "ao invés de vender 150 cards, eu vou vender 250 ou 300 cards".
- **Contradicción:** el repo aprendió que la cantidad asusta en low ticket ("¿tengo que leer todo eso?", 128 páginas). Más volumen solo suma si no agrega trabajo.
- **En Reto Cintura 28 (Adaptación):** mejoras de utilidad: lista de compras por semana, "qué cocino si llego tarde", plan B, protocolo de regreso. No sumar páginas a la guía.

### OF-16 · Lo que el anuncio promete existe el día que sale el anuncio
**Regla.** Ningún anuncio sale antes de que exista todo lo que promete la página.
- **Ámbito:** pago · **Confianza:** Alta (política de Meta, Hotmart y principio 1 del repo; L20).
- **Fuentes:** L20, L27.
- **En Reto Cintura 28:** bloqueo de lanzamiento mientras falten semanas 6 y 7, las invitaciones de WhatsApp y el número real de recetas en todo el material.

---

## F. Demostración del producto real

### OF-17 · Mostrá el producto real funcionando, en el anuncio y en la página
**Regla.** La prueba más fuerte sin testimonios es ver el producto de verdad: en la mano, en uso, en una pantalla real.
- **Ámbito:** ambos · **Confianza:** Alta (André, Borba y Víctor, independientes; repo `06-creativos.md`, "lote de producto"; consistente con el rendimiento de las demostraciones y el UGC).
- **Fuentes:** L154, L22, L17, B02, B25, J42.
- **Ejemplos textuales:** André imprimió, plastificó y recortó los cards para mostrarlos en la mano: "Isso passa uma credibilidade gigante" (L154). Borba muestra un video vertical de niños haciendo las dinámicas en la página (L22). Víctor (B02): "El segundo te acaba de demostrar una parte de lo que sabe hacer".
- **Mecanismo:** baja la sensación de "producto de humo", que es la objeción principal de un infoproducto barato ("¿es otro PDF que no voy a leer?", del brief).
- **En Reto Cintura 28 (Adaptación):**
  - Grabación de pantalla **real** de la app: el timer corriendo, el check del día, el plan B.
  - Un celular real en una mano real recorriendo la app (cámara cenital sobre la mesada).
  - Una receta del plan cocinada de verdad, plano cenital.
  - Las hojas imprimibles impresas, con el calendario pegado en la heladera.
  - Si la escena lleva a la modelo IA, la pantalla del celular es una grabación real de la app compuesta en edición, nunca una pantalla inventada por IA.
- **Límite:** la persona IA presenta el producto; no dice que lo usó ni cuánto bajó.

### OF-18 · Video corto del producto como "mockup" en la primera pantalla
**Regla.** En el hero, en vez de una imagen fija, un video corto y liviano narrado que muestra el producto por dentro.
- **Ámbito:** ambos · **Confianza:** Baja (solo Borba lo menciona, sin aislar el efecto).
- **Fuentes:** L17.
- **Ejemplo textual (Borba, L17):** "pode ser vídeo também, aqueles vídeos narrados com IA".
- **Contradicción:** el repo aprendió (2026-10-09) que 14 MB de video en el hero espantaban. Si se prueba: menos de 2 MB, con imagen de portada y sin reproducir audio solo.
- **Hipótesis: testear.** Variable: hero con video de 10 a 15 s de la app contra imagen actual. Métrica: % que llega a la tarjeta de precio y compras por visita.

---

## G. Precio y percepción en LATAM

### OF-19 · En LATAM el front low ticket de referencia ronda los US$ 10
**Regla.** El front de las ofertas low ticket en español que muestran las fuentes está cerca de US$ 10. Por encima, el precio se justifica con test, no con intuición.
- **Ámbito:** pago · **Confianza:** Media (creador LATAM con dashboard de Hotmart, US$ 142.314,35 en agosto y 55 países; Gaspar, oferta LATAM con ARPU de ≈ R$ 50, unos US$ 9).
- **Fuentes:** L123, L118, L59.
- **Ejemplo textual (creador LATAM, L123):** "eu vendo aqui os produtos low ticket a mais ou menos 10 dólares".
- **En Reto Cintura 28:** el Reto cobra US$ 15,90. Ya existe EXP-001 (US$ 15,90 contra 9,90 a 11,90). Este dato sube la prioridad de ese test. La métrica es **neto por visita**, no la conversión.
- **Hipótesis: testear.** EXP-001 tal como está.

### OF-20 · El freno en LATAM es más la confianza y el medio de pago que el poder de compra
**Regla.** No asumas que "el latino no puede pagar". Medí dónde se cae la compra: confianza en la página o rechazo del pago.
- **Ámbito:** pago · **Confianza:** Baja (el argumento del creador LATAM usa un ranking de ChatGPT y cifras de salario que no se pueden verificar).
- **Fuentes:** L121, L122, L123, L09.
- **Ejemplo textual (LATAM, L123–L124):** "Vai doer menos no bolso do mexicano, vai doer menos no bolso do colombiano...". Borba (L09) cuida la tasa de aprobación de Pix: "tá ali dentro da média de 70 a 80%".
- **En Reto Cintura 28 (Adaptación):** en Hotmart, mirar compras rechazadas por país y por medio de pago. En Argentina, pagar en dólares tiene recargos (ya está en el repo): medir aparte.

### OF-21 · Precio explícito y "pago único" dentro del creativo
**Regla.** Decir el precio y "pago único" en el anuncio filtra a las curiosas y prepara la compra.
- **Ámbito:** pago · **Confianza:** Media (Borba y Ferreira, independientes; Borba con dashboard).
- **Fuentes:** L26, L39, L166.
- **Ejemplos textuales:** Borba (L26): "Em todos os meus criativos eu prometo que o preço do produto é R$ 10". Guion del Creativo 2 (L39): "Mas hoje você pode levar tudo por apenas R$ 10,00, pagamento único...". Ferreira (L166) pide en el prompt "preço de R$ 10 e urgência".
- **Contradicción con el repo:** el aprendizaje del 2026-10-08 dice "preferir creativos sin precio dentro de la imagen" porque un cambio de precio dejó tres creativos desfasados. Se resuelve así: el precio va en la **voz o el texto principal**, no quemado en la imagen, y se actualiza con la checklist de sincronización de `03-oferta.md`.
- **En Reto Cintura 28 (Adaptación):** cierre de voz: "Todo el plan, la app y las recetas por US$ 15,90, pago único. Tocá Más información." Con precio de lanzamiento, solo si la fecha de fin es real.
- **Hipótesis: testear.** Variable: el mismo creativo con y sin la frase de precio en la voz. Métrica: CPA atribuido (no CTR, que va a bajar a propósito).

### OF-22 · DESCARTADO: anclas de valor inventadas y "valor total de bonos"
**Regla descartada.** Sumar valores de referencia que nunca se cobraron ("R$ 128 en bonos gratis", "valor total US$ 80") para que el precio parezca un regalo.
- **Confianza:** Descartada.
- **Fuentes:** L25 ("TOTAL EM BÔNUS: R$ 128,00 - TUDO GRÁTIS HOJE"), LB11 (R$ 207, sin atribución).
- **Motivo:** principio 1 del repo: "precios de referencia solo reales". Es un patrón de publicidad engañosa (defensa del consumidor en Brasil y LATAM). Además, en Borba los bonos "gratis" se pagan con R$ 17,90 más en el plan Premium.
- **En Reto Cintura 28:** la tarjeta actual de "valores estimados" (asesoramiento US$ 35, app US$ 25, comunidad US$ 15, guía US$ 5 = US$ 80) cae en esta zona. No crea un porcentaje de descuento, pero ninguno de esos montos es un precio real. **Alternativa honesta:** (a) vender alguna pieza por separado de verdad (por ejemplo, el acompañamiento, ver HT-12) y entonces su precio es real; o (b) reemplazar los montos por concreción (qué incluye, con qué frecuencia, por cuánto tiempo), que convence igual (T73–T75).

### OF-23 · Precio visual congruente con el ticket
**Regla.** La estética de anuncio, página y checkout tiene que "costar" lo mismo que el producto: ni lujo para un producto de US$ 15, ni algo descuidado.
- **Ámbito:** ambos · **Confianza:** Baja (Víctor, sin datos).
- **Fuentes:** B119, B120, B121, B129.
- **Ejemplo textual (B121):** "gente con una imagen de 5.000 vendiendo algo de 50 y tampoco cuadra".
- **En Reto Cintura 28 (Adaptación):** cocina real, luz natural, UGC limpio. "Premium" = limpio y creíble, no cinematográfico de lujo.
- **Hipótesis: testear.** Variable: el mismo guion en dos estéticas (UGC de cocina real contra estudio pulido). Métrica: CPA.

---

## H. Arquitectura de la oferta: ARPU, bumps, planes, upsell y downsell

### OF-24 · No se escala con el front solo: el margen está en subir el ARPU
**Regla.** El front baja la barrera; el lucro sale del ticket medio (bumps, plan completo, upsell). El CPA que podés pagar lo define el ARPU neto, no el precio del front.
- **Ámbito:** pago · **Confianza:** Alta (Borba, Gaspar, Alexander, NY y Ferreira, independientes; aritmética: ROAS ≈ ARPU ÷ CPA).
- **Fuentes:** L30, L31, L28, L59, L73, L106, L142, L174.
- **Ejemplo textual (Borba, L30):** "Você não vai conseguir escalar com ROI de 2, 3, se você tiver apenas vendendo seu produto do front por R$ 10". Su ARPU fue R$ 30,21 con un front de R$ 10 (≈ 3 veces el front).
- **Aritmética para el Reto:** cada US$ 1 de ARPU bruto agrega **US$ 0,84** al CPA de equilibrio (1 − 9,9 % de comisión) × (1 − 7 % de reembolsos). Con el bump actual (US$ 4,90 al 25 %) el ARPU es US$ 17,13, solo **1,08 veces** el front. Con dos bumps baratos (menú 4,90 al 25 % + kit 3 al 30 %) sería ≈ US$ 18,03 (1,13 veces), y sumando un upsell de US$ 17 al 10 %, ≈ US$ 19,73 (1,24 veces). Las tasas son supuestos. **Con bumps baratos el ARPU sube 10 a 25 %; para acercarse a lo de Borba hace falta una escalera de planes (OF-29).**

### OF-25 · Bumps: 2 a 4, complementarios, uno por fricción
**Regla.** Cada bump completa la compra del mismo comprador y resuelve una fricción que ya siente. Se nombra por lo que resuelve.
- **Ámbito:** pago · **Confianza:** Alta para la complementariedad (Borba, Ferreira y NY, independientes, más regla del repo). Media para la cantidad (Borba usa 3, Ferreira 4).
- **Fuentes:** L36, L174, L142, B136.
- **Ejemplos textuales:** Borba (L36): "Kit de Certificados de Catequese", "+100 Desenhos Bíblicos para Colorir" y "Combo Único: 100 Desenhos + Certificados". Ferreira (L174), para profesores: Banco de Provas R$ 9,87, Slides Prontos R$ 9,86, 200 Dinâmicas R$ 8,77 y Kit Pedagógico R$ 12,90; resultado declarado el día que los sumó: ROI de 1,92 a 3,46 (mezclado con la escala del mismo día). NY (L142): bump y upsell de "script de WhatsApp".
- **En Reto Cintura 28 (Adaptación):** máximo 3 casillas al principio: (1) Menú armado de 28 días + listas de compras (renombrar "Menú Acelerador", ver cambios); (2) Kit Antiexcusas (plan B extendido, rutina exprés, protocolo de regreso, "qué hago si comí de más"); (3) combo de los dos. Texto con la fórmula del repo: "Sí, sumá [extra] por US$ X" + qué resuelve.
- **Límite:** Hotmart admite hasta 9 bumps; cada uno resta atención (repo).

### OF-26 · Precio del bump: testear el monto absoluto, no copiar la proporción brasileña
**Regla.** En Brasil los bumps cuestan 0,8 a 1,3 veces un front de impulso. Con un front de US$ 15,90 esa proporción no se traslada: se testea el monto.
- **Ámbito:** pago · **Confianza:** Baja (Ferreira con captura; los precios de Borba solo están en la versión condensada y no se verifican, L37).
- **Fuentes:** L174, L37.
- **Lectura:** los bumps de Ferreira cuestan R$ 8,77 a 12,90 sobre un front de R$ 10, es decir, 0,9 a 1,3 veces el front, pero en dólares son US$ 1,6 a 2,3. Lo que hace "casi automática" la compra es el monto chico, no la proporción.
- **En Reto Cintura 28 (Adaptación):** bumps entre US$ 3 y 7,90 (0,2 a 0,5 veces el front). Probar uno a US$ 9,90 solo si su contenido lo justifica.
- **Hipótesis: testear.** Variable: precio del Menú (4,90 contra 7,90). Métrica: neto medio por compra sin bajar la tasa de compra del checkout (fórmula 4 de `formulas.md`).

### OF-27 · Combo de bumps como tercera casilla
**Regla.** Además de los bumps sueltos, ofrecé los dos juntos con un precio menor que la suma.
- **Ámbito:** pago · **Confianza:** Media (Borba, con captura).
- **Fuentes:** L36.
- **En Reto Cintura 28:** ya existe EXP-003 (combo de US$ 6 contra 3 + 5). Se mantiene.
- **Hipótesis: testear.** EXP-003. Métrica: neto medio por compra.

### OF-28 · Sumá bumps apenas haya ventas, pero en un período limpio
**Regla.** Los bumps no esperan a "validar todo": Ferreira los sumó el día 2. Pero no se suman el mismo día que se cambia presupuesto o creativos, porque no se sabe qué movió el resultado.
- **Ámbito:** pago · **Confianza:** Baja (Ferreira; su resultado mezcla bumps y escala).
- **Fuentes:** L174, L175, L177.
- **En Reto Cintura 28 (Adaptación):** activar el segundo bump cuando el control tenga ~20 ventas, en una semana sin cambios de presupuesto mayores al 20 %. Principio 4 del repo: una variable por test.

### OF-29 · Escalera de planes en la página: Básico y Completo
**Regla.** Dos tarjetas: un plan básico con exactamente lo que promete el anuncio y un plan completo, más caro, con extras. La mayoría elige el completo y el ticket sube sin que nadie se sienta engañada.
- **Ámbito:** pago · **Confianza:** Media (Borba con dashboard: ARPU R$ 30,21 con front R$ 10; Ferreira con plan premium R$ 22,90, dato que solo está en el Documento B, LB09).
- **Fuentes:** L02, L24, L26, L27, L28, LB09.
- **Ejemplos textuales (Borba):** "Plano Básico R$ 10,00" contra "Plano Premium R$ 27,90"; botón "Quero o Plano Básico". L27: la persona "não vai ficar brava, sair da página e achar que é enganoso", porque el básico trae lo que prometió el anuncio. L28: "na maioria das vezes ela vai tá levando o seu ticket de R$ 27,90".
- **Condición del repo:** "el principal debe sentirse completo" (decisión del 2026-10-06). No choca si el plan básico alcanza para hacer los 28 días enteros y el completo suma continuidad y comodidad. Si el básico se recorta para forzar el salto, es carnada: se descarta.
- **En Reto Cintura 28 (Adaptación, a testear):**
  - **Básico** (precio ganador de EXP-001, por ejemplo US$ 11,90): app de 28 días, plan B, recetas, guía.
  - **Completo** (US$ 17,90 a 19,90): todo lo anterior + semanas 5 a 7 + menú armado con listas + comunidad.
  - El anuncio promete el básico y su precio.
  - En Hotmart, cada plan con contenido distinto suele requerir un producto aparte o un acceso distinto por oferta: verificar en la cuenta.
- **Hipótesis: testear.** Variable: estructura de oferta (plan único actual contra dos planes). Métrica: neto por visita. Correr después de EXP-001, con al menos 7 días o 50 ventas por variante.

### OF-30 · Downsell al elegir el plan básico
**Regla.** Si la persona elige el básico, una ventana le ofrece una sola vez el completo a un precio intermedio real.
- **Ámbito:** pago · **Confianza:** Media (Borba, con captura y ARPU).
- **Fuentes:** L03, L29.
- **Ejemplo textual (Borba, L03):** ventana "Peraí! Tem certeza? Oferta única: Acesso Completo R$ 17,90". L29: "muito difícil ela sair da sua página sem deixar alguns reais a mais".
- **Condición:** el precio del downsell existe y se cobra de verdad. Nada de contador en la ventana.
- **En Reto Cintura 28 (Adaptación):** "Antes de seguir: el plan completo, con las semanas 5 a 7 y el menú armado, te queda en US$ 14,90 solo desde acá." Solo si se adopta OF-29.
- **Hipótesis: testear.** Variable: ventana de downsell sí o no (con los dos planes ya activos). Métrica: neto por visita.

### OF-31 · Upsell de continuidad después de pagar, de 1 a 3
**Regla.** Después de la compra, un upsell de un clic que continúa el producto. Con el tiempo se puede pasar a 2 o 3 upsells probados.
- **Ámbito:** pago · **Confianza:** Media (Alexander, NY y Borba lo mencionan, independientes, sin datos aislados).
- **Fuentes:** L106, L142, L31.
- **Ejemplo textual (Alexander, L106):** "Eu coloquei três upsells nele... já tavam validados" (el competidor tenía uno).
- **Contradicción interna del Reto:** las semanas 5, 6 y 7 de regalo y el asesoramiento de 7 semanas ya regalan la continuidad. El upsell "Cintura 28 · Continuación, 8 semanas, US$ 17-27" de `02-oferta.md` compite con lo regalado. **El upsell tiene que ser otra cosa:** Nivel 2 (semanas 8 a 15 con progresión de fuerza), Glúteos 28, o el acompañamiento en un tramo pago (HT-12, HT-13).
- **En Reto Cintura 28:** se activa con ~50 ventas (regla del repo, se mantiene).
- **Hipótesis: testear.** Variable: upsell sí o no. Métrica: neto por compra, controlando reembolsos a 14 días.

### OF-32 · El ARPU neto es el techo del CPA: medilo y reemplazá las tasas supuestas
**Regla.** El CPA de equilibrio sale del ARPU neto real (después de comisión y reembolsos). Las tasas de toma de los bumps son hipótesis hasta que haya ventas.
- **Ámbito:** pago · **Confianza:** Alta (aritmética; Gaspar mide ARPU por oferta, L59 y L73).
- **Fuentes:** L59, L73, L §3.12; `playbook/formulas.md`.
- **En Reto Cintura 28:** con 30 ventas, reemplazar el 25 % de toma del Menú por el dato real y recalcular `07-meta-ads.md`. Ver MB-11 a MB-18.

---

## I. Video de venta y retención al pitch

### OF-33 · Si hay video de venta, medí la retención hasta el precio y testeá aperturas
**Regla.** En un video de venta, la métrica que manda es qué porcentaje llega al momento del precio. Se testean 3 aperturas manteniendo el cuerpo.
- **Ámbito:** pago · **Confianza:** Media (Alexander con gráficos de VTurb; el caso cambió muchas cosas a la vez).
- **Fuentes:** L107, L108, L109, L110, LB19.
- **Ejemplo textual (Alexander):** retención al pitch "começado com 25% de retenção no pitch e daí foi abaixando pra 15%" (L108); "A Lead 3 pegou aqui 24% de retenção no pitch" (L109; 24,87 % según LB19); al día siguiente, ROI 2 y 1.880 de lucro (L110). Ojo: la Lead 3 solo **recuperó** el 25 % inicial.
- **En Reto Cintura 28 (Adaptación):** no hay VSL. El equivalente es el **% de visitas que llega a la tarjeta de precio** (Clarity) y el % que termina el quiz. Si se suma un video en la página: alojarlo en una herramienta con curva de retención y probar 3 aperturas propias, una por vez.
- **Hipótesis: testear.** Variable: apertura del video (3 versiones). Métrica: % que llega al precio, después compras por visita.

### OF-34 · DESCARTADO: "expert" generado con IA en la VSL
**Regla descartada.** Agregar un experto ficticio hecho con IA para dar autoridad.
- **Fuentes:** L103 ("coloquei um expert com IA"), L104.
- **Motivo:** experto falso, en un nicho de salud: engañoso, contra las políticas de Meta y el principio 1 del repo. En el Reto, las modelos IA son personajes ilustrativos; nunca nutricionistas, médicas ni clientas.

---

## J. Checkout

### OF-35 · Checkout simple: el mismo producto, sin bombas de información
**Regla.** En el checkout la persona ya decidió: banner limpio, resumen del producto, bumps y nada más. Sin prueba social ni textos largos.
- **Ámbito:** pago · **Confianza:** Media (Borba, con IC de 31,2 % y 74 % de aprobación entre venta iniciada y aprobada).
- **Fuentes:** L33, L35.
- **Ejemplo textual (Borba, L35):** "não precisa encher de prova social, bombas de informação".
- **En Reto Cintura 28:** el banner elegido ("Tu Día 1 empieza hoy", 7 días de garantía, acceso inmediato, pago seguro) cumple. Precio y extras iguales a la página.

### OF-36 · DESCARTADO: cronómetro de checkout que no cambia nada
**Regla descartada.** Un temporizador de 15 minutos "para un poquito de urgencia" que se reinicia o vence sin consecuencias.
- **Fuentes:** L34 ("Um cronômetro ali no topo... Não exagerem rapaziada").
- **Motivo:** urgencia falsa (principio 1 del repo). El checkout del Reto ya tuvo este problema (aprendizaje del 2026-10-09: el contador llegaba a cero y el cupón seguía).
- **Alternativa honesta:** la fecha de fin real del cupón, igual en página y checkout.

### OF-37 · Mucho IC sin compras es un problema de pago, no del creativo
**Regla.** Si un creativo trae inicios de checkout pero no compras, revisá el checkout y los medios de pago antes de apagarlo.
- **Ámbito:** pago · **Confianza:** Media (Borba con dashboard de aprobación de Pix; la frase de Ferreira solo está en el Documento B y no se verifica).
- **Fuentes:** LB08, L07, L09.
- **Ejemplo textual (Ferreira, LB08):** "Como é que eu sei que tão vendendo bem se tá prejuízo ou pouco lucro aqui? Porque eu tô com muito IC, saca?"
- **En Reto Cintura 28 (Adaptación):** revisar en Hotmart: compras rechazadas por país, tarjetas internacionales, cuotas, moneda mostrada, medios locales disponibles en cada país (verificar en la cuenta). Con IC alto y compras bajas en un país, el problema es ese país, no el anuncio.

---

## K. Reembolsos y activación post-compra

### OF-38 · Medí reembolsos por oferta, creativo y semana
**Regla.** Los reembolsos se leen por creativo: un anuncio que promete de más trae reembolsos aunque tenga buen CPA.
- **Ámbito:** pago · **Confianza:** Media (Borba con dashboard; repo con reserva de 7 % y alarma sobre 8 %).
- **Fuentes:** L08.
- **Referencia:** Borba ≈ 4,2 % de la facturación neta (cálculo propio, un solo caso, Brasil, R$ 10).
- **En Reto Cintura 28:** reserva de 7 % en las cuentas (se mantiene). Sumar a la tabla semanal de `09-metricas.md` la columna "reembolsos por creativo de origen" (Utmify cruza venta y anuncio).

### OF-39 · Prueba social real o nada
**Regla.** La prueba social pesa, pero solo la real y con permiso. Mientras no exista, la prueba es el producto por dentro y la garantía.
- **Ámbito:** ambos · **Confianza:** Media (Borba con capturas de WhatsApp; principio 1 del repo).
- **Fuentes:** L23.
- **Ejemplo textual (Borba, L23):** "Brasileiro só compra se tiver outra pessoa falando bem" (opinión).
- **En Reto Cintura 28:** el INFORME menciona videos y fotos del reto presencial: usarlos solo con permiso por escrito guardado. Descartado: testimonios inventados, antes y después, modelos IA como clientas.

### OF-40 · Victoria rápida antes de que venza la garantía
**Regla.** Diseñá la entrega para que la compradora sienta una victoria concreta antes del día 7 (fin de la garantía de Hotmart).
- **Ámbito:** ambos · **Confianza:** Media (Víctor y su equipo; consistente con la práctica de *customer success* de "tiempo hasta el primer valor").
- **Fuentes:** J58, H36.
- **Ejemplo textual (J58):** "15 Days to Win": "15 días para que la persona sienta que pagó y ganó... aseguras la retención".
- **En Reto Cintura 28 (Adaptación, "Ganá antes del día 7"):**
  - Día 0 (en el email 1 y la bienvenida de la comunidad): "Hoy en 10 minutos: medí tu cintura, guardá la app en el inicio y hacé el plan B de 8 minutos". Primer check visible en la app.
  - Día 1: una receta rápida del plan.
  - Día 3: el mensaje del repo "nunca dos veces seguidas".
  - Día 5 a 7: logro visible de constancia (racha, energía, organización), nunca kilos.
- **Hipótesis: testear.** Variable: onboarding "Día 0 en 10 minutos" contra el email actual de bienvenida. Métrica: % de compradoras que completan el Día 1 en 48 h; secundaria: reembolsos a 7 días.

### OF-41 · En low ticket, el comprador que paga poco consume soporte: entrega autoservicio y alcance claro
**Regla.** Todo servicio humano incluido en un producto barato necesita alcance escrito (qué incluye, con qué frecuencia, en cuánto tiempo se responde).
- **Ámbito:** ambos · **Confianza:** Baja para la frase de Víctor (opinión). **Alta** para la aritmética de capacidad del Reto (ver HT-12).
- **Fuentes:** H36, T75, T77.
- **Ejemplo textual (Víctor, H36):** "El cliente que menos paga es el cliente que más jode".
- **En Reto Cintura 28:** el asesoramiento personalizado de 7 semanas por WhatsApp incluido a US$ 15,90 crece con cada venta: con 10 ventas por día hay ≈ 490 compradoras dentro de su ventana de 7 semanas; a 10 minutos por semana cada una son ≈ 82 horas semanales. Hay que definir alcance o moverlo a un tramo pago (ver cambios y HT-12).

---

## L. Cambios concretos propuestos para la oferta de Reto Cintura 28

Comparado con `products/reto-cintura-28/02-oferta.md` (estado al 2026-10-12). Prioridad: **P1** antes de gastar en anuncios; **P2** con las primeras 20 a 50 ventas; **P3** cuando la oferta sea rentable.

| # | Tema | Hoy en `02-oferta.md` | Propuesta | Respaldo | Prioridad |
|---|---|---|---|---|---|
| 1 | Asesoramiento personalizado | 7 semanas por WhatsApp incluidas en US$ 15,90. Costo operativo "no incorporado" | Escribir el alcance concreto (por ejemplo: "una respuesta por día hábil en menos de 24 h, por el grupo o por mensaje") o pasarlo a un tramo pago con cupos reales (HT-12, HT-13). Sin alcance, a 10 ventas por día no se puede cumplir | OF-41, HT-12, T75, T77 | P1 |
| 2 | Tarjeta de valor US$ 80 | "Valores estimados" por pieza, sin precio real | Reemplazar los montos por concreción (qué incluye, frecuencia, plazo) o cobrar por separado alguna pieza para que su precio sea real | OF-22, principio 1 | P1 |
| 3 | Coherencia de números | Producto: 32 recetas. Sistema de copy: "70+ recetas". Semanas 6 y 7 sin verificar en la app | Un solo número real en anuncios, página, checkout y app. Semanas 6 y 7 cargadas antes de lanzar | OF-00, OF-16 | P1 |
| 4 | Entrega | Invitación a la comunidad y contacto del asesoramiento "pendientes" | Sumar al email 1, a la página de gracias y al módulo "Empezá acá" | OF-14, OF-40 | P1 |
| 5 | Checkout | Contador que vence sin consecuencias (aprendizaje 2026-10-09) | Sacarlo; si hay urgencia, la fecha de fin real del cupón | OF-36 | P1 |
| 6 | Precio de referencia | Base US$ 45,43 con `LANZAMIENTO65` hasta el 24/10; `LANZAMIENTO84` vigente hasta el 21/10 | Eliminar `LANZAMIENTO84`. El 25/10 decidir: quedarse en US$ 45,43 de verdad o volver a US$ 15,90 sin tachado. No relanzar el mismo "−65 % por tiempo limitado" | OF-22, OF-36, `10-decisiones.md` | P1 |
| 7 | Nombre del bump | "Menú Acelerador" US$ 4,90 | "Menú armado de 28 días + listas de compras". Texto: "Sí, sumá el Menú armado por US$ 4,90..." | OF-25, aprendizaje 2026-10-08 | P1 |
| 8 | Bumps | Uno solo (Menú) | Tres casillas: Menú, Kit Antiexcusas, combo (EXP-003). Activar el segundo con ~20 ventas en una semana sin otros cambios grandes | OF-25, OF-27, OF-28 | P2 |
| 9 | Precio de los bumps | 4,90 fijo | Test 4,90 contra 7,90 en el Menú (una variable) | OF-26 | P2 |
| 10 | Precio del principal | EXP-001: 15,90 contra 9,90 a 11,90 | Se mantiene y sube de prioridad: el front LATAM de referencia ronda US$ 10 | OF-19 | P2 |
| 11 | Escalera de planes | Plan único | Test nuevo (EXP-006): Básico (lo que promete el anuncio, completo para los 28 días) contra Completo (+ semanas 5 a 7, menú, comunidad), con downsell en ventana. Métrica: neto por visita | OF-29, OF-30 | P2 |
| 12 | Upsell | "Continuación 8 semanas US$ 17-27" desde ~50 ventas | Las semanas 5 a 7 y el asesoramiento ya regalan continuidad. El upsell pasa a ser Nivel 2 (semanas 8 a 15), Glúteos 28 o acompañamiento grupal pago | OF-31, HT-13 | P3 |
| 13 | Activación | Emails Día 0, 1, 3, 7… | "Ganá antes del día 7": victoria medible el Día 0, en la app y en la comunidad | OF-40 | P1 |
| 14 | Prueba | Sin prueba social | Producto real por dentro en página y creativos (pantallas reales de la app, receta cocinada, hojas impresas). Fotos y videos del reto presencial solo con permiso escrito | OF-17, OF-39 | P1 |
| 15 | Precio en el creativo | No definido; preferencia por imágenes sin precio | Precio y "pago único" en voz o texto principal, no en la imagen. Test con y sin precio | OF-21 | P2 |
| 16 | Competencia | "Sin investigación formal" | Hoja de minería de la Biblioteca de anuncios con lógica a modelar | OF-01 a OF-04 | P2 |
| 17 | Tasas supuestas | Toma del bump del 25 % (hipótesis) | Con 30 ventas, reemplazar por el dato real y recalcular `07-meta-ads.md` | OF-32 | P2 |
| 18 | Afiliados | 37 %, abrir con ventas propias, reembolsos medidos y kit | Sin cambios. El kit incluye las reglas de OF-22 y OF-36 (sin anclas inventadas ni contadores) | OF-22, OF-36 | P3 |

### Cambios sugeridos a otros archivos del playbook (oferta)

- `playbook/03-oferta.md`:
  - Agregar "Minería en la Biblioteca de anuncios" con la hoja de OF-01 y los criterios de OF-02 y OF-03.
  - Agregar "Escalera de planes y downsell" (OF-29, OF-30) como opción testeable, con la condición "el básico cumple todo lo del anuncio".
  - En bumps, agregar: "testear el monto absoluto; en fronts de US$ 10 a 20, entre US$ 3 y 7,90".
  - En "Venta siguiente": "el upsell no puede competir con lo que ya se regala".
- `playbook/07-hotmart-checkout.md`: agregar "medir compras rechazadas por país y medio de pago; IC alto sin compras = revisar checkout" (OF-37).
- `playbook/10-post-compra.md`: agregar "Ganá antes del día 7" (OF-40) y la regla "todo servicio humano incluido tiene alcance escrito" (OF-41).
- `playbook/formulas.md`: agregar "cada US$ 1 de ARPU bruto suma US$ 0,84 al CPA de equilibrio (con comisión de 9,9 % y reembolsos de 7 %)".
