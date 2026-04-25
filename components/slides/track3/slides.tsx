"use client"

import { GeistPixelSquare } from "geist/font/pixel"
import type { ReactNode } from "react"

interface SlideProps {
  isActive: boolean
}

const shell = (isActive: boolean, extra = "") =>
  `absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 ${
    isActive ? "pointer-events-auto" : "pointer-events-none"
  } ${extra}`

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="slide-animate mb-4 sm:mb-6">
      <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  )
}

const starterPrompt = `Construye una app Next.js llamada Event Chat Agent.

Objetivo:
Un agente que ayuda a responder preguntas repetidas de un evento, comunidad o equipo. La primera version NO conecta plataformas reales: usa un simulador visual de chat para probar el flujo completo.

Stack:
- Next.js en Vercel
- Chat SDK como modelo mental: eventos, handlers, adapters y state.
- Vercel AI SDK para razonar y generar respuestas con streaming.
- Vercel AI Gateway como siguiente paso si quiero cambiar de modelo/proveedor.

Comportamiento:
1. Crear un simulador con tabs: Evento, Comunidad y Soporte.
2. Cada tab debe disparar el mismo handler "onNewMention".
3. El handler recibe plataforma, usuario, thread, mensaje y contexto mock.
4. Usar streaming visual para mostrar que el agente esta trabajando.
5. Renderizar una tarjeta con:
   - respuesta corta
   - enlaces sugeridos
   - nivel de confianza
   - boton "Necesita humano"
6. Guardar estado visible: plataforma, usuario, pregunta, estado y resultado.

Mocks primero:
- Usa datos mock de FAQ, agenda, ubicacion, reglas, contactos y tickets.
- Muestra logs de eventos: mention, handler, stream, saved state, human escalation.
- Incluye un panel "Adapter futuro" que diga: Slack, Discord, Teams o Telegram se conectan despues.

UI:
- Panel izquierdo: simulador de mensajes por canal.
- Panel central: conversacion del agente con streaming.
- Panel derecho: estado del agente y tarjeta generada.
- Botones: enviar pregunta, simular pregunta repetida, pedir humano, marcar como resuelto.

Demo minimo:
- Una pregunta entra desde el canal Evento.
- La misma logica responde desde Comunidad o Soporte sin duplicar codigo.
- Se ve el streaming, la tarjeta, el estado guardado y el resumen final.
- No requiere cuentas externas ni permisos de admin.
- La app se puede deployar en Vercel.

Mantén la version pequena, visual y lista para explicar en 2 minutos.`

const platformProblems = [
  "Cada plataforma tiene permisos, eventos y formatos distintos.",
  "Slack o Teams pueden requerir admin del workspace.",
  "GitHub y Linear son utiles, pero mas orientados a equipos tecnicos.",
  "Si conectas cuentas reales demasiado pronto, puedes perder la demo.",
  "El usuario espera una respuesta consistente, no cuatro bots diferentes.",
]

const plainPoints = [
  "Tu escribes la logica del bot una vez.",
  "Un adapter traduce cada plataforma a eventos comunes.",
  "El state guarda contexto entre threads, usuarios y canales.",
  "Los handlers deciden que hacer cuando hay mention, mensaje o reaction.",
  "La respuesta puede ser texto, streaming o una tarjeta JSX.",
]

const roleCards = [
  {
    title: "Chat SDK",
    text: "Recibe eventos de plataformas de chat y los convierte en handlers comunes para tu agente.",
  },
  {
    title: "AI SDK",
    text: "Hace que el agente piense, clasifique, resuma y escriba respuestas con modelos de IA.",
  },
  {
    title: "AI Gateway",
    text: "Permite usar varios proveedores/modelos desde un solo punto, sin rearmar la app.",
  },
]

const fitSignals = [
  "La conversacion empieza donde la gente ya trabaja.",
  "El agente debe recordar contexto de un thread o canal.",
  "Hay eventos: preguntas, respuestas, reacciones, turnos o solicitudes.",
  "La respuesta mejora si combina IA con datos del equipo.",
  "Quieres deployar una sola logica a varias plataformas.",
]

const recipes = [
  {
    title: "Event concierge",
    platform: "Simulador primero",
    trigger: "Pregunta sobre agenda, lugar o reglas",
    output: "Respuesta, links y contacto correcto",
  },
  {
    title: "Community helper",
    platform: "Simulador + Slack despues",
    trigger: "Mention o pregunta repetida",
    output: "Respuesta, links y escalamiento humano",
  },
  {
    title: "Volunteer coordinator",
    platform: "Simulador + WhatsApp/Telegram despues",
    trigger: "Alguien pide ayuda o turno",
    output: "Prioridad, responsable y siguiente paso",
  },
  {
    title: "Support router",
    platform: "Simulador + Teams despues",
    trigger: "Pregunta que necesita clasificacion",
    output: "Categoria, respuesta sugerida y escalar si falta contexto",
  },
]

