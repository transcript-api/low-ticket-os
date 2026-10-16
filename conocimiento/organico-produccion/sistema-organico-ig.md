# Sistema orgánico de Instagram (OR)

Base de conocimiento del dominio **contenido orgánico de Instagram**. Sintetiza lo que dicen Víctor Heras y su equipo (y lo poco que aporta el compilado brasileño sobre orgánico), lo contrasta con lo que Instagram dijo públicamente y lo baja a **Reto Cintura 28**. Cierra con un plan orgánico de 30 días con métricas.

Archivo hermano: `formatos-y-edicion.md` (IDs FE-xx), para formatos, edición, voz e IA.

---

## Cómo leer este archivo

**Cada principio trae:** ID estable · enunciado accionable · ámbito (orgánico / pago / ambos) · confianza · fuentes · qué dicen las fuentes · contraste externo · mecanismo · aplicación a Reto Cintura 28 (marcada **Adaptación**) · contradicciones · test si corresponde.

**Rúbrica de confianza** (de `SPEC_SINTESIS.md`):

| Nivel | Criterio |
|---|---|
| **Alta** | ≥2 fuentes independientes y consistente con la evidencia externa, o aritmética verificable |
| **Media** | Una fuente con evidencia mostrada, o varias del mismo grupo, sin contradecir la evidencia externa |
| **Baja** | Una sola fuente sin evidencia, o con contradicciones internas |
| **Descartada** | Contradice evidencia externa, políticas de Meta/Hotmart o las reglas del negocio. Se deja registrada para que nadie la vuelva a proponer |
| **Norma** | No es una hipótesis: es una regla de plataforma o del negocio. Se cumple sin test |

Media y Baja aplicables llevan **Hipótesis: testear**, con una sola variable y una métrica principal.

**Independencia de fuentes.** Víctor Heras, Viralidad.com, Heras Media, Mike Moreno, Iván Rives y la clase con Adrià son **una sola fuente**, aunque aparezcan en seis videos. Cada creador brasileño cuenta como fuente independiente.

### Mapa de prefijos

| Prefijo | Fuente | Grupo |
|---|---|---|
| B | `extract_b20dd711.md`: "5 cambios", Trial Reels (inicio), teoría del faro | Víctor |
| T | `extract_0f6f1360.md`: Trial Reels + PCN, "Aprende a comunicar", El Aval | Víctor |
| S | `extract_661e8d1a.md`: Sistema 3x30 | Víctor |
| A | `extract_viralidad_varios.md`: clase 2:12 Adrià + Víctor | Víctor |
| H | `extract_viralidad_varios.md`: Sistema 2.20.2000 | Víctor |
| J | `extract_viralidad_varios.md`: mentoría JR Fernández (Víctor, Mike, Iván) | Víctor |
| L | `extract_lowticket_br.md`: Borba, Gaspar, Asvi/Alexander, LATAM, NY, André, Ferreira | 7 fuentes independientes |
| LB | `extract_viralidad_varios.md`: adiciones al compilado brasileño | según creador |
| Repo | `low-ticket-os` (principios, compliance, playbook, producto) | reglas que mandan |

### Evidencia externa usada como contraste

| Código | Qué dice | Origen |
|---|---|---|
| E1 | Hook rate (vistas de 3 s ÷ impresiones): 30–40% es bueno en Meta; mediana de Reels ~30%. Hold rate (15 s ÷ 3 s): ~20–25% | Spec de síntesis |
| E2 | Los primeros 3 s deciden; finalización y re-visualizaciones empujan la distribución. Adam Mosseri (Instagram): tiempo de visualización, likes por alcance y envíos por alcance son señales top | Spec de síntesis |
| E3 | Meta Andromeda favorece la diversidad creativa real (conceptos distintos, no variantes mínimas). Con segmentación amplia, el creativo segmenta | Spec de síntesis |
| E4 | En anuncios de salud rinden preguntas sobre un síntoma o dolor concreto, momentos auténticos, confesiones y ganchos de error/advertencia. Rinden peor las preguntas amplias y el "secreto" | Spec de síntesis |
| E5 | Políticas de Meta: sin autopercepción negativa en dieta, sin antes/después, sin zoom a zonas del cuerpo, sin atributos personales ("¿tenés panza?"). Un personaje IA no puede dar testimonio de resultados | Spec + `compliance/meta-ads-politicas.md` |
| E6 | Instagram: los Reels se recomiendan sobre todo a no seguidores; desde 2024 prioriza el contenido original y las cuentas agregadoras pierden elegibilidad; los hashtags no son una palanca relevante de alcance | Evaluaciones críticas de B §7, T §7, A §7 |
| E7 | Instagram negó públicamente que pagar anuncios penalice el alcance orgánico | Evaluación de S §7.2 y H §7.2 |
| E8 | Trial Reels existe desde dic. 2024 para cuentas profesionales: se muestra primero a no seguidores y se puede compartir con seguidores si rinde | Evaluación de T §7 |
| E9 | Las Pautas de recomendación de Instagram consideran no recomendable el contenido que intenta vender productos o servicios con afirmaciones de salud (su ejemplo es un suplemento para bajar de peso) y las afirmaciones de salud exageradas | Conocimiento general. **Verificar la versión vigente** en el Centro de ayuda |
| E10 | Meta pide etiquetar el video fotorrealista o el audio realista hecho con IA en publicaciones orgánicas y puede mostrar la etiqueta "Info de IA" | Conocimiento general. **Verificar** |
| E11 | Instagram recomienda menos los videos con marca de agua de otras apps | Conocimiento general. **Verificar** |
| E12 | "Estado de la cuenta" muestra si el contenido es apto para recomendarse a no seguidores; depende de infracciones de normas, no de un ratio | Evaluaciones de S §7.2 y T §7 |
| E13 | Niveles de consciencia de Eugene Schwartz (*Breakthrough Advertising*) | Evaluaciones de S §7.2 y A §7.1 |
| E14 | La mensajería automatizada de Meta tiene ventana de 24 h y va por API oficial (ManyChat es socio) | Evaluación de S §7.3 |

### Datos del producto que hay que verificar antes de ponerlos en pantalla

- **Cantidad de recetas.** El brief de la KB dice "más de 70". El repo (`products/reto-cintura-28/03-producto.md`) dice **32 recetas**. En los ejemplos de este archivo uso "las recetas del plan", sin número. **Antes de producir, confirmar el número real.**
- **Precio vigente:** US$ 15,90 (README del producto). Preferir creativos sin precio dentro de la imagen (`docs/aprendizajes.md`, 2026-10-08).
- **Prueba social:** el brief dice que todavía no existe; el guion 13 habla de "clientas reales con permiso". Regla: **solo real y con permiso escrito**. Si no existe, no va.
- **El producto incluye asesoramiento por WhatsApp con Santiago durante 7 semanas y una comunidad.** Es la mejor fuente de ideas reales del orgánico (OR-31).

---

## Resumen en 12 líneas

1. Instagram reparte en orgánico por **prueba y expansión**: muestra a pocas personas, mide si se quedan, mandan y les gusta, y amplía. Las cifras de "círculos" son ilustrativas (OR-01).
2. Lo que pesa: **retención y tiempo de visualización, envíos por alcance y likes por alcance** (E2). "Solo importa el primer segundo y los likes no cuentan" es falso (OR-04).
3. El primer segundo y los primeros 3 s sí deciden si hay muestra suficiente para medir (OR-03).
4. **R.I., "ITV" 5%/30%, "intoxicación por anuncios", "moroso" y "detector de duplicados solo en Trials"** son inventos sin sustento. Se descartan como reglas (OR-05, OR-10, OR-18, OR-20, OR-33).
5. Lo que sí intoxica: seguidores comprados, bots, follow por follow, pods y sorteos de premio genérico. Además están prohibidos (OR-19).
6. **Migrar de cuenta** solo tiene sentido en orgánico, sin sanciones, y cuesta la audiencia. En cuentas publicitarias es **evasión** (OR-23).
7. Contenido: **abrir con un tema que le interesa a la mayoría y cerrar en el producto**. En pago el ancho se acota: "ancho dentro del público" (OR-11).
8. En el Reel no se vende con afirmaciones de salud: puede quedar fuera de recomendación (E9). La venta va al final, en historias y en DM (OR-08, OR-34).
9. Volumen con método: **tandas de ~20 piezas**, esperar que gane una minoría y **fotocopiar a las ganadoras** en otros formatos (OR-27 a OR-29).
10. **Trial Reels** sirve para probar aperturas con no seguidores. Los trucos de flip, ×1.05, color y fondo para "engañar al detector" se descartan (OR-32, OR-33).
11. Conversión orgánica low ticket: historias en secuencia → **palabra clave → ManyChat → página con UTM → checkout de Hotmart**. Sin setter ni llamadas (OR-35 a OR-37).
12. Sin cara real del dueño: **personaje IA consistente y marcado**, o **manos + comida + app real**. Nunca testimonios ni credenciales falsas (OR-42 a OR-44).

---

## Bloque A · Cómo distribuye Instagram

### OR-01 · Juzgá cada Reel como una prueba que se amplía si la muestra responde
- **Enunciado:** cada Reel arranca con una muestra chica. Si retiene y genera envíos y likes por encima de lo esperable, se amplía. Leé las primeras 24–72 h por **calidad de respuesta** (retención, envíos/alcance), no por vistas totales.
- **Ámbito:** orgánico.
- **Confianza:** Media como modelo mental. Las cifras de los círculos (1.000 / 10.000 / 100.000 / 1M / 10M), Baja.
- **Fuentes:** A36–A39 (APC, "Algoritmo de Progresión Concéntrica"), S58 ("se lo enseña a un pequeño grupo aleatorio y saca el R.I."), T97–T98 (metáfora del banquero), H29–H30 (7/1.000 frente a 600/1.000), J21–J22 (círculos), S70–S72 (R.U.M.). Sumadas en la revisión de cobertura: S59–S60 (la misma pregunta de "7 de cada 1.000 contra 600 de cada 1.000").
- **Qué dicen:** "Teoría del APC: Algoritmo de Progresión Concéntrica" (A36). El primer círculo es "un grupo de prueba aleatorio de ~1.000 personas" y pasa al siguiente "si supera la media del nicho" (A37). Banquero: "el algoritmo te presta lo más caro que tiene: atención" (T97).
- **Contraste externo:** consistente con E2 y E6. Matiz de S §7.1: la muestra **no es aleatoria**, son personas a las que el sistema predice interesadas. "Media del nicho" (A37) no se puede conocer desde afuera.
- **Mecanismo:** el sistema invierte impresiones donde predice más tiempo de uso. Una pieza que retiene a la muestra justifica más muestra.
- **Adaptación (Reto Cintura 28):** en la planilla de cada Reel anotá a las 24 h: retención a 3 s (o tasa de salteo si Insights la muestra), tiempo medio de visualización, envíos/alcance y likes/alcance. A los 7 días, vistas totales. Así sabés qué señal temprana predice el alcance de **tu** cuenta.
- **Contradicciones:** RI = retención (A38) vs RI = "a cuántos les gusta" (S25) vs RI = vistas ÷ seguidores (H08). Ver OR-05.
- **Hipótesis: testear.** Variable: ninguna (observacional). Métrica: correlación entre envíos/alcance a 24 h y vistas a 7 días sobre los 20 Reels del mes. Si correlaciona, la usás como alarma temprana para fotocopiar (OR-29).

### OR-02 · Escribí cada Reel para alguien que no te sigue
- **Enunciado:** asumí que quien ve el Reel no te conoce, no vio tus otros videos y no sabe que existe el reto. Cada pieza trae su propia razón para ser vista.
- **Ámbito:** ambos (en pago es todavía más cierto: siempre es frío).
- **Confianza:** Media. La dirección la confirma Instagram (E6). La cifra "menos del 25% viene de cuentas seguidas" (B05, T44) no tiene fuente: Baja.
- **Fuentes:** B03–B09, B14, B50, T44, H13–H14. Sumada en la revisión de cobertura: A89 ("el algoritmo de fuera versus el de dentro", sin contexto en la transcripción).
- **Qué dicen:** "Cada vídeo tienes que darle una razón a esa persona para que lo vea" (B03). "Tienes que darle esa razón dentro de la pieza" (B09). "Esa persona a lo mejor te ha encontrado hace 40 segundos" (B50).
- **Mecanismo:** los Reels se reparten mayormente a no seguidores (E6). Un video que necesita contexto previo pierde a la muestra en el segundo 1.
- **Adaptación:** nada de "como les conté ayer" ni "parte 2" sin resumen. Si hacés series, cada capítulo arranca entendible solo.
- **Hipótesis: testear.** Medí en Insights el % de vistas de no seguidores por Reel. Si en la mayoría pasa de la mitad, el principio rige para la cuenta.

