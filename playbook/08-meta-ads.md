# 08 · Meta Ads: testeo, corte y escala

**Objetivo:** encontrar creativos y ofertas rentables con poco presupuesto y escalar solo lo que cierra.

**Skill:** `skills/trafico-meta-low-ticket` tiene el procedimiento completo (umbrales, diagnóstico por capa, corte, escala, puja, contingencia) y su base en `conocimiento/oferta-trafico/meta-ads-operacion.md`.

## Antes de gastar

- Portafolio comercial con página de Facebook e Instagram.
- Cuenta publicitaria en USD con medio de pago.
- Píxel creado y cargado en la página y en Hotmart.
- Utmify conectado a Hotmart y a la cuenta publicitaria.
- Compra de prueba hecha y registrada. Checklist: `compliance/checklist-previa.md`.

## Estructura de test (referencia)

| Nivel | Nombre | Configuración |
|---|---|---|
| Campaña | `R28 | TESTEO | VENTAS` | Objetivo Ventas. Presupuesto **por conjunto** |
| Conjunto A | Amplio LATAM · Lote 1a | US$ 10/día. Evento Compra. Países de LATAM, mujeres 25-55 (o el público del producto), ubicaciones Advantage+. 4 a 5 conceptos distintos |
| Conjunto B | Amplio LATAM · Lote 1b | Igual que A con otros 4 a 5 conceptos |
| Conjunto C (opcional) | Rioplatense | US$ 5/día. UY, AR, PY. Medir aparte: en Argentina pagar en dólares tiene recargos |
| Retargeting | Visitó y no compró | US$ 3-5/día desde ~1.000 visitas. Visitantes de 7 días, excluir compradoras |

Presupuesto de test: US$ 20 a 25 por día durante 5 a 7 días. Escala solo con CPA por debajo del objetivo.

## Reglas de corte y escala

Los umbrales se **recalculan por oferta** con `playbook/formulas.md`. Los valores entre paréntesis son los de la oferta A de Reto Cintura 28.

0. **Antes de apagar o cambiar, diagnóstico por capa:** hook rate (vistas de 3 s ÷ impresiones; alarma < 30 % con > 2.000 impresiones) → gancho; hold rate (vistas de 15 s ÷ vistas de 3 s; alarma < 20 %) → cuerpo; CTR de enlace → transición y CTA; IC ÷ vistas de página → página; compras ÷ IC → checkout (IC alto sin compras no es culpa del anuncio). Las alarmas son hipótesis hasta tener medianas propias.
1. **Primeras 72 horas, no toques nada** (Meta está aprendiendo), salvo la regla 2. Para cambiar un anuncio, duplicalo: editarlo reinicia el aprendizaje.
2. **Apagá el anuncio que gastó 1,5 × CPA de equilibrio sin ventas** (recalcular con la oferta vigente; el US$ 13,50 era de la oferta A). Excepción: con 2 IC o más, estirá a 2 × y revisá compras rechazadas antes de apagar (EXP-007). Un anuncio que gastó menos de 0,5 × CPA de equilibrio en 7 días no fue evaluado.
3. **CTR de enlace bajo 0,8 % con más de 2.000 impresiones:** apagalo o cambiá el gancho.
4. **CPA igual o menor al de equilibrio:** dejalo correr.
5. **CPA igual o menor al objetivo con 3 ventas o más:** escalá +20-30 % cada 48 horas. Con CPA ≤ 0,75 × objetivo y 5 ventas o más: +50 % o duplicá el anuncio ganador en una campaña `ESCALA` con presupuesto de campaña. Nunca más de × 2 por cambio. No apagues por un mal día lo que tiene 3 ventas o más: se juzga por el CPA de 3 días.
6. **Frecuencia mayor a 3 en 7 días:** entra el lote siguiente.
7. **Cada semana,** un lote de 6 a 10: mitad ejecuciones nuevas del concepto ganador, mitad conceptos nuevos.
8. **Puja:** cost cap solo en escala, arrancando en el CPA de equilibrio. Bid cap "al precio del front" solo vale si el bruto medio por venta ÷ front ≥ ROAS objetivo.
9. **Cursos brasileños:** su "ROI" es ROAS (facturación ÷ gasto). Pasalo a CPA antes de comparar con estas reglas.

## Cuentas: contingencia legítima

Dominio verificado, portafolio en regla, medios de pago propios, dos administradores con verificación en dos pasos, revisión semanal de Calidad de la cuenta y apelación por el canal oficial. **Prohibido** (elusión de sistemas de Meta, arriesga perder todo): navegadores multilogin o antidetección, cuentas de agencia de repuesto, cuentas o portafolios nuevos para seguir anunciando después de una restricción.

## Parámetros UTM por anuncio

```
utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}
```

Es el formato de Utmify; si su panel muestra otro, usar ese. Va en "Parámetros de URL" del anuncio.

## Si Meta restringe Compra

Optimizar por Vista de página de destino y medir ventas con Utmify. Dominio propio con direcciones neutras. No mandar datos de salud en eventos.

## Voseo y "tú"

Si el producto habla con voseo, en México y Colombia probar el mismo creativo con el texto principal en "tú" y comparar el CPA.

## Registro

Cada decisión (apagar, escalar, cambiar) se anota en `10-decisiones.md` con fecha, dato y regla aplicada. Cada test, en `metrics/experimentos.csv`.

## Criterio de salida

Campaña de test activa, reglas escritas con los números de la oferta, y hoja de métricas lista.
