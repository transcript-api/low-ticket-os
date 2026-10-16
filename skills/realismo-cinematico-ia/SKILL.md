---
name: "realismo-cinematico-ia"
description: "Base para que cualquier imagen o video generado con IA (Veo, Kling, Seedance, Sora, Runway, Higgsfield) parezca filmado por una persona real: cámara, luz, piel, casting, física, película y post premium."
metadata:
  version: "2.1"
  actualizado: "2026-10-15"
---

# Realismo cinematográfico con IA

Esta es la skill base de todos los videos e imágenes generados con IA. Las skills de género (`video-ugc-ia`, `video-editorial-ia`, `video-marca-ia`) la usan, `ai-cinematic-director` arma el shot list y la continuidad, y `edicion-premium` termina el video. Esta skill decide **cómo se ve** cada plano: que nadie pueda decir "esto es IA".

**Regla madre: la perfección delata a la IA. La realidad tiene una cámara, una luz, una física y una imperfección concretas.** Cada prompt describe una filmación real, no "una imagen linda".

---

## 1. Las 7 capas de un plano real

Todo prompt de imagen o video define estas 7 capas, en este orden. Si falta una, el modelo la inventa y ahí aparece el "look IA".

| # | Capa | Pregunta | Ejemplo |
|---|---|---|---|
| 1 | **Dispositivo y formato** | ¿Con qué se filmó? | iPhone 15 Pro cámara frontal 0,5x, vertical 9:16 · Sony FX3 con 35 mm f/1.8 · Bolex 16 mm · cámara descartable con flash |
| 2 | **Quién opera la cámara y desde qué ángulo** | ¿Quién sostiene la cámara, cómo se mueve y desde dónde mira? (ver biblioteca de ángulos, sección 11) | Ella misma, brazo extendido, caminando · amiga detrás, cámara en mano · cámara apoyada en el piso, a ras de suelo |
| 3 | **Sujeto y acción** | ¿Quién es (casting explícito) y qué hace, en una sola acción? | Mujer latina de 30 años, piel trigüeña, pelo castaño; toma un sorbo de matcha y se ríe mirando a cámara |
| 4 | **Lugar con vida** | ¿Dónde, con qué desorden real? | Vereda de Palermo a las 18:40, autos estacionados, hojas en el piso, un ciclista pasando al fondo |
| 5 | **Luz motivada** | ¿Qué fuente real ilumina y desde dónde? | Sol bajo a contraluz a la izquierda, destello en la lente, rebote cálido en la cara desde la vereda |
| 6 | **Textura humana** | ¿Qué imperfecciones tiene? | Poros visibles, pecas, brillo de transpiración en la frente, pelos sueltos que se mueven con el viento, sin maquillaje |
| 7 | **Película y emulsión** | ¿Cómo graba el sensor? | Grano fino, halo cálido en las luces altas, negros apenas lavados, leve viñeta, exposición imperfecta |

---

## 2. Cámara: elegí un dispositivo, no "cinematográfico"

Nunca escribas "cinematic", "8K", "ultra realistic", "hyperdetailed", "masterpiece". Son las palabras que producen el look IA. Describí la cámara real:

| Look buscado | Dispositivo / lente | Notas |
|---|---|---|
| UGC selfie de influencer | Cámara frontal de iPhone, 0,5x (≈13–16 mm equivalente) | Distorsión en bordes, cara un poco agrandada si está cerca, foco en todo |
| UGC filmado por amiga | Cámara trasera de iPhone 1x (≈24–26 mm), modo cine | Temblor de mano, reencuadres, foco que busca |
| Documental de marca | Sony FX3 / Canon C70 con 35 mm f/2 | Profundidad de campo suave, movimiento de gimbal humano |
| Editorial de moda | Medio formato, 80 mm f/2.8, o 50 mm en 35 mm | Encuadre pensado, poses, luz de estudio o de ventana dura |
| Nostalgia / película | Bolex 16 mm, Super 8, Portra 400 | Grano grueso, gate weave (el cuadro tiembla), colores cálidos |
| Flash de fiesta | Cámara compacta con flash directo (Contax T2, descartable) | Sombra dura detrás, piel brillante, fondo oscuro |
| Producto premium | 100 mm macro, f/5.6, luz de estudio | Detalles de textura, reflejos controlados |

