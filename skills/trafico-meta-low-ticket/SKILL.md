---
name: trafico-meta-low-ticket
description: "Operá Meta Ads para infoproductos low ticket (Hotmart, Utmify): umbrales calculados por oferta, estructura de test con 8 a 10 conceptos, diagnóstico por capa (hook rate, hold, CTR, IC), reglas de corte y escala, puja, retargeting, países, tracking, contingencia legítima de cuentas y registro de cada decisión. Usala para armar campañas, leer resultados de Meta/Utmify/Hotmart, decidir qué apagar o escalar, o traducir números de cursos brasileños (su 'ROI' es ROAS)."
metadata:
  version: "1.0"
  actualizado: "2026-10-15"
  base-de-conocimiento: "conocimiento/oferta-trafico/ (meta-ads-operacion.md, metricas-benchmarks.md)"
---

# Tráfico Meta para low ticket

Procedimiento para testear, cortar y escalar anuncios de Meta en productos de US$ 5 a 30 vendidos por Hotmart y medidos con Utmify. Sale de la tanda de transcripciones de octubre 2026 (7 operadores brasileños de low ticket + Viralidad), filtrada con la documentación de Meta, la aritmética y las reglas del negocio.

Escribí en español rioplatense con voseo, directo. Los números siempre con su origen: dato real o **hipótesis** marcada.

## Fuentes de verdad (en orden)

1. `docs/01-principios.md`, `compliance/meta-ads-politicas.md`, `compliance/checklist-previa.md`.
2. Umbrales de la oferta vigente: `playbook/formulas.md` + `node tools/unit-economics.mjs` + `products/<producto>/07-meta-ads.md`.
3. Datos propios: `products/<producto>/09-metricas.md`, `metrics/experimentos.csv`.
4. Base: `references/meta-ads-operacion.md` (MA-00 a MA-33), `references/metricas-benchmarks.md` (MB), `references/banderas-rojas.md`.
5. Método del repo: `playbook/08-meta-ads.md`, `playbook/09-medicion-y-escala.md`.

**Antes de gastar, confirmá con Santiago.** Ningún agente crea campañas, sube presupuesto ni publica sin su OK explícito.

## 1. Umbrales: se calculan, no se copian (MA-00)

Con la oferta vigente (precio, bumps y tasas reales o supuestas):

| Concepto | Fórmula |
|---|---|
| Bruto medio por venta | front + Σ(precio del bump × toma) |
| Neto medio | bruto − comisión de Hotmart (≈ 9,9 % + US$ 0,10, confirmar en la cuenta) |
| CPA de equilibrio | neto × (1 − reserva de reembolsos) |
| CPA objetivo | CPA de equilibrio × (1 − margen buscado, por defecto 35 %) |
| Corte sin ventas | 1,5 × CPA de equilibrio |
| ROAS de equilibrio / objetivo | bruto ÷ CPA de equilibrio / bruto ÷ CPA objetivo |

Con 30 ventas, reemplazá las tasas supuestas (toma de bump, reembolsos) por las reales y recalculá todo. Ejemplo vigente de Reto Cintura 28 (verificar en `07-meta-ads.md`): CPA eq. US$ 14,26 · objetivo US$ 9,27 · corte US$ 21,38 · ROAS eq. 1,20 · objetivo 1,85.

**Traducción obligatoria:** el "ROI" de los cursos brasileños es **ROAS** (facturación ÷ gasto). "ROI 2" no es 100 % de ganancia. Pasalo siempre a CPA con la tabla de `metricas-benchmarks.md` (MB-14, MB-15).

## 2. Antes de gastar

- Portafolio comercial, página de Facebook e Instagram, cuenta publicitaria en USD con medio de pago propio.
- Píxel en la página y en Hotmart (la compra se marca en el checkout). Solo 4 eventos: PageView, ViewContent, InitiateCheckout, Purchase. Nunca datos de salud, medidas ni respuestas del quiz (MA-27).
- Utmify conectado a Hotmart y a la cuenta, con su script de UTM en la página. **Una sola zona horaria** en Meta, Hotmart y Utmify (MA-06).
- Compra de prueba completa y registrada.
- Caja para unos 15 días de gasto sin retirar (verificar el plazo de retiro internacional de Hotmart) antes de escalar (MA-19).
- `compliance/checklist-previa.md` aprobado para cada creativo.

## 3. Estructura de test (MA-01 a MA-07)

