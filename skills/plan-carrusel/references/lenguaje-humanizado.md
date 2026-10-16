# Lenguaje humanizado: frases, voz, texto en pantalla y variantes por país

Dominio: copy y guion. Producto de referencia: Reto Cintura 28 (RC28).

Este archivo tiene siete partes:

1. Principios (LH-01 a LH-23).
2. Pares de frases de las fuentes, mala → buena (textuales).
3. Pares para RC28 (Adaptación).
4. Lista anti-IA en español.
5. Guía para escribir para la voz (ElevenLabs).
6. Especificación del texto en pantalla y test doble.
7. Voseo, "tú" y léxico por país.

Convenciones:

- B, T, S, A, H y J son Víctor Heras y su equipo (cuentan como una sola fuente). L y LB son el compilado brasileño; cada creador es independiente.
- **"Adaptación"** marca un texto propio escrito para RC28.
- Lo que en este archivo viene de conocimiento general del idioma, y no del corpus, está marcado como tal y con confianza Baja.

---

## 1. Principios

### LH-01 · Empezá por lo que le importa a ella
- **Enunciado:** la primera frase responde a lo que quien mira quiere saber o siente, no a lo que la marca quiere contar. Antes de escribir se contesta "¿qué necesita entender ella para seguir mirando?".
- **Ámbito:** ambos.
- **Confianza:** Media. **Hipótesis: testear.**
- **Fuentes:** T45 ("Pero si está clarísimo". "Ya, para ti. Pero lo importante no es que te quede claro a ti, sino que le quede claro a la gente con la que te quieres comunicar"), T50 ("empezar por lo que tú quieres contar sin pensar en lo que la otra persona quiere escuchar"), T55, T56, T61, B13 (escaparate).
- **Por qué funciona:** cada persona tiene en la cabeza su propia conversación (T56). Si la primera frase no entra en esa conversación, no hay una segunda.
- **Aplicación a RC28:**
  - Mal: "El Reto Cintura 28 es un programa de 28 días con app y guía."
  - Bien: "¿Qué hacés el día que no tenés ni 20 minutos?"
- **Test:** abrir con lo que le importa a ella contra abrir con el producto, en el mismo anuncio. Métrica: hook rate.

### LH-02 · Concreto: "¿qué tendría que ver ella para entenderlo?"
- **Enunciado:** cada frase abstracta se traduce a algo que se pueda ver: quién, qué, cuándo, cuánto, qué incluye, cómo se hace.
- **Ámbito:** ambos.
- **Confianza:** Alta.
- **Fuentes:**
  - T47 ("En la segunda frase ya sabes qué pasa, qué te están pidiendo y para qué");
  - T48 (mucha gente comunica de forma que "al otro le llega la mitad o un cuarto de la información");
  - T71 ("cada persona entiende una cosa distinta");
  - T72;
  - T73 ("suena bien, pero ¿qué coño significa eso?");
  - T75;
  - T78 ("piensa qué tendría que ver otra persona para entender qué significa");
  - L14–L18 (Borba: headline directa y "deixo bem explícito exatamente o que a pessoa vai receber");
  - L141 (NY: lo específico "me habla a mí");
  - evidencia externa (lo concreto se entiende y se cree más).
- **Por qué funciona:** lo vago lo completa cada una con su propia idea, y casi siempre con desconfianza. Lo concreto se puede imaginar.
- **Aplicación a RC28:**
  - "Fácil de seguir" → "Abrís la app, tocás Empezar y el timer te dice cuándo parar".
  - "Comé sano" → "Mitad del plato verduras, un cuarto proteína, un cuarto papas o arroz".

### LH-03 · Plazos y números en vez de "pronto", "rápido" o "fácil"
- **Enunciado:** se dan minutos, días y pasos, no adjetivos de velocidad. "Pronto" significa cosas distintas para cada persona. Los nombres no prometen velocidad de resultado.
- **Ámbito:** ambos.
- **Confianza:** Media. **Hipótesis: testear.**
- **Fuentes:** T77 ("Si puedes comprometerte a una hora, di la hora"; "Para ti pronto es el viernes, para mí es dentro de una hora"), `docs/aprendizajes.md` del 2026-10-08 ("acelerador", "rápido" o "express" prometen una velocidad de resultados que el contenido no entrega).
- **Aplicación a RC28:**
  - "Resultados rápidos" → "28 días; entrenos de 20 a 30 minutos".
  - "Acceso inmediato" → "El acceso llega a tu correo apenas se aprueba el pago" (verificar el tiempo real de Hotmart antes de dar minutos).

### LH-04 · Sin jerga
- **Enunciado:** el texto lo entiende alguien que no sabe nada de nutrición ni de entrenamiento. La jerga no hace parecer experto: hace callar al cliente "porque no se entera de nada".
- **Ámbito:** ambos.
- **Confianza:** Media. **Hipótesis: testear.**
- **Fuentes:** T79 ("el cliente se calla porque no se entera de nada"), T19 (la PCN la hace el lego), T102 y T105 (vocabulario técnico: "99 de 100 pasaban de largo"), B100 ("Palabras raras", "Los 3 KPI…"), S55 (filtro 5/50), J09 ("el traducirlo a atractivo, a entendible, es donde me muero").
- **Lista de términos a evitar en RC28, con su versión llana:**

| Jerga | En llano |
|---|---|
| Déficit calórico | Sin pasar hambre / comer un poco menos sin darte cuenta (solo si hace falta decirlo) |
| Macros, macronutrientes | Proteína, verduras, papas o arroz |
| Metabolismo (activar, acelerar) | No se usa (además, promete algo que no se puede verificar) |
| Cortisol, inflamación, insulina | No se usan en anuncios (temas de salud) |
| HIIT, Tabata, AMRAP | "40 segundos de ejercicio y 20 de descanso" |
| Core, abdomen transverso | Panza, "la zona de la cintura" (en tercera persona) |
| Tonificar, quemar grasa localizada | No se usan (prometen un resultado corporal, o son un mito) |
| Adherencia | "Poder sostenerlo" |
| Volumen, intensidad, progresión | "Cada semana un poco más" |
| Pre-entreno, recuperación activa | "Antes de empezar", "el día suave" |

