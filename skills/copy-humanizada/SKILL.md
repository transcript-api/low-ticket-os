---
name: copy-humanizada
description: "Escribí copy que frena el scroll y suena humano: ganchos, guiones de anuncios y Reels (con o sin presentadora IA), textos de Meta Ads, CTAs, historias y copy de página para infoproductos low ticket, con rúbrica de ganchos, chequeo de políticas y registro de hipótesis. Usala en lugar de copy-marketing para cualquier pieza concreta, y para revisar o puntuar un copy existente."
metadata:
  version: "1.0"
  actualizado: "2026-10-15"
  base-de-conocimiento: "conocimiento/copy/ (repo low-ticket-os)"
---

# Copy humanizada

Sistema de copy para anuncios y contenido que **frena el scroll, suena a persona y vende sin mentir**. Lo construyó la tanda de transcripciones de octubre 2026 (Víctor Heras/Viralidad y 7 creadores brasileños de low ticket), filtrada con evidencia externa, políticas de Meta y las reglas del negocio. Se alimenta de cada transcripción nueva (skill `ingesta-transcripciones`) y, sobre todo, de los resultados reales de los anuncios.

Escribí en el idioma y registro del dueño: español rioplatense con voseo, frases cortas, cero relleno. En conjuntos de México o Colombia, la variante en "tú" (ver paso 6).

## Fuentes de verdad (en este orden)

1. Reglas del negocio y políticas: `docs/01-principios.md`, `compliance/meta-ads-politicas.md`.
2. Datos propios: `products/<producto>/09-metricas.md`, `metrics/experimentos.csv`.
3. Base de conocimiento: `conocimiento/copy/ganchos.md` (principios HK, banco de 21 mecanismos, rúbrica), `ideas-y-angulos.md` (ID, niveles de consciencia, banco de ángulos), `guiones.md` (GU, estructuras con tiempos), `lenguaje-humanizado.md` (LH, pares malo → bueno, lista anti-IA, guía de voz), `conocimiento/criterio/banderas-rojas.md`.
4. Lo que resume este archivo, si no tenés acceso al repo.

Si `references/` no existe dentro de la skill, leé desde `conocimiento/` en la raíz del repo, o corré `npm run skills:sync`.

Datos del producto (precio, cantidad de recetas, semanas, garantía, qué incluye) **solo** desde `products/<producto>/`. Nunca los inventes ni los copies de otra pieza: verificá antes de escribir un número (ej.: en Reto Cintura 28 Santiago confirmó "más de 70 recetas" el 2026-10-14; antes de usarlo en un anuncio, chequeá que la página y la app digan lo mismo).

## Reglas que mandan

Si una idea choca con estas reglas, no se usa, aunque un gurú muestre un resultado viral.

1. **El gancho toca el dolor de quien mira o la hace preguntarse algo.** Una escena descriptiva ("Son las 9, abrís la heladera…") no frena el scroll.
2. **El dolor que se nombra es del plan, del tiempo, de la conducta o de la situación**, nunca del cuerpo de quien mira. Cuerpo, edad y salud van en tercera persona ("el cuerpo después de los 40…"); la edad queda en la segmentación.
3. **El enemigo es el plan imposible, no la persona.** Nada de culpa, vergüenza, "que te miren" o "tu ex".
4. **Sin kilos, centímetros ni plazos de resultado.** La promesa es de proceso: 28 días, 25 minutos, plan B, medirse en centímetros como forma de seguir el avance, no como resultado garantizado.
5. **La presentadora IA presenta, no testimonia.** Nunca "yo bajé", "a mí me funcionó", "lo que como en un día". No es nutricionista, entrenadora ni clienta. Clientas solo si son reales, con permiso por escrito y con la cifra real.
6. **Sin antes/después, sin comparar cuerpos, sin zoom a zonas del cuerpo.**
7. **Urgencia solo real** (fecha o cupo que se cumple). Precio "antes" solo si existió.
8. **Coherencia:** la palabra, el número y el precio del anuncio son los de la página.
9. **Verdad:** contracorriente sí, falso no. Toda afirmación de salud o nutrición tiene que poder defenderse con una fuente.
10. **Originalidad:** se modela la lógica, nunca el texto, la imagen ni el audio de otro.

## Procedimiento

