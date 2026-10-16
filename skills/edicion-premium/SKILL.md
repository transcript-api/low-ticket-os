---
name: "edicion-premium"
description: "Editar videos reales o generados con IA con nivel de agencia: capas 3D con la persona recortada, hologramas en órbita, vidrio, fichas editoriales, subtítulos limpios y look de película (kit Remotion), más la checklist de retención y políticas para anuncios de Meta y Reels."
metadata:
  version: "2.0"
  actualizado: "2026-10-15"
---

# Edición premium (kit Remotion)

Esta skill edita videos (personas hablando a cámara, testimonios, anuncios, inmobiliario, productos, videos generados con IA) con el nivel de los mejores editores de reels: **prolijo, fluido y en capas**, sin efectos baratos. Usa el **kit-edicion-premium** (proyecto Remotion con componentes listos y scripts).

**El estándar:** cada cuadro parece diseñado. La persona queda adelante, los gráficos pasan por detrás y por delante de ella, todo se mueve con suavidad, y cada 2–4 segundos pasa algo nuevo que mantiene mirando. Si un efecto no suma claridad o deseo, se saca.

---

## 1. Principios

1. **Capas, no stickers.** Orden fijo: fondo → gráficos de atrás → persona recortada → gráficos de adelante → subtítulos → look. Es lo que separa un 3D prolijo de uno trucho.
2. **Una idea por pantalla.** Un gráfico protagonista por vez. Nunca tres efectos compitiendo.
3. **Movimiento con física.** Entradas con desenfoque + subida corta (0,3–0,6 s), resortes suaves, nada de rebotes exagerados ni giros de 360° sin motivo.
4. **Ritmo de retención.** Gancho visual en el primer segundo. Cambio visual cada 2–4 s (gráfico nuevo, zoom, corte, inserto). Cortes de silencios siempre.
5. **Contenido real.** Los gráficos muestran cosas verdaderas del producto o del caso (capturas, números, fotos de clientas con permiso).
6. **Un estilo por video.** Una paleta, un par tipográfico, un look. Se elige al principio y no se cambia.

---

## 2. Flujo de trabajo

| Paso | Qué se hace | Herramienta |
|---|---|---|
| 1. Brief | Objetivo del video, público, mensaje en una frase, CTA, formato (9:16 / 4:5 / 16:9), estilo | Preguntar o usar una receta (sección 4) |
| 2. Preparar | Cortar, encuadrar 1080×1920, 30 fps, normalizar audio | `scripts/prep.sh` |
| 3. Silencios | Quitar pausas largas | `scripts/cortar-silencios.sh` |
| 4. Transcribir | Palabras con tiempos para subtítulos y para ubicar gráficos | `scripts/transcribe.cjs` (whisper.cpp) |
| 5. Recortar persona | Video con transparencia de la persona para las capas + seguimiento de la cabeza | `scripts/matte.cjs` |
| 6. Plan de edición | Tabla segundo a segundo: qué se dice → qué gráfico aparece → en qué capa | Ver 2.1 |
| 7. Armar | Composición en `src/` con los componentes del kit | Remotion |
| 8. Previsualizar | Renderizar 4–6 cuadros clave y revisarlos antes del video completo | `npx remotion still` |
| 9. Renderizar | Video completo | `npx remotion render` |
| 10. Look final | Grade, halo, grano | `scripts/look.sh` |
| 11. Entregar | MP4 H.264, 1080×1920, -14 LUFS, + versión 4:5 si es para feed | ffmpeg |

### 2.1 Plantilla del plan de edición
| Tiempo | Dice | Gráfico | Capa | Componente |
|---|---|---|---|---|
| 0,0–3,0 | "¿Cuántos lunes empezaste este año?" | Text hook fijo desde el frame 0 + calendario con lunes tachados | adelante | `KineticTitle` |
| 3,0–6,0 | "el problema no eras vos: era el plan" | Palabra clave en acento + zoom lento | texto | `Captions` |
| 6,0–10,0 | "abrís la app y te dice qué toca hoy" | Celular flotante con la app real | adelante | `ScreenInsert` |