- **Test (antes de producir):** se lee el texto a 5 personas del público. Si alguna pregunta qué significa una palabra, la palabra sale.

### LH-05 · Explicá el porqué, en llano
- **Enunciado:** cuando se propone algo, se dice por qué, con lo que se observó: "porque el día malo es donde se cortan los planes". Nada de autoridad sin razón.
- **Ámbito:** ambos.
- **Confianza:** Media. **Hipótesis: testear.**
- **Fuentes:** T79 y T80 ("Ahí demuestras que has escuchado y justificas tu criterio"), B25 (mostrar el proceso).
- **Aplicación a RC28:**
  - Sin porqué: "El reto tiene un plan B".
  - Con porqué: "El reto tiene un plan B de 8 minutos porque lo que corta un reto no es un día malo, son dos seguidos".

### LH-06 · Separá lo que sabés de lo que no (y lo que no prometés)
- **Enunciado:** decir con claridad qué incluye y qué no, y qué se puede medir y qué no, genera confianza. "No prometemos kilos; te medís en centímetros, en la ropa y en fuerza" es más creíble que una promesa grande.
- **Ámbito:** ambos.
- **Confianza:** Media. **Hipótesis: testear.**
- **Fuentes:** T81 ("La persona distingue lo que sabes de lo que todavía no sabes y confía"), `01-promesa.md` ("Lo que NO se promete").
- **Aplicación a RC28:** "Te lo decimos de frente: si buscás un milagro en una semana, esto no es para vos" (M9 de `ganchos.md`).
- **Test:** anuncio con la frase de "lo que no prometemos" contra el mismo anuncio sin ella. Métrica: CPA y, de control, la tasa de reembolso.

### LH-07 · Una idea, un camino
- **Enunciado:** todas las frases empujan hacia la misma idea. Las demás se dejan para otro anuncio.
- **Ámbito:** ambos.
- **Confianza:** Alta.
- **Fuentes:** T64, T65 ("Ahora tienes cinco problemas encima de la mesa"), T67, T69, T70 ("si tú no sabes qué es lo importante, imagínate el otro"), T86 (ejercicio: "escribe qué quieres que entienda, busca un ejemplo concreto" y preparalo antes de hablar), L165. Ver GU-01.
- **Aplicación a RC28:** antes del guion se escribe una línea: "Cuando termine, ella entiende que [X]". Si en el borrador aparecen recetas, garantía y plan B juntos, se elige uno y los otros van a otro anuncio.

### LH-08 · El cuerpo va en tercera persona; la conducta puede ir en segunda
- **Enunciado:** cuerpo, peso, edad y salud se escriben en tercera persona y en tono educativo ("el cuerpo después de los 40…"). Conducta, tiempo y plan pueden ir en segunda persona ("¿cuántos lunes empezaste?").
- **Ámbito:** pago (obligatorio). En orgánico, por marca.
- **Confianza:** Alta (regla).
- **Fuentes:** `meta-ads-politicas.md` (lenguaje seguro y de riesgo), `01-principios.md` §2. Ver HK-05.

### LH-09 · Sin preámbulos, sin saludos, sin disculpas
- **Enunciado:** la primera frase ya dice algo. "Perdón, igual es una tontería, pero…", "Hola, chicas" y "Hoy te quiero contar" no se usan.
- **Ámbito:** ambos.
- **Confianza:** Alta.
- **Fuentes:** T60 ("Llevas 10 segundos hablando y todavía no sé qué me vas a proponer"), T61, S65, L §6 (Borba arranca en seco). Ver HK-06.

### LH-10 · Vender la vivencia, no los apuntes
- **Enunciado:** el copy de venta describe dónde va a estar ella (qué hace cada día, cómo se siente con su rutina, qué deja de preocuparle), no el inventario. Las palabras de inventario ("módulos", "lecciones", "128 páginas", "contenido de valor") van como detalle, nunca como argumento.
- **Ámbito:** ambos; sobre todo pago y página.
- **Confianza:** Media. **Hipótesis: testear.**
- **Fuentes:** B136 ("nadie en la historia de la humanidad se ha emocionado comprando apuntes"), B137, B141 (sin "sesiones", "horas", "curso" ni "módulos"), `docs/aprendizajes.md` del 2026-10-06 ("La página vende el sistema, no la cantidad de contenido").
- **Bandera:** la versión de las fuentes con resultado garantizado ("Tu hijo va a hablar correctamente en tres meses", B138) está prohibida en salud. La vivencia de RC28 es de proceso: "saber qué hacer cada día", "terminar algo", "sentirse cómoda con su ropa". Nunca "el cuerpo que querés".
- **Aplicación a RC28:**
  - Apuntes: "36 jornadas, 22 ejercicios, guía de 128 páginas".
  - Vivencia: "Cada mañana abrís la app y ya sabés qué te toca. Si un día no da, hay un plan B de 8 minutos".
- **Test:** titular de vivencia contra titular de inventario, en la página o en el texto principal. Métrica: CTR de enlace (anuncio) o porcentaje que llega al precio (página).

### LH-11 · Que no suene a IA
- **Enunciado:** el texto generado tiende al promedio. Usa palabras comodín, tríadas, conectores de ensayo y promesas abstractas que delatan que lo escribió una máquina y bajan la confianza. Todo texto pasa por la lista anti-IA (sección 4).
- **Ámbito:** ambos.
- **Confianza:** Media para "la IA tiende al promedio y rellena". Baja para la lista concreta, que es conocimiento general del español. **Hipótesis: testear.**
- **Fuentes:** B32 ("La inteligencia artificial únicamente es el reflejo de lo que la gente normalmente piensa"), B90 y T15 (la creencia popular), B45 ("no quiero que una herramienta de IA… me meta 10 conceptos distintos"), LB23 ("Tradução cachorra do ChatGPT"; dato solo del Doc B, no verificable).
- **Test:** el mismo video con el texto principal "pulido" por IA contra el texto pasado por la lista anti-IA. Métrica: CTR de enlace.

