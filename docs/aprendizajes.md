# Aprendizajes

Lo que se aprendió y sirve para **cualquier** producto. Agregá arriba lo más nuevo. Formato: fecha, aprendizaje, origen, qué cambió en el método.

Los aprendizajes de un solo producto van en su `10-decisiones.md`, no acá.

## Plantilla

```
### AAAA-MM-DD — Título corto
- Qué pasó:
- Evidencia: (dato, test o fuente)
- Aprendizaje:
- Cambio en el método: (archivo del playbook que se actualizó)
```

## Registro

### 2026-10-08 — Un cambio de precio desfasa creativos, página, reglas y emails
- Qué pasó: Reto Cintura 28 pasó de US$ 9,90 a US$ 15,90 y quedaron con el precio viejo tres creativos (dos con el precio dentro de la imagen), la configuración de la página, el centro de mando y las reglas de corte.
- Evidencia: revisión del 2026-10-08 sobre el CSV de creativos, `landing-config.json` y los PDF.
- Aprendizaje: el precio aparece en muchos lugares y un anuncio con precio distinto al de la página viola la regla de coherencia de Meta. Además, **todas las reglas de corte dependen del CPA de equilibrio de la oferta vigente**.
- Cambio en el método: `playbook/03-oferta.md` (checklist de sincronización de precio) y `compliance/checklist-previa.md`. Preferir creativos sin precio dentro de la imagen.

### 2026-10-08 — Las versiones de un documento pueden perder las reglas de honestidad
- Qué pasó: una versión nueva del centro de mando eliminó de los guiones de video las reglas "sin antes/después, sin testimonios, personaje no clienta".
- Aprendizaje: las reglas no deben vivir solo en los documentos de trabajo, que se regeneran. Viven en el repo y se verifican contra cada documento nuevo.
- Cambio en el método: `AGENTS.md` (verificar reglas al incorporar material) y `docs/01-principios.md`.

### 2026-10-08 — El nombre de un extra no puede prometer más que su contenido
- Qué pasó: un menú de 28 días se llamó "Acelerador".
- Aprendizaje: "acelerador", "rápido" o "express" prometen velocidad de resultados. Si el contenido no la entrega, aumenta reembolsos y riesgo de políticas.
- Cambio en el método: `playbook/03-oferta.md`, sección de extras.

### 2026-10-08 — Abrir afiliados exige reglas escritas antes, no después
- Qué pasó: se definió 37 % de comisión de afiliados.
- Aprendizaje: el afiliado paga su propio tráfico y habla con sus palabras. Sin reglas y kit aprobados, una promesa falsa de un afiliado daña al producto.
- Cambio en el método: nuevo `compliance/afiliados.md` y `playbook/09-medicion-y-escala.md` (fase de afiliados).

### 2026-10-06 — La página vende el sistema, no la cantidad de contenido
- Qué pasó: en el chat de estrategia de Reto Cintura 28 se vio que una guía de 128 páginas funciona como argumento de valor para el producto, pero en low ticket asusta ("¿tengo que leer todo eso?") y no es la oferta.
- Evidencia: conversación entre Santiago y su socio; sin datos de test todavía.
- Aprendizaje: en low ticket se vende la transformación y la facilidad de empezar. La cantidad de contenido va como detalle, no como argumento principal.
- Cambio en el método: `playbook/03-oferta.md` y `playbook/05-pagina.md` (la oferta se explica en una pantalla; el contenido se muestra por dentro, no se enumera).

### 2026-10-06 — Los order bumps deben resolver una fricción concreta
- Qué pasó: se definieron dos extras de checkout (US$ 3 y US$ 5) como respuesta a las dos razones de abandono: "no sé qué comer" y "voy a abandonar".
- Evidencia: conversación; sin datos de test todavía. Hotmart admite hasta 9 order bumps por checkout (ayuda oficial).
- Aprendizaje: un extra se vende solo si ataca una fricción que la compradora ya siente, y se presenta como "completá tu reto", no como "otro producto".
- Cambio en el método: `playbook/03-oferta.md`, sección order bumps.

### 2026-10-06 — Un quiz no va al principio de la página
- Qué pasó: se propuso que la página arranque con un quiz. El socio planteó que primero hay que vender la idea del resultado y después usar el quiz para personalizar.
- Evidencia: conversación; sin test todavía.
- Aprendizaje: el orden recomendado es hero, 2 o 3 beneficios, quiz corto, resultado personalizado, oferta. Se testea contra la página sin quiz.
- Cambio en el método: `playbook/05-pagina.md`, sección quiz.

### 2026-10-09 — Un contador del checkout que vence sin consecuencias es urgencia falsa
- Qué pasó: el checkout de Reto Cintura 28 tiene un contador "última oportunidad, tu precio de lanzamiento está reservado". Al llegar a cero muestra "el tiempo de tu precio de lanzamiento finalizó", pero el cupón sigue aplicado y el precio no cambia.
- Aprendizaje: un temporizador por visitante que no cambia nada es el patrón de urgencia falsa que el método prohíbe. Si hay urgencia, debe corresponder a un fin real (fecha o tope de usos del cupón).
- Cambio en el método: `compliance/precios-y-descuentos.md` (antes de publicar un descuento) y `docs/01-principios.md`.
