# 08 · Hotmart y emails

## Estado real en Hotmart (revisado el 2026-10-08, solo lectura salvo el nombre)

| Dato | Valor visto | Comentario |
|---|---|---|
| Producto | ID 8680694, eBook, "Salud y Deportes", español, país principal Uruguay, **ventas activas** | |
| Nombre | **"Reto Cintura 28"** (era "Reto Cintura 28cm"; cambiado el 2026-10-08 a pedido de Santiago) | "28cm" sonaba a promesa de 28 cm menos de cintura |
| Precio base | **99,38 US$** | **Intencional** (aclarado por Santiago): precio base con un **cupón de 84 %** (código `84`) que deja el precio efectivo en ~US$ 15,90. También se aplicó al order bump. El tráfico pago entra con el cupón. Riesgos y alternativas: [`compliance/precios-y-descuentos.md`](../../compliance/precios-y-descuentos.md) |
| Ofertas | 1 oferta ("Precio base", código `eucnkmyz`, pago al contado) | Recuperador automático de carritos: **no disponible** |
| Reembolso | 7 días | OK |
| Archivos del producto | 2: guía (11,81 MB) y hojas para imprimir (188 KB) | OK; el menú va como bump, producto aparte |
| Afiliados | Programa **activo**, 0 afiliados, 0 ventas con afiliación, **sin materiales configurados** | Sin kit ni reglas todavía: ver [`compliance/afiliados.md`](../../compliance/afiliados.md) |
| Descripción | Coincide con el producto (36 jornadas, 22 ejercicios, 32 recetas, 128 págs.) y trae aviso médico | Dice "Mujeres de 25 a 50": aceptable en Hotmart, no en anuncios |
| No revisado | Order bump, apariencia del checkout, píxel, página de gracias, área de miembros, emails | Pendiente |

Nota: Claude marcó primero el 99,38 como posible error; era el precio base del esquema con cupón. Corregido el 2026-10-08.

## Checkout: revisión del 2026-10-08 (solo lectura, abierto como comprador, sin comprar)

Links de la oferta (públicos):
- Página de pago: `https://pay.hotmart.com/B107932749E`
- Página de pago personalizada (la que tiene banner, contador y bump): `https://pay.hotmart.com/B107932749E?checkoutMode=10`
- Página de ventas de Hotmart (no se usa): `https://go.hotmart.com/B107932749E`

**Link correcto para los anuncios y para `checkoutUrl` en `landing-config.json`:**

```
https://pay.hotmart.com/B107932749E?checkoutMode=10&offDiscount=LANZAMIENTO84
```

Con `?coupon=LANZAMIENTO84` el cupón **no se aplica** y el comprador ve el precio base (R$ 547 ≈ US$ 99). Con `offDiscount=` sí: "Desconto (84 %)", total R$ 87,52 ≈ US$ 15,90.

| Qué se ve | Estado | Acción recomendada |
|---|---|---|
| Precio con cupón | Funciona con `offDiscount=` | Usar ese link; probar que Utmify conserve los parámetros |
| El comprador ve el precio base y "Desconto (84 %)" | Lo muestra Hotmart, aunque la página no lo diga | Ver [`compliance/precios-y-descuentos.md`](../../compliance/precios-y-descuentos.md): el precio base tiene que ser real o el cupón terminar |
| Contador regresivo "ÚLTIMA OPORTUNIDAD · Tu precio de lanzamiento está reservado por tiempo limitado" (~1 h 15 min) | Se mantiene entre cargas | **Verificar qué pasa al llegar a cero y con un visitante nuevo.** Si se reinicia, es urgencia falsa: quitarlo o atarlo a la fecha de fin real del cupón |
| Texto "Lorem ipsum dolor" sobre el formulario | Texto de relleno visible | **Borrado el 2026-10-08** (solo el componente de texto; el banner quedó intacto) y verificado en el checkout real |
| Banner | Foto de una mujer con un teléfono que muestra "Calorías 960 kcal" y "Pasos 4.532", con el texto "Tu Día 1 empieza hoy" | La app real no cuenta calorías (la promesa es "sin contar calorías"), y una persona de IA con una app inventada parece una clienta. Usar `reto-cintura-28-banner-checkout.jpg` (teléfono con la app real, sin persona) |
| Order bump | "SÍ, quiero agregar el Menú Acelerador: comidas listas para seguir el reto sin pensar qué cocinar **y ver resultados más rápido**. Se agrega ahora por solo US$4,90. Esta oferta solo aparece en esta compra." (R$ 27,00) | Sacar "y ver resultados más rápido" (promesa que el menú no entrega); renombrar a "Menú armado de 28 días"; "extra opcional" |
| Moneda e idioma | Depende del país de quien compra (visto desde Brasil: reales, portugués) | Normal en Hotmart; revisar cómo se ve desde Uruguay y México |
| Recuperador de carritos | No disponible | Activar cuando se pueda |