**Movimiento de cámara humano** (elegí uno por plano): brazo extendido que se balancea al caminar · cámara en mano con micro temblor · paneo lento que se pasa un poco y corrige · push-in a pie (no zoom) · cámara apoyada que alguien toca. Evitá los movimientos "flotantes" perfectos salvo que la idea sea un dolly real ("dolly lento sobre rieles, movimiento constante").

**Encuadre imperfecto:** horizonte apenas torcido, sujeto un poco descentrado, algo que tapa un borde del cuadro (un hombro, el brazo de la selfie, una hoja), cabeza cortada arriba en selfies cercanas.

---

## 3. Luz: una fuente real y su lógica

- **Una fuente principal motivada** (sol, ventana, lámpara, neón, flash) y su dirección. Las sombras tienen que coincidir.
- **Hora del día exacta**: "18:40, sol a 10° sobre el horizonte" da mejor resultado que "golden hour".
- **Contraluz** con destello de lente y bordes del pelo encendidos = realismo inmediato.
- **Luces que queman**: ventanas sobreexpuestas, cielo blanco; la IA tiende a mostrar todo bien expuesto (look HDR falso).
- **Color de la luz**: sol bajo cálido, sombra azulada, fluorescente verdosa. Mezclar temperaturas es real.
- Evitá: "studio lighting", "soft lighting" genérico, "perfect lighting", "volumetric light" (salvo que haya polvo o humo real).

---

## 4. Personas reales

- **Casting por defecto (obligatorio en cada prompt de persona)**: mujeres y hombres latinoamericanos acordes al público de la marca (por defecto: mujer latina rioplatense o latinoamericana mestiza, piel trigüeña clara a media, pelo castaño u oscuro, rasgos latinos naturales). Describí siempre tono de piel, rasgos, pelo y edad de forma explícita; nunca dejes la etnia sin especificar, porque el modelo elige al azar. Nunca casting asiático salvo que el brief lo pida. Si la marca pide otro casting, el brief manda.
- **Piel**: poros, pecas, lunares, vello facial fino (peach fuzz), textura en la nariz, brillo de transpiración o crema, ojeras leves, marcas de la ropa. Sin maquillaje o mínimo.
- **Asimetría**: sonrisa más alta de un lado, un ojo apenas más cerrado, pelo que cae distinto.
- **Expresión natural**: medio segundo antes o después de la sonrisa, hablando ("mid-word"), mirando algo fuera de cuadro, riéndose con los ojos. Frente lisa y cejas relajadas: nada de cejas levantadas ni frente arrugada.
- **Pelo**: pelos sueltos, frizz con la luz de contraluz, mechones pegados por la transpiración. Nunca "de peluquería": broche medio caído, rodete deshecho, raíz crecida.
- **Ropa con uso**: arrugas, pliegues, un poco de pelusa, ropa deportiva que marca, sin logos ni estampas.
- **Manos**: pocas y ocupadas (sosteniendo vaso, celular, correa). Manos sueltas en primer plano = riesgo de dedos raros.
- **Identidad consistente**: misma persona en todos los planos usando una referencia fija (Soul ID entrenado, o una foto maestra + Seedream, sección 12). Generá primero la imagen y después anímala (imagen → video).
- **Nichos fitness**: siempre ropa deportiva (conjuntos de distintos colores, musculosa y calza, campera deportiva abierta). Nada de vestidos ni ropa de calle.

### 4.1 Anti-pose: lo que hace que una persona "parezca IA"

Aprendido con feedback real: la gente rechaza al instante estas señales aunque la piel esté perfecta.

| Se ve IA | Se ve real |
|---|---|
| Centrada, simétrica, mirando a cámara como modelo | Descentrada, encuadre torcido, el brazo de la selfie o un hombro cortando el cuadro |
| Sonrisa de catálogo | Agarrada en medio de una palabra, media risa, mirada cansada o irónica |
| Postura erguida de pose | Relajada, medio encorvada, apoyada en un codo, peso en una cadera |
| Objeto mostrado a cámara (vestido en percha, producto al lente) | Objeto en uso: el mate en la mano mientras habla, el tenedor apoyado en el plato |
| Pelo de peluquería y maquillaje | Frizz, mechones sueltos, sin maquillaje, ojeras leves |
| Lugar ordenado de catálogo | Platos en la pileta, ropa en la silla, cama deshecha |

