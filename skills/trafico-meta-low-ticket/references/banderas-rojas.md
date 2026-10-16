# Banderas rojas

Prácticas que aparecen en las fuentes y **no se usan** en Reto Cintura 28: violan políticas de Meta o Hotmart, son engañosas, ilegales o ponen en riesgo la cuenta. Se registran para que ningún agente las vuelva a proponer, y cada una trae la **alternativa honesta** que persigue el mismo objetivo.

- Prefijo: `BR-xx`. Los IDs no se renumeran; si una se retira, se marca "Retirada (fecha, motivo)".
- Estas reglas están por encima de cualquier dato propio: aunque un antes/después convirtiera más, no se usa. Ver la precedencia en `protocolo-de-ingesta.md`, paso 8.
- Base: `docs/01-principios.md`, `compliance/meta-ads-politicas.md`, `compliance/hotmart.md` y `compliance/checklist-previa.md` del repo `low-ticket-os`.
- Las citas son textuales de las extracciones (con el ID de afirmación). La fiabilidad de cada video está en `fuentes.md`.

Total: **32 banderas rojas** en 6 grupos.

---

## A. Cuentas, plataforma y distribución

### BR-01 · Cuentas de agencia como "repuesto" cuando Meta bloquea
- **Fuente:** L111 (Alexander, F-12): "Você paga 10% do que você investe... desvinculam na hora e te dão outra". L112: "subi 10 criativos em cada conta, foram três contas".
- **Por qué se descarta:** usar cuentas de terceros para seguir anunciando después de un bloqueo es eludir las medidas de cumplimiento de Meta. Termina en bloqueo del portafolio, del perfil personal y del medio de pago, en cadena.
- **Alternativa honesta:** una cuenta publicitaria propia en USD con medio de pago propio (regla del repo). Si cae, apelación por los canales oficiales y revisión del creativo que la tiró. Prevenir con `checklist-previa.md` antes de cada lote.

### BR-02 · "Lateralizar" en más cuentas para esquivar bloqueos o la estacionalidad
- **Fuente:** L100 (Alexander): "decidi também lateralizar em mais contas". L114 (solo en la versión condensada, no está en el literal): "quanto mais contas de anúncio você sobe, maior a chance de contornar a sazonalidade".
- **Por qué se descarta:** multiplicar cuentas para repartir el riesgo de enforcement es la misma evasión que BR-01. Además L114 probablemente lo inventó Gemini.
- **Alternativa honesta:** una cuenta, estructura simple (`08-meta-ads.md`), y diversidad de **creativos** dentro de esa cuenta, que es lo que Andromeda premia.

### BR-03 · Navegadores antidetección / multilogin (MoreLogin)
- **Fuente:** L159 (André, F-15): "Pra subir os anúncios sem risco de bloqueio, usei o MoreLogin". LB13 y LB25 (solo Doc B): planes y link de socio con descuento.
- **Por qué se descarta:** sirven para manejar perfiles de Facebook que Meta no puede asociar entre sí. Es evasión de enforcement. Además el creador cobra comisión por recomendarlo (conflicto de interés).
- **Alternativa honesta:** perfil real, portafolio comercial verificado, dominio propio verificado. Si un anuncio se rechaza, se corrige el anuncio.

### BR-04 · Abrir una cuenta nueva para escapar de una restricción
- **Fuente:** T107 (F-04): "Si tu cuenta está quemada, migra hacia una cuenta limpia". S37, A41, H15–H18: migración de Alfredo a una cuenta nueva.
- **Por qué se descarta:** si la cuenta vieja tiene una sanción de Meta, crear otra para seguir es evasión y está prohibido. Si no tiene sanción, el "castigo por bajo rendimiento" no tiene evidencia pública (ver CS-04) y migrar hace perder la audiencia.
- **Alternativa honesta:** revisar "Estado de la cuenta" en Instagram. Sin sanción: cambiar el contenido, no la cuenta. Con sanción: apelar y corregir. Para anuncios, nunca.

