interface SlideProps {
  isActive: boolean
}

const mistakes = [
  { mistake: "Construir un chatbot cuando la idea es realmente un workflow", fix: "Usa pasos, no conversación" },
  { mistake: "Agregar demasiadas integraciones antes de que funcione el proceso base", fix: "Mocks primero, integraciones después" },
  { mistake: "Esconder el estado del workflow del usuario", fix: "Mostrar línea de tiempo y estados" },
  { mistake: "Crear pasos vagos como 'hacer investigación'", fix: "Pasos concretos: 'extraer competidores de estas URLs'" },
  { mistake: "Saltarse revisión humana para outputs de alto riesgo", fix: "Agregar al menos un punto de aprobación" },
  { mistake: "Hacer el agente autónomo donde una aprobación simple lo haría más confiable", fix: "Human-in-the-loop construye confianza" },
]

export function Track1MistakesSlide({ isActive }: SlideProps) {
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
            17 / Errores comunes
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4">
          Evita sobreconstruir
        </h2>

        <p className="slide-animate text-neutral-400 text-sm sm:text-base max-w-2xl mb-5 sm:mb-6 leading-relaxed">
          La mayoría de proyectos débiles fallan porque el workflow es muy amplio, muy escondido o muy difícil de verificar.
        </p>

        {/* Mistakes list */}
        <div className="slide-animate grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
          {mistakes.map((item, index) => (
            <div key={index} className="p-4 border border-neutral-800 bg-neutral-950/50">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-6 h-6 border border-neutral-800 flex items-center justify-center text-neutral-600 font-mono text-xs flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{item.mistake}</span>
              </div>
              <div className="pl-9">
                <span className="text-white text-xs sm:text-sm leading-relaxed">{item.fix}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Builder action */}
        <div className="slide-animate p-4 border-l-2 border-neutral-700 bg-neutral-900/30">
          <p className="text-white text-sm">
            Si tu proyecto tiene más de siete pasos, recórtalo para la versión del evento.
          </p>
        </div>
      </div>
    </section>
  )
}