---

## 5. Lugares con vida

- Nombrá un lugar concreto con su desorden: tazas en la mesa, cables, cartel borroso, gente al fondo desenfocada, autos reales sin marca visible.
- **Profundidad**: algo cerca (primer plano), el sujeto, y un fondo con vida.
- **Clima y aire**: viento en el pelo, polvo en la luz, vapor del café, reflejos en vidrios.
- Evitá lugares "perfectos": livings vacíos de catálogo, gimnasios sin gente, calles sin basura.
- **Objetos culturales**: describilos físicamente o el modelo los inventa. Ej.: "traditional Argentine mate: a small round gourd cup wrapped in dark brown leather, packed with green yerba leaves, a silver metal bombilla" (si no, sale un café helado con sorbete).

---

## 6. Física y movimiento en video

- **Una acción por plano**, simple y física: tomar, girar, caminar, reírse, apoyar. Planos de 3–8 segundos.
- Describí **velocidad real**: "a velocidad normal", "camina rápido". Si no, muchos modelos ponen cámara lenta por defecto.
- **Peso y causa**: el vaso tiene hielo que se mueve, el pelo reacciona al giro, la tela sigue el cuerpo.
- **Cámara y sujeto se mueven distinto**: si los dos flotan igual, se nota.
- Para hablar a cámara: "habla de forma natural, labios sincronizados, gestos con una mano". El diálogo exacto va entre comillas y con el acento pedido (ej.: "Rioplatense Argentine Spanish, porteño intonation, voseo").
- Evitá en el mismo plano: transformaciones, varias personas haciendo acciones distintas, texto que tiene que leerse, logos.

---

## 7. Gramática universal de prompts (sirve para cualquier modelo)

### 7.1 Prompt de imagen (keyframe)
```
[Dispositivo + lente + formato]. [Quién sostiene la cámara + ÁNGULO de la biblioteca (sección 11)].
[Sujeto: casting explícito (edad, tono de piel, rasgos, pelo), ropa con detalle] [acción congelada en el instante, mid-word].
[Lugar concreto con detalles de vida], [hora exacta].
[Luz: fuente, dirección, color, efectos (destello, sombras duras, luces quemadas)].
[Textura: piel sin maquillaje, pelo con frizz, ropa con uso]. [Película: grano, halo, exposición imperfecta].
[Encuadre: composición imperfecta, qué tapa el borde].
```

### 7.2 Prompt de video (imagen → video)
Partí siempre de la imagen aprobada y describí solo lo que cambia:
```
Single continuous shot, real-time speed, no cuts. [Movimiento de cámara humano y su causa] mientras [sujeto hace UNA acción a velocidad real].
[Reacción física del entorno: pelo, tela, luz, gente al fondo].
[Si habla: tono + "diálogo exacto" + acento + voz]. Relaxed brows, smooth forehead, no eyebrow raising.
Keep her face, hair, outfit, setting and lighting exactly as in the start frame. Audio: only her voice and [ambiente]. No music, no subtitles, no text on screen.
```

### 7.3 Palabras que sí y que no

| Usar | Evitar |
|---|---|
| "foto tomada con iPhone 0,5x", "16 mm film", "Portra 400" | "cinematic", "8K", "4K", "HDR", "ultra realistic", "hyperrealistic" |
| "luz de ventana dura desde la izquierda" | "perfect lighting", "studio lighting", "dramatic lighting" |
| "poros, pecas, vello fino, sin maquillaje" | "flawless skin", "beautiful", "perfect face" |
| "horizonte apenas torcido, encuadre descentrado" | "centered composition", "symmetrical" |
| "grano fino, halo en las luces, exposición imperfecta" | "sharp", "crisp", "hyperdetailed", "masterpiece" |
| "a velocidad normal, cámara en mano" | "slow motion" (salvo que se quiera), "smooth camera" |
| "camera resting on the table/floor", "video still", "full-bleed image, no borders" | "phone propped on…", "frame from a phone" (dibuja un celular alrededor de la foto) |

