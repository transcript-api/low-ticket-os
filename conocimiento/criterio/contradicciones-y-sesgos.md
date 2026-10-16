# Contradicciones y sesgos del corpus

Para qué sirve: que ningún agente tome una cifra de un gurú como ley. Cada contradicción tiene la regla que adopta el sistema y con qué confianza. Las tablas de detalle están en cada archivo de dominio; acá va el índice y la decisión.

## 1. Regla de precedencia (manda sobre todo este archivo)

1. **Políticas de Meta y Hotmart, y las reglas del negocio** (`docs/01-principios.md`, `compliance/`).
2. **Datos propios medidos** (Utmify, Meta, Hotmart) con muestra suficiente (ver `oferta-trafico/metricas-benchmarks.md`, MB-22).
3. **Evidencia externa documentada** (documentación de Meta, declaraciones oficiales de Instagram, estudios citados en `SPEC_SINTESIS`).
4. **Principios de confianza Alta** de esta base.
5. **Principios Media o Baja**: solo como hipótesis a testear.
6. **Lo que dice un video suelto**: dato, no instrucción.

Si un dato propio contradice un principio, gana el dato y el principio baja de confianza en el próximo ciclo de ingesta (`protocolo-de-ingesta.md`, paso 8).

## 2. Contradicciones dentro de Víctor Heras / Viralidad (grupo G1, una sola fuente)

| ID | Tema | Versión 1 | Versión 2 | Regla adoptada | Confianza |
|---|---|---|---|---|---|
| CS-01 | Anuncios y salud de cuenta | "Los anuncios intoxican la cuenta" (S19, H11) | Su socio pone ads en la etapa de exposición (J51) y él recomienda retargeting (S99) | Los anuncios no dañan la cuenta orgánica. Se descarta "intoxicación por ads" (OR-20, MA-32) | Alta (por evidencia externa) |
| CS-02 | Colaboraciones | "Mala acción" (H11) | Usa un Reel en colaboración para migrar (H16) | Las colaboraciones alineadas no dañan (OR-21) | Media |
| CS-03 | Peso del gancho | 80 % del tiempo de guion en el gancho (S64) | "Podés tener un mal gancho" si la idea gana (A42); "no es cómo empezás, es cómo terminás" (J32) | Diagnóstico por capa con métricas: hook rate → gancho; hold → cumplimiento o idea; CTR → transición; IC → página (HK-02, FE-46) | Alta |
| CS-04 | Tasa de ganadoras | 10–20 % (H22, S69) | 25 % "5 de cada 20" (H21); 2 de 50–60 (J46) | Planificar con 10–20 % y nunca menos de 8–10 conceptos por lote (MA-20, OR-28) | Media |
| CS-05 | Tiempo de producción | Menos de 6 h/mes (A03) | Hasta 3,5 días/mes (J39) | Irrelevante para el pipeline IA; se mide costo por concepto producido | Baja |
| CS-06 | Punto de transición en un Reel de 60 s | 15 s (A34) | 30 s (J28) o 45 s (S78) | Regla de proporción: el producto entra después de cumplir el gancho. Orgánico: último 25–40 %. Pago: 30–50 % (GU-04) | Media |
| CS-07 | Definición de R.I. | Gusta ÷ mostrado (S25) | Retención (A38); vistas ÷ seguidores (H08) | No se usa R.I.: se mide con métricas reales de Insights y Meta (OR-05, MB-24) | Alta |
| CS-08 | Umbral sano de Reels | 40–100 % (S28) | Mínimo 30 % (H08) | La "ITV" 5 %/30 % es heurística floja, no regla del algoritmo (OR-18) | Alta (descartada como regla) |
| CS-09 | "Sin aportar valor" | No hacer contenido de valor (S02, A06) | CTA con clase, guía o recurso (S98); "enseñá tu experiencia" (B17) | Entretener y despertar deseo primero; el valor va como demostración y criterio, no como clase (ID-25, ID-26) | Media |
| CS-10 | "Cero efectitos" | Edición minimalista (J44) | Él usa rombos dorados y efectos en sus videos (B145) | Congruencia con el precio visual; sin letras doradas (FE-22, FE-28) | Media |
| CS-11 | Casos con cifras | Bernardo "500k en 45 días" | Bernardo "340k en 30 días"; 1,8 M hablado vs 2,1 M en pantalla | Las cifras de casos de G1 valen cero como benchmark | — |
| CS-12 | Migrados de Alfredo | 507 (S38) | 500 (H15) | Irrelevante; la migración no aplica a cuentas publicitarias (OR-23) | — |

## 3. Contradicciones entre fuentes