### OR-03 · Los primeros segundos deciden: ganalos con dolor, pregunta o imagen fuerte
- **Enunciado:** el segundo 0 ya muestra algo y dice algo que le importa a quien mira. Prohibido saludar, presentarse o anunciar el tema. Dedicá al gancho la mayor parte del tiempo de escritura.
- **Ámbito:** ambos.
- **Confianza:** **Alta.** Víctor (T95, T98, S64–S66, A64) + Borba (L38: entre creativos "só muda ali o hook, que é o ângulo") + Alexander (L107–L109: cambiar solo la lead movió la retención al pitch de 15% a 24%) + E1/E2.
- **Qué dicen:** "La señal que lo decide todo es lo que hace una persona que no te conoce de nada en el primer segundo de tu vídeo: o se para a verlo, o pasa de largo" (T95). "Si pasan de largo en menos de un segundo, el préstamo no se devolvió" (T98). Regla 80/20: "el 80% de tu tiempo tiene que estar enfocado en lo que dices en los primeros segundos" (S64). "Lo que no puedes hacer en el gancho es presentarte" (S65).
- **Ejemplos textuales (S66, nicho inmobiliario, sin resultado declarado):**
  - Débil: "En el vídeo de hoy os voy a explicar cuál es la mejor forma de comprar una casa para comenzar en bienes raíces".
  - Fuerte: "Esta casa que compré con el dinero del banco me está pagando más de 4.000 dólares al mes y no estoy haciendo nada".
- **Mecanismo:** sin retención temprana la muestra no alcanza para medir el resto del video (OR-01). En pago es el hook rate (E1).
- **Adaptación:** se cruza con la regla de oro de Santiago: el gancho toca un dolor o abre una pregunta, nunca describe una escena. Ejemplos que cumplen políticas:
  - "Pará. Mil abdominales no achican la cintura." (repo, V01)
  - "¿Día imposible? No pasa nada: son 8 minutos." (repo, V06)
  - "La mayoría empieza el lunes con todo y el miércoles ya largó. El problema no es ella." (Adaptación)
  - Mal: "Son las 9, abrís la heladera…" (descriptivo, no frena).
- **Contradicción:** A42 ("puedes tener un mal gancho… si la idea es ganadora, el video se hace viral") y J32 ("no es cómo empiezas, es cómo terminas"). Lectura: "gancho mágico" alude a fórmulas genéricas; la idea manda, pero sin apertura la idea no llega a medirse. El detalle de escritura de ganchos vive en el dominio de copy.

### OR-04 · Optimizá por las señales que Instagram dice que usa
- **Enunciado:** tus métricas de cabecera son **tiempo de visualización / retención, envíos por alcance y likes por alcance**. Guardados y comentarios son secundarios, no inútiles.
- **Ámbito:** orgánico.
- **Confianza:** **Alta** como dato externo oficial (E2). La versión de Víctor "las señales no son los likes, ni los comentarios, ni los guardados" (T94) y "los likes y los comentarios no pesan por sí mismos" (A40): **Descartada**, contradice a Mosseri.
- **Fuentes:** T94, A40 (descartadas). A38 (retención) y S25 ("a cuántos les gusta") apuntan, sin saberlo, a dos de las tres señales oficiales.
- **Mecanismo:** el envío (compartir por DM) es la señal más fuerte de "esto le sirve a alguien más". Por eso el contenido útil y reconocible ("mandáselo a tu amiga que…") rinde.
- **Adaptación:** diseñá piezas "mandables": la receta para la amiga que no cocina, el mito para la tía que hace 200 abdominales. El CTA secundario puede ser "mandáselo a quien empieza el lunes". **No** uses "comentá X para que el algoritmo te muestre más": es *engagement bait* (ver OR-09).
- **Hipótesis: testear.** Variable: CTA final "mandáselo a…" vs CTA de palabra clave, en 4 + 4 Reels de la misma línea. Métrica: envíos/alcance (y como control, comentarios con palabra clave).

### OR-05 · No uses el R.I. de Víctor: medí con las métricas reales de Insights
- **Enunciado:** reemplazá el "Ratio de Interés" por métricas que existen y significan algo: retención (gráfico y tiempo medio), % de no seguidores, envíos/alcance, likes/alcance, seguidores ganados por Reel.
- **Ámbito:** orgánico.
- **Confianza:** R.I. como métrica del algoritmo, **Descartada**. Como intuición ("¿a la muestra le interesó?"), Baja.
- **Fuentes:** S25–S29, S39 ("me la he inventado yo"), S58, A38, H07–H14.
- **Qué dicen:** tres definiciones incompatibles. (1) "relación entre la cantidad de personas a las que se les muestra tu contenido y las que les gusta" (S25). (2) "a cuántas personas… lo ven con un alto tiempo de retención" (A38). (3) vistas ÷ seguidores (H08, S28).
- **Por qué se descarta:** el propio autor admite que la inventó. Cambia de definición según el video. No se puede calcular desde afuera "contra la media del nicho" (S26, A37).
- **Adaptación:** la planilla del orgánico (ver plan de 30 días) tiene columnas con esas métricas oficiales. El agente de análisis nunca calcula "R.I.".

### OR-06 · No pierdas tiempo con hashtags ni con la hora mágica
- **Enunciado:** hashtags y horario no son palancas de alcance. Ponés 0–3 hashtags descriptivos si querés y publicás cuando tu audiencia está activa, sin obsesionarte.
- **Ámbito:** orgánico.
- **Confianza:** Media (A06, T93; consistente con E6).
- **Qué dicen:** "no premia los hashtags ni que publiques a las seis de la tarde" (T93). En la hoja de la clase, tachado: "-De qué hora publicar / -De qué Hashtags usar" (A06).
- **Excepción:** las **historias** sí conviene subirlas a una hora estable (OR-35), porque se consumen entre seguidores.
- **Adaptación:** después de la semana 1, mirá "Momentos más activos" en Insights y fijá una franja para historias. Para Reels, la misma franja por comodidad.
- **Hipótesis:** no vale la pena testear. Es costo de oportunidad.

### OR-07 · Publicá solo contenido original; modelá ideas, no copies videos
- **Enunciado:** cero reposts, cero videos bajados de otras cuentas, cero guiones traducidos. Se toma la **lógica** de algo que funcionó y se produce de nuevo.
- **Ámbito:** ambos.
- **Confianza:** **Alta.** Víctor (T11, T13, B88, A47, S62) + creador NY (L143: "Parem de querer copiar só o que todo mundo faz") + E6 (originalidad) + E11 (marcas de agua) + Repo (principio 5: "Nada copiado de otros negocios").
- **Qué dicen:** "¿para qué cojones alguien te seguiría a ti?" si sos "la copia de la copia" (T11). "Porque si eso funcionara, todo el mundo sería viral" (T13). "No quiero que te robes el vídeo: quiero que te robes la lógica detrás" (S62).
- **Mecanismo:** Instagram reemplaza copias por originales en recomendaciones (E6). Además, una copia no construye identidad.
- **Adaptación:** el banco de referencias guarda **la lógica** ("comparación con X vs sin X", "mito + dato + alternativa"), nunca el texto ni el clip.
- **Descartado dentro del corpus:** bajar videos de TikTok con sstik.io para creativos (L164), copy "idéntico, solo traducido" (L97). Ver FE-36.

### OR-08 · No vendas con afirmaciones de salud dentro del Reel de alcance
- **Enunciado:** los Reels de alcance hablan de comida, hábitos, mitos y situaciones. El producto aparece al final como herramienta, sin promesas de peso ni de salud. La venta explícita va a historias, DM y página.
- **Ámbito:** orgánico.
- **Confianza:** **Norma** (E9, verificar versión vigente) + coherente con Víctor (A22: "El gran error de la gente es querer vender directamente en la parte de Atención"; B108: "La gente no entra a Instagram a que le vendan").
- **Mecanismo:** si un Reel cae en "no recomendable", no sale a no seguidores. Para una cuenta de producto de cintura, el riesgo es alto si el Reel promete resultados.
- **Adaptación:** el cierre de un Reel de receta dice "Es una de las recetas del Reto Cintura 28. Comentá RECETA y te la mando", no "bajá 3 cm con esta cena". En la bio, aviso de salud breve y link.
- **Test:** no es hipótesis. Si un Reel tiene alcance anormalmente bajo y "Estado de la cuenta" marca algo, revisalo contra las pautas.

### OR-09 · Diseñá retención; nunca fabriques interacción
- **Enunciado:** "fabricar señales" solo puede significar diseñar piezas que retengan. Bots, compra de vistas, pods, follow por follow y "comentá esta frase para el algoritmo" están prohibidos o penalizados.
- **Ámbito:** orgánico.
- **Confianza:** **Norma.**
- **Fuentes:** T101 ("las señales se pueden fabricar con un sistema que llamo El Aval"), S13, H11, LB24 ("comenta aqui embaixo '111% entregue'", *engagement bait*).
- **Contraste:** T §7.3 aclara que en el video "fabricar" significa "diseñar contenido que retenga", no comprar engagement. Las normas de Instagram prohíben el comportamiento no auténtico.
- **Adaptación:** la palabra clave de ManyChat existe para mandar algo útil por DM (OR-36), no para inflar comentarios.

### OR-10 · No existe el "moroso" permanente: revisá "Estado de la cuenta" y el contenido
- **Enunciado:** si los Reels no salen, revisá primero "Estado de la cuenta" (infracciones, elegibilidad para recomendaciones) y después el contenido. No asumas un castigo invisible por "historial".
- **Ámbito:** orgánico.
- **Confianza:** la tesis del "moroso", **Descartada**. El diagnóstico por Estado de la cuenta, **Norma** (E12).
- **Fuentes:** T99 ("a un moroso no se le presta atención, subas lo que subas"), T107, S12, H06 ("lo que no está bien no es el contenido, sino es la cuenta").
- **Por qué se descarta:** no hay evidencia pública de un castigo por bajo rendimiento (T §7). El propio corpus lo contradice: Jordan Belfort tenía 2,7M de seguidores y Reels de 70–90k (≈3%, "intoxicado" según su regla) y lo arreglaron **cambiando el contenido**, sin migrar ni desintoxicar (S75–S79; S §7.2).
- **Adaptación:** al abrir el plan de 30 días, captura de "Estado de la cuenta". Si dice que el contenido puede recomendarse, el problema es la pieza.

---

## Bloque B · Qué publicar para que distribuya y venda

### OR-11 · Abrí ancho, cerrá en el producto; en pago, "ancho dentro del público"
- **Enunciado (orgánico):** el Reel arranca con un tema que le interesa a casi cualquiera, desarrolla algo útil y recién en el último tramo conecta con el producto (la "transición") y pide la acción.
- **Enunciado (pago):** abrí con un dolor que le pasa a **la mayoría de las mujeres de 25 a 50** en lenguaje cotidiano. Ancho dentro del público, no ancho para todo el mundo.
- **Ámbito:** ambos, con reglas distintas.
- **Confianza:** orgánico, Media (un solo grupo de fuentes, muchos videos, consistente con E2). Pago, Media (síntesis de J17–J19 + E3 + Borba L39).
- **Fuentes:** B105, B109, B112, S79, A32–A35, H24–H30, J17–J35. Contra: Borba (L39) vende en pago con estructura lineal (dolor → producto → precio → CTA) y le funcionó (L04: R$43.226,70; ROI 3,09; dashboard). Sumadas en la revisión de cobertura: A15 (el objetivo es una audiencia cualificada a la que venderle, no seguidores) y A09 (una cuenta que no vende no sirve).
- **Qué dicen:**
  - "Primero la sala llena, después vendes. Siempre en ese orden." (B112)
  - "Comienzo el vídeo de forma ancha… y termino hablando sobre ventas" (S79).
  - "el vídeo empieza mucho más ancho y termina mucho más fino" (H26).
  - "Es una lógica lineal" (J17) y "No es solo cambiar el hook" (J19): en anuncios se puede segmentar y la lógica lineal funciona; en orgánico, no.
