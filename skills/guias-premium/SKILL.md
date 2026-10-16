---
name: guias-premium
description: Crear guías digitales premium (nunca "PDF") para infoproductos de cualquier nicho, con branding, imágenes generadas con IA, diseño editorial y un motor de motivación que hace que la persona siga hasta el final.
---

# Guías premium

Esta skill crea **guías**: el material descargable de un infoproducto (reto, método, programa, curso corto). Siempre se las llama **"guía"**, nunca "PDF", ni en la guía, ni en la página de venta, ni en los emails. El archivo es un PDF; el producto es una guía.

**El estándar:** que la persona abra la guía y piense "esto vale mucho más de lo que pagué", y que cada página la empuje a la siguiente. Referencia de calidad: la guía del Reto Cintura 28 (128 páginas en formato historia, una por día, con foto protagonista, número gigante del día, misión con casilla, ejercicios con fotos en dos tiempos, recetas y comparaciones "de siempre / versión nueva").

Se trabaja en **9 fases**. No saltees fases: cada una alimenta a la siguiente. Al terminar cada fase, mostrá un resumen corto y pedí OK solo en las decisiones marcadas con 🔒.

---

## Fase 0 · Brief (🔒)

Completá esta ficha antes de diseñar nada. Si falta algo, preguntá todo junto en un solo mensaje.

| Campo | Ejemplo (fitness) | Ejemplo (finanzas) |
|---|---|---|
| Nicho y subnicho | Fitness mujeres, cintura | Finanzas personales, salir de deudas |
| Transformación (de → a) | De abandonar siempre → terminar un reto y bajar centímetros de cintura | De vivir con deudas → plan de pago y primer ahorro |
| Promesa de la página de venta | 28 días, 20–30 min, desde casa | 30 días, 15 min por día |
| Avatar | Mujer 25–45, poco tiempo, abandona | Persona 25–40, sueldo fijo, tarjetas al límite |
| Unidad del recorrido | Días (Día 0 + 28 + extra) | Días o pasos |
| Etapas | 4 semanas con nombre | 4 fases |
| Componentes con números | 22 ejercicios, 32 recetas, 5 imprimibles | 12 plantillas, 8 scripts |
| Voz | Voseo rioplatense / tú neutro | Tú neutro |
| Idioma de las fotos | Hogar latino, luz natural | Escritorio, celular, cuaderno |
| Formato | Historia 9:16 + imprimibles A4 | Historia 9:16 + planillas A4 |
| Producto complementario | App, menú (order bump) | Planilla, app |
| Avisos obligatorios | Salud | No es asesoramiento financiero |

**Regla de oro del brief:** todos los números que promete la página de venta (cantidad de días, recetas, ejercicios, páginas, bonos) se anotan acá y la guía final tiene que cumplirlos exactos. Revisalo en la fase 8.

---

## Fase 1 · Sistema de marca (🔒)

Antes de maquetar, definí la marca y guardala en `marca.json` (la usa el CSS y el generador de imágenes).

### 1.1 Nombre y concepto
- Nombre del programa: **[Resultado/zona] + [número del recorrido]** (Reto Cintura 28, Método Deuda Cero 30, Inglés 21).
- Concepto visual en una frase: "energía cálida de living real, rosa fucsia y lima, tipografía condensada potente".

### 1.2 Isotipo
- Un símbolo simple que funcione a 32 px: cuadrado redondeado con el número del recorrido y un **anillo de progreso** (refuerza la idea de avance). Hacelo en SVG.
- Variantes: color sobre claro, claro sobre oscuro, monocromo.

### 1.3 Paleta en tokens
Siempre 7 tokens, con roles fijos:

