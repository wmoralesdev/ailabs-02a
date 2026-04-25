interface SlideProps {
  isActive: boolean
}

const checklist = [
  { text: "El proceso tiene 3 a 7 pasos claros", good: true },
  { text: "Al menos un paso usa IA para generar, clasificar, extraer o evaluar", good: true },
  { text: "Al menos un paso espera, reintenta o pide aprobación humana", good: true },
  { text: "El output final es concreto: email, reporte, lista, decisión o asset", good: true },
  { text: "Cualquier persona puede entender qué problema resuelve", good: true },
]

const avoid = [
  "Un chatbot genérico",
  "Un vago 'asistente de IA para todo'",
  "Un proyecto que depende de muchas integraciones privadas",
  "Un workflow donde nadie puede decir si el resultado es correcto",
]

export function Track1BestProjectsSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            07 / Mejor Forma de Proyecto
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          El mejor proyecto es pequeño pero completo
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          Los jueces buscan utilidad real, ejecución con v0 + Vercel y originalidad. Un proceso pequeño bien terminado gana contra un asistente enorme que nadie entiende.
        </p>

        {/* Checklist */}
        <div className="slide-animate space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          {checklist.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-foreground/85 text-sm sm:text-base">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Avoid */}
        <div className="slide-animate mb-6 sm:mb-8">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3">Evita</p>
          <div className="space-y-2">
            {avoid.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-muted-foreground text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Builder action */}
        <div className="slide-animate p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Fórmula</p>
          <p className="text-foreground text-sm sm:text-base">
            &quot;Mi workflow ayuda a [usuario] a convertir [input] en [output] a través de [número] pasos.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
