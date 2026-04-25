import { GeistPixelSquare } from 'geist/font/pixel'

interface SlideProps {
  isActive: boolean
}

export function HeroSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Badge */}
        <div className="slide-animate flex items-center gap-3 mb-10">
          <svg
            className="w-4 h-4 text-neutral-600"
            viewBox="0 0 76 65"
            fill="currentColor"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
          </svg>
          <span className="text-neutral-500 font-mono text-xs tracking-[0.2em] uppercase">
            02A / Global Build Week / Apr 24-May 3
          </span>
        </div>

        {/* Main title */}
        <div className="mb-6 sm:mb-10">
          <h1 className="slide-animate text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-neutral-500 leading-none">
            Zero to
          </h1>
          <h1 className="slide-animate text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white leading-none flex items-baseline gap-2 sm:gap-4">
            <span className={`${GeistPixelSquare.className} font-medium`}>Agent</span>
            <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse" />
          </h1>
        </div>

        {/* Meta info */}
        <div className="slide-animate flex flex-wrap items-center gap-4 sm:gap-8 mb-8 sm:mb-12 font-mono text-xs sm:text-sm md:text-base">
          <span className="text-white">04.25.26</span>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="text-neutral-500 tracking-wider">San Salvador / SLV</span>
        </div>

        {/* Description */}
        <p className="slide-animate text-base sm:text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-6 sm:mb-10">
          Construye y despliega un agente real con v0 y Vercel. Hoy empezamos en San Salvador; la competencia global sigue hasta el 3 de mayo.
        </p>

        {/* Hosts */}
        <div className="slide-animate flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
          <span className="text-neutral-600">Presentado por</span>
          <span className="text-white font-medium">v0 by Vercel</span>
          <span className="text-neutral-700">+</span>
          <a 
            href="https://ailabs.sv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-neutral-300 transition-colors"
          >
            Ai /abs
          </a>
        </div>
      </div>

      {/* Large triangle decoration */}
      <div className="slide-animate absolute bottom-20 sm:bottom-16 right-6 sm:right-16 md:right-24 lg:right-32">
        <svg
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-white opacity-90"
          viewBox="0 0 76 65"
          fill="currentColor"
        >
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
        </svg>
      </div>
    </section>
  )
}
