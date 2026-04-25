interface SlideProps {
  isActive: boolean
}

const recipes = [
  {
    title: "Event follow-up agent",
    bestFor: "Si no sabes qué construir",
    user: "organizador de eventos",
    input: "lista de asistentes + notas del evento",
    steps: "segmentar, redactar, esperar aprobación, preparar envío",
    output: "follow-ups personalizados",
  },
  {
    title: "Support escalation workflow",
    bestFor: "Si conoces soporte o servicio al cliente",
    user: "equipo de soporte",
    input: "mensaje del cliente + contexto",
    steps: "clasificar, buscar contexto, redactar respuesta, pedir revisión",
    output: "respuesta aprobada",
  },
  {
    title: "Content approval workflow",
    bestFor: "Si haces marketing, diseño o contenido",
    user: "equipo de contenido",
    input: "brief de campaña",
    steps: "generar ideas, redactar borrador, revisar marca, esperar aprobación",
    output: "copy listo para publicar",
  },
]

export function Track1StarterRecipesSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            08 / Elige uno
          </span>
        </div>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">
          Si estás bloqueado, elige uno
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          No necesitas inventar algo desde cero. Elige una receta, cambia el dominio y empieza con datos mock.
        </p>

        <div className="slide-animate grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.title}
              className={`p-5 sm:p-6 border ${
                index === 0 ? "border-white bg-white/5" : "border-neutral-800 bg-neutral-950/50"
              }`}
            >
              <div className="font-mono text-neutral-600 text-xs mb-3">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="text-white font-medium text-lg sm:text-xl mb-2">{recipe.title}</h3>
              <p className="text-neutral-500 text-xs sm:text-sm mb-4">{recipe.bestFor}</p>

              <div className="space-y-2 text-xs sm:text-sm">
                <p><span className="text-neutral-500">Usuario:</span> <span className="text-neutral-300">{recipe.user}</span></p>
                <p><span className="text-neutral-500">Input:</span> <span className="text-neutral-300">{recipe.input}</span></p>
                <p><span className="text-neutral-500">Steps:</span> <span className="text-neutral-300">{recipe.steps}</span></p>
                <p><span className="text-neutral-500">Output:</span> <span className="text-neutral-300">{recipe.output}</span></p>
              </div>
            </div>
          ))}
        </div>

        <div className="slide-animate p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Regla</p>
          <p className="text-white text-sm sm:text-base">
            Para este track, una idea buena tiene input claro, 3-7 pasos, un momento de espera/aprobación y un resultado final que se pueda enseñar.
          </p>
        </div>
      </div>
    </section>
  )
}
