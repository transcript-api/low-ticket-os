# Precios de referencia y descuentos

Regla del repo: **el precio "tachado" o "antes" tiene que ser un precio real**. La urgencia y la escasez también (ver `docs/01-principios.md`).

## El caso: base US$ 99,38 + cupón "84" = ~US$ 15,90

Reto Cintura 28 tiene en Hotmart un precio base de US$ 99,38 y un cupón de 84 % que lo deja en US$ 15,90. El tráfico pago entra con el cupón; se planea mostrar "84 % de descuento" en la página para que parezca un producto caro a precio bajo.

**Qué está bien:** el mecanismo técnico (cupón por link, medido por Utmify) funciona y no hay nada indebido en usar cupones.

**Qué es el problema:** mostrar "84 % de descuento sobre US$ 99,38" afirma que el producto vale y se vende normalmente a US$ 99,38. Si nunca se vendió a ese precio, es un **precio de referencia inventado**.

| Riesgo | Por qué importa |
|---|---|
| Publicidad engañosa | Las leyes de defensa del consumidor de la región penalizan los descuentos sobre precios que no existieron o no se aplicaron de verdad (verificá la de tu país; en Uruguay, la Ley 17.250) |
| Meta | Las políticas piden que anuncios y página no sean engañosos ni falsos en ofertas y precios. Un descuento ficticio puede frenar anuncios o cuentas |
| Reembolsos y reclamos | Quien después ve el producto a otro precio, o lo compara, se siente engañado |
| Hotmart y afiliados | Si el cupón circula, quien entra sin cupón ve US$ 99,38; los afiliados replican el "84 %" y multiplican el riesgo |
| Confianza | La marca depende de que lo que se dice sea verdad |

Esto no es asesoría legal: ante la duda, consultar a un profesional del país donde se vende.

## Cómo lograr el mismo efecto ("pago poco por algo valioso") sin riesgo

| Opción | Cómo se hace | Riesgo |
|---|---|---|
| **1. Precio de lanzamiento real** | Publicar US$ 15,90 "precio de lanzamiento hasta el [fecha]" y **subir el precio de verdad ese día** (por ejemplo a US$ 24,90 o 29,90). A partir de ahí, el "antes" es real | Bajo |
| **2. Comparar con alternativas reales** | "Un mes de gimnasio cuesta más. Una consulta con una nutricionista cuesta más." Solo con comparaciones verificables y de servicios distintos | Bajo |
| **3. Valor de lo que incluye, sin precio inventado** | Mostrar todo lo que recibe (app, guía de 128 páginas, 32 recetas, menú, hojas) y el precio actual. Sin "valor US$ 99" | Bajo |
| **4. Precio base realmente vigente** | Si US$ 99,38 va a ser un precio real de venta (se ofrece y se vende a ese precio por un período real), el descuento deja de ser ficticio | Medio |
| **5. Cupón sin porcentaje a la vista** | Usar el cupón solo como mecanismo técnico; en anuncios y página mostrar el precio final y nada más | Bajo |

**Recomendación:** opciones 1 + 5 y, si querés fuerza de valor, la 3. Es lo más cercano a lo que querés y se sostiene ante Meta, Hotmart y un reclamo.

## Cupón de lanzamiento honesto (aclaración del 2026-10-08)

"Hago algunas ventas con el cupón al principio y listo" **no** convierte el precio base en real: lo que importa es si el precio de lista se cobra de verdad y si el cupón termina.

| Situación | ¿Honesto? |
|---|---|
| Cupón con fecha de fin o tope de usos, y después el precio sube de verdad | Sí |
| Cupón permanente y el precio de lista nunca se cobra, pero se muestra "84 % off" o "antes US$ 99,38" | No |
| Cupón permanente y solo se muestra el precio final | Sí (el cupón es un mecanismo técnico) |

**Order bump:** de US$ 40 a US$ 4,90 solo es un descuento real si US$ 40 va a ser su precio después del lanzamiento. Si queda siempre en 4,90, no se muestra "antes US$ 40".

**Ojo con el checkout:** Hotmart puede mostrar el precio original tachado al aplicar el cupón. Verlo en el checkout real y decidir si se ajusta el precio base.

## Detalles técnicos que conviene revisar

- **Cupón `84`:** es corto y fácil de adivinar. Revisar límite de usos, fecha de vencimiento y a qué ofertas aplica.
- **Order bump:** se aplicó el mismo cupón; confirmar el precio base del bump y el final (4,90).
- **Afiliados al 37 %:** confirmar si la comisión se calcula sobre el precio con cupón (lo esperable) y cómo se les comparte el link con cupón.
- **Reembolsos:** se devuelve lo pagado (US$ 15,90), no el precio base; el cálculo de `playbook/formulas.md` usa el precio efectivo.
- **Consistencia:** el precio que ve la persona en el anuncio, la página y el checkout tiene que ser el mismo, con o sin cupón.

## Antes de publicar un descuento

- [ ] El precio de referencia se vendió realmente a ese valor, o va a existir de verdad en la fecha anunciada.
- [ ] La fecha de fin es real y se cumple.
- [ ] Anuncio, página y checkout muestran el mismo precio.
- [ ] El cupón está limitado en usos o fecha si se promete escasez.