| Nivel | Configuración |
|---|---|
| Campaña de test | Objetivo Ventas, evento Compra, **presupuesto por conjunto (ABO)** |
| Conjuntos | 2 conjuntos amplios (país/es + edad + sexo del público; ubicaciones Advantage+), **4 a 5 conceptos distintos cada uno** → lote de 8 a 10 (≈ 7 videos y ≈ 3 estáticos, la mezcla es hipótesis) |
| Opcional | Conjunto rioplatense (UY, AR, PY) medido aparte; hipótesis: hispanohablantes de EE. UU. + Puerto Rico + España con texto en "tú" (MA-24) |
| Retargeting | Desde ~1.000 visitas: visitantes de 7 días sin compra, IC sin compra, vistas de video al 50 %. US$ 3 a 5 por día. Mensaje por nivel de consciencia (garantía, producto por dentro, "mañana es tu Día 1") (MA-23) |
| Escala | Campaña `ESCALA` con presupuesto de campaña (CBO) para los ganadores duplicados |

- **Concepto ≠ variante.** Mismo cuerpo con otro gancho = el mismo concepto (iteración). Flip, ×1,05, cambio de color o fondo = no cuenta y no se sube (MA-22, Andromeda).
- La "CBO 1-1-10" de los cursos es un conjunto con 10 anuncios compitiendo: lo que decide es cuántos anuncios comparten presupuesto, no el rótulo (MA-03).
- Inicio programado a las 00:00 de la zona horaria de la cuenta (MA-06).
- Presupuesto de test: el que permita esperar ventas en 5 a 7 días (`gasto diario ÷ CPA objetivo` ventas esperadas por día). Con US$ 10 por conjunto no sale del aprendizaje y está bien en el test (MA-05, MA-07).
- Nombres: `C<concepto>-E<ejecución>-V<variante> | ángulo | formato | gancho`, y el mismo código en el UTM `utm_content` (MA-26).

UTM de Utmify por anuncio (o el formato que muestre su panel):
```
utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}
```

## 4. Diagnóstico por capa (antes de apagar o tocar algo) (MA-10)

| Capa | Métrica | Alarma (hipótesis hasta tener datos propios) | Qué se cambia |
|---|---|---|---|
| Gancho | Hook rate = vistas de 3 s ÷ impresiones | < 30 % con > 2.000 impresiones | El gancho y el text hook; el cuerpo se mantiene |
| Cuerpo | Hold rate = vistas de 15 s ÷ vistas de 3 s | < 20 % | Ritmo, cumplir lo que promete el gancho |
| Transición | CTR de enlace | < 0,8 % con > 2.000 impresiones | Puente al producto y CTA |
| Llegada | Vistas de página ÷ clics | Muy por debajo de ~90 % | Velocidad de la página, enlace |
| Página | IC ÷ vistas de página | La mitad de la mediana propia | Coherencia anuncio–página, precio, oferta |
| Checkout | Compras ÷ IC | Cae fuerte en un país | Medios de pago de ese país; compras rechazadas en Hotmart |
| Calidad | Reembolsos por creativo de origen | > 8 % | La promesa del creativo |

Regla: el creativo se juzga por las capas que controla. IC alto sin compras es problema de checkout, no del anuncio.

## 5. Reglas de corte (MA-08 a MA-12)

1. **72 horas sin tocar**, salvo el corte por gasto. Nunca editar un anuncio activo: para cambiarlo, duplicalo (editar reinicia el aprendizaje).
2. **Corte:** el anuncio que gastó 1,5 × CPA de equilibrio sin ventas se apaga. **Excepción:** con 2 IC o más, estirá a 2 × y revisá compras rechazadas antes de apagar.
3. Hook rate < 30 % o CTR de enlace < 0,8 % con más de 2.000 impresiones: cambiá el gancho (nuevo anuncio duplicado) o apagalo.
4. **No se apaga por un mal día:** lo que tiene 3 ventas o más se juzga por el CPA de 3 días. Un conjunto sin historial con 2 días seguidos sin ventas y gasto en el umbral, se apaga.
5. Un anuncio que gastó menos de 0,5 × CPA de equilibrio en 7 días **no fue evaluado**: no se registra como perdedor.
6. Sin "susto" de presupuesto ni serrucho en la etapa de test (MA-16).

## 6. Reglas de escala (MA-13 a MA-17)

| Condición | Acción |
|---|---|
| CPA ≤ equilibrio | Dejar correr |
| CPA ≤ objetivo con 3 ventas o más, reembolsos normales | +20 a 30 % cada 48 h |
| CPA ≤ 0,75 × objetivo con 5 ventas o más | +50 % o duplicar el ganador en `ESCALA` |
| Siempre | Nunca más de × 2 por cambio. Cambios en la primera revisión del día de la cuenta. En escala, dos revisiones por día; no se juzga el día antes de la noche |