```json
{
  "ink": "#1C1324",      "inkSoft": "#463A4E",  "muted": "#6E6475",
  "bg": "#FCF9F7",       "card": "#FFFFFF",
  "accent": "#E5156E",   "accentSoft": "#FFE4EE",
  "pop": "#CFF56A"
}
```
- **accent**: llamadas, números del día, etiquetas. **pop**: logros, checks, celebraciones (un solo color de "éxito").
- Verificá contraste WCAG: texto normal ≥ 4.5:1, títulos grandes ≥ 3:1. Calculalo con un script, no a ojo. Si `pop` no da contraste con blanco, se usa siempre con texto `ink`.
- Paletas por nicho (punto de partida, ajustar a la marca):

| Nicho | accent | pop | Sensación |
|---|---|---|---|
| Fitness mujer | fucsia | lima | energía |
| Fitness hombre | naranja | cian | potencia |
| Nutrición / cocina | tomate | verde hoja | apetito, frescura |
| Finanzas | verde esmeralda | dorado | control, logro |
| Idiomas | azul eléctrico | amarillo | claridad, juego |
| Bienestar / espiritualidad | terracota | salvia | calma |
| Maternidad | coral | menta | ternura |
| Productividad | índigo | lima | foco |

### 1.4 Tipografía
- **Display** (títulos, números): grotesca con personalidad y ejes variables (Bricolage Grotesque, Archivo, Familjen Grotesk, Unbounded para nichos jóvenes, Fraunces para bienestar).
- **Texto**: sans muy legible (Instrument Sans, Inter, Manrope, DM Sans).
- Instalalas desde npm (`@fontsource-variable/...`) y embebelas con `@font-face` local. Si Google Fonts está bloqueado, npm funciona.
- Escala para página 1080×1920: número del día 300–420 px condensado · H1 96–120 · H2 56–64 · cuerpo 30–34 · etiquetas 24–26. Interlineado del cuerpo 1.45.

### 1.5 Estilo fotográfico (style key)
Un bloque de texto fijo que va al final de **todos** los prompts de imágenes. Ejemplo:

> "Foto real estilo smartphone de alta gama, luz natural de ventana a media mañana, living latino moderno con sofá gris claro, piso de madera y plantas monstera, tonos cálidos, colores naturales, sin filtros exagerados, nítida, profundidad de campo suave."

### 1.6 Voz
- Persona gramatical única (tú o vos) en TODO: guía, app, página, emails.
- Tono: compañera que sabe, no gurú. Frases cortas. Celebra el esfuerzo, no la perfección.
- Glosario fijo del programa (nombres de etapas, de la misión diaria, de los niveles). Anotalo en `marca.json` y no inventes sinónimos después.

---

## Fase 2 · Arquitectura de la guía

### 2.1 Formatos
- **Guía principal en formato historia 9:16 (1080×1920 px por página).** Se lee en el celular como stories, una idea por página. Es el formato por defecto.
- **Imprimibles A4** (calendario, medidas, lista de compras, reglas, contrato): archivo aparte.
- Opcional: versión horizontal 16:9 para leer en computadora.

### 2.2 Catálogo de tipos de página
Combiná estos tipos según el nicho. Cada uno tiene una función psicológica.

