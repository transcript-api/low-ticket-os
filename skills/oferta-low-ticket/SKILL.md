---
name: oferta-low-ticket
description: "Diseñá y mejorá la oferta de un infoproducto low ticket (Hotmart, LATAM): minería en la Biblioteca de anuncios, modelar la lógica sin clonar, subnicho y promesa, entregable, demostración del producto real, precio, order bumps, planes con downsell, upsell, ARPU, checkout, reembolsos y victoria rápida post-compra. Usala para crear o revisar una oferta, decidir bumps o precios, auditar coherencia anuncio–página–checkout, o evaluar una oferta ajena."
metadata:
  version: "1.0"
  actualizado: "2026-10-15"
  base-de-conocimiento: "conocimiento/oferta-trafico/oferta-low-ticket.md (OF-00 a OF-41)"
---

# Oferta low ticket

Una buena oferta low ticket es una cadena alineada: **creativo → página → checkout → ticket → entrega**. Si un eslabón promete algo que el siguiente no cumple, se pierde la venta o vuelve como reembolso. Esta skill sale del compilado de 7 operadores brasileños de low ticket y de Viralidad (octubre 2026), filtrado con aritmética, políticas y las reglas del negocio.

Escribí en español rioplatense con voseo, directo. Toda cifra con origen: dato real o **hipótesis**.

## Fuentes de verdad

1. `docs/01-principios.md` (honestidad comercial, salud y cuerpo), `compliance/` (Meta, Hotmart, precios y descuentos).
2. `products/<producto>/02-oferta.md`, `03-producto.md`, `07-meta-ads.md`, `10-decisiones.md`: estado real del producto. Nunca inventes qué incluye, cuántas recetas tiene o cuánto cuesta.
3. `playbook/03-oferta.md`, `07-hotmart-checkout.md`, `10-post-compra.md`, `formulas.md`, `tools/unit-economics.mjs`.
4. Base: `references/oferta-low-ticket.md` (OF), `references/metricas-benchmarks.md` (MB), `references/high-ticket-y-ventas.md` (escalera de valor, HT), `references/banderas-rojas.md`.

## Reglas que mandan

1. **Lo que el anuncio promete existe el día que sale el anuncio**, dicho igual en página, checkout y entrega (OF-00, OF-16).
2. **Se modela la lógica, nunca el texto, la VSL ni las piezas** de otro. Clonar traducido está descartado (OF-05, OF-06).
3. **Sin anclas inventadas:** nada de "valor total US$ 207" ni precio tachado que nunca se cobró (OF-22, `compliance/precios-y-descuentos.md`).
4. **Sin contadores falsos** en página ni checkout. Urgencia solo con fecha o cupo reales (OF-36).
5. **Prueba social real o nada.** Mientras no haya, se muestra el producto real funcionando (OF-17, OF-39).
6. **Sin "experto" generado con IA** ni credenciales inventadas (OF-34).
7. **Todo servicio humano incluido tiene alcance escrito** (qué, cuándo, por qué canal). Si no se puede cumplir a 10 ventas por día, no se promete (OF-41).

## Procedimiento

### 1. Minería y validación (OF-01 a OF-04)

- Buscá en la Biblioteca de anuncios de Meta por **frases de precio y formato**, no solo por nicho: "por solo US$", "pago único", "acceso inmediato", "reto 28 días", "sin gimnasio", "app de entrenamiento". En portugués ("por apenas", "desafio 28 dias") para ver mecanismos que todavía no llegaron a LATAM.
- Señal de validación: **un mismo anunciante sosteniendo varios anuncios activos** de la misma oferta (umbral de trabajo: ≥ 5 activos y al menos uno con ≥ 30 días; hipótesis).
- Hoja por oferta: anunciante · anuncios activos · anuncio activo más viejo · países · precio del front · planes · bumps (abrir el checkout sin pagar) · mecanismo · promesa · ángulo del gancho · ¿choca con políticas? · **lógica a modelar**.
- Descartá si: no la podés producir con calidad · ya la corren muchos en tu idioma y país · depende de promesas prohibidas · solo funciona copiando.
- La competencia no se esquiva: se diferencia con **mecanismo** o **subnicho**.

### 2. Promesa y público (OF-07 a OF-13)

- **Producto específico para un avatar específico;** el gancho, "ancho dentro del público".
- **Mismo producto, varios públicos:** subnichá el mensaje (creativos y página) antes de tocar el producto.
- Si cambia el contexto, cambiá la promesa, no el producto (caso tiendas de ropa: "aunque estén cerradas" → "duplicá las ventas").
- La promesa vende el punto B (vivencia de proceso); el titular dice **qué es** el producto. En salud: proceso medible, nunca kilos ni centímetros garantizados.
- "Qué recibís" en tarjetas explícitas. Vendé "ya decidido por vos" (qué hacer hoy), no cantidad de contenido.

### 3. Entregable (OF-14 a OF-16)

- Un entregable de primer nivel vale más que diez creativos: baja reembolsos y sostiene el CPA.
- Mejorá lo del competidor en **utilidad** (más fácil de usar, más decidido por vos), no en volumen.
- Se vende "app" o "guía", nunca "PDF" (baja el valor percibido; ver `AGENTS.md`).

