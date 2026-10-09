# Informe de Reto Cintura 28

Resumen vivo del producto para quien llegue nuevo. Actualizalo al cerrar cada tramo. Detalle en los archivos numerados de esta carpeta y recorrido completo en [`docs/bitacora.md`](../../docs/bitacora.md).

**Última actualización: 2026-10-09 (noche)**

## DÓNDE PARAMOS (2026-10-09, noche) Y QUÉ SIGUE

**Hecho:** página v3 online con apertura de una pantalla, quiz como botón principal (hero, mitad y cierre), "Ir directo al precio", bonus en la tarjeta de precio, sección de app en beneficios, "¿Es para vos?" restituida, Clarity activo, semanas 5-7 nombradas. Feedback del socio analizado en [12-mejoras-pagina.md](12-mejoras-pagina.md). Todo en GitHub.

**Lo próximo, en orden:**
1. Santiago agrega las **semanas 6 y 7** a la app (2026-10-10). Sin eso no se lanzan anuncios.
2. **Descuento y cronómetro:** hoy NO aparecen en la página a propósito. Para encenderlos hace falta (a) en Hotmart: precio base US$ 45,43, cupón 65 % y fecha de fin del cupón; (b) cargar `launchEndsAt` en `pagina/landing-config.json` con esa misma fecha. Sin fin real no se muestra (ver bitácora).
3. **Píxel de Meta** (ID) en la página y en Hotmart; **Utmify** (Claude guía).
4. **Checkout:** contador falso, banner, texto del bump (decidir "acelerá tu reto" vs "acelerá tus resultados").
5. **Prueba social real** (videos/fotos del reto presencial con permiso): lo que más puede mover la conversión.
6. Compra de prueba, creativos con precio viejo, lanzar el test, medir una semana con Clarity y recién ahí cortar o testear (EXP-004, EXP-005).

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
- Miro (flujo del chat): https://miro.com/app/board/uXjVEd4QLlE=/ · contenido organizado en [`docs/miro-ideas.md`](../../docs/miro-ideas.md)
- Feedback del socio y mejoras: [`12-mejoras-pagina.md`](12-mejoras-pagina.md)
- Producto en Vercel: cuenta de Santiago, proyecto `reto-cintura-28`
