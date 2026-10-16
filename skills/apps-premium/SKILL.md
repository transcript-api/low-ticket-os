---
name: apps-premium
description: Crear web apps premium (PWA) para infoproductos de cualquier nicho: recorrido diario, timer guiado, biblioteca, progreso y motivación, con diseño de app nativa y lista para vender.
---

# Apps premium para infoproductos

Esta skill crea la **app** que acompaña a un infoproducto (reto, método, programa). Es una web app instalable (PWA): se abre con un link desde el celular, se agrega a la pantalla de inicio y se siente como una app nativa de las mejores (referencias de nivel: Apple Fitness, Duolingo, Headspace, Nike Training Club).

**El estándar:** que la persona la abra todos los días porque le da gusto, sepa en 2 segundos qué tiene que hacer hoy, y sienta que pagó por una app de suscripción. Referencia interna: la app del Reto Cintura 28 (pantalla Hoy con anillo "12 de 31" y racha, día con foto y niveles, timer guiado oscuro con número gigante). Esta skill apunta a superarla.

Trabajá en **10 fases**. Pedí OK solo en las decisiones marcadas con 🔒.

---

## Fase 0 · Brief (🔒)

| Campo | Ejemplo |
|---|---|
| Producto y promesa | Reto Cintura 28: 28 días, 20–30 min, desde casa |
| Unidad del recorrido | Días (Día 0 + 28 + semanas extra) |
| Etapas | Semanas con nombre (Arranque, Ritmo, Fuerza, Para siempre) |
| Tipos de contenido | Entrenos, ejercicios, recetas, guías cortas, mediciones |
| Acción principal diaria | Hacer el entreno del día con el timer |
| Niveles | Inicial, intermedio, avanzado |
| Voz | Voseo / tú neutro (la misma que la guía y la página) |
| Marca | `marca.json` de la skill guias-premium (tokens, fuentes, isotipo) |
| Imágenes | Las mismas de la guía (misma protagonista) |
| Entrega | Link privado desde Hotmart / área de miembros |
| Números prometidos | 22 ejercicios, 32 recetas, 36 jornadas… (la app tiene que cumplirlos) |

Si existe una guía hecha con `guias-premium`, reutilizá su `marca.json`, `contenido/*.json` e imágenes. La app y la guía tienen que parecer del mismo producto.

---

## Fase 1 · Modelo de datos

Todo el contenido vive en JSON; la interfaz nunca tiene contenido escrito a mano.

```json
// data/programa.json
{
  "id": "reto-cintura-28", "nombre": "Reto Cintura 28", "totalJornadas": 36,
  "etapas": [{ "id": "s1", "nombre": "Arranque", "objetivo": "Aprender la técnica y armar el horario" }],
  "jornadas": [{
    "n": 12, "etapa": "s2", "tipo": "entreno",          // entreno | caminata | libre | descanso | medicion
    "titulo": "El circuito que sube", "etiqueta": "Entreno D · Metabólico",
    "minutos": 23, "imagen": "img/dia-12.webp",
    "intro": "El mismo circuito del Día 5, más intenso…",
    "bloques": [{ "tipo": "circuito", "rondas": {"inicial":2,"intermedio":3,"avanzado":3},
                  "trabajo": 40, "pausa": 20, "ejercicios": ["sentadilla","escaladores"] }],
    "comer": "Un vaso de agua antes de cada comida", "cabeza": "Nunca dos veces seguidas",
    "mision": "Hacé el entreno D completo en tu nivel", "manana": "El desayuno que te deja satisfecha"
  }],
  "ejercicios": { "sentadilla": { "nombre": "Sentadilla", "fotos": ["img/sentadilla-1.webp","img/sentadilla-2.webp"],
      "pasos": ["…"], "errores": ["…"], "niveles": {"inicial":"A la silla","intermedio":"Libre","avanzado":"Pausa abajo 3 s"} } },
  "biblioteca": { "recetas": [], "guias": [] },
  "hitos": [{ "jornada": 7, "titulo": "Semana 1 completa", "desbloquea": "receta-secreta-1" }]
}
```

