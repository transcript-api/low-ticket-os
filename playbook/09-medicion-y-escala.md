# 09 · Medición y escala

**Objetivo:** convertir datos en decisiones y decisiones en aprendizaje reutilizable.

## Qué se mide en cada etapa

| Etapa | Métrica | Fuente |
|---|---|---|
| Anuncio | Gasto, impresiones, CTR de enlace, CPC, frecuencia | Meta |
| Página | % que llega al precio, % que inicia el quiz, % que lo termina | Eventos / analítica de página |
| Checkout | InitiateCheckout → compra, abandono de pago | Hotmart, Utmify |
| Oferta | Ventas, neto, tasa de toma de cada extra, ticket medio | Hotmart, Utmify |
| Resultado | CPA real, ROAS, neto por visita | Utmify |
| Calidad | Reembolsos, % que llega al Día 14, respuestas a emails | Hotmart, herramienta de email |

## Ritmo

- **Diario (primeras 72 h):** solo la regla de apagado.
- **Cada 48 h:** revisar por anuncio con las reglas de `08-meta-ads.md`.
- **Semanal:** cerrar lotes, decidir creativos nuevos, revisar neto por visita de cada oferta.
- **Por test:** cerrar con decisión escrita.

## Cómo se cierra un test

1. Hipótesis y variable (una sola).
2. Control y variante, mismo tráfico, mismo tiempo.
3. Resultado en la métrica principal (neto por visita u otra definida antes).
4. Decisión: adoptar, descartar o repetir con más muestra.
5. Registro en `metrics/experimentos.csv` y en `10-decisiones.md`.
6. Si el aprendizaje es general, a `docs/aprendizajes.md` y al playbook.

Una muestra chica no concluye: si hay pocas ventas, la decisión es "seguir testeando", no "ganó".

## Cuándo escalar

- CPA bajo el objetivo, con 3 ventas o más, y reembolsos dentro de lo esperado.
- Subir 20 % cada 48 h o duplicar en campaña de escala.
- Mantener reservas de creativos: cada semana, nuevos con el ángulo ganador.

## Cuándo abrir fases de negocio

| Fase | Condición | Qué se abre |
|---|---|---|
| Venta siguiente | ~50 ventas | Upsell de un clic de continuidad |
| Afiliados | CPA estable | Afiliación en Hotmart con comisión de 40-50 % y creativos listos |
| Nuevo producto | Oferta A rentable | Segundo producto o nivel 2, con su propia carpeta |

## Registro de métricas

`products/<producto>/09-metricas.md`: una tabla por semana, con oferta, creativo, gasto, ventas, CPA, neto y decisión.

## Criterio de salida

Cada test cerrado tiene decisión escrita, y cada semana queda un resumen con qué se aprendió.