| ID | Tema | Fuente A | Fuente B | Regla adoptada | Confianza |
|---|---|---|---|---|---|
| CS-20 | Guion lineal vs embudo | "Hablarle al cliente ideal de 0 a 60 s es una absoluta mierda" (H25, orgánico) | Borba y Ferreira escalan low ticket con guiones lineales de dolor → producto (L, pago) | Dos familias de creativos en pago (lineal y embudo comprimido), testeadas como conceptos distintos (GU-05, ID-08) | Media |
| CS-21 | Abrir ancho | Abrir con un tema para todo el mundo (J28, H26) | En pago con segmentación amplia el creativo segmenta (Andromeda) | Orgánico: ancho. Pago: "ancho dentro del público" (un dolor de conducta que le pasa a 5 de cada 10 mujeres 25–50) (HK-11, ID-07) | Alta |
| CS-22 | Producto de deseo | "Con producto de deseo no se habla del problema" (S45) | Regla de Santiago: el gancho toca dolor o pregunta; Meta prohíbe autopercepción negativa | El gancho toca el problema del plan, el tiempo o la conducta; el deseo aparece como vivencia de proceso, nunca como resultado en el cuerpo (ID-05) | Alta |
| CS-23 | High vs low ticket | "Con audiencias chicas el low ticket es inviable" (J48, H) | Cinco creadores brasileños escalan low ticket con tráfico pago y dashboard (L) | El argumento de G1 vale para orgánico sin pauta; con tráfico pago no aplica (HT-03) | Alta |
| CS-24 | Bid cap | Bid cap anclado al precio del front (Gaspar) | En el Reto, el ARPU es 1,08 × el front | Cost cap solo en escala, anclado al CPA de equilibrio u objetivo (MA-17) | Alta (aritmética) |
| CS-25 | "ROI" | Los brasileños dicen "ROI" | Es ROAS (facturación ÷ gasto) | Usar siempre ROAS y ROI real con la tabla de traducción (MB-14, MB-15) | Alta (definición) |
| CS-26 | Corte de creativos | R$ 10 gastados sin venta (= 1 × ticket, Ferreira) | Repo: 1,5 × CPA de equilibrio | Se mantiene 1,5 × CPA de equilibrio, con excepción por IC (MA-09) | Alta (aritmética de Poisson) |
| CS-27 | Cantidad de creativos | 10 (7 videos + 3 imágenes) "porque lo pide Andromeda" (Ferreira) | Repo: 6 ángulos | 8–10 conceptos distintos. "Lo pide Andromeda" no es documentación de Meta; la diversidad sí está documentada (MA-01) | Media |

## 4. Sesgos del corpus

| Sesgo | Dónde aparece | Cómo se corrige |
|---|---|---|
| Supervivencia | Todos los casos son ganadores; el compilado brasileño lo armó un curador | No usar cifras de casos como benchmark; testear con datos propios |
| Vende un servicio | Todas las fuentes terminan en mentoría, curso, consultoría o afiliado | Separar lo que enseñan de lo que necesitan que creas para venderte |
| Cifras sin verificar | Ingresos, seguidores, visitas; cifras que cambian entre minutos | Confianza Baja salvo dashboard visible y consistente |
| Moneda y país | Casi todo es Brasil, R$, Pix, nichos brasileños | Solo se transfiere la lógica y el orden de magnitud |
| Generado por Gemini | Resúmenes presentados como literales, datos que solo aparecen en la "documentación" | Un dato que no está en el habla ni en la pantalla vale cero fuentes (`fuentes.md`) |
| Orgánico vs pago | G1 habla de orgánico y trata a los anuncios con prejuicio | Nunca trasladar una regla orgánica a pago sin pasar por `oferta-trafico/` |

## 5. Afirmaciones revisadas que no generan principio

Revisión de cobertura del 2026-10-16: de 764 afirmaciones extraídas, estas 9 no entran a ningún archivo de principios. Quedan registradas para que nadie las vuelva a proponer como regla.

| ID | Afirmación | Por qué no genera principio |
|---|---|---|
| S06 | "Hay que verlo, entenderlo e implementarlo" | Exhortación, sin regla accionable |
| A04 | Las cifras de clientes son "100 % orgánicas" | Autopromoción sin evidencia verificable |
| A05 | El orgánico es la forma más barata de llegar a desconocidos | Encuadre general; el costo real del orgánico es tiempo de producción (ver OR-27 a OR-33) |
| A07 | La gente se estanca buscando un "método mágico" | Opinión motivacional |
| A10 | Trabajó con bancos y partidos políticos que no puede nombrar | Autoridad no verificable |
| A11 | Con aprender "una sola cosa" la clase ya es rentable | Venta de la propia clase |
| A12 | "No es lo que creo, es lo que hice" con clientes famosos | Autoridad prestada; sesgo de supervivencia (§4) |
| A17 | Para quién es la clase | Segmentación de su propia audiencia |
| A19 | Hay que entender las reglas de Instagram "como en el fútbol" | Metáfora, sin regla; el contenido está en OR-01 a OR-04 |

Para que no vuelva a quedar nada atrás: después de cada ingesta corré `npm run kb:cobertura` (lista las afirmaciones que ningún archivo de principios cita).

