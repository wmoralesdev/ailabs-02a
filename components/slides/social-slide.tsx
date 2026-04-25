import { GeistPixelSquare } from 'geist/font/pixel'

interface SlideProps {
  isActive: boolean
}

export function SocialSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-3xl mx-auto w-full text-center">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            08 / Comparte
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Cuenta tu experiencia
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Opcional pero recomendado: comparte tu progreso, tu demo o una foto del evento en LinkedIn y X con el hashtag oficial.
        </p>

        {/* Hashtag */}
        <div className="slide-animate mb-8 sm:mb-10">
          <span className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground text-foreground font-mono text-xl sm:text-2xl md:text-3xl tracking-wider">
            #Zeroto<span className={`${GeistPixelSquare.className} font-medium`}>Agent</span>
          </span>
        </div>

        {/* Tags */}
        <div className="slide-animate mb-10 sm:mb-12">
          <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">Etiqueta a</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <a
              href="https://twitter.com/v0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-xs sm:text-sm"
            >
              @v0
            </a>
            <a
              href="https://twitter.com/vercel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-xs sm:text-sm"
            >
              @vercel
            </a>
            <a
              href="https://twitter.com/ailabs_sv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-xs sm:text-sm"
            >
              @ailabs_sv
            </a>
          </div>
        </div>

        {/* Social buttons */}
        <div className="slide-animate flex justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a
            href="https://twitter.com/intent/tweet?text=Construyendo%20agentes%20de%20IA%20en%20%23ZerotoAgent%20con%20%40v0%20%40vercel%20%40ailabs_sv&url=https://community.vercel.com/hackathons/zero-to-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
            aria-label="Compartir en X"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://community.vercel.com/hackathons/zero-to-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
            aria-label="Compartir en LinkedIn"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <div className="slide-animate pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-foreground"
                viewBox="0 0 76 65"
                fill="currentColor"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              <span className="text-muted-foreground">Un evento de</span>
              <span className="text-foreground">v0 by Vercel</span>
            </div>
            <span className="text-muted-foreground hidden md:inline">|</span>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Founding host:</span>
              <a 
                href="https://ailabs.sv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/85 transition-colors"
              >
                Ai /abs El Salvador
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