### 4. Demostración del producto real (OF-17, OF-18)

- La prueba que sí se puede usar sin testimonios: **el producto funcionando**. App en un celular en contexto, receta cocinada, hojas impresas sobre la mesada, el timer corriendo.
- Video corto del producto como "mockup" en la primera pantalla de la página.
- Las capturas son reales. Nada de pantallas, cifras o notificaciones generadas.

### 5. Precio (OF-19 a OF-23)

- Front low ticket de referencia en LATAM: alrededor de **US$ 10** (una fuente, hipótesis). Testeá precio contra precio, una variable.
- El freno en LATAM es más la **confianza y el medio de pago** que el poder de compra: garantía visible, Hotmart, medios locales.
- Precio y "pago único" en la voz o el texto principal del anuncio; dentro de la imagen solo como test.
- Precio visual congruente: la estética comunica un precio. Ni barato (plantilla genérica, letras doradas) ni superproducción.

### 6. Arquitectura del ticket (OF-24 a OF-32)

**No se escala con el front solo: el margen está en el ARPU.** Cada US$ 1 de ARPU bruto suma ≈ US$ 0,84 al CPA de equilibrio (con 9,9 % de comisión y 7 % de reembolsos).

| Pieza | Regla | Confianza |
|---|---|---|
| Order bumps | 2 a 4, complementarios, **uno por fricción** que ya siente la compradora; nombrados por lo que resuelven ("Menú armado de 28 días + listas de compras") | Alta (complementariedad) |
| Precio del bump | Testeá el **monto absoluto** (en fronts de US$ 10–20: US$ 3 a 7,90), no la proporción brasileña | Baja → hipótesis |
| Combo | Tercera casilla con los dos bumps a menor precio que la suma | Media |
| Cuándo sumar | Apenas haya ventas (~20), en una semana sin cambios grandes de presupuesto | Baja |
| Planes | Básico (exactamente lo que promete el anuncio, completo) y Completo (más caro, continuidad y comodidad). Si el básico se recorta para forzar el salto, es carnada: descartado | Media → hipótesis |
| Downsell | Si elige el básico, una ventana única con el completo a un precio intermedio **real**, sin contador | Media → hipótesis |
| Upsell | Después de pagar, de 1 a 3, de continuidad. **No puede competir con lo que ya se regala** | Media |
| ARPU | Medí bruto y neto por separado. Con 30 ventas, reemplazá las tasas supuestas y recalculá umbrales (`trafico-meta-low-ticket`) | Alta |

Texto del bump: "Sí, sumá [extra] por US$ X" + qué fricción resuelve en una línea.

### 7. Video de venta (si hay) (OF-33)

Medí la **retención hasta el momento del precio** y testeá aperturas (la "lead") como variable. Una apertura nueva puede cambiar más el resultado que un creativo nuevo.

### 8. Checkout (OF-35 a OF-37)

- El mismo producto y la misma promesa, sin bombas de información.
- **Mucho IC sin compras es un problema de pago, no del creativo:** revisá compras rechazadas por país y medio de pago en Hotmart.

### 9. Reembolsos y activación (OF-38 a OF-41)

- Medí reembolsos por oferta, creativo de origen y semana. > 8 % → revisar la promesa del creativo que los trae.
- **Victoria rápida antes de que venza la garantía:** que la compradora logre algo medible el Día 0 (abrir la app, terminar el primer entreno, armar su primer plato) y lo vea registrado. Correo 1, página de gracias y módulo "Empezá acá" apuntan a eso.
- En low ticket, quien paga poco consume soporte: entrega autoservicio y alcance claro.

## Salida estándar

```
Oferta: [nombre] · Precio · Bumps (precio, toma supuesta/real) · Planes · Upsell
Bruto medio · Neto medio · CPA de equilibrio · CPA objetivo (con unit-economics.mjs)
Cadena: promesa del anuncio = titular de página = checkout = entrega del Día 1 (sí/no por eslabón)
Riesgos: anclas, contadores, servicio sin alcance, números que no coinciden
Cambios propuestos: # | tema | hoy | propuesta | respaldo (OF-xx) | prioridad P1/P2/P3
Tests: una variable cada uno, métrica (neto por visita), umbral, a metrics/experimentos.csv
```

## Escalera de valor (cuando la oferta ya es rentable)

Lo de high ticket (llamadas, setter y closer) **no aplica** a un front de US$ 15. Sí puede aplicar después: nivel 2, otro programa de 28 días, acompañamiento grupal pago con cupos reales, validado primero en vivo con compradoras. Ver `references/high-ticket-y-ventas.md`.

## Errores que no se repiten

| Error | En su lugar |
|---|---|
| Asesoramiento personalizado ilimitado incluido en US$ 15,90 | Alcance escrito o tramo pago con cupos reales |
| "Valor total US$ 80" con montos estimados | Concreción: qué incluye, frecuencia, plazo |
| Números distintos entre anuncio, página y app (ej. recetas) | Un solo número real, verificado en el producto |
| Contador de checkout que vence y no pasa nada | Sacarlo o fecha real del cupón |
| Copiar la proporción de bumps brasileña | Testear el monto absoluto |
| Escalar con el front solo | Subir ARPU con bumps, planes o upsell honestos |
