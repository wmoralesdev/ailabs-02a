interface SlideProps {
  isActive: boolean
}

const recoveryPrompts = [
  "Arregla el error de TypeScript y explícame qué cambiaste en una frase.",
  "Reduce esta app a la versión más simple que demuestre el workflow.",
  "Quita la integración real y simúlala con datos mock.",
  "Haz visible el estado del workflow en una línea de tiempo.",
  "Agrega botones de aprobación humana antes del output final.",
  "Mantén el diseño simple y enfocado en el demo de 3 minutos.",
]

export function Track1V0StuckSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            16 / Si v0 se atasca
          </span>
        </div>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          No pelees con el error, baja el alcance
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          Si algo se rompe, el objetivo no es hacerlo perfecto. El objetivo es llegar a una demo clara, deployada y entendible.
        </p>

        <div className="slide-animate grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {recoveryPrompts.map((prompt, index) => (
            <div key={index} className="p-4 border border-border bg-background/50">
              <div className="font-mono text-muted-foreground text-xs mb-2">{String(index + 1).padStart(2, "0")}</div>
              <p className="text-foreground/85 text-sm">&quot;{prompt}&quot;</p>
            </div>
          ))}
        </div>

        <div className="slide-animate p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Orden de prioridad</p>
          <p className="text-foreground text-sm sm:text-base">
            Funciona en local → muestra pasos → tiene aprobación o espera → produce output → deploya en Vercel.
          </p>
        </div>
      </div>
    </section>
  )
}
