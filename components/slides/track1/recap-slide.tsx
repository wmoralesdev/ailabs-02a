import { GeistPixelSquare } from 'geist/font/pixel'
import Link from 'next/link'

interface SlideProps {
  isActive: boolean
}

const criteria = [
  "Hacer múltiples pasos",
  "Esperar tiempo, personas o sistemas externos",
  "Sobrevivir interrupciones",
  "Reintentar de forma segura",
  "Mostrar un historial claro de lo que pasó",
]

export function Track1RecapSlide({ isActive }: SlideProps) {
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
            18 / Resumen del track
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          WDK es el track correcto si tu agente necesita...
        </h2>

        {/* Criteria */}
        <div className="slide-animate space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          {criteria.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-8 h-8 border-2 border-foreground flex items-center justify-center">
                <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-foreground text-base sm:text-lg">{item}</span>
            </div>
          ))}
        </div>

        {/* Final line */}
        <div className="slide-animate p-6 sm:p-8 border-2 border-foreground mb-8 sm:mb-10">
          <p className="text-foreground text-lg sm:text-xl md:text-2xl text-center">
            Si tu proyecto es un proceso real con memoria, estado y seguimiento,{" "}
            <span className={`${GeistPixelSquare.className}`}>WDK</span> es el track.
          </p>
        </div>

        {/* Builder action */}
        <div className="slide-animate p-4 sm:p-6 border border-border bg-secondary/50 mb-8">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Antes de construir, completa la oración</p>
          <p className="text-foreground text-sm sm:text-base">
            &quot;Este agente sigue trabajando hasta que...&quot;
          </p>
        </div>

        {/* Back link */}
        <div className="slide-animate text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al deck principal
          </Link>
        </div>
      </div>
    </section>
  )
}
