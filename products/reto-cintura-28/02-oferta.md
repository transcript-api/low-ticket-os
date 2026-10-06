# 02 · Oferta

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
- **Precio de arranque recomendado: US$ 9,90 como control**, con los extras del chat. A los 7 días y con datos, testear US$ 14,90 en la misma página cambiando solo el precio. Motivo: con tráfico frío el precio de impulso baja la barrera; el US$ 15 puede ganar en neto por visita, pero no hay dato para asumirlo.
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
| EXP-001 | Precio del principal | US$ 9,90 | US$ 14,90 | Mayor neto por visita | `metrics/experimentos.csv` |
| EXP-003 | Combo de extras | Extras separados | Combo US$ 6 | Mayor neto medio por compra | idem |
| (futuro) | Garantía | 7 días | 30 días con US$ 12,90 | Mayor neto por visita con reembolsos | idem |
