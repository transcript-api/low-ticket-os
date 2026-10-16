# Métricas y benchmarks: definiciones, fórmulas y todos los números citados

Base de conocimiento del dominio **tráfico pago y métricas**. Prefijo de IDs: **MB**.
Producto de referencia: **Reto Cintura 28** (US$ 15,90 + bump US$ 4,90 al 25 % supuesto; Hotmart 9,9 % + US$ 0,10; reserva de reembolsos 7 %; margen 35 %).
Última síntesis: 2026-10-15.

## Cómo leer este archivo

- **Parte 1 (MB-01 a MB-25):** qué es cada métrica, cómo se calcula exactamente, dónde se saca y qué decisión dispara. Cuando una fuente usa la misma palabra para otra cosa (el caso de "ROI"), se dice.
- **Parte 2:** tabla de **todos** los números citados en las fuentes del dominio, con quién lo dice, contexto (país, nicho, moneda), fiabilidad y si sirve de referencia para el Reto.
- **Parte 3:** tabla de arranque para el Reto (qué número mirar y cuándo preocuparse) y cifras que no cuadran.
- **Fuentes:** mismas convenciones que `meta-ads-operacion.md` (L, LB = compilado brasileño, cada creador independiente; S, B, T, A, H, J = Víctor Heras y equipo, una sola fuente; E1–E4 = evidencia externa; Meta-doc = documentación de Meta). Lo "solo A" o "solo Doc B" vale **cero fuentes**.
- **Fiabilidad de un número:** **Alta** = aritmética verificada o evidencia externa · **Media** = dashboard o captura en pantalla, una fuente · **Baja** = dicho sin evidencia · **Nula** = solo en el resumen de Gemini, contradictorio o sin sentido.
- Moneda: R$ → US$ a la tasa de la propia fuente (US$ 10 ≈ R$ 55, L123), solo como orden de magnitud.

## Resumen en 8 líneas

1. **El "ROI" de los brasileños es ROAS** (facturación ÷ gasto). Su "ROI 2" equivale, en el Reto, a un CPA de US$ 8,56 y a un ROI real de 66 % (MB-14, MB-15).
2. El Reto empata con **ROAS 1,20** y llega al objetivo con **ROAS 1,85** (MB-15).
3. El CPA que podés pagar es el **ARPU neto con reserva de reembolsos**, no el precio del front (MB-11, MB-12).
4. El embudo se lee de arriba abajo: hook rate → hold → retención al precio → CTR de enlace → llegada → IC → compra → reembolso (MB-01 a MB-10).
5. Con 3 ventas, el CPA tiene un error de ±58 %; con 30, de ±18 %. Por eso la escala es de a escalones y el ARPU se recalcula con 30 ventas (MB-22).
6. Casi ningún número brasileño es transferible tal cual: Pix, R$ 10, Brasil. Sirven la **lógica** y los **órdenes de magnitud** (Parte 2).
7. El único dato de LATAM con clics y compras (creador LATAM) da ≈ **2,5 % de clic a compra** y ≈ **1,75 % de CTR de enlace** (derivados): referencia débil pero útil (MB-06).
8. Las métricas orgánicas de Víctor (R.I., ITV) no sirven para pago (MB-24).

---

## Parte 1 · Definiciones y fórmulas

### A. Creativo (Meta)

### MB-01 · Hook rate
- **Fórmula:** `Reproducciones de video de 3 segundos ÷ Impresiones`. En el Administrador de anuncios se arma como métrica personalizada.
- **Qué mide:** si el primer segundo frena el scroll. Decide si se cambia el gancho (HK-01, MA-10).
- **Referencia:** 30–40 % es bueno en Meta; la mediana de Reels ronda 30 % (E1). Víctor lo dice en orgánico como "si pasan de largo en menos de 1 s, el préstamo no se devolvió" (T98).
- **Confianza:** Alta para la definición; Media para el umbral (es general, no del nicho).
- **En el Reto:** con más de 2.000 impresiones, bajo 30 % se cambia el gancho y se mantiene el cuerpo. Con 20 anuncios propios, reemplazar el umbral por la mediana propia.
- **Ojo:** ningún creador brasileño mide hook rate (L §7.2): todo lo deciden por CPA y ROI. Sus reglas de corte no lo reemplazan.

### MB-02 · Hold rate
- **Fórmula:** `ThruPlays ÷ Reproducciones de 3 segundos`. ThruPlay = reproducción de 15 s o completa si el video dura menos.
- **Qué mide:** si el cuerpo cumple lo que prometió el gancho (HK-09, GU-02).
- **Referencia:** ~20–25 % (E1).
- **Ojo con anuncios cortos:** en un anuncio de 15 s o menos, ThruPlay = video completo y el hold se infla o se vuelve otra cosa. Para esos, usar `reproducciones al 75 % ÷ reproducciones de 3 s`.
- **Confianza:** Alta (definición); Media (umbral).

### MB-03 · Retención al pitch (al momento del precio)
- **Definición de las fuentes (VSL):** porcentaje de quienes empezaron el video que siguen mirando cuando aparece el precio u oferta. Se mide con el gráfico de retención de VTurb (L108–L109, LB19).
- **Adaptación al Reto:**
  - **En el anuncio:** `Reproducciones hasta el percentil más cercano al segundo del precio o CTA ÷ Reproducciones de 3 s`. Meta da reproducciones al 25, 50, 75, 95 y 100 %. Si el precio aparece en el segundo 18 de un anuncio de 25 s (72 %), se usa el percentil 75.
  - **En la página:** % de visitas que llega a la tarjeta de precio (Clarity) y % que termina el quiz (OF-33).
- **Referencia de la fuente:** 25 % → 15 % → 24 % (24,87 %) en una VSL de disfunción eréctil en Francia (Alexander). **No es comparable** con un Reel de 25 s.
- **Confianza:** Media.

### MB-04 · CTR de enlace (y la trampa del "CTR todos")
- **Fórmula:** `Clics en el enlace ÷ Impresiones`. El "CTR (todos)" suma cualquier clic (perfil, "ver más", reacciones) y siempre es más alto.
- **Referencia del repo:** sobre 1,2 % bueno; bajo 0,8 % con más de 2.000 impresiones, cambiar el gancho o el CTA (`formulas.md`).
- **Ojo:** el 6,85 % del creador LATAM (L126) es atípico para CTR de enlace; casi seguro es "CTR todos". Con su CPM y su CPC, el CTR de enlace da ≈ 1,75 % (derivado en la tabla, fila N-74).
- **Confianza:** Alta (definición); Media (umbral del repo, hipótesis de arranque).