### BR-05 · Duplicar un video para burlar el "detector de duplicados"
- **Fuente:** B82 / T06 (F-02): "Este filtro de contenido duplicado solamente funciona y solamente está activado en Trials". B84 / T07: "vas a darle a los tres puntitos y a «Duplicar vídeo»". B85: "No va a detectar la duplicación porque son dos algoritmos".
- **Por qué se descarta:** el objetivo declarado es engañar a un sistema de integridad de Instagram. Instagram dice públicamente que prioriza el contenido original y baja el repetido. Riesgo de perder elegibilidad para recomendaciones. La afirmación técnica no tiene evidencia.
- **Alternativa honesta:** usar Trial Reels para lo que fue hecho: probar con no seguidoras **ganchos o ideas distintas** y compartir al feed la que rinde.

### BR-06 · Microvariantes "para que Instagram no sepa que es el mismo video"
- **Fuente:** T28: "x1.05, o sea, con un 5% más de velocidad". T30: flip horizontal "para conseguir viralidad". T31: invertir el color. T36: cambiar el fondo con IA y "Instagram no va a saber que es el mismo vídeo".
- **Por qué se descarta:** en orgánico es zona gris de spam si se abusa. En pago no sirve: Meta agrupa los creativos casi idénticos como uno solo, así que no aportan diversidad.
- **Alternativa honesta:** variantes reales de un ganador: otro gancho, otro formato (POV, a cámara, personajes), otra escena. Si se quiere más ritmo, la velocidad se genera en la voz (ElevenLabs), no acelerando el video.

### BR-07 · Engagement artificial: comprar seguidores, follow por follow, grupos de engagement, sorteos con premio genérico
- **Fuente:** las propias fuentes lo condenan. S13: "son falsos datos, son falsas interacciones, son falsas visitas". H11: "Hacer follow por follow… Comprar seguidores". A41: seguidores comprados y bots.
- **Por qué se descarta:** comportamiento no auténtico, prohibido por Instagram. Trae audiencia que no compra.
- **Alternativa honesta:** crecer con contenido que la audiencia del reto quiera ver y compartir (recetas, mitos, situaciones reales). Sembrar la cuenta con compradoras reales que quieran seguirla.

### BR-08 · Engagement bait
- **Fuente:** LB24 (solo Doc B, no verificable): "comenta aqui embaixo '111% entregue'". A49: "Que polarice y obligue a la gente a debatir en comentarios".
- **Por qué se descarta:** pedir comentarios con una frase fija para inflar el alcance es engagement bait, y Meta lo penaliza. Polarizar en salud empuja a la desinformación (ver BR-26).
- **Alternativa honesta:** palabra clave **funcional** en orgánico (comentá "CINTURA" y te llega la receta o el link por DM vía ManyChat), que entrega algo real. En pago, el CTA va directo a la página.

---

## B. Originalidad y propiedad intelectual

### BR-09 · Clonar copy o VSL ajena, solo traducida
- **Fuente:** L97 (Alexander): "foi idêntica... Eu só peguei a mesma copy". L89 (Asvi): "levar um mecanismo que tá vendendo muito em um país pra outro país".
- **Por qué se descarta:** infringe derechos de autor; Meta atiende denuncias de propiedad intelectual y Hotmart suspende productos. Regla del repo: "Nada copiado de otros negocios". El propio Víctor lo condena (B88, T11: "¿para qué cojones alguien te seguiría a ti?").
- **Alternativa honesta:** modelar la **lógica** (estructura, ángulo, tipo de prueba), nunca el texto. Anotar "qué hace que funcione" en una frase y escribir desde cero con el producto y el lenguaje de las mujeres de LATAM.

### BR-10 · "Frankenstein do ROI": injertar la lead de otra oferta
- **Fuente:** L107 (Alexander): "pegar uma lead de uma oferta que tá escalando e colocar na minha oferta".
- **Por qué se descarta:** es copiar el tramo más valioso del guion ajeno. Mismo riesgo que BR-09.
- **Alternativa honesta:** testear 3 leads **propias** manteniendo el cuerpo y medir retención (L107–L109, la parte legítima de la técnica).

### BR-11 · Bajar videos de TikTok para usarlos en los creativos
- **Fuente:** L164 (Ferreira): "o TikTok pra pegar vídeos, o baixador sstik.io".
- **Por qué se descarta:** usar metraje ajeno sin licencia. Denuncias y bajas de anuncios.
- **Alternativa honesta:** metraje propio (capturas reales de la app, recetas cocinadas), generado con IA a partir de prompts propios, o de bancos con licencia.