Texto propuesto para el bump:

> **Sí, sumá el Menú armado de 28 días por US$ 4,90.** Cada día resuelto: desayuno, almuerzo, merienda y cena con las recetas del reto, más la lista de compras de cada semana. Extra opcional.

Método: `playbook/07-hotmart-checkout.md` y `compliance/hotmart.md`. Las rutas privadas de la app y de gracias **no se escriben acá** (están en `LEEME-PUBLICAR.txt` del ZIP del sitio). En los textos aparecen como `{URL_APP}` y `{URL_GRACIAS}`.

## Producto 1: Reto Cintura 28

| Campo | Valor |
|---|---|
| Formato | eBook (se sube el PDF de la guía) |
| Categoría | Salud y deportes |
| Idioma | Español |
| Precio | **US$ 15,90** (vigente según Santiago, 2026-10-08; moneda USD, Hotmart lo muestra en moneda local). La descripción de abajo es de la versión con US$ 9,90 |
| Garantía | 7 días |
| Afiliados | 37 % (vigente según Santiago). Reglas: [`compliance/afiliados.md`](../../compliance/afiliados.md) |
| Estado en Hotmart | **Sin verificar**: no hubo acceso a la cuenta |
| Página de ventas | `https://TUDOMINIO/` |
| Página de agradecimiento | `{URL_GRACIAS}` (privada) |
| Archivos | `reto-cintura-28.pdf` y `reto-cintura-28-imprimibles.pdf` |
| Área de miembros | Módulo "Empezá acá" con 3 clases: tu app (`{URL_APP}`), la guía en PDF y las hojas para imprimir |

**Descripción corta:** Reto de 28 días para afinar tu cintura desde casa: entrenos de 20 a 30 minutos, comida normal y un plan B para los días difíciles.

**Descripción completa:**

> El Reto Cintura 28 es un plan de 28 días para afinar tu cintura desde casa, sin gimnasio y sin pasar hambre.
>
> Qué recibís:
> - App del reto con 36 días: Día 0 para prepararte, los 28 días del reto y la Semana 5 de regalo para sostenerlo.
> - Entrenos guiados de 20 a 30 minutos con timer: 22 ejercicios con 3 niveles y demo en dos tiempos.
> - Método del plato y 32 recetas con ingredientes de supermercado, más tus platos de siempre en versión Cintura.
> - Plan B de 8 minutos para los días que no dan.
> - Guía completa de 128 páginas en formato historia, para leer en el celular.
> - Hojas para imprimir: calendario de 36 días, medidas, lista de compras y tus reglas.
> - Guías para eventos y comidas afuera, hinchazón y sueño.
>
> Medís tu avance en centímetros: cintura el Día 0, el 14 y el 29, más un test de fuerza.
>
> Garantía de 7 días.
>
> Programa de hábitos y actividad física para personas adultas sanas. No reemplaza la consulta médica ni nutricional.

## Extras (productos separados, order bumps)