### MB-05 · CPM
- **Fórmula:** `Gasto ÷ Impresiones × 1.000`.
- **Qué mide:** el precio de la atención. No se decide nada solo con el CPM: Gaspar escala con CPM caro porque vende (L61, L62).
- **Referencias contradictorias en LATAM:** R$ 14,20 ≈ US$ 2,6 (creador LATAM, L126) contra R$ 40–54 ≈ US$ 7,3–9,8 (Gaspar, L61). Cambia por país, nicho y momento: **medir el propio**.
- **Confianza:** Alta (definición); los benchmarks, Baja.

### MB-06 · CPC de enlace y CPC máximo
- **Fórmula:** `Gasto ÷ Clics en el enlace`.
- **CPC máximo que cierra:** `CPC máx = CPA objetivo × Tasa de clic a compra`.
- **Dato derivado de LATAM:** el creador LATAM muestra CPC R$ 0,81 y costo por compra R$ 32 (L126). Eso implica **clic a compra ≈ 2,5 %** (0,81 ÷ 32). Nicho de relaciones, front ~US$ 10, campaña en escala. Es un solo dato, pero el único de LATAM con clics y compras.
- **En el Reto:** con 2,5 % de clic a compra, para llegar al CPA objetivo (9,27) el CPC tiene que ser ≤ US$ 0,23; para el de equilibrio (14,26), ≤ US$ 0,36. Con 1,5 %, ≤ US$ 0,14 y ≤ US$ 0,21. Antes de lanzar, esta cuenta dice si la oferta puede cerrar (regla 1 de "Cómo usarlas" en `formulas.md`).
- **Confianza:** Alta (fórmula); Baja (el 2,5 % como referencia).

### B. Página y checkout

### MB-07 · Tasa de llegada
- **Fórmula:** `Vistas de página de destino ÷ Clics en el enlace`.
- **Referencia:** Borba 91,8 % (8.210 vistas sobre ≈ 8.943 clics, L07). Un valor muy por debajo apunta a carga lenta o enlace roto, no al creativo.
- **Confianza:** Media.

### MB-08 · Tasa de inicio de checkout (IC %)
- **Fórmula de Utmify (la que usan las fuentes):** `IC ÷ Clics`. No es sobre vistas. Borba: 2.794 ÷ ≈ 8.943 = 31,2 % (sobre las 8.210 vistas daría 34,0 %; L §3.12).
- **Fórmula alternativa:** `IC ÷ Vistas de página`. Elegir una y no mezclarlas.
- **Qué mide:** si la página convence lo bastante para intentar pagar. Se lee **por creativo** (MA-27): un creativo con IC alto atrae a la persona correcta.
- **Referencia:** 31,2 % es Brasil, R$ 10, nicho de catequesis. No transferible; medir el propio.
- **Confianza:** Media.

### MB-09 · IC a compra y tasa de aprobación
- **Fórmulas:** `Compras aprobadas ÷ IC` y `Ventas aprobadas ÷ Ventas iniciadas`.
- **Referencias:** Borba, IC a venta ≈ 61 % y venta iniciada a aprobada ≈ 74 % (derivados de su embudo, L07); Pix aprueba "70 a 80 %" en promedio (L09). Ferreira, "conversión de IC" 16,9–28,6 % (LB10, **solo Doc B**).
- **Qué dispara:** IC alto con compras bajas = problema de pago (tarjetas internacionales rechazadas, moneda, cuotas, medios locales), no del creativo (OF-37, MA-09).
- **En el Reto:** medir en Hotmart las compras rechazadas por país y medio de pago. En LATAM con tarjeta la aprobación es otra cosa que Pix: no usar el 70–80 % como referencia.
- **Confianza:** Media.

### MB-10 · Conversión de página y neto por visita
- **Fórmulas:** `Conversión = Compras ÷ Vistas de página` y `Neto por visita = Conversión × Neto medio` (`formulas.md`).
- **Qué mide:** la métrica principal de todo test de precio u oferta (repo). Un precio más alto con menos conversión puede ganar.
- **Referencia:** Borba ≈ 20,8 % de vista a venta (derivado), extremo: Brasil, Pix, R$ 10, impulso. No transferible.
- **Confianza:** Alta (fórmula del repo).

### C. Economía unitaria

### MB-11 · ARPU (bruto y neto)
- **Fórmulas:**
  - `ARPU bruto = Facturación bruta ÷ Ventas` (front + bumps + plan completo + upsells).
  - `ARPU neto = ARPU bruto − Comisión` (`Comisión = 9,9 % × bruto + US$ 0,10`).
  - `ARPU neto con reserva = ARPU neto × (1 − r)`, con r = 7 %.
- **En el Reto (oferta vigente, supuesto 25 % de toma):** bruto US$ 17,13; neto US$ 15,33; con reserva US$ 14,26.
- **Ojo con los dashboards:** en Borba, ARPU R$ 30,21 × 1.707 ventas = R$ 51.568, pero su facturación neta es R$ 43.226,70 (R$ 25,32 por venta). El ARPU del panel es **bruto** (L §7.2, cifra 1). Siempre preguntar "¿bruto o neto?".
- **Confianza:** Alta (aritmética).

### MB-12 · CPA y CPA de equilibrio
- **Fórmulas:** `CPA = Gasto en anuncios ÷ Ventas` (una compra del producto principal = una venta) y `CPA de equilibrio = Neto medio × (1 − r)` (repo) = ARPU neto con reserva.
- **Diferencia con las fuentes:** los brasileños dicen "CPA de equilibrio = ARPU neto" (L §3.12) y no descuentan reembolsos. La versión del repo es más prudente: se mantiene.
- **Error frecuente de las fuentes:** usar el **precio del front** como referencia de CPA (Ferreira corta a 1 front, L173; Gaspar pone el tope de puja en el front, L55). Solo funciona cuando el ARPU es varias veces el front (MB-18).
- **No incluye:** impuestos de tu país ni herramientas (`formulas.md`).
- **Confianza:** Alta.

### MB-13 · CPA objetivo
- **Fórmula:** `CPA objetivo = CPA de equilibrio × (1 − m)`, con m = 35 %.
- **En el Reto:** US$ 9,27 (equivale a ROAS 1,85 y ROI real 54 %).
- **Confianza:** Alta (regla del repo).

### MB-14 · ROAS, "ROI" brasileño y ROI real
- **ROAS (repo, 09):** `Facturación ÷ Gasto en anuncios`.
- **"ROI" de las fuentes brasileñas = ROAS.** Ferreira lo confirma: 115,93 ÷ 60,35 = 1,92 y 1.039,27 ÷ 300 = 3,46 (L §3.12). Su "lucro" = facturación − gasto (115,93 − 60,35 = 55,58).
- **ROI real (contable):** `(Ganancia − Inversión) ÷ Inversión`. Para el Reto: `ROI real = (Neto medio × (1 − r) − CPA) ÷ CPA = ROAS × (Neto medio ÷ Bruto medio) × (1 − r) − 1 ≈ 0,8325 × ROAS − 1`.
- **Chequeo único en Utmify:** verificar si el panel calcula el ROAS con facturación bruta o neta (multiplicar ROAS × gasto y comparar con la facturación de Hotmart).
- **Confianza:** Alta.