Estado del usuario (en el celular, `localStorage`, con versión):
```json
{ "v": 1, "inicio": "2026-10-12", "nivel": "intermedio", "completadas": [0,1,2],
  "racha": 3, "mediciones": [{"jornada":0,"cintura":82}], "favoritos": [], "ajustes": {"sonido":true,"voz":true} }
```

---

## Fase 2 · Arquitectura UX (🔒)

### 2.1 Navegación (barra inferior, 5 pestañas máximo)
1. **Hoy**: la única pantalla que importa cada día.
2. **Recorrido**: todas las jornadas por etapa, con estado (hecha, hoy, bloqueada, libre).
3. **Biblioteca**: recetas, ejercicios, guías cortas (el nombre cambia por nicho: Cocina, Plantillas, Frases).
4. **Progreso**: racha, calendario, mediciones, gráfico, logros.
5. **Más**: plan B, ayuda, ajustes, respaldo del progreso, guía en PDF.

### 2.2 Principio rector
**Una acción principal por pantalla.** En Hoy, el botón grande es "Empezar el día 12". Todo lo demás es secundario.

### 2.3 Primer uso (onboarding, ≤ 60 segundos)
1. Bienvenida con la protagonista y la promesa.
2. Quiz de 4–6 preguntas (nivel actual, minutos disponibles, objetivo, limitaciones) → asigna nivel y muestra "Tu plan está listo".
3. Punto de partida: medición inicial opcional + "¿por qué empezás?" (se guarda y se muestra en hitos).
4. Cómo instalarla en la pantalla de inicio (instrucciones distintas para iPhone y Android, detectando el sistema).
5. Directo a Hoy con el Día 0 / Día 1 listo.

---

## Fase 3 · Sistema de diseño

- Tokens de `marca.json` en variables CSS. Modo claro para navegar; **modo oscuro para el reproductor/timer** (foco, menos brillo mientras se entrena).
- Tipografía: display condensada para números (día, timer, contadores); sans legible para texto. Tamaño mínimo de texto 16 px; números grandes de 64–200 px.
- Componentes base: botón principal (pill, 56 px de alto, color accent, sombra de color), tarjeta, chip/etiqueta, anillo de progreso (SVG), barra de segmentos, selector de nivel segmentado, hoja inferior (bottom sheet), toast, tarjeta de logro.
- Áreas táctiles ≥ 44×44 px. Espaciado en múltiplos de 4 px. Radio de esquina consistente (20–28 px).
- **Microinteracciones** (son las que hacen que se sienta premium):
  - Anillo que se llena animado al abrir Hoy.
  - Botón con leve escala al tocar (0.97) y vibración corta (`navigator.vibrate(10)` donde exista).
  - Check de jornada con animación + confeti sutil.
  - Transiciones entre pantallas: deslizamiento lateral 250 ms, ease-out.
  - Números del timer con pulso al cambiar.
  - Respetar `prefers-reduced-motion`.

---

## Fase 4 · Pantallas clave

### 4.1 Hoy
- Saludo + racha ("3 días seguidos" en chip pop) + anillo "12 de 31".
- Tarjeta hero del día: foto, "Día 12 · Semana 2", título con gancho, chips (23 min, Metabólico).
- Botón principal "Empezar el día 12".
- Semana actual en fila de chips (hechos en pop, hoy con borde accent, futuros neutros).
- Accesos rápidos: comida del día, frase de cabeza, plan B.
- Si ya completó hoy: estado de celebración + adelanto de mañana + algo para explorar en la biblioteca.

### 4.2 Detalle de la jornada
Foto a sangre, número gigante del día, título, etiqueta, intro corta, selector de nivel, lista de bloques/ejercicios con miniatura, misión con casilla, botón "Empezar".

### 4.3 Reproductor guiado (timer)
- Fondo oscuro. Arriba: salir, tiempo restante total, barra de progreso.
- Centro: fase ("TRABAJO · RONDA 1 DE 3"), número gigante, foto/animación del ejercicio en dos tiempos alternando, nombre, indicación corta, "Después: Escaladores".
- Abajo: Atrás / Pausa (principal, color pop) / Saltar.
- Cuenta regresiva de 3 s antes de cada bloque; pitidos en los últimos 3 s; voz opcional que dice el ejercicio (`speechSynthesis`, idioma es-AR/es-MX según la voz).
- **Wake Lock API** para que la pantalla no se apague; si no está disponible, avisá.
- Al terminar: pantalla de celebración (confeti, minutos hechos, racha actualizada, "Marcar como hecho").

