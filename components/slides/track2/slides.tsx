"use client"

import type { ReactNode } from "react"
import { GeistPixelSquare } from "geist/font/pixel"

interface SlideProps {
  isActive: boolean
}

interface SlideShellProps extends SlideProps {
  label: string
  title: string
  intro?: string
  children: ReactNode
  maxWidth?: string
  compact?: boolean
}

function SlideShell({
  isActive,
  label,
  title,
  intro,
  children,
  maxWidth = "max-w-5xl",
  compact = false,
}: SlideShellProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto ${
        compact ? "py-14 sm:py-0" : "py-16 sm:py-0"
      } ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className={`${maxWidth} mx-auto w-full`}>
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            {label}
          </span>
        </div>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 sm:mb-6">
          {title}
        </h2>

        {intro ? (
          <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
            {intro}
          </p>
        ) : null}

        {children}
      </div>
    </section>
  )
}

function StepNumber({ value }: { value: number }) {
  return (
    <span className="w-6 h-6 border border-neutral-800 flex items-center justify-center text-neutral-600 font-mono text-xs flex-shrink-0 mt-0.5">
      {value}
    </span>
  )
}

const problemPoints = [
  "Un dashboard sin datos reales solo se ve bonito.",
  "Un asistente sin herramientas solo inventa respuestas.",
  "Una app útil necesita leer notas, buscar documentos, preparar mensajes o actualizar una lista.",
  "MCP es la forma ordenada de darle esas capacidades a la IA.",
]

export function Track2TitleSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="slide-animate mb-6 sm:mb-8">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            Track 02
          </span>
        </div>

        <h1 className="slide-animate text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-none mb-4">
          v0 + MCPs
        </h1>
        <h2
          className={`slide-animate ${GeistPixelSquare.className} text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium text-neutral-500 leading-none mb-8 sm:mb-10`}
        >
          Apps conectadas
        </h2>

        <p className="slide-animate text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed mb-8 sm:mb-12">
          Construye una app con v0 que no solo responde: puede consultar herramientas, leer datos externos y mostrar un resultado útil.
        </p>

        <div className="slide-animate">
          <p className="text-neutral-500 text-sm sm:text-base border-l-2 border-neutral-700 pl-4">
            En palabras simples: v0 construye la app. MCP le abre puertas seguras a datos y acciones reales.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Track2ProblemSlide({ isActive }: SlideProps) {
  return (
    <SlideShell
      isActive={isActive}
      label="01 / El problema"
      title="La app mejora cuando puede tocar el mundo real"
      intro="Para una demo, el UI importa. Pero lo que convence es ver que la app consulta algo cotidiano, decide con contexto y devuelve una acción clara."
      maxWidth="max-w-4xl"
    >
      <div className="slide-animate space-y-3 sm:space-y-4 mb-8 sm:mb-10">
        {problemPoints.map((point, index) => (
          <div key={point} className="flex items-start gap-3 sm:gap-4">
            <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full flex-shrink-0 mt-2" />
            <span className="text-neutral-300 text-sm sm:text-base">{point}</span>
          </div>
        ))}
      </div>

      <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
        <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Meta del track</p>
        <p className="text-white text-sm sm:text-base">
          Una app deployada que use al menos una herramienta externa cotidiana vía MCP o que deje la integración lista con mock verificable.
        </p>
      </div>
    </SlideShell>
  )
}

