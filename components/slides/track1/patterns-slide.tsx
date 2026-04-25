interface SlideProps {
  isActive: boolean
}

const patterns = [
  {
    name: "Workflow secuencial",
    desc: "Un paso después de otro",
    example: "intake → borrador → revisión → final",
  },
  {
    name: "Workflow de routing",
    desc: "Clasificar y enviar al camino correcto",
    example: "soporte, leads, solicitudes",
  },
  {
    name: "Workflow de revisión paralela",
    desc: "Ejecutar varias verificaciones a la vez",
    example: "compliance, calidad, marca, riesgo",
  },
  {
    name: "Workflow evaluador",
    desc: "Redactar, criticar, revisar",
    example: "escritura, investigación, planificación",
  },
  {
    name: "Workflow orquestador-trabajador",
    desc: "Planear trabajo y despachar trabajadores especializados",
    example: "proyectos complejos",
  },
  {
    name: "Workflow human-in-the-loop",
    desc: "Esperar aprobación o input faltante",
    example: "cualquier cosa sensible o de cara al cliente",
  },
]

export function Track1PatternsSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            14 / Patrones
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Usa un patrón para explicarlo más rápido
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          Un patrón es una forma corta de decirle a v0 cómo se mueve el trabajo. Elige uno si te ayuda a ordenar tu idea.
        </p>

        {/* Patterns grid */}
        <div className="slide-animate grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {patterns.map((pattern, index) => (
            <div key={index} className="p-4 border border-border">
              <h3 className="text-foreground font-medium text-sm sm:text-base mb-1">{pattern.name}</h3>
              <p className="text-muted-foreground text-xs mb-2">{pattern.desc}</p>
              <p className="text-muted-foreground text-xs italic">Bueno para: {pattern.example}</p>
            </div>
          ))}
        </div>

        {/* Builder action */}
        <div className="slide-animate p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Acción</p>
          <p className="text-foreground text-sm sm:text-base">
            Elige un patrón e inclúyelo en tu prompt solo después de poder explicarlo en lenguaje simple.
          </p>
        </div>
      </div>
    </section>
  )
}
