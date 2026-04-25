interface SlideProps {
  isActive: boolean
}

export function FormatSlide({ isActive }: SlideProps) {
  const agenda = [
    { time: "10 min", title: "Kickoff", desc: "Bienvenida, video oficial de Vercel, hub global y créditos de v0." },
    { time: "15 min", title: "Tracks", desc: "Elige una ruta: WDK, v0 + MCPs o ChatSDK Agents." },
    { time: "60-90 min", title: "Build time", desc: "Construye, despliega temprano y pide ayuda cuando te bloquees." },
    { time: "Antes del 3 mayo", title: "Submit", desc: "Envía tu URL de Vercel al hub de Zero to Agent." },
  ]

  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-6 sm:mb-8">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            02 / Formato del evento
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-white mb-4 sm:mb-6">
          Hoy sales con algo deployado
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-8 sm:mb-12 leading-relaxed">
          Zero to Agent es una build week global para shippear agentes reales con v0 y Vercel. No necesitas saber programar: v0 convierte tus ideas en código.
        </p>

        {/* Agenda cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {agenda.map((item, index) => (
            <div
              key={item.title}
              className={`slide-animate p-5 sm:p-6 border ${
                index === 2
                  ? "border-white/30 bg-white/5"
                  : "border-neutral-800 bg-neutral-950/50"
              }`}
            >
              <div className={`font-mono text-xs mb-3 sm:mb-4 ${index === 2 ? "text-neutral-300" : "text-neutral-600"}`}>
                {item.time}
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* What is v0 */}
        <div className="slide-animate mt-8 sm:mt-12 p-4 sm:p-6 border-l-2 border-neutral-800 bg-neutral-950/30">
          <h4 className="text-white font-medium mb-2 text-sm">
            ¿Qué es v0?
          </h4>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Una herramienta de Vercel que te permite crear aplicaciones web usando{" "}
            <span className="text-neutral-300">lenguaje natural</span>. Describes lo que quieres y v0 genera el código. Como hablar con un asistente que programa por ti.
          </p>
        </div>
      </div>
    </section>
  )
}