const firstBuild = [
  "Un simulador de plataforma dentro de la app.",
  "Un solo handler: onNewMention.",
  "Tres mensajes mock que prueben casos diferentes.",
  "Una respuesta con streaming visible.",
  "Un panel de estado: plataforma, thread, usuario, paso actual.",
]

const mocks = [
  { real: "OAuth de Slack, Teams o Discord", mock: "Selector de canal + usuario fake" },
  { real: "Webhooks reales", mock: "Botones que disparan eventos" },
  { real: "Base de datos", mock: "JSON local con threads y FAQ" },
  { real: "Permisos", mock: "Estados: permitido, privado, requiere humano" },
  { real: "Adapter real", mock: "Logs que muestran que handler se ejecuta" },
]

const checklist = [
  "Se entiende que entra un evento de chat.",
  "El mismo handler funciona para dos plataformas simuladas.",
  "Hay streaming o indicador claro de pensamiento.",
  "La respuesta final aparece como mensaje o tarjeta.",
  "El estado muestra plataforma, usuario, thread y resultado.",
  "Hay un camino de escalamiento humano.",
  "La demo esta deployada y se puede recorrer sin cuentas externas.",
]

const mistakes = [
  { mistake: "Conectar plataformas reales antes de tener una demo", fix: "Simula eventos primero" },
  { mistake: "Hacer un bot que solo responde texto generico", fix: "Muestra estado, tarjeta y proximo paso" },
  { mistake: "Crear logica separada por canal", fix: "Un handler, adapters separados" },
  { mistake: "Prometer acciones sensibles sin revision", fix: "Agregar 'Necesita humano'" },
  { mistake: "Ocultar errores de permisos o rate limits", fix: "Muestra fallback claro" },
  { mistake: "Usar muchos modelos desde el codigo", fix: "Centraliza con AI Gateway" },
]

const stuckSteps = [
  "Reduce a un canal simulado.",
  "Cambia streaming por respuesta fija.",
  "Quita integraciones reales y deja logs visibles.",
  "Pide a v0 que haga solo el UI del simulador.",
  "Pide al coding agent que conecte un handler a la vez.",
]

const setupPaths = [
  {
    title: "Nivel 1",
    label: "Simulador",
    detail: "No requiere cuentas externas. Ideal para empezar y para presentar.",
  },
  {
    title: "Nivel 2",
    label: "Discord / Telegram",
    detail: "Puede ser viable si ya sabes crear un bot y tienes tu propio servidor.",
  },
  {
    title: "Nivel 3",
    label: "Slack / Teams",
    detail: "Bueno para empresas, pero puede requerir admin, scopes y aprobaciones.",
  },
  {
    title: "Nivel 4",
    label: "GitHub / Linear",
    detail: "Potente, pero mas tecnico. Usalo si tu proyecto es para equipos dev.",
  },
]