### MB-15 · Tabla de traducción para la oferta vigente

| CPA (US$) | ROAS ("ROI" brasileño) | ROI real | Lucro por venta (US$) | Margen "brasileño" (1 − 1/ROAS) | Margen real sobre bruto | Decisión (MA-13) |
|---|---|---|---|---|---|---|
| 14,26 | 1,20 | 0 % | 0,00 | 17 % | 0 % | Equilibrio: bajar o apagar si se pasa |
| 9,96 | 1,72 | 43 % | 4,30 | 42 % | 25 % | Dejar correr (es el ROAS del creador LATAM) |
| 9,27 | 1,85 | 54 % | 4,99 | 46 % | 29 % | Objetivo: escalar +20–30 % |
| 8,56 | 2,00 | 66 % | 5,69 | 50 % | 33 % | "ROI 2" de Ferreira |
| 6,85 | 2,50 | 108 % | 7,41 | 60 % | 43 % | Escalón alto: +50 % o duplicar |
| 5,71 | 3,00 | 150 % | 8,55 | 67 % | 50 % | ROI de Borba (3,09) |

- **Cómo leer a las fuentes con esta tabla:** el "ROI 1,51" de Gaspar (L46) sería, en el Reto, un CPA de US$ 11,34: entre objetivo y equilibrio, "dejar correr". Su oferta que "factura 10 para ganar 3" (L66) es ROAS ≈ 1,43: en el Reto, CPA ≈ US$ 12, con poco margen.
- **Confianza:** Alta (aritmética con los supuestos del repo; se recalcula con el ARPU real).

### MB-16 · Margen sobre facturación
- **Fórmula de las fuentes:** `Margen = 1 − 1 ÷ ROAS` (antes de comisiones, impuestos y reembolsos). Verificado: Alexander, ROI 1,7 → 41 %, que coincide con 8k de lucro sobre 20k (L101).
- **Ojo:** ese "margen" no descuenta comisión ni reembolsos. En el Reto, ROAS 2 da 50 % "brasileño" pero 33 % real (MB-15).
- **Confianza:** Alta.

### MB-17 · Identidad ROAS ≈ ARPU ÷ CPA
- **Fórmula:** `ROAS = (Ventas × ARPU) ÷ (Ventas × CPA) = ARPU ÷ CPA`.
- **Verificación:** Gaspar LATAM, 50 ÷ 18 = 2,78 contra 2,73 informado; 50 ÷ 20 = 2,5 contra 2,35 (L §3.12).
- **Uso:** para subir el ROAS hay dos palancas: bajar el CPA (creativo, página) o subir el ARPU (oferta, OF-24). Con un ARPU de solo 1,08 veces el front, en el Reto casi todo depende del CPA.
- **Confianza:** Alta.

### MB-18 · ROAS mínimo con tope de puja anclado al front
- **Fórmula:** si el CPA queda en el precio del front, `ROAS mínimo = ARPU bruto ÷ Front`.
- **En el Reto:** 17,13 ÷ 15,90 = **1,08**, por debajo del ROAS de equilibrio (1,20). El ancla de Gaspar (L55) daría pérdida. Para que sirva hace falta un ARPU bruto ≥ US$ 19,1 (equilibrio) o ≈ US$ 29,4 (objetivo). Ver MA-17.
- **Confianza:** Alta.

### D. Salud de la entrega y del producto

### MB-19 · Frecuencia
- **Fórmula:** `Impresiones ÷ Alcance` en la ventana elegida.
- **Regla del repo:** más de 3 en 7 días → entra el lote siguiente (MA-21).
- **Confianza:** Media (regla del repo, consistente con la práctica).

### MB-20 · Reembolsos
- **Fórmula:** `Ventas reembolsadas ÷ Ventas` (o monto reembolsado ÷ facturación; elegir una).
- **Referencias:** repo, reserva 7 % y alarma sobre 8 %; Borba ≈ 4,2 % de la facturación neta (derivado, R$ 1.797,71 sobre R$ 43.226,70, L08).
- **Leerlo por creativo:** un anuncio que promete de más trae reembolsos aunque tenga buen CPA (OF-38).
- **Confianza:** Media.

### MB-21 · Tasa de toma de un extra
- **Fórmula:** `Compras con el extra ÷ Compras del producto principal`.
- **Referencia:** repo, 20–35 % como hipótesis; el Reto supone 25 % para el Menú. Ninguna fuente brasileña da su tasa de bumps; Borba solo dice que "la mayoría de las veces" se llevan el plan premium (L28), que es otra cosa.
- **Uso:** con 30 ventas, reemplazar el 25 % por el dato real y recalcular `07-meta-ads.md` (OF-32).
- **Confianza:** Baja hasta que haya datos propios.

### E. Muestra, ruido y planificación

### MB-22 · Cuánto ruido tiene un CPA según la cantidad de ventas
- **Fórmula (aproximación de Poisson):** con N ventas, el error relativo del CPA es ≈ `1 ÷ √N`.

| Ventas | Error relativo del CPA | Ejemplo con CPA medido de US$ 9,27 |
|---|---|---|
| 3 | ± 58 % | El real puede estar entre ~4 y ~15 |
| 5 | ± 45 % | ~5 a ~13 |
| 10 | ± 32 % | ~6,3 a ~12,2 |
| 30 | ± 18 % | ~7,6 a ~10,9 |
| 50 | ± 14 % | ~8,0 a ~10,6 |

- **Probabilidad de cero ventas** con gasto S y CPA real c: `e^(−S/c)` (tabla de corte en MA-09).
- **Uso:** "3 ventas" (repo) alcanza para un escalón chico, no para duplicar; para declarar el ARPU o un ganador de precio hacen falta ~30 a 50 ventas por variante (OF-29 pide 50 o 7 días).
- **Confianza:** Alta (aritmética).

### MB-23 · Tasa de acierto esperada de los creativos
- **Datos:** 2 a 4 de cada 20 superan la media (10–20 %, S69, H22); 5 de 20 "es un completo éxito" (25 %, H21); "el 80 % no va a funcionar" (A70); en pago, 1 de 10 creativos vendía constante (L99).
- **Uso:** planificar el volumen de creativos (MA-20). Con 10–20 % de acierto, para tener un ganador nuevo por semana hacen falta 5 a 10 conceptos por semana.
- **Confianza:** Media (Víctor en orgánico + un caso pago independiente).

### MB-24 · Métricas orgánicas de Víctor: no sirven para pago
- **R.I. ("Ratio de Interés"):** inventado por Víctor (S39: "me la he inventado yo"); tiene tres definiciones distintas según el video (S25, A38). **ITV:** vistas de Reels ÷ seguidores (mínimo 30 %, "saludable" 40–100 %) y vistas de historias ÷ seguidores (5–15 %) (S28, S29, H09, H10).
- **Veredicto:** son heurísticas orgánicas flojas (OR-05, OR-18). En pago no existen: se mide hook rate, hold, CTR, CPA.
- **Confianza:** Baja (y no aplica a pago).

