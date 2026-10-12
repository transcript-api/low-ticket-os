# AGENTS.md — Manual de operación para agentes

Leé este archivo completo antes de hacer cualquier cosa. Si sos un agente nuevo en otra PC o sesión, acá está todo lo que necesitás para retomar sin preguntar lo obvio.

## 1. Para qué existe este repo

Es el sistema operativo de una operación de **infoproductos low ticket vendidos con tráfico pago** (Meta Ads → página → Hotmart). Cada producto vive en su propia carpeta dentro de `products/`. El repo guarda tres cosas:

1. **El método** (`playbook/`, `compliance/`, `docs/`): cómo se crea, ofrece, publica, mide y escala un producto. Se mejora con cada producto.
2. **Las operaciones** (`products/<producto>/`): toda la información de cada producto: promesa, oferta, página, creativos, anuncios, métricas, decisiones.
3. **La memoria** (`metrics/`, `products/*/10-decisiones.md`, `docs/aprendizajes.md`): qué se probó, qué funcionó, qué no, y por qué.

El objetivo: que cualquier agente pueda **crear un producto nuevo más rápido, con menos errores y con mejores ofertas que el anterior**, y que pueda **escalar uno existente** sin redescubrir lo que ya se sabe.

## 2. Dueño y forma de trabajo

- Dueño: **Santiago** (Rivera, Uruguay). Habla español rioplatense con voseo. Quiere respuestas directas, sin relleno.
- Escribí todo en español rioplatense con voseo. Frases cortas. Cero relleno.
- **Primero planificar, después ejecutar.** Para cualquier trabajo grande, proponé el plan y esperá el OK antes de construir.
- Antes de acciones externas (publicar, gastar, crear cuentas, mandar mensajes), confirmá.
- Si el chat de Santiago contradice un documento del repo, **manda lo más nuevo**, pero registralo en `10-decisiones.md` del producto.
- Tu opinión importa: si algo no cierra, decilo con argumentos. No obedezcas ciegamente ideas flojas ni riesgosas. Ver `docs/01-principios.md`.

## 3. Cómo navegar el repo

| Necesitás… | Andá a… |
|---|---|
| Entender el flujo completo | `playbook/00-flujo-completo.md` |
| Crear un producto nuevo | `playbook/01` → `playbook/10`, y copiá `templates/producto/` a `products/<nombre>/` |
| Calcular márgenes y CPA | `playbook/formulas.md` y `tools/unit-economics.mjs` |
| Saber qué NO se puede hacer | `docs/01-principios.md` y `compliance/` (incluye `afiliados.md`) |
| Retomar un producto existente | `products/<nombre>/README.md` (estado), luego `11-pendientes.md` y `10-decisiones.md` |
| Retomar en otra PC o sesión | `docs/retomar-en-casa.md` |
| Registrar un test | `metrics/experimentos.csv` y `products/<nombre>/09-metricas.md` |
| Ver qué se aprendió | `docs/aprendizajes.md` |

## 4. Reglas que no se rompen

Resumen. El detalle y el porqué están en `docs/01-principios.md`.

1. **Nada inventado.** Sin testimonios, reseñas, cifras de clientas, contadores, escasez ni "antes y después" falsos. Prueba social solo real y con permiso por escrito.
2. **Nada que explote la inseguridad del cuerpo.** El enemigo es el plan imposible, no la persona. Prohibido insinuar algo de quien mira (edad, peso, salud, relaciones).
3. **Promesa medible y honesta.** Procesos, centímetros, hábitos. Nunca kilos garantizados ni plazos irreales.
4. **Un cambio por test.** Sin variables mezcladas, el resultado no enseña nada.
5. **Los números mandan, no la intuición.** Toda decisión de precio, oferta o escala sale de `playbook/formulas.md` con datos reales. Si no hay datos, se marca como **hipótesis**.
6. **Lo que ya funcionó se documenta; lo que falló también.** Un test sin registrar no existió.
7. **La página dice lo mismo que el anuncio.** Si no, Meta lo rechaza y la persona se va.
8. **Mundo real: la página vende, no documenta la app.** Cada bloque tiene que responder "¿por qué compro?". Prohibido poner detalles internos que suenan a tarea, relleno o curiosidad (ej. "Para la cabeza: buscá compañía", "Misión del día: contale a una persona que hacés el reto"). Prohibido repetir la misma idea en varias secciones (si ya lo dice el precio, el quiz o el pie, no va en otra tarjeta). Antes de agregar o dejar un bloque, preguntate si una compradora real lo extrañaría; si no, se borra. Se vende "guía" y "app", nunca "PDF" (suena a archivo suelto y baja el valor percibido). Aviso de salud: va una vez, en el pie y en el resultado del quiz.

