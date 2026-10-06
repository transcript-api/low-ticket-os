# Hotmart: reglas operativas

Verificá siempre en tu cuenta: las condiciones cambian.

## Datos que se usan en las cuentas (confirmar en cuenta)

- Comisión de referencia usada en los cálculos: **9,9 % + US$ 0,10 por transacción** (productos de hasta US$ 15, tarifas publicadas en 2026). El repo la usa como parámetro en `tools/unit-economics.mjs`.
- Garantía: se puede elegir 7, 15, 21 o 30 días. El reembolso se gestiona dentro de Hotmart.
- **Order bumps:** según la ayuda oficial de Hotmart, hasta 9 por checkout. Confirmarlo en la cuenta antes de armar la oferta.

## Estructura de un producto

- Producto principal: formato eBook (o curso) con el PDF y los archivos descargables.
- Área de miembros: módulo "Empezá acá" con acceso a la app, la guía y las hojas, para que la entrega no dependa solo de la página de gracias.
- Página de agradecimiento: URL privada, sin indexar, sin enlazar desde la página de venta.
- Order bumps: productos separados (ej. kit de comidas, kit antiexcusas) activados en "Apariencia de la página de pago".

## Qué evita problemas

- Promesas y descripciones iguales a lo que se entrega.
- Aviso de salud en la descripción.
- Sin testimonios inventados en la página de producto.
- Compra de prueba antes de gastar en anuncios: checkout → gracias → email → acceso → reembolso de prueba.

## Datos para el día a día

- Utmify se integra por webhook de Hotmart para cruzar ventas con anuncios.
- Cargar el mismo píxel de Meta en el checkout para registrar la compra.
- Carritos abandonados: Hotmart muestra quién empezó el pago; recuperar en las primeras 24 horas con un cupón real que vence.
