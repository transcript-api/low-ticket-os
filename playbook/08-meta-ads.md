# 08 · Meta Ads: testeo, corte y escala

**Objetivo:** encontrar creativos y ofertas rentables con poco presupuesto y escalar solo lo que cierra.

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
| Conjunto A | Amplio LATAM · Lote 1a | US$ 10/día. Evento Compra. Países de LATAM, mujeres 25-55 (o el público del producto), ubicaciones Advantage+. 3 anuncios |
| Conjunto B | Amplio LATAM · Lote 1b | Igual que A con otros 3 anuncios |
| Conjunto C (opcional) | Rioplatense | US$ 5/día. UY, AR, PY. Medir aparte: en Argentina pagar en dólares tiene recargos |
| Retargeting | Visitó y no compró | US$ 3-5/día desde ~1.000 visitas. Visitantes de 7 días, excluir compradoras |

Presupuesto de test: US$ 20 a 25 por día durante 5 a 7 días. Escala solo con CPA por debajo del objetivo.

## Reglas de corte y escala

Los umbrales se **recalculan por oferta** con `playbook/formulas.md`. Los valores entre paréntesis son los de la oferta A de Reto Cintura 28.

1. **Primeras 72 horas, no toques nada** (Meta está aprendiendo), salvo la regla 2.
2. **Apagá el anuncio que gastó 1,5 × CPA de equilibrio sin ventas** (US$ 13,50).
3. **CTR de enlace bajo 0,8 % con más de 2.000 impresiones:** apagalo o cambiá el gancho.
4. **CPA igual o menor al de equilibrio:** dejalo correr.
5. **CPA igual o menor al objetivo con 3 ventas o más:** escalá. +20 % de presupuesto cada 48 horas, o duplicá el anuncio ganador en una campaña `ESCALA` con presupuesto de campaña.
6. **Frecuencia mayor a 3 en 7 días:** entra el lote siguiente.
7. **Cada semana,** 3 creativos nuevos con el ángulo ganador.

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