export function Track2PlainMcpSlide({ isActive }: SlideProps) {
  const parts = [
    { title: "La app", body: "Donde el usuario escribe, revisa y decide." },
    { title: "El modelo", body: "Entiende la intención y elige qué herramienta usar." },
    { title: "MCP", body: "Conector estándar que expone herramientas y datos." },
    { title: "El servicio", body: "Notion, Airtable, Zapier o Asana, usando MCP oficial." },
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="02 / Concepto clave"
      title="MCP es un adaptador para herramientas"
      intro="No pienses en protocolo. Piensa en un enchufe: la IA puede pedir una lista, buscar un dato o ejecutar una acción sin inventarse cómo hacerlo."
    >
      <div className="slide-animate grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {parts.map((part, index) => (
          <div key={part.title} className="p-4 sm:p-5 border border-neutral-800 bg-neutral-950/50">
            <div className="font-mono text-neutral-600 text-xs mb-4">{String(index + 1).padStart(2, "0")}</div>
            <h3 className="text-white text-lg font-medium mb-2">{part.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">{part.body}</p>
          </div>
        ))}
      </div>

      <div className="slide-animate p-4 sm:p-6 border-l-2 border-neutral-700 bg-neutral-900/30">
        <p className="text-white text-sm sm:text-base">
          Si una app puede decir &quot;busqué en tus notas de Notion&quot; o &quot;preparé un borrador de follow-up&quot;, probablemente hubo una herramienta detrás.
        </p>
      </div>
    </SlideShell>
  )
}

export function Track2V0VsMcpSlide({ isActive }: SlideProps) {
  const columns = [
    {
      title: "v0 construye",
      items: ["Pantallas", "Componentes", "Flujos de usuario", "Estados visibles", "Código Next.js"],
    },
    {
      title: "MCP conecta",
      items: ["Herramientas", "Datos externos", "Acciones seguras", "Contexto actualizado", "Sistemas de terceros"],
    },
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="03 / Roles"
      title="v0 hace la app. MCP le da acceso"
      intro="Separar estos roles evita pedirle a v0 que lo resuelva todo de una vez. Primero defines la experiencia, después conectas una herramienta concreta."
    >
      <div className="slide-animate grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {columns.map((column) => (
          <div key={column.title} className="p-5 sm:p-6 border border-neutral-800">
            <h3 className="text-white text-xl sm:text-2xl font-medium mb-5">{column.title}</h3>
            <div className="space-y-3">
              {column.items.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-neutral-600 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
        <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Frase útil para prompt</p>
        <p className="text-white text-sm sm:text-base">
          &quot;Primero crea el UI con datos mock. Luego agrega una capa de tools MCP con fallback mock si faltan credenciales.&quot;
        </p>
      </div>
    </SlideShell>
  )
}

export function Track2EverydayMcpSlide({ isActive }: SlideProps) {
  const everydayTools = [
    {
      tool: "Notion MCP",
      use: "leer notas, tareas, páginas, bases de conocimiento o un CRM simple",
      source: "Primario: bajo setup",
    },
    {
      tool: "Airtable MCP",
      use: "consultar tablas de leads, inventario, proyectos, feedback o clientes",
      source: "Primario: datos visibles",
    },
    {
      tool: "Zapier MCP",
      use: "conectar acciones comunes sin crear un backend propio",
      source: "Puente: elige acciones",
    },
    {
      tool: "Asana MCP",
      use: "leer tareas, proyectos, responsables y fechas de entrega",
      source: "Backup: tareas",
    },
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="04 / MCPs cotidianos"
      title="Elige MCPs oficiales con poco setup"
      intro="Para este track, no alcanza con que el MCP exista. Debe ser fácil de conectar, fácil de explicar y útil con datos que el attendee pueda crear en minutos."
      maxWidth="max-w-6xl"
    >
      <div className="slide-animate grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {everydayTools.map((item, index) => (
          <div key={item.tool} className="p-4 sm:p-5 border border-neutral-800 bg-neutral-950/50">
            <div className="font-mono text-neutral-600 text-xs mb-3">{String(index + 1).padStart(2, "0")}</div>
            <h3 className="text-white font-medium text-lg mb-2">{item.tool}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">{item.use}</p>
            <p className="text-neutral-600 text-xs mt-4">{item.source}</p>
          </div>
        ))}
      </div>

      <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
        <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Regla</p>
        <p className="text-white text-sm sm:text-base">
          Si requiere admin de workspace, aprobaciones largas o datos sensibles, no lo uses como primera demo.
        </p>
      </div>
    </SlideShell>
  )
}