### BR-12 · Copiar la página del competidor
- **Fuente:** L153 (André): "tirei print da página do concorrente".
- **Por qué se descarta:** copia de diseño y contenido; además la página tiene que decir lo mismo que el propio anuncio, no lo que dice el de otro.
- **Alternativa honesta:** usar páginas ajenas solo para listar qué bloques tienen (estructura) y armar la propia con `playbook/05-pagina.md`.

### BR-13 · Adaptar virales de otros idiomas al pie de la letra
- **Fuente:** T108: "tomar temas que el mercado ya probó… en otros idiomas, y adaptarlos". A52: "Modelar ideas que ya hayan demostrado ser virales en otros idiomas". S61: 10 referencias, 5 en español y 5 en inglés.
- **Por qué se descarta (solo la versión textual):** traducir el guion, la imagen o la música es copia. El tema y la lógica sí se pueden tomar (S62: "quiero que te robes la lógica detrás").
- **Alternativa honesta:** banco de referencias con una columna "lógica robada" y otra "nuestra versión". Prohibido pegar el texto original en el guion.

---

## C. Identidad, prueba y autoridad

### BR-14 · "Experto" inventado con IA
- **Fuente:** L103 (Alexander): "coloquei um expert com IA". L104: "se colocasse um expert ia passar muito mais autoridade". (DreamFace, solo en la versión condensada.)
- **Por qué se descarta:** presentar una persona inexistente como médico, nutricionista o especialista es engaño. En salud choca con las políticas de Meta sobre prácticas engañosas y con la defensa del consumidor (Brasil, LATAM, Europa).
- **Alternativa honesta:** autoridad real y verificable (si hay una profesional real que revisó el plan, con nombre y permiso), o autoridad del **producto**: mostrar la app por dentro, el plan día por día, las recetas cocinadas.

### BR-15 · Personaje IA presentado como clienta, creadora, nutricionista o con vida propia
- **Fuente:** B113–B115 y B126 (la cara de la marca tiene que ser real y congruente); A86 (ideas personales de Jordan Belfort: "Las 5 cosas más raras que tengo en mi casa"); J37 ("20 cosas raras que has hecho"). Trasladado a Santiago, que usa modelos latinas generadas con IA.
- **Por qué se descarta:** un personaje IA no puede dar testimonio en primera persona, ni contar "lo que come", ni tener credenciales o historia propia. Es testimonio y experto falsos. Regla del repo: "Las personas de IA son personajes que presentan el producto, nunca clientas".
- **Alternativa honesta:** el personaje **presenta y muestra**: "así es el día 1", "esta es la cena de 10 minutos del plan". Misma modelo, misma cocina y misma voz entre piezas (congruencia sin mentira). Marcarlo como ilustrativo (`meta-ads-politicas.md`, punto 5). Las historias personales salen de material real con permiso (J36: "20 horas de contenido en bruto", versión honesta).
- **Ojo, adaptaciones de las extracciones que violan esta regla** (no copiarlas):

| Adaptación | Dónde | Problema | Versión corregida |
|---|---|---|---|
| "Esta cena de 10 minutos es lo que como cuando no quiero sentirme hinchada a la mañana" | `extract_661e8d1a.md` §8.a.2 | La modelo IA cuenta una experiencia propia | "Una cena de 10 minutos para no despertarse pesada" (receta en pantalla, sin primera persona) |
| "Lo que como en un día sin contar calorías" | `extract_661e8d1a.md` §8.a.5 y §8.b.4 | Ídem | "Un día del reto, plato por plato" (POV de manos y app) |
| Vlog "un día comiendo con el reto" | `extract_viralidad_varios.md` A §8.a | La modelo dice que hace el reto | Mismo formato, narrado como recorrido del plan, no como diario personal |