### LH-12 · Escribir para el oído
- **Enunciado:**
  - frases cortas, una idea por frase;
  - el dato importante se marca con una pausa;
  - después de una pregunta queda un silencio breve;
  - tono firme y tranquilo, sin voz de locutor.
- **Ámbito:** ambos.
- **Confianza:** Media. **Hipótesis: testear.**
- **Fuentes:**
  - T57 ("te he soltado toda la información de golpe, muy rápido y sin vocalizar");
  - T58 ("no he puesto una voz de locutor de radio");
  - T59 ("Si haces una pregunta, deja espacio para que te respondan");
  - T62 (firmeza no es agresividad);
  - T63 (ensayo con nota de voz);
  - B127 ("lo que se ve habla primero…").
- **Aplicación a RC28:** guía práctica en la sección 5.
- **Test:** la misma frase con pausas marcadas contra un texto corrido, en ElevenLabs. Métrica: hold rate.

### LH-13 · Ritmo de la mezcla: voz algo más rápida, música baja, cero silencios
- **Enunciado:** el ritmo se ajusta en la voz (parámetro de velocidad de ElevenLabs, ~1,1–1,2×), no acelerando el video, que agudiza la voz. La música va al 3–5% debajo de la voz. No hay silencios muertos.
- **Ámbito:** ambos.
- **Confianza:** Media para "cero silencios" (J42, consistente con la retención). Baja para 1,2× y música al 3–5%: una sola fuente (Ferreira), con dashboard de 2 días. **Hipótesis: testear.**
- **Fuentes:** L168 ("1.2x de velocidade e abaixo a música de fundo para 3% ou 5%"), T28–T29 (acelerar el video agudiza la voz), J42 ("Zero dead air / Cero silencios").
- **Test:** voz a 1,0× contra 1,15×, con el mismo guion y la misma imagen. Métrica: hold rate.

### LH-14 · Voz IA natural, con el acento del mercado
- **Enunciado:** la voz tiene que "parecer humana de verdad": cercana, segura y nada de infomercial. El acento va con el mercado del conjunto (LH-17).
- **Ámbito:** ambos.
- **Confianza:** Media. Dos creadores independientes usan voces IA naturales en creativos que venden; no hay test aislado de la voz.
- **Fuentes:** L167 (Ferreira: ElevenLabs, voz "Keren", "parece humana de verdade"), L156 (André: MiniMax, "EngagingGirl"), L41 (Borba: locutora), `06-videos.md` ("Voz en español con acento rioplatense, tono cercano y seguro"), `13-guiones-video-ia.md` ("acento argentino… con muletillas suaves").
- **Aplicación a RC28:** se generan 3 tomas por guion y se elige la que menos suena a locutora. Una muletilla suave por pieza como máximo ("mirá", "eh").

### LH-15 · Texto en pantalla
- **Enunciado:** un text hook fijo arriba durante 3 s o más. Subtítulos grandes y legibles, en 1–2 líneas. Números, nombres y precios superpuestos en edición, nunca generados dentro de la imagen. Etiqueta de personaje ilustrativo.
- **Ámbito:** ambos.
- **Confianza:** Alta para los subtítulos legibles (L41, J42, `06-videos.md` y evidencia externa de consumo sin sonido). Media para el text hook (T25–T27). **Hipótesis: testear** (contenido del text hook, ver HK-12).
- **Fuentes:** T25–T27, L41 (subtítulos automáticos morado y amarillo), J42 ("subtítulos legibles"), `06-videos.md` (la IA escribe mal los números chicos), `docs/aprendizajes.md` del 2026-10-08 (sin precio dentro de la imagen).
- **Especificación:** sección 6.

### LH-16 · Test doble: se entiende solo con audio y solo con imagen y subtítulos
- **Enunciado:** antes de publicar, la pieza se entiende (a) sin sonido, solo con la imagen y los subtítulos, y (b) solo con el audio, sin imagen.
- **Ámbito:** ambos.
- **Confianza:** Media. **Hipótesis: testear.**
- **Fuentes:** J44 ("si tú eres capaz de que alguien entienda un vídeo sin verlo, solo escuchándolo… es mucho mejor"), evidencia externa (Meta recomienda subtítulos y mensaje visual), `02-promesa.md` (prueba de los 5 segundos).
- **Procedimiento:** sección 6.

### LH-17 · Voseo o "tú" según el conjunto y el país
- **Enunciado:** el conjunto rioplatense (UY, AR, PY) va en voseo con voz rioplatense. El conjunto LATAM amplio se escribe en "tú" neutro y, si se puede, con una voz de acento neutro. Nunca se mezclan registros dentro de una pieza.
- **Ámbito:** pago (también orgánico, si la cuenta apunta a LATAM amplio).
- **Confianza:** Baja (conocimiento general; en el corpus solo está la sugerencia de LB23 y la regla del repo). **Hipótesis: testear.**
- **Fuentes:**
  - `playbook/08-meta-ads.md` ("Si el producto habla con voseo, en México y Colombia probar el mismo creativo con el texto principal en 'tú' y comparar el CPA");
  - `00-brief.md` (núcleo rioplatense y LATAM amplio);
  - transferencia de LB23 ("sin calcos… ni voseo si el público no es rioplatense");
  - `06-videos.md` (hoy la voz es rioplatense en todo).
