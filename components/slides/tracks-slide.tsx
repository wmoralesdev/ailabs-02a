"use client"

import { useState } from "react"
import { GeistPixelSquare } from 'geist/font/pixel'

interface SlideProps {
  isActive: boolean
}

const tracks = [
  {
    id: 1,
    title: "Vercel Workflow",
    subtitle: "WDK / agentes duraderos",
    difficulty: "Intermedio",
    description:
      "Construye agentes async que sobreviven crashes, reanudan después de deploys, pausan por minutos o meses y muestran progreso observable.",
    steps: [
      "Scaffold con Next.js",
      "Agrega Workflow SDK",
      "Define workflows y steps duraderos",
      "Despliega en Vercel",
    ],
  },
  {
    id: 2,
    title: "v0 + MCPs",
    subtitle: "Conecta tu agente con el mundo",
    difficulty: "Principiante",
    description:
      "Usa v0 para crear una app o agente que se conecta a por lo menos un MCP server: Vercel, GitHub, una base de datos o herramientas propias.",
    steps: [
      "Abre v0.app y describe tu app",
      "Itera con prompts",
      "Conecta un MCP server",
      "Despliega con un click",
    ],
  },
  {
    id: 3,
    title: "ChatSDK Agents",
    hasPixelTitle: true,
    subtitle: "Bots para todas las plataformas",
    difficulty: "Intermedio",
    description:
      "Escribe tu bot una vez y funciona en Slack, Discord, Teams, GitHub y mas. El SDK maneja las diferencias entre plataformas por ti.",
    steps: [
      "Instala el Chat SDK",
      "Configura adaptadores",
      "Agrega logica de IA",
      "Despliega multiplataforma",
    ],
  },
]

export function TracksSlide({ isActive }: SlideProps) {
  const [activeTrack, setActiveTrack] = useState(0)

  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 bg-background overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            03 / Tracks del hackathon
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6 sm:mb-8">
          Elige tu camino
        </h2>

        {/* Track tabs */}
        <div className="slide-animate flex flex-wrap gap-2 mb-6 sm:mb-8">
          {tracks.map((track, index) => (
            <button
              key={track.id}
              onClick={() => setActiveTrack(index)}
              className={`px-3 sm:px-4 py-2 font-mono text-xs transition-all ${
                activeTrack === index
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Track {track.id}
            </button>
          ))}
        </div>

        {/* Active track content */}
        <div className="slide-animate border border-border bg-secondary/30 p-5 sm:p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4 sm:mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-foreground mb-1">
                {tracks[activeTrack].hasPixelTitle ? (
                  <>ChatSDK <span className={`${GeistPixelSquare.className} font-medium`}>Agents</span></>
                ) : (
                  tracks[activeTrack].title
                )}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                {tracks[activeTrack].subtitle}
              </p>
            </div>
            <span className="inline-flex items-center px-3 py-1 bg-muted text-muted-foreground text-xs font-mono self-start">
              {tracks[activeTrack].difficulty}
            </span>
          </div>

          <p className="text-foreground/85 leading-relaxed mb-6 sm:mb-8 max-w-2xl text-sm sm:text-base">
            {tracks[activeTrack].description}
          </p>

          {/* Quick start steps */}
          <div>
            <h4 className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4">
              Cómo empezar
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {tracks[activeTrack].steps.map((step, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="w-6 h-6 border border-border flex items-center justify-center text-xs font-mono text-muted-foreground">
                    {index + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tip */}
        <p className="slide-animate text-muted-foreground text-xs sm:text-sm mt-4 sm:mt-6">
          Pro tip: si quieres el camino más rápido para empezar, Track 2 es ideal. Si tu agente necesita memoria y pasos largos, Track 1.
        </p>
      </div>
    </section>
  )
}
