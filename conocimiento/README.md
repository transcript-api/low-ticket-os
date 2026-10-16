# Conocimiento

Base de conocimiento verificada que alimenta las skills (`skills/`) y a los agentes (`hermes/`). Sale de transcripciones de videos de cursos y "gurús", pero **nada entra como verdad por venir de un video**: cada afirmación se registra con su fuente, se cruza con otras fuentes, con la evidencia oficial de Meta y con las reglas del negocio, y recibe una confianza. Los datos propios de los anuncios mandan sobre todo lo demás.

## Estructura

```
conocimiento/
  README.md                      Este archivo
  CHANGELOG.md                   Qué cambió en la base, por fecha
  fuentes/
    crudas/                      Transcripción original de cada video, sin editar
    extracciones/                Extracción por fuente (9 secciones, IDs de afirmación) + especificaciones
  criterio/
    fuentes.md                   Índice de videos, fiabilidad, grupos de independencia, solapamientos
    banderas-rojas.md            Prácticas descartadas (BR) y su alternativa honesta
    contradicciones-y-sesgos.md  Contradicciones entre y dentro de fuentes, y la regla adoptada
    protocolo-de-ingesta.md      Cómo procesar una transcripción nueva + prompt para Google AI Studio
  copy/
    ganchos.md                   HK · principios, rúbrica 0-10, banco de 21 mecanismos con ejemplos
    ideas-y-angulos.md           ID · idea ganadora, 5/50, PCN, niveles de consciencia, banco de ángulos
    guiones.md                   GU · estructuras con tiempos (15, 20-25, 40 y 60 s), CTA, 3 guiones RC28
    lenguaje-humanizado.md       LH · pares frase mala → buena, anti-IA, escribir para voz, registro por país
  oferta-trafico/
    oferta-low-ticket.md         OF · minería, modelar sin clonar, precio, bumps, planes, ARPU, reembolsos
    meta-ads-operacion.md        MA · estructura de test, corte, escala, puja, Andromeda, tracking, cuentas
    metricas-benchmarks.md       MB · definiciones, fórmulas y todas las cifras citadas con su fiabilidad
    high-ticket-y-ventas.md      HT · llamadas, setter/closer, escalera de valor (hoy no aplica a RC28)
  organico-produccion/
    sistema-organico-ig.md       OR · distribución, tandas de 20, fotocopiadora, Trial Reels, historias, ManyChat
    formatos-y-edicion.md        FE · formatos, reglas de edición para retención, voz IA, precio visual
```

## Cifras de la primera ingesta (2026-10-14/15)

- 16 videos (9 de Víctor Heras / Viralidad, 7 creadores brasileños de low ticket) en 8 archivos de transcripción.
- 764 afirmaciones extraídas con ID (prefijos B, T, S, A, H, J, L, LB).
- 327 principios en los archivos de dominio y 32 banderas rojas.

## Rúbrica de confianza

| Nivel | Cuándo |
|---|---|
| **Alta** | 2 o más grupos de independencia + consistente con evidencia externa, o aritmética verificable |
| **Media** | Un grupo con evidencia mostrada (dashboard, caso con nombre), o varios videos del mismo grupo, sin contradecir evidencia externa |
| **Baja** | Un grupo sin evidencia, o con contradicciones internas |
| **Descartada** | Contradice evidencia externa, políticas de Meta/Hotmart o las reglas del negocio. Se registra con el motivo |
| **Norma** | Regla del negocio o de política |

Grupos de independencia: Víctor Heras y todo su equipo (Iván Rives, Mike Moreno, Adrià) = **un solo grupo**. Cada creador brasileño es su propio grupo. Varios videos del mismo grupo no suben la confianza.

Todo lo aplicable con confianza Media o Baja es **hipótesis**: se testea con una sola variable y se registra en `metrics/experimentos.csv`.

## Regla de precedencia

1. Políticas de Meta y Hotmart, y reglas del negocio (`docs/01-principios.md`, `compliance/`).
2. Datos propios con muestra suficiente (`products/*/09-metricas.md`, `metrics/experimentos.csv`).
3. Evidencia externa documentada (Meta, Instagram oficial).
4. Principios de confianza Alta.
5. Principios Media o Baja, solo como hipótesis.
6. Lo que dice un video suelto.

## Cómo se usa

- **Agentes y skills** leen los archivos de su dominio (cada skill los trae copiados en `references/`; se regeneran con `npm run skills:sync`).
- **Transcripción nueva:** skill `ingesta-transcripciones` y `criterio/protocolo-de-ingesta.md`. El prompt para Google AI Studio está en la sección 1 de ese protocolo.
- **Resultado de un test:** sube o baja la confianza del principio que testeó (protocolo, paso 8) y se anota en `CHANGELOG.md`.
- **IDs estables:** un principio nunca cambia de ID; si se descarta, queda con estado "Descartada" y el motivo.
