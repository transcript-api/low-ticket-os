# Principios no negociables

Estas reglas ganan sobre cualquier idea, urgencia o consejo. Vienen de dos fuentes: lo que Meta y Hotmart sancionan, y lo que destruye una operación a mediano plazo (reembolsos, chargebacks, cuentas cerradas, marca quemada).

## 1. Honestidad comercial

- Sin testimonios, reseñas, cifras de clientas ni contadores inventados.
- Sin "antes y después" ni videos de "clientas" generados o actuados. Las personas de IA son personajes que presentan el producto, nunca clientas.
- Prueba social solo si es **real y con permiso por escrito**. Cómo conseguirla: ver `playbook/10-post-compra.md`.
- Urgencia y escasez solo con fechas o cupos que se cumplen de verdad.
- El entregable tiene que valer lo que se promete. Un producto flojo con buena página se paga en reembolsos y chargebacks.

**Por qué:** es ilegal o sancionable en la mayoría de los países de LATAM (publicidad engañosa), Hotmart suspende productos con promesas falsas, y Meta cierra cuentas. Además el primer reembolso masivo borra el margen del test.

> Caso real del repo: en el chat de arranque aparecieron "ponemos hasta mentiras ahí", "videos de antes y después de clientas" y "el entregable puede ser basura igual". Se registraron y se descartaron. Ver `products/reto-cintura-28/10-decisiones.md`.

## 2. Salud y cuerpo

- La promesa es **proceso medible**: centímetros, ropa, fuerza, hábitos. Nunca kilos garantizados, nunca "eliminar la panza".
- Prohibido afirmar o insinuar algo de quien mira: edad, peso, salud, estado civil, relaciones. Texto en tercera persona.
- **El enemigo es el plan imposible, no la persona.** Nada que culpe o avergüence al cuerpo.
- No usar la inseguridad corporal como motor ("que vuelva tu ex", "que te miren"). Es manipulación y choca con las políticas de Meta sobre imagen corporal y atributos personales.
- Aviso de salud visible en página, guía y app. Programa para adultas sanas; no reemplaza consulta médica.

## 3. Datos y privacidad

- No mandar respuestas de quiz, medidas ni datos de salud al píxel de Meta ni a ninguna herramienta de anuncios.
- Eventos del píxel solo de navegación y compra (PageView, ViewContent, InitiateCheckout, Purchase).
- Sin datos de menores. Solo mayores de 18.

## 4. Método

- **Una variable por test.** Si cambiás precio y página a la vez, no sabés cuál movió el resultado.
- **Números con origen.** Dato real o hipótesis marcada. Nunca "creo que convierte 3 %" como si fuera un hecho.
- **Registro obligatorio.** Todo test se anota en `metrics/experimentos.csv` y en el producto.
- **Plan antes que ejecución** en trabajo grande. Confirmación antes de gastar o publicar.

## 5. Marca y originalidad

- Nada copiado de otros negocios, ni textos, ni fotos, ni marcas ajenas en imágenes o videos.
- Un solo acento de color por marca; coherencia entre anuncio, página y producto.

## 6. Cuando una idea choca con estas reglas

No se ejecuta ni se esconde: se registra con el motivo en `10-decisiones.md` del producto, y se propone la alternativa honesta que persigue el mismo objetivo (más confianza, más conversión, más ticket). Casi siempre existe.

| Idea que aparece | Alternativa honesta |
|---|---|
| Antes/después de clientas | Mostrar el producto por dentro (capturas reales), demostraciones, y testimonios reales con permiso cuando existan |
| "Mentiras" para sostener la oferta | Oferta más clara, garantía real, bonus útiles |
| Apelar al ex / inseguridad | Apelar al tiempo, al cansancio de los planes imposibles, a sentirse cómoda con su ropa |
| Escasez falsa | Precio de lanzamiento con fecha real que se cumple |
| Quiz con frases que sirven para cualquiera | Quiz cuyo resultado depende de lo que respondió |