### MB-25 · KPIs de agenda (high ticket)
- **Fórmulas:** `Asistencia = Llamadas realizadas ÷ Agendadas`; `Cierre = Ventas ÷ Llamadas realizadas`.
- **Referencia:** mínimo 50 % de asistencia y 25 % de cierre (J57). Desarrollado en HT-08. No aplica hoy al Reto.

---

## Parte 2 · Todos los números citados

Columnas: **Número** · **Qué es** · **Fuente** · **Contexto** (país · nicho · moneda) · **Fiabilidad** · **¿Referencia para el Reto?** (Sí = punto de partida · Parcial = solo lógica u orden de magnitud · No).

### 2.1 Repo (Reto Cintura 28)

| # | Número | Qué es | Fuente | Contexto | Fiabilidad | ¿Ref. R28? |
|---|---|---|---|---|---|---|
| N-01 | US$ 15,90 | Precio del principal (con cupón) | `07-meta-ads.md`, OF | LATAM · fitness · USD | Alta (dato) | Sí, es el dato |
| N-02 | US$ 4,90 al 25 % | Bump "Menú" y su tasa de toma | `07-meta-ads.md` | Ídem | Precio Alta; tasa **supuesta** | Sí; reemplazar la tasa con 30 ventas |
| N-03 | 9,9 % + US$ 0,10 | Comisión de Hotmart de referencia | `formulas.md` | Hotmart | Alta (verificar en la cuenta) | Sí |
| N-04 | 7 % / 35 % | Reserva de reembolsos / margen a reinvertir | `formulas.md` | Ídem | Supuestos de arranque | Sí |
| N-05 | 14,26 · 9,27 · 21,38 | CPA de equilibrio, objetivo y corte de la oferta vigente | `07-meta-ads.md` (verificado) | Ídem | Alta | Sí |
| N-06 | 9,23 · 6,00 · 13,84 (13,50) | Ídem, oferta A (9,90 + 4,90); el centro de mando usaba 13,50 | `formulas.md`, `07` | Ídem | Alta | No: no es la oferta que corre |
| N-07 | 14,40 · 9,36 · 21,60 | Ídem, oferta B (15 + 3 + 5) | Ídem | Ídem | Alta | Solo si se activa B |
| N-08 | 14,32 · 9,31 · 21,48 | Ídem, oferta C1 (14,90 + 3 + 5) | Ídem | Ídem | Alta | Solo si se activa C1 |
| N-09 | 10,13 · 6,58 · 15,19 | Ídem, oferta C2 (9,90 + 3 + 5) | Ídem | Ídem | Alta | Solo si se activa C2 |
| N-10 | 1,20 / 1,85 | ROAS de equilibrio / al CPA objetivo (vigente) | Cálculo propio (MB-15) | Ídem | Alta | Sí |
| N-11 | > 1,2 % / < 0,8 % con > 2.000 impr. | CTR de enlace bueno / umbral para cambiar | `formulas.md`, `08` | Genérico | Hipótesis de arranque | Sí, hasta tener mediana propia |
| N-12 | < 8 % | Reembolsos aceptables | `formulas.md` | Genérico | Hipótesis | Sí |
| N-13 | 20–35 % | Tasa de toma de un extra | `formulas.md` | Genérico | Hipótesis | Sí, como rango |
| N-14 | > 3 en 7 días | Frecuencia que pide lote nuevo | `formulas.md`, `08` | Genérico | Media | Sí |
| N-15 | US$ 20–25/día, 5–7 días | Presupuesto de test | `08`, `07` | Ídem | Decisión del repo | Sí |
| N-16 | US$ 10 / US$ 5 / US$ 3–5 | Conjunto amplio / rioplatense / retargeting | `07` | Ídem | Decisión | Sí |
| N-17 | ~1.000 visitas | Umbral para abrir retargeting | `08` | Ídem | Media | Sí |
| N-18 | 72 h; +20 % cada 48 h; 3 ventas | Espera inicial; escalón; ventas mínimas para escalar | `08`, `09` | Ídem | Media | Sí (MA-08, MA-13) |
| N-19 | ~50 ventas | Abrir upsell de continuidad | `09` | Ídem | Decisión | Sí (OF-31) |
| N-20 | 40–50 % contra 37 % | Comisión de afiliados en `09` contra `02-oferta.md` | Repo | Ídem | **Inconsistente** | Unificar |

### 2.2 Evidencia externa y documentación de Meta

| # | Número | Qué es | Fuente | Contexto | Fiabilidad | ¿Ref. R28? |
|---|---|---|---|---|---|---|
| N-21 | 30–40 % (mediana ~30 %) | Hook rate bueno en Meta (mediana de Reels) | E1 | Meta, general | Alta | Sí |
| N-22 | ~20–25 % | Hold rate | E1 | Meta, general | Media | Sí |
| N-23 | 3 s | Ventana que decide | E1, E2 | Meta e Instagram | Alta | Sí |
| N-24 | ~50 eventos en 7 días | Para salir de la fase de aprendizaje, por conjunto | Meta-doc | Meta | Alta | Sí (MA-05) |
| N-25 | hasta +75 % por día, ≤ 7 × por semana | Cuánto puede pasarse Meta del presupuesto diario | Meta-doc | Meta | Alta (verificar) | Sí (MA-15) |

### 2.3 Borba (V1) · Brasil · catequesis · R$

