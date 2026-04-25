interface SlideProps {
  isActive: boolean
}

const promptParts = [
  {
    label: "Contexto",
    text: "App Next.js para [usuario] que necesita [trabajo]. Convierte [input] en [output final].",
  },
  {
    label: "Workflow",
    text: "Usa Vercel Workflow / WDK con 3-5 pasos. Incluye un paso que espera, reintenta o pide aprobación.",
  },
  {
    label: "UI",
    text: "Formulario inicial, línea de tiempo, borrador/resultado, acciones humanas y output final.",
  },
  {
    label: "Alcance",
    text: "Usa datos mock. Mantén la versión simple, visible y lista para deploy en Vercel.",
  },
]

const technicalCues = [
  "Workflow SDK",
  "withWorkflow",
  "\"use workflow\"",
  "\"use step\"",
  "Vercel AI Gateway",
]

export function Track1PromptV0Slide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-14 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-3 sm:mb-4">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            10 / Cómo Promptear v0
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4">
          El prompt que sí ayuda a v0
        </h2>

        <p className="slide-animate text-neutral-400 text-sm sm:text-base max-w-2xl mb-5 sm:mb-6 leading-relaxed">
          Dale a v0 el contexto del producto y la pista técnica de WDK. No empieces con &quot;constrúyeme un agente de IA&quot;.
        </p>

        <div className="slide-animate grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-4 sm:gap-5 mb-5 sm:mb-6">
          {/* Prompt template */}
          <div className="grid sm:grid-cols-2 gap-3">
            {promptParts.map((part, index) => (
              <div key={part.label} className="p-4 sm:p-5 bg-neutral-900 border border-neutral-800">
                <div className="font-mono text-neutral-600 text-xs mb-2">
                  {String(index + 1).padStart(2, "0")} / {part.label}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">{part.text}</p>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-5 border border-neutral-800 bg-neutral-950/50">
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Pistas técnicas</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {technicalCues.map((cue) => (
                <span key={cue} className="px-2 py-1 bg-neutral-900 text-neutral-400 font-mono text-xs border border-neutral-800">
                  {cue}
                </span>
              ))}
            </div>
            <p className="text-white text-sm leading-relaxed">
              No tienes que entender cada término. Inclúyelos para que v0 apunte al track correcto.
            </p>
          </div>
        </div>

        {/* Speaker note */}
        <div className="slide-animate p-3 sm:p-4 border-l-2 border-neutral-700 bg-neutral-900/30">
          <p className="text-neutral-500 text-sm italic">
            &quot;Mientras mejor describas el proceso, mejor podrá ayudarte v0.&quot;
          </p>
        </div>

        {/* Builder action */}
        <div className="slide-animate mt-4 p-4 sm:p-5 border border-neutral-800 bg-neutral-900/50">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Acción</p>
          <p className="text-white text-sm">
            Llena las secciones entre corchetes. En la siguiente slide tienes un prompt completo para copiar si quieres empezar más rápido.
          </p>
        </div>
      </div>
    </section>
  )
}
