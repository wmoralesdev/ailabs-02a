interface SlideProps {
  isActive: boolean
}

const examples = [
  "Un formulario inicia el trabajo",
  "El agente usa IA para clasificar, resumir, redactar o evaluar",
  "Cada step guarda progreso y puede verse en pantalla",
  "La app pausa si necesita aprobación o datos externos",
  "Vercel guarda progreso y maneja la ejecución cuando lo despliegas",
]

export function Track1EnablesSlide({ isActive }: SlideProps) {
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
            03 / Qué habilita
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Qué agrega WDK a una app hecha con v0
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          v0 te ayuda a construir la app. WDK hace que el proceso detrás de esa app pueda durar, esperar y continuar con confianza.
        </p>

        {/* Pipeline visualization */}
        <div className="slide-animate mb-8 sm:mb-10 overflow-x-auto">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm min-w-max">
            <span className="px-3 py-1.5 bg-muted text-foreground/85">Input</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">Plan</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">Paso 1</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-foreground text-background">Espera/Aprobación</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">Paso 2</span>
            <span className="text-muted-foreground">→</span>
            <span className="px-3 py-1.5 bg-muted text-foreground/85">Resultado</span>
          </div>
        </div>

        {/* Examples */}
        <div className="slide-animate space-y-3">
          {examples.map((example, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-muted-foreground font-mono text-xs mt-1">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-foreground/85 text-sm sm:text-base">{example}</span>
            </div>
          ))}
        </div>

        {/* Builder action */}
        <div className="slide-animate mt-8 sm:mt-10 p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Acción</p>
          <p className="text-foreground text-sm sm:text-base">
            Cuando le hables a v0, no digas solo &quot;hazme un agente&quot;. Di qué inicia el proceso, qué pasos hace y dónde debe esperar.
          </p>
        </div>
      </div>
    </section>
  )
}
