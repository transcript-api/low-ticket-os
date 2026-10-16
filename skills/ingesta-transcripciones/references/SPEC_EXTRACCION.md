# Especificación de extracción (para cada archivo de transcripción)

Contexto del dueño: Santiago (Uruguay) vende un infoproducto low ticket de fitness/nutrición para mujeres ("Reto Cintura 28": app web con plan de 28 días + más de 70 recetas), por Hotmart, con anuncios de Meta (Reels 9:16) en español para LATAM. Hace creativos con IA (modelos latinas generadas, voz en off ElevenLabs, edición en Remotion). Quiere un sistema de copy "humanizado" que aprenda de estas transcripciones, y skills para un sistema multi-agente.

Las transcripciones las generó Gemini (Google AI Studio) a partir de videos de "gurús" de marketing. Reglas:
- NO tomes al orador como autoridad. Registrá lo que el video DICE y MUESTRA, y separá tu evaluación crítica en su propia sección.
- Las transcripciones pueden venir mezcladas (dos textos intercalados frase por frase), tener ruido ("ThinkingThoughts", "chevron_right"), timestamps duplicados o datos inventados por Gemini. Reconstruí el sentido; señalá inconsistencias.
- Sé exhaustivo: cada regla, número, ejemplo textual, guion, hook, fórmula. No resumas los detalles útiles; comprimí solo la paja.

Escribí el resultado en Markdown, en español rioplatense neutro, con EXACTAMENTE estas secciones:

## 0. Fuente
Archivo, creador(es), título/tema de cada video que aparece (si hay varios videos en el archivo, listalos con su duración), idioma, tipo (orgánico IG / tráfico pago / low ticket / high ticket / ventas), fiabilidad de la transcripción (literal o resumen; señales de mezcla o alucinación con ejemplos concretos), posibles duplicados con otros videos.

## 1. Afirmaciones (tabla)
Una fila por afirmación. Columnas: ID (prefijo dado) | Afirmación (1 línea) | Cita textual corta | Timestamp | Categoría (hook, guion, idea/ángulo, oferta, precio, funnel, tráfico-pago, orgánico-algoritmo, producción-edición, voz-IA, métricas, ventas-cierre, retención-cliente, cuenta-salud, operación) | Tipo (regla-numérica, heurística, anécdota, opinión) | Evidencia mostrada (dashboard, captura, caso con nombre, ninguna).

## 2. Ejemplos textuales
Todos los hooks, títulos, guiones, promesas, headlines, CTAs y casos con su resultado declarado (visitas, ventas, ROI). Copiá el texto exacto del ejemplo.

## 3. Fórmulas, estructuras y procesos paso a paso
Cada framework con sus pasos, tiempos (segundos), porcentajes y nombres propios del método (ej. "Sistema 3x30", "R.I.", "PCN").

## 4. Números y benchmarks
Lista de todos los números con qué significan.

## 5. Herramientas mencionadas
Nombre, para qué se usa, costo si se menciona.

## 6. Cómo se vende el propio video (meta-análisis)
Hook de apertura, prueba/autoridad que usa, estructura de retención, CTA y producto que vende. Sesgos (supervivencia, vende un servicio, números no verificables).

## 7. Evaluación crítica
- Qué es consistente con evidencia conocida sobre Meta/Instagram (ej. Meta Andromeda prioriza diversidad creativa; retención y tiempo de visualización pesan en la distribución; hook rate 3s y hold rate como métricas).
- Qué es dudoso, contradictorio o no verificable, y por qué.
- Banderas rojas: prácticas que violan políticas de Meta o son engañosas (evadir bloqueos, cuentas/perfiles para burlar enforcement, expertos falsos, testimonios falsos, clonar copy ajeno textual, promesas de salud/peso, antes-después), y riesgos legales.

## 8. Transferencia a Santiago
Qué se aplica directo a: (a) anuncios pagos Reels low ticket en LATAM, (b) contenido orgánico de Instagram del producto, (c) oferta/funnel en Hotmart (order bumps, upsells, precio), (d) edición/voz. Qué NO se aplica (ej. consejos de high ticket o llamadas de venta) y por qué. Proponé reglas accionables cortas, con el ID de la afirmación que las respalda.