export function Track3TitleSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-4xl mx-auto w-full">
        <div className="slide-animate mb-6 sm:mb-8">
          <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            Track 03
          </span>
        </div>

        <h1 className="slide-animate text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-none mb-4">
          ChatSDK
        </h1>
        <h2 className={`slide-animate ${GeistPixelSquare.className} text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-muted-foreground leading-none mb-8 sm:mb-10`}>
          Agents
        </h2>

        <p className="slide-animate text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-8 sm:mb-12">
          Construye un agente que entiende eventos de chat, responde con contexto y puede moverse despues a Slack, Discord, Teams, Telegram o GitHub.
        </p>

        <div className="slide-animate">
          <p className="text-muted-foreground text-sm sm:text-base border-l-2 border-border pl-4">
            En palabras simples: primero simulas la conversacion, luego conectas un adapter real cuando el flujo ya funciona.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Track3ProblemSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-4xl mx-auto w-full">
        <SectionLabel>01 / El problema</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Los bots se fragmentan por plataforma
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-12 leading-relaxed">
          Muchas ideas empiezan como &quot;hagamos un bot&quot;. El problema aparece cuando intentas configurar plataformas reales antes de probar si el agente ayuda.
        </p>

        <div className="slide-animate space-y-3 sm:space-y-4">
          {platformProblems.map((problem) => (
            <div key={problem} className="flex items-center gap-3 sm:gap-4">
              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full flex-shrink-0" />
              <span className="text-foreground/85 text-sm sm:text-base">{problem}</span>
            </div>
          ))}
        </div>

        <div className="slide-animate mt-10 sm:mt-14 p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Accion</p>
          <p className="text-foreground text-sm sm:text-base">
            Elige una conversacion repetida y pruebala primero en un simulador.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Track3PlainLanguageSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-4xl mx-auto w-full">
        <SectionLabel>02 / Modelo mental</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          ChatSDK es una capa comun para agentes de chat
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          No pienses en &quot;un bot de una app&quot;. Piensa en un agente con eventos, memoria y respuestas que despues puede conectarse a varias plataformas.
        </p>

        <div className="slide-animate space-y-3">
          {plainPoints.map((point, index) => (
            <div key={point} className="flex items-start gap-3">
              <span className="text-muted-foreground font-mono text-xs mt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground/85 text-sm sm:text-base">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Track3FlowSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-5xl mx-auto w-full">
        <SectionLabel>03 / Como fluye</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          El agente empieza con un evento
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          Para una demo, ensena el camino completo: evento, handler, IA, estado y respuesta.
        </p>

        <div className="slide-animate overflow-x-auto mb-8 sm:mb-10">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm min-w-max">
            <span className="px-3 py-1.5 bg-muted text-foreground/85">Mention</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">Adapter</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-foreground text-background">Handler</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">AI SDK</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">State</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">Reply/Card</span>
          </div>
        </div>

        <div className="slide-animate p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Frase para explicar</p>
          <p className="text-foreground text-sm sm:text-base">
            &quot;Lo importante no es el chat. Lo importante es que cualquier plataforma dispara la misma logica del agente.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}

export function Track3StackSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive, "overflow-y-auto py-16 sm:py-0")}>
      <div className="max-w-6xl mx-auto w-full">
        <SectionLabel>04 / Stack</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Que hace cada pieza
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          ChatSDK no reemplaza al modelo. Organiza los eventos de chat para que puedas usar IA sin escribir cuatro bots.
        </p>

        <div className="slide-animate grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {roleCards.map((card, index) => (
            <div
              key={card.title}
              className={`p-5 sm:p-6 border ${
                index === 0 ? "border-foreground bg-foreground/5" : "border-border bg-background/50"
              }`}
            >
              <div className="font-mono text-muted-foreground text-xs mb-3">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-foreground font-medium text-lg sm:text-xl mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Track3QuickStartSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-6xl mx-auto w-full">
        <SectionLabel>05 / Camino recomendado</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Empieza por el nivel que puedas demoear
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          Para una persona no tecnica, la mejor primera version es un simulador. Las plataformas reales son bonus, no requisito para entender el track.
        </p>

        <div className="slide-animate grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {setupPaths.map((path, index) => (
            <div
              key={path.title}
              className={`p-4 sm:p-5 border ${
                index === 0 ? "border-foreground bg-foreground/5" : "border-border bg-background/50"
              }`}
            >
              <p className="font-mono text-muted-foreground text-xs mb-3">{path.title}</p>
              <h3 className="text-foreground font-medium text-lg mb-2">{path.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{path.detail}</p>
            </div>
          ))}
        </div>

        <div className="slide-animate p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-foreground text-sm sm:text-base">
            Recomendacion para el evento: entrega Nivel 1 muy claro. Si sobra tiempo, conecta un adapter real.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Track3UseCasesSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-4xl mx-auto w-full">
        <SectionLabel>06 / Buenos casos</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Cuando vale la pena usar ChatSDK
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          Un buen proyecto no es &quot;IA en chat&quot;. Es una conversacion repetida donde el agente puede ahorrar pasos.
        </p>

        <div className="slide-animate space-y-3">
          {fitSignals.map((signal, index) => (
            <div key={signal} className="flex items-start gap-3">
              <span className="w-6 h-6 border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-muted-foreground font-mono text-xs">{index + 1}</span>
              </span>
              <span className="text-foreground/85 text-sm sm:text-base">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Track3RecipesSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive, "overflow-y-auto py-16 sm:py-0")}>
      <div className="max-w-6xl mx-auto w-full">
        <SectionLabel>07 / Recetas seguras</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Si estas empezando, elige una receta
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          Estas ideas son faciles de demo porque pueden funcionar con simulador y datos mock antes de pedir permisos reales.
        </p>

        <div className="slide-animate grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.title}
              className={`p-5 sm:p-6 border ${
                index === 0 ? "border-foreground bg-foreground/5" : "border-border bg-background/50"
              }`}
            >
              <div className="font-mono text-muted-foreground text-xs mb-3">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-foreground font-medium text-lg sm:text-xl mb-4">{recipe.title}</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <p><span className="text-muted-foreground">Plataformas:</span> <span className="text-foreground/85">{recipe.platform}</span></p>
                <p><span className="text-muted-foreground">Trigger:</span> <span className="text-foreground/85">{recipe.trigger}</span></p>
                <p><span className="text-muted-foreground">Output:</span> <span className="text-foreground/85">{recipe.output}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Track3BuildFirstSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-4xl mx-auto w-full">
        <SectionLabel>08 / Primer build</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Construye primero la historia visible
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          La demo debe probar el comportamiento antes de conectar cuentas reales.
        </p>

        <div className="slide-animate space-y-3">
          {firstBuild.map((item, index) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-muted-foreground font-mono text-xs mt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground/85 text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>

        <div className="slide-animate mt-8 sm:mt-10 p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Regla</p>
        <p className="text-foreground text-sm sm:text-base">
            Si no se puede explicar con datos mock, conectarlo a una plataforma real no lo arregla.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Track3StarterPromptSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive, "overflow-y-auto py-16 sm:py-0")}>
      <div className="max-w-5xl mx-auto w-full">
        <SectionLabel>09 / Prompt inicial</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Copia esto para empezar ya
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-5 sm:mb-6 leading-relaxed">
          Pidele primero una demo simulada. Luego cambias mocks por adapters reales si tienes permisos y tiempo.
        </p>

        <div className="slide-animate p-4 sm:p-6 bg-secondary border border-border font-mono text-[11px] sm:text-xs md:text-sm overflow-x-auto">
          <pre className="text-foreground/85 whitespace-pre-wrap leading-relaxed max-h-[56vh] overflow-y-auto pr-2">{starterPrompt}</pre>
        </div>
      </div>
    </section>
  )
}

