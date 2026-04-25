interface SlideProps {
  isActive: boolean
}

const prompt = `Construye una app Next.js llamada Event Follow-up Agent para organizadores de eventos.

La app ayuda a convertir una lista de asistentes y notas del evento en follow-ups personalizados listos para enviar.

Usa Vercel Workflow / WDK para ejecutar un workflow durable con estos pasos:
1. Recibir lista mock de asistentes con nombre, rol, interés y asistencia.
2. Segmentar asistentes en sponsors, builders, founders y comunidad.
3. Generar un mensaje de follow-up personalizado para cada segmento usando IA.
4. Mostrar los borradores y pausar para aprobación humana.
5. Si se aprueba, marcar mensajes como listos para enviar. Si se piden cambios, revisar una vez.

El UI debe mostrar:
- Un formulario para iniciar el workflow
- Una línea de tiempo visible con estados: iniciado, segmentando, redactando, esperando aprobación, revisando, completado
- Preview de los mensajes generados
- Botones Aprobar y Pedir cambios
- Resultado final con mensajes listos para enviar

Usa datos mock. No conectes email real todavía.
Incluye estructura técnica para WDK:
- Workflow SDK configurado en Next.js
- withWorkflow en next.config
- funciones con "use workflow" y steps con "use step"
- espacio para usar Vercel AI Gateway

Mantén la primera versión simple, visible y lista para deploy en Vercel.`

export function Track1StarterPromptSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            11 / Prompt inicial
          </span>
        </div>

        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">
          Copia esto si quieres empezar ya
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-2xl mb-5 sm:mb-6 leading-relaxed">
          Este prompt está diseñado para una demo simple del evento. Primero hazlo funcionar con mocks; después mejoras diseño o integraciones.
        </p>

        <div className="slide-animate p-4 sm:p-6 bg-neutral-900 border border-neutral-800 font-mono text-[11px] sm:text-xs md:text-sm overflow-x-auto">
          <pre className="text-neutral-300 whitespace-pre-wrap leading-relaxed">{prompt}</pre>
        </div>
      </div>
    </section>
  )
}
