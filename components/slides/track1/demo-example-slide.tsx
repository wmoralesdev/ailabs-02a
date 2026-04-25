interface SlideProps {
  isActive: boolean
}

const workflowSteps = [
  "Usuario sube notas de cliente o transcripción de llamada",
  "Agente extrae resultados clave, citas y victorias medibles",
  "Agente redacta testimonio y blurb de caso de estudio",
  "Evaluador verifica claims no soportados y detalles faltantes",
  "Workflow pausa para aprobación humana",
  "Si aprobado, prepara copy final; si se piden cambios, revisa una vez",
]

const uiElements = [
  "Formulario de intake",
  "Línea de tiempo de ejecución",
  "Preview del borrador",
  "Botones de aprobación",
  "Exportación final",
]

const whyItFits = [
  "Multi-paso",
  "IA genera + evalúa",
  "Pausa human-in-the-loop",
  "Output final claro",
  "Facil de demostrar sin integraciones profundas",
]

export function Track1DemoExampleSlide({ isActive }: SlideProps) {
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
            13 / Ejemplo de Brief
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">
          Ejemplo completo: testimonio con aprobación
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          Este ejemplo funciona porque tiene input claro, pasos visibles, pausa humana y output final concreto.
        </p>

        <div className="slide-animate grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Workflow steps */}
          <div className="lg:col-span-2 p-4 sm:p-6 border border-neutral-800">
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Workflow</p>
            <div className="space-y-2">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-neutral-600 font-mono text-xs mt-0.5">{index + 1}.</span>
                  <span className="text-neutral-300 text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UI and Why */}
          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 border border-neutral-800">
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">UI</p>
              <div className="flex flex-wrap gap-1.5">
                {uiElements.map((el, index) => (
                  <span key={index} className="px-2 py-1 bg-neutral-900 text-neutral-400 text-xs">
                    {el}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 border border-neutral-800">
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Por qué funciona para WDK</p>
              <div className="space-y-1.5">
                {whyItFits.map((reason, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full" />
                    <span className="text-neutral-400 text-xs">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Builder action */}
        <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Acción</p>
          <p className="text-white text-sm sm:text-base">
            Copia esta estructura y cambia el dominio, input, regla de revisión y output final por los tuyos.
          </p>
        </div>
      </div>
    </section>
  )
}