- **Ejemplos textuales con resultado declarado:**
  - Zapatería, 60 s (A33–A35): 0–15 s "5 outfits por menos de 100€" → 15–45 s "La importancia de unos buenos zapatos para elevar el outfit" → 45–60 s "Si quieres los zapatos que he usado en estos outfits, comenta 'YO' y te paso el enlace por privado". Sin resultado declarado.
  - Rotulador (H27–H29, cifras hipotéticas del orador): lineal "Si estás cansado de que tus vídeos de YouTube se vean aburridos…" → "le va a gustar a 7 personas de cada 1.000". Embudo "Cómo pintar una cara en menos de un minuto… siempre es recomendable hacerlo con un rotulador como este" → "600 de cada 1.000".
  - Contraejemplo real (J26): Reel de JR del graffiti con agua a presión, **11M de visualizaciones y 0 ventas**, "no hiciste la transición hacia lo que tú vendes".
  - Outfit (S77): "¿Cuánto cuesta tu outfit?" → desglose → "Pero lo importante no es el outfit para el día a día, sino para hacer dinero. ¿Y cómo hago dinero? Con ventas porque hago X, Y, Z." Declarado: 3,3–3,4M y 5M de vistas.
- **Mecanismo:** en orgánico el sistema mide la reacción de una muestra amplia (OR-01). Un arranque de nicho pierde a la mayoría. En pago con segmentación amplia, Andromeda usa el creativo para encontrar a quién mostrarlo (E3). Si el gancho es "para todo el mundo", el sistema lo muestra a gente que nunca compra.
- **Resolución del conflicto (orgánico vs pago):**

| | Orgánico | Pago |
|---|---|---|
| Apertura | Tema masivo del universo comida/hábitos ("la cena de la noche que no da") | Dolor cotidiano de la mayoría del público ("empezar el lunes y largar el miércoles") |
| Quién debe sentirse aludida | Cualquier persona que cocina o come | Mujer adulta que probó planes y abandonó |
| Cuándo aparece el producto | Último 20–30% | Entre el 35% y el 60% del video |
| CTA | Palabra clave o "seguí la cuenta" | "Más información" a la página |
| Riesgo | Viral sin venta (J26) | Gancho ancho que atrae curiosas que no compran |

- **Adaptación:** "ancho dentro del público" = un dolor que le pasa a la mayoría de las mujeres de 25 a 50, no a un subgrupo técnico. Bien: "Comer menos no te baja la cintura" (repo, guion A), "¿Día imposible? Son 8 minutos". Mal por angosto: "Si hacés keto y te estancaste…". Mal por ancho sin filtro en pago: "Mirá este truco de cocina" (le sirve a cualquiera, no filtra compradoras).
- **Hipótesis: testear (pago).** Variable: familia lineal vs familia embudo con el mismo ángulo. Métrica principal: CPA (secundaria: hook rate). Ver FE-45.

### OR-12 · Filtrá cada idea con el espectador cero y el test 5/50
- **Enunciado:** antes de producir, preguntá: ¿le interesa a alguien que no sabe nada del tema? ¿Lo entiende sin contexto? ¿Lo entendería un chico de 5 años y le interesaría a la mitad de una mesa familiar? Si no, no se produce.
- **Ámbito:** ambos (en pago, la mesa familiar es "mujeres de 25 a 50").
- **Confianza:** Media. Los niveles de consciencia son marco conocido (E13). Las cifras "90 de cada 100 son espectadores cero" (B102) y "90% en niveles 0 y 1" (S48, A77) no tienen fuente: Baja.
- **Fuentes:** B100–B105 (espectador cero, "primera fila"), S47–S57 (niveles y test del cumpleaños), A46, A76–A78, J20–J25, H27–H29.
- **Qué dicen:**
  - Espectador cero: "No sabe quién eres / No sabe nada sobre tu tema / No sabe que tiene un problema" (B101). Filtro: "¿Le interesa? ¿Lo entiende sin saber nada más?… Si la respuesta es que no, ese vídeo no se graba" (B104).
  - Test del cumpleaños: "tiene que gustarle al menos a la mitad de la familia… y tiene que entenderlo también tu primo pequeño de 5 años" (S55). Versión A46: "al explicárselo a 100 personas de la calle, al menos a 50 les interese".
  - "Los que te van a pagar son las personas que no entienden" (B103).
- **Caso:** Alejandro Cano (@elneurocanino), contenido para el espectador cero: 3M de visitas y 20.000 seguidores en 2 semanas (B103; capturas con cifras inconsistentes, ver tabla de casos).
- **Contradicción:** el creador NY (L141) dice "Quanto mais específico for o produto, maior a sensação de: 'Caramba, isso aqui tá falando comigo!'". Resolución: **tema ancho, situación específica.** "La cena de la noche que no da" es ancha como tema y específica como escena.
- **Adaptación:** cada idea del banco lleva tres casillas: "¿se entiende sin saber del reto?", "¿le importa a 5 de cada 10 mujeres?", "¿cumple políticas?".
- **Hipótesis: testear.** Variable: ideas que pasan el 5/50 con nota alta vs baja (puntaje del agente). Métrica: vistas medianas y % de no seguidores.

### OR-13 · Película primero, palomitas al final (≈80–85% tema, 15–20% producto)
- **Enunciado:** a nivel cuenta, la mayoría de los Reels son "película" (comida, hábitos, mitos, situaciones). Una minoría muestra el producto por dentro. Dentro de cada Reel, el producto va al final.
- **Ámbito:** orgánico.
- **Confianza:** Media. La proporción 85/15 sale de un solo caso (B110): Baja.
- **Fuentes:** B106–B112. "Tu contenido es la película. Tu producto son las palomitas." (B107). Sensei: "El 85% de sus vídeos no son de trading" (B110).
- **Contraste:** consistente con OR-08 (E9) y con A22.
- **Adaptación:** de 20 Reels por mes, 16 de película y 4 de producto por dentro ("No es un PDF, es una app", "Plan B de 8 minutos", "Lo que te llega cuando comprás", "Cómo se arma tu día en la app").
- **Hipótesis: testear.** Variable: proporción 80/20 vs 60/40 en dos meses consecutivos (confundido con el tiempo; preferí comparar por línea dentro del mes). Métrica: ventas atribuidas por UTM orgánico por cada 10.000 vistas.

### OR-14 · Vendé el deseo; usá el problema solo como "plan imposible", nunca como cuerpo
- **Enunciado:** el Reto mezcla deseo (sentirse cómoda, comer rico, tener la semana resuelta) y problema (planes imposibles, no saber qué comer). En orgánico arrancá por deseo o situación. El "problema" siempre es el plan, nunca el cuerpo de quien mira.
- **Ámbito:** ambos.
- **Confianza:** Baja (S43–S46, una fuente, sin evidencia; "75% de lo que se vende en redes son productos de deseo" S44 sin fuente). La regla "el enemigo es el plan" es **Norma** del repo.
- **Qué dicen:** "un mejor físico no es un problema: es un deseo de mejorar" (S45). Velas: no hablar de "ceras, mechas, aromas" sino de "cómo eliminar la ansiedad al llegar a casa" (S46).
- **Adaptación:** deseo = "comer milanesa y seguir el plan", "la semana resuelta sin pensar qué cocinar". Problema permitido = "no abandonás por falta de ganas: te dieron planes imposibles" (repo, ángulo "Reencuadre de la culpa").
- **Hipótesis: testear.** Variable: apertura de deseo vs apertura de problema-plan, mismo tema. Métrica: retención a 3 s y envíos/alcance.

### OR-15 · Mantené un solo universo temático
- **Enunciado:** la cuenta habla de comida simple, hábitos sostenibles y el día a día del reto. Nada de trends, motivación genérica, finanzas ni vida personal suelta. No sesgues la cuenta con formatos virales ajenos al negocio.
- **Ámbito:** orgánico.
- **Confianza:** Baja (una fuente con contradicción interna).
- **Fuentes:** S16–S18 ("el algoritmo no está entendiendo a quién tiene que mostrar tu contenido"), J45 ("No acostumbres demasiado la cuenta a esto porque si no vas a sesgar la cuenta a que solo funcione eso").
- **Contradicción interna:** el ejemplo de "cuenta confundida" de S16 tiene Reels de 18,6M, 2,2M, 4M y 383k. Si mezcla temas y hace millones, el ejemplo contradice la tesis (S §7.2).
- **Mecanismo plausible:** el seguidor nuevo vuelve si lo siguiente que ve es del mismo universo. Eso sostiene historias y DMs.
- **Adaptación:** 4 líneas fijas (recetas, mitos/PCN, producto por dentro, situaciones del reto). Si un trend no entra en ninguna, no se hace.

### OR-16 · Contracorriente solo si es verdadero; nada de polémica por polémica en salud
- **Enunciado:** una idea contracorriente rinde si es **cierta y defendible**. En nutrición y cuerpo, la polémica gratuita ("los nutricionistas te mienten") es riesgo de desinformación y de marca.
- **Ámbito:** ambos.
- **Confianza:** contracorriente verdadero, Baja (A45, A30, casos sin verificar). Polémico como criterio en salud, **Descartada**.
- **Fuentes:** A43–A49 (checklist de 8 puntos: contracorriente, 5/50, unicidad, gente común, polémico, formato, personaje, referencia viral).
- **Ejemplos textuales con resultado declarado:**
  - Cristian Villar: "Comprar una casa y vivir en ella es lo peor que puedes hacer" → 64M de visitas y 140.000 seguidores en 7 días con 2 videos (A55).
  - Alflo Pérez: "¿Qué es mejor, comprar una casa o rentarla? Ninguna de las dos, construirla. Pagué $50.000 por este terreno de $140.000 porque el resto me lo dio el banco…" → 5,1M de visitas y +38.000 USD por UTM (A28).
- **Adaptación (verdadera):** "Pará. Mil abdominales no achican la cintura." La reducción localizada de grasa no tiene respaldo; el mito es real y la respuesta es defendible. "¿Qué conviene para desinflarte a la noche, una ensalada o saltearte la cena? Ninguna de las dos…" (adaptación de A8.a): solo si la respuesta es nutricionalmente defendible.
- **Hipótesis: testear.** Variable: apertura contracorriente vs apertura de pregunta. Métrica: envíos/alcance.

### OR-17 · Demostrá en vez de aconsejar
- **Enunciado:** mostrá el proceso, el producto y la decisión, no el consejo genérico. Una receta hecha en tiempo real le gana a "5 tips para comer mejor".
- **Ámbito:** ambos.
- **Confianza:** **Alta.** Víctor (B02, B22, B25–B27) + André (L154: cards impresos y manipulados en cámara, "Isso passa uma credibilidade gigante") + Borba (L22: video de uso real en la página) + Repo (lote de producto).
- **Qué dicen:** el editor que publica 20 consejos frente al que muestra "dos cortes del mismo vídeo y explica por qué uno se entiende": "El segundo te acaba de demostrar una parte de lo que sabe hacer" (B02). "Si tú dices que sabes hacer algo, enséñame alguna prueba" (B25). "no hace falta inventarte un resultado espectacular" (B26).
- **Mecanismo:** la demostración se entiende sin texto, sostiene la mirada y prueba que el producto existe.
- **Adaptación:** la receta cocinada de punta a punta; la app abierta en un celular real; el plan B hecho en 8 minutos con timer. La "experiencia" honesta del reto: lo que más preguntan las compradoras en el asesoramiento por WhatsApp (anonimizado y con permiso), por ejemplo "la pregunta que más se repite en la semana 3".
- **Ver:** FE-11.

---

## Bloque C · Salud de cuenta

### OR-18 · La "ITV" de la cuenta (5% historias / 30% Reels) es una heurística floja, no una regla del algoritmo
- **Enunciado:** podés mirar una vez por mes vistas medias de Reels ÷ seguidores y vistas de historias ÷ seguidores como **alarma grosera** de que la base de seguidores no consume. Nunca como "nota" de Instagram ni como motivo para migrar.
- **Ámbito:** orgánico.
- **Confianza:** como heurística, Baja. Como regla del algoritmo ("apta / no apta"), **Descartada**.
- **Fuentes:** H05–H14 (ITV), S27–S29, S100, S14. Sumadas en la revisión de cobertura: S11 ("solo hay dos razones: contenido malo o freno de mano puesto"), S24 y S30 (desintoxicar la cuenta; antes decía que no se podía), S36 (diagnosticar la cuenta antes de producir). Mismo veredicto: heurística sin sustento; lo que sí vale es revisar "Estado de la cuenta" (OR-10) y el contenido.
- **Qué dicen:** "tenemos que pasar una ITV de la cuenta" (H05). "están basadas en dos factores: el 5% y el 30%" (H08). Con 1.000 seguidores, "al menos 300 visitas por cada Reel de media, y en historias al menos… 50 personas" (H09). Instagram "Hace simplemente una división" (H07).
- **Por qué no tiene sustento:**
  1. Los umbrales cambian entre videos: Reels "saludable" 40–100% (S28) vs mínimo 30% (H08, S100).
  2. Los Reels llegan mayormente a no seguidores (E6), así que vistas ÷ seguidores no mide "toxicidad".
  3. El propio material lo contradice: @virmastery con 7.189 vistas y 11,1k seguidores (65%) aparece tachado como "no apta" (S14), cuando por su regla sería sana. Jordan Belfort (~3%) se arregló sin tocar la cuenta (S75–S79).
  4. La aptitud real para recomendaciones depende de infracciones (E12).