| # | Tipo | Función | Contenido |
|---|---|---|---|
| 1 | **Portada** | Valor percibido, orgullo de haberla comprado | Foto protagonista, nombre del programa, promesa corta, isotipo |
| 2 | **Bienvenida / manifiesto** | Pertenencia | Carta corta de la creadora + 3 reglas del programa |
| 3 | **Cómo usar esta guía** | Quitar fricción | 3 pasos con íconos + qué hacer si te perdés un día |
| 4 | **Tu punto de partida** | Compromiso y línea de base | Medición inicial, foto opcional, "por qué empiezo", firma |
| 5 | **Mapa del recorrido** | Ver el final desde el inicio | Línea de etapas con nombre y objetivo |
| 6 | **Apertura de etapa** | Ritual, sensación de avance | Foto a pantalla completa, "Semana 2 · Ritmo", qué cambia |
| 7 | **Página del día** (el corazón) | Acción diaria clara | Foto + número gigante + título del día + bloque Hacer/Comer/Cabeza + misión con casilla |
| 8 | **Técnica paso a paso** | Confianza para ejecutar | Fotos en 2 tiempos numeradas, "cómo se hace" en 3 pasos, errores comunes, variantes por nivel |
| 9 | **Receta / herramienta** | Valor concreto | Foto hero, tiempo y porciones, ingredientes, pasos numerados, tip |
| 10 | **De siempre vs versión nueva** | "Puedo sin renunciar a lo que me gusta" | Dos fotos lado a lado con etiqueta + frase de cierre |
| 11 | **Dato que cambia la cabeza** | Creencia nueva | Una frase grande + explicación de 3 líneas |
| 12 | **Hito / celebración** | Recompensa | "Completaste la Semana 1", qué lograste, sello, adelanto |
| 13 | **Control de mitad de camino** | Reenganche | Nueva medición, comparación, "lo difícil ya pasó" |
| 14 | **Plan B** | Nunca cortar la racha | Versión de 5–8 minutos para días imposibles |
| 15 | **Si te caíste** | Reingreso sin culpa | Protocolo de regreso, regla "nunca dos veces seguidas" |
| 16 | **Preguntas frecuentes / problemas** | Soporte | 6–10 dudas con respuesta corta |
| 17 | **Graduación / certificado** | Orgullo, testimonio | Certificado con nombre, medición final, pedido de testimonio |
| 18 | **Lo que sigue** | Puente al siguiente producto | Semanas de regalo, app, programa siguiente |

### 2.3 Estructura base (ejemplo de 28 días ≈ 120–130 páginas)
1 portada · 2 bienvenida · 3 cómo usar · 4 punto de partida · 5 mapa · por cada etapa: apertura + 7 páginas del día (+ hoja del día si hay tareas) + hito · bloque de técnicas (una por ejercicio/herramienta) · bloque de recetas/herramientas · comparaciones · plan B · si te caíste · FAQ · graduación · lo que sigue.

Adaptá la unidad del recorrido al nicho: días (retos), lecciones (idiomas), pasos (finanzas), proyectos (manualidades).

### 2.4 Ritmo visual
Alterná páginas densas y livianas. Nunca más de 2 páginas densas seguidas. Cada 5–7 páginas, una página de respiro (dato grande, foto completa, frase).

---

## Fase 3 · Contenido con motor de motivación

Escribí todo el contenido en Markdown/JSON estructurado antes de maquetar (`contenido/dias.json`, `contenido/tecnicas.json`, `contenido/recetas.json`). El maquetado lee esos archivos.

### 3.1 Los 12 mecanismos de motivación (usalos todos)
1. **Barra de progreso arriba de cada página del recorrido** (segmentos por día, los completados en color).
2. **Contador "Día 12 de 28"** y número de página "11 / 128" en el pie.
3. **Misión del día con casilla para tachar** (una sola, concreta, alcanzable).
4. **Título del día con nombre propio y emocionante** ("El circuito que sube", "Primer paso: piernas y centro"), nunca "Día 12: ejercicios".
5. **Bloques fijos Hacer / Comer / Cabeza** (o los equivalentes del nicho): la persona aprende dónde mirar.
6. **Progresión visible**: "El mismo circuito del Día 5, más intenso".
7. **Permiso para hacerlo fácil**: "Terminar con la variante fácil vale más que abandonar con la difícil".
8. **Regla antiabandono**: "Podés fallar un día, nunca dos seguidos".
9. **Hitos al cerrar cada etapa** con lenguaje de identidad ("Ya sos de las que terminan lo que empiezan").
10. **Adelanto del día siguiente** al pie ("Mañana: el desayuno que te deja satisfecha hasta el almuerzo").
11. **Sorpresas** (página bonus inesperada, receta secreta, semana de regalo): recompensa variable.
12. **Futuro yo**: en el punto de partida escribe por qué empieza; en hitos y graduación se lo recordamos.

