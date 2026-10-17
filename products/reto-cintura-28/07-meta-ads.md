# 07 · Meta Ads

Método general: `playbook/08-meta-ads.md`. Acá, los números de este producto.

## Preparación vigente 2026-10-17

Cinco borradores en campaña CBO desactivada, sin gasto: [estado, IDs y textos](16-borradores-meta-2026-10-17.md). El checkout actual no tiene bump. Cálculo con precio US$15,90 sin bump: CPA equilibrio US$13,23, objetivo US$8,60 y corte sin ventas US$19,85. Comisión/reserva son supuestos (9,9% + US$0,10;7%), no tasas verificadas del producto. La tabla siguiente conserva escenarios históricos. No activar mientras esta cuenta siga apuntando al píxel viejo.

## Números por oferta (de [02-oferta.md](02-oferta.md))

| Oferta | CPA equilibrio | CPA objetivo (escalar) | Apagar sin ventas desde |
|---|---|---|---|
| **VIGENTE: 15,90 sin bump (tasas supuestas)** | **US$ 13,23** | **US$ 8,60** | **US$ 19,85** |
| Anterior: 15,90 + Menú Acelerador 4,90 (25 %) | US$ 14,26 | US$ 9,27 | US$ 21,38 |
| A: 9,90 + menú 4,90 | US$ 9,23 | US$ 6,00 | US$ 13,84 (el centro de mando usa 13,50) |
| B: 15 + 3 + 5 | US$ 14,40 | US$ 9,36 | US$ 21,60 |
| C1: 14,90 + 3 + 5 | US$ 14,32 | US$ 9,31 | US$ 21,48 |
| C2: 9,90 + 3 + 5 | US$ 10,13 | US$ 6,58 | US$ 15,19 |

**Los umbrales se toman de la oferta que está corriendo.** No se mezclan los de A con los de B.

## Antes de gastar

- [ ] Portafolio comercial con página de Facebook e Instagram
- [ ] Cuenta publicitaria en USD con medio de pago
- [ ] Píxel creado y cargado en la página y en Hotmart
- [ ] Utmify conectado a Hotmart y a la cuenta publicitaria
- [ ] Compra de prueba hecha y registrada
- [ ] `compliance/checklist-previa.md` completo

## Estructura de test

| Nivel | Nombre | Configuración |
|---|---|---|
| Campaña | `R28 | TESTEO | VENTAS` | Objetivo Ventas. Presupuesto por conjunto |
| Conjunto A | `AMPLIO LATAM | Lote 1a` | US$ 10/día. Evento Compra. México, Colombia, Chile, Perú, Ecuador, Costa Rica, Panamá, República Dominicana, Guatemala. Mujeres 25-55. Ubicaciones Advantage+. Anuncios C03, C11, C17 |
| Conjunto B | `AMPLIO LATAM | Lote 1b` | Igual que A. Anuncios C04, C09, C15 |
| Conjunto C (opcional) | `RIOPLATENSE | Mate` | US$ 5/día. Uruguay, Argentina, Paraguay. Anuncios C23, C03, C17. Medir aparte: en Argentina pagar en dólares tiene recargos |
| Retargeting | `RT | Visitó y no compró` | US$ 3-5/día desde ~1.000 visitas. Visitantes de 7 días, excluir compradoras. C28, C29, C14, C13, C18, C21 |

Presupuesto de test: US$ 20 a 25 por día durante 5 a 7 días.

## Reglas de corte y escala

1. 72 horas sin tocar nada, salvo la regla 2.
2. Apagar el anuncio que gastó 1,5 × CPA de equilibrio sin ventas.
3. CTR de enlace bajo 0,8 % con más de 2.000 impresiones: apagar o cambiar gancho.
4. CPA igual o menor al de equilibrio: dejar correr.
5. CPA igual o menor al objetivo con 3 ventas o más: escalar +20 % cada 48 h, o duplicar en campaña `R28 | ESCALA`.
6. Frecuencia mayor a 3 en 7 días: entra el lote siguiente.
7. Cada semana, 3 creativos nuevos con el ángulo ganador.

## UTM por anuncio

```
utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}
```

## Si Meta restringe Compra

Optimizar por Vista de página de destino, medir ventas con Utmify, dominio propio con direcciones neutras, sin datos de salud en eventos. El quiz **no** manda respuestas al píxel.

## Voseo o "tú"

El reto habla con voseo. En México y Colombia probar el mismo creativo con el texto principal en "tú" y comparar CPA.

## Bitácora de campaña

| Fecha | Acción | Dato | Regla aplicada |
|---|---|---|---|
| | (sin gasto todavía) | | |

## Parámetros de URL para los anuncios (Utmify, 2026-10-17)

Pegar este texto en el campo **Parámetros de URL** de cada anuncio de Meta (sección "Seguimiento"). Es la plantilla que da Utmify para Hotmart; sin ella Utmify no puede asignar cada venta a su anuncio.

```
utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}&xcod=FBhQwK21wXxR{{campaign.name}}|{{campaign.id}}hQwK21wXxR{{adset.name}}|{{adset.id}}hQwK21wXxR{{ad.name}}|{{ad.id}}hQwK21wXxR{{placement}}
```

- La página ya carga el script de UTMs de Utmify y lo agrega al botón de compra (verificado en el sitio publicado).
- El anuncio apunta a la página (no directo a Hotmart). El destino es `https://reto-cintura-28.pages.dev` (o el dominio propio).