- **Reemplazo (diagnóstico real):** (1) Estado de la cuenta, (2) % de vistas de no seguidores, (3) retención y envíos/alcance de los últimos 10 Reels, (4) vistas de la historia 1 ÷ seguidores como termómetro de la base, sin umbral mágico.
- **Adaptación:** el agente de análisis calcula los dos ratios por curiosidad y los muestra **sin semáforo**. Nunca recomienda migrar por un ratio.

### OR-19 · Nunca compres seguidores, no hagas follow por follow, pods ni sorteos de premio genérico
- **Enunciado:** solo entra a la cuenta gente que vino por el contenido.
- **Ámbito:** orgánico.
- **Confianza:** **Norma** (comportamiento no auténtico). El mecanismo de daño (base que no consume y empeora la muestra inicial) es Media (S13–S15, H11, A41).
- **Qué dicen:** comprar 10.000 seguidores "va a etiquetar tu cuenta como no apta" (S14). Colaboraciones y sorteos traen gente "no interesada en el contenido" (S15).
- **Matiz:** un sorteo de premio genérico (un celular) trae gente que nunca compra. Un sorteo del propio producto entre quienes ya siguen la cuenta no es el mismo caso, pero tampoco aporta mucho. No es prioridad.
- **Adaptación:** prohibido en el plan. Si alguien propone "un sorteo para crecer", la respuesta es este principio.

### OR-20 · Los anuncios no "intoxican" la cuenta orgánica
- **Enunciado:** correr anuncios de venta no castiga el alcance orgánico. Lo único que conviene evitar son las campañas de **"seguidores" o "interacción"** que llenan la cuenta de gente de baja afinidad.
- **Ámbito:** ambos.
- **Confianza:** la tesis "anuncios = intoxicación", **Descartada** (E7). La advertencia sobre campañas de seguidores o interacción, Baja (H §8, RH4).
- **Fuentes:** S19–S23 ("Hacer anuncios es la forma más rápida de joder tu cuenta"; "poco a poco te va a empezar a reducir los resultados"; el cliente pasa a costar "dos veces, o tres veces, o cinco veces más"), H11–H12, A41.
- **Por qué se descarta:** (1) Instagram lo negó públicamente (E7). (2) El propio corpus se contradice: Alfredo vende con "microanuncios de retargeting dirigidos únicamente a quienes ya vieron el contenido orgánico" (S99), y Mike pone "Exposición: orgánico + Ads" (J51). (3) La suba de costos en ads se explica por fatiga creativa y saturación de audiencia, no por castigo (S §7.2). (4) El orador vende "crecer sin pagar anuncios": conflicto de interés.
- **Adaptación:** el negocio de Reto Cintura 28 es tráfico pago. La cuenta de IG puede ser la identidad de los anuncios sin miedo. No se usa "Promocionar" con objetivo de seguidores.

### OR-21 · Las colaboraciones alineadas no dañan; las desalineadas, poco aportan
- **Enunciado:** un Reel en colaboración con una cuenta del mismo universo (cocina simple, bienestar realista) puede sumar público relevante. No lo hagas con cuentas de otro tema.
- **Ámbito:** orgánico.
- **Confianza:** "las colaboraciones intoxican" como regla general, **Descartada**. Colaboración alineada, Baja (sin datos en el corpus).
- **Fuentes:** S13, S15, H11–H12 ("Meta recomienda algunas de esas acciones… lo único que hacen es joderte los ratios").
- **Contradicción interna decisiva:** el mismo Víctor, en su protocolo de migración, manda subir "un Reel en colaboración con la cuenta antigua y con la cuenta nueva" (H16).
- **Adaptación:** no es prioridad en los primeros 30 días. Si aparece una cuenta de recetas real que quiere colaborar, se evalúa por afinidad de público.

### OR-22 · "Dejá de publicar" no es literal: dejá de publicar lo que no sirve
- **Enunciado:** el hook "dejá de publicar" significa: frená lo que no funciona, diagnosticá y volvé con un sistema. Parar la cuenta por parar no tiene sustento.
- **Ámbito:** orgánico.
- **Confianza:** literal, **Descartada**. Reinterpretado ("pausar para diagnosticar"), Baja.
- **Fuentes:** S01 ("dejes de publicar contenido"). Contradice S68 (20 videos al mes) y S85 ("Cuando un vídeo funciona tienes que echarle más leña al fuego") (S §7.2).
- **Adaptación:** no aplica a una cuenta nueva. Si la cuenta del reto ya tiene publicaciones viejas fuera del universo (OR-15), se archivan, no se borra la cuenta.

---

## Bloque D · Migración de cuenta

### OR-23 · Migrar de cuenta: opción cara en orgánico; evasión prohibida en cuentas publicitarias
- **Enunciado:** abrir una cuenta orgánica nueva solo tiene sentido si la vieja no tiene sanciones, está llena de seguidores comprados o fuera de tema, y aceptás perder la audiencia. **Nunca** se abre una cuenta, página, BM, perfil o cuenta publicitaria nueva para esquivar una restricción de Meta.
- **Ámbito:** orgánico (opción) / pago (prohibido).
- **Confianza:** migración orgánica sin sanción, Baja (un caso sin verificar, cifras inconsistentes). Migrar para evadir restricciones, **Descartada** (viola las políticas de Meta).
- **Fuentes:** S37–S41, S53, H15–H18, A41, T107. Evasión en pago: L100 ("lateralizar em mais contas"), L111 (cuentas de agencia: "si la cuenta cae… te dan otra"), L159 y LB13/LB25 (MoreLogin, navegador antidetección).
- **Qué dicen:**
  - Alfredo Marín: cuenta de 80.000 "con muchos anuncios" → cuenta nueva con 507 migrados ("conseguimos 507 seguidores migrados con el objetivo de que tuviera un alto R.I.", S38) → "El primer vídeo que publicamos agarró más de un millón de visitas" (S40). En H15 son "500".
  - Protocolo (H16–H17): historias pidiendo seguir la nueva + Reel en colaboración vieja-nueva → "entre 40 a 100 seguidores nuevos" "muy calientes".
  - "Si tu cuenta está quemada, migra hacia una cuenta limpia con la configuración correcta" (T107).
- **Por qué no se puede atribuir el resultado a la migración:** el mismo cliente cambió a contenido de niveles 0–1 al mismo tiempo (S47–S52). Sin grupo control.
- **Riesgos:** mensajes masivos a bases de WhatsApp sin consentimiento = spam y riesgo de datos personales (S §7.3). Perder la audiencia existente.
- **Adaptación:** si Reto Cintura 28 ya tiene una cuenta de IG sana, **no se migra**. Si la cuenta publicitaria o la página reciben una restricción, el camino es la **apelación oficial** (`compliance/meta-ads-politicas.md`; L §8.e). Ningún agente propone cuentas nuevas, perfiles extra ni cuentas de agencia como repuesto.

### OR-24 · Sembrá una cuenta nueva con gente real que quiere estar
- **Enunciado:** si la cuenta del reto es nueva, los primeros seguidores salen de compradoras reales y de la comunidad, invitadas sin incentivos ni spam.
- **Ámbito:** orgánico.
- **Confianza:** Baja (S38, H17, sin evidencia aislada). Costo bajo.
- **Mecanismo plausible:** los primeros Reels se muestran también a seguidores. Si esos seguidores son del público, la muestra inicial responde mejor.
- **Adaptación:** un mensaje en la comunidad del reto y en el grupo de asesoramiento: "Abrimos la cuenta del reto con recetas y el plan B. Si te sirve, seguila". Sin pedir likes ni comentarios. Con consentimiento y solo a quien ya está en esos grupos.
- **Hipótesis: testear.** No hay control posible. Medí el % de vistas de seguidores en los Reels de la semana 1 y su retención frente a la de no seguidores.

---

## Bloque E · Sistemas de producción y testeo

### OR-25 · El "Sistema 3x30": usá las piezas, no el paquete
- **Enunciado:** del 3x30 sirven tres cosas: producir en tandas con filtro de ideas, esperar pocas ganadoras y fotocopiarlas, y montar historias con palabra clave. La fase de "desintoxicar o migrar" y la promesa de 100k en 90 días se descartan.
- **Ámbito:** orgánico.
- **Confianza:** como paquete, Baja (una fuente, garantía de resultado, cifras contradictorias). Cada componente se evalúa abajo.
- **Fuentes:** S08–S10, S100–S102.
- **El sistema según la fuente:**

| Bloque | Días | Qué hace | Evaluación |
|---|---|---|---|
| 1 "Diagnóstico / freno de mano" | 1–30 | Dejar de publicar; ratios historias 5% y Reels 30%; migrar si hace falta; definir producto de problema o deseo; apuntar a niveles 0 y 1 | Ratios y migración: Descartada/Baja (OR-18, OR-23). Niveles 0–1 y deseo: Media/Baja (OR-12, OR-14) |
| 2 "El arranque" | 30–60 | 10 referencias (5 ES + 5 EN, 500k–1M); robar la lógica; test del cumpleaños 5/50 y RUM; 80% del tiempo en el gancho; 20 videos en 2 formatos | Referencias y lógica: Alta/Media (OR-30). 20 videos: Media (OR-27) |
| 3 "La fotocopiadora" | 60–90 | Triplicar el 10–20% ganador en 3 formatos; historias 5–8; ManyChat + UTM + CRM + admisiones; retargeting | Fotocopiadora: Alta/Media (OR-29). Historias y ManyChat: Media (OR-35, OR-36). Admisiones: no aplica (high ticket) |

- **Banderas:** "estoy tan seguro de que quien vea este vídeo hasta el final va a conseguir este resultado" (S03): garantía de resultado sin denominador. "Mentorías filtradas": escasez fabricada (S07).
- **Adaptación:** el plan de 30 días de este archivo comprime el bloque 2 y el 3 en un mes, sin el bloque 1.

### OR-26 · El "Sistema 2.20.2000": solo sirve el "20"
- **Enunciado:** el "20" (publicar ~20 piezas para obtener información) es útil. El "2" (ITV) no tiene sustento. El "2.000" (vender a 2.000 €) no aplica a un low ticket con tráfico pago.
- **Ámbito:** orgánico.
- **Confianza:** "20", Media (OR-27). "2", Descartada como regla (OR-18). "2.000", Descartada para Santiago.
- **Fuentes:** H05–H39. "2.000 = el precio al que deberías vender… es la única forma en que tú puedes escalar a no ser que tengas 1 millón de seguidores" (H31). Matemática 200 € vs 2.000 € (H33–H35) con tasas inventadas (1% → 1%) y "la gente no sabe el precio hasta que llega a la venta" (H34).
- **Por qué no aplica:** el razonamiento supone tráfico orgánico limitado y venta por llamada. En low ticket con anuncios, el volumen se compra y manda el CPA contra el ARPU (H §7.2, J §7.2). La aritmética del ejemplo también falla (A74: "100 ventas… aprox. 3 ventas al mes o 1 cada 3 días" son 10 por mes, no 3).
- **Lo transferible:** subir el valor por cliente con bumps, upsell y un tramo superior (dominio de oferta).