### 3.2 Reglas de redacción
- Una idea por página. Si no entra, son dos páginas.
- Cuerpo ≤ 60 palabras por bloque. Títulos ≤ 7 palabras.
- Verbos en imperativo amable: "Hacé", "Marcá", "Sumá".
- Números concretos siempre: minutos, rondas, porciones, pesos.
- Nada de promesas de resultados garantizados ni de salud/dinero. Hablá de hábitos, energía, constancia, ropa que queda distinto, control.
- Aviso obligatorio del nicho en bienvenida y pie de la última página.

---

## Fase 4 · Dirección de imágenes

### 4.1 Protagonista consistente
- Definí una protagonista/protagonista (o mano/objeto si el nicho no lleva persona): edad, rasgos, pelo, ropa fija por etapa, locación fija.
- Generá primero **3 imágenes de referencia** (frente, perfil, cuerpo entero) y elegí una. Usala como referencia en todas las generaciones siguientes para mantener la cara.
- La ropa y la locación cambian poco: es lo que hace que parezca una persona real y no un banco de imágenes.

### 4.2 Shot list
Armá `imagenes/shotlist.csv` con: id, página, tipo (hero / paso 1 / paso 2 / receta / comparación), descripción, encuadre, relación de aspecto, estado.

Encuadres por tipo de página:
| Tipo | Aspecto | Encuadre |
|---|---|---|
| Página del día (hero) | 9:8 o 4:3 | Plano general de la acción, aire arriba para la etiqueta |
| Técnica en 2 tiempos | 4:5 cada una | Misma cámara, misma ropa, posición inicial y final |
| Receta hero | 3:2 | Cenital o 45°, plato protagonista, luz lateral |
| Comparación | 4:5 cada una | Mismo plato, misma mesa y luz; cambia solo lo que importa |
| Apertura de etapa | 9:16 | Retrato emocional, espacio para texto |
| Portada | 4:5 | Protagonista sonriendo mirando a cámara con objeto del nicho |

### 4.3 Generación
- Herramienta preferida: **Higgsfield** (`generate_image` / `generate_image_batch`, con imagen de referencia para la protagonista; elegí modelo con `models_explore` en modo recomendación). Alternativas: cualquier generador con referencia de personaje.
- Antes de generar en lote, decí cuántas imágenes son y cuántos créditos estimás; generá primero 3 de prueba y pedí OK (🔒).
- Prompt = **acción concreta + encuadre + ropa/locación fija + style key**. Nunca pidas texto dentro de la imagen.
- Para técnica en 2 tiempos: generá el tiempo 1, después el tiempo 2 usando la imagen 1 como referencia.

### 4.4 Control de calidad de cada imagen (rechazar si falla una)
- Manos y pies con 5 dedos, sin deformaciones. Articulaciones naturales.
- La técnica mostrada es correcta (en fitness: rodillas, espalda, posición; en cocina: el plato coincide con la receta).
- Misma cara que la referencia.
- Sin texto, logos ni marcas inventadas.
- Sin cabezas ni platos cortados por el encuadre.
- Luz y paleta coherentes con el style key.

### 4.5 Procesado
Recortá al aspecto final, exportá en WebP/JPEG calidad 80, ancho máximo 1400 px para hero y 800 px para miniaturas. Objetivo: guía final de 128 páginas por debajo de 40 MB.

---

## Fase 5 · Maquetado (HTML + CSS)

Construí la guía como HTML: cada página es un `<section class="pg">` de 1080×1920. Así se puede ajustar todo con código y renderizar perfecto.

### 5.1 Estructura de carpetas
```
guia/
  marca.json
  contenido/  (dias.json, tecnicas.json, recetas.json, textos.md)
  imagenes/   (shotlist.csv, final/)
  fuentes/    (.woff2)
  plantilla/  (guia.html, guia.css, construir.js)
  salida/     (guia.pdf, imprimibles.pdf, previews/)
```

