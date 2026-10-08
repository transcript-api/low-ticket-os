# 11 · Pendientes

## Hoy

| Tarea | Quién |
|---|---|
| **URGENTE: el precio base en Hotmart figura como 99,38 US$** (debería ser 15,90). Confirmar si es un error y corregirlo, o decir si es intencional | Santiago |
| Revisar en Hotmart lo que falta: order bump, apariencia del checkout, píxel, página de gracias, área de miembros | Claude (con OK) / Santiago |
| Activar recuperador de carritos o cupón de recuperación | Santiago |
| Configurar materiales y reglas de afiliados antes de aprobar a nadie (el programa ya está activo) | Santiago |
| Pasar la lista de cambios que quiere en la página | Santiago |
| **Verificar el estado de Hotmart** (producto, precio, bump, garantía, afiliación, píxel, página de gracias): sin acceso, pedir capturas o iniciar sesión en una ventana que Claude pueda usar | Santiago / Claude |
| Elegir el nombre del bump ("Menú Acelerador" o "Menú armado de 28 días") | Santiago |
| Subir este repo a GitHub (privado) | Santiago |

## Desfasajes de precio a corregir (US$ 9,90 → US$ 15,90)

| Dónde | Qué dice hoy | Acción |
|---|---|---|
| C01 (texto principal) | "Empezá hoy por US$ 9,90" | Sacar el precio del texto o poner el vigente |
| C13 (texto, titular e **imagen**) | "28 días por US$ 9,90"; la comparación con la pizza | Rehacer; revisar si la pizza sigue siendo una buena comparación a US$ 15,90 |
| C18 (titular e **imagen**) | "Todo por US$ 9,90" | Rehacer |
| `landing-config.json` | `price`: US$ 9,90; `priceLabel`: "Precio de lanzamiento" | Actualizar; dejar "Precio de lanzamiento" solo si hay fecha real de suba |
| Página de ventas | Precio en hero, oferta y barra | Se toma de `landing-config.json`; revisar el texto fijo |
| Reglas de corte de Meta | Apagar a US$ 13,50, escalar a US$ 6 | Usar [07-meta-ads.md](07-meta-ads.md) con la oferta vigente |
| Centro de mando y emails | US$ 9,90 | Actualizar al regenerar |

## Esta semana

| Tarea | Quién | Depende de |
|---|---|---|
| Definir el contenido del Kit Antiexcusas | Claude | Decisión de oferta |
| Armar el Meal & Shopping Kit desde el menú de 28 días | Claude | Decisión de oferta |
| Escribir las 4 preguntas del quiz y los 4 resultados (versión final) | Claude y socio | OK a [04-pagina.md](04-pagina.md) |
| Proponer 2 direcciones visuales y el plan de secciones de la página | Claude | OK de Santiago |
| Rehacer la página con el hero del socio | Claude | OK a las direcciones |
| Corregir V07 (24 → 32 recetas) y los títulos de C28 y C31 (`<em>`) | Claude | — |
| Crear producto y extras en Hotmart (verificar límite de order bumps y comisión) | Santiago | Decisión de oferta |
| Publicar el sitio en Cloudflare Pages con dominio propio | Santiago | Página |
| Compra de prueba completa | Santiago | Hotmart y página |
| Píxel de Meta y Utmify conectados | Santiago | Sitio publicado |

## Después

| Tarea | Quién |
|---|---|
| Subir lote 1 a Meta (US$ 20-25/día) y aplicar regla de 72 horas | Santiago |
| Cargar resultados en [09-metricas.md](09-metricas.md) y decidir | Claude |
| Pedir permiso a las primeras compradoras para testimonios reales | Santiago |
| Investigar competidores (biblioteca de Meta y Hotmart) y completar [00-brief.md](00-brief.md) | Claude |
| Producir los videos de prioridad 1 (V03, V01, V06, V02) | Santiago / Claude con Higgsfield |
| Venta siguiente: definir el seguimiento de 60 días | Claude |
| Decidir si Glúteos 28 es producto aparte | Santiago |
| Entregar la app desde el área de miembros | Santiago |

## Hecho

- Estrategia del chat organizada, criticada y decidida (2026-10-06).
- Repo creado con método, plantillas y este producto.
