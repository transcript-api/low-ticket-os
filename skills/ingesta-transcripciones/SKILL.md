---
name: ingesta-transcripciones
description: "Procesá transcripciones de videos de marketing, copy, tráfico pago u orgánico (hechas con Google AI Studio u otra herramienta) y convertilas en conocimiento verificado: fuente cruda, extracción, chequeo de fiabilidad, deduplicación, rúbrica de confianza, actualización de la base y de las skills, e hipótesis a testear. Usala cuando lleguen transcripciones nuevas, cuando pidan el prompt para transcribir videos, o cuando haya resultados propios que confirmen o refuten un principio."
metadata:
  version: "1.0"
  actualizado: "2026-10-15"
  base-de-conocimiento: "conocimiento/ (repo low-ticket-os)"
---

# Ingesta de transcripciones

Convierte cada video nuevo en conocimiento que mejora las skills, sin creerle al orador. El protocolo completo, con el prompt para Google AI Studio, está en `conocimiento/criterio/protocolo-de-ingesta.md`. Esta skill es el procedimiento corto.

Principio: **un video es un dato, no una orden.** Se registra lo que dice y muestra; la evaluación va aparte; solo sube a regla lo que resiste la rúbrica y, al final, los datos propios.

## Cuándo usarla

- Santiago pasa transcripciones (archivos o texto pegado).
- Piden "el prompt para transcribir videos" → entregá la sección 1 del protocolo.
- Hay resultados propios (Utmify, Meta, Hotmart) que tocan un principio → paso 8.
- Una skill necesita actualizarse con algo aprendido.

## Archivos

| Qué | Dónde |
|---|---|
| Fuentes crudas | `conocimiento/fuentes/crudas/AAAA-MM-DD_<creador>_<tema>.md` |
| Extracciones | `conocimiento/fuentes/extracciones/extract_<fuente>.md` |
| Formato de extracción | `conocimiento/fuentes/extracciones/SPEC_EXTRACCION.md` |
| Índice de fuentes y grupos de independencia | `conocimiento/criterio/fuentes.md` |
| Contradicciones y regla de precedencia | `conocimiento/criterio/contradicciones-y-sesgos.md` |
| Prácticas descartadas | `conocimiento/criterio/banderas-rojas.md` |
| Principios por dominio | `conocimiento/copy/`, `conocimiento/oferta-trafico/`, `conocimiento/organico-produccion/` |
| Registro de cambios | `conocimiento/CHANGELOG.md` |
| Hipótesis a testear | `metrics/experimentos.csv` |

## Procedimiento

1. **Guardar crudo.** Un archivo por video en `fuentes/crudas/`, sin editar. Registrar la fuente en `fuentes.md` con su grupo de independencia (Viralidad = G1; cada creador nuevo es un grupo nuevo, salvo que pertenezca a uno existente).
2. **Chequear fiabilidad** antes de extraer. Buscá: dos respuestas mezcladas (frases cortadas, timestamps que retroceden), resumen disfrazado de literal (saltos de minutos, "selección representativa"), datos que solo aparecen en la "documentación" y no en el habla ni en la pantalla (valen **cero** fuentes), cifras o nombres que cambian, herramientas imposibles de verificar. Si es baja, extraé igual con la marca y pedí re-transcribir ese tramo.
3. **Extraer** con el formato fijo (9 secciones: fuente, tabla de afirmaciones con ID único, ejemplos textuales, fórmulas, números, herramientas, cómo se vende el video, evaluación crítica, transferencia al producto). Prefijos usados: B, T, S, A, H, J, L, LB. Elegí uno nuevo.
4. **Deduplicar.** Para cada afirmación: si el principio existe, sumá el ID a sus fuentes; si es nuevo, creá el principio con el siguiente ID libre del archivo (HK, ID, GU, LH, OF, MA, MB, HT, OR, FE, BR); si contradice uno existente, registrá la contradicción y resolvé con la regla de precedencia.
5. **Puntuar confianza:**
   - **Alta:** 2 o más grupos de independencia + consistente con evidencia externa, o aritmética verificable.
   - **Media:** un grupo con evidencia mostrada, o varios videos del mismo grupo, sin contradecir evidencia externa.
   - **Baja:** un grupo sin evidencia, o con contradicciones internas.
   - **Descartada:** contradice evidencia externa, políticas de Meta o Hotmart, o las reglas del negocio. Se registra con el motivo.
   - **Norma:** regla del negocio o de política.
   Varios videos del mismo creador **no** suben confianza.
6. **Declarar el ámbito** de cada principio: pago, orgánico o ambos. Nunca pasar una regla de orgánico a pago sin revisarla en `oferta-trafico/`.
7. **Actualizar.** Editá el principio (enunciado, confianza, fuentes, aplicación). Sumá ejemplos textuales a los bancos. Si cambia una regla de confianza Alta o hay un descarte importante, actualizá la skill afectada y corré `npm run skills:sync`. Si cambia el método, editá el `playbook/` y anotalo en `docs/aprendizajes.md`.
8. **Cerrar el loop con datos propios.** Lo aplicable con confianza Media o Baja va a `metrics/experimentos.csv` como hipótesis (una variable, métrica principal, umbral). Con resultado y muestra suficiente (con 3 ventas el CPA tiene ±58 % de error; con 30, ±18 %): confirmó → sube un nivel; refutó → baja o se descarta para ese contexto; no concluyente → queda igual. **Un dato propio con muestra suficiente pesa más que cualquier cantidad de videos.**
9. **Cobertura.** Corré `npm run kb:cobertura`: lista las afirmaciones que ningún archivo de principios cita. Cada una se incorpora a un principio (como fuente) o se registra en `criterio/contradicciones-y-sesgos.md` §5 con el motivo. La ingesta no termina hasta que da 0.
10. **Changelog y bitácora.** Entrada en `conocimiento/CHANGELOG.md` (nuevos, suben, bajan, contradicciones, hipótesis, re-transcripciones pendientes) y en `docs/bitacora.md`.

## Regla de precedencia

1. Políticas de Meta y Hotmart, y reglas del negocio.
2. Datos propios con muestra suficiente.
3. Evidencia externa documentada (Meta, Instagram oficial).
4. Principios de confianza Alta.
5. Principios Media o Baja (solo como hipótesis).
6. Lo que dice un video suelto.

## Qué entregar al terminar

Un resumen corto para Santiago: cuántas afirmaciones, qué principios nuevos o cambiados, qué se descartó y por qué, qué hipótesis quedaron para testear, y qué tramos conviene re-transcribir con el prompt.