- **Conflicto resuelto:** el repo produce todo en rioplatense, pero la mayor parte del presupuesto (conjuntos A y B) va a LATAM amplio. Hasta tener datos: el voseo es lo de base en el conjunto C y la versión en "tú" es la variante a testear en A y B.
- **Coherencia con la página:** hoy la página está en voseo. Un anuncio en "tú" que lleva a una página en voseo no rompe la regla de coherencia (la regla es sobre promesa, precio y nombres), pero si el test gana, conviene una versión de la página en "tú".
- **Test:** en el conjunto LATAM amplio, el mismo creativo en voseo con voz rioplatense contra "tú" con voz neutra. Una variable: la localización. Métrica principal: CPA.

### LH-18 · Léxico regional de comida y vida diaria
- **Enunciado:** las palabras de comida y de casa cambian por país (palta o aguacate, living o sala). En los anuncios de LATAM amplio se prefiere la palabra más extendida o la de un plato común a varios países.
- **Ámbito:** ambos.
- **Confianza:** Baja (conocimiento general del español; verificar con personas de cada país). **Hipótesis: testear** con LH-17.
- **Tabla:** sección 7.

### LH-19 · Todo texto generado o traducido pasa por revisión humana
- **Enunciado:** ningún guion, texto principal o subtítulo hecho con IA, ni ninguna traducción, se publica sin revisión humana de naturalidad, registro y política.
- **Ámbito:** ambos.
- **Confianza:** Media.
- **Fuentes:** B30 ("tu experiencia es lo que te permite decidir si el material que te da la inteligencia artificial tiene sentido"), B44 (la IA ordena; elige y valida el humano), LB23 (riesgo de la "tradução cachorra"; dato del Doc B, no verificable).
- **Aplicación a RC28:** en el sistema de agentes, el agente de copy entrega una propuesta y otro agente la revisa con la rúbrica de `ganchos.md`, la lista anti-IA y la checklist de políticas. El OK final para publicar lo da Santiago.

### LH-20 · Tono firme y cercano, sin reproche ni insultos
- **Enunciado:** se dice lo incómodo sin culpar ni avergonzar. Nada de insultos ni reproches al espectador.
- **Ámbito:** ambos.
- **Confianza:** Media.
- **Fuentes:** T62 ("como si le estuvieras dando una orden a un soldado" es el contraejemplo; se puede reclamar sin subir la voz), B §8 ("el tono con insultos y reproches… para mujeres en LATAM… aleja"), `01-principios.md` §2.
- **Aplicación a RC28:**
  - No: "Dejá de poner excusas".
  - Sí: "No es falta de ganas. Es que el plan pedía demasiado".

### LH-21 · Números y precios escritos para la voz
- **Enunciado:** en el guion de voz, los números se escriben como se dicen y los precios en palabras. Un sintetizador puede leer "15,90" como "quince coma noventa" y "US$" de forma rara. En pantalla, los números van en cifras.
- **Ámbito:** ambos.
- **Confianza:** Baja (práctica de producción; no está en el corpus). **Hipótesis: testear** con una toma de prueba.
- **Aplicación a RC28:**
  - Voz: "quince dólares con noventa, pago único".
  - Pantalla: "US$ 15,90".
  - Las dos cosas tienen que coincidir con el checkout vigente.

### LH-22 · Una pregunta a la vez, con espacio
- **Enunciado:** después de una pregunta va un silencio corto (0,3–0,6 s en un anuncio) y no se encadenan tres preguntas seguidas.
- **Ámbito:** ambos.
- **Confianza:** Media. **Hipótesis: testear** (se mide con LH-12).
- **Fuentes:** T59, J §2.8 (las preguntas retóricas que funcionan son de a una), B §2.8 (Heras usa preguntas sueltas, separadas por bloques).
- **Aplicación a RC28:**
  - Mal: "¿Cansada? ¿Sin tiempo? ¿Sin ganas?"
  - Bien: "¿Qué hacés el día que no tenés ni 20 minutos?", pausa y la respuesta.

### LH-23 · Cada regla de estilo se baja a un ejemplo malo → bueno
- **Enunciado:** decir "escribí más claro" o "más humano" no cambia nada. Cada indicación (a una persona, a un agente o en un prompt) va con un par textual mala → buena del propio producto.
- **Ámbito:** ambos, y el sistema de agentes.
- **Confianza:** Media (Heras lo hace en todo el V3, con 16 pares; sin test aislado). **Hipótesis: testear.**
- **Fuentes:** T49 ("decirte «comunica mejor» y quedarme tan tranquilo no sirve de nada"), T §2.2 (los pares de la sección 2.1), T86.
- **Por qué funciona:** el ejemplo muestra el cambio exacto; el adjetivo lo deja librado a la interpretación de cada uno (y una IA lo interpreta con el promedio).
- **Aplicación a RC28:** el prompt del agente de copy no dice "evitá sonar a IA": pega 3 pares de la sección 3 y la lista de la sección 4. Cuando el revisor rechaza un texto, devuelve la frase mala y una versión buena, no un adjetivo.
- **Test:** dos lotes de 10 textos del agente de copy, uno con prompt de reglas abstractas y otro con pares. Métrica principal: ítems de la lista anti-IA por texto. Secundaria: puntaje promedio en la rúbrica de `ganchos.md`.

---

## 2. Pares de las fuentes: mala → buena (textuales)

### 2.1 "Aprende a comunicar" (Víctor Heras, V3; T §2.2)