| # | Número | Qué es | Fuente | Fiabilidad | ¿Ref. R28? |
|---|---|---|---|---|---|
| N-26 | R$ 10 / R$ 27,90 / R$ 17,90 | Básico / premium / downsell (2,79 × y 1,79 × el básico) | L02, L03 | Media (captura) | Parcial: proporciones a testear (OF-29, OF-30) |
| N-27 | R$ 128 "gratis" | Valor de 4 bonos | L25 | Media | **No**: ancla de valor inventada (OF-22) |
| N-28 | R$ 43.226,70 en 38 días; 1.707 ventas | Facturación neta y ventas (12/05–18/06) | L04 (Utmify) | Media | Parcial: escala posible en low ticket |
| N-29 | ARPU R$ 30,21 (neto real R$ 25,32) | ARPU del panel (bruto) | L04, L §7.2 | Media; la discrepancia es aritmética | Parcial: ARPU ≈ 2,5–3 × el front |
| N-30 | R$ 30 mil de lucro, ROI 3,09 | Lucro y ROAS | L05 | Media | Parcial (MB-15) |
| N-31 | ≈ R$ 13.989 / ≈ R$ 8,20 | Gasto y CPA (derivados) | L §4 | Alta (aritmética) | No: otro país y precio |
| N-32 | 91,8 % | Clic a vista de página | L07 | Media | Sí, como orden (MB-07) |
| N-33 | 31,2 % (34 % sobre vistas) | IC sobre clics | L06, L07 | Media | No: Pix y R$ 10 |
| N-34 | 25,9 % / 19,2 % | Ventas iniciadas / aprobadas sobre clics | L07 | Media | No |
| N-35 | ≈ 61 % / ≈ 20,8 % / ≈ 74 % | IC a venta / vista a venta / iniciada a aprobada (derivados) | L §4 | Alta (aritmética) sobre dato Media | No: Pix |
| N-36 | 70–80 % | Aprobación de Pix "promedio" | L09 | Baja | No |
| N-37 | R$ 1.797,71 (≈ 4,2 %) | Reembolsos | L08 (dashboard) | Media | Parcial: confirma que < 8 % es alcanzable |
| N-38 | R$ 125,04 (ROAS 2,94) · R$ 142,14 (3,20) · R$ 351,86 (2,24) | Lucro de campañas con el mismo creativo | L11 | Media | Parcial: escala horizontal (MA-14) |
| N-39 | "500" → "342" | Lucro del día (se autocorrige) | L12 | Baja | No |
| N-40 | R$ 7,90 / 7,90 / 12,90 | Precios de bumps | L37 (**solo A**) | Nula | No |
| N-41 | 15 min | Cronómetro del checkout | L34 | Media | **No**: urgencia falsa (OF-36) |
| N-42 | 3 | Gateways usados | L32 | Baja | No |

### 2.4 Gaspar (V2) · Brasil y LATAM · varios nichos · R$

| # | Número | Qué es | Fuente | Fiabilidad | ¿Ref. R28? |
|---|---|---|---|---|---|
| N-43 | 7k fact., 2,2k lucro, ROI 1,51 | Oferta 1, 8 días | L46 | Media (dashboard) | Parcial (MB-15: CPA 11,34 en el Reto) |
| N-44 | 200 · 450 · 500 · 300; prom. 1.900 | Lucro diario; promedio de 7 días | L46 (detalle solo B) | Media | No |
| N-45 | 50 → 75 (+50 %) con ROI 7 | Escalón de CBO "para ser consciente" | L49 | Media | Sí, la lógica (MA-13) |
| N-46 | 30 → 60 (× 2) con CPA 3 y ROI 10 | Duplica solo con ROI muy alto | L53 | Media | Sí, la lógica |
| N-47 | 60 → 90 (+50 %) con ROI 2,47 | Escalón | L72 | Media | Sí |
| N-48 | +40 → 100 con ROI 5; → 130 "sin duplicar" con ROI 5 | Escalones | L68, L69 | Media | Sí |
| N-49 | → 60 y → 120 con ROI 2,86 | Escalones | L79 | Media | Sí |
| N-50 | 150 → 300 con 7 ventas | "Puede salir muy mal" | L76 | Media | Advertencia |
| N-51 | → 40 | Sube un conjunto que "gasta poco" | L54 | Media | Parcial |
| N-52 | → 30 · → 110 (ROI 1,77) · 300 → 150 · → 53 · → 70 | Bajadas ("susto", serrucho) | L57, L75, L81, L77, L83 | Media (acción); efecto sin evidencia | No en test (MA-16) |
| N-53 | 21 → precio del primer ticket | Tope de puja | L55 | Media (captura) | **No hoy** (MB-18) |
| N-54 | ARPU ~R$ 50 (≈ US$ 9) | Oferta LATAM | L59 | Media | Parcial |
| N-55 | ROI 2,35 (A: 2,36) y luego 2,73 | ROAS de la oferta LATAM | L59, L73 | Media | Parcial |
| N-56 | CPA R$ 18–20 (≈ US$ 3,3–3,6) | CPA de la oferta LATAM | L59, L73 | Media | No: otro ticket |
| N-57 | ROAS 12 y 8; CPA R$ 7 y 3 | Por creativo (creativo 13 "validando" con 3 ventas) | L60 | Media | No (muestra de 3 ventas) |
| N-58 | CPM R$ 40–54 ("casi 60") ≈ US$ 7,3–9,8 | CPM en LATAM | L61 | Media | Parcial: contradice N-72 |
| N-59 | CPA por campaña R$ 4 · 9 · 20 · 9 | Dispersión entre campañas | L73 | Media | Parcial: muestra la varianza |
| N-60 | +300 en 10 min; −80 a las 18:30 con +400 total; R$ 366 al cierre | Volatilidad intradía | L73, L74, L80 | Media | Sí, la lección: no juzgar el día antes de la noche |
| N-61 | ARPU 43; ROI 2,86; R$ 243 con ROI 2,8 | Oferta 2 de Brasil | L79, L80 | Media | No |
| N-62 | "factura 10 para ganar 3" (ROAS ≈ 1,43) | Oferta que tambalea por mala escala | L66 | Media | Sí, como advertencia |
| N-63 | 11 ventas en un día | Historial del creativo que no apaga | L58 | Media | Sí, la lógica (MA-11) |
| N-64 | ~1k lucro; 382 con ROI 3,5; ~2k fact. con ROI 1,7 | Totales de dos días | L80, L82 | Media | No |
| N-65 | +20 · +30 · +40 % · × 2 | Ritmos de escala que testea | L84 | Baja | Sí, como hipótesis (MA-13) |
| N-66 | 2 días seguidos sin resultado | Apaga un ABO | L52 | Media | Sí (MA-11) |
| N-67 | R$ 50 · 75 · 100 · 110 · 130 · 200 · 300 · 500 · 800 | Escalones de presupuesto del compilado | LB14 | Media | Parcial |
| N-68 | ROI > 2 → subir | Regla atribuida a Gaspar | L86 (**solo A**) | Nula | No como dato (sí como lógica, por Ferreira) |
| N-69 | "de 0 a 1k por día de lucro" | Promesa de su curso | L85 | Nula (publicidad) | No |

### 2.5 Asvi y Alexander (V3) · Francia · disfunción eréctil · R$