### BR-16 · Testimonios, reseñas, prints, contadores o casos inventados
- **Fuente:** L23 (Borba): "Brasileiro só compra se tiver outra pessoa falando bem" (empuja a conseguir prueba social como sea). B97, T92, A §6: cifras agregadas de clientes sin respaldo ("+10.000 millones", "107 millones de seguidores", "+3.000 clientes").
- **Por qué se descarta:** prohibido por Meta, Hotmart y la ley de publicidad engañosa. Regla 1 del repo.
- **Alternativa honesta:** prueba social **real y con permiso por escrito** (`playbook/10-post-compra.md`). Mientras no haya: demostración del producto, garantía real de 7 días de Hotmart, y frases verificables ("28 días", "más de 70 recetas").
- **Estado en R28 (2026-10-13):** la página ya tiene casos reales (Pame, Lu y seis pares de fotos) con permiso confirmado por Santiago. Válidos en la **página**. En **anuncios**, nunca como antes/después (BR-20); un testimonio real en anuncio, solo sin cifras corporales ni comparación de cuerpos.

### BR-17 · Sketches, cámara oculta o escenas con IA presentadas como reales
- **Fuente:** A53: sketch "Padre Mediocre vs Padre Rico" (10,9M) como formato. J34: "Así vendí todas las entradas de un partido de Messi", con pantalla verde o IA "simulando el estadio".
- **Por qué se descarta (solo si se presenta como real):** una dramatización vendida como hecho real es engañosa; en anuncios, un "testimonio" actuado presentado como real también.
- **Alternativa honesta:** personajes y escenas generadas sí, como **ficción evidente** o con rótulo "dramatización / personaje ilustrativo".

### BR-18 · Estadísticas inventadas en el gancho o el copy
- **Fuente:** B93: "El 95% de marcas personales… muertas en menos de 12 meses". B102: "de cada 100 personas… 90 son espectadores cero". S44: "El 75% de los productos… son de deseo". S48: "el 90% de las personas están en los niveles de consciencia 0 y 1". H29: "7 de cada 1.000… 600 de cada 1.000". Ninguna tiene fuente.
- **Por qué se descarta:** un número inventado en un anuncio de salud es afirmación engañosa. Regla del repo: "Números con origen".
- **Alternativa honesta:** cifras del propio producto ("28 días", "20–30 minutos", "más de 70 recetas") o datos con fuente citada y guardada. Si no hay fuente, el gancho va sin número: pregunta o situación.

### BR-19 · Autoridad prestada sin fuente y celebridades
- **Fuente:** T100: "tal como confirmó Adam Mosseri" (sin cita). F-03: cita de Buffett deformada. J34: Messi como gancho. S y A: Jordan Belfort como prueba (condenado por fraude). LB04 (solo Doc B): El Chavo del Ocho.
- **Por qué se descarta:** citar a alguien que no dijo eso es engaño. Usar celebridades en anuncios puede caer en la política de Meta contra el uso de figuras públicas como cebo. Personajes con derechos (El Chavo) tienen riesgo de propiedad intelectual.
- **Alternativa honesta:** referencias culturales genéricas que no usan imagen ni audio protegido ("la abuela que sirve doble porción"). Citas solo textuales y con fuente guardada.

---

## D. Cuerpo y salud

### BR-20 · Antes/después y comparar cuerpos
- **Fuente:** S67 (F-06): formato "dos chicas comparando su peso corporal", 827k vistas, presentado como formato que funciona. Arco "antes/después" de todos los casos de G1 (B, S). A §8.a (adaptación): "Personajes: dos amigas, una con dieta extrema y otra con el reto".
- **Por qué se descarta:** Meta prohíbe en anuncios el antes/después y las comparaciones de cuerpos en productos de peso y apariencia. Regla del repo.
- **Alternativa honesta:** comparar **platos, rutinas o días**, nunca cuerpos (S63 bien aplicado: "lo de siempre vs lo del reto"). En la versión de dos amigas: mismo tipo de cuerpo, se compara qué cena cada una y cuánto tarda, sin resultados.
- **Estado en R28:** las fotos reales antes/después de la página (2026-10-13) son decisión de Santiago con permiso. En anuncios: prohibidas. Meta revisa también la página de destino; si aparecen rechazos en salud y peso, probar una versión de página para tráfico pago sin ese bloque.

