interface SlideProps {
  isActive: boolean
}

const beginnerIdeas = [
  { title: "Onboarding de clientes", desc: "Intake → resumen → preguntas faltantes → plan de siguientes pasos" },
  { title: "Aplicación a grants", desc: "Requisitos → borrador → verificación de evidencia → revisión humana" },
  { title: "Campaña de contenido", desc: "Ideas → borradores → revisión de marca → aprobación → calendario" },
  { title: "Screening de candidatos", desc: "CVs → resumen → preguntas → shortlist → aprobación" },
  { title: "Escalación de soporte", desc: "Clasificar issue → recopilar contexto → redactar respuesta → revisión" },
  { title: "Follow-up de eventos", desc: "Asistentes → segmentos → mensajes personalizados → envío aprobado" },
]

const advancedIdeas = [
  "Reporte de investigación multi-fuente con revisión paralela",
  "Aprobación de compras con human-in-the-loop",
  "Workflow de procesamiento de facturas o reclamos",
  "Cadencia de ventas outbound o customer success",
]

export function Track1IdeasMenuSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            09 / Menú de ideas
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">
          Elige una idea que puedas demostrar en 3 minutos
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          Si no eres técnico, empieza por un trabajo que ya entiendes. WDK solo necesita que sepas explicar los pasos.
        </p>

        {/* Beginner ideas grid */}
        <div className="slide-animate grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {beginnerIdeas.map((idea, index) => (
            <div key={index} className="p-4 border border-neutral-800 hover:border-neutral-600 transition-colors">
              <h3 className="text-white font-medium text-sm sm:text-base mb-1">{idea.title}</h3>
              <p className="text-neutral-500 text-xs sm:text-sm">{idea.desc}</p>
            </div>
          ))}
        </div>

        {/* Advanced ideas */}
        <div className="slide-animate mb-6 sm:mb-8">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Ideas avanzadas</p>
          <div className="flex flex-wrap gap-2">
            {advancedIdeas.map((idea, index) => (
              <span key={index} className="px-3 py-1.5 bg-neutral-900 text-neutral-400 text-xs sm:text-sm border border-neutral-800">
                {idea}
              </span>
            ))}
          </div>
        </div>

        {/* Builder action */}
        <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Acción</p>
          <p className="text-white text-sm sm:text-base">
            Elige una idea, luego remueve todo lo que no sea necesario para un demo de 3 minutos.
          </p>
        </div>
      </div>
    </section>
  )
}