| # | Número | Qué es | Fuente | Fiabilidad | ¿Ref. R28? |
|---|---|---|---|---|---|
| N-70a | "R$ 40 mil por semana" contra "por mes"; R$ 42.258,28/semana | Facturación | L87, L90, L91 | Baja (se contradicen) / Media (pantalla) | No |
| N-70b | −R$ 993,85 en 3–4 días; luego ROI 1,7 | Pérdida inicial y recuperación | L92, L98 | Media | Parcial: una oferta puede arrancar negativa |
| N-70c | 1 de 10 creativos | Tasa de acierto | L99 | Baja | Sí (MB-23) |
| N-70d | 20k fact. / 8k → 6k lucro | Margen 40 % → 30 % ("cuenta desactivada") | L101 | Media | No |
| N-70e | 196k / ~60k (ROI acumulado ≈ 1,44) contra ROI 1,7 en la foto | La foto del dashboard es mejor que el acumulado | L113, L §7.2 | Alta (aritmética) | Sí, la lección: mirar el acumulado |
| N-70f | ~150 anuncios activos | Señal de oferta escalada | L102 | Baja | Parcial (OF-02) |
| N-70g | 25 % → 15 % → 24 % (24,87 %) | Retención al pitch de la VSL | L108, L109, LB19 | Media (VTurb) | No comparable (MB-03) |
| N-70h | ROI 2 y 1.880 de lucro al día siguiente | Atribuido a la Lead 3 | L110 | Baja (cambió muchas cosas a la vez) | No |
| N-70i | 10 creativos × 3 cuentas; 10 % de lo invertido | Cuentas de agencia | L111, L112 | Media | **No**: elusión (MA-30) |
| N-70j | De 1 a 3 upsells | Funnel | L106 | Baja | Parcial (OF-31) |

### 2.6 Creador LATAM (V4) · LATAM + EE. UU. + España · relaciones · USD y R$

| # | Número | Qué es | Fuente | Fiabilidad | ¿Ref. R28? |
|---|---|---|---|---|---|
| N-71 | US$ 142.314,35 en agosto; 55 países | **Facturación**, no lucro | L118 (Hotmart) | Media | Parcial: tamaño posible |
| N-72 | CPM R$ 14,20 (≈ US$ 2,6) | Campaña en escala | L126 | Media | Parcial: contradice N-58 |
| N-73 | R$ 32 (≈ US$ 5,8) | Costo por compra | L126 (solo B) | Media | Parcial |
| N-74 | CTR 6,85 % → CTR de enlace ≈ 1,75 % (derivado) | Casi seguro "CTR todos" | L126, cálculo propio (CPM ÷ CPC) | Baja / derivado Media | Sí, el derivado, como orden |
| N-75 | CPC R$ 0,81 (≈ US$ 0,15) | CPC | L126 | Media | Parcial |
| N-76 | ≈ 2,5 % | Clic a compra (derivado: 0,81 ÷ 32) | Cálculo propio | Media (un dato) | **Sí**, como única referencia LATAM (MB-06) |
| N-77 | ROAS 1,72 (R$ 775.553,82 ÷ R$ 450.479,56) | ROAS en pantalla; margen ≈ 42 % antes de comisión | L128 (A §3) | Media | Sí (MB-15: CPA 9,96 en el Reto) |
| N-78 | ~US$ 10 (≈ R$ 55) | Precio del front | L123 | Media | Sí (OF-19) |
| N-79 | US$ 412; 10 ÷ 412 = 2,4 % | Salario mínimo de México; peso del precio | L123 (cálculo de A) | Baja | Parcial |
| N-80 | Brasil 16.º (4.º más bajo) | Ranking de salario mínimo en USD | L121 (tabla de ChatGPT) | Baja | No |
| N-81 | CR 720 · UY 580 · CL 540 · MX 412 · BR 273 | Salarios mínimos | L122 (**solo A**) | Nula | No |
| N-82 | ~600 M contra ~201 M | Hispanohablantes (mundo, incluida 2.ª lengua) contra lusoparlantes de Brasil | L124 | Baja (compara cosas distintas) | No |
| N-83 | "5 años adelantado" | Brasil contra LATAM en marketing digital | L125 | Baja (opinión) | No |
| N-84 | R$ 80–100; "5 a 10 veces más barato" | CPM en Brasil | L127 (**solo A**) | Nula | No |
| N-85 | ~15 días | Retiro de Hotmart en USD | L129 | Media (verificar) | Sí (MA-19) |
| N-86 | R$ 0,60–0,80 contra R$ 0,88–1,50 | CPC LATAM contra Brasil | LB16 (**solo Doc B**) | Nula | No |

### 2.7 Creador NY (V5), André (V6) y Ferreira (V7)

| # | Número | Qué es | Fuente | Contexto | Fiabilidad | ¿Ref. R28? |
|---|---|---|---|---|---|---|
| N-87 | R$ 27, ROI 5–6 | Curso para tiendas de ropa | L136 | Brasil, 2020–21 (pandemia) | Baja | No (época y nicho) |
| N-88 | R$ 97/147 → R$ 37/47 | Lista general → subnichada | L139, L142 | Brasil | Baja | Parcial (subnichar, ID-16) |
| N-89 | > R$ 200 mil | Todos sus productos | L132 | Brasil | Baja | No |
| N-90 | 803.219 | Tiendas con CNPJ activo (tamaño de mercado) | L134 | Brasil | Media (captura) | Parcial (método) |
| N-91 | R$ 7.966,93 en 7 días | Gancho de André; **no** es la oferta que demuestra | L146 | Brasil | Media / engañoso | No |
| N-92 | > 4 anunciantes / 1 anunciante con 10 anuncios | Descarta / "más que validada" | L149, L150 | Brasil | Baja | Parcial (OF-02, OF-03) |
| N-93 | US$ 3/día (A: "1-1-5") | CBO de arranque | L160 | Brasil | Media | No: muy poco para el CPA del Reto |
| N-94 | 150 → 250–300 cards | Mejora del entregable por volumen | L151 | Brasil | Media | Parcial (OF-15: utilidad, no volumen) |
| N-95 | > R$ 1 millón en 2 años | Facturación de Ferreira | L162 | Brasil | Nula (sin evidencia) | No |
| N-96 | 10 = 7 videos + 3 imágenes | Lote de creativos | L165 | Brasil | Media | Sí, como hipótesis (MA-01) |
| N-97 | CBO 1-1-10, R$ 100/día (≈ US$ 18), 23:59 | Campaña de test | L171 | Brasil | Media | Parcial (MA-03, MA-06) |
| N-98 | Gasto 60,35 · fact. 115,93 · lucro 55,58 · ROI 1,92 | Día 1 | L172 | Brasil | Media; no cuadra con "7 ventas" (solo A) | No (muestra de 1 día) |
| N-99 | ARPU ≈ R$ 16,56 | Día 1 con 7 ventas | Cálculo con dato **solo A** | Brasil | Nula | No |
| N-100 | R$ 10 sin venta | Corte por creativo (1 front ≈ 1,15 × su CPA) | L173, LB18 | Brasil | Media | Parcial (MA-09) |
| N-101 | R$ 9,87 · 9,86 · 8,77 · 12,90 | 4 bumps (0,9–1,3 × el front; ≈ US$ 1,6–2,3) | L174 | Brasil | Media | Parcial (OF-26: testear monto absoluto) |
| N-102 | ROI > 2 → R$ 200 → R$ 500 | Escala | L175 | Brasil | Media | Sí, la lógica (en el Reto, CPA ≤ 8,56) |
| N-103 | Fact. 1.039,27 · gasto 300 · lucro 739,18 · ROI 3,46 | Día 2 (con bumps y escala el mismo día) | L177 | Brasil | Media | No (mezcla variables) |
| N-104 | 1,2 × / música 3–5 % | Velocidad del video / volumen de la música | L168 | Brasil | Media | Sí (FE-19, FE-20) |
| N-105 | 16,9–28,6 % | "Conversión de IC" | LB10 (**solo Doc B**) | Brasil | Nula | No |
| N-106 | R$ 22,90 | Plan premium | LB09 (**solo Doc B**) | Brasil | Nula | Parcial (OF-29) |
| N-107 | ROI 1,5–2 → +50 %; 2-4-8-16-32-64 | Reglas de escala | L176 (**solo A**) | — | Nula | No |
| N-108 | 1,51 · 1,70 · 1,72 · 1,92 · 2,13 · 2,36 · 2,73 · 2,84 · 3,09 · 3,20 · 3,46 · 7 · 8 · 10 | Todos los "ROI" del compilado | LB15 | Brasil y LATAM | Media | Parcial: el rango habitual de una oferta que escala es ROAS 1,5–3,5 |
| N-109 | R$ 100 → R$ 500 (ROI 5) | Respuesta a la objeción de caja | LB05 | — | Baja (atribución dudosa) | No |
| N-110 | R$ 97/mes; US$ 5,40/mes | VTurb básico; MoreLogin Pro | LB12, LB13 | — | Baja | VTurb parcial; MoreLogin **no** (MA-29) |

