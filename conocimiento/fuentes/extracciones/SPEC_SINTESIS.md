# Especificación de síntesis (base de conocimiento de copy, oferta y tráfico)

## Contexto
Dueño: Santiago (Uruguay). Vende "Reto Cintura 28": infoproducto low ticket de fitness en casa para mujeres 25-50 de LATAM (app web con plan de 28 días + guía, más de 70 recetas), por Hotmart (US$ 15,90), con anuncios de Meta (Reels 9:16, voz en off ElevenLabs, modelos latinas generadas con IA como presentadoras, edición en Remotion). Va a montar un sistema multi-agente (Hermes Agent) que use estas skills, y quiere que el sistema se alimente de cada transcripción nueva para "no fallar más" con los copys.

Regla de oro de Santiago para ganchos: el gancho tiene que tocar el dolor de quien mira o hacerla preguntarse algo. Los arranques descriptivos de escena ("son las 9, abrís la heladera") NO frenan el scroll.

## Material de entrada (extracciones ya hechas, una por fuente)
Carpeta: conocimiento/fuentes/extracciones/
- extract_b20dd711.md — Víctor Heras: "5 cambios de las redes", Trial Reels/PCN (inicio), "Teoría del faro / 5 apagones". IDs B.
- extract_0f6f1360.md — Víctor Heras: Trial Reels + PCN, "Aprende a comunicar" (pares de frases), "Algoritmo / El Aval". IDs T.
- extract_661e8d1a.md — Víctor Heras: "Sistema 3x30". IDs S.
- extract_viralidad_varios.md — Clase 2:12 Adrià + Víctor (A), "Sistema 2.20.2000" (H), mentoría JR Fernández (J), adiciones al compilado brasileño (LB).
- extract_lowticket_br.md — Compilado de 7 creadores brasileños de low ticket (operación de ofertas, Meta Ads, bumps, escala). IDs L.
Reglas del negocio que mandan sobre cualquier fuente (leelas primero):
- docs/01-principios.md
- compliance/meta-ads-politicas.md
- playbook/06-creativos.md, 08-meta-ads.md, 09-medicion-y-escala.md (método actual del repo; tu síntesis lo mejora, no lo contradice sin decirlo)

## Evidencia externa ya investigada (podés usarla como contraste)
- Hook rate (vistas de 3 s ÷ impresiones): 30-40% es bueno en Meta; mediana de Reels ~30%. Hold rate (vistas de 15 s ÷ vistas de 3 s): ~20-25%.
- Los primeros 3 s deciden; finalización y re-visualizaciones empujan la distribución. Mosseri (Instagram) dijo que tiempo de visualización, likes por alcance y envíos ("sends") por alcance son señales top.
- Meta Andromeda (motor de recuperación de anuncios, 2024-2025) favorece la diversidad creativa real: conceptos distintos, no variantes mínimas. Con segmentación amplia, el creativo hace la segmentación.
- En anuncios de salud funcionan las preguntas sobre un síntoma o dolor específico, los momentos auténticos, las confesiones y los ganchos de error/advertencia. Las preguntas amplias y los ganchos de "secreto" rinden peor.
- Políticas de Meta: sin autopercepción negativa en anuncios de dieta, sin antes/después de peso, sin zoom a zonas del cuerpo, sin atributos personales de quien mira ("¿tenés panza?"). Un personaje IA no puede dar testimonio en primera persona de resultados.

## Rúbrica de confianza (obligatoria en cada principio)
- **Alta:** lo sostienen ≥2 fuentes independientes (Víctor Heras y su equipo/socios = UNA sola fuente; cada creador brasileño es independiente) Y es consistente con la evidencia externa; o es aritmética verificable.
- **Media:** una fuente con evidencia mostrada (dashboard, caso con nombre) o varias del mismo grupo, sin contradecir evidencia externa.
- **Baja:** una sola fuente sin evidencia, o con contradicciones internas.
- **Descartada:** contradice evidencia externa, políticas de Meta/Hotmart o las reglas del negocio. Se registra igual con el motivo (para que nadie la vuelva a proponer).
Todo lo aplicable con confianza Media o Baja se marca **"Hipótesis: testear"** y se propone cómo testearlo en Reto Cintura 28 (una variable, métrica principal).

## Reglas de redacción
- Español rioplatense con voseo, frases cortas, sin relleno. Markdown limpio.
- Cada principio con: ID estable (prefijo del archivo, ej. HK-01), enunciado accionable, ámbito (pago / orgánico / ambos), confianza, fuentes (IDs de afirmación, ej. S64, A30, L165), por qué funciona (mecanismo), cómo se aplica a Reto Cintura 28 (ejemplo concreto que cumpla las políticas), y contradicciones si las hay.
- Los ejemplos textuales de las fuentes se copian exactos (con su resultado declarado y fuente). Las adaptaciones al Reto son tuyas y van marcadas "Adaptación".
- Distinguí SIEMPRE orgánico vs pago. Punto de conflicto clave a resolver explícitamente: Víctor dice "abrí ancho, para todo el mundo, y cerrá en el producto" (orgánico, sin segmentar); en anuncios pagos con segmentación amplia el creativo hace la segmentación, así que el gancho debe llamar al público correcto por su dolor en lenguaje cotidiano. Explicá cómo se combinan (ej. "ancho dentro del público": un dolor que le pasa a la mayoría de las mujeres 25-50, no a "las que hacen dieta keto").
- No inventes datos. Si una cifra viene de una sola fuente sin evidencia, decilo.
- Sé exhaustivo: todo lo útil de las extracciones de tu dominio tiene que quedar (aunque sea como descartado). Preferible largo y completo.