| Situación | Versión mala (textual) | Versión buena (textual) | Por qué funciona (según el video) |
|---|---|---|---|
| Casa | «A ver si nos organizamos mejor» | «Hoy llego a las nueve. ¿Puedes encargarte de la cena para que cuando llegue podamos comer juntos?» | Ya se sabe qué pasa, qué te piden y para qué |
| Escapada con amigos | Hablar de la piscina, las vistas, el desayuno | «He encontrado un sitio al que podemos llegar el sábado por la mañana. La habitación cuesta 90 € por persona entre las dos noches. ¿Os encajan esas fechas y ese presupuesto? Si os encaja, os enseño el hotel» | Primero lo que necesitan para decidir; "después ya vendrán las fotos de la piscina" |
| Reformas, baño | Enumerar materiales, herramientas y tipos de instalación | «¿Es el único baño que tienes en casa? ¿Necesitas que acordemos primero cómo te vas a organizar esos días?» | Responde su única pregunta: «¿Voy a poder seguir viviendo en mi casa mientras hacéis la obra?» |
| Plazo con el equipo | «He dicho que esto esté terminado para el viernes porque el sábado viene el cliente y si no está terminado no vamos a poder entregárselo» (rápido, monótono) | «Necesito que esto esté terminado para el viernes. El cliente viene a recogerlo el sábado. ¿Hay algo que tengamos que resolver para llegar a tiempo?» (pausado, firme, con silencios) | Qué necesito, por qué importa y qué me podés decir si hay un problema |
| Propuesta al jefe | «Bueno, perdona, igual esto es una tontería, pero te quería decir bla, bla, bla…» | «Tengo una propuesta para que no tengamos que quedarnos después de cerrar. Te la cuento y me dices cómo la ves» | Invita a conversar y despeja lo que tapaba la propuesta |
| Reclamo por espera | (gritar o dar órdenes "a un soldado") | «Oye, habíamos quedado a las seis. Llevo media hora aquí esperando y la verdad que me ha fastidiado un poco tener que cambiar mis planes» | Tiene peso sin gritar |
| Tienda de pedidos | «Esto es un desastre, cada uno hace lo que quiere, el otro día también pasó lo de las bolsas y además nunca encontramos el teléfono» | «Equipo, ayer tardamos 10 minutos en encontrar un pedido que ya estaba preparado. Propongo que todos los encargos listos vayan a esta estantería, con el nombre y con la etiqueta del cliente. Así, cualquier persona puede encontrarlos. Vamos a probar este sistema esta semana y el viernes vemos si nos ha servido» | Qué pasa → qué propone → por qué → qué hacen desde ahora. Un solo problema |
| Amigo impuntual | Repasar "cada cosa que te ha molestado desde que os conocéis" | «Mira, Carlos, las últimas veces he estado esperándote bastante. Si ves que no vas a llegar, avísame antes de que salga de casa, así puedo organizarme para hacer otra cosa. ¿Te parece que lo hagamos así?» | Un hecho concreto y un pedido concreto |
| Reparto en casa | «Tenemos que colaborar más» / «Hay que mejorar el servicio» / «Necesito que lo hagas bien» | «Esta semana yo me encargo de cocinar. ¿Puedes hacer tú la compra el martes y recoger la cocina después de cenar?» | Es algo que se puede ver, y aparece el desacuerdo real |
| Panadería, tarta | «Damos un servicio personalizado y cuidamos cada detalle» | «Dime para cuántas personas es, qué sabores os gustan y a qué hora te hace falta recogerla. Antes de prepararla acordamos el tamaño, la decoración y el precio» | El cliente se imagina el proceso |
| Limpieza | «Dejamos tu oficina impecable» | Mostrar qué zonas incluye, con qué frecuencia van y cómo se comunica una incidencia | Concreto, sin "un contrato de 20 páginas" |
| Plazos | «Te lo mando pronto» / «enseguida» / «pronto te lo enviamos» | Dar la hora; si no se sabe, decir cuándo se va a poder confirmar | "Para ti pronto es el viernes, para mí es dentro de una hora" |
| Peluquería | Soltar tecnicismos | Preguntar cuánto tiempo dedica a peinarse a la mañana + «En esta foto está peinado de una forma concreta que requiere secador y cera todos los días. Te enseño una opción parecida adaptada a tu rutina que no te lleve más de dos minutos» | Demuestra que escuchaste y justifica tu criterio |
| Almacén | «No te preocupes, lo estamos gestionando» | «El pedido está pendiente de una pieza del proveedor que llega a las cuatro. A las cinco te llamo con la confirmación de entrega» | Distingue lo que sabés de lo que no |
| Carpintería | Presupuestar "maderas enormes" | Preguntar para qué la necesita (2 personas en casa, 8 familiares los domingos) → mesa extensible | La necesidad detrás del pedido |
| Día horrible | «Habla con tu jefe, cambia de puesto» | «¿Quieres que pensemos qué hacer o simplemente necesitas contármelo?» | A lo mejor solo necesita desahogarse |

Frases vagas que el video propone para el ejercicio, sin versión buena: «Soy muy organizado», «atendemos muy bien», «quiero que estés más pendiente» (T §2.2).

### 2.2 Ganchos, ideas y ofertas (Heras)

| Mala (textual) | Buena (textual) | Fuente |
|---|---|---|
| "En el vídeo de hoy os voy a explicar cuál es la mejor forma de comprar una casa para comenzar en bienes raíces" | "Esta casa que compré con el dinero del banco me está pagando más de 4.000 dólares al mes y no estoy haciendo nada" | S66 |
| Video "contando que acaba de abrir su cuenta y que va a compartir sus consejos muy interesantes y de «mucho valor»" | "explicar una situación concreta que esta persona ha vivido y enseñarle algo que le sirva para resolverla" | B §2.3 |
| "explicar por qué es importante el entrenamiento con pesas para ponerte en forma" | "comparar con dos clientes que tú has tenido cuál es la dieta que utilizaste para cada uno de ellos y por qué" | B §2.3 |
| "Porque aporta valor" (respuesta al test) | "Le voy a enseñar por qué lleva tres semanas publicando y todavía nadie entiende qué vende" | B46 |
| "La importancia de tener una buena estrategia" | (idea concreta, situación de una persona) | B37 |
| "Hola, vendo 10 sesiones de una hora" / "su programa de ocho módulos con 47 lecciones" | "Tu hijo va a hablar correctamente en tres meses" (bandera: resultado garantizado en salud; en RC28 no se usa) | B §2.4 |
| "cuál es la técnica de peinado, la técnica de corte mejor para que tu pelo se vea bonito" | «¿Cuál es el mejor peinado para mí?» (la PCN del lego) | T §2.1 |
| "Aprender IA", "Transferir certeza", "Creencias limitantes en ventas", "los 10 problemas comunes de los vendedores" (70k–90k vistas) | "¿Cuánto cuesta tu outfit?" (3,3–3,4M y 5M) | S §2.4 |
| Velas: tipos de cera, mechas, aromas | "cómo relajarse, cómo crear un ambiente romántico para tu pareja, cómo sacarte la ansiedad al llegar a casa" (solo en la sección 6; menos fiable) | S §2.8 |
| "Si estás cansado de que tus vídeos de YouTube se vean aburridos, tienes que probar esta nueva forma…" (lineal, orgánico) | "Cómo pintar una cara en menos de un minuto…" (embudo) | H §2.3 |
| Selfie técnico explicando qué es el *deed* (1.727 visitas, 0 ventas) | POV: "¿Qué es mejor, comprar una casa o rentarla? Ninguna de las dos, construirla…" (5,1M) | A §2.3 |