### BR-21 · Prometer kilos, centímetros o plazos; "concretar" el resultado corporal
- **Fuente:** L43 (Borba lo usa como ejemplo de lo que **no** hay que hacer): "não é ficar rodando emagrecimento ali perca 10 kg em 2 dias". B137: "cómo se va a ver, cómo se va a sentir". B141: "de qué punto A a qué punto B… y en cuánto tiempo". El V3 (T71–T78) pide concreción, que aplicada al cuerpo da "bajá X cm en 28 días".
- **Por qué se descarta:** Meta prohíbe kilos y plazos irreales; Hotmart suspende promesas falsas. Regla 2 del repo: la promesa es proceso medible.
- **Alternativa honesta:** concretar el **proceso**: "28 días, 20–30 minutos, sin gimnasio", "medí tu avance en centímetros" (medición, no garantía), "tu semana de comidas resuelta". La vivencia sí: comodidad con la ropa, energía, orden.

### BR-22 · Garantías de resultado, promesas de ingreso y ostentación como prueba
- **Fuente:** S03: "quien vea este vídeo hasta el final va a conseguir este resultado". A84: "garantizado por contrato para alcanzar como mínimo 100.000 seguidores". B138: "Tu hijo va a hablar correctamente en tres meses". H41: "en únicamente 5 meses puedes hacer 100.000 euros". J13: "x3 con el mismo presupuesto". J02–J03: "máquina de imprimir dinero", jets y yates.
- **Por qué se descarta:** nadie puede garantizar un resultado de salud. En Meta son afirmaciones engañosas; en salud infantil o corporal, además, sensibles.
- **Alternativa honesta:** garantizar lo que sí se controla: la **garantía de satisfacción de 7 días de Hotmart** ("si no te sirve, te devolvemos el dinero"), el contenido exacto y el acceso inmediato.

### BR-23 · Atributos personales de quien mira
- **Fuente:** política de Meta (`meta-ads-politicas.md`: "¿Tenés panza?", "¿Tenés más de 40?"). En las fuentes aparece como "discovery" (J55: que el cliente "verbalice su dolor") y como ganchos en segunda persona. **Y, sobre todo, en adaptaciones de nuestras propias extracciones**, que hay que corregir antes de que pasen a los principios:

| Adaptación | Dónde | Problema | Versión corregida (tercera persona o impersonal) |
|---|---|---|---|
| "Si a las 5 de la tarde ya tenés el pantalón apretado aunque casi no comiste, mirá esto" | `extract_b20dd711.md` §8.a.2 | Afirma un estado corporal de quien mira | "La hinchazón de la tarde no siempre es grasa. Esto es lo que suele haber detrás" |
| "Por qué te hinchás aunque comas 'sano'" | `extract_b20dd711.md` §8.a.2 | Ídem | "Por qué el cuerpo se hincha aunque se coma 'sano'" |
| "¿Te pasa que a las 6 de la tarde ya no das más?" | `extract_viralidad_varios.md` J §8.c | Atributo de salud o ánimo de quien mira | "Los planes no se caen a la mañana: se caen a las 6 de la tarde" |
| "¿Cómo cambiaría tu semana si cada comida te dejara con energía en vez de hinchada?" | `extract_viralidad_varios.md` J §8.a | Da por hecho que está hinchada | "¿Cómo cambia una semana cuando cada comida deja energía en vez de pesadez?" |
| "¿Qué es mejor para desinflarte, cenar ensalada o saltearte la cena?" | `extract_viralidad_varios.md` A §8.a | Ídem | "¿Qué ayuda más con la hinchazón de la noche: cenar ensalada o saltearse la cena? Ninguna de las dos" (respuesta defendible con fuente) |
| "El jean que no cierra" | `extract_0f6f1360.md` §8.b.11; A §8.a | Imagen corporal negativa si va en anuncio | "Sentirse cómoda con la ropa" (alternativa del repo) |
| Subnicho "mayores de 40" | `extract_lowticket_br.md` §8.b | Válido en segmentación; prohibido en el copy a quien mira | "Después de los 40 el cuerpo cambia…" (tercera persona) y la edad en la segmentación |

- **Por qué se descarta:** Meta rechaza textos que afirman o insinúan salud, peso, edad o cuerpo de quien mira.
- **Alternativa honesta:** el dolor se nombra igual, pero como fenómeno ("la hinchazón de la tarde", "el plan que se abandona el día 3") o en tercera persona. Sigue cumpliendo la regla de oro de Santiago (tocar el dolor o hacer preguntarse algo) sin señalar a la persona.