| Producto | Formato | Precio | Garantía | Estado |
|---|---|---|---|---|
| Menú armado de 28 días + listas de compras (en Hotmart "Menú Acelerador") | eBook PDF, 11 páginas | US$ 4,90 | 7 días | Vigente como order bump. Base del Meal & Shopping Kit |
| Kit Antiexcusas | eBook PDF | US$ 3 | 7 días | A producir |
| Meal & Shopping Kit | eBook PDF | US$ 5 | 7 días | A producir desde el menú |

**Cómo activar un order bump:** Herramientas → Apariencia de la página de pago → elegir el producto → Editar → agregar componente Order Bump → seleccionar el producto → pegar título y descripción → guardar y publicar → probar con compra de prueba. Hotmart admite hasta 9 por checkout (ayuda oficial; confirmar en la cuenta).

**Textos de bump existentes (menú):**
- Título: Sí, sumá el Menú armado de 28 días por US$ 4,90
- Descripción: Cada día resuelto: desayuno, almuerzo, merienda y cena con las recetas del reto, más la lista de compras de cada semana. Abrís, comprás y cocinás. Pago único.

**Textos propuestos (a probar; encuadre "completá tu reto"):**
- Kit Antiexcusas: "Sí, sumá el Kit Antiexcusas por US$ 3" · Para los días sin tiempo ni ganas: plan B, rutina exprés de 5 a 10 minutos y protocolo para volver si faltaste. Extra opcional.
- Meal & Shopping Kit: "Sí, sumá el Kit de comidas y compras por US$ 5" · Menú de 7 días, lista de compras, recetas, porciones y sustituciones. Extra opcional.

## Emails para compradoras (7)

Disparador: compra aprobada. Firma: Equipo Reto Cintura 28.

| # | Cuándo | Asunto | Idea y cuerpo resumido |
|---|---|---|---|
| 1 | Inmediato | Tu Reto Cintura 28 ya está listo | Abrí tu app `{URL_APP}`, guardala en la pantalla de inicio y hacé el Día 0 (medís tu cintura, test de 3 minutos, elegís tu nivel; ~15 min). La guía en PDF está en la app, en Descargas. PD: tu progreso se guarda en el celular y navegador donde abras la app: usá siempre el mismo |
| 2 | Día 1 | Hoy es tu Día 1 | Abrí la app, entrá a Hoy y tocá Empezar: el timer te guía. Si hace mucho que no entrenás, nivel 1 sin culpa. Para comer, el método del plato. ¿Día complicado? Plan B de 8 minutos |
| 3 | Día 3 | El día 3 es el más traicionero | Pasó la emoción y todavía no ves cambios: es normal. Regla: nunca dos veces seguidas. Si hoy no da, plan B. No hace falta que sea perfecto, hace falta que no se corte |
| 4 | Día 7 | Una semana. Mirá lo que ya hiciste | Cumpliste la parte más difícil: arrancar. En la semana 2 sube un poco el trabajo. Mirá tu progreso y cómo te queda el jean |
| 5 | Día 14 | Mitad del reto: hoy medís | Cinta, a la misma hora y condiciones que el Día 0; anotala en Progreso. Si el número se movió poco, mirá ropa y energía. Se viene la semana 3, preparada distinta: más ritmo y un remate al final de cada entreno |
| 6 | Día 29 | Día 29: la medición final | Repetís medición de cintura y test de 3 minutos con la misma variante del Día 0 y comparás. Mañana, Día 30, plan para sostenerlo. **Si el reto te sirvió, respondé este email: con tu permiso, tu experiencia puede ayudar a otras mujeres** |
| 7 | Día 35 | Te graduaste. Y esto recién empieza | Comparás Día 0, 14 y 29; te queda tu rutina con timer. Tres cosas: elegí 3 días fijos de la semana, protocolo de regreso (nunca dos días seguidos en blanco), volvé a medirte en 4 semanas. Pedido de reseña en Hotmart y de reenviar a una amiga |

Los textos completos están en el PDF del centro de mando (pestaña Emails).

## Compra de prueba

- [ ] Checkout → gracias → email de Hotmart → app y PDF
- [ ] Venta visible en Utmify
- [ ] Evento de compra en el píxel
- [ ] Reembolso de prueba solicitado
