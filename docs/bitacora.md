# Bitácora de trabajo

Registro cronológico de lo que se hizo, se decidió y se opinó, **lo más nuevo arriba**. Un agente nuevo lo lee junto con `AGENTS.md` y siente que estuvo en las sesiones anteriores. **Regla: al terminar cada tramo de trabajo, agregá una entrada acá** (qué se hizo, qué se decidió, qué opinás, qué falta). Los detalles viven en cada producto (`10-decisiones.md`, `11-pendientes.md`).

## 2026-10-09 (cierre de la noche) · Feedback del socio, Miro al repo, dónde paramos

- Santiago pasó 8 capturas con la revisión del socio (7/10: mucha explicación, poco deseo y prueba). Se transcribió a `products/reto-cintura-28/fuentes/chat-santi-amigo-2.md` y se analizó en `12-mejoras-pagina.md`.
- Página publicada de nuevo: el quiz es el botón principal (hero, mitad y cierre) y queda "Ir directo al precio" como secundario; app en beneficios; "¿Es para vos?" restituida (error mío haberla sacado); menos repetición.
- Se leyeron los dos tableros de Miro y se organizó su contenido y banco de ideas en `docs/miro-ideas.md`. Aviso: sus cifras de equilibrio son de cuando el precio era US$ 9,90.
- Experimentos nuevos: EXP-004 (titular) y EXP-005 (quiz como CTA principal vs compra directa).
- **Pendiente que Santiago volvió a señalar:** que el descuento aparezca en la página. Sigue apagado a propósito; falta que Hotmart tenga precio base US$ 45,43, cupón 65 % y fin real, y cargar `launchEndsAt`. Es lo primero a resolver cuando vuelva.
- **Dónde paramos y qué sigue:** ver "Dónde paramos" en `products/reto-cintura-28/INFORME.md`.

## 2026-10-09 (noche) · Ajustes, Clarity activo, GitHub

- Clarity activo (ID en `landing-config.json`). Se sacó "Pago seguro con Hotmart" (Santiago: no genera confianza). Hero con la pregunta del socio: "¿Querés saber si el Reto Cintura 28 es para vos?" + botón "Hacer el test".
- **Semanas 5, 6 y 7 de regalo** nombradas en la página, con el mensaje de que la rutina se repite y se sube de nivel cuando quiera. **Las semanas 6 y 7 las agrega Santiago el 2026-10-10: no lanzar anuncios hasta que existan.**
- Santiago pidió borrar la fecha y dejar "tiempo limitado" con cronómetro. Se hizo la parte visual (sin fecha, "por tiempo limitado · quedan …") pero el cronómetro y el tachado **siguen apagados** hasta que haya un fin real del cupón (`launchEndsAt`). Claude mantiene la opinión de la entrada de abajo.
- Repo subido a GitHub privado: github.com/transcript-api/low-ticket-os.

## 2026-10-09 · Página v3 publicada, quiz, Clarity, precio, bonus

**Hecho**
- Se eliminó el film con scroll de 5 escenas (los usuarios se iban antes del primer argumento). Nueva **apertura de una pantalla** con titular, teléfono real de la app, botón al quiz y precio. Dos temas (noche / hueso), hoy `noche`.
- **Quiz de 6 preguntas** con resultado personalizado y botón directo al checkout (barra fija). Investigación en `docs/investigacion-quiz-funnels.md`.
- **Publicada en Vercel**: https://reto-cintura-28.vercel.app (cuenta de Santiago, proyecto `reto-cintura-28`). Código en `products/reto-cintura-28/pagina/` (incluye `assets/landing`).
- Se sacó todo "128 páginas" (asusta: es contenido, no transformación), se borró lo repetido (tabla "lo de siempre", "¿Es para vos?", "3 pasos") y la lista de lo que recibe quedó en 5 ítems. Los **bonus** (acompañamiento, Semana 5, Plan B, guías) pasaron a la tarjeta de precio, en letra chica con tilde.
- Botones directos al precio (header "Ver precio" y link en el hero "Ya lo quiero").
- Soporte para **Microsoft Clarity** (`clarityId` en `landing-config.json`; el quiz va enmascarado) y eventos de píxel sin datos personales: QuizStart, QuizComplete, Scroll50, Scroll90, ViewContent, InitiateCheckout.
- Precio: **US$ 15,90 fijo.** Santiago decidió pasar de "84 % sobre US$ 99,38" a **"65 % sobre US$ 45,43"** (15,90 / 0,35 = 45,43). Cargado en `landing-config.json` (`listPrice`, `discountLabel`) pero **apagado hasta tener fecha real** (`launchEndsAt`).

**Decisiones y desacuerdos (para no repetir la discusión)**
- Santiago pidió un contador que "baje de a poco" aunque no sea el tiempo real, y cree que la urgencia falsa ayuda. **Opinión de Claude (se mantiene):** no se implementa un contador inventado; engaña a quien compra y puede frenar anuncios o cuenta en Meta. Lo que sí se hizo: la cuenta regresiva y el tachado funcionan **con una fecha real**: si se pone `launchEndsAt` (misma fecha en que termina el cupón en Hotmart y el precio vuelve a subir) aparece y baja segundo a segundo. Es el mismo efecto sin el riesgo. Santiago puede decidir otra cosa; si lo hace, registrarlo acá.
- El contador del checkout de Hotmart (por visitante, sin consecuencia al llegar a cero) tiene el mismo problema: se arregla atándolo a una fecha real o sacándolo. Pendiente de un "dale".
- Texto del order bump: Santiago quiere enfatizar "acelerá tus resultados con el menú". Claude advierte que "resultados más rápido" promete algo que el archivo no entrega. Alternativa sugerida: "Acelerá tu reto: sumá el Menú armado de 28 días y no pienses qué cocinar" (acelera la *organización*). Decide Santiago.
- Primero publicar y medir, después optimizar: la lista de "qué frena la conversión" se arma **con datos de Clarity y Meta**, no con opiniones.

**Opinión general de Claude (a revisar con datos)**
1. Falta prueba social: los videos y fotos del reto presencial, con permiso por escrito, son lo que más puede mover la conversión. Lugar sugerido: justo antes del precio (hay una plantilla comentada en `index.html`).
2. El quiz puede ayudar o estorbar: testear contra la página sin quiz (EXP-002) cuando haya tráfico.
3. Medir antes de recortar más secciones.
4. Arreglo técnico pendiente: la captura `app-hoy.webp` dice "12 de 31" (debe decir "12 de 28").

**Falta** (ver `products/reto-cintura-28/11-pendientes.md`): ID de Clarity, píxel de Meta (en la página y en Hotmart), configurar Utmify, fecha real del cupón, cambiar en Hotmart el precio base a US$ 45,43 y el cupón a 65 %, correcciones del checkout (contador, banner, bump), testimonios, afiliados.

## 2026-10-08 y anteriores
- Se creó el repo (método + producto Reto Cintura 28), se organizó en Miro todo el chat entre Santiago y su socio (flujo horizontal con flechas), se revisó el material y el Hotmart real (nombre sin "cm", Lorem ipsum borrado del checkout, link correcto con `offDiscount=LANZAMIENTO84`). Detalle: `products/reto-cintura-28/08-hotmart-y-emails.md` y `10-decisiones.md`.
- Santiago pidió explícitamente **no seguir al 100 % el material que pasa**: usar mejor criterio (ver `AGENTS.md`).