### 1. Brief mínimo (si falta algo, preguntá o marcá el supuesto)

| Campo | Ejemplo |
|---|---|
| Producto y promesa honesta | Reto Cintura 28: plan de 28 días en casa, 25 min, con plan B de 8 min |
| Público | Mujeres 25–50, LATAM, sin tiempo, ya probaron dietas |
| Canal y temperatura | Pago frío / pago retargeting / orgánico Reel / historia / página |
| Nivel de consciencia (0–4) | 1: siente el dolor (empieza y abandona) |
| Formato y duración | Reel 9:16, 20–25 s, voz en off + presentadora IA |
| Registro | Voseo (conjunto rioplatense) o "tú" (México/Colombia) |
| Prueba real disponible | Capturas de la app, recetas cocinadas, garantía de 7 días |
| Creativos activos | Para no repetir mecanismo ni ángulo |

### 2. Diagnóstico (5 líneas, no un ensayo)

- Dolor de conducta, tiempo o plan que ella reconoce.
- Deseo como **vivencia de proceso** (terminar algo, saber qué toca hoy, comer normal), nunca como resultado corporal.
- Objeción principal (tiempo, "ya probé todo", "otro PDF", precio, confianza).
- Creencia a romper, solo si es verdadera (ej.: "mil abdominales no achican la cintura").
- Nivel de consciencia → qué decir (tabla de abajo).

| Nivel | Qué sabe ella | Qué decir | Mecanismos | Dónde va |
|---|---|---|---|---|
| 0 | No relaciona su situación con una solución, o cree un mito | Mito o curiosidad cotidiana; el producto al final | M1, M11, M5, M2 | Orgánico; pago frío como prueba |
| 1 | Siente el dolor: empieza y abandona, sin tiempo | Nombrar el dolor y reencuadrar: el enemigo es el plan | M10, M13, M8, M3, M12 | Pago frío (principal) |
| 2 | Conoce dietas, gimnasios, apps | Mecanismo propio y por qué este se sostiene | M4, M7, M15, M14 | Pago frío y tibio |
| 3 | Conoce el producto | El producto por dentro: Día 1, app real | M18 | Retargeting, historias |
| 4 | Quiere comprar pero duda | Precio, garantía, urgencia real, "mañana es tu Día 1" | M18, M17 | Retargeting de checkout, correo |

Un anuncio, un nivel. Si mezcla gancho de nivel 1 con cierre de nivel 4, son dos anuncios.

### 3. Idea y ángulo

- Elegí del banco de ángulos (`ideas-y-angulos.md` §7) o generá uno nuevo con: PCN (las preguntas que se hace una mujer común, no una experta), material real (preguntas del asesoramiento, comentarios), o una referencia viral (copiar la **lógica**, nunca el video).
- Escribí: **"Una persona querría ver esto porque…"** La respuesta tiene que traer persona, problema y dirección. "Porque aporta valor" no vale.
- **Espectadora cero:** ¿le interesa y lo entiende alguien que no sabe nada del producto ni del tema? Si no, no sigue.
- **Checklist de idea ganadora** (se produce con 5 o más de 8, y pasando los filtros de política, honestidad y verdad): contracorriente y verdadero · filtro 5/50 (lo entiende una nena de 10 años y le interesa a 5 de cada 10 mujeres del público) · no repite un ángulo activo · situación de la vida diaria · genera opinión sin atacar a nadie · formato justificado · presentadora congruente con la clienta real · lógica ya probada en otro mercado.
- **Orgánico vs pago:** en orgánico se abre ancho (un tema que le interesa a casi todo el mundo) y se cierra en el producto. En pago con segmentación amplia **el creativo segmenta**: se abre "ancho dentro del público", con un dolor de conducta que le pasa a la mayoría de las mujeres 25–50, no a un subnicho técnico.

### 4. Ganchos

- Escribí **5 a 10 aperturas por idea**, de al menos 3 mecanismos distintos. Quedate con las 3 mejores por rúbrica.
- Arranque en seco: las 3 primeras palabras ya son gancho. Sin "hola", "hoy te cuento", "en este video".
- Cada gancho lleva su **text hook** (texto fijo en pantalla de 0 a 3 s o más, 2–6 palabras, misma idea que la voz).

**Mecanismos (banco completo con ejemplos de las fuentes y adaptaciones en `ganchos.md` §4):**