**Puja:** cost cap solo en escala, arrancando en el CPA de equilibrio y bajando hacia el objetivo. Bid cap no con presupuesto de test. El ancla "bid cap al precio del front" solo vale si `bruto medio ÷ front ≥ ROAS objetivo`; con un solo bump chico no se cumple (MA-17).

**Ruido:** con 3 ventas el CPA tiene un error de ±58 %; con 30, de ±18 % (MB-22). Por eso se escala de a escalones.

## 7. Volumen creativo y fatiga (MA-20 a MA-22)

- Esperá que gane 1 de cada 5 a 10 conceptos. Planificá el volumen con eso.
- Cada semana, un lote de 6 a 10: mitad ejecuciones nuevas del concepto ganador (otro formato o escena, no solo otro gancho) y mitad conceptos nuevos. El copy lo escribe `copy-humanizada`; la edición, `edicion-premium`.
- Fatiga: frecuencia > 3 en 7 días, CTR que cae y CPA a 3 días que sube → entra el lote siguiente.

## 8. Países, moneda y registro (MA-24, MA-25)

- LATAM amplio en un conjunto; rioplatense aparte (en Argentina pagar en dólares tiene recargos).
- Voseo para UY/AR/PY; "tú" neutro para México, Colombia y LATAM amplio. Testealo como una variable.
- Precio en USD en Hotmart; mostrar "pago único" en voz o texto principal, no dentro de la imagen, salvo test.

## 9. Contingencia de cuentas (MA-28 a MA-32)

**Sí:** dominio propio verificado, portafolio en regla, medios de pago propios, dos administradores reales con verificación en dos pasos, revisar Calidad de la cuenta cada semana, apelar con el formulario oficial, historial limpio de políticas.

**No (descartado, arriesga perder todo):** navegadores multilogin o antidetección para "subir sin bloqueo", cuentas de agencia como repuesto cuando Meta bloquea, abrir cuentas o portafolios nuevos para seguir anunciando después de una restricción, "lateralizar" para esquivar enforcement. Es elusión de sistemas según las políticas de Meta.

## 10. Rutina y registro

| Cuándo | Qué |
|---|---|
| Diario (primeras 72 h) | Solo la regla de corte por gasto |
| Cada 48 h | Diagnóstico por capa y reglas 5 y 6 por anuncio |
| Semanal | Cerrar el lote, decidir el siguiente, revisar neto por visita y reembolsos |
| Cada decisión | `products/<producto>/10-decisiones.md`: fecha, dato, regla aplicada |
| Cada test | Fila en `metrics/experimentos.csv` (una variable, métrica principal, umbral, decisión) |

Formato para reportar a Santiago (corto):

```
Fecha · Gasto · Ventas · CPA (3 días) · ROAS · Hook rate / CTR del mejor y del peor
Decisiones: [anuncio] → [acción] porque [regla y dato]
Pedido de OK: [qué querés hacer que cambie gasto o publique]
Próximo lote: [conceptos que entran]
```

## 11. Hipótesis abiertas (testear de a una)

Lote con 3 estáticos vs sin estáticos · corte 1,5 × vs 2 × con IC ≥ 2 · un conjunto de 8–10 vs dos de 4–5 · escala +20 % vs +50 % · composición del lote semanal · EE. UU. + PR + España · cost cap en escala · excluir la peor franja horaria (con ≥ 50 ventas) · "susto" de presupuesto (solo en escala). Detalle y orden: `references/meta-ads-operacion.md` sección L.

## Errores que no se repiten

| Error | En su lugar |
|---|---|
| Copiar el umbral de otra oferta (ej. US$ 13,50 de la oferta A) | Recalcular con la oferta vigente |
| Leer "ROI 2" de un curso brasileño como 100 % de ganancia | Es ROAS 2: pasarlo a CPA |
| Lote de 6 anuncios que son variantes de 2 ideas | 8 a 10 conceptos distintos |
| Apagar un ganador por un día malo | Ventana de 3 días |
| Editar el anuncio ganador | Duplicar |
| Bid cap al precio del front con ARPU ≈ front | Cost cap al CPA que podés pagar, solo en escala |
| Escalar sin caja para el plazo de retiro | Prever caja antes |
| Cuenta nueva o multilogin cuando Meta restringe | Apelar y corregir la causa |
