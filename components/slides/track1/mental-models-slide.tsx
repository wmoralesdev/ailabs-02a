interface SlideProps {
  isActive: boolean
}

export function Track1MentalModelsSlide({ isActive }: SlideProps) {
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
            04 / Modelos Mentales
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">
          Tres palabras para no perderse
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-8 sm:mb-12 leading-relaxed">
          No necesitas empezar por infraestructura. Empieza por nombrar el proceso completo, sus pasos y lo que el usuario verá.
        </p>

        {/* Two concepts */}
        <div className="slide-animate grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="p-6 sm:p-8 border-2 border-white">
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-3">Workflow</h3>
            <p className="text-neutral-400 text-base sm:text-lg mb-4">El trabajo completo de inicio a fin</p>
            <p className="text-neutral-500 text-sm">Ejemplo: convertir una entrevista en un caso de estudio aprobado</p>
          </div>
          <div className="p-6 sm:p-8 border border-neutral-700">
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-3">Step</h3>
            <p className="text-neutral-400 text-base sm:text-lg mb-4">Una tarea confiable dentro del trabajo</p>
            <p className="text-neutral-500 text-sm">Ejemplo: extraer citas clave</p>
          </div>
          <div className="p-6 sm:p-8 border border-neutral-700">
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-3">Estado</h3>
            <p className="text-neutral-400 text-base sm:text-lg mb-4">Lo que el usuario puede ver</p>
            <p className="text-neutral-500 text-sm">Ejemplo: esperando aprobación</p>
          </div>
        </div>

        {/* Analogy */}
        <div className="slide-animate p-4 sm:p-6 bg-neutral-900/50 border border-neutral-800 mb-8">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Analogía</p>
          <p className="text-neutral-300 text-sm sm:text-base">
            Workflow = la receta completa. Step = picar, cocinar, probar, emplatar. Estado = dónde va la receta.
            <br />
            <span className="text-neutral-500">Si se va la luz, la receta debe continuar desde el último paso completado, no reiniciar de cero.</span>
          </p>
        </div>

        {/* Builder action */}
        <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Acción</p>
          <p className="text-white text-sm sm:text-base">
            Redacta tu workflow como una lista numerada. Si un paso es vago, divídelo en pasos más pequeños.
          </p>
        </div>
      </div>
    </section>
  )
}