### OR-27 · Producí en tandas de ~20 piezas por mes y leelas como información
- **Enunciado:** el objetivo de una tanda no son las vistas: es saber qué tema, ángulo, formato y gancho funcionan en tu cuenta. Planificá ~20 Reels por mes (≈5 por semana) los primeros dos meses.
- **Ámbito:** orgánico (en pago, el equivalente es el lote de conceptos: FE-42).
- **Confianza:** Media (S68, H19–H23, A69; mismo grupo). El principio "testear en volumen" tiene apoyo independiente en pago: Ferreira (10 creativos, L165), Alexander (10 por cuenta, L112), Gaspar ("muito teste de criativo, muito volume", L47). Pero 20 por mes en orgánico es cifra de una sola fuente.
- **Qué dicen:** "Yo lo que busco es información" (H19). "deberían publicar 20 vídeos al menos el primer y el segundo mes" (H20). Proceso de A69: 100 ideas → checklist → 10 → cada una en 2 formatos = 20 videos/mes. "Cuando un vídeo funciona te da información, no solo visitas" (S81).
- **Contradicción de esfuerzo:** "menos de 6 horas al mes" (A03, A16) vs "hasta 3,5 días al mes" (J39) vs "30–45 videos en una jornada de 6–7 h" (J40, solo §8). Para Santiago, con IA, el cuello de botella son los créditos y la revisión, no la grabación.
- **Adaptación:** 10 ideas × 2 formatos = 20 Reels en el mes. Mezcla de costo bajo (manos reales, capturas de app) y costo alto (presentadora IA). Ver plan.
- **Hipótesis: testear.** Variable: cadencia de 5 vs 3 Reels por semana en meses distintos. Métrica: ventas atribuidas a orgánico por pieza. Arrancá con 5.

### OR-28 · Esperá que gane una minoría (≈10–20%) y no te enamores de nada
- **Enunciado:** en cada tanda, la mayoría de las piezas va a rendir parecido y pocas van a despegar. Definí "ganadora" relativa a tu propia mediana.
- **Ámbito:** ambos.
- **Confianza:** la forma (pocas ganan mucho), **Alta**: Víctor (S69, H21–H22, A70, J46) + Alexander (L99: "de 10 criativos que eu testei, um tava vendendo constantemente") + distribución desigual del contenido (H §7.1). La cifra exacta, Media, con contradicciones.
- **Qué dicen:** "entre 2 y 4 van a irse por encima de la media" (S69). "el 25% de los vídeos, se han hecho virales: 5 de cada 20" (H21) vs "entre el 10 y el 20%" (H22). "El 80% no va a funcionar" (A70). Iván: de 50–60 videos funcionaron 2; con el patrón detectado, 5 de 7 (J46, solo §6).
- **Adaptación:** **ganadora = ≥2× la mediana de vistas de la tanda y envíos/alcance ≥ la mediana**. Es hipótesis: el corpus usa "supera la media" (S69), "3×" (T22) y "10×" (T35).
- **Hipótesis: testear.** Al cierre del mes, revisá si las ganadoras por esa definición también trajeron más palabras clave y ventas. Si no, ajustá la definición.

### OR-29 · Fotocopiá a las ganadoras: misma idea y gancho, otro formato, en días
- **Enunciado:** cuando una pieza gana, no pases a otra cosa. En la semana siguiente sacá 2–3 versiones del **mismo concepto** en formatos visualmente distintos.
- **Ámbito:** ambos (en pago con el matiz de Andromeda).
- **Confianza:** iterar ganadoras, **Alta**: Víctor (S80–S86, T109, A70, J46) + Borba (L10–L11: el mismo creativo campeón corriendo en varias campañas; L38: mismo cuerpo, otro hook) + Alexander (L107–L109: mismo cuerpo, leads distintas) + práctica estándar de testeo. "×3 formatos con casi el mismo guion", Media.
- **Qué dicen:** "Fotocopiadora: … misma idea, mismo gancho, misma estructura y casi el mismo guión, en 3 formatos distintos" (S82). "20 vídeos con 4 virales → … ya tengo 12 vídeos que no tengo que pensar de cero" (S83). "Al día siguiente saca otra versión, otro ángulo, otra réplica del mismo concepto ganador" (T109). "Cuando un vídeo funciona tienes que echarle más leña al fuego" (S85). El error: "cuando un video funciona, buscar hacer uno completamente distinto" (S80).
- **Ejemplos textuales:**
  - "Las 3 mejores camisetas que todo hombre debe tener" → POV en la calle preguntando; personajes (dos amigos en una tienda); dinámico probándose camisetas (S84). Sin cifra.
  - @petgurubytitos: POV "¿al perro le gusta más el arnés o el collar?" replicado con golosinas, mangos y juguetes en 4 formatos, "+1M en versiones posteriores" (S86, solo secc. 6, cifra dudosa).
- **Matiz en pago:** Andromeda agrupa creativos muy parecidos. Las fotocopias tienen que ser ejecuciones realmente distintas (otra escena, otra persona, otro formato), no el mismo video con otro texto (S §7.1). Ver FE-41.
- **Adaptación:** si gana "La cena de 10 minutos para la noche que no da" (POV con manos), las fotocopias son: presentadora IA a cámara contando por qué funciona; lista "3 cenas de 10 minutos"; comparación "la cena del plan imposible vs la del reto".
- **Hipótesis: testear.** Variable: fotocopia en otro formato vs idea nueva, publicadas la misma semana. Métrica: vistas y envíos/alcance relativos a la mediana.

### OR-30 · Buscá referencias que ya funcionaron y robá la lógica, nunca el video
- **Enunciado:** por tanda, juntá ~10 referencias de videos que ya rindieron (en español y en otros idiomas), escribí **por qué** funcionaron en una línea y aplicá esa lógica al reto.
- **Ámbito:** ambos.
- **Confianza:** modelar lógica validada, **Alta**: Víctor (S61–S63, A52, T108) + creador NY (L139: "vou pegar a ideia desse produto e vou subnichar pra roupa") + André (L147–L150: minería de ofertas validadas) + E6 (originalidad). "5 ES + 5 EN con 500k–1M de vistas", Media (su propio ejemplo tiene 206k, S63).
- **Qué dicen:** "5 en español y 5 en inglés de tu mismo sector que tengan entre 500.000 a 1 millón de visitas" (S61). "Agarras la lógica y la aplicas a tu nicho" (S63). "tu opinión no avala nada" (T108).
- **Ejemplo textual (S63):** "cómo te tratan con buen crédito vs mal crédito en EE.UU." (Reel de Ramón Páez, 206k vistas en pantalla) → para inglés: "cómo te tratan cuando vas a buscar trabajo sabiendo inglés vs sin saber inglés". Lógica: comparación del trato con X vs sin X.
- **Adaptación:** fuentes de referencia: Reels de cocina simple y bienestar realista en español, inglés y portugués de Brasil (este último es sugerencia propia). Lógica ejemplo: "tu martes con el plan del lunes vs tu martes con plan B". **Nunca** comparar cuerpos.
- **Bandera:** clonar copy de otro idioma (L97) o traducir un guion (T §7.3) es copia. Se modela la estructura.

### OR-31 · Sacá las ideas de las preguntas reales del público (PCN) y de tu propio material
- **Enunciado:** el banco de ideas sale de las **Preguntas más Comunes del Nicho** que se hace la gente de afuera, no el experto. La mejor fuente son las preguntas reales de compradoras.
- **Ámbito:** ambos.
- **Confianza:** Media (B92, T18–T21, J36–J37; un grupo; consistente con la práctica de responder preguntas reales de la audiencia).
- **Qué dicen:** "las 10 PCNs, que son las 10 Preguntas más Comunes de tu Nicho" (T18). Son preguntas del lego: «¿Cuál es el mejor peinado para mí?», no "la técnica de corte" (T19). Juntar "al menos 20 horas de contenido en bruto" del experto (J36) y una lista de "20 cosas raras que has hecho" (J37).
- **Prompt textual de la fuente (T20):** «Mi nicho es la peluquería, me dedico a cortar el pelo a hombres, además estoy creando una formación en la que enseño a otros barberos a cómo pueden empezar a cortar el pelo y ganar también dinero con eso. Quiero que me des cuáles son las 10 preguntas más comunes de mi nicho a nivel general, no de las personas que se dedican a la barbería, sino de las personas normales del día a día que no saben nada sobre cómo cortarse el pelo o qué peinado hacerse o cosas que tengan que ver con lo que yo me dedico».
- **Adaptación:** fuentes en orden de valor: (1) preguntas del asesoramiento por WhatsApp y de la comunidad del reto, anonimizadas y con permiso; (2) comentarios y DMs de anuncios; (3) el prompt PCN adaptado: «Vendo un plan de 28 días en una app, con entrenos de 20 a 30 minutos en casa y recetas de comida normal, para mujeres adultas que probaron planes y abandonaron. Dame 10 preguntas que se hacen mujeres comunes que no saben de nutrición ni de entrenamiento, con sus palabras textuales, sobre comer, cintura, hinchazón, tiempo y constancia. No uses lenguaje técnico.» Ejemplos de PCN: "¿Qué ceno si llego tarde?", "¿Puedo comer pan?", "¿Por qué me inflo a la tarde?", "¿Sirven los abdominales para la cintura?".
- **Regla:** la IA propone, la persona elige (FE-35). Nunca se le inventa una vida a la presentadora IA para sacar "20 cosas raras" (A §8.e).
- **Hipótesis: testear.** Variable: ideas de preguntas reales vs ideas del prompt PCN. Métrica: envíos/alcance y palabras clave por cada 1.000 vistas.

---

## Bloque F · Trial Reels

### OR-32 · Usá Trial Reels como laboratorio de aperturas con no seguidores
- **Enunciado:** publicá como Trial una pieza nueva o una apertura distinta (otro gancho hablado y escrito, otro primer plano) para medirla con no seguidores. Si rinde, compartila con seguidores. Máximo 2–3 trials por semana.
- **Ámbito:** orgánico.
- **Confianza:** Media (función oficial, E8; el uso que propone Víctor está mezclado con trucos descartados).
- **Fuentes:** B74–B87, T01–T10, T42–T43.
- **Qué dicen y cómo se evalúa:**

| Afirmación | ID | Evaluación |
|---|---|---|
| "Publica tres versiones del mismo vídeo en Trial Reels y luego la versión que más te funcione, publícala… en el feed principal. Y eso es lo peor que puedes hacer" | B74, T42 | **Descartada.** Es, hasta donde se sabe, el uso previsto de la función (E8). No da el motivo |
| "solamente el 20% del contenido que publicamos sale en el feed principal" (80% oculto en trials) | B76, T43 | Baja. Sin evidencia; contradice su propia Fase 1, que duplica todo |
| Dos planes de contenido: feed para seguidores y Trials para audiencias nuevas | B86, T09 | Media. Coherente con la función |
| Clientes que pasaron "de tener 500.000 visitas al mes… a más de 5 millones en solamente un mes" solo con Trial Reels | B78, T01 | Baja. Sin nombres ni capturas |
| Bernardo: "147 millones de visitas en solamente los últimos 30 días" con feed + trials | B75 | Baja. Sin aislar la variable |
| "no sé cuánto más va a durar este hack o estos glitches" | B77 | Señal de alarma: si es un "glitch", no se construye un sistema encima |

- **Adaptación:** cada semana, 2 trials: la misma receta con dos aperturas **realmente distintas** (ej. "¿Qué cenás la noche que no da?" vs "La cena que se arma con lo que quedó en la heladera"). La ganadora se comparte con seguidores y su apertura informa el gancho de pago.
- **Hipótesis: testear.** Variable: la apertura (única diferencia). Métrica: retención a 3 s y tiempo medio. Secundaria: envíos/alcance.

### OR-33 · No uses trucos de duplicación ni microvariantes para "engañar al detector"
- **Enunciado:** nada de publicar el mismo video en feed y en trial "porque son dos algoritmos", ni versiones con flip, ×1.05, color invertido o fondo cambiado para que "Instagram no sepa que es el mismo vídeo".
- **Ámbito:** orgánico (en pago, ver FE-40).
- **Confianza:** **Descartada.**
- **Fuentes:** B82–B85, T05–T08 ("Este filtro de contenido duplicado solamente funciona y solamente está activado en Trials"; "No va a detectar la duplicación porque son dos algoritmos o dos sistemas distintos"), T22–T39 (Fases 2 y 3: text hook, x1.05, flip, flip de color, fondo con IA "1, 2, 3 o 4 veces", "si le cambias el text hook 100 veces, tienes 100 text hooks").
- **Por qué se descarta:**
  1. Instagram no documenta nada de un "detector solo en Trials" (T §7). No verificable.
  2. Los sistemas de coincidencia por huella de imagen y audio suelen resistir flips y cambios leves de velocidad (T §7).
  3. Las Normas comunitarias piden no publicar contenido repetitivo: inundar con versiones casi idénticas es zona de spam y de "no original" (T §7.3, E6).
  4. Contradicción interna: la Fase 1 duplica sin cambiar nada y la tabla del mismo video dice "No duplicar sin 3 variables" (T §0).
  5. "ChatGPT-Astra 6" con "RAM de 8 GB, 16 mejor", la herramienta que haría todo eso, no corresponde a ningún modelo conocido (T33–T34, B72).
