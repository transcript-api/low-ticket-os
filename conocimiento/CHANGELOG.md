# Changelog de la base de conocimiento

Lo más nuevo arriba. Formato en `criterio/protocolo-de-ingesta.md`, paso 9.

## 2026-10-16 · Primera ingesta: 16 videos (Viralidad + low ticket Brasil)

**Fuentes nuevas** (detalle y fiabilidad en `criterio/fuentes.md`)
- Víctor Heras / Viralidad (grupo G1, una sola fuente): "5 cambios de las redes", "Trial Reels y PCN", "Aprende a comunicar", "El algoritmo / El Aval", "Teoría del faro", "Sistema 3x30", "Sistema 2.20.2000", clase de 2:12 con Adrià, mentoría con JR Fernández.
- Compilado de low ticket Brasil (7 grupos independientes): Guilherme Borba, Arthur Gaspar, Guilherme Asvi + Alexander Máximo, creador LATAM, creador en Nueva York, André, Guilherme Ferreira.

**Qué se creó**
- 764 afirmaciones con ID en `fuentes/extracciones/`.
- Archivos de dominio: `copy/` (HK, ID, GU, LH), `oferta-trafico/` (OF, MA, MB, HT), `organico-produccion/` (OR, FE).
- `criterio/`: índice de fuentes, 32 banderas rojas, contradicciones, protocolo de ingesta con prompt mejorado para Google AI Studio.

**Principios que entraron con confianza Alta** (resumen)
- El gancho decide los primeros segundos y tiene que cumplirse en el cuerpo.
- Diversidad real de conceptos en cada lote de anuncios (Andromeda): variantes de espejo, velocidad o color no cuentan.
- El margen low ticket está en el ARPU (bumps complementarios, upsell de continuidad), no en el front solo.
- Mostrar el producto real funcionando como prueba cuando todavía no hay testimonios.

**Hipótesis fuertes (confianza Media, a confirmar con datos propios)**
- El contenido tiene que entenderse solo con audio y solo con imagen y subtítulos (LH-16).
- Un video sin transición explícita al producto no vende, aunque se viralice (GU-09).

**Descartado** (motivo en `criterio/banderas-rojas.md`)
- Clonar ofertas, VSL o copy ajenos aunque se traduzcan.
- "Experto" generado con IA, testimonios o resultados inventados, "un día en mi vida" de una presentadora IA.
- Multilogin, cuentas de agencia de repuesto o cuentas nuevas para seguir anunciando después de una restricción.
- Trucos anti-detector de duplicados (espejo, ×1,05, cambio de fondo).
- Antes/después y comparación de cuerpos en anuncios.
- Las "leyes" de cuenta de Víctor Heras sin sustento: ITV con ratios 5 %/30 %, "los anuncios intoxican la cuenta", R.I. como métrica.

**Contradicciones resueltas** (`criterio/contradicciones-y-sesgos.md`)
- Orgánico "abrí ancho" vs pago: en pago con segmentación amplia el creativo segmenta → "ancho dentro del público".
- "80 % del tiempo en el gancho" vs "no es cómo empezás sino cómo terminás": las dos cosas, en capas distintas (gancho para hook rate, transición y CTA para ventas).
- "ROI" de los cursos brasileños = ROAS. Se traduce a CPA antes de comparar.

**Hipótesis nuevas** → `metrics/experimentos.csv` (EXP-006 a EXP-013).

**Cobertura:** revisión con `npm run kb:cobertura` → 764 de 764 afirmaciones citadas. 9 quedaron registradas sin principio (autopromoción u opinión, `criterio/contradicciones-y-sesgos.md` §5) y 9 se sumaron como fuentes a OR-01, OR-02, OR-11 y OR-18.

**Re-transcribir con el prompt nuevo** (`criterio/fuentes.md` §7): clase 2:12 completa, "Teoría del faro" 00:00–05:42, saltos del 3x30, "El algoritmo" entero, apertura del 2.20.2000.
