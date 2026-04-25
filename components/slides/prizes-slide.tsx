interface SlideProps {
  isActive: boolean
}

const prizes = [
  {
    place: "1er lugar",
    amount: "$3,000",
    extras: "+ $200/mes platform + Vercel Pro 6 meses",
    highlight: true,
  },
  {
    place: "2do lugar",
    amount: "$2,000",
    extras: "+ $100/mes platform + Vercel Pro 6 meses",
    highlight: false,
  },
  {
    place: "3er lugar",
    amount: "$1,000",
    extras: "+ $50/mes platform + Vercel Pro 6 meses",
    highlight: false,
  },
]

const criteria = [
  { title: "Utilidad", desc: "aplicabilidad real del agente" },
  { title: "Ejecución", desc: "hecho con v0 y deployado en Vercel" },
  { title: "Creatividad", desc: "originalidad de la idea y solución" },
]

export function PrizesSlide({ isActive }: SlideProps) {
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
            04 / Premios
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 sm:mb-10">
          $6,000+ en premios
        </h2>

        {/* Prize cards */}
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`slide-animate p-5 sm:p-6 border ${
                prize.highlight
                  ? "border-white bg-white/5"
                  : "border-neutral-800 bg-neutral-950/50"
              }`}
            >
              <div
                className={`text-xs font-mono mb-3 sm:mb-4 ${
                  prize.highlight ? "text-white" : "text-neutral-600"
                }`}
              >
                {prize.place}
              </div>
              <div className="text-3xl sm:text-4xl font-medium text-white mb-2 sm:mb-3">
                {prize.amount}
              </div>
              <div className="text-xs text-neutral-500">
                v0 credits
              </div>
              <div className="text-xs text-neutral-600 mt-2">
                {prize.extras}
              </div>
            </div>
          ))}
        </div>

        {/* Judging criteria */}
        <div className="slide-animate">
          <h3 className="text-neutral-500 text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4">
            Criterios de evaluación
          </h3>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {criteria.map((item, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3">
                <span className="w-6 h-6 border border-neutral-700 flex items-center justify-center text-xs font-mono text-neutral-600">
                  {index + 1}
                </span>
                <div>
                  <span className="text-white text-xs sm:text-sm">{item.title}</span>
                  <span className="text-neutral-600 text-xs sm:text-sm"> - {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="slide-animate text-neutral-600 text-xs sm:text-sm mt-6 sm:mt-8">
          Un proyecto por persona. Sin equipos. Necesitas una URL deployada en Vercel para enviar.
        </p>
      </div>
    </section>
  )
}
