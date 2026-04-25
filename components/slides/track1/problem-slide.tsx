interface SlideProps {
  isActive: boolean
}

const problems = [
  "Un chat responde una vez",
  "Un proceso real toma varios pasos",
  "A veces falta información",
  "Alguien tiene que aprobar antes de continuar",
  "Una API puede fallar y debe reintentarse",
  "Un deploy o crash no debería borrar el progreso",
]

export function Track1ProblemSlide({ isActive }: SlideProps) {
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
            01 / El Problema
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">
          El trabajo real no cabe en una sola respuesta
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-8 sm:mb-12 leading-relaxed">
          Muchos demos de IA se quedan en: &quot;pregunta algo, recibe texto&quot;. WDK es para casos donde el agente debe seguir trabajando hasta entregar un resultado.
        </p>

        {/* Problem list */}
        <div className="slide-animate space-y-3 sm:space-y-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4"
            >
              <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full flex-shrink-0" />
              <span className="text-neutral-300 text-sm sm:text-base">{problem}</span>
            </div>
          ))}
        </div>

        {/* Builder action */}
        <div className="slide-animate mt-10 sm:mt-14 p-4 sm:p-6 border border-neutral-800 bg-neutral-900/50">
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">Acción</p>
          <p className="text-white text-sm sm:text-base">
            Piensa en algo que hoy haces con una mezcla de formularios, mensajes, recordatorios y copiar/pegar entre herramientas.
          </p>
        </div>
      </div>
    </section>
  )
}