### 2.3 Brasileños y reglas del repo

| Mala | Buena | Fuente |
|---|---|---|
| Página que "acaba deixando muito escondido qual que é realmente o produto" | "Headline direta": el nombre literal del producto con número ("+500 Dinâmicas prontas para Catequese") | L14, L15 |
| Creativo y página que "não batem" | "deixo bem explícito exatamente o que a pessoa vai receber" | L18, L19 |
| "não é ficar rodando emagrecimento ali perca 10 kg em 2 dias" | "rodar um produto white com entregável bem top" | L43 |
| "Tradução cachorra do ChatGPT" | Revisión humana de naturalidad regional | LB23 (solo Doc B) |
| "Bajá 5 kilos en 28 días" | "Medí tu avance en centímetros" | `meta-ads-politicas.md` |
| "¿Tenés panza?" | "No toda la panza es grasa: parte puede ser hinchazón" (tercera persona, educativo) | `meta-ads-politicas.md` |
| "Eliminá la grasa abdominal" | "Fuerza, pasos, un buen plato y dormir mejor" | `meta-ads-politicas.md` |
| "Tu ex va a volver" | Fuera del método | `meta-ads-politicas.md` |
| "Después de los 40 tu cuerpo…" (a quien mira) | "Después de los 40 el cuerpo cambia…" (tercera persona) | `meta-ads-politicas.md` |
| Antes/después de clientas | Mostrar el producto por dentro (capturas reales), demostraciones y testimonios reales con permiso cuando existan | `01-principios.md` §6 |
| Apelar al ex o a la inseguridad | Apelar al tiempo, al cansancio de los planes imposibles, a sentirse cómoda con su ropa | `01-principios.md` §6 |
| Escasez falsa | Precio de lanzamiento con fecha real que se cumple | `01-principios.md` §6 |
| Un extra llamado "Acelerador" | Un nombre que no prometa más que su contenido (por ejemplo, "Menú de 7 días con lista de compras") | `docs/aprendizajes.md`, 2026-10-08 |
| "128 páginas" como argumento | La transformación y lo fácil que es empezar; la cantidad, como detalle | `docs/aprendizajes.md`, 2026-10-06 |

---

## 3. Pares para RC28 (Adaptación)

| Mala | Buena | Regla |
|---|---|---|
| "Transformá tu cuerpo en 28 días" | "28 días de entrenos de 25 minutos, en tu casa, con un plan que te dice qué hacer cada día" | LH-02, política |
| "Plan fácil y efectivo" | "Abrís la app, tocás Empezar y el timer te dice cuándo parar" | LH-02 |
| "Resultados rápidos" | "Te medís el Día 0, el 14 y el 29: centímetros, ropa y fuerza" | LH-03 (sin prometer cuánto) |
| "Comé sano" | "Mitad del plato verduras, un cuarto proteína, un cuarto papas o arroz" | LH-02 |
| "Recetas deliciosas y saludables" | "Milanesa, fideos, tarta: tus platos de siempre, armados de otra forma" | LH-02, LH-11 |
| "Sin dietas restrictivas" | "Sin prohibidos y sin contar calorías" | LH-04 |
| "Activá tu metabolismo" | (no se usa) | LH-04, política |
| "HIIT de 20 minutos" | "40 segundos de ejercicio, 20 de descanso, 20 minutos en total" | LH-04 |
| "Constancia es la clave" | "Si un día no da, hacés el plan B de 8 minutos y marcás el día" | LH-02 |
| "Plan personalizado" (si no lo es) | "El quiz elige con qué nivel arrancás" (solo si el resultado depende de las respuestas) | LH-06, `01-principios.md` |
| "Acceso inmediato" | "El acceso llega a tu correo apenas se aprueba el pago" (verificar tiempos) | LH-03 |
| "Acompañamiento personalizado" | "Durante 7 semanas, Santiago responde tus dudas por WhatsApp" (solo si se cumple tal cual, según `03-producto.md`) | LH-02, LH-06 |
| "Resultados garantizados" | "Garantía de 7 días por Hotmart: si no te sirve, pedís la devolución" | Política, LH-06 |
| "Únete a miles de mujeres que ya…" | (no se usa sin un dato real) / "Empezás hoy" | `01-principios.md` §1 |
| "¡Última oportunidad!" | "Precio de lanzamiento hasta el [fecha real del cupón]" | `01-principios.md` §1 |
| "¿Tenés panza?" | "No toda la panza es grasa: parte puede ser hinchazón" | LH-08 |
| "Para que te veas increíble este verano" | "Para terminar un reto antes de [fecha real]" | Política (imagen corporal), LH-08 |
| "No tenés excusas" | "No es falta de ganas: el plan pedía demasiado" | LH-20 |
| "Descubrí el secreto para una cintura de sueño" | "Mil abdominales no achican la cintura. Lo que sí ayuda: fuerza, caminar, un buen plato y dormir" | LH-11, HK-17, política |
| "Un programa integral de bienestar holístico" | "Entreno, comida y un plan para los días malos, todo en una app" | LH-11 |
| "Te acompañamos en tu viaje" | "Cada día la app te dice qué toca" | LH-11 |
| "Rutinas diseñadas por expertos" | (no se usa si no hay un experto real con nombre) / "Ejercicios con video y timer" | Honestidad |
| "Más de 70 recetas" / "32 recetas" | El número vigente en la página, igual en el anuncio | Coherencia (confirmar el número: `03-producto.md` dice 32) |
| "Tu mejor versión te espera" | "Mañana es tu Día 1" | LH-11 |
| "Hola chicas, hoy les quiero presentar…" | "¿Cuántos lunes empezaste este año?" | LH-09 |

