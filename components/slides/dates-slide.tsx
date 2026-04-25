import { GeistPixelSquare } from 'geist/font/pixel'

interface SlideProps {
  isActive: boolean
}

const timeline = [
  {
    date: "24 abril",
    title: "Build week inicia",
    description: "La competencia global abre",
    current: false,
  },
  {
    date: "25 abril",
    title: "San Salvador",
    hasPixelTitle: true,
    description: "Workshop + build time",
    current: true,
  },
  {
    date: "3 mayo",
    title: "Cierre de submissions",
    description: "Último día para enviar",
    current: false,
  },
  {
    date: "3-4 mayo",
    title: "Votación",
    description: "24 hrs, un voto por cuenta",
    current: false,
  },
  {
    date: "Después 5 mayo",
    title: "Ganadores",
    description: "Anuncio en redes",
    current: false,
  },
]

export function DatesSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 bg-neutral-950 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            07 / Calendario
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 sm:mb-12">
          Fechas y reglas clave
        </h2>

        {/* Timeline */}
        <div className="slide-animate grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 border ${
                item.current
                  ? "border-white bg-white/5"
                  : "border-neutral-800 bg-neutral-950/50"
              }`}
            >
              <div
                className={`font-mono text-xs mb-2 sm:mb-3 ${
                  item.current ? "text-white" : "text-neutral-600"
                }`}
              >
                {item.date}
              </div>
              <h3
                className={`font-medium mb-1 text-sm sm:text-base ${
                  item.current ? "text-white" : "text-neutral-400"
                }`}
              >
                {item.hasPixelTitle ? (
                  <>Zero to <span className={`${GeistPixelSquare.className} font-medium`}>Agent</span> SV</>
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Rules */}
        <div className="slide-animate mt-6 sm:mt-8 grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="border border-neutral-800 bg-neutral-950/50 p-4 text-neutral-400">
            <span className="text-white">1 envío</span> por persona
          </div>
          <div className="border border-neutral-800 bg-neutral-950/50 p-4 text-neutral-400">
            <span className="text-white">Sin equipos</span> en la competencia global
          </div>
          <div className="border border-neutral-800 bg-neutral-950/50 p-4 text-neutral-400">
            <span className="text-white">URL de Vercel</span> requerida
          </div>
        </div>

        {/* CTA */}
        <div className="slide-animate mt-8 sm:mt-10 flex justify-center">
          <a
            href="https://community.vercel.com/hackathons/zero-to-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-neutral-200 transition-colors text-sm sm:text-base"
          >
            Enviar mi proyecto
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
