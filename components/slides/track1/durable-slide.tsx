interface SlideProps {
  isActive: boolean
}

const features = [
  {
    title: "Recuerda progreso",
    description: "Sabe qué pasos ya completó y cuál sigue",
  },
  {
    title: "Sobrevive interrupciones",
    description: "Puede continuar después de errores, deploys o reinicios",
  },
  {
    title: "Espera con intención",
    description: "Puede pausar por tiempo, sistemas externos o personas",
  },
  {
    title: "Reintenta seguro",
    description: "Puede volver a intentar una parte sin reiniciar todo",
  },
]

export function Track1DurableSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            02 / Concepto Clave
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          &quot;Durable&quot; significa que no olvida
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-12 leading-relaxed">
          En la guía de hosts, WDK se describe como agentes de larga duración: sobreviven interrupciones, reanudan después de deploys y pueden pausar por minutos o meses.
        </p>

        {/* Features grid */}
        <div className="slide-animate grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 border border-border"
            >
              <h3 className="text-foreground font-medium text-lg sm:text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Builder action */}
        <div className="slide-animate mt-8 sm:mt-10 p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Pregunta</p>
          <p className="text-foreground text-sm sm:text-base">
            Para tu idea, responde: &quot;¿Qué sería frustrante si la app lo olvidara?&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