### 7.4 Notas por modelo (verificar siempre la versión vigente)
- **Modelos con imagen de referencia o inicio** (Kling, Seedance, Veo, Higgsfield, Runway, Wan): generá primero la imagen con la identidad y el look correctos y usala como frame inicial. Es la forma más confiable de controlar realismo.
- **Modelos con audio nativo**: describí el sonido ambiente real (tráfico, pasos, risa) y el diálogo exacto entre comillas.
- **Duración**: más corto = menos deformaciones. Mejor 3 planos de 5 s que 1 de 15 s.
- Generá **2–4 variantes por plano** y elegí; no edites un plano malo, regeneralo.
- En Higgsfield: elegí el modelo con `models_explore` en modo recomendación y pasá la imagen aprobada como inicio. Avisá el costo en créditos antes de generar en lote.
- **Higgsfield Soul 2.0 (con `soul_id` entrenado)** es lo más barato para keyframes con identidad fija. Trampas comprobadas:
  - El rol de imagen de referencia copia la foto: para variar, usá solo `soul_id`.
  - Identidad corta ("young Argentine woman in her late twenties with a soft youthful face, [pelo], [accesorios fijos]") funciona mejor que una descripción facial larga (la larga envejece y arruga la frente).
  - "phone propped / frame from a phone" → mockup de celular. "Selfie" + "Real iPhone photo" a veces agrega la interfaz de Instagram o de la cámara arriba: revisá siempre el borde superior; si es lo único malo, recortá ~8 % arriba y reescalá a 9:16. No escribas "no interface" (la palabra la invoca).
  - Ropa deportiva muy chica + poses de sentadilla puede caer en el filtro NSFW: usá musculosa y calza.
  - Pedí "plain unbranded" en ropa: si no, aparecen logos y letras.
- **Seedream 5.0 Pro**: el mejor para mover la cámara alrededor de una foto maestra sin perder persona, ropa ni lugar (sección 12). Nano Banana sirve más para ilustración o fotos con mucha textura que para conservar a una persona real.

---

## 8. Detector de "señales de IA" (revisá cada plano)

| Señal | Cómo se arregla |
|---|---|
| Piel de plástico, sin poros | Pedir textura de piel concreta + bajar "beauty"; agregar grano en post |
| Todo bien expuesto (look HDR) | Pedir luces quemadas y sombras profundas con una sola fuente |
| Colores saturados y limpios | Paleta concreta + emulsión de película + grade en post |
| Cara perfectamente simétrica, mirada vacía | Pedir asimetría y expresión intermedia; mirada a un punto concreto |
| Pose de modelo, objeto mostrado a cámara | Anti-pose (4.1): mid-word, encorvada, objeto en uso |
| Cámara flotante y suave | Dispositivo + operador humano + micro temblor |
| Cámara lenta no pedida | "velocidad normal" en el prompt |
| Manos y dedos raros | Manos ocupadas o fuera de cuadro; regenerar |
| Texto o logos deformes (también en ropa y botellas) | Nunca pedir texto; "plain unbranded"; borrar en post si es chico |
| Interfaz de app o celular dibujado | Recortar o regenerar con las palabras correctas (7.3) |
| Gente del fondo que se derrite | Fondo más desenfocado o con menos gente; plano más corto |
| Fondo de catálogo vacío | Desorden y vida concreta del lugar |
| Pelo como casco | Pelos sueltos, viento, frizz con contraluz |
| Objetos que cambian entre planos | Imagen de referencia fija por objeto; foto maestra + Seedream |
| Casting distinto al pedido | Casting explícito en cada prompt + referencia de la persona |

Si un plano tiene 2 o más señales, se regenera.

---

## 9. Post-producción premium (lo que termina de vender el realismo)

El modelo genera limpio; el look premium se termina en post, donde se controla. Orden:

1. **Elegir y recortar**: cortar el primer y último medio segundo (ahí suelen estar los errores).
2. **Escalar** si hace falta (upscale de video) antes del grade.
3. **Grade** (color):
   - Negros apenas levantados (no negro puro), luces altas suaves.
   - Luces cálidas, sombras un poco más frías.
   - Saturación −5 a −10 %; verdes y cyan más apagados.
4. **Halo (halation)**: brillo cálido rojizo alrededor de las luces altas.
5. **Distorsión de lente y viñeta suave** (si el plano lo pide).
6. **Grano** en movimiento (animado, nunca estático), más fuerte en sombras.
7. **Formato**: 4:3 o 9:16 según destino; bordes redondeados tipo pantalla vieja solo como recurso de edición.

