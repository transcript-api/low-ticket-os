# 07 · Hotmart y checkout

**Objetivo:** que pagar y recibir funcione sin fricción y que todo quede medido.

## Pasos

1. **Crear el producto principal.** Formato eBook, categoría, idioma, precio en USD (Hotmart muestra moneda local), garantía, página de ventas (tu dominio), página de agradecimiento privada, archivos.
2. **Área de miembros** con módulo "Empezá acá": acceso a la app, guía y hojas. La entrega no depende solo de la página de gracias.
3. **Crear los productos de los extras** (cada uno es un producto separado con su archivo y su garantía).
4. **Order bumps:** Herramientas → Apariencia de la página de pago → editar → agregar componente Order Bump → elegir el producto → título y descripción → guardar y publicar. Hotmart admite hasta 9 por checkout (ayuda oficial; confirmar en la cuenta).
5. **Conectar el link de pago** (empieza con `pay.hotmart.com`) en `landing-config.json` y volver a publicar.
6. **Píxel de Meta** en la página y en el checkout.
7. **Utmify:** cuenta, integración con Hotmart (webhook), cuenta publicitaria conectada.
8. **Emails:** conectar Hotmart con la herramienta de email y cargar la secuencia (disparador: compra aprobada).
9. **Compra de prueba:** checkout → gracias → email de Hotmart → acceso a app y PDF. Verificar la venta en Utmify y el evento en el píxel. Pedir el reembolso.

## Textos del extra en el checkout

Fórmula: **"Sí, sumá [nombre del extra] por US$ X"** + una línea de qué resuelve + cierre de acción.

Ejemplo:
> Sí, sumá el Menú armado de 28 días por US$ 4,90. Cada día resuelto: desayuno, almuerzo, merienda y cena con las recetas del reto, más la lista de compras. Abrís, comprás y cocinás. Pago único.

Se prueba el enfoque "completá tu reto" contra el enfoque "agregá este producto".

## Recuperación de carritos

Hotmart muestra quién empezó el pago y no terminó. En las primeras 24 horas: email o mensaje con un cupón **real** (ej. 20 %) que vence en 48 horas. Recupera ventas que ya pagaste en anuncios.

## Cuidados

- Descripciones iguales al entregable. Aviso de salud.
- Precio y extras idénticos en página y checkout.
- La app abre con link sin usuario: considerarlo y, si se comparte mucho, pasar la entrega al área de miembros.

## Entregable: `08-hotmart-y-emails.md`

Configuración final, links, textos del checkout, emails y resultados de la compra de prueba.

## Criterio de salida

Compra de prueba completa, venta visible en Utmify y evento de compra en el píxel, reembolso de prueba solicitado.