### 5.2 CSS base
```css
@page { size: 1080px 1920px; margin: 0; }
:root { /* tokens desde marca.json */
  --ink:#1C1324; --muted:#6E6475; --bg:#FCF9F7; --card:#fff;
  --accent:#E5156E; --accentSoft:#FFE4EE; --pop:#CFF56A;
  --display:"Bricolage Grotesque"; --body:"Instrument Sans";
  --m:64px; --r:28px; }
* { box-sizing:border-box; margin:0; }
body { font-family:var(--body); color:var(--ink); -webkit-print-color-adjust:exact; print-color-adjust:exact; }
.pg { width:1080px; height:1920px; position:relative; overflow:hidden; background:var(--bg); page-break-after:always; }
.prog { position:absolute; top:24px; left:var(--m); right:var(--m); display:flex; gap:4px; z-index:3; }
.prog i { flex:1; height:8px; border-radius:4px; background:rgba(255,255,255,.45); }
.prog i.on { background:var(--accent); }
.dnum { font:800 380px/0.8 var(--display); font-stretch:75%; color:var(--accent); letter-spacing:-.05em; }
.kicker { font:700 26px var(--body); color:var(--accent); }
.h1 { font:800 96px/0.98 var(--display); letter-spacing:-.035em; }
.card { background:var(--card); border-radius:var(--r); padding:36px; box-shadow:0 6px 24px rgba(28,19,36,.06); }
.card.dark { background:var(--ink); color:#fff; }
.mision { display:flex; gap:20px; align-items:flex-start; background:var(--accentSoft); border-radius:var(--r); padding:30px 36px; }
.mision .box { width:44px; height:44px; border:4px solid var(--ink); border-radius:10px; flex:none; }
.foot { position:absolute; bottom:40px; left:var(--m); right:var(--m); display:flex; justify-content:space-between; font:500 22px var(--body); color:var(--muted); }
.tag { display:inline-block; background:#fff; border-radius:999px; padding:10px 22px; font:700 24px var(--body); }
.tag.pop { background:var(--pop); }
```

### 5.3 Reglas de diseño
- Margen exterior 64 px; nada importante a menos de 64 px del borde (los celulares recortan).
- Grilla de 12 columnas, gutter 24 px.
- Máximo 2 tipografías, 3 pesos.
- Texto sobre foto solo con degradado o placa detrás (contraste ≥ 4.5:1).
- Componentes reutilizables (card, card.dark, mision, tag, pasos numerados, lista de errores con ✕, niveles en tarjetas). Mismo componente = misma función en toda la guía.
- Las imágenes van con `border-radius` igual al de las cards; los hero de día pueden ir a sangre arriba.

### 5.4 Construcción
`construir.js` lee `contenido/*.json` y genera `guia.html` con una función por tipo de página (`portada()`, `dia()`, `tecnica()`, `receta()`, `comparacion()`, `hito()`…). Nunca maquetes 128 páginas a mano.

---

## Fase 6 · Render a PDF

```js
// construir-pdf.js — necesita playwright (Chromium ya instalado)
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/guia.html', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: 'salida/guia.pdf', width: '1080px', height: '1920px', printBackground: true, preferCSSPageSize: true });
  // previews para la página de venta
  const pages = await p.$$('.pg');
  for (const i of [0, 4, 10, 60, 95]) if (pages[i]) await pages[i].screenshot({ path: `salida/previews/pg-${i + 1}.webp`, type: 'png' });
  await b.close();
})();
```
- Si el PDF pesa más de 40 MB, recomprimí las imágenes (no el PDF entero con calidad baja).
- Generá también `imprimibles.pdf` en A4 (`size: A4`, márgenes 15 mm, sin fondos oscuros para no gastar tinta).

---

## Fase 7 · Activos para vender la guía

Entregá junto a la guía:
- **Mockups**: la portada en un iPad + 6–9 páginas en celulares (para la sección "qué incluye" de la página de venta).
- **Previews**: 5 páginas clave en WebP (portada, página del día, técnica, receta, comparación).
- **Carrusel de 6 páginas** para anuncios ("mirá cómo es por dentro").
- **Video de hojeo** de 10–15 s: render frame a frame con Playwright + ffmpeg pasando páginas (sin créditos de IA).