Mostrá el plan y esperá el OK antes de renderizar el video completo.

---

## 3. Componentes del kit

| Componente | Para qué | Cuándo usarlo | Ajustes clave |
|---|---|---|---|
| `Capas` | Estructura de capas con persona recortada | Siempre | `persona`, `oscurecerFondo` (0,1–0,3), `zoom` |
| `HoloOrbit` | Tarjetas de vidrio girando alrededor de la cabeza (sigue a la persona con `seguimiento`) | Funciones de un producto, capturas de la app, logos, lista de beneficios; antes/después solo de clientas reales con permiso, y nunca en anuncios de Meta | `seguimiento`, `bajada`, `radioRel`, `inclinacion`, `despejarCara` |
| `GlassStack` | Paneles de vidrio en profundidad con título e íconos | Momento "alto nivel", presentación de un sistema o método | `titulo`, `iconos`, `centro` |
| `FloatingIcons` | Íconos en arco con haz de luz arriba de la cabeza | Cuando nombra herramientas o pasos | `iconos`, `centro` |
| `EditorialCard` | Ficha editorial: mayúsculas espaciadas, serif fina, número grande, ubicación | Inmobiliario, lujo, datos clave, nombre del producto | `kicker`, `titulo`, `numero`, `unidad`, `lugar`, `alinear` |
| `ScreenInsert` | Celular o pantalla flotante en 3D | Mostrar la app, una captura, un resultado | `src`, `etiqueta`, posición |
| `KineticTitle` | Título que entra palabra por palabra, con palabra clave en serif itálica | Gancho, cambio de sección, cierre | `lineas`, `claves` |
| `Captions` | Subtítulos de 1–3 palabras con palabra clave en acento | Siempre que haya voz | `porGrupo`, `y`, `tam` |
| `Look` | Viñeta y grano animado livianos | Siempre (el grade fuerte va en `look.sh`) | `grano`, `vineta` |

### 3.1 Ubicación segura en 9:16 (Reels, TikTok, Meta Ads)
- Nada importante en el **14 % de arriba** ni en el **35 % de abajo** (ahí van los botones y el texto de la red).
- Subtítulos entre el 62 % y el 72 % del alto (≈ y 1190–1380 en 1920).
- Margen lateral de 80 px mínimo.
- Gráficos alrededor de la cabeza: centro del anillo a la altura de la frente o un poco arriba; el anillo no tapa ojos ni boca (`despejarCara`).
- Funciona mejor con la persona a distancia normal (pecho o cintura para arriba); en selfies muy cerca la cabeza se sale del cuadro y el anillo queda quieto arriba.

---

## 4. Recetas (para cuando no se sabe cómo explicarlo)

Si el pedido es vago ("hacelo lindo", "editalo premium"), ofrecé estas recetas por número y aplicá la elegida.

1. **Testimonio con antes y después en órbita** — la clienta habla; fotos/medidas del Día 1 y Día 28 giran alrededor de su cabeza; subtítulos con el número en acento; cierre con la marca. **Solo con clienta real, permiso escrito y cifra real; solo para página u orgánico.** En anuncios de Meta de fitness o salud, antes/después y medidas están prohibidos: usá la receta 2.
2. **Anuncio de app** — presentadora a cámara; capturas de la app orbitan; inserto de celular cuando dice "la app"; título cinético final con el CTA.
3. **Inmobiliario editorial** — tomas del edificio o el depto; ficha editorial (nombre, pisos, barrio); presentador en recuadro con bordes redondeados si habla; look cálido y sobrio.
4. **Tutorial con capturas** — persona a cámara; pantallas flotantes con cada paso; íconos en arco cuando nombra herramientas.
5. **Gancho cinético** — primeros 2 s con título grande palabra por palabra sobre el video oscurecido, después entra la persona.
6. **Comparativa A vs B** — dos recuadros apilados (arriba/abajo) con etiqueta de cada opción y logos en 3D flotando al lado de la cara; veredicto final.
7. **Lanzamiento de producto** — producto en pantalla flotante o foto recortada, pila de vidrio con el nombre, datos en ficha editorial, CTA.