| M | Mecanismo | Ejemplo para Reto Cintura 28 (adaptación) |
|---|---|---|
| M1 | Contracorriente verdadero | "Mil abdominales no achican la cintura." |
| M2 | Duda universal + respuesta inesperada | "¿Dieta o gimnasio? Ninguno de los dos primero." (solo si el guion lo sostiene con verdad) |
| M3 | Condición "Si ya…" | "Si ya empezaste tres planes este año, el problema no eras vos." |
| M4 | Objeto señalado + mecanismo + número | "Este plan B de 8 minutos existe para el día que no das más." |
| M5 | Lista con número | "Tres cosas que hacen que casi todos los planes se dejen en la semana 3." |
| M6 | POV de intriga | "POV: es el tercer lunes que 'ahora sí' empezás." |
| M7 | A contra B (comidas, días o planes; nunca cuerpos) | "La misma milanesa, armada de dos formas." |
| M8 | Error o advertencia | "El error que hace que dejes el plan el día 9." |
| M9 | Confesión permitida (de conducta, sin resultados de la IA) | "Lo que nadie dice de los planes de una hora por día." |
| M10 | Pregunta de dolor específico | "¿Cuántos lunes empezaste este año?" |
| M11 | Curiosidad / loop abierto | "Hay un minuto del día que decide si seguís o largás." |
| M12 | Identidad ("Para la que…") | "Para la que entrena mientras los chicos ven dibujitos." |
| M13 | Reencuadre de la culpa | "No te falta voluntad. Te falta saber qué hacer hoy." |
| M14 | Instrucción paradójica | "Hoy no entrenes una hora. Hacé ocho minutos." |
| M15 | Quita de esfuerzo ("sin…, sin…, incluso…") | "Sin gimnasio, sin contar calorías, incluso el día que no hay tiempo." |
| M16 | Promesa contextual ("aunque…") | "Aunque trabajes todo el día, hay un plan que entra." |
| M17 | Desafío o fecha real | "El reto arranca el lunes [fecha real]." |
| M18 | Demostración del producto | "Esto no es un PDF que queda en descargas. Mirá." |
| M19 | Dato concreto (solo con origen citado) | — |
| M20 | Tutorial "Cómo [algo] en [tiempo]" | "Cómo armar el plato de la cena en 30 segundos." |
| M21 | Objeción en boca de ella | "'No tengo tiempo.' Son veinticinco minutos." |

**Rúbrica de gancho (0–10).** Primero tres filtros eliminatorios; si falla uno, vale 0 y no se produce:
- **P1 Políticas:** ¿afirma o insinúa algo del cuerpo, peso, edad, salud o relaciones de quien mira? ¿Promete kilos, centímetros o plazos? ¿Compara cuerpos?
- **P2 Honestidad:** ¿la IA habla de experiencias o resultados propios? ¿Hay cifras, testimonios o urgencia que no son reales?
- **P3 Verdad:** ¿hay una afirmación de salud o nutrición que no se puede defender?

Después, 1 punto por criterio: (1) dolor o pregunta, no escena descriptiva · (2) arranque en seco · (3) 12 palabras o menos · (4) concreto: número, objeto, momento, plato o duración · (5) sin jerga · (6) ancho dentro del público ("5 de cada 10 dirían 'me pasa'") · (7) abre un loop · (8) se cumple: está marcado el segundo en que el cuerpo responde · (9) doble canal: text hook entendible sin audio · (10) distinto a los creativos activos.

Decisión: 9–10 producir prioridad 1 · 7–8 producir · 5–6 reescribir · ≤4 descartar. Formato: `Gancho | P1 · P2 · P3 | C1..C10 | total | decisión | criterio que falló`.

### 5. Guion

Reglas: **una idea por pieza** · el gancho se cumple y se marca el segundo · el producto entra **después** de cumplir el gancho · prueba real en pantalla en cada afirmación del producto · **un CTA, igual al botón** · cinco planos como mínimo en 20–25 s, algo nuevo cada 4–6 s.

**Anuncio 15 s (lineal o demostración):** 0–2,5 s gancho (6–9 palabras) · 2,5–5 s se cumple · 5–11 s producto con prueba visual real · 11–15 s CTA único. Producto cerca del 33 %.