---

## 4. Lista anti-IA (español)

Base: B32, B45, B90 y LB23. La lista concreta es conocimiento general del idioma (confianza Baja, LH-11). Uso: si un texto tiene 2 o más ítems de esta lista, se reescribe.

### 4.1 Palabras comodín
Descubrí, desbloqueá, potenciá, elevá, transformá, sumergite, viaje ("tu viaje de bienestar"), experiencia ("una experiencia única"), increíble, mágico, revolucionario, único, integral, holístico, bienestar (como relleno), equilibrio, armonía, empoderar, esencial, clave, crucial, fundamental, sin lugar a dudas, realmente, totalmente, simplemente, "de manera efectiva", "tu mejor versión", "el siguiente nivel".

### 4.2 Aperturas que delatan
"En el mundo actual…", "En la era de…", "¿Alguna vez te preguntaste…?", "Imaginá…", "¿Sabías que…?", "Hola, chicas", "Hoy te traigo…", "¿Lista para…?", "Si buscás…, llegaste al lugar indicado".

### 4.3 Cierres que delatan
"¡No esperes más!", "¡Tu mejor versión te espera!", "El cambio empieza hoy", "¡Empecemos!", "¿Qué esperás?", "Dale una oportunidad", "Porque te lo merecés".

### 4.4 Estructuras
- "No es solo X, es Y" o "No es X, es Y": como máximo una vez por pieza. Muchos ganchos buenos usan esta forma, y repetida delata.
- Tríadas en cada frase ("rápido, fácil y efectivo").
- Antítesis en cadena.
- Tres preguntas retóricas seguidas.
- Todas las frases del mismo largo.
- Conectores de ensayo: "Además", "Asimismo", "Por otro lado", "En resumen", "Cabe destacar", "Es importante mencionar".
- Voz pasiva ("fue diseñado para…").
- Sustantivos abstractos sin ninguna cosa concreta (no aparece una milanesa, un lunes, un timer, una silla).
- Raya (—) como pausa en guiones de voz.
- Exclamaciones dobles.
- Emojis en serie.
- Mayúsculas Al Inicio De Cada Palabra (calco del inglés).

### 4.5 Calcos y formalismos
Realizar (→ hacer), brindar (→ dar), contamos con (→ tenemos), en base a (→ según), a nivel de, hacer sentido (→ tener sentido), tomar acción (→ empezar), consistencia (→ constancia), "estar siendo", "es por eso que" (→ por eso), "asegurate de", "disfrutá de", "rutina efectiva".

### 4.6 Mezclas de registro
"Tú" y "vos" en la misma pieza; un "usted" que aparece de golpe; "vosotros"; un acento rioplatense con léxico de México.

### 4.7 Promesas genéricas de marketing
"Resultados increíbles", "diseñado por expertos", "científicamente probado", "plan personalizado" (si no lo es), "solución integral", "miles de mujeres ya…", "transformación total".

### 4.8 Tres tests rápidos
1. **Test de WhatsApp:** ¿se lo mandarías así a una amiga? Si no, se reescribe.
2. **Test de lo concreto:** cada frase tiene algo que se puede ver o tocar (un plato, un día, un timer, una silla).
3. **Test en voz alta:** leído en voz alta, ¿suena a folleto o a locutora de infomercial? Se reescribe.

---

## 5. Guía para escribir para la voz (ElevenLabs)

Base: LH-12, LH-13, LH-14, LH-21 y LH-22. Las indicaciones técnicas del sintetizador son prácticas de producción (confianza Baja): se verifican con una toma de prueba.

1. **Frases de 15 palabras o menos.** Una idea por frase. El punto marca la pausa: "Veinticinco minutos. En tu casa. Con un plan B."
2. **Lo importante al final de la frase**, que es donde cae el énfasis natural: "Para el día que no das más, hay un plan de ocho minutos".
3. **Signo de apertura en las preguntas** (¿), para que la entonación suba bien. Después de una pregunta, una pausa corta (punto y frase nueva).
4. **Números en palabras** en el guion de voz ("veinte minutos", "quince dólares con noventa") y en cifras en pantalla.
5. **Pausas:** el punto alcanza. Si el modelo de ElevenLabs que se use admite etiquetas de pausa, se usan con moderación (como máximo 2 por pieza). Verificar la sintaxis según el modelo.
6. **Sin mayúsculas sostenidas ni signos raros** en el texto de voz. Algunas voces las leen con énfasis exagerado. Las mayúsculas van solo en pantalla ("MITO").
7. **Tono:** firme y tranquilo, sin voz de locutora (T58). Se generan 3 tomas y se elige la más conversada. Una muletilla suave como máximo ("mirá", "eh").
8. **Velocidad:** se ajusta en la voz (~1,1–1,15× si la pieza se pasa de tiempo), no acelerando el video (LH-13). Música al 3–5% debajo de la voz.
9. **Cero silencios muertos** entre frases (J42), salvo la pausa intencional después de una pregunta.
10. **Ensayo:** se escucha como si fuera una nota de voz de una amiga (T63). Si suena a anuncio de radio, se reescribe el texto; no se toca la voz.