### BR-24 · Vergüenza corporal e inseguridad como motor
- **Fuente:** B126: "Si tú vendes cómo ponerte en forma… tú no puedes estar gordo". L39 (Borba, nicho catequesis): "Se você começou agora... e ainda se sente insegura". Trasladado al cuerpo da "¿Te sentís insegura con tu cuerpo?".
- **Por qué se descarta:** imagen corporal negativa, prohibida por Meta. Regla 2 del repo: "El enemigo es el plan imposible, no la persona"; prohibido usar la inseguridad corporal ("que vuelva tu ex", "que te miren").
- **Alternativa honesta:** congruencia = **mujer común creíble** en su cocina (A51 bien aplicado), no un cuerpo ideal. El enemigo es externo: los planes imposibles, la falta de tiempo, la dieta que no se sostiene. La inseguridad del **método** sí se puede tocar ("si ya abandonaste tres planes, el problema era el plan").

### BR-25 · Promesa "sin esfuerzo" o "sin hacer nada"
- **Fuente:** S66 (gancho fuerte modelo): "me está pagando más de 4.000 dólares al mes y no estoy haciendo nada". H01: "incluso sin producto". F-02: "sin grabar más contenido, sin hacer más".
- **Por qué se descarta:** en salud, "sin esfuerzo" es una promesa engañosa y aumenta reembolsos cuando la compradora ve que hay que hacer algo.
- **Alternativa honesta:** quitar las objeciones **reales** que el producto sí resuelve: "sin gimnasio", "20–30 minutos", "con plan B para los días difíciles", "sin pensar qué cocinar". El esfuerzo existe; lo que se saca es lo imposible.

### BR-26 · "Contracorriente" falso en salud
- **Fuente:** A45: "decir lo opuesto a la creencia popular del sector". A49: "Que polarice". Llevado a nutrición sale "los nutricionistas te mienten" o mitos al revés.
- **Por qué se descarta:** desinformación de salud; Meta la restringe y la marca se quema.
- **Alternativa honesta:** contracorriente **verdadero y defendible con fuente** (regla RA8 de la extracción): "Hacer 100 abdominales no achica la cintura", "Saltearse la cena no es la solución". Sin atacar a profesionales ni a personas.

### BR-27 · Nichos de salud restringidos y "se vende de todo"
- **Fuente:** L96: oferta de disfunción eréctil. LB07 (solo Doc B): "Quando eu falo que vende de tudo, realmente é tudo mesmo". F-04: temas de sexualidad del caso Giranda.
- **Por qué se descarta:** categorías restringidas en Meta, con alto riesgo de bloqueo; normalizan correr cualquier promesa médica.
- **Alternativa honesta:** quedarse en hábitos y rutina (`meta-ads-politicas.md`: "Medicina/salud sensible: evitar el tema"). Productos nuevos solo en nichos sin afirmaciones médicas.

---

## E. Precio, urgencia y oferta

### BR-28 · Urgencia y escasez falsas
- **Fuente:** L34 (Borba): "Um cronômetro ali no topo" (temporizador de 15 minutos que probablemente se reinicia). L39: "garante o seu antes que essa oferta acabe" (sin fecha). L166: el prompt de creativos pide "urgência" (la condensada dice "escassez"). B (F-05): "es la única cuenta que yo respondo personalmente". S (F-06): "mentorías filtradas" que publica él mismo.
- **Por qué se descarta:** patrón oscuro; viola la defensa del consumidor (CDC en Brasil y equivalentes en LATAM) y la regla 1 del repo: "Urgencia y escasez solo con fechas o cupos que se cumplen de verdad".
- **Alternativa honesta:** fecha de fin **real** del cupón de lanzamiento, que al vencer cambia el precio de verdad (aprendizaje del repo del 2026-10-09). O una razón real para empezar hoy: "mañana es tu Día 1".
- **Estado en R28:** es un desacuerdo recurrente (Santiago pidió un contador inventado; el checkout tuvo un contador que vencía sin consecuencias). La alternativa real ya está preparada en la página.

