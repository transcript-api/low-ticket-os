# 03 · Oferta

**Objetivo:** estructura de precio, extras y garantía que deje más **neto por visita** sin pedir demasiado al principio.

## Arquitectura de oferta

```
Producto principal (entrada barata, se siente completo)
  └ Extras opcionales en el checkout (order bumps): cada uno ataca una fricción
      └ Venta siguiente (upsell o continuidad) después de pagar
          └ Afiliados / escala (cuando el CPA es estable)
```

## 1. Producto principal

- Tiene que **sentirse completo**: "con esto ya puedo hacer el reto perfectamente".
- Precio de entrada que baja la barrera. Se **testea** (ver `formulas.md`), no se adivina.
- La oferta se explica en una pantalla: qué recibís, cuánto cuesta, qué garantía tiene.
- La cantidad de contenido no es el argumento. Se vende la transformación y la facilidad de empezar.

## 2. Extras de checkout (order bumps)

Un extra se vende solo si ataca una **fricción que la compradora ya siente**. Preguntas para encontrarlas: ¿por qué abandonan? ¿qué preguntan después de comprar?

Reglas:
1. Cada extra resuelve **una** fricción, nombrada en el título.
2. Se presenta como **"extra opcional"**, "completá tu reto". Nunca como "otro producto" ni como algo necesario.
3. Se muestra **en el checkout**, cuando la persona ya está en modo compra. La página tiene una sola oferta y un solo botón.
4. Precio bajo y casi automático para el primero (compra impulsiva); algo más alto para el segundo.
5. Probar el **combo** (los dos juntos) contra los precios sueltos.
6. Hotmart admite hasta 9 bumps por checkout (ayuda oficial); más extras no es mejor: cada uno resta atención.

Fricciones típicas y su extra:

| Fricción | Extra posible |
|---|---|
| "No sé qué comer / qué comprar" | Menú armado + lista de compras + sustituciones |
| "Voy a abandonar / un día fallé" | Kit antiexcusas: plan B corto, rutina exprés, protocolo de regreso |
| "Quiero resultados más rápido" | Método acelerado |
| "¿Y después?" | Seguimiento de continuidad |

## 3. Garantía

- Real, por plataforma (Hotmart: 7, 15, 21 o 30 días), explicada sin letra chica.
- Una garantía más larga puede subir la conversión; se prueba contra el aumento de reembolsos (ver `formulas.md`).

## 4. Urgencia

Solo precio de lanzamiento con **fecha real que se cumple**. Si no se sube el precio ese día, no se anuncia.

## 5. Venta siguiente

- **Upsell de un clic después de pagar:** continuidad lógica del producto (ej. las próximas semanas o un nivel 2).
- Se activa con un volumen mínimo de ventas (referencia: 50) para no complicar el test inicial.

## 6. Test de ofertas: una variable por vez

| Test | Qué cambia | Gana si |
|---|---|---|
| Precio | Solo el precio del principal | Mayor neto por visita |
| Extras | Con y sin cada extra, o combo | Mayor neto medio sin bajar la conversión del checkout |
| Garantía | 7 días contra 30 días | Mayor neto por visita incluyendo reembolsos |

Cada variante corre 7 días o hasta 50 ventas.

## Entregable: `02-oferta.md`

Estructura elegida, alternativas descartadas con motivo, cálculos de `unit-economics.mjs` y plan de tests.

## Criterio de salida

Está calculado el **CPA de equilibrio** de cada variante y existe un plan de test con una variable por vez.
