interface SlideProps {
  isActive: boolean
}

const demoChecklist = [
  "Iniciar un workflow desde el UI",
  "Mostrar la línea de tiempo de pasos",
  "Mostrar output generado por IA",
  "Mostrar un reintento, estado de espera, aprobación o decisión de branching",
  "Completar el workflow",
  "Tener una URL deployada en Vercel",
  "Explicar qué pasaría si la ejecución tuviera que reanudar después",
]

const judgingLens = [
  { q: "¿Es útil el workflow?", icon: "check" },
  { q: "¿Es claro el proceso?", icon: "eye" },
  { q: "¿Puede el usuario confiar?", icon: "shield" },
  { q: "¿Muestra progreso y estado?", icon: "chart" },
]

export function Track1DemoChecklistSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            15 / Mínimo viable
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">
          Lo mínimo para enviar
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          No necesitas terminar una empresa completa. Necesitas una app deployada que pruebe que el workflow existe y entrega algo útil.
        </p>

        {/* Demo checklist */}
        <div className="slide-animate space-y-3 mb-8 sm:mb-10">
          {demoChecklist.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 border border-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-neutral-500 font-mono text-xs">{index + 1}</span>
              </div>
              <span className="text-neutral-300 text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>

        {/* Judging lens */}
        <div className="slide-animate grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {judgingLens.map((item, index) => (
            <div key={index} className="p-3 sm:p-4 border border-neutral-800 text-center">
              <p className="text-white text-xs sm:text-sm">{item.q}</p>
            </div>
          ))}
        </div>

        {/* Builder action */}
        <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Practica esta oración</p>
          <p className="text-white text-sm sm:text-base">
            &quot;Primero inicio el workflow, luego la app hace estos pasos, luego espera o revisa aquí, y finalmente produce este output.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