- **Lo rescatable:** agregar un **text hook** a un video que no lo tenía sí cambia la experiencia (T27) y es legítimo como prueba de apertura (OR-32). El problema es usarlo en masa para multiplicar copias.

---

## Bloque G · Conversión orgánica

### OR-34 · Tres niveles, tres lugares: Reels atraen, historias nutren, DM y página cierran
- **Enunciado:** el Reel trae gente que no te conoce; las historias explican, prueban y responden objeciones a quien ya te sigue; el DM con palabra clave y la página cierran. En low ticket el cierre es el checkout de Hotmart, no una llamada.
- **Ámbito:** orgánico.
- **Confianza:** Media (B53–B58, A20–A23, H32, J51; un grupo; consistente con E13).
- **Qué dicen:** "los reels están pensados para llegar a la gente que no os conoce" (B55). "tu comunicación y de lo que tú hablas no puede ir mezclado" (B56). Ana "empezó a hacer la comunicación de venta en otro lugar que no eran reels" (B58). Embudo Atención → Nutrición → Conversión (A20) con cascada "1.000.000 en Atención… 1.000 a Nutrición, y de ahí 10 a Venta" (A23; tasas distintas en H33: 1% → 1%).
- **Qué no aplica:** setter, closer, llamadas, CRM de admisiones, 50% de asistencia y 25% de cierre (J51–J57). Son de high ticket.
- **Adaptación:** Reels → seguir la cuenta o palabra clave. Historias (4 días por semana) → secuencia que termina en palabra clave o sticker de link con UTM. DM → ManyChat manda receta y link a la página. Página → Hotmart.

### OR-35 · Armá las historias como una secuencia de 5–8 con orden fijo
- **Enunciado:** historia 1 = lo más visual o llamativo (define cuántos ven el resto). Del medio = contexto, explicación y prueba real. Última = CTA con palabra clave o link. A una hora estable.
- **Ámbito:** orgánico.
- **Confianza:** estructura, Media (S87–S91, B54–B58). Retención numérica ("si la primera historia tiene 10.000 visitas, la quinta tendrá 7.000 u 8.000", S89), Baja. Horario 14:00 España / 8:00 NY (S87), no aplica.
- **Qué dicen:** "secuencia de entre 5 y 8 historias que se suben más o menos a la misma hora" (S87). Historia 1: "Tiene que ser lo más llamativo y visual posible" (S88), "un resultado, algo gracioso, algo impactante". Intermedias: "Aportan el contexto, la explicación y la prueba" (S90). Última: "Llamada a la acción (CTA) con una palabra clave" (S91), por ejemplo "YO" o "CONSTRUIR".
- **Mecanismo:** las historias se ven en orden y cada toque hacia adelante pierde gente (consistente con Insights, S §7.1). Si la primera no engancha, el resto no existe.
- **Adaptación (plantilla de secuencia, 6 historias):**
  1. Plato terminado en primer plano + pregunta en sticker de encuesta ("¿Te pasa que a la noche no sabés qué cenar?").
  2. Contexto: "La cena de la noche que no da tiene que salir en 10 minutos con lo que hay."
  3. Cómo: 3 pasos en un video de manos de 10 s.
  4. Prueba real: captura de la receta dentro de la app (no un testimonio inventado).
  5. Objeción: "¿Y si un día no entrenás? Hay plan B de 8 minutos."
  6. CTA: "Escribime RETO y te mando cómo es por dentro" o sticker de link con UTM.
- **Hipótesis: testear.** Variable: historia 1 con plato vs historia 1 con pregunta en texto sobre fondo. Métrica: retención historia 1 → última (%) y toques en link/palabras clave.

### OR-36 · Palabra clave → ManyChat → algo útil + link con UTM
- **Enunciado:** el CTA orgánico pide escribir o comentar una palabra clave. ManyChat responde con algo útil (la receta, la lista de compras de la semana) y el link a la página con UTM. Si hay automatización con IA, solo responde dudas del producto; no pide medidas ni datos de salud.
- **Ámbito:** orgánico.
- **Confianza:** Media (S91–S96, A35, A67, J52; un grupo; práctica estándar; ManyChat opera por API oficial, E14). La versión "comentá esta frase para el algoritmo" (LB24), **Descartada**.
- **Qué dicen:** "un flujo automatizado de ManyChat con el paso de inteligencia artificial (AI Step)" que autocalifica (S92). Palabras de ejemplo: "YO" (zapatos, A35), "CONSULTA" (crédito automotriz, A68), "BONSAI" (A85), "AGUA" (J31), "CONSTRUIR" (S91). En TikTok, link en bio (S96, no verificado).
- **Reglas para Reto Cintura 28:**
  - Dos palabras: **RECETA** (Reels de película: manda la receta + link) y **RETO** (historias y Reels de producto: manda "cómo es por dentro" + link).
  - El link lleva UTM por pieza (OR-37).
  - **Principio 3 del repo:** no se piden ni se mandan al píxel medidas, peso ni datos de salud. Si el bot pregunta algo, que sea "¿qué te frena más: el tiempo o la comida?", nunca "¿cuánto pesás?".
  - Ventana de 24 h para mensajería automática (E14).
- **Hipótesis: testear.** Variable: palabra clave con regalo (receta) vs sin regalo (solo link). Métrica: clics al link ÷ palabras clave recibidas y compras atribuidas.

### OR-37 · Atribuí cada venta a la pieza orgánica que la trajo
- **Enunciado:** cada Reel, secuencia de historias y respuesta de ManyChat lleva un link con UTM propio. Las decisiones se toman por ventas atribuidas, no por vistas.
- **Ámbito:** ambos.
- **Confianza:** **Alta.** Víctor (S93–S94: "La UTM te dice de qué vídeo exacto viene esa persona"; A28: +38.000 USD "medidas por UTM") + Ferreira (L170: Utmify por webhook + script de UTMs) + Borba (L04–L07: embudo en Utmify) + práctica estándar.
- **Caso textual (S94–S95):** Reel de Ramón Páez en una obra, texto "Pagué $700.000", en los últimos 15 s pide comentar la palabra clave para la guía → "un solo vídeo… generó 55.000 dólares en ventas". Cifra sin verificar (Baja), pero el mecanismo de atribución es estándar.
- **Adaptación:** convención para orgánico: `utm_source=ig&utm_medium=organico&utm_campaign=r28_org_<mes>&utm_content=<ID de pieza>` (por ejemplo `R07`, `H12` para historias, `MC-RECETA` para ManyChat). Se verifica que Hotmart y Utmify lean esos parámetros (o los de Hotmart `src`/`sck`) con una compra de prueba. La planilla tiene columna "ventas atribuidas".

### OR-38 · El producto y el CTA van en los últimos segundos, con una transición explícita
- **Enunciado (orgánico):** el CTA vive en los últimos ~15 s (o el último 20–30%), precedido por una frase puente que conecta el tema con el producto.
- **Enunciado (pago):** el CTA también va al final, pero el producto aparece antes (35–60%). Ver OR-11.
- **Ámbito:** ambos.
- **Confianza:** CTA al final, **Alta**: Víctor (S95, S97, A35, A67, J28, J31, B105, B112, H26) + Borba (L39: producto → precio → "clica agora em Saiba Mais" al cierre) + Repo (guiones V01–V06 cierran con "Link abajo"). Transición explícita como clave de la venta, Media (J26–J33).
- **Qué dicen:** "En los últimos 15 segundos invitó a comentar la palabra clave" (S95). Transición modelo: "Pero si en tu negocio no tienes algo físico y quieres vender miles de euros con anuncios sin hacer esto…" (J30). "no es cómo empiezas, es cómo terminas" (J32). "100.000 visitas con 10% de retención al final = 10.000 personas cualificadas escuchando tu CTA" (J33, aritmética del orador).
- **Contradicción:** el 80/20 de S64 pone casi todo el peso en el gancho; J32 lo pone en el final. No se contradicen si se separan funciones: el gancho gana la vista; la transición gana la acción.
- **Adaptación (frases puente):** "Y si querés esto resuelto todos los días sin pensar qué cocinar…" → "…está en el Reto Cintura 28. Comentá RECETA." / "Ese es el plan B del reto: 8 minutos y no cortás la racha. Escribime RETO."
- **Hipótesis: testear.** Variable: con frase puente vs CTA seco. Métrica: palabras clave por cada 1.000 vistas.

### OR-39 · Mostrale el producto, con anuncios chicos, a quien ya vio tu orgánico
- **Enunciado:** armá públicos de quienes vieron una parte alta de tus Reels o interactuaron con la cuenta, y mostrales creativos de producto (niveles 3–4: qué incluye, plan B, garantía, precio). Presupuesto chico y separado.
- **Ámbito:** pago (alimentado por orgánico).
- **Confianza:** Media (S99, un caso; función estándar de Meta; el repo ya prevé retargeting de visitantes con US$ 3–5/día).
- **Qué dicen:** Alfredo: "microanuncios de retargeting dirigidos únicamente a quienes ya vieron el contenido orgánico", "0 → +200k seguidores y ventas con anuncios hiperdirigidos a costo mínimo" (S99).
- **Contradicción:** el mismo corpus dice que los anuncios "intoxican" (S19). Este caso lo desmiente (OR-20).
- **Adaptación:** cuando el público de "vieron ≥50% de un Reel o interactuaron en 30 días" sea suficiente (verificar en el Administrador), un conjunto de retargeting con el lote de producto del repo (V03 "Abrí la app conmigo", V14 "Lo que te llega cuando comprás"). Verificar si la categoría salud de la cuenta restringe audiencias personalizadas.
- **Hipótesis: testear.** Variable: retargeting a viewers del orgánico vs retargeting a visitantes de la página (estructura del repo). Métrica: CPA.

### OR-40 · CTA "Seguí la cuenta" en el primer mes: opcional
- **Enunciado:** en algunos Reels de película del primer mes, el CTA puede ser "seguí la cuenta para la receta de mañana" en vez de la palabra clave.
- **Ámbito:** orgánico.
- **Confianza:** Baja (J47, una frase sobre un caso high ticket).
- **Adaptación:** reservalo para series ("Semana de cenas de 10 minutos, día 1 de 5").
- **Hipótesis: testear.** Variable: CTA seguir vs CTA palabra clave. Métrica: seguidores ganados por Reel vs palabras clave.

---

## Bloque H · Marca, faro y personaje

### OR-41 · La "teoría del faro" sirve como checklist, no como ley
- **Enunciado:** usá los 5 "apagones" como lista de revisión mensual de la cuenta: ¿hablo para la primera fila? ¿hay película o solo palomitas? ¿hay alguien reconocible? ¿lo que se ve cuadra con el precio? ¿vendo apuntes o el resultado?
- **Ámbito:** orgánico.
- **Confianza:** Baja como modelo (metáfora de una fuente, con cifras de miedo sin fuente: "El 95% de marcas personales… van a estar muertas en menos de 12 meses", B93). Útil como checklist.
- **Fuentes:** B99–B145. "una marca personal es un faro… La torre es tu cuenta… La luz es tu contenido… Y el puerto es tu producto, donde el barco atraca y paga" (B99).

| Apagón | Qué dice | Dónde se trata |
|---|---|---|
| 1. La primera fila | Contenido para el gremio | OR-12 |
| 2. Palomitas sin película | Solo videos de producto | OR-13 |
| 3. El pasamontañas | Marca sin cara | OR-42 |
| 4. El precio visual roto | Estética incongruente con el precio | FE-28 |
| 5. Los apuntes | Vender sesiones y módulos en vez del resultado | Dominio de oferta. Límite: el resultado se promete como vivencia y proceso, nunca centímetros ni kilos garantizados (Repo, principio 2) |

### OR-42 · Sin cara real del dueño: personaje IA consistente y marcado, o manos, comida y app
- **Enunciado:** la cuenta necesita algo reconocible en menos de un segundo. Para Reto Cintura 28 hay dos caminos honestos: (a) una **presentadora IA fija** ("La guía del reto"), marcada como personaje creado con IA; (b) contenido sin rostro: **manos reales cocinando, platos y la app en un celular real**. No hace falta la cara de Santiago.
- **Ámbito:** ambos.
- **Confianza:** "cara > logo", Media (B113–B118 con caso Llorente y capturas; consistente con el rendimiento de UGC). "Sin cara no hay confianza, sin confianza no hay venta" como absoluto, **Descartada**: las cuentas de recetas sin rostro (manos y plato cenital) son un formato masivo conocido.
- **Qué dicen:** "emprender con un pasamontañas puesto" (B113). "Nunca, nunca, nunca un logo va a tener tanta fuerza como una cara" (B114). "Tu cara es la matrícula de tu marca" (B115). Instalaciones Llorente: "llevaban publicando más de 150 vídeos con su cuenta y ninguno funcionaba" → Sergio Llorente con cara: +200.000 seguidores y "más de 55.000 € al mes" (B116–B117; ingresos sin verificar).
- **Mecanismo:** el cerebro reconoce caras y contextos más rápido que logos. Un personaje o un estilo visual constante cumplen la función de "matrícula".
- **Adaptación:**
  - Línea A (presentadora IA): mitos, PCN, plan B. Misma cara, mismo living o cocina, misma ropa deportiva sin marcas (personajes de `06-videos.md`). Etiqueta de IA de Instagram (E10) y en la bio "Presentadora creada con IA".
  - Línea B (sin rostro): recetas y app, en POV con manos reales.
  - Si en algún momento se quiere una persona real, solo puede ser real: Santiago, su socio o una clienta con permiso escrito. Nunca una IA presentada como persona real.