**Anuncio 20–25 s (dos familias, testealas como conceptos distintos):**

| Tramo | Lineal | Embudo comprimido |
|---|---|---|
| 0–3 s | Gancho de dolor o pregunta | Gancho contracorriente o duda universal |
| 3–8 s | Normalizar el problema y cumplir el gancho | Por qué pasa (cumple el gancho) |
| 8–12 s | Producto con número | Giro: el problema era el plan |
| 12–20 s | Mecanismo y prueba real | Producto con número y prueba real |
| 20–25 s | CTA único y razón real | CTA único y razón real |

**Anuncio 40 s:** 0–3 gancho · 3–12 contexto con ejemplo concreto · 12–20 giro y respuesta a la objeción principal · 20–32 producto con capturas reales y un segundo beneficio · 32–40 CTA, razón real y garantía si corresponde. Micro-loop a los 12–15 s y reset visual a los 20 s.

**Reel orgánico 45–60 s (embudo dentro del video):** 0–3/7 s gancho · hasta ~30 s contexto ancho con ejemplo · transición explícita ("Pero si lo que querés es…") · 30–45 s moraleja que cumple el gancho · 45–60 s el producto como herramienta y CTA con palabra clave. "No es cómo empezás, es cómo terminás": sin transición explícita, un viral vende cero.

**CTA:** pago → una acción que coincide con el botón ("Tocá Más información y mirá el Día 1") y una razón real. Orgánico → palabra clave con una recompensa real ("Comentá PLATO y te mando el armador"). Sin "escribime por DM" en anuncios low ticket.

**Presentadora IA:** presenta y muestra ("esto es", "así se ve", "mirá"). Nunca "yo", "hice", "me funcionó", "como nutricionista".

### 6. Humanización

- **Concreto:** cada frase tiene algo que se puede ver o tocar (una milanesa, un lunes, un timer, una silla). Pregunta de control: "¿qué tendría que ver ella para entenderlo?".
- **Sin jerga:** "40 segundos de ejercicio y 20 de descanso", no "HIIT"; nada de "metabolismo", "déficit", "quema".
- **Pares típicos:** "Transformá tu cuerpo" → "28 días de entrenos de 25 minutos, en tu casa, con un plan que te dice qué hacer" · "Plan fácil y efectivo" → "Abrís la app, tocás Empezar y el timer te dice cuándo parar" · "Recetas deliciosas" → "Milanesa, fideos, tarta: tus platos de siempre, armados de otra forma" · "Resultados garantizados" → "Garantía de 7 días por Hotmart" · "Tu mejor versión te espera" → "Mañana es tu Día 1".
- **Lista anti-IA:** si un texto tiene 2 o más, se reescribe. Palabras comodín (descubrí, desbloqueá, potenciá, transformá, viaje, experiencia única, increíble, revolucionario, integral, holístico, empoderar, clave, crucial, "tu mejor versión", "el siguiente nivel") · aperturas ("¿Alguna vez te preguntaste…?", "Imaginá…", "¿Sabías que…?", "Hola, chicas", "Hoy te traigo…") · cierres ("¡No esperes más!", "El cambio empieza hoy", "¿Qué esperás?") · estructuras ("No es X, es Y" más de una vez, tríadas en cada frase, tres preguntas seguidas, todas las frases del mismo largo, conectores de ensayo, voz pasiva, raya como pausa, exclamaciones dobles) · calcos (realizar, brindar, contamos con, en base a, tomar acción, consistencia por constancia) · mezclar "tú" y "vos" · promesas genéricas ("diseñado por expertos", "científicamente probado", "miles de mujeres ya…").
- **Tres tests:** WhatsApp (¿se lo mandarías así a una amiga?) · lo concreto · en voz alta (¿suena a folleto o a infomercial?).
- **Escribir para la voz (ElevenLabs):** frases de 15 palabras o menos · lo importante al final de la frase · signo ¿ de apertura y una pausa corta después de cada pregunta · números en palabras en el guion de voz y en cifras en pantalla · sin mayúsculas sostenidas en el texto de voz · tono firme y tranquilo, sin voz de locutora · 3 tomas y elegir la más conversada · velocidad ajustada en la voz (~1,1×), no acelerando el video · cero silencios muertos.
- **Registro por país:** voseo rioplatense para UY/AR/PY; "tú" neutro con léxico neutro para México, Colombia y LATAM amplio (testear voseo vs "tú" como una variable). Léxico de comida y vida diaria del mercado.