### Ejemplo antes y después (Adaptación)

- **Antes (folleto o IA):** "Descubrí el Reto Cintura 28, un programa integral diseñado para transformar tu bienestar en solo 28 días. ¡Con rutinas efectivas, recetas deliciosas y un enfoque holístico, alcanzarás tu mejor versión! ¿Qué esperás para empezar?"
- **Después (voz humana):** "¿Cuántos lunes empezaste este año? El problema no eran las ganas. Era el plan. Este son veinticinco minutos en casa. Comida normal. Y un plan B de ocho minutos para los días que no dan. Tocá Más información y mirá el Día 1."
- **Qué cambió:**
  - pregunta de dolor de conducta (HK-04);
  - reencuadre (M13);
  - números concretos;
  - cero palabras comodín;
  - frases de menos de 12 palabras;
  - CTA igual al botón.

---

## 6. Texto en pantalla y test doble

### 6.1 Especificación del texto en pantalla
- **Text hook:** aparece en los primeros 2 s y queda 3 s o más (HK-12). Tiene 7 palabras o menos y va arriba, debajo de la franja superior de la interfaz, sin tapar la cara.
- **Zonas seguras de Reels:** dejar libre de texto, aproximadamente, el ~14% superior, el ~35% inferior (donde va el texto del anuncio y el CTA) y los bordes laterales donde están los íconos. Verificar en la guía vigente de Meta.
- **Subtítulos:**
  - grandes, de alto contraste, en 1–2 líneas y con unas 5 palabras por línea;
  - una palabra clave resaltada con el **único color de acento de la marca** (`01-principios.md` §5). El multicolor de Borba (morado y amarillo, L41) no se copia;
  - sincronizados con la voz y sin errores de ortografía (se revisan uno por uno).
- **Números, nombres y precios:** se superponen en Remotion y nunca se generan dentro de la imagen de IA (`06-videos.md`). El precio no va quemado en el video (aprendizajes del 2026-10-08); si va, es una capa de texto actualizable.
- **Etiqueta:** "Personaje ilustrativo generado con IA", chica, en el último frame o según lo que exija la etiqueta de IA de Meta.
- **Coherencia:** el text hook dice la misma idea que la voz, en versión corta. Los nombres y números en pantalla son idénticos a los de la página.

### 6.2 Test doble (procedimiento)
1. **Sin audio:** se exporta la pieza muda y se le muestra a 3 personas del público. Preguntas: "¿qué vende?", "¿para quién es?", "¿qué tenés que hacer al final?".
2. **Solo audio:** se exporta el audio con la pantalla en negro y se hacen las mismas 3 preguntas a otras 3 personas.
3. **Prueba de los 5 segundos** (`02-promesa.md`): la promesa en texto, leída 5 s. ¿Pueden explicar qué es y para quién?
4. **Pasa** si al menos 2 de 3 contestan bien en cada prueba. Si falla la versión muda, se reescriben el text hook y los subtítulos. Si falla la de audio, se reescribe la voz (no se agregan efectos).

---

## 7. Voseo, "tú" y léxico por país

Confianza Baja (conocimiento general; verificar con personas de cada país y con el test de LH-17).

### 7.1 Registro recomendado por país

| País o mercado | Registro en el anuncio | Nota |
|---|---|---|
| Uruguay, Argentina, Paraguay (conjunto C) | Voseo (tocá, mirá, tenés) y voz rioplatense | Es lo que está en el repo |
| México | "Tú" | Hay muchos compradores en LATAM según L120; testear con la voz neutra |
| Colombia | "Tú" | El "usted" es común en el trato. Se podría testear después, nunca mezclado |
| Chile | "Tú" | El voseo verbal chileno es coloquial y no va en anuncios |
| Perú, Ecuador, Panamá, Rep. Dominicana, Puerto Rico | "Tú" | Neutro |
| Costa Rica, Guatemala | "Tú" neutro como base | Hay voseo o "usted" local; testear solo con volumen |
| España y EE. UU. hispano | "Tú" | En España: "móvil" en vez de "celular". Segmentar el mundo hispanohablante es una idea de L117, para testear aparte |

### 7.2 Conversión de voseo a "tú" (verbos frecuentes en RC28)
- **Imperativos:** tocá → toca · mirá → mira · empezá → empieza · probá → prueba · armá → arma · medí → mide · elegí → elige · comé → come · seguí → sigue.
- **Presente:** tenés → tienes · querés → quieres · podés → puedes · hacés → haces · sabés → sabes · sos → eres · arrancás → empiezas · das → das.
- **Pronombres:** "vos" → "tú"; "con vos" → "contigo"; "para vos" → "para ti".

### 7.3 Léxico de comida y casa (preferir la columna neutra en LATAM amplio)

| Rioplatense | Neutra o más extendida | Nota |
|---|---|---|
| living | sala | |
| heladera | refrigerador | "Nevera" en Colombia y Venezuela |
| placard | clóset | "Armario" en España |
| palta | aguacate | |
| frutilla | fresa | |
| zapallo | calabaza | |
| choclo | elote (México) / mazorca (Colombia) | Si es posible, evitar la palabra |
| arvejas | chícharos (México) / arvejas (Colombia) | Si es posible, evitar la palabra |
| manteca | mantequilla | |
| bife | bistec | |
| remera | camiseta / playera (México) | |
| pollera | falda | |
| plata | dinero | |
| chau | adiós | |
| chicos | niños / hijos | |
| milanesa | milanesa | Común en México y el Río de la Plata; en Colombia y Perú, testear con un plato local (guion 3 de `guiones.md`) |

**Regla:** las recetas y los platos que se nombran en un anuncio tienen que existir en la app con ese nombre o con uno equivalente que se entienda. Si la app usa léxico rioplatense, el anuncio en "tú" puede nombrar el plato de forma neutra, pero la receta tiene que ser la misma.
