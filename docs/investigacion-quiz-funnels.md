# Investigación: quiz funnels que convierten (2026-10-09)

Resumen de lo que dicen fuentes públicas y cómo se aplica al método. **Las cifras son de blogs de herramientas y de marketing: sirven como orientación, no como benchmark.** Todo se valida con test propio (`EXP-002`).

## Qué se repite en las fuentes

| Idea | Qué dicen | Fuente |
|---|---|---|
| Micro-compromisos | Una pregunta fácil por pantalla; cada "sí" chico prepara el "sí" grande. Una vez que respondió la primera, tiende a terminar | [FunnelFox](https://blog.funnelfox.com/quiz-funnel-guide/), [Noom: análisis](https://growthclassics.beehiiv.com/p/noom-3-7-billion-weight-loss-story) |
| Progresión emocional | Curiosidad → esperanza ("existe un plan para mí") → decisión | [Noom: análisis](https://growthclassics.beehiiv.com/p/noom-3-7-billion-weight-loss-story) |
| Resultado personalizado | Una página de resultado que depende de las respuestas convierte más que una genérica y elimina la parálisis de decisión | [Heyflow](https://heyflow.com/blog/10-quiz-funnel-examples/) |
| Ramificación | El quiz que se adapta a lo respondido se siente "hecho para mí" | [Noom: análisis](https://growthclassics.beehiiv.com/p/noom-3-7-billion-weight-loss-story) |
| Contexto antes de pedir | Las preguntas sensibles se enmarcan; se avisa cuánto falta | [Noom: análisis](https://growthclassics.beehiiv.com/p/noom-3-7-billion-weight-loss-story) |
| Primera pantalla | Debe decir en segundos para quién es, qué sistema usa, qué primer resultado esperar y cuál es el paso siguiente | [Unicorn Platform](https://unicornplatform.com/blog/landing-pages-for-fitness-apps-in-2026/) |
| Mobile | El tráfico fitness es mayoritariamente celular y el rebote móvil es más alto | [Webtonic](https://www.webtonic.io/blog/fitness-landing-page-statistics) |
| Cifras de conversión | Se citan "30-50 % contra 2-5 % de una landing" y tasas de inicio de quiz de ~70 %. Son afirmaciones de proveedores de herramientas | [Interact](https://www.tryinteract.com/blog/get-leads-from-meta-ads-with-quiz-funnels) |

## Qué NO se copia

- **Datos de salud al píxel.** Hubo demandas por mandar datos de salud a Meta con el píxel. El quiz del repo no envía respuestas a ninguna herramienta de anuncios.
- **Pedir email, peso o altura antes del resultado.** Es la fricción de apps de suscripción; acá se vende un low ticket.
- **Frases que valen para cualquiera disfrazadas de personalizadas.** El resultado sale de lo que respondió.
- **"Tu plan se está generando" falso.** Si hay espera, que sea real.
- **Urgencia inventada.** Solo con un fin real (fecha o tope de usos del cupón).

## Qué se aplica a Reto Cintura 28

1. **Una pregunta por pantalla, barra de progreso y avance al tocar.** La app ya lo hace (`vQuiz` en `app.js`).
2. **Preguntas en sus palabras**, que sean su objeción real ("empecé y a la semana abandoné"), no un test genérico.
3. **Cada opción lleva a un resultado distinto** y el resultado repite lo que ella dijo.
4. **Una pregunta de compromiso al final** ("¿cuándo empezarías?"), legítima porque ordena la decisión.
5. **Sin email ni datos corporales.** Dos minutos máximo.
6. **El resultado cierra con el precio y un solo botón al checkout.**
7. **Se testea contra la página sin quiz** (misma oferta, mismo tráfico).

## Qué ya existe

El quiz de la app (Día 0, elige nivel) tiene 5 preguntas, barra de progreso, opciones con imagen y resultados por motivo de abandono y situación. Es una buena base. Para la página de ventas se adapta: otro objetivo (decidir comprar, no elegir nivel), sin la opción "tengo más de 40" (política de Meta) y con un resultado que termina en el checkout.