### Receta lista con ffmpeg (probada)
```bash
# look.sh entrada salida [grano=12]
G=${3:-12}
ffmpeg -y -i "$1" -filter_complex "\
[0:v]format=gbrp,eq=contrast=0.97:brightness=0.025:saturation=0.93,\
colorbalance=rs=0.03:bs=-0.035:rm=0.015:bm=-0.02:rh=0.04:gh=0.012:bh=-0.03,\
curves=all='0/0.035 0.5/0.51 1/0.975',split=2[base][hl];\
[hl]lutyuv=y='if(gt(val,185),val,0)',gblur=sigma=20,colorchannelmixer=rr=1:gg=0.5:bb=0.28[glow];\
[base][glow]blend=all_mode=screen:all_opacity=0.32,\
lenscorrection=k1=-0.035,vignette=angle=PI/7,\
noise=alls=${G}:allf=t,format=yuv420p" -c:a copy "$2"
```
- Grano 8–10 para marca/producto, 12–16 para UGC y editorial, 18–24 para nostalgia 16 mm.
- Aplicá **el mismo look a todos los planos** del video para que parezcan de la misma cámara.
- Hacé el halo en RGB (`format=gbrp`); el blend screen en YUV tiñe todo de rosa.
- Mostrá antes/después de un cuadro antes de procesar todo.
- El montaje, los gráficos y los subtítulos se hacen con la skill `edicion-premium`.

---

## 10. Flujo de trabajo

1. **Brief del plano**: qué tiene que sentir quien lo ve en 1 segundo.
2. **Elegir el ángulo** de la biblioteca (sección 11) según la función del plano.
3. **Completar las 7 capas** (sección 1), con casting explícito y anti-pose (4.1).
4. **Imagen keyframe** con la identidad fija; revisar con el detector (sección 8), incluido el borde superior.
5. **Más ángulos de la misma escena**: foto maestra + Seedream (sección 12).
6. **Video** desde la imagen, con el prompt de movimiento (7.2). 2–4 variantes.
7. **Selección** con el detector; regenerar lo que falle.
8. **Post** con la receta (sección 9) y edición con `edicion-premium`.
9. **Entrega** en el formato del destino (9:16 historias/reels, 4:5 feed, 16:9 web).

---

## 11. Biblioteca de 34 ángulos de cámara

Cambiar el punto de vista cambia la emoción y frena el scroll: el contrapicado da poder, el macro muestra textura, la subjetiva dice "esto podrías ser vos". Usá la frase en inglés tal cual dentro del prompt (en Seedream va después de "New camera angle:"; en Soul o cualquier modelo de texto va en la capa 2). Reemplazá [objeto] y [lugar].