### 7. Doble canal y visual

- Se tiene que entender **solo con audio** y **solo con imagen + subtítulos**.
- Indicá por tramo qué se ve: prueba real del producto (captura de la app, receta cocinada, calendario, timer), nunca cifras, notificaciones, testimonios ni expertos inventados.
- Text hook de 0 a 3 s o más, tercio superior, zona segura. Subtítulos de 2 a 4 palabras.

### 8. Chequeo final (si alguna respuesta es sí, se corrige)

¿Cuerpo comparado, antes/después o zoom? · ¿le atribuye a quien mira peso, panza, hinchazón, edad o salud? · ¿la IA dice "yo", "hice el reto" o tiene credenciales? · ¿número sin fuente? · ¿kilos, centímetros, plazo, "garantizado", "sin esfuerzo"? · ¿vergüenza o inseguridad como motor? · ¿urgencia o precio "antes" falsos? · ¿texto, imagen o video de otro creador? · ¿el número o el precio difiere de la página?

### 9. Entrega y registro

Formato de salida para cada pieza:

```
ID: V0x (C-E-V: concepto-ejecución-variante)
Ángulo · Nivel (0–4) · Mecanismo (M#) · Familia (lineal / embudo) · Canal
Idea: "Una persona querría ver esto porque…"
Ganchos (3) con text hook y rúbrica: P1·P2·P3 | C1..C10 | total
Guion con tiempos: [0–3 s] voz | text hook | qué se ve (prueba real)
Texto principal (primera línea = gancho), titular, botón
Hipótesis: qué esperamos y cómo se mide (hook rate, hold, CTR, CPA)
Riesgo de políticas: bajo / cuidado (nota)
```

Después: sumar la pieza a `products/<producto>/05-creativos.md` o `06-videos.md`, y si es un test, una fila en `metrics/experimentos.csv` (una variable, métrica principal, umbral).

## Aprender de los resultados (el loop que evita repetir errores)

- **Diagnóstico por capa**, no por intuición: hook rate bajo (menos de 30 % con 2.000 impresiones o más) → gancho · hold bajo → el cuerpo no cumple o la idea no interesa · CTR de enlace bajo → transición o CTA · muchos IC sin compra → página o checkout, no el creativo.
- Un gancho con hook rate de 30 % o más confirma la rúbrica; por debajo, se reemplaza el gancho sobre el mismo cuerpo (mismo cuerpo, distintos ganchos = iteración del ganador, no diversidad).
- Cada mes, comparar el puntaje de la rúbrica con el hook rate real. Si un criterio no predice, se ajusta la rúbrica en `ganchos.md`.
- Ganadores: "fotocopiadora" → misma idea y gancho en otro formato visible (no espejo, ni ×1,05, ni cambio de color).
- Lo que se aprende va a `docs/aprendizajes.md` y, si cambia un principio, a `conocimiento/copy/` con su nueva confianza (protocolo en `conocimiento/criterio/protocolo-de-ingesta.md`, paso 8). **Un dato propio con muestra suficiente pesa más que cualquier gurú.**

## Errores que ya se cometieron (no repetir)

| Error | Por qué falla | En su lugar |
|---|---|---|
| "Son las 9, abrís la heladera…" | Descriptivo: no toca dolor ni abre pregunta | "¿Cuántas veces 'arrancaste el lunes' este año?" |
| "Comer menos no te baja la cintura." | Contracorriente falso o incompleto (P3) | "Mil abdominales no achican la cintura." |
| "Faltan diez semanas para el verano… vas a estar igual que hoy, pero con más bronca" | Autopercepción negativa (P1) | Fecha real de inicio del reto, sin cuerpo |
| "Si tuviera que arrancar de cero mañana, haría solo esto." | La IA habla de experiencia propia (P2) | "Si hubiera que arrancar de cero mañana, alcanza con esto." |
| "Tres ejercicios para hacer hoy en tu living." | Presenta el tema, no es dolor ni pregunta | "¿Sin gimnasio y sin equipamiento? Tres ejercicios para hoy." |
| Clientas, notificaciones o cifras generadas | Testimonio falso | Capturas reales del producto; clientas reales con permiso |
