interface SlideProps {
  isActive: boolean
}

const waitReasons = [
  { reason: "Una persona aprueba o pide cambios", icon: "user" },
  { reason: "Un webhook o API responde después", icon: "webhook" },
  { reason: "La app espera unos días para hacer seguimiento", icon: "clock" },
  { reason: "El agente necesita más datos antes de decidir", icon: "data" },
]

export function Track1WaitingSlide({ isActive }: SlideProps) {
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
            05 / Esperar es una Característica
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          Esperar es parte del producto
        </h2>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          Si tu agente debe tomar una decisión sensible, no lo obligues a adivinar. Haz que el workflow pause, muestre estado y continúe cuando tenga permiso o datos.
        </p>

        {/* Wait reasons */}
        <div className="slide-animate grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-10">
          {waitReasons.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border border-border">
              <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                {item.icon === "user" && (
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
                {item.icon === "webhook" && (
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                )}
                {item.icon === "clock" && (
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {item.icon === "data" && (
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                )}
              </div>
              <span className="text-foreground/85 text-sm sm:text-base">{item.reason}</span>
            </div>
          ))}
        </div>

        {/* Example */}
        <div className="slide-animate p-4 sm:p-6 bg-secondary/50 border border-border mb-8">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Ejemplo</p>
          <p className="text-foreground text-sm sm:text-base">
            &quot;Crea un asistente de lanzamiento que redacta copy de campaña, espera aprobación del equipo, programa tareas de seguimiento, y verifica después del día de lanzamiento.&quot;
          </p>
        </div>

        {/* Builder action */}
        <div className="slide-animate p-4 sm:p-6 border border-border bg-secondary/50">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Acción</p>
          <p className="text-foreground text-sm sm:text-base">
            Marca un paso de tu idea donde la app debería pausar en lugar de adivinar o apresurarse.
          </p>
        </div>
      </div>
    </section>
  )
}