| # | Ángulo | Frase para el prompt | Sirve para |
|---|---|---|---|
| 01 | Plano general | WIDE SHOT, full body small in frame, showing the whole [lugar] around her | Banners, contexto |
| 02 | Plano medio | MEDIUM SHOT, framed from the waist up, holding [objeto] beside her, [lugar] behind | Hablar a cámara |
| 03 | Primer plano | CLOSE-UP, face and shoulders fill the frame, lips slightly parted, background softly blurred | Stories, emoción |
| 04 | Macro | MACRO SHOT, extreme close detail of [objeto] and fingertips, skin texture visible, very shallow depth of field | Producto, textura |
| 05 | Cenital ojo de pez | OVERHEAD FISHEYE, camera directly above looking down, strong fisheye distortion, she looks up at the lens, surroundings curving at the edges | Frenar el scroll |
| 06 | Perfil | PROFILE, strict side view, face in clean profile, [lugar] in the background | Editorial |
| 07 | Tres cuartos | THREE-QUARTER VIEW, camera 45 degrees off to one side at eye level, body angled away, head turned back toward the camera, knees-up framing | Hablar a cámara con más forma |
| 08 | De espalda | REAR VIEW, camera behind her, seeing her back and hair while she faces [lugar] | B-roll, transición |
| 09 | Sobre el hombro | OVER-THE-SHOULDER, her blurred shoulder and hair in the foreground, looking past her toward [lugar] | B-roll, contexto |
| 10 | Subjetiva | POV, first-person view from her eyes, looking down at her own hands [acción] | "Esto podrías ser vos" |
| 11 | Reflejo de prisma | PRISM REFLECTION, shot through a glass prism in front of the lens, rainbow refractions and a ghost duplicate of her face | Editorial, branding |
| 12 | Altura de los ojos | EYE-LEVEL, camera exactly at her eye height, straight-on neutral perspective, chest-up framing | Testimonio, confianza |
| 13 | Contrapicado | LOW-ANGLE, camera below her looking up, she appears powerful against the sky | Poder, logro |
| 14 | Picado | HIGH-ANGLE, camera above her looking down at about 45 degrees, she looks up into the lens, floor visible around her | Intimidad, cansancio |
| 15 | Holandés | DUTCH ANGLE, camera tilted about 25 degrees, verticals diagonal, dynamic off-kilter composition | Anuncios disruptivos |
| 16 | Cenital | OVERHEAD, flat top-down view straight above her, no distortion, graphic composition, hard shadows | Pinterest, gráfico |
| 17 | Dron | AERIAL DRONE SHOT, high above, revealing the whole [lugar] and surroundings | Apertura, branding |
| 18 | A ras de suelo | GROUND-LEVEL, camera resting on the floor, floor texture in the foreground, looking horizontally at her | Entrenamiento en casa |
| 19 | Vista de gusano | WORM'S-EYE VIEW, camera on the floor pointing straight up at her, extreme upward perspective, she looks down at the lens | Frenar el scroll |
| 20 | Dentro de un hoyo | INSIDE A HOLE, camera at the bottom of a round hole looking up, dark circular walls framing the edges, she leans over the opening against the bright sky | Creativo, ads |
| 21 | Altura de aro | HOOP-LEVEL, camera about 3 meters high looking slightly down, she reaches [objeto] up toward the lens | Creativo, producto |
| 22 | Gran angular cercano | WIDE-ANGLE CLOSE-UP, 16mm lens very close to her face, exaggerated perspective, hand and [objeto] big in the foreground | UGC enérgico |
| 23 | Ojo de pez | FISHEYE, full-body shot with a circular fisheye lens, strong barrel distortion bending the surroundings | Ads disruptivos |
| 24 | Ojo de pez cercano | FISHEYE CLOSE-UP, fisheye lens right in front of her face, playful bulging distortion, surroundings curving at the edges | Humor, ads |
| 25 | Primer plano en picado | HIGH-ANGLE CLOSE-UP, camera above her face looking down, she tilts her chin up to the lens | Selfie íntima |
| 26 | Primer plano en contrapicado | LOW-ANGLE CLOSE-UP, camera just below her chin looking up at her face, sky or ceiling above | Selfie con actitud, CTA |
| 27 | Selfie | SELFIE, arm-length front-camera selfie, her extended arm visible at the frame edge, slight wide-lens look | UGC, stories, ganchos |
| 28 | Silueta | SILHOUETTE, strong backlight from the sun behind her, crisp dark silhouette against a bright glowing sky | Branding, cierre |
| 29 | Oclusión en primer plano | FOREGROUND OCCLUSION, shot through blurry [objetos del lugar] partially covering the frame, she is seen through the gap | Profundidad, voyeur |
| 30 | Foco en primer plano | FOREGROUND FOCUS, sharp focus on [objeto], shallow depth of field, she is blurred in the background | Producto |
| 31 | Foco en el fondo | BACKGROUND FOCUS, blurred [objeto] very close in the foreground, focus sharp on her in the background | Profundidad |
| 32 | Destello de lente | LENS FLARE, sun peeking from the corner of the frame, warm flare streaks and light orbs crossing over her, hazy glow | Verano, aspiracional |
| 33 | Lupa | MAGNIFYING GLASS, she holds a round magnifying glass in front of her face, her eye hugely enlarged inside the circle | Creativo, humor |
| 34 | Dentro de la nevera | INSIDE-THE-FRIDGE, camera inside a fridge looking out, drinks and [producto] on the shelves in the foreground, she opens the door and reaches in | Ads de producto |

**Para clips que hablan a cámara (lip sync)** la cara tiene que verse grande y nítida: usá 27, 12, 02, 03, 07, 18, 25, 26, 13, 14. Los ángulos 08, 09, 10, 16, 17, 28, 30 y 34 van como B-roll sin diálogo.

