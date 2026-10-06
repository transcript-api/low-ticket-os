# Fórmulas de economía unitaria

Todas las decisiones de precio, corte y escala salen de acá. Calculadora: `node tools/unit-economics.mjs --help`.

## Variables

| Símbolo | Qué es | Origen |
|---|---|---|
| P | Precio del producto principal | Oferta |
| bᵢ, tᵢ | Precio y tasa de toma del extra i (0 a 1) | Oferta; la tasa es **hipótesis** hasta medir |
| f% , f$ | Comisión de Hotmart (porcentaje y fija) | Cuenta Hotmart. Referencia: 9,9 % + US$ 0,10 |
| r | Reserva de reembolsos | Historial; arranque 7 % |
| m | Margen a reinvertir sobre el equilibrio | Arranque 35 % |

## Cálculo

```
Bruto medio        = P + Σ (bᵢ × tᵢ)
Comisión           = f% × Bruto medio + f$
Neto medio         = Bruto medio − Comisión
CPA de equilibrio  = Neto medio × (1 − r)
CPA objetivo       = CPA de equilibrio × (1 − m)        # escalar solo por debajo
Apagar sin ventas  = 1,5 × CPA de equilibrio            # gasto sin una venta
```

CPA = lo que pagás en anuncios por cada venta. No incluye impuestos de tu país ni herramientas.

## Ejemplos (calculados con la herramienta)

| Oferta | Ticket máx. | Neto medio | CPA equilibrio | CPA objetivo | Apagar desde |
|---|---|---|---|---|---|
| A: 9,90 + bump 4,90 (25 %) | 14,80 | 9,92 | 9,23 | 6,00 | 13,84 |
| 15 + extras 3 (35 %) y 5 (25 %) | 23,00 | 15,49 | 14,40 | 9,36 | 21,60 |
| 14,90 + extras 3 (35 %) y 5 (25 %) | 22,90 | 15,40 | 14,32 | 9,31 | 21,48 |
| 9,90 + extras 3 (35 %) y 5 (25 %) | 17,90 | 10,89 | 10,13 | 6,58 | 15,19 |

Las tasas de toma son supuestos. Se reemplazan por datos reales apenas hay ventas.

## Cómo usarlas

1. **Antes de lanzar:** calculá el CPA de equilibrio de cada oferta. Si con CPC y conversión razonables del nicho no podés llegar a ese CPA, la oferta no cierra.
2. **Reglas de corte:** los umbrales de `playbook/08-meta-ads.md` se recalculan **por oferta**. No se copian números de otro producto.
3. **Test de precio:** lo que importa es el **neto por visita**, no la conversión sola.
   `Neto por visita = Conversión × Neto medio`. Un precio más alto con menos conversión puede ganar.
4. **Extras:** un extra suma si `bᵢ × tᵢ × (1 − f%)` es mayor que lo que pierde de conversión en el checkout. Medilo: tasa de compra del checkout con y sin extra.
5. **Garantía más larga:** compara el neto por visita incluyendo el aumento esperado de reembolsos.

## Benchmarks de arranque (hipótesis, no verdad)

Usarlos como punto de partida y reemplazarlos con datos propios.

| Métrica | Referencia | Uso |
|---|---|---|
| CTR de enlace | sobre 1,2 % bueno; bajo 0,8 % con más de 2.000 impresiones: cambiar gancho | Filtrar creativos |
| Reembolsos | menos de 8 % | Evaluar promesa y entregable |
| Tasa de toma de un extra | 20-35 % | Evaluar el extra |
| Frecuencia | más de 3 en 7 días: entrar creativos nuevos | Saturación |

## Registro

Todo cálculo que justifique una decisión se pega en `products/<producto>/02-oferta.md` con fecha y parámetros.
