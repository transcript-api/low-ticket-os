# Equipo de agentes en Hermes

Cómo correr Low Ticket OS con [Hermes Agent](https://hermes-agent.nousresearch.com/) (Nous Research) repartido en varios agentes. Las skills de `skills/` siguen el estándar abierto de agentskills.io (carpeta con `SKILL.md` + `references/`), que Hermes lee tal cual.

> Los comandos son los de la documentación oficial de Hermes a octubre 2026. Si tu versión difiere, verificá con `hermes --help` y `hermes profile --help`.

## Piezas

| Pieza | Dónde | Para qué |
|---|---|---|
| Skills | `skills/<skill>/SKILL.md` + `references/` | Procedimientos con la base de conocimiento adentro |
| Base de conocimiento | `conocimiento/` | Fuente de las `references/` (se copian con `npm run skills:sync`) |
| Perfiles | `hermes/perfiles/<rol>/SOUL.md` | Identidad, misión, entradas, salidas y límites de cada agente |
| Orquestación | `hermes/ORQUESTACION.md` | Flujos, contratos de entrega y quién aprueba qué |
| Manual del repo | `AGENTS.md` | Reglas que todos cumplen (Hermes, Claude, Codex) |

## Roles

| Perfil | Hace | Skills que carga |
|---|---|---|
| `director` | Planifica, reparte tareas, junta resultados, pide OK a Santiago, registra y sube a GitHub | Todas (lee), `crear-infoproducto` |
| `investigador` | Procesa transcripciones nuevas, mina ofertas en la Biblioteca de anuncios, mantiene `conocimiento/` | `ingesta-transcripciones`, `oferta-low-ticket` |
| `estratega-oferta` | Oferta, precio, bumps, planes, cadena anuncio → página → checkout, números | `oferta-low-ticket`, `crear-infoproducto` |
| `copywriter` | Ganchos, guiones, textos de Meta, página, correos, carruseles y orgánico | `copy-humanizada`, `copy-marketing`, `plan-carrusel`, `contenido-organico-ig` |
| `productor-creativo` | Imágenes y video IA, edición Remotion, checklist de 15 puntos | `realismo-cinematico-ia`, `edicion-premium` (+ `ai-cinematic-director` si lo copiás) |
| `media-buyer` | Arma campañas, lee Meta/Utmify/Hotmart, propone cortes y escalas con las reglas | `trafico-meta-low-ticket` |
| `auditor` | Revisa todo antes de que llegue a Santiago o a Meta: políticas, honestidad, verdad, coherencia, números con origen | `copy-humanizada` (§8), `oferta-low-ticket` (reglas), `references/banderas-rojas.md` |

## Instalación (Windows, PowerShell)

1. **Repo al día y skills sincronizadas**

   ```powershell
   cd "C:\Users\USUARIO\Desktop\low ticket\low-ticket-os"
   git pull
   npm run skills:sync
   ```

2. **Skills en Hermes.** Dos opciones:
   - Copiar al perfil por defecto: `npm run skills:hermes` (instala en `%USERPROFILE%\.hermes\skills\low-ticket-os\`).
   - O apuntar Hermes directo al repo (se actualiza con cada `git pull`): definí la variable de entorno `HERMES_OPTIONAL_SKILLS_DIR` con la ruta de `skills\` del repo.

3. **Un perfil por rol**

   ```powershell
   hermes profile create director --description "Orquesta Low Ticket OS: planifica, delega, pide OK y registra"
   hermes profile create investigador --description "Ingesta de transcripciones y minería de ofertas"
   hermes profile create estratega-oferta --description "Oferta, precio, bumps y cadena anuncio-página-checkout"
   hermes profile create copywriter --description "Ganchos, guiones y copy humanizado"
   hermes profile create productor-creativo --description "Imágenes, video IA y edición"
   hermes profile create media-buyer --description "Meta Ads: test, corte y escala con reglas"
   hermes profile create auditor --description "Políticas, honestidad y coherencia antes de publicar"
   ```

   Para cada uno:
   - Copiá `hermes\perfiles\<rol>\SOUL.md` a `%USERPROFILE%\.hermes\profiles\<rol>\SOUL.md`.
   - Instalá las skills en ese perfil: `node tools/skills-sync.mjs --hermes=~/.hermes/profiles/<rol>/skills/low-ticket-os` (o usá `HERMES_OPTIONAL_SKILLS_DIR`).
   - Configurá el directorio de trabajo en la carpeta del repo (`terminal.cwd` en el `config.yaml` del perfil) para que lea `AGENTS.md` y escriba en `products/`.
   - Las claves (modelo, Meta, etc.) van en el `.env` de cada perfil. **Nunca en el repo.**

4. **Probar:** `director chat` y pedile "leé AGENTS.md y decime el estado de Reto Cintura 28 y la próxima tarea de mayor impacto".

## Dos formas de operar

- **Simple (recomendada para empezar):** solo el perfil `director` con todas las skills. Cuando una tarea es de un rol, la delega con `delegate_task` y le pasa como instrucción el `SOUL.md` de ese rol y el brief (formato en `ORQUESTACION.md`). Cada subagente arranca con contexto limpio.
- **Equipo:** cada rol en su propio perfil (su memoria, su modelo, su gateway si querés hablarle por Telegram/WhatsApp). Se coordinan por el repo: el director deja briefs en `hermes/tareas/` y cada rol entrega en el archivo que dice su contrato. Nunca dos procesos sobre el mismo perfil.

Para otro negocio (Fitness Suplementos, MAX, etc.) cloná los perfiles con `hermes profile create <nuevo> --clone-from <rol>` y cambiá en su `SOUL.md` el producto y la carpeta de trabajo.

## Límites que ningún agente cruza

- Gastar, publicar, crear o editar campañas, mandar mensajes o aceptar términos: **solo con OK explícito de Santiago**, por acción.
- Nada inventado: testimonios, cifras, expertos, urgencia, antes/después. La presentadora IA presenta, no testimonia.
- Nada para esquivar sistemas de Meta (multilogin, cuentas de repuesto, trucos anti-detector).
- Los datos propios con muestra suficiente mandan sobre cualquier curso o video.
- Al cerrar un tramo: `docs/bitacora.md`, `10-decisiones.md`, `11-pendientes.md`, commit y push (ver `AGENTS.md` §10).
