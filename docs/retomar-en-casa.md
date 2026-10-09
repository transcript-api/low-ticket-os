# Retomar en otra PC

## 1. Traer el repo

```bash
git clone https://github.com/<tu-usuario>/low-ticket-os.git
cd low-ticket-os
node --test tools/unit-economics.test.mjs   # opcional: verifica la calculadora (requiere Node 18+)
```

## 2. Abrirlo con un agente

Abrí la carpeta con Claude Code (u otro agente) y empezá la sesión con:

> Leé AGENTS.md y products/reto-cintura-28/README.md. Retomá desde 11-pendientes.md.

El agente tiene que saber, sin que se lo expliques de nuevo:
- Qué es el sistema y cómo trabaja Santiago (`AGENTS.md`).
- En qué fase está Reto Cintura 28 y qué falta (`products/reto-cintura-28/README.md`, `11-pendientes.md`).
- Qué se decidió y qué se descartó, con motivo (`10-decisiones.md`).
- Por qué no se hacen ciertas cosas (`docs/01-principios.md`).

## 2a. Dónde paramos

Leé `products/reto-cintura-28/INFORME.md`, sección "Dónde paramos". En una línea: la página v3 está online y medida con Clarity; falta el descuento real (Hotmart + fecha), semanas 6 y 7, píxel de Meta, Utmify, correcciones del checkout y prueba social.

## 2b. Leer primero

1. `AGENTS.md` (reglas y bitácora obligatoria).
2. `docs/bitacora.md` (recorrido completo, desacuerdos y opiniones).
3. `products/reto-cintura-28/11-pendientes.md`.

Página publicada: https://reto-cintura-28.vercel.app. Para republicar: `cd products/reto-cintura-28/pagina && vercel deploy --prod --yes` (requiere `npm i -g vercel` y `vercel login`).

## 3. Pendiente que más destraba (quedó viejo: ver 11-pendientes.md)

1. Decidir el precio de arranque (9,90 o 14,90): `products/reto-cintura-28/02-oferta.md`.
2. Aprobar el plan de página y las 2 direcciones visuales: `04-pagina.md`.
3. Con el OK, el agente rehace la página y produce los kits.

## 4. Tableros de Miro

- Mapa de flujo (versión vigente): https://miro.com/app/board/uXjVEd4QLlE=/
- Primera versión, vertical: https://miro.com/app/board/uXjVEd4QDE0=/

## 5. Archivos que no están en el repo

PDF, ZIP e imágenes viven en la PC de Santiago. Lista y contenido en `products/reto-cintura-28/fuentes/README.md`. Si hace falta alguno (por ejemplo `landing-config.json` o `textos-anuncios.csv`), pedirlo.

## 6. Cuando pasen resultados

Seguir `AGENTS.md`, sección 7: cargar a `09-metricas.md`, calcular con `node tools/unit-economics.mjs`, aplicar reglas de corte, registrar decisión.