---

## Fase 8 · Control de calidad final

Revisá página por página con capturas en grilla (contact sheets de 8 páginas) y marcá cada punto:

**Contenido**
- [ ] Los números coinciden con la página de venta (días, recetas, técnicas, páginas, bonos).
- [ ] Una sola persona gramatical (tú o vos) en todo.
- [ ] Glosario respetado (nombres de etapas y niveles).
- [ ] Sin promesas de resultados garantizados; aviso obligatorio presente.
- [ ] Tildes, ñ y signos de apertura (¿¡) correctos.

**Diseño**
- [ ] Barra de progreso y contador correctos en cada página del recorrido.
- [ ] Ningún texto cortado, huérfano o encimado.
- [ ] Contraste suficiente en todo texto sobre foto.
- [ ] Ritmo: nunca 3 páginas densas seguidas.
- [ ] Numeración "N / total" correcta.

**Imágenes**
- [ ] Misma protagonista en toda la guía.
- [ ] Sin manos deformes, texto inventado ni técnica incorrecta.
- [ ] Comparaciones con misma luz y encuadre.

**Técnico**
- [ ] Fuentes embebidas (abrí el PDF y revisá que no haya fuentes sustitutas).
- [ ] Peso < 40 MB; abre rápido en el celular.
- [ ] Probado en un celular real: se lee sin hacer zoom.

---

## Errores que no se pueden cometer

1. Llamarla "PDF" en vez de "guía".
2. Que la guía no cumpla un número que promete la página de venta.
3. Protagonista con cara distinta entre páginas.
4. Imágenes con manos deformes, texto generado o técnica mal hecha.
5. Bloques de texto largos: más de 60 palabras por bloque.
6. Mezclar tú y vos, o cambiar el nombre de las etapas a mitad de camino.
7. Títulos genéricos ("Día 12", "Receta 4") en vez de títulos con gancho.
8. Fuentes no embebidas o reemplazadas por Arial.
9. PDF de 150 MB que no abre en el celular.
10. Texto blanco sobre foto clara sin placa ni degradado.
11. Páginas sin progreso visible: la persona tiene que saber siempre dónde está y cuánto falta.
12. Prometer resultados de salud, peso o dinero garantizados.
13. Diseño de "banco de imágenes": fotos frías, de estudio, sin la locación fija.
14. Olvidar el plan B y la página "si te caíste": son las que evitan el abandono.
15. Terminar la guía sin puente a lo que sigue (semanas de regalo, app, siguiente producto).

---

## Adaptación por nicho (ejemplos de mapeo)

| Nicho | Unidad | "Técnica" | "Receta" | "De siempre vs nueva" | Misión típica |
|---|---|---|---|---|---|
| Fitness | Día | Ejercicio en 2 tiempos | Receta | Plato de siempre vs versión del reto | Hacer el entreno y marcarlo |
| Cocina / repostería para vender | Receta | Técnica (punto de merengue) | Receta con costeo | Presentación casera vs profesional | Cocinar y sacar foto |
| Finanzas | Paso | Cómo hacer (planilla) | Script / plantilla | Gasto impulsivo vs decisión planificada | Registrar gastos del día |
| Idiomas | Lección | Pronunciación en 2 tiempos | Frase lista para usar | Cómo lo dice un principiante vs un nativo | Grabarte diciendo 5 frases |
| Manualidades | Proyecto | Paso de técnica en 2 tiempos | Molde | Acabado común vs acabado pro | Terminar la pieza |
| Maternidad | Semana | Posición / rutina | Rutina de sueño | Reacción común vs respuesta respetuosa | Practicar una rutina |
| Productividad | Día | Herramienta paso a paso | Plantilla | Día caótico vs día planificado | Bloquear 1 hora de foco |