### 2.8 Víctor Heras y equipo (G1): números de pago, embudo y ventas

| # | Número | Qué es | Fuente | Contexto | Fiabilidad | ¿Ref. R28? |
|---|---|---|---|---|---|---|
| N-111 | ~48.000 € por 1 M de personas (CPM implícito ≈ 48 €) | "Costo" de alcanzar 1 M con anuncios | T110 | España, argumento antianuncios | Nula (inflado) | No |
| N-112 | 1,8 M vistas; 3.000+ conversaciones; "decenas de miles de €" | Caso Giranda, orgánico | T110 | España | Baja | No |
| N-113 | 2 ×, 3 ×, 5 × | Cuánto más "cobra" Instagram a quien anuncia | S22 | — | Nula (MA-32) | No |
| N-114 | 50 clics | "Ya sabe qué gente es" | J18 | — | Baja (son 50 eventos de optimización, N-24) | No |
| N-115 | 10 % | Llega al final de un Reel de 1 min | A32 | Orgánico | Baja | Parcial (orden de magnitud) |
| N-116 | 1.000 vistas → 100 al final → 0 al embudo; 10 % de 1 M = 100.000 | Cascadas de retención | J23, J24, J33 | Orgánico | Alta (aritmética) / dato Baja | No |
| N-117 | 1 M → 1.000 → 10 | Atención → nutrición → venta | A23 | Orgánico, high ticket | Baja | No |
| N-118 | 1 M → 1 % → 1 % → 30–40 % / 10 %; 8.000 € contra 20.000 € (16.000 € netos) | Matemática 200 € contra 2.000 € | H33–H35 | High ticket con llamadas | Aritmética Alta; supuestos Baja | No hoy (HT-02) |
| N-119 | 20 % → 10 % | Gasto sobre facturación a 100.000 € | H37 | High ticket | Baja | No |
| N-120 | 100 agendas → 50 % asistencia → 25 % cierre (12–13) | KPIs de agenda | J57 | High ticket | Baja (una fuente, tabla sin datos reales) | No hoy (HT-08) |
| N-121 | 2–5 min | Small talk de la llamada | J53 | High ticket | Baja | No hoy |
| N-122 | 3 M vistas/mes → 300 leads/día → 10 llamadas/día → 2 ventas/día × US$ 500 = US$ 1.000/día (~20k/mes); "+25k/mes" en otro video | Caso Julieta Tejería (fitness online) | A79, S103, H42 | Fitness, high ticket | Baja (anécdota; 20k contra 25k) | Parcial: modelo del mismo nicho para "después" (HT-13) |
| N-123 | 2 M vistas/mes → 100 leads/día → 30 teléfonos cada 10 días → 1 captación → 10–15k € → 43k €/mes | Caso Javier Solís (inmobiliario) | A81 | España | Baja | No |
| N-124 | 55.000 USD con un Reel, trazado por UTM | Caso Ramón | S94 | Construcción, high ticket | Media (rótulo en pantalla) | Parcial: la trazabilidad por UTM sí (MA-26) |
| N-125 | 100 × 1.000 € o 10 × 10.000 € = 100.000 €; "3 ventas al mes o 1 cada 3 días"; 8.333 €/mes; 280 €/día; 3.333 €/día | Tesis del ticket alto | A71–A75 | High ticket | Aritmética **inconsistente** (100 ventas al año son 8,3 por mes, no 3) | No (HT-03) |
| N-126 | 1 M seguidores y 100 M vistas/mes | Lo que "necesita" el low ticket | J48 | Opinión | Baja (supone tráfico orgánico) | No |
| N-127 | 20.000 €/mes → 100.000 € en 5 meses | Promesa | H41 | — | Nula (publicidad) | No |
| N-128 | 2–4 de 20 (10–20 %); 5 de 20 (25 %); 80/20 | Tasa de acierto de piezas | S69, H21, H22, A70 | Orgánico | Media | Sí (MB-23) |
| N-129 | 3 × la media (20–30 % del contenido) / 10 × la media | Disparadores para re-versionar | T22, T23, T35 | Orgánico | Baja | Parcial (lógica de iterar ganadores) |
| N-130 | Reels 40–100 % (recap: 30 % mínimo); historias 5–15 % (recap: 5 %) | ITV "saludable" | S28, S29 | Orgánico | Baja (inventado, cambia entre videos) | No (MB-24) |
| N-131 | 1.000 seg. → 300 por Reel y 50 en historias; 100.000 → 30.000 y 5.000 | Mínimos de ITV | H09, H10 | Orgánico | Baja | No |
| N-132 | 7 de 1.000 contra 600 de 1.000 | A quién le gusta un video técnico contra uno general | H29, S §4 | Orgánico | Baja (retórico) | Parcial (lógica de "ancho", HK-11) |
| N-133 | < 10.000 vistas = R.I. bajo | Estancamiento | S71, A39 | Orgánico | Baja | No |
| N-134 | 10k → 7–8k (5.ª historia); 5k → 3,5k | Retención de historias | S89 | Orgánico | Baja | No |
| N-135 | < 1 s | Pasar de largo = señal mala | T98 | Orgánico | Media (consistente con E1) | Sí (HK-01) |
| N-136 | 50 % más de dinero | Por aprender a comunicar (cita atribuida a Buffett) | T46 | — | Nula | No |
| N-137 | × 10; 1 h → 5 min | Ahorro de tiempo con IA | B35, B89, T12 | — | Baja | No (producción) |
| N-138 | < 6 h/mes; ½ día de ideas + 1–2 días de grabación; 30–45 videos en 6–7 h | Tiempo de producción | A03, A16, J39, J40 | Orgánico | Baja | Ver `formatos-y-edicion.md` |
| N-139 | × 3 en 90 días con el mismo presupuesto | Lo que JR "le daría" a un e-commerce | J13 | Hipotético | Nula | No |
| N-140 | +10.000 M de visitas; +109 M seguidores; +35 M USD; +3.000 clientes; 20 M USD/año; casos de 100k a 2,1 M seguidores | Credenciales de Víctor, Adrià, Mike y clientes | B97, A02, T92, J03, B80, S §4 | — | Nula (no verificables, sesgo de venta) | No |