export function Track2UsefulAppSlide({ isActive }: SlideProps) {
  const actions = [
    { verb: "Leer", example: "notas de Notion, registros de Airtable o tareas de Asana" },
    { verb: "Buscar", example: "decisiones pasadas, clientes, acuerdos, tareas o mensajes relevantes" },
    { verb: "Comparar", example: "prioridades, fechas, estados, responsables o registros similares" },
    { verb: "Preparar", example: "resumen, agenda, respuesta, checklist o siguiente acción" },
    { verb: "Actualizar", example: "guardar resumen, crear tarea, preparar registro o dejar borrador" },
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="05 / Qué puede hacer"
      title="Una buena demo muestra una acción verificable"
      intro="No necesitas automatizar una empresa. Elige una herramienta, una pregunta y un resultado que alguien pueda revisar en pantalla."
    >
      <div className="slide-animate space-y-3 sm:space-y-4">
        {actions.map((action, index) => (
          <div key={action.verb} className="grid grid-cols-[72px_1fr] sm:grid-cols-[96px_1fr] gap-4 p-4 border border-neutral-800 bg-neutral-950/50">
            <div className="font-mono text-neutral-600 text-xs">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h3 className="text-white font-medium text-base sm:text-lg mb-1">{action.verb}</h3>
              <p className="text-neutral-500 text-sm sm:text-base">{action.example}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}

export function Track2ArchitectureSlide({ isActive }: SlideProps) {
  const flow = [
    "Usuario pide algo",
    "App identifica fuente",
    "IA llama una tool",
    "MCP consulta servicio",
    "App muestra evidencia",
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="06 / Arquitectura mental"
      title="El flujo debe verse, no esconderse"
      intro="Para asistentes nuevos, lo más importante es que el demo explique qué herramienta se usó, qué dato volvió y qué decisión produjo."
    >
      <div className="slide-animate grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
        {flow.map((step, index) => (
          <div key={step} className="p-4 sm:p-5 border border-neutral-800 bg-neutral-950/50 min-h-28">
            <div className="font-mono text-neutral-600 text-xs mb-4">{String(index + 1).padStart(2, "0")}</div>
            <p className="text-white text-sm sm:text-base leading-relaxed">{step}</p>
          </div>
        ))}
      </div>

      <div className="slide-animate grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 border border-neutral-800">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Panel 1</p>
          <p className="text-neutral-300 text-sm">Pregunta del usuario</p>
        </div>
        <div className="p-4 border border-neutral-800">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Panel 2</p>
          <p className="text-neutral-300 text-sm">Fuente consultada</p>
        </div>
        <div className="p-4 border border-neutral-800">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Panel 3</p>
          <p className="text-neutral-300 text-sm">Resultado y siguiente acción</p>
        </div>
      </div>
    </SlideShell>
  )
}

export function Track2RecipesSlide({ isActive }: SlideProps) {
  const recipes = [
    {
      title: "Notion meeting follow-up",
      mcp: "Notion MCP",
      input: "notas de reunión",
      output: "decisiones, tareas y email de seguimiento",
    },
    {
      title: "Airtable personal CRM",
      mcp: "Airtable MCP",
      input: "lista de contactos",
      output: "prioridad y próximo mensaje",
    },
    {
      title: "Knowledge base support",
      mcp: "Notion MCP",
      input: "pregunta de cliente",
      output: "respuesta con fuentes",
    },
    {
      title: "Zapier request router",
      mcp: "Zapier MCP",
      input: "solicitud de cliente",
      output: "borrador de acción en una app conectada",
    },
    {
      title: "Asana task cleanup",
      mcp: "Asana MCP",
      input: "proyecto con tareas abiertas",
      output: "prioridades, bloqueos y próximos pasos",
    },
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="07 / Recetas seguras"
      title="Elige una receta con datos fáciles de mostrar"
      intro="Estas ideas son buenas para principiantes porque el output cabe en una pantalla y se puede explicar sin código."
      maxWidth="max-w-6xl"
      compact
    >
      <div className="slide-animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {recipes.map((recipe, index) => (
          <div
            key={recipe.title}
            className={`p-5 sm:p-6 border ${index === 0 ? "border-white bg-white/5" : "border-neutral-800 bg-neutral-950/50"}`}
          >
            <div className="font-mono text-neutral-600 text-xs mb-3">{String(index + 1).padStart(2, "0")}</div>
            <h3 className="text-white font-medium text-lg sm:text-xl mb-4">{recipe.title}</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <p><span className="text-neutral-500">MCP:</span> <span className="text-neutral-300">{recipe.mcp}</span></p>
              <p><span className="text-neutral-500">Input:</span> <span className="text-neutral-300">{recipe.input}</span></p>
              <p><span className="text-neutral-500">Output:</span> <span className="text-neutral-300">{recipe.output}</span></p>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}

export function Track2PickScopeSlide({ isActive }: SlideProps) {
  const choices = [
    "Un usuario claro",
    "Una pregunta repetible",
    "Una herramienta cotidiana",
    "Un output que se pueda leer",
    "Un fallback mock",
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="08 / Alcance"
      title="Tu demo no necesita muchas tools"
      intro="Una integración bien explicada gana más que cinco botones rotos. Reduce hasta que puedas enseñar el valor en menos de dos minutos."
      maxWidth="max-w-4xl"
    >
      <div className="slide-animate space-y-3 mb-8">
        {choices.map((choice, index) => (
          <div key={choice} className="flex items-start gap-3 p-4 border border-neutral-800 bg-neutral-950/50">
            <StepNumber value={index + 1} />
            <span className="text-neutral-300 text-sm sm:text-base">{choice}</span>
          </div>
        ))}
      </div>

      <div className="slide-animate p-4 sm:p-6 border-l-2 border-neutral-700 bg-neutral-900/30">
        <p className="text-white text-sm sm:text-base">
          Buena promesa: &quot;Lee estas notas de reunión y conviértelas en decisiones, tareas y follow-up.&quot;
        </p>
      </div>
    </SlideShell>
  )
}

const starterPrompt = `Construye una app Next.js llamada Notion Meeting Follow-up.

La app ayuda a una persona no técnica a convertir notas de reunión en decisiones, tareas y un email de seguimiento.

Objetivo:
- El usuario pega una URL o nombre de página de Notion.
- La app consulta Notion usando MCP para leer notas de reunión.
- Si no hay credenciales o MCP no está disponible, usa notas mock con la misma forma de datos.
- La app extrae decisiones, tareas, responsables y un email de seguimiento.

UI:
- Header compacto con estado: Mock mode o Notion conectado.
- Formulario con página de Notion o notas pegadas.
- Panel "Fuente usada" que muestre qué tool MCP se llamó y qué volvió.
- Panel "Decisiones" con bullets claros.
- Panel "Tareas" con responsable, fecha sugerida y prioridad.
- Preview de email de seguimiento listo para copiar.

IA:
- Usa AI SDK para convertir las notas en resumen, tareas y email.
- No inventes datos. Si falta información, dilo.
- Incluye evidencia visible: título de la nota, fecha y fragmentos usados.

MCP:
- Deja preparada la conexión a Notion MCP.
- Encapsula las llamadas en una función server-side.
- Mantén un archivo de mock data para poder avanzar sin token.

Primera versión:
- No agregues login.
- No agregues base de datos.
- No agregues más de una integración.
- Prioriza que el demo se vea completo, sea entendible y pueda deployarse en Vercel.`

export function Track2StarterPromptSlide({ isActive }: SlideProps) {
  return (
    <SlideShell
      isActive={isActive}
      label="09 / Prompt inicial"
      title="Copia esto para empezar"
      intro="Este prompt usa Notion porque es fácil de entender: una nota entra, tareas y follow-up salen."
      maxWidth="max-w-5xl"
      compact
    >
      <div className="slide-animate p-4 sm:p-6 bg-neutral-900 border border-neutral-800 font-mono text-[11px] sm:text-xs md:text-sm overflow-x-auto">
        <pre className="text-neutral-300 whitespace-pre-wrap leading-relaxed max-h-[52vh] overflow-y-auto pr-2">{starterPrompt}</pre>
      </div>
    </SlideShell>
  )
}

export function Track2SetupMcpSlide({ isActive }: SlideProps) {
  const steps = [
    { title: "Empieza con mock", body: "Pega el starter prompt y pide que funcione sin credenciales primero." },
    { title: "Elige una fuente", body: "Notion o Airtable primero. Zapier si necesitas puente. Asana si ya usas tareas." },
    { title: "Pide la capa MCP", body: "Dile a v0: conecta esta fuente vía MCP y conserva fallback mock." },
    { title: "Muestra evidencia", body: "La pantalla debe mostrar fuente, tool usada, estado y dato devuelto." },
    { title: "Deploy temprano", body: "Sube a Vercel antes de pulir. El submission requiere URL deployada." },
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="10 / Setup en v0"
      title="Cómo empezar sin saber configurar todo"
      intro="No intentes conectar permisos en el primer minuto. Haz que la experiencia funcione con mock y luego reemplaza una fuente."
      maxWidth="max-w-5xl"
    >
      <div className="slide-animate grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {steps.map((step, index) => (
          <div key={step.title} className="p-4 border border-neutral-800 bg-neutral-950/50">
            <div className="font-mono text-neutral-600 text-xs mb-3">{String(index + 1).padStart(2, "0")}</div>
            <h3 className="text-white font-medium text-sm sm:text-base mb-2">{step.title}</h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
        <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Prompt útil</p>
        <p className="text-white text-sm sm:text-base">
          &quot;Agrega una integración MCP para Notion, pero si faltan credenciales mantén mock mode y muestra un mensaje claro en el UI.&quot;
        </p>
      </div>
    </SlideShell>
  )
}

const supportPrompt = `Construye una app Next.js llamada Support Answer Builder.

La app ayuda a una persona de soporte a convertir una pregunta de cliente en una respuesta clara con fuentes.

Objetivo:
- El usuario pega una pregunta de cliente.
- La app busca en una base de conocimiento usando MCP oficial de Notion o una fuente mock.
- Si no hay MCP configurado, usa 5 artículos mock con título, resumen, fecha y link.
- La app genera una respuesta breve, amable y con links de referencia.

UI:
- Formulario para pegar pregunta del cliente.
- Panel "Fuente consultada" con estado: mock, conectado o error.
- Lista de artículos encontrados con título y fragmento relevante.
- Respuesta sugerida lista para copiar.
- Checklist: ¿respondió la pregunta?, ¿incluyó fuente?, ¿evitó inventar?

IA:
- Usa AI SDK para redactar la respuesta.
- No inventes políticas ni precios. Si no hay fuente, dilo.
- Cita los artículos usados.

MCP:
- Deja preparada una función server-side para consultar Notion vía MCP.
- Mantén fallback mock con la misma forma de datos.

Primera versión:
- No agregues login.
- No envíes emails reales.
- No conectes más de una fuente.
- Prioriza que el demo sea claro, confiable y deployable en Vercel.`

export function Track2SupportPromptSlide({ isActive }: SlideProps) {
  return (
    <SlideShell
      isActive={isActive}
      label="11 / Segundo starter"
      title="Otra opción: soporte con base de conocimiento"
      intro="Si meetings no encaja contigo, este prompt usa Notion como base de conocimiento oficial: pregunta entra, fuentes salen, respuesta se prepara."
      maxWidth="max-w-5xl"
      compact
    >
      <div className="slide-animate p-4 sm:p-6 bg-neutral-900 border border-neutral-800 font-mono text-[11px] sm:text-xs md:text-sm overflow-x-auto">
        <pre className="text-neutral-300 whitespace-pre-wrap leading-relaxed max-h-[52vh] overflow-y-auto pr-2">{supportPrompt}</pre>
      </div>
    </SlideShell>
  )
}

export function Track2MockFirstSlide({ isActive }: SlideProps) {
  const mocks = [
    { item: "Respuesta de la tool", detail: "título, fecha, participantes, notas, links" },
    { item: "Estados de UI", detail: "cargando, conectado, error, sin datos, completado" },
    { item: "Resumen de IA", detail: "decisiones, tareas, responsables y follow-up" },
    { item: "Errores", detail: "token faltante, permiso denegado, página no encontrada" },
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="12 / Mocks primero"
      title="Mockea la forma del dato, no la idea"
      intro="El mock no es hacer trampa. Es definir qué espera el UI antes de pelear con tokens, permisos o servidores MCP."
    >
      <div className="slide-animate grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
        {mocks.map((mock, index) => (
          <div key={mock.item} className="p-5 border border-neutral-800 bg-neutral-950/50">
            <div className="font-mono text-neutral-600 text-xs mb-3">{String(index + 1).padStart(2, "0")}</div>
            <h3 className="text-white font-medium text-lg mb-2">{mock.item}</h3>
            <p className="text-neutral-500 text-sm">{mock.detail}</p>
          </div>
        ))}
      </div>

      <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
        <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Regla</p>
        <p className="text-white text-sm sm:text-base">
          Si el mock no hace una demo convincente, el MCP real tampoco va a salvar la idea.
        </p>
      </div>
    </SlideShell>
  )
}

export function Track2ToolEvidenceSlide({ isActive }: SlideProps) {
  const evidence = [
    "Nombre de la fuente consultada",
    "Input enviado",
    "Estado de conexión",
    "Resultado resumido",
    "Fuente o URL verificable",
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="13 / Evidencia"
      title="Haz visible la conexión"
      intro="Los asistentes deben poder señalar en pantalla: aquí la app consultó la herramienta, aquí volvió el dato y aquí la IA lo convirtió en decisión."
      maxWidth="max-w-4xl"
    >
      <div className="slide-animate p-5 sm:p-6 border border-neutral-800 bg-neutral-950/50 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {evidence.map((item, index) => (
            <div key={item} className="border border-neutral-800 p-3 min-h-24">
              <div className="font-mono text-neutral-600 text-xs mb-3">{String(index + 1).padStart(2, "0")}</div>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="slide-animate p-4 sm:p-6 border-l-2 border-neutral-700 bg-neutral-900/30">
        <p className="text-white text-sm sm:text-base">
          Tu demo debe responder: &quot;¿Qué sabe la app ahora que no sabía antes de consultar Notion, Airtable, Zapier o Asana?&quot;
        </p>
      </div>
    </SlideShell>
  )
}

export function Track2MvpChecklistSlide({ isActive }: SlideProps) {
  const checklist = [
    "Pantalla principal completa y responsive",
    "Input claro para disparar la revisión",
    "Una tool MCP real o fallback mock con contrato igual",
    "Panel visible de tool call y resultado",
    "Resumen de IA con fuentes o evidencia",
    "Estado de error entendible",
    "Deploy funcional en Vercel",
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="14 / Mínimo viable"
      title="Lo mínimo para enviar"
      intro="No estás entregando infraestructura perfecta. Estás entregando una experiencia completa que prueba cómo sería una app conectada."
      maxWidth="max-w-4xl"
    >
      <div className="slide-animate space-y-3">
        {checklist.map((item, index) => (
          <div key={item} className="flex items-start gap-3">
            <StepNumber value={index + 1} />
            <span className="text-neutral-300 text-sm sm:text-base">{item}</span>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}

export function Track2IterateWithV0Slide({ isActive }: SlideProps) {
  const prompts = [
    "Haz que el panel de herramientas muestre input, output y errores.",
    "Agrega modo mock si falta credencial de la herramienta o si MCP falla.",
    "Reduce el resumen a tres bullets y una acción recomendada.",
    "Haz que el usuario pueda copiar el checklist final.",
    "Agrega estados vacíos y de error para una demo en vivo.",
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="15 / Iterar con v0"
      title="Pídele cambios pequeños y verificables"
      intro="v0 funciona mejor cuando cada pedido tiene una intención clara. Evita: 'hazlo más pro'. Usa pedidos que cambien una parte concreta del demo."
    >
      <div className="slide-animate space-y-3">
        {prompts.map((prompt, index) => (
          <div key={prompt} className="flex items-start gap-3 p-4 border border-neutral-800 bg-neutral-950/50">
            <StepNumber value={index + 1} />
            <p className="text-neutral-300 text-sm sm:text-base">&quot;{prompt}&quot;</p>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}

export function Track2AddMcpSlide({ isActive }: SlideProps) {
  const sequence = [
    { title: "Primero UI", body: "Construye la experiencia con mock data." },
    { title: "Luego contrato", body: "Define qué datos debe devolver Notion, Airtable, Zapier o Asana." },
    { title: "Después MCP", body: "Reemplaza el mock por una fuente oficial." },
    { title: "Finalmente IA", body: "Resume, prioriza y explica con evidencia." },
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="16 / Orden de trabajo"
      title="Conecta MCP después de ver el demo"
      intro="Si conectas primero, puedes perder tiempo en credenciales. Si el demo ya funciona con mock, sabes exactamente qué integración necesitas."
    >
      <div className="slide-animate grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {sequence.map((item, index) => (
          <div key={item.title} className="p-5 border border-neutral-800 bg-neutral-950/50">
            <div className="font-mono text-neutral-600 text-xs mb-4">{String(index + 1).padStart(2, "0")}</div>
            <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
        <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Prompt</p>
        <p className="text-white text-sm sm:text-base">
          &quot;Ahora reemplaza el mock por una función server-side que use MCP. Conserva el fallback mock y muestra errores en el UI.&quot;
        </p>
      </div>
    </SlideShell>
  )
}

export function Track2MistakesSlide({ isActive }: SlideProps) {
  const mistakes = [
    { mistake: "Pedir cinco MCPs desde el primer prompt", fix: "Usa una sola integración" },
    { mistake: "Usar un MCP difícil de autorizar en vivo", fix: "Empieza con Notion o Airtable" },
    { mistake: "No mostrar qué fuente se consultó", fix: "Agrega panel de evidencia" },
    { mistake: "Dejar que la IA invente datos faltantes", fix: "Obliga a decir 'no disponible'" },
    { mistake: "Romper el demo si falta token", fix: "Mantén fallback mock" },
    { mistake: "Conectar acciones peligrosas", fix: "Empieza con lectura o borradores" },
    { mistake: "Hacer una demo para desarrolladores", fix: "Explica valor en lenguaje de usuario" },
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="17 / Errores comunes"
      title="Lo que más rompe demos MCP"
      intro="La mayoría de fallas no son técnicas. Son de alcance, claridad o confianza."
      maxWidth="max-w-5xl"
      compact
    >
      <div className="slide-animate grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {mistakes.map((item, index) => (
          <div key={item.mistake} className="p-4 border border-neutral-800 bg-neutral-950/50">
            <div className="flex items-start gap-3 mb-3">
              <StepNumber value={index + 1} />
              <span className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{item.mistake}</span>
            </div>
            <div className="pl-9">
              <span className="text-white text-xs sm:text-sm leading-relaxed">{item.fix}</span>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}

export function Track2StuckSlide({ isActive }: SlideProps) {
  const recovery = [
    { stuck: "No entiendo MCP", move: "Dilo como fuente: leer Notion, consultar Airtable o crear una acción con Zapier." },
    { stuck: "La conexión falla", move: "Vuelve a mock mode y muestra el contrato esperado." },
    { stuck: "v0 cambió demasiado", move: "Pide revertir solo el último cambio o pega el componente anterior." },
    { stuck: "La app no deploya", move: "Quita integraciones extras, deja una ruta principal y revisa variables." },
    { stuck: "El output es flojo", move: "Dale ejemplos buenos y malos al prompt de resumen." },
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="18 / Cuando te trabes"
      title="Recupera reduciendo el problema"
      intro="No intentes arreglar todo a la vez. Decide si el bloqueo es UI, datos, credenciales, IA o deploy."
    >
      <div className="slide-animate space-y-3">
        {recovery.map((item, index) => (
          <div key={item.stuck} className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-3 p-4 border border-neutral-800 bg-neutral-950/50">
            <div className="flex items-start gap-3">
              <StepNumber value={index + 1} />
              <p className="text-neutral-500 text-sm">{item.stuck}</p>
            </div>
            <p className="text-white text-sm sm:text-base md:border-l md:border-neutral-800 md:pl-4">{item.move}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}

export function Track2DemoScriptSlide({ isActive }: SlideProps) {
  const script = [
    "Esta app convierte una fuente cotidiana en una acción clara.",
    "Pego una nota, pregunta o lista y la app consulta una fuente vía MCP.",
    "Aquí se ve la fuente usada y el dato que volvió.",
    "La IA resume el estado sin inventar fuentes.",
    "Termina con un follow-up, respuesta o checklist que puedo usar ahora.",
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="19 / Demo en 60 segundos"
      title="Cuenta una historia simple"
      intro="La audiencia debe entender el antes, la conexión y el resultado sin mirar código."
      maxWidth="max-w-4xl"
    >
      <div className="slide-animate space-y-3 mb-8">
        {script.map((line, index) => (
          <div key={line} className="flex items-start gap-3 p-4 border border-neutral-800 bg-neutral-950/50">
            <StepNumber value={index + 1} />
            <span className="text-neutral-300 text-sm sm:text-base">{line}</span>
          </div>
        ))}
      </div>

      <div className="slide-animate p-4 sm:p-6 border-l-2 border-neutral-700 bg-neutral-900/30">
        <p className="text-white text-sm sm:text-base">
          No digas &quot;usa MCP&quot; primero. Di qué problema resuelve y luego muestra la conexión.
        </p>
      </div>
    </SlideShell>
  )
}

export function Track2SubmissionSlide({ isActive }: SlideProps) {
  const submit = [
    "URL deployada en Vercel",
    "Nombre y descripción corta",
    "Qué fuente cotidiana usa",
    "Qué dato externo consulta",
    "Qué output útil entrega",
    "Qué harías después del evento",
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="20 / Entrega"
      title="Checklist final de submission"
      intro="Tu entrega debe dejar claro que no es solo una pantalla. Es una app que se conecta, razona con datos y produce algo accionable."
      maxWidth="max-w-4xl"
    >
      <div className="slide-animate grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {submit.map((item, index) => (
          <div key={item} className="flex items-start gap-3 p-4 border border-neutral-800 bg-neutral-950/50">
            <StepNumber value={index + 1} />
            <span className="text-neutral-300 text-sm sm:text-base">{item}</span>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}

export function Track2RecapSlide({ isActive }: SlideProps) {
  const recap = [
    "v0 convierte tu intención en una app Next.js.",
    "MCP le da acceso a herramientas oficiales como Notion, Airtable, Zapier o Asana.",
    "Mocks te permiten avanzar antes de tener permisos.",
    "Una demo buena enseña tool, evidencia y resultado.",
  ]

  return (
    <SlideShell
      isActive={isActive}
      label="21 / Recap"
      title="Construye algo conectado, pequeño y claro"
      intro="El mejor proyecto de este track no será el más grande. Será el que haga una cosa real, visible y fácil de entender."
      maxWidth="max-w-4xl"
    >
      <div className="slide-animate space-y-4 mb-8">
        {recap.map((item, index) => (
          <div key={item} className="flex items-start gap-4">
            <span className="text-neutral-600 font-mono text-sm">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-neutral-300 text-base sm:text-lg">{item}</span>
          </div>
        ))}
      </div>

      <div className="slide-animate p-5 sm:p-6 border border-white bg-white text-black">
        <p className="font-medium text-sm sm:text-base">
          Abre v0.app, pega el starter prompt, y mantén la primera versión pequeña hasta que puedas explicarla en una sola frase.
        </p>
      </div>
    </SlideShell>
  )
}

export const track2Slides = [
  Track2TitleSlide,
  Track2ProblemSlide,
  Track2PlainMcpSlide,
  Track2V0VsMcpSlide,
  Track2EverydayMcpSlide,
  Track2UsefulAppSlide,
  Track2ArchitectureSlide,
  Track2RecipesSlide,
  Track2PickScopeSlide,
  Track2StarterPromptSlide,
  Track2SetupMcpSlide,
  Track2SupportPromptSlide,
  Track2MockFirstSlide,
  Track2ToolEvidenceSlide,
  Track2MvpChecklistSlide,
  Track2IterateWithV0Slide,
  Track2AddMcpSlide,
  Track2MistakesSlide,
  Track2StuckSlide,
  Track2DemoScriptSlide,
  Track2SubmissionSlide,
  Track2RecapSlide,
]