- **Hipótesis: testear.** Variable: Línea A vs Línea B con el mismo tema. Métrica: envíos/alcance y palabras clave por 1.000 vistas.

### OR-43 · Personaje y contexto reconocibles sin audio
- **Enunciado:** el personaje y su contexto se entienden en menos de 1 s sin audio: siempre la misma ropa, el mismo lugar y los mismos objetos de marca (cinta métrica, plato, celular con la app).
- **Ámbito:** ambos.
- **Confianza:** Media (J43, A51, B125–B127; un grupo).
- **Qué dicen:** Ramón Páez (@lordconstruye) con peto u overol, camisa a cuadros y casco: "Contexto inmediato sin hablar" (J43). "Personaje de marca congruente: apariencia y contexto alineados con la autoridad del mensaje" (A51).
- **Bandera de la fuente:** "Si tú vendes cómo ponerte en forma… tú no puedes estar gordo" (B126). Trasladado a copy o a la elección de cuerpos, empuja a la autopercepción negativa que Meta prohíbe (E5). **Descartado** como criterio. El personaje es una mujer común en su cocina, no una atleta de portada (A §8.d).
- **Adaptación:** ficha fija de "La guía del reto" (Higgsfield, job `71821c67-…`): ~30 años, pelo castaño ondulado, ropa deportiva sin marcas, cocina con luz de ventana. Ver FE-30.

### OR-44 · El personaje IA presenta; nunca testimonia, no tiene credenciales ni vida inventada
- **Enunciado:** la presentadora IA no dice "yo bajé", "yo lo hice", "soy nutricionista", ni cuenta anécdotas personales inventadas. No hay antes/después. No hay "clientas" generadas.
- **Ámbito:** ambos.
- **Confianza:** **Norma** (Repo principios 1 y 2; `06-videos.md`; E5; E10).
- **Fuentes que lo contradicen y quedan descartadas:** "expert" con IA para dar autoridad (L103–L104), ideas personales tipo "Las 5 cosas más raras que tengo en mi casa" (A86) aplicadas a una IA, casos "error → qué hicimos → resultado" con clientas inventadas (T §7.3).
- **Adaptación:** frases permitidas: "En el reto, el día que no da, hacés el plan B", "La mayoría empieza el lunes…". Prohibidas: "Yo bajé 4 cm", "Como nutricionista te digo".

---

## Casos y cifras: qué tan confiables son

Todos los casos son del propio vendedor del método, con sesgo de supervivencia (nunca hay denominador). Ninguno aísla la variable. Las cifras de ingresos de clientes no son verificables.

| Caso | IDs | Qué declara | Evidencia | Inconsistencias | Fiabilidad | Qué se puede usar |
|---|---|---|---|---|---|---|
| Víctor / Viralidad (credenciales) | B97, T92, A02, B80, J03 | "+10.000 Millones" de visitas; "107 millones de seguidores"; "4.3 billones de visitas", 109M seguidores y 35M USD; "+3.000 clientes activos"; "+20 millones de dólares al año" | Gráficos 3D, sin fuente | Cambian entre videos; "billones" es calco del inglés | Baja | Nada como dato |
| Bernardo Jurado | S04, S31, B122, B75, S103 | 500k en 45 días; 20k→340k en 30 días; +28M visitas y 300k seguidores el primer mes; 1,8M (habla) vs 2,1M (pantalla) vs 1,7M; 147M visitas en 30 días; +50k USD/mes | Capturas de perfil y Reels de 22,8M, 4,5M y 1,8M | Plazos y cifras no cuadran; "64 años" también se atribuye a Ramón (S104, H42) | Baja | Que un set austero y congruente puede rendir (FE-28) |
| Alfredo Marín | S37–S40, S04, S99, H15 | Cuenta de 80k → nueva con 507 (o 500) migrados → primer video +1M; 100k en 30 días; 373k IG; 800k IG+TikTok; "0 a +200k" con retargeting | Miro y capturas (8M, 4,2M, 23,3M) | Cifras incompatibles; cambió contenido y cuenta a la vez | Baja | Que el retargeting a viewers existe en el corpus (OR-39) |
| Giranda | T89, T102–T104, T110, S04 | 4.000/4.400 → 121.000 "en un mes"/"en días" → 290.000+ en 3 meses; 250k en 90 días (otro video); un video de 1,8M con 3.000+ conversaciones | Caso con @, sin captura transcripta | 4.000 vs 4.400; 35.000 vs 30.000; 290k vs 250k | Baja | El diagnóstico "vocabulario de iniciados" (OR-12) |
| Chris (@chrishpro) | T105 | 6.800 → 105.000+ | Ninguna transcripta | — | Baja | — |
| Ana | B57–B58 | Primer viral en 4 videos; +177.000 en menos de 2 meses; venta en historias | Captura aludida, no descrita | — | Baja | Venta fuera de los Reels (OR-34) |
| Mirko (médico) | B59 | 300.000 seguidores en 1,5 meses | Ninguna | — | Baja | — |
| Alejandro Cano (@elneurocanino) | B103 | 3M visitas y 20.000 seguidores en 2 semanas | Capturas: Reels de 1,5M y 8,2M; perfil 20,6k y 86,3k | Dos cifras de perfil distintas | Media-baja | Contenido para el espectador cero (OR-12) |
| El Sensei | B110–B111 | 4,8M seguidores sumando cuentas; 85% de videos sin trading; factura "5 o 10 veces" más que otros | Gráfico | Facturación no verificable | Baja | Proporción película/palomitas como referencia (OR-13) |
| Instalaciones Llorente → Sergio Llorente | B116–B117 | +150 videos impersonales y menos de 6.000 (pantalla 6.985) → +200.000 seguidores y +55.000 €/mes | Capturas de perfil | 6.000 vs 6.985; ingresos sin respaldo | Baja | Cara/contexto reconocible (OR-42) |
| Laura (logopeda) | B138, H38 | 45 €/sesión → +3.000 € por venta; promesa "Tu hijo va a hablar correctamente en tres meses" | Transferencias en pantalla | Compara una sesión con un programa completo | Media en el precio; promesa riesgosa | Nada de la promesa (salud) |
| Jordan Belfort | S75–S79 | 2,7M seguidores con Reels de 70–90k → "¿Cuánto cuesta tu outfit?" 3,3–3,4M y 5M; +30M en 3 meses | Capturas TikTok/IG | 3,3 vs 3,4M; ya era famoso | Baja | Contraejemplo de la "ITV" (OR-18) |
| Ramón Páez (@lordconstruye) | S94–S95, S104, H42, J43 | Un Reel ("Pagué $700.000") → 55.000 USD por UTM; 150.000 USD/mes "a los 64 años" | Reel con rótulo "$55K" | "64 años" repetido con Bernardo | Baja | Atribución por UTM (OR-37) y contexto visual (OR-43) |
| Susana (@petgurubytitos) | S86 | Fotocopiadora en 4 formatos, +1M | Reels de 865k, 593k, 177k | "974 mil" coincide con la tarjeta de Melkis | Baja | Ejemplo de fotocopiadora (OR-29) |
| Melkis (@melkisfitcoach) | S04 | 300k en 60 días | Tarjeta de 974k | No cuadra | Baja | — |
| Julieta Tejería (fitness) | A79–A80, S103, H42 | ~20k USD/mes con 3M visitas → 300 leads/día → 10 llamadas → 2 ventas de 500 USD; o +25k USD/mes | Ninguna | 1.000 USD/día × 30 = 30k, no 20k | Baja | Nada: es high ticket con llamadas |
| Leidy Salazar, Neus Domenech, Javier Solís | S103, H03, A81 | +45k USD/mes; <5k → 30k seguidores y +25k USD/mes; 2M visitas → +43.000 €/mes | Ninguna o tarjetas | — | Baja | — |
| Alflo Pérez | A27–A28 | Video técnico: 1.727 visitas, 0 ventas. POV del terreno: 5,1M y +38.000 USD por UTM | Hoja con números | "Ventas" vs "comisiones" | Media-baja | El único par comparable del corpus: idea de nicho vs idea ancha (OR-11) |
| Cristian Villar/Viñals | A55, A14 | 64M de visitas; 140.000 seguidores en 7 días con 2 videos | Miniatura | Dos apellidos | Baja | Formato entrevista (FE-05) |
| Jorge (café) | A54 | Tier list en el súper: 3M visitas, 85.000 seguidores en 2 semanas, "colapsó su tienda online" | Ninguna | — | Baja | Formato ranking (FE-09) |
| Tío Luzardo / Diego | A53, A82 | Sketch "Padre Mediocre vs Padre Rico": 10,9M. Diego: "video resucitado" a 10,9M | Miniatura | Misma cifra en dos casos: posible cruce | Baja | Formato personajes (FE-06) |
| JR Fernández | J26 | Graffiti con agua a presión: 11M, 0 ventas | Reel reproducido | — | Media (como contraejemplo) | Viral sin transición no vende (OR-11) |
| Cuenta de pruebas de Iván | J46 | 2 de 50–60; con el patrón "Pobre, rico, millonario", 5 de 7 | Solo §6 | Muestra chica | Baja | Detectar patrón y repetir (OR-29) |
| @virmastery | S14 | 7.189 vistas / 11,1k seguidores, tachada "no apta" | Captura | 65%, sana por su propia regla | — | Contraejemplo de la ITV |
| Cuenta "confundida" | S16 | Reels de 18,6M, 2,2M, 4M y 383k mezclando temas | Capturas | Contradice su tesis | — | Contraejemplo de OR-15 |
| Clientes de Viralidad con Trial Reels | B78, T01 | 500.000 → +5M visitas/mes en un mes | Ninguna | Sin nombres | Baja | — |
| "Dos chicas comparando su peso corporal" | S §2.9 | 827k vistas (ejemplo de formato que funciona) | Captura | — | — | **Descartado** para el reto: comparación de cuerpos (E5) |
| Anclaje de costo de anuncios | T110 | "alcanzar a 1 millón de personas con anuncios cuesta unos 48.000 €" | Ninguna | Implica CPM ~48 €, muy inflado; compara vistas con personas | Descartada | Nada |

---

## Plan orgánico de 30 días · Reto Cintura 28

**Objetivo del mes:** aprender qué líneas, temas, formatos y aperturas funcionan en la cuenta, montar el circuito Reel → historias → palabra clave → página con UTM, y llevar los conceptos ganadores al banco de anuncios. No es un objetivo de seguidores.

**Rostro:** no se usa la cara real del dueño. Dos líneas visuales: presentadora IA marcada como personaje creado con IA, y contenido sin rostro (manos, comida y app real).

### Reglas del plan (no negociables)

- Ningún Reel promete centímetros, kilos ni plazos. Sin antes/después. Sin zoom a zonas del cuerpo. Sin comparar cuerpos.
- La presentadora IA nunca da testimonio, nunca dice "yo lo hice" y no tiene credenciales. Etiqueta de IA activada (E10) y aviso en la bio.
- Prueba social solo real y con permiso escrito.
- Sin seguidores comprados, pods, follow por follow, sorteos genéricos ni "comentá para el algoritmo".
- Sin duplicados, flips ni microvariantes para "engañar" a Instagram. Sin videos ajenos.
- Venta explícita en historias, DM y página; en el Reel solo la frase puente y la palabra clave (E9).
- Ningún dato de salud o medidas al píxel ni a ManyChat.
- Confirmar el número real de recetas antes de decirlo en pantalla.

### Líneas de contenido y mezcla del mes (20 Reels)