### 4.4 Recorrido
Lista por etapa con encabezado (nombre + objetivo), tarjetas de jornada con estado. Las jornadas futuras se ven (genera anticipación) pero se abren igual: no bloquees contenido pagado, solo marcá "recomendado hoy".

### 4.5 Biblioteca
Buscador + filtros por chips (desayuno, almuerzo, ≤ 15 min, veggie). Tarjetas con foto. Detalle con foto hero, datos, ingredientes/pasos, favorito. Comparaciones "de siempre vs versión nueva" con slider antes/después.

### 4.6 Progreso
Racha y mejor racha, calendario tipo heatmap, mediciones con gráfico de línea (SVG propio, sin librerías pesadas), logros desbloqueados, "tu por qué" escrito el primer día.

### 4.7 Más
Plan B (versión exprés), "Si te caíste" (protocolo de regreso), ayuda/FAQ, ajustes (sonido, voz, nivel), **respaldo del progreso** (código para copiar y restaurar en otro celular), guía en PDF, aviso legal del nicho.

---

## Fase 5 · Motor de motivación

1. **Racha con regla antiabandono**: un día perdido no la rompe si al día siguiente vuelve ("comodín"); dos seguidos sí. Comunicalo así: "Podés fallar un día, nunca dos seguidos".
2. **Anillo de progreso** siempre visible en Hoy.
3. **Hitos por etapa** con pantalla de celebración, lenguaje de identidad y desbloqueo de un regalo (receta secreta, rutina bonus).
4. **Adelanto de mañana** al completar el día.
5. **Plan B** a un toque cuando el día viene complicado.
6. **Recordatorio diario**: botón "Agregar recordatorio a mi calendario" que descarga un `.ics` con alarma diaria a la hora elegida (funciona en iPhone y Android sin servidor). Push solo si hay backend.
7. **Tarjeta para compartir**: al cerrar cada semana, generar una imagen (canvas) "Semana 2 completa · Reto Cintura 28" con la marca, para historias de Instagram (marketing orgánico gratis).
8. **Frase del día** de la protagonista en Hoy.
9. **Volver después de días sin entrar**: pantalla amable "Te estábamos esperando" + retomar donde quedó, nunca culpa.
10. **Graduación**: certificado con nombre, medición inicial vs final, pedido de testimonio y puente al siguiente producto.

---

## Fase 6 · Técnica

- **Stack por defecto**: HTML + CSS + JavaScript sin framework, o Vite + Preact/React si la app es grande. JS total < 150 KB comprimido.
- **SPA con rutas por hash** (`#/hoy`, `#/dia/12`) para que funcione en cualquier hosting estático y con el botón atrás del celular.
- **PWA**: `manifest.webmanifest` (nombre, íconos 192/512 y maskable, `display: standalone`, `theme_color`), service worker que cachea la app y las imágenes para usar sin conexión.
- **Imágenes**: WebP, `loading="lazy"`, tamaños por uso (hero 1200 px, miniatura 400 px), `width`/`height` declarados.
- **Estado**: `localStorage` con try/catch, clave versionada (`r28:v1`) y migración si cambia la versión. Exportar/importar como código base64.
- **Acceso**: ruta privada con nombre largo no adivinable + código de acceso simple en el primer ingreso (no es seguridad fuerte; si se comparte mucho, mover a área de miembros de Hotmart). `noindex` en todas las páginas.
- **Deploy**: Vercel (estático). Cabeceras de caché largas para imágenes, cortas para `index.html` y el service worker.
- **Analítica**: Microsoft Clarity o similar para ver dónde se traban (sin datos personales).

---

## Fase 7 · Calidad