---

## 5. Tipografía y color

**Pares tipográficos del kit** (elegí uno por video):
| Estilo | Títulos | Texto | Acento | Uso |
|---|---|---|---|---|
| `holo` | Inter Tight 800 | Inter Tight 700 | Instrument Serif itálica | Tech, creadores, apps |
| `editorial` | Cormorant Garamond 500 | Manrope 600 (mayúsculas espaciadas) | Cormorant | Inmobiliario, lujo, moda |
| `reto` | Bricolage Grotesque 800 | Inter Tight 700 | Instrument Serif itálica | Marca Reto Cintura 28 |

**Reglas:**
- Subtítulos en sans de peso 700–800, minúscula o tipo oración, interletra apenas cerrada. Sombra suave difusa, nunca contorno.
- Serif solo fina y elegante (Cormorant, Instrument Serif), en tamaños grandes o itálica de acento. Números siempre alineados (lining).
- Mayúsculas espaciadas (0,4 em) solo para etiquetas cortas (kicker, unidad).
- Un color de acento por video; el resto blanco o tinta.

**Prohibido:** letras doradas o con degradé metálico · serif pesadas tipo slab o "display bold" de carrusel · contornos gruesos y sombras duras · fuentes "de meme" (Impact, Comic, Bebas con contorno) · arcoíris de colores · emojis como decoración en los subtítulos · texto en caja de color saturado detrás de cada palabra.

---

## 6. Recorte de fondo (persona)

- `scripts/matte.cjs` usa MediaPipe (funciona sin internet), refina bordes con la imagen original, suaviza en el tiempo y genera `src/datos/seguimiento.json` para que los gráficos sigan la cabeza. Bien para persona a cámara con fondo normal.
- **Mejor calidad en tu PC:** si hay internet y GPU, usar un modelo de matting de video de mayor calidad (por ejemplo Robust Video Matting o BiRefNet vía rembg) y exportar el mismo `person.webm` con transparencia. El kit usa el archivo igual.
- Revisá 3 cuadros del recorte: pelo, manos y bordes contra cielo o paredes claras. Si el borde parpadea, subí el suavizado temporal en `refine.py`.
- Sin recorte, los gráficos van solo adelante o al costado de la persona (nunca "detrás" falso).

---

## 7. Look final

`scripts/look.sh entrada salida [grano]`: grade cálido con negros apenas lavados, halo en las luces, viñeta suave, grano animado. Grano 8–10 para marca, 12–16 para creador/UGC. Mismo look para todos los clips del video. Mostrá un cuadro antes y después antes de procesar todo.

---

## 8. Ajustes y feedback

- Aplicá cada corrección como cambio concreto en el plan de edición (tiempo + componente + valor) y re-renderizá solo esos segundos primero (`--frames=a-b`).
- Si la persona dice "no me gusta" sin explicar, ofrecé 2 alternativas visuales en cuadros fijos (por ejemplo, órbita más chica vs. ficha editorial) y que elija.

---

## 9. Instalación en la PC (una sola vez)

Pegar en Claude Code, dentro de la carpeta del kit:

> Quiero editar videos acá. Confirmá qué está instalado y si falta, instalalo: Node.js LTS, FFmpeg, whisper.cpp con el modelo medium para español, Python 3 con opencv-contrib-python, y las dependencias del proyecto (`npm install`, `npx playwright install chromium`). Al final corré `npx remotion still src/index.ts DemoOrbita out/test.png --frame=60` y mostrame una tabla con cada herramienta y si funciona.

---

## 10. Edición para anuncios pagos y Reels (retención y conversión)

Lo que agregó la tanda de transcripciones de octubre 2026 (base: `conocimiento/organico-produccion/formatos-y-edicion.md`, FE). **La edición multiplica, no salva:** si el anuncio no funciona, el orden de diagnóstico es idea → gancho → guion → edición → formato.

