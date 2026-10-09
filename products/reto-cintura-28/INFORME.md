# Informe de Reto Cintura 28

Resumen vivo del producto para quien llegue nuevo. Actualizalo al cerrar cada tramo. Detalle en los archivos numerados de esta carpeta y recorrido completo en [`docs/bitacora.md`](../../docs/bitacora.md).

**Última actualización: 2026-10-09**

## Estado en una mirada

| Área | Estado |
|---|---|
| Producto | Hecho: app de 36 días (Día 0, 28 del reto, semana 5), guía en PDF, hojas para imprimir, 22 ejercicios, 32 recetas. **Semanas 6 y 7 de regalo: las agrega Santiago el 2026-10-10** |
| Hotmart | Producto activo, US$ 15,90 con cupón `LANZAMIENTO84`, garantía 7 días, afiliados 37 % sin materiales. Checkout con correcciones pendientes (contador, banner, bump) |
| Página | **Online:** https://reto-cintura-28.vercel.app (Vercel). Código en [`pagina/`](pagina/README.md) |
| Medición | Clarity instalado (`yv8d7j01nx`). Faltan píxel de Meta (página y Hotmart) y Utmify |
| Anuncios | Todavía no lanzados. 31 creativos listos; tres tienen el precio viejo US$ 9,90 |
| Ventas / métricas | Sin datos todavía |

## Qué se hizo y por qué
1. **Producto y estrategia:** a partir del chat entre Santiago y su socio (ver [`fuentes/chat-santi-amigo.md`](fuentes/chat-santi-amigo.md)). Se descartó lo que pedía testimonios o antes/después inventados.
2. **Página v3:** se reemplazó el scroll largo por una apertura de una pantalla, un quiz de 6 preguntas (idea del socio: "¿Querés saber si el Reto Cintura 28 es para vos?"), precio visible y botones directos al precio y al checkout. Se sacó "128 páginas" y lo repetido.
3. **Honestidad:** nada de testimonios, contadores ni precios de referencia inventados. El tachado (US$ 45,43, 65 %) y el cronómetro de lanzamiento están preparados y se activan solo con un fin real del cupón.

## Decisiones de Santiago que difieren de la opinión de Claude
- **Contador sin fin real:** Santiago lo prefiere; Claude no lo implementa (ver `10-decisiones.md`). Alternativa lista: cronómetro con "por tiempo limitado" y sin fecha visible, pero con un fin real en Hotmart.
- **"Acelerá tus resultados" en el bump:** pendiente de decidir.

## Qué falta (resumen; lista completa en [`11-pendientes.md`](11-pendientes.md))
- **Antes de lanzar anuncios:** semanas 6 y 7 en la app (la página ya las nombra), píxel de Meta, Utmify, fin real del cupón, checkout corregido, creativos con precio viejo, compra de prueba.
- **Después, con datos:** lista de bloqueos de conversión (Clarity + Meta), prueba social del reto presencial, test del quiz contra la página sin quiz (EXP-002), prueba de precio (EXP-001).

## Mejoras propuestas por Claude (a validar con datos)
1. Prueba social real con videos del reto presencial, antes del precio.
2. Medir una semana antes de recortar más secciones.
3. Probar 4 preguntas en el quiz si el abandono es alto.
4. Reemplazar `app-hoy.webp` ("12 de 31" → "12 de 28").

## Dónde está cada cosa
- Página: [`pagina/`](pagina/) · Oferta y números: [`02-oferta.md`](02-oferta.md) · Anuncios: [`07-meta-ads.md`](07-meta-ads.md) · Hotmart y emails: [`08-hotmart-y-emails.md`](08-hotmart-y-emails.md) · Métricas: [`09-metricas.md`](09-metricas.md)
- Archivos pesados (PDF, ZIP, imágenes): fuera del repo, con enlaces en [`fuentes/README.md`](fuentes/README.md)
- Miro (flujo del chat): https://miro.com/app/board/uXjVEd4QLlE=/
- Producto en Vercel: cuenta de Santiago, proyecto `reto-cintura-28`
