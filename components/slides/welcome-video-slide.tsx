import { GeistPixelSquare } from 'geist/font/pixel'

interface SlideProps {
  isActive: boolean
}

export function WelcomeVideoSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 bg-background ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Section label */}
        <div className="slide-animate mb-6 sm:mb-8">
          <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            01 / Bienvenida
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Antes de empezar
        </h2>

        {/* Description */}
        <p className="slide-animate text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          Un mensaje del equipo de Vercel sobre qué es Zero to <span className={`${GeistPixelSquare.className} font-medium`}>Agent</span>, dónde se envían los proyectos y qué está pasando globalmente.
        </p>

        {/* Video CTA card */}
        <a
          href="https://www.youtube.com/watch?v=r9hB_CQQIMk"
          target="_blank"
          rel="noopener noreferrer"
          className="slide-animate group inline-flex flex-col items-center p-8 sm:p-12 md:p-16 border border-border bg-secondary/30 hover:border-border hover:bg-secondary/50 transition-all"
        >
          {/* Play icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-border group-hover:border-foreground rounded-full flex items-center justify-center mb-6 sm:mb-8 transition-colors">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-muted-foreground group-hover:text-foreground transition-colors ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <span className="text-foreground text-base sm:text-lg font-medium mb-2">
            Ver video de bienvenida
          </span>
          <span className="text-muted-foreground text-xs sm:text-sm flex items-center gap-2">
            Abre en YouTube
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>
        </a>

        {/* Additional context */}
        <p className="slide-animate text-muted-foreground text-xs sm:text-sm mt-6 sm:mt-8">
          5 minutos para alinear a todos antes de construir
        </p>
      </div>
    </section>
  )
}
