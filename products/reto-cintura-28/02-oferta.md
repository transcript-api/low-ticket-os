# 02 · Oferta

## Actualización de acompañamiento (Santiago, 2026-10-12)

Incluido en el mismo pago del reto, según lo confirmado por Santiago en el chat:

- Asesoramiento personalizado por **WhatsApp durante 7 semanas**.
- Comunidad del reto en **WhatsApp con acceso de por vida**.
- App, guía y demás materiales con **acceso de por vida**.

No se inventan disponibilidad 24/7, consultas ilimitadas, credenciales profesionales ni plazos de respuesta. La prestación humana y los enlaces de acceso son responsabilidad de Santiago. El costo operativo de este asesoramiento no está incorporado a los cálculos anteriores; revisarlo cuando haya datos.

La página ahora ofrece **Semana 5 de regalo**, que está entregada en la app. Se retira la promesa de las Semanas 6 y 7 mientras no estén publicadas. Las **7 semanas de asesoramiento** son un beneficio distinto y no significan siete semanas de contenido dentro de la app.

## Oferta vigente (datos de Santiago, 2026-10-08)

| Pieza | Valor | Verificado |
|---|---|---|
| Principal: Reto Cintura 28 | **US$ 15,90** | No (sin acceso a Hotmart) |
| Order bump: Menú Acelerador (28 días) | **US$ 4,90** | No |
| Afiliados | **37 %** de comisión | No |
| Garantía | 7 días | No |

Cálculo con `node tools/unit-economics.mjs --price 15.9 --bump 4.9:<tasa>` (comisión 9,9 % + US$ 0,10, reembolsos 7 %):

| Toma del bump | Neto medio | CPA equilibrio | CPA objetivo (−35 %) | Apagar sin ventas desde |
|---|---|---|---|---|
| 15 % | US$ 14,89 | US$ 13,85 | US$ 9,00 | US$ 20,77 |
| 25 % | US$ 15,33 | US$ 14,26 | US$ 9,27 | US$ 21,38 |
| 35 % | US$ 15,77 | US$ 14,67 | US$ 9,53 | US$ 22,00 |
| Sin bump | US$ 14,23 | US$ 13,23 | US$ 8,60 | US$ 19,85 |

**Lectura crítica:**
- Pasar de US$ 9,90 a US$ 15,90 sube el CPA de equilibrio de US$ 9,23 a ~US$ 14,26. Con US$ 15,90 las reglas de corte del centro de mando (apagar a US$ 13,50, escalar a US$ 6) **ya no sirven**: usar la tabla de arriba.
- El precio más alto exige mejor conversión de la página; no hay dato todavía. Se testea (EXP-001): US$ 15,90 contra una variante más baja (9,90 a 11,90), una variable por vez.
- **Afiliados al 37 %:** en una venta de afiliado el productor retiene ~US$ 8,3 de US$ 15,90 y ~US$ 10,9 con el bump (estimación; Hotmart define la base exacta). Es rentable porque el afiliado paga su propio tráfico, pero abre un riesgo de marca: ver [`compliance/afiliados.md`](../../compliance/afiliados.md). No se abre hasta tener ventas propias, reembolsos medidos y kit de afiliado.
- **Nombre "Menú Acelerador":** el archivo es un menú de 28 días con listas de compra, sin método de aceleración. "Acelerador" insinúa resultados más rápidos y puede generar reembolsos y observaciones de políticas. Recomendación: llamarlo "Menú armado de 28 días + listas de compras" (como en el PDF), o describir exactamente qué acelera si es otra cosa. Decide Santiago.
- Con un solo bump (4,90) se pierde el potencial de los dos extras del chat. Se pueden sumar después: Hotmart admite hasta 9 por checkout (ayuda oficial).

## Fuentes de oferta anteriores

Hay tres fuentes de oferta: el **centro de mando** (ofertas A, B, C), el **chat** de Santiago y su socio (principal más extras) y la **recomendación** de la crítica. Todas se pueden testear; no se mezclan.

## Ofertas sobre la mesa

| Concepto | A · Centro de mando (control) | B · Chat | C · Recomendada |
|---|---|---|---|
| Principal | US$ 9,90 | US$ 15 | Test: US$ 9,90 contra US$ 14,90 |
| Extra 1 | Menú de 28 días + listas, US$ 4,90 | Kit Antiexcusas, US$ 3 | Kit Antiexcusas, US$ 3 |
| Extra 2 | No hay | Meal & Shopping Kit, US$ 5 | Meal & Shopping Kit, US$ 5 (reemplaza al menú de 28 días) |
| Combo | No | Los dos juntos por US$ 6 | Probar combo en una variante |
| Continuidad | Upsell de 8 semanas, US$ 17-27, desde 50 ventas | Seguimiento de 60 días, US$ 5 | Upsell de un clic después de pagar |
| Garantía | 7 días | 7 días | 7 días |
| Ticket máximo | US$ 14,80 | US$ 23 | US$ 22,90 (14,90 + 3 + 5) |