| Línea | Qué es | Formato principal | Costo | Reels/mes | Palabra clave |
|---|---|---|---|---|---|
| L1 Recetas (película) | Cenas, desayunos y "platos de siempre en versión Cintura", de punta a punta | POV con manos reales (FE-02), lista (FE-08) | Bajo | 7 | RECETA |
| L2 Mitos y PCN (película) | Preguntas reales y mitos ("abdominales", "no toda la panza es grasa", en tercera persona) | Presentadora IA a cámara (FE-04) | Medio-alto (créditos) | 6 | RECETA o RETO |
| L3 Situaciones (película) | "El plan del lunes vs el plan que se sostiene", "lo que dura un capítulo de dibujitos" | Comparación (FE-10), personajes si hay presupuesto (FE-06) | Medio | 3 | RETO |
| L4 Producto por dentro (palomitas) | App real, plan B, qué llega al comprar, cómo se arma el día | Demostración y capturas (FE-11) | Bajo | 4 | RETO |

Proporción: 16 de película y 4 de producto (OR-13).

### Semana a semana

**Días 1–3 · Preparación**
1. Captura de "Estado de la cuenta" (OR-10). Cuenta profesional vinculada al portafolio comercial de los anuncios.
2. Bio: qué es (sin promesa de peso), "Presentadora creada con IA", aviso de salud breve, link a la página con UTM de bio. Destacados: "Cómo es por dentro", "Recetas", "Preguntas".
3. ManyChat: flujos RECETA y RETO (OR-36), con UTM por flujo. Compra de prueba para verificar que Utmify/Hotmart leen los parámetros.
4. Planilla de ideas y métricas (columnas abajo).
5. Banco de 30 preguntas reales (asesoramiento, comunidad, comentarios de anuncios) + prompt PCN (OR-31). Elegir **10 ideas** que pasen el espectador cero, el 5/50 y la revisión de políticas (OR-12).
6. 10 referencias con su lógica anotada en una línea (OR-30).
7. Asignar a cada idea 2 formatos (10 × 2 = 20 Reels). Producción en lote de la semana 1 con la ficha fija de la presentadora (FE-44).
8. Siembra opcional con compradoras reales (OR-24).

**Días 4–10 · Semana 1**
- 5 Reels (ideas 1 a 5, formato A). Mezcla sugerida: 2 L1, 2 L2, 1 L4.
- 4 secuencias de historias (plantilla de OR-35) a hora fija.
- 2 Trial Reels con aperturas distintas de una receta (OR-32).
- Lectura diaria a las 24 h de cada Reel: retención a 3 s o salteo, tiempo medio, envíos/alcance.

**Días 11–17 · Semana 2**
- 5 Reels (ideas 6 a 10, formato A).
- Cierre de la semana 1: mediana de vistas y de envíos/alcance. Marcar ganadoras (OR-28: ≥2× mediana de vistas y envíos/alcance ≥ mediana).
- 4 secuencias de historias. La historia 1 se testea (plato vs pregunta).
- 2 Trial Reels. La apertura ganadora pasa al banco de ganchos de pago.

**Días 18–24 · Semana 3**
- 5 Reels: primero las **fotocopias** de las ganadoras en formato B (OR-29); el resto, ideas en su formato B.
- 4 secuencias de historias con palabra clave RETO.
- 2 Trial Reels.
- Primer concepto ganador orgánico entra al lote de pago como **concepto nuevo**, con las reglas de anuncios del repo (tercera persona, sin atributos personales).

**Días 25–30 · Semana 4 y cierre**
- 5 Reels (formato B restantes + fotocopias).
- 4 secuencias de historias.
- Test de registro (hipótesis): 1 Trial Reel en tuteo neutro vs el mismo en voseo, para decidir el registro de la cuenta en LATAM (ver FE-33).
- Día 30: tabla de decisiones (abajo) y registro en `10-decisiones.md` y `metrics/experimentos.csv`.

### Metas del mes

**Metas de proceso (fijas):**

| Meta | Valor |
|---|---|
| Reels publicados | 20 |
| Secuencias de historias | 16 |
| Trial Reels | 8 |
| Flujos de ManyChat activos | 2 (RECETA, RETO) |
| Piezas con UTM propia | 100% |
| Infracciones en "Estado de la cuenta" | 0 |
| Ideas con pregunta real como origen | ≥5 de 10 |

**Metas de resultado:** no hay benchmark propio todavía. Se fijan al cerrar la semana 1 con la mediana de la cuenta. Toda cifra externa (E1) es referencia de anuncios, no de orgánico.

### Métricas: qué se mide, dónde y para qué

| Nivel | Métrica | Dónde | Para decidir |
|---|---|---|---|
| Reel | Vistas y alcance | Insights | Volumen (no decide solo) |
| Reel | % de vistas de no seguidores | Insights | Si la pieza salió de la base (OR-02) |
| Reel | Retención a 3 s / tasa de salteo (si Insights la muestra) | Insights | Apertura (OR-03) |
| Reel | Tiempo medio de visualización y % de la duración | Insights | Cuerpo y ritmo (FE-18) |
| Reel | Envíos ÷ alcance | Insights | Señal top (OR-04); criterio de ganadora |
| Reel | Me gusta ÷ alcance; guardados | Insights | Señal secundaria |
| Reel | Seguidores ganados | Insights | CTA "seguí" (OR-40) |
| Reel | Palabras clave recibidas por cada 1.000 vistas | ManyChat | Transición y CTA (OR-38) |
| Reel | Clics al link (UTM) | Utmify | Interés en el producto |
| Reel | Inicios de checkout y compras atribuidas | Utmify / Hotmart | Decisión final (OR-37) |
| Historias | Vistas de la historia 1 ÷ seguidores (sin umbral) | Insights | Termómetro de la base (OR-18) |
| Historias | Retención historia 1 → última (%) | Insights | Orden de la secuencia (OR-35) |
| Historias | Toques en el sticker de link; respuestas con palabra clave | Insights / ManyChat | CTA |
| Trial | Retención a 3 s y tiempo medio, apertura A vs B | Insights | Apertura ganadora (OR-32) |
| Cuenta | Estado de la cuenta | App | Salud real (OR-10) |
| Cuenta | Ventas atribuidas a orgánico; costo de producción por venta (créditos + horas) | Utmify + planilla | Si el orgánico paga su producción |

**Columnas de la planilla** (base J38, ampliada): Nº · fecha · línea · idea/hook · pregunta de origen (si es real) · referencia y lógica · nivel de consciencia · formato · personaje (IA / manos / app) · Trial sí/no · UTM · las métricas de arriba · ¿ganadora? · próxima acción.

### Decisiones del día 30

| Si pasa esto | Entonces |
|---|---|
| Una línea tiene mediana de envíos/alcance claramente mayor que las otras | Sube su peso en el mes 2 (hipótesis; registrar) |
| Un Reel es ganador | 2–3 fotocopias en otros formatos el mes 2 + el concepto entra al banco de pago como concepto nuevo |
| Hay muchas palabras clave pero pocos clics o compras | Revisar el flujo de ManyChat y la página (IC), no el Reel |
| Hay vistas altas y cero palabras clave | Falta transición (OR-38): reescribir los finales |
| La presentadora IA rinde claramente peor que la línea sin rostro en el mismo tema | Mes 2 con más manos/app y la IA solo en mitos |
| Algún Reel quedó marcado en Estado de la cuenta | Revisar contra las pautas (E9) y ajustar la línea |
| Ventas atribuidas = 0 en 30 días | No es fracaso del orgánico por sí solo: verificar UTM con compra de prueba y medir el aporte en retargeting (OR-39) |

### Conexión con los anuncios

- El orgánico es laboratorio barato de **temas y aperturas**. Lo que gana en Trial Reels y en Reels pasa al lote de pago, reescrito con las reglas de pago (tercera persona, sin atributos personales, sin promesas).
- Los públicos de quienes vieron el orgánico alimentan el retargeting (OR-39).
- Hipótesis aparte: usar un Reel orgánico ganador como anuncio ("publicación existente") para conservar su prueba social. Una variable, métrica CPA.

---

## Registro de descartes (no volver a proponer)

| Idea | Fuente | Motivo |
|---|---|---|
| "Los anuncios intoxican la cuenta" / "Instagram te baja resultados para que pagues más" | S19–S23, H11–H12 | Instagram lo negó (E7); el propio corpus usa anuncios (S99, J51) |
| R.I. como métrica que decide la distribución | S25–S29, S39, A38 | Inventada por el autor; tres definiciones incompatibles |
| "ITV" 5%/30% como nota de apta/no apta | H05–H14, S28–S29, S100 | Umbrales inconsistentes; los Reels llegan a no seguidores; contraejemplos propios |
| "Moroso": historial que castiga para siempre | T99, T107 | Sin evidencia; Jordan Belfort se arregló cambiando el contenido |
| "Las señales no son likes, comentarios ni guardados" | T94, A40 | Contradice a Mosseri (E2) |
| "Las colaboraciones intoxican" | S13, S15, H11 | Función oficial; el mismo autor usa un Reel en colaboración (H16) |
| "Dejá de publicar" literal | S01 | Contradice S68 y S85 |
| Migrar de cuenta para escapar de una restricción; cuentas de agencia de repuesto; MoreLogin; "lateralizar" | T107, A41, L100, L111, L159, LB13, LB25 | Evasión de medidas de Meta: prohibido |
| "Publicar la ganadora del Trial en el feed es lo peor" | B74, T42 | Es el uso previsto de la función |
| Duplicar feed + Trial "porque son dos algoritmos"; "detector solo en Trials" | B82–B85, T05–T08 | Sin evidencia; riesgo de contenido repetitivo |
| Flip, ×1.05, color invertido y fondo con IA para que "Instagram no sepa que es el mismo vídeo" | T24–T39 | Sin evidencia; zona de spam; Meta agrupa microvariantes |
| "ChatGPT-Astra 6" | B72, T33–T34 | No corresponde a ningún modelo conocido |
| "Polémico" como criterio en salud | A49 | Riesgo de desinformación y de políticas |
| "Si vendés fitness no podés estar gordo" | B126 | Autopercepción negativa (E5); no es condición demostrada |
| Expertos con IA, vida inventada para la presentadora, clientas generadas | L103–L104, A86 | Engaño; Repo principio 1 |
| "Comentá esta frase" para el algoritmo | LB24 | *Engagement bait* |
| "2.000 € es la única forma de escalar"; "low ticket necesita 1M de seguidores" | H31, J48 | Razonamiento solo orgánico; el negocio es tráfico pago |
| "Con buen marketing da igual un producto mediocre" | B62 | En Hotmart se paga con reembolsos (Repo principio 1) |
| Garantías de resultado ("quien vea este vídeo… va a conseguir este resultado"; "garantizado por contrato") | S03, A84 | Promesa engañosa |
| "1 millón de personas con anuncios cuesta 48.000 €" | T110 | CPM inflado; compara vistas con personas |
| Cifras retóricas: "95% de marcas muertas en 12 meses", "90 de cada 100 son espectadores cero", "75% productos de deseo", "90% en niveles 0–1", "7/1.000 vs 600/1.000", "menos del 25% de seguidos" | B93, B102, S44, S48, A77, H29, B05 | Sin fuente. Se puede usar la dirección, nunca el número |
| Comparación de cuerpos ("dos chicas comparando su peso corporal") | S §2.9 | E5 |

## Contradicciones internas del corpus de Víctor (para no tomar ninguna cifra como ley)

| Tema | Versión 1 | Versión 2 |
|---|---|---|
| Umbral sano de Reels | 40–100% (S28) | Mínimo 30% (H08, S100) |
| Tasa de ganadoras | 10–20% (H22, S69) | 25%, "5 de cada 20" (H21); 2 de 50–60 (J46) |
| Peso del gancho | 80% del tiempo en el gancho (S64) | "puedes tener un mal gancho" (A42); "no es cómo empiezas, es cómo terminas" (J32) |
| Tiempo de producción | Menos de 6 h/mes (A03) | Hasta 3,5 días/mes (J39) |
| Anuncios | Intoxican (S19, H11) | Parte del embudo (J51) y retargeting (S99) |
| Colaboraciones | Intoxican (H11) | Reel en colaboración para migrar (H16) |
| Punto de transición en un Reel de 60 s | 15 s (A34) | 30 s (J28–J29); 45 s (S78, H §6) |
| Definición de R.I. | Gusta ÷ mostrado (S25) | Retención (A38); vistas ÷ seguidores (H08) |
| Migrados de Alfredo | 507 (S38) | 500 (H15) |
| "Sin aportar valor" | S02, A06 | CTA con clase, guía o recurso (S98); "enseñá tu experiencia" (B17) |
