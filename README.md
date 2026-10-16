# Low Ticket OS

Sistema para crear, vender y escalar **infoproductos low ticket con tráfico pago** (Meta Ads → página → Hotmart).

Una carpeta por producto, un método compartido que mejora con cada uno.

## Estructura

```
AGENTS.md            Manual para agentes: leer primero
docs/                Visión, principios, aprendizajes
playbook/            El método, paso a paso, con criterios de salida
compliance/          Políticas de Meta y Hotmart, checklist de riesgos
templates/producto/  Plantilla para arrancar un producto nuevo
products/            Un producto por carpeta, con toda su información
metrics/             Registro de experimentos entre productos
tools/               Calculadora de márgenes y CPA, sincronizador de skills
conocimiento/        Base verificada de copy, oferta, tráfico y orgánico (con fuentes y confianza)
skills/              Skills para agentes (Claude, Hermes): copy, oferta, tráfico, orgánico, edición, ingesta
hermes/              Equipo de 7 agentes: perfiles, flujos y aprobaciones
```

## Productos

| Producto | Nicho | Estado | Carpeta |
|---|---|---|---|
| Reto Cintura 28 | Fitness en casa, mujeres 25-50, LATAM | Pre-lanzamiento (oferta y página en rediseño) | [products/reto-cintura-28](products/reto-cintura-28/README.md) |

## Empezar

- **Agente nuevo:** leé [AGENTS.md](AGENTS.md).
- **Producto nuevo:** copiá `templates/producto/` a `products/<nombre>/` y seguí [playbook/00-flujo-completo.md](playbook/00-flujo-completo.md).
- **Calcular márgenes:** `node tools/unit-economics.mjs --help`.
- **Transcripción o curso nuevo:** skill `ingesta-transcripciones` (prompt para Google AI Studio en `conocimiento/criterio/protocolo-de-ingesta.md`).
- **Agentes en Hermes:** [hermes/README.md](hermes/README.md). Después de tocar `conocimiento/`: `npm run skills:sync`.

## Principio central

Vender bien es ofrecer algo útil, claro y honesto. Todo lo que mejora la conversión sin engañar entra al método. Todo lo que depende de engañar o de explotar inseguridades queda afuera: además de incorrecto, termina en cuentas cerradas y reembolsos.
