interface SlideProps {
  isActive: boolean
}

const mockItems = [
  {
    real: "Enviar emails",
    mock: "Mostrar una lista de mensajes con estado listo para enviar",
  },
  {
    real: "Leer CRM o base de datos",
    mock: "Usar 6 registros falsos dentro del código",
  },
  {
    real: "Esperar webhook de pago o API",
    mock: "Botón que simula respuesta externa",
  },
  {
    real: "Aprobación de equipo",
    mock: "Botones Aprobar / Pedir cambios en pantalla",
  },
  {
    real: "Integración privada",
    mock: "JSON editable o tabla mock visible",
  },
]

export function Track1MockDataSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            12 / Mocks primero
          </span>
        </div>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">
          No conectes todo hoy
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          Un buen demo puede simular integraciones. Lo importante es demostrar el proceso, el estado y el resultado.
        </p>

        <div className="slide-animate grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {mockItems.map((item, index) => (
            <div key={index} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 p-4 border border-neutral-800">
              <p className="text-neutral-500 text-xs sm:text-sm">{item.real}</p>
              <span className="text-neutral-700">→</span>
              <p className="text-neutral-200 text-xs sm:text-sm">{item.mock}</p>
            </div>
          ))}
        </div>

        <div className="slide-animate p-4 sm:p-6 border border-white/30 bg-white/5">
          <p className="text-neutral-400 text-xs uppercase tracking-wider mb-2">Prompt de rescate</p>
          <p className="text-white text-sm sm:text-base">
            &quot;Simplifica esta app para usar datos mock solamente. Mantén el workflow, la línea de tiempo, la aprobación humana y el output final.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
