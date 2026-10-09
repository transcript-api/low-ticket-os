# 12 · Mejoras de la página (feedback del socio, validado)

Fuente: [`fuentes/chat-santi-amigo-2.md`](fuentes/chat-santi-amigo-2.md), más el análisis propio de Claude. Fecha: 2026-10-09. Regla del repo: se valida con criterio, no se sigue al 100 %.

## Veredicto sobre cada punto del socio

| # | Punto del socio | Opinión | Estado |
|---|---|---|---|
| 1 | Poca construcción de deseo y confianza, demasiada explicación | **De acuerdo.** Coincide con lo que Claude venía diciendo | Parcial: se recortó y se reordenó; falta la prueba social real |
| 2 | Quiz como CTA principal de toda la página | **De acuerdo con matiz.** Es gratis y compromete antes de vender. Pero quien ya quiere comprar necesita un camino directo (pedido de Santiago) | **Hecho:** el quiz es el botón principal en el hero, después de "Si te pasa esto" y en el cierre. "Ir directo al precio" queda como botón secundario |
| 3 | Quiz como diagnóstico + personalización + preventa | **De acuerdo.** El resultado ya repite lo que respondió y cierra con precio | Hecho. Se puede reforzar con datos de Clarity |
| 4 | Titular "Volvé a sentirte cómoda con tu cintura en 28 días" | **Con cautela.** Es más emocional que "Afiná tu cintura", pero "volvé a sentirte cómoda" insinúa que hoy no lo está: Meta restringe asumir un atributo personal. En la página el riesgo es menor que en un anuncio | **Propuesto como test (EXP-004)**, no aplicado |
| 5 | Casos reales / prueba social | **De acuerdo: es el mayor freno.** Solo con material real y permiso escrito | **Pendiente (Santiago)**. Plantilla lista en `pagina/voces-plantilla.html` |
| 6 | La sección de la app suena a catálogo | **De acuerdo** | **Hecho:** pasó de funciones a beneficios ("no pensás qué hacer", "no sobreentrenás", "no necesitás un día perfecto") |
| 7 | Sacar "128 páginas" | **De acuerdo** (ya lo habíamos decidido) | Hecho |
| 8 | Página 15-20 % más corta, sacar repetidos | **De acuerdo** | **Hecho en parte:** se borraron la tabla "lo de siempre", "3 pasos", y se acortaron textos. Seguir con datos de Clarity |
| 9 | Dejar "Es para vos / no es para vos" | **De acuerdo.** Santiago y Claude lo habían sacado; era un error: filtra, da confianza y lleva la advertencia de embarazo y lesiones | **Restituido** (versión más corta) |

## Qué queda por mejorar (ideas de Claude)

1. **Prueba social real** antes del precio. Video corto de participantes del reto presencial + frase textual. Es la mejora con mayor impacto esperado.
2. **Test de titular (EXP-004):** "Afiná tu cintura en 28 días" contra "Sentite cómoda con tu cintura en 28 días" (versión más segura que "volvé a"). Una variable, mismo tráfico.
3. **Test del quiz como CTA principal (EXP-002 ampliado):** quiz primario contra compra directa primaria. Medir compras por visita y neto por visita.
4. **Cortar otra vez con datos de Clarity:** si el mapa de scroll muestra que la mayoría no pasa de cierta sección, mover lo vendedor arriba o borrar lo que sigue.
5. **Una sola idea por pantalla en celular:** revisar con grabaciones qué toques fallan.
6. **Velocidad:** las imágenes pesan 3,6 MB; medir con PageSpeed en 4G.
7. **Captura de la app** (`app-hoy.webp`, "12 de 31") a "12 de 28".

## Experimentos nuevos
Registrados en [`metrics/experimentos.csv`](../../metrics/experimentos.csv): EXP-004 (titular) y EXP-005 (quiz como CTA principal contra compra directa).