---

## Parte 3 · Referencia de arranque para Reto Cintura 28

### 3.1 Qué número mirar y cuándo preocuparse (hipótesis hasta tener 20 anuncios y 30 ventas propias)

| Métrica | Bien | Alarma | De dónde sale | Acción si alarma |
|---|---|---|---|---|
| Hook rate | ≥ 40 % | < 30 % con > 2.000 impr. | E1, HK-01 | Cambiar gancho, mantener cuerpo |
| Hold rate | ≥ 25 % | < 20 % | E1 | Ritmo, promesa cumplida |
| Retención al precio (percentil) | Sin referencia | Cae a la mitad entre el 25 % y el percentil del precio | Adaptación | Acortar o adelantar el producto |
| CTR de enlace | ≥ 1,2 % | < 0,8 % con > 2.000 impr. | Repo | Transición y CTA |
| CPC de enlace | ≤ US$ 0,23 | > US$ 0,36 | MB-06 con 2,5 % de clic a compra | Revisar con la conversión real |
| Llegada (vistas ÷ clics) | ~90 % | Muy por debajo de 90 % | Borba (N-32), un solo dato | Velocidad, enlace |
| IC ÷ clics | Mediana propia | La mitad de la mediana propia | Sin referencia transferible | Coherencia anuncio–página |
| Compras ÷ IC | Mediana propia | Cae fuerte en un país | Sin referencia transferible | Medios de pago de ese país (OF-37) |
| Clic a compra | ≥ 2,5 % | < 1,5 % (con CPC de US$ 0,23, el CPA pasa el equilibrio) | N-76 (un dato) y aritmética | Página, oferta, precio |
| CPA | ≤ 9,27 | > 14,26 (3 días) | N-05 | MA-11, MA-13 |
| ROAS | ≥ 1,85 | < 1,20 | N-10 | Ídem |
| Frecuencia (7 días) | ≤ 3 | > 3 | Repo | Lote siguiente |
| Reembolsos | < 7 % (la reserva) | > 8 % | Repo; Borba ≈ 4,2 % (N-37) | Revisar promesa del creativo de origen |
| Toma del bump | ≥ 25 % (supuesto) | < 20 % (piso del rango del repo) | Repo | Nombre, precio y texto del bump (OF-25, OF-26) |

### 3.2 Cifras que no cuadran (para que nadie las use como si fueran firmes)

| Cifra | Problema | Lectura correcta |
|---|---|---|
| Borba: ARPU R$ 30,21 × 1.707 ≠ R$ 43.226,70 | El ARPU del panel es bruto | Neto por venta: R$ 25,32 (MB-11) |
| Borba: IC 31,2 % | Es sobre clics, no sobre vistas (sería 34 %) | Definición de Utmify (MB-08) |
| Gaspar LATAM: lucro ~500, −80 y 366 el mismo día | Alcances distintos (un test contra el panel) o volatilidad | No juzgar el día antes de la noche |
| Alexander: ROI 1,7 en la foto contra 1,44 acumulado | La foto es un recorte favorable | Mirar siempre el acumulado |
| Alexander: 8k contra 6k de lucro | Él mismo corrige: una cuenta desactivada | El costo de la elusión aparece en sus propios números |
| Creador LATAM: CPM R$ 14,20 contra R$ 40–54 de Gaspar | Distinto nicho o momento | No hay un "CPM LATAM": medir el propio |
| Creador LATAM: CTR 6,85 % | Atípico para CTR de enlace | Es "CTR todos"; el de enlace da ≈ 1,75 % |
| Creador LATAM: US$ 142k | Es facturación; ROAS en pantalla 1,72 | Margen ≈ 42 % antes de comisiones |
| Ferreira día 1: 7 ventas a R$ 10 o 22,90 no dan R$ 115,93 | Las combinaciones dan 108,70 o 121,60 | El "7 ventas" es solo de A |
| Víctor (A74): 100 ventas de 1.000 € = "3 por mes" | 100 por año son 8,3 por mes | Mezcla anual y mensual (HT-03) |
| Víctor (A75): 280 €/día y 3.333 €/día | Uno es de 100k por año y otro de 100k por mes | Ídem |
| Julieta: ~20k USD/mes contra +25k USD/mes | Dos videos distintos | Orden de magnitud, no dato |
| ITV mínima: 40 % en el cuerpo del video, 30 % en el recap | Cambia dentro del mismo video | Heurística floja (MB-24) |
| T110: 48.000 € por 1 M de personas | CPM ≈ 48 €, muy por encima de cualquier CPM citado en LATAM | Argumento antianuncios, no dato |

---

## Cambios propuestos (métricas)

- **`playbook/formulas.md`:**
  - Agregar MB-14 (ROAS, "ROI" brasileño y ROI real) y la tabla de traducción MB-15, que se recalcula con cada oferta.
  - Agregar `ROAS de equilibrio = Bruto medio ÷ CPA de equilibrio`, `CPC máximo = CPA objetivo × clic a compra` y `ROAS mínimo con tope al front = ARPU bruto ÷ front` (MB-06, MB-18).
  - En "Benchmarks de arranque", sumar hook rate (30–40 %), hold rate (20–25 %), llegada (≥ 90 %) y clic a compra (≈ 2,5 %, un solo dato LATAM), todos como hipótesis.
  - Agregar la tabla de ruido por cantidad de ventas (MB-22) junto a "una muestra chica no concluye".
  - Aclarar en ARPU: "siempre indicar si es bruto o neto".
- **`playbook/09-medicion-y-escala.md`:** en la tabla "Qué se mide", sumar hook rate, hold rate, retención al precio (percentil), llegada, IC por creativo, compras rechazadas por país y ROI real. Unificar la comisión de afiliados con `02-oferta.md` (N-20).
- **`products/reto-cintura-28/09-metricas.md`:** columnas por semana: hook rate, CTR de enlace, CPC, IC ÷ clics, compras ÷ IC, CPA, ROAS, ROI real, toma del bump, reembolsos por creativo de origen.
