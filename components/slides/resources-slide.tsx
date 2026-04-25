interface SlideProps {
  isActive: boolean
}

const resources = [
  {
    name: "v0.app",
    description: "Tu herramienta principal",
    url: "https://v0.app",
    primary: true,
  },
  {
    name: "Recursos del evento",
    description: "Guias y documentacion",
    url: "https://vercel.notion.site/02agentresources",
    primary: true,
  },
  {
    name: "Zero to Agent hub",
    description: "Submissions, voting y showcase",
    url: "https://community.vercel.com/hackathons/zero-to-agent",
    primary: true,
  },
  {
    name: "AI SDK docs",
    description: "Kit de desarrollo IA",
    url: "https://sdk.vercel.ai",
    primary: false,
  },
  {
    name: "Workflow SDK",
    description: "Agentes duraderos",
    url: "https://useworkflow.dev",
    primary: false,
  },
  {
    name: "Chat SDK",
    description: "Bots multiplataforma",
    url: "https://chat-sdk.dev",
    primary: false,
  },
]

export function ResourcesSlide({ isActive }: SlideProps) {
  const primaryResources = resources.filter((r) => r.primary)
  const secondaryResources = resources.filter((r) => !r.primary)

  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 bg-neutral-950 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            05 / Recursos
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 sm:mb-10">
          Abre estas páginas ahora
        </h2>

        {/* Primary resources */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {primaryResources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="slide-animate group p-5 sm:p-6 border border-white/30 bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-white font-medium text-sm sm:text-base">{resource.name}</h3>
                <svg
                  className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0"
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
              </div>
              <p className="text-neutral-500 text-xs sm:text-sm">{resource.description}</p>
            </a>
          ))}
        </div>

        {/* Secondary resources */}
        <div className="slide-animate">
          <h3 className="text-neutral-500 text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4">
            Documentación adicional
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {secondaryResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 border border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white transition-colors text-xs sm:text-sm"
              >
                {resource.name}
                <svg
                  className="w-3 h-3"
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
              </a>
            ))}
          </div>
        </div>

        {/* Tip */}
        <p className="slide-animate text-neutral-600 text-xs sm:text-sm mt-6 sm:mt-8">
          El hub global es donde enviarás tu build, votarás por Community Favorite y verás lo que otros están shippeando.
        </p>
      </div>
    </section>
  )
}
