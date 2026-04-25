interface SlideProps {
  isActive: boolean
}

const timeline = [
  { status: "Iniciado", active: false },
  { status: "Investigando", active: false },
  { status: "Redactando", active: false },
  { status: "Esperando aprobación", active: true },
  { status: "Enviado", active: false },
  { status: "Completado", active: false },
]

const questions = [
  "¿Qué inició la ejecución?",
  "¿Qué paso se está ejecutando?",
  "¿Qué falló?",
  "¿Qué se reintentó?",
  "¿Qué generó el agente?",
  "¿Qué espera a una persona?",
]

export function Track1ObservabilitySlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            06 / Observabilidad
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">
          Si no se ve, no se confía
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          La guía de hosts menciona streaming, reintentos y observabilidad. Para un demo, eso significa que el usuario puede ver qué pasó, qué falta y por qué el agente está esperando.
        </p>

        {/* Timeline visualization */}
        <div className="slide-animate mb-8 sm:mb-10 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-3 py-1.5 text-xs sm:text-sm ${
                  item.active 
                    ? "bg-white text-black" 
                    : "bg-neutral-800 text-neutral-400"
                }`}>
                  {item.status}
                </div>
                {index < timeline.length - 1 && (
                  <span className="text-neutral-600 mx-1">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Questions grid */}
        <div className="slide-animate grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8 sm:mb-10">
          {questions.map((question, index) => (
            <div key={index} className="p-3 border border-neutral-800 text-neutral-400 text-sm">
              {question}
            </div>
          ))}
        </div>

        {/* Builder action */}
        <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Acción</p>
          <p className="text-white text-sm sm:text-base">
            Pídele a v0 una línea de tiempo visible: iniciado, procesando, esperando aprobación, reintentando, completado.
          </p>
        </div>
      </div>
    </section>
  )
}