export function Track3MockFirstSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive, "overflow-y-auto py-16 sm:py-0")}>
      <div className="max-w-5xl mx-auto w-full">
        <SectionLabel>10 / Mock primero</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Que simular antes de integrar
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          El objetivo del evento es demostrar criterio y flujo, no pelearse con permisos.
        </p>

        <div className="slide-animate grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {mocks.map((item, index) => (
            <div key={item.real} className="p-4 border border-border bg-background/50">
              <div className="font-mono text-muted-foreground text-xs mb-3">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Real despues</p>
              <p className="text-foreground/85 text-sm mb-3">{item.real}</p>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Mock ahora</p>
              <p className="text-foreground text-sm">{item.mock}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Track3MvdChecklistSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive, "overflow-y-auto py-16 sm:py-0")}>
      <div className="max-w-4xl mx-auto w-full">
        <SectionLabel>11 / Demo minima</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Minimum viable demo
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          Lo minimo no es poco. Es una historia completa que cualquiera puede entender.
        </p>

        <div className="slide-animate space-y-3">
          {checklist.map((item, index) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-6 h-6 border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-muted-foreground font-mono text-xs">{index + 1}</span>
              </div>
              <span className="text-foreground/85 text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Track3DemoScriptSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-4xl mx-auto w-full">
        <SectionLabel>12 / Como presentarlo</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Tu demo debe sonar simple
        </h2>

        <div className="slide-animate p-5 sm:p-7 border border-foreground bg-foreground/5 mb-6 sm:mb-8">
          <p className="text-foreground text-lg sm:text-xl leading-relaxed">
            &quot;Una pregunta entra desde un canal simulado. ChatSDK la modela como evento comun. El handler usa IA, guarda estado y responde con una tarjeta. Luego repito el flujo desde otro canal sin cambiar la logica.&quot;
          </p>
        </div>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
          No expliques toda la arquitectura. Muestra que el agente funciona igual en dos canales y que hay un plan claro para conectar adapters reales.
        </p>
      </div>
    </section>
  )
}