### BR-29 · Valor de referencia inflado
- **Fuente:** L25 (Borba): "R$ 128 reais totalmente gratuitos" (los bonos en realidad cuestan R$17,90 más). LB11 (solo Doc B): "R$ 207 (valor percibido de bonos)". L37 (solo condensada): "descuentos de 90%".
- **Por qué se descarta:** un precio "antes" o un valor de bonos que nunca se cobró es publicidad engañosa. Regla 1 del repo: "Precios de referencia solo reales".
- **Alternativa honesta:** mostrar qué incluye cada bono y para qué sirve, sin precio inventado. Si se muestra un valor, que sea un precio al que ese componente se vende de verdad por separado.
- **Estado en R28:** la tarjeta de precio muestra "valores estimados" (asesoramiento US$35, app US$25, comunidad US$15, guía US$5; total US$80) y un precio base con cupón. Tienen que pasar esta misma regla.

### BR-30 · Precio carnada: anunciar el básico y recortarlo para forzar el upgrade
- **Fuente:** L26: "Em todos os meus criativos eu prometo que o preço do produto é R$ 10". L28: "na maioria das vezes ela vai tá levando o seu ticket de R$ 27,90". Borba lo defiende porque el plan de R$10 entrega lo prometido (L27).
- **Por qué se descarta (la versión carnada):** si el básico se recorta hasta no servir, el precio anunciado es engañoso y llegan los reembolsos.
- **Alternativa honesta:** si se prueba una escalera de planes (hipótesis de `extract_lowticket_br.md` §8.c), el básico entrega **exactamente** lo que dice el anuncio y se siente completo (decisión del repo del 2026-10-06: "El principal debe sentirse completo").

### BR-31 · "Con buen marketing da igual un producto mediocre"
- **Fuente:** B62: "con un buen marketing da igual que tengas un producto que sea mediocre".
- **Por qué se descarta:** en low ticket por Hotmart, el producto mediocre se paga en reembolsos y contracargos. Lo contradice Borba con sus datos (L08: los reembolsos bajaron cuando cuidó el entregable). Regla 1 del repo.
- **Alternativa honesta:** entregable de primer nivel, victoria temprana antes de que venza la garantía (J58 adaptado: "ganá en 7 días") y reembolsos medidos cada semana.

---

## F. Datos y mensajería

### BR-32 · Mensajes masivos sin consentimiento y automatización sin aviso
- **Fuente:** S38: migrar pidiéndole a "base de clientes, grupos de WhatsApp, compañeros" que sigan la cuenta nueva. F-06: "AI Step" de ManyChat que califica solo.
- **Por qué se descarta (en su versión masiva):** escribir en masa a bases que no dieron consentimiento es spam (bloqueo de WhatsApp) y choca con las leyes de protección de datos. Las respuestas automáticas por DM tienen reglas de Meta (ventana de 24 horas).
- **Alternativa honesta:** escribir solo a compradoras que aceptaron recibir mensajes; ManyChat con aviso de que es una respuesta automática y salida a una persona. Nunca mandar datos de salud ni respuestas del quiz al píxel (regla 3 del repo).

---

## Chequeo rápido antes de aprobar un guion o un principio

| Pregunta | Si la respuesta es sí | BR |
|---|---|---|
| ¿Hay cuerpo comparado, antes/después o zoom a una zona del cuerpo? | Rehacer | BR-20 |
| ¿El texto le atribuye a quien mira peso, panza, hinchazón, edad, cansancio o salud? | Pasar a tercera persona o impersonal | BR-23 |
| ¿La modelo IA dice "yo", "lo que como", "hice el reto" o tiene credenciales? | Pasar a "esto es / así se ve" | BR-15 |
| ¿Hay un número sin fuente? | Sacarlo o citar fuente | BR-18 |
| ¿Promete kilos, centímetros o un plazo de resultado? ¿"Garantizado"? ¿"Sin esfuerzo"? | Cambiar por proceso y garantía de Hotmart | BR-21, BR-22, BR-25 |
| ¿Usa la inseguridad o la vergüenza como motor? | Cambiar el enemigo al plan imposible | BR-24 |
| ¿Hay urgencia sin fecha real o un valor "antes" inventado? | Fecha real o sacarlo | BR-28, BR-29 |
| ¿El texto, la imagen o el video salen de otro creador? | Escribir desde cero con la lógica | BR-09 a BR-13 |
| ¿La técnica sirve para esquivar un sistema de Meta o Instagram? | No se usa | BR-01 a BR-06 |