**Segundo 0:** imagen ya en movimiento + gancho dicho + **text hook** escrito, fijo 3 s o más, en el tercio superior dentro de la zona segura. Toca un dolor o abre una pregunta. Sin saludo, sin logo, sin frames quietos del generador.

**Checklist de 15 puntos antes de subir cada anuncio** (si falla uno, no sale):
1. Frame 0 en movimiento o llamativo; sin saludo ni logo.
2. El gancho toca un dolor o abre una pregunta, y el cuerpo cumple exactamente lo que promete.
3. Text hook desde el frame 0, fijo ≥ 3 s, sin pisarse con los subtítulos.
4. Subtítulos grandes, 2–4 palabras por línea, revisados a mano (tildes, voseo, números).
5. Silenciado se entiende qué es y qué se ofrece.
6. Solo con audio, sin mirar, también se entiende.
7. Cero silencios muertos, arranques en falso o planos sin función.
8. Voz generada al ritmo final (1,1–1,2×) con pausas humanas; no suena a locutora; lip-sync sobre la voz final. No acelerar el video para compensar.
9. Música al 3–5 %, con licencia; la voz siempre se entiende.
10. Algo nuevo cada 2–4 s (máximo 4–6 s); solo transiciones aprobadas.
11. Toda afirmación del producto con prueba real en pantalla (app, receta, calendario). Números y textos superpuestos reales; cero testimonios, notificaciones o clientas inventadas.
12. Precio visual congruente con el ticket: luz natural, ropa sin marcas, tipografía de la marca, un acento; precio en pantalla = precio vigente, o ninguno.
13. La presentadora IA presenta y no testimonia; manos, dientes y textos sin artefactos; marcada como IA según la política vigente.
14. Políticas: sin antes/después, cuerpos comparados ni zoom a zonas del cuerpo; sin atributos personales de quien mira; sin kilos ni plazos; la página dice lo mismo que el anuncio.
15. Técnica: 1080×1920 nativo, render desde la composición con sus props, nombre `C<concepto>-E<ejecución>-V<variante>` con ID.

**Ficha técnica:** 1080×1920, 30 fps, H.264, AAC; voz normalizada; subtítulos por encima del 35 % inferior; `musicVolume` 0,03–0,05; sin marcas de agua de otras apps; sin precio dentro de la imagen salvo decisión explícita sincronizada con la página.

**Variantes para Andromeda:** cada creativo nuevo es otro concepto u otra ejecución visible (formato, escena, persona). Espejo, ×1,05, cambio de color o de fondo no cuentan como creativos distintos.

**El formato barato primero:** POV con manos reales y demostración del producto rinden sin créditos de video. El estilo "dynamic" (muchos efectos y cambios) se reserva para refrescar ganadores.

**Duración y producto:** anuncio 15–30 s con el producto entre el 35 y el 60 % y CTA igual al botón; Reel orgánico 20–60 s con el producto en el último 20–30 % y palabra clave.

---

## Errores que no se pueden cometer

1. Gráficos pegados encima de la cara sin capas (parece sticker).
2. Más de un efecto protagonista al mismo tiempo.
3. Texto o gráficos en las zonas tapadas por la interfaz de Reels/TikTok.
4. Tipografías prohibidas (sección 5), dorado o contornos.
5. Animaciones bruscas, rebotes exagerados o giros sin motivo.
6. Silencios largos sin cortar; más de 4 s sin ningún cambio visual.
7. Recorte de persona con bordes que parpadean.
8. Mezclar estilos o colores de acento dentro del mismo video.
9. Renderizar el video completo sin revisar cuadros clave antes.
10. Inventar resultados en gráficos (medidas, antes/después) que no sean reales.
11. Antes/después, medidas o cifras de clientas en anuncios de Meta (prohibido en fitness y salud).
12. Presentadora IA que dice "yo", "me funcionó" o muestra una "vida" inventada.
13. Text hook ausente en los primeros 3 s, o un gancho que el cuerpo no cumple.
14. Variantes de espejo, velocidad o color presentadas como creativos nuevos.