### 7.1 Pruebas obligatorias
- Anchos 360, 390, 414 y 430 px; iPhone con notch y Android de gama baja.
- Safari iOS: usar `100dvh` (no `100vh`), `env(safe-area-inset-*)` para notch y barra inferior, el audio necesita un toque del usuario antes de sonar (desbloquealo al tocar "Empezar"), Wake Lock solo desde iOS 16.4, `localStorage` puede borrarse en modo privado o tras semanas sin uso (por eso el código de respaldo).
- Sin conexión: abrir la app en modo avión después de la primera visita.
- Botón atrás de Android: nunca debe sacar de la app desde una pantalla interna.
- Rendimiento: Lighthouse móvil ≥ 90 en rendimiento y accesibilidad. Primera carga < 2,5 s en 4G.
- Accesibilidad: contraste ≥ 4.5:1, etiquetas en botones de solo ícono, foco visible, orden de lectura lógico.
- Prueba de usuario: una persona ajena completa el Día 1 sin preguntar nada.

### 7.2 Contenido
- La app cumple todos los números de la página de venta.
- Misma voz y glosario que la guía.
- Aviso del nicho visible en Más y en el primer uso.

---

## Fase 8 · Activos para vender la app

- **Capturas** de 6 pantallas (Hoy, Día, Timer, Biblioteca, Progreso, Celebración) a 780×1688 con datos de ejemplo lindos (racha 3, día 12, anillo a mitad).
- **Mockups** en celulares (para la página de venta y el mockup "todo incluido").
- **Motion graphic** de 12–15 s en loop (1080×1350 para la página, 1080×1920 para anuncios): HTML con las capturas reales dentro de un celular, animado por código (anillo que se llena, toque en el botón, transición al día, timer contando, cierre con varios celulares y CTA), renderizado cuadro a cuadro con Playwright y codificado con ffmpeg en MP4 + WebM + póster. **Cero créditos de IA** y los textos de la interfaz quedan nítidos.
- Texto para la sección "No es un PDF, es tu app" de la página de venta.

---

## Fase 9 · Entrega

- Carpeta `app/` lista para deploy + instrucciones de deploy en 5 pasos.
- `data/` separado para que actualizar contenido no requiera tocar código.
- `LEEME.md` con: cómo agregar una jornada, cómo cambiar imágenes, cómo cambiar el código de acceso, cómo probar.
- Link de prueba publicado y verificado en un celular real.

---

## Errores que no se pueden cometer

1. Que la persona tenga que pensar qué hacer hoy: la pantalla Hoy tiene que responderlo en 2 segundos.
2. Usar `100vh` y que el botón principal quede tapado por la barra de Safari.
3. Ignorar el notch y la barra inferior del iPhone (`safe-area`).
4. Timer que se corta porque se apagó la pantalla (falta Wake Lock) o que no suena en iPhone (audio no desbloqueado).
5. Perder el progreso de la persona: sin versión, sin try/catch o sin código de respaldo.
6. Botón atrás que cierra la app.
7. Contenido escrito dentro del código en vez de en JSON.
8. Imágenes de 3 MB sin comprimir que hacen que tarde 10 segundos.
9. Bloquear días ya pagados con candados: frustra y genera reembolsos.
10. Diseño de plantilla genérica (Bootstrap, emojis como íconos, sombras grises por todos lados).
11. Diferente voz, colores o protagonista que la guía y la página.
12. Que no cumpla un número prometido en la página de venta.
13. Culpar a la persona cuando vuelve después de días sin entrar.
14. Pedir datos personales o crear cuentas sin necesidad.
15. No probar en un celular real antes de entregar.

---

## Adaptación por nicho

| Nicho | Acción principal | Reproductor | Biblioteca | Progreso |
|---|---|---|---|---|
| Fitness | Entreno del día | Timer por intervalos con voz | Recetas, ejercicios | Medidas, racha, minutos |
| Cocina para vender | Receta del día | Modo cocina paso a paso (pantalla siempre encendida, temporizadores por paso) | Recetas, costeo | Recetas hechas, ventas registradas |
| Finanzas | Tarea del día | Checklist guiado | Plantillas, scripts | Deuda restante, ahorro acumulado |
| Idiomas | Lección del día | Tarjetas con audio y repetición | Frases, vocabulario | Palabras aprendidas, racha |
| Bienestar / meditación | Práctica del día | Audio guiado con respiración animada | Prácticas por duración | Minutos, días |
| Manualidades | Proyecto del paso | Paso a paso con fotos y video | Moldes | Proyectos terminados |
| Productividad | Bloque de foco | Pomodoro con sonido ambiente | Plantillas | Horas de foco |