### Al incorporar material nuevo (documentos, estrategias, creativos)

Santiago pasa material de varias sesiones y versiones. **No se sigue al 100 %.** Antes de incorporarlo: (a) compará con la versión anterior y buscá qué cambió, (b) verificá que sigan las reglas del punto 4 (las versiones regeneradas pueden perderlas), (c) buscá datos desfasados (precio, cantidad de recetas, páginas), (d) registrá las diferencias en `10-decisiones.md` y `fuentes/README.md`.

## 5. Flujo de trabajo estándar

1. Leé el `README.md` del producto y su `11-pendientes.md`.
2. Elegí la tarea de mayor impacto. Si hay un test activo, no lo contamines.
3. Proponé el plan (qué, por qué, cómo se mide). Esperá OK si es algo grande o externo.
4. Ejecutá. Mantené los archivos del producto actualizados **en el mismo cambio**.
5. Registrá: decisión en `10-decisiones.md`, test en `metrics/experimentos.csv`, aprendizaje general en `docs/aprendizajes.md` si sirve para otros productos.
6. Actualizá `README.md` del producto (estado) y `11-pendientes.md`.
7. Commit con mensaje claro en español: `producto: qué cambió y por qué`.

## 6. Cómo crear un producto nuevo

1. Copiá `templates/producto/` a `products/<slug-del-producto>/`.
2. Seguí `playbook/01-investigar-nicho.md` → `10-post-compra.md` en orden. Cada paso tiene **criterio de salida**: no avances sin cumplirlo.
3. Completá cada archivo numerado. Si un archivo no aplica, escribí por qué.
4. Hacé el **análisis de riesgos** (`compliance/checklist-previa.md`) antes de producir creativos.
5. Antes de gastar en anuncios, compra de prueba completa y registrada.

## 7. Cómo actualizar con resultados

Cuando Santiago pase resultados (capturas, números de Utmify/Meta/Hotmart):

1. Pasá los datos a `products/<producto>/09-metricas.md` (tabla por fecha, oferta y creativo).
2. Calculá con `node tools/unit-economics.mjs` si cambian precio u oferta.
3. Aplicá las reglas de corte y escala de `playbook/08-meta-ads.md` y decidí.
4. Anotá la decisión y el porqué en `10-decisiones.md`.
5. Si el aprendizaje sirve más allá de este producto, sumalo a `docs/aprendizajes.md` y, si cambia el método, editá el `playbook/`.

## 8. Calidad: definición de "terminado"

Una tarea está terminada cuando: (a) cumple las reglas del punto 4, (b) está registrada en los archivos correspondientes, (c) otro agente podría retomarla leyendo solo el repo, (d) los números tienen origen (dato real o hipótesis marcada).

## 9. Mejora continua del repo

Este repo tiene que mejorar solo con el uso. Si encontrás un error repetido, un paso que sobra o una regla que falta: corregí el `playbook/` o este archivo y dejalo anotado en `docs/aprendizajes.md`. No dejes la mejora solo en tu cabeza.

## 10. Bitácora y memoria (obligatorio)

Santiago trabaja desde varias PC y quiere que cada agente nuevo sienta que estuvo en todas las sesiones anteriores. Por eso:

1. **Al terminar cada tramo de trabajo, escribí una entrada en `docs/bitacora.md`** (hecho, decisiones, desacuerdos, tu opinión, qué falta) y actualizá `10-decisiones.md` y `11-pendientes.md` del producto.
2. Registrá también tus opiniones y advertencias, y si Santiago decidió algo distinto, dejalo anotado con su motivo. Así no se repite la discusión.
3. **Subí los cambios a GitHub** al cerrar cada tramo (commit + push), para retomar desde otra PC.
4. **Siempre proponé una mejora**: cada vez que termines algo, anotá qué se puede mejorar y por qué.
5. Toda página de ventas cumple el estándar de `playbook/05-pagina.md` (sección "Estándar de toda página"): Clarity, píxel, Utmify, urgencia solo real.

## 11. Herramientas externas del dueño

Hotmart (venta y entrega), Meta Ads (tráfico), Utmify (medición), Microsoft Clarity (mapas de calor y grabaciones), Vercel (hosting actual de la página; Cloudflare Pages también sirve), Higgsfield (imágenes y video IA), Miro (tableros de estrategia). Tableros de Miro de cada producto se enlazan en el `README.md` del producto.