export function Track3MistakesSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive, "overflow-y-auto py-14 sm:py-0")}>
      <div className="max-w-5xl mx-auto w-full">
        <SectionLabel>13 / Errores comunes</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-3 sm:mb-4">
          Problemas que puedes evitar
        </h2>

        <p className="slide-animate text-muted-foreground text-sm sm:text-base max-w-2xl mb-5 sm:mb-6 leading-relaxed">
          La mayoria de demos fallan por integraciones prematuras o por no mostrar el estado del agente.
        </p>

        <div className="slide-animate grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {mistakes.map((item, index) => (
            <div key={item.mistake} className="p-4 border border-border bg-background/50">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-6 h-6 border border-border flex items-center justify-center text-muted-foreground font-mono text-xs flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.mistake}</span>
              </div>
              <div className="pl-9">
                <span className="text-foreground text-xs sm:text-sm leading-relaxed">{item.fix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Track3StuckSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-4xl mx-auto w-full">
        <SectionLabel>14 / Si te bloqueas</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Recupera reduciendo superficie
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          Cuando algo no funciona, no cambies toda la idea. Quita integracion hasta que el flujo vuelva a verse.
        </p>

        <div className="slide-animate space-y-3">
          {stuckSteps.map((step, index) => (
            <div key={step} className="flex items-start gap-3">
              <span className="text-muted-foreground font-mono text-xs mt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground/85 text-sm sm:text-base">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Track3PromptingSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-4xl mx-auto w-full">
        <SectionLabel>15 / Como pedir ayuda</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Divide el pedido por responsabilidades
        </h2>

        <div className="slide-animate grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
          <div className="p-5 sm:p-6 border border-foreground bg-foreground/5">
            <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3">Para v0</p>
            <p className="text-foreground text-sm sm:text-base leading-relaxed">
              &quot;Haz un simulador visual de canales con timeline de eventos, streaming y panel de estado.&quot;
            </p>
          </div>
          <div className="p-5 sm:p-6 border border-border bg-background/50">
            <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3">Para coding agent</p>
            <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">
              &quot;Conecta onNewMention a la funcion de IA y guarda platform, threadId, userId y result en state.&quot;
            </p>
          </div>
        </div>

        <div className="slide-animate p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-foreground text-sm sm:text-base">
            Pide UI y comportamiento por separado. Asi puedes avanzar aunque una integracion todavia no este lista.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Track3ResourcesSlide({ isActive }: SlideProps) {
  const resources = [
    "chat-sdk.dev",
    "github.com/vercel/chat",
    "Launch blog",
    "Knowledge Agent template",
    "Community Agent template",
  ]

  return (
    <section className={shell(isActive)}>
      <div className="max-w-4xl mx-auto w-full">
        <SectionLabel>16 / Recursos</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Donde mirar cuando avances
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          Usa estos recursos para pasar de simulador a integracion real.
        </p>

        <div className="slide-animate space-y-3 sm:space-y-4">
          {resources.map((resource, index) => (
            <div key={resource} className="flex items-center justify-between gap-4 border-b border-border pb-3">
              <span className="text-foreground/85 text-sm sm:text-base">{resource}</span>
              <span className="text-muted-foreground font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Track3ArchitectureRecapSlide({ isActive }: SlideProps) {
  return (
    <section className={shell(isActive)}>
      <div className="max-w-5xl mx-auto w-full">
        <SectionLabel>17 / Recap tecnico</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          La arquitectura que debes recordar
        </h2>

        <div className="slide-animate overflow-x-auto mb-8 sm:mb-10">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm min-w-max">
            <span className="px-3 py-1.5 bg-muted text-foreground/85">Adapters</span>
            <span className="text-muted-foreground">+</span>
            <span className="px-3 py-1.5 bg-foreground text-background">Chat handlers</span>
            <span className="text-muted-foreground">+</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">State</span>
            <span className="text-muted-foreground">+</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">AI SDK</span>
            <span className="text-muted-foreground">+</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">AI Gateway</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">Vercel</span>
          </div>
        </div>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
          Para el evento, no tienes que terminar todos los adapters. Tienes que demostrar que tu logica esta lista para moverse entre plataformas.
        </p>
      </div>
    </section>
  )
}

export function Track3RecapSlide({ isActive }: SlideProps) {
  const recap = [
    "Problema claro: una conversacion repetida en varias plataformas.",
    "Demo clara: evento, handler, IA, state y respuesta.",
    "Mocks primero: plataformas simuladas y datos locales.",
    "Escalamiento humano: siempre que haya riesgo o baja confianza.",
    "Deploy final: URL en Vercel y explicacion en 2 minutos.",
  ]

  return (
    <section className={shell(isActive)}>
      <div className="max-w-4xl mx-auto w-full">
        <SectionLabel>18 / Entrega</SectionLabel>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Que entregar al final
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          Tu proyecto no se juzga por cuantas plataformas reales conectaste. Se juzga por si el agente resuelve una conversacion concreta.
        </p>

        <div className="slide-animate space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          {recap.map((item, index) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-muted-foreground font-mono text-xs mt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground/85 text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>

        <div className="slide-animate p-4 sm:p-6 border-l-2 border-foreground bg-secondary/30">
          <p className="text-foreground text-sm sm:text-base">
            Practica: &quot;Este agente recibe eventos de chat, usa IA para decidir, guarda contexto y responde en mas de una plataforma.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