**Reparto por canal:** paid ads → 23, 20, 34, 15 · stories y reels → 27, 10, 03 · web y ficha de producto → 04, 30, 01 · branding y editorial → 17, 28, 11, 32.

---

## 12. De 1 foto a una sesión completa (Seedream 5.0 Pro)

Para tener muchos planos de la **misma escena** (misma persona, ropa, objeto, lugar y luz) sin volver a generar desde cero:

1. **Foto maestra (Image0)**: una imagen aprobada con la modelo, la ropa, el producto y el lugar (de Soul ID o real).
2. **Un prompt por ángulo**, siempre con esta estructura:
```
Keep the exact same woman from Image0 (identical face, [pelo], [piel]), same [ropa con detalle de color y corte], same [objeto/producto], same [lugar con 3–4 detalles concretos], [luz y hora]. Photorealistic candid phone photo. New camera angle: [frase de la sección 11].
```
3. Adjuntá Image0 como referencia (rol `image_references`), 2K, el formato del destino (9:16 para reels).
4. Generá varios ángulos en lote, revisá identidad, ropa y objetos con el detector, y quedate con los mejores.

Reglas: listá explícitamente todo lo que se mantiene (si no lo nombrás, puede cambiar); un solo ángulo por prompt; cambiá ropa, producto o lugar solo reemplazando esas palabras. Costo en Higgsfield por MCP: 2,5 créditos por imagen 2K; en la web puede entrar en generaciones gratis o ilimitadas del plan.

---

## 13. Presentadoras IA en anuncios y Reels: honestidad y precio visual

Agregado de la tanda de transcripciones de octubre 2026 (base: `conocimiento/organico-produccion/formatos-y-edicion.md` y `conocimiento/criterio/banderas-rojas.md`). Que no parezca IA no autoriza a que engañe.

- **Presenta, no testimonia.** La presentadora muestra y explica ("esto es", "así se ve"). Nunca "yo bajé", "a mí me funcionó", "lo que como en un día", ni credenciales (nutricionista, entrenadora).
- **Sin vida inventada.** Nada de "un día en mi vida", vlog o entrevista callejera con personas IA presentadas como reales.
- **Marcada como IA** según la política vigente de Meta e Instagram (etiqueta de IA en orgánico; "personaje creado con IA" o "ilustrativa" donde corresponda).
- **Sin prueba fabricada:** no generes notificaciones, cifras de ventas, capturas de resultados, pantallas de la app ni testimonios. La prueba en pantalla es material real (app real grabada, receta cocinada, hojas impresas).
- **Sin cuerpos comparados** ni zoom a zonas del cuerpo; casting acorde a la clienta real, sin criterios tipo "si vendés fitness no podés tener cuerpo normal".
- **Precio visual congruente con el ticket:** para un producto de US$ 10–20, imagen cándida de celular, luz natural, casa real y ropa sin marcas, con acabado premium en tipografía, color y sonido. Ni plantilla barata ni superproducción que no se cree.
- **Lip-sync sobre la voz final** (ya generada a su ritmo); nunca acelerar el clip para compensar.
- **Variantes reales:** para cada concepto nuevo, otra escena, otro formato u otra persona. Espejo, ×1,05 o cambio de color no son creativos distintos.

---

## Errores que no se pueden cometer

1. Usar "cinematic, 8K, ultra realistic, masterpiece" en los prompts.
2. Dejar que el modelo elija cámara, ángulo, luz o casting (sale el look IA por defecto).
3. Piel perfecta sin poros, maquillaje y caras simétricas.
4. Poses de modelo, sonrisa de catálogo u objetos mostrados a cámara.
5. Todo expuesto perfecto, sin luces quemadas ni sombras profundas.
6. Cámara lenta o movimiento flotante que nadie pidió.
7. Pedir texto, logos o marcas dentro de la imagen (incluida la ropa).
8. Planos largos con varias acciones.
9. Cambiar de persona, ropa o luz entre planos de la misma escena.
10. Entregar sin grade ni grano, con el color limpio del modelo.
11. Mezclar looks distintos en un mismo video.
12. No revisar el borde superior de las imágenes de Soul (interfaz de apps dibujada).
13. Que la presentadora IA testimonie, tenga credenciales o "vida" inventada, o que la imagen fabrique prueba (notificaciones, cifras, resultados).
