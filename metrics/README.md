# Métricas entre productos

- `experimentos.csv`: registro único de todos los tests, de cualquier producto. Una fila por test.
- Las métricas semanales de cada producto viven en `products/<producto>/09-metricas.md`.

## Reglas del registro

1. Una variable por test; se escribe en `variable`.
2. Se define la `metrica_principal` **antes** de empezar.
3. `muestra` guarda el volumen (visitas o ventas) con el que se decidió.
4. `decision`: adoptar, descartar, repetir, pendiente.
5. `aprendizaje`: una frase que sirva a otros productos; si es general, también a `docs/aprendizajes.md`.