Variantes del centro de mando que no se descartan:
- **B · Impulso:** US$ 4,90 + menú en el checkout. Se prueba si A tiene buen CTR (más de 1,2 %) y el CPA queda sobre US$ 9.
- **C · Garantía Reto Completo:** US$ 12,90 con garantía de 30 días. Con 30 ventas de A y reembolsos bajo 8 %.

## Qué es cada extra

| Extra | Fricción | Contenido | Precio |
|---|---|---|---|
| Kit Antiexcusas | "Voy a abandonar" | Plan B de 8 min, rutina exprés de 5 a 10 min, qué hacer si faltás un día, "qué hago cuando comí de más", protocolo de recuperación | US$ 3 (compra casi automática) |
| Meal & Shopping Kit | "No sé qué comer" | Qué comprar, menú de 7 días, lista de compras, recetas, porciones, desayuno-merienda-cena, sustituciones | US$ 5 |
| Seguimiento de 60 días | "¿Y después?" | Continuidad lógica de las semanas siguientes | US$ 5 (chat) |

El menú de 28 días + listas (11 páginas) ya existe: es la base del Meal & Shopping Kit. Reutilizarlo antes de producir algo nuevo.

## Cómo se presentan

- La página tiene **una sola oferta y un botón**. Los extras aparecen en el checkout, ya en modo compra.
- Frame: **"Completá tu reto"** y **"extra opcional"**, no "comprá este producto adicional" ni "necesario".
- El principal debe sentirse completo ("con esto ya puedo hacer el reto perfectamente").
- Ejemplo de título: "Sí, sumá el Kit Antiexcusas por US$ 3". Descripción: una línea de qué resuelve.

## Cálculos (`node tools/unit-economics.mjs`, comisión 9,9 % + US$ 0,10, reembolsos 7 %)

| Variante | Tomas de extra (hipótesis) | Neto medio | CPA equilibrio | CPA objetivo (−35 %) | Apagar sin ventas desde |
|---|---|---|---|---|---|
| A: 9,90 + menú 4,90 | 25 % | US$ 9,92 | US$ 9,23 | US$ 6,00 | US$ 13,84 |
| B: 15 + 3 + 5 | 35 % y 25 % | US$ 15,49 | US$ 14,40 | US$ 9,36 | US$ 21,60 |
| C1: 14,90 + 3 + 5 | 35 % y 25 % | US$ 15,40 | US$ 14,32 | US$ 9,31 | US$ 21,48 |
| C2: 9,90 + 3 + 5 | 35 % y 25 % | US$ 10,89 | US$ 10,13 | US$ 6,58 | US$ 15,19 |

Las tasas de toma son **hipótesis sin medir**. El centro de mando redondeó A a CPA de equilibrio 9 y apagado a 13,50; con la herramienta salen 9,23 y 13,84.

Pendiente de verificar en la cuenta de Hotmart: si la comisión de 9,9 % + US$ 0,10 aplica sobre el total de la transacción cuando el principal es de hasta US$ 15 y con extras suma más.

## Opinión

- Del chat entra lo que mejora la oferta: principal completo, extras que atacan fricciones, nombres de "extra opcional" y la presentación en el checkout.
- **Precio:** Santiago fijó US$ 15,90 (2026-10-08). Mi recomendación original era arrancar a US$ 9,90 porque con tráfico frío el precio de impulso baja la barrera. No hay datos para decir que 15,90 sea peor: **se respeta la decisión y se la testea** con una variante más baja en la misma página (EXP-001), cambiando solo el precio. Lo que sí es obligatorio: sincronizar creativos y página con el precio vigente antes de gastar.
- El **neto por visita** decide, no la conversión sola: ver `playbook/formulas.md`.

## Urgencia

Precio de lanzamiento con **fecha real** (ej. 14 días después de lanzar), anunciada en retargeting. Ese día se sube el precio en Hotmart y en la página. Si no se sube, no se anuncia.

## Fases posteriores

| Fase | Condición | Oferta |
|---|---|---|
| 2 · Upsell de un clic | ~50 ventas | "Cintura 28 · Continuación": 8 semanas para sostener lo logrado, US$ 17-27 |
| 3 · Afiliados | CPA estable | Afiliación en Hotmart con 40-50 % de comisión, con creativos listos |
| Producto aparte | Oferta A rentable | Glúteos 28 o Nivel 2 |

## Plan de tests de oferta (una variable por vez)

| Test | Variable | Control | Variante | Gana si | Registro |
|---|---|---|---|---|---|
| EXP-001 | Precio del principal | US$ 15,90 (vigente) | US$ 9,90 a 11,90 | Mayor neto por visita | `metrics/experimentos.csv` |
| EXP-003 | Extras de checkout | Solo Menú 4,90 | Menú + Kit Antiexcusas 3 + Meal Kit 5 (o combo 6) | Mayor neto medio sin bajar conversión del checkout | idem |
| (futuro) | Garantía | 7 días | 30 días con US$ 12,90 | Mayor neto por visita con reembolsos | idem |
