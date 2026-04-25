"use client"

import { GeistPixelSquare } from 'geist/font/pixel'
import Link from 'next/link'

interface SlideProps {
  isActive: boolean
}

const decks = [
  {
    id: "track-1",
    number: "01",
    title: "Vercel Workflow",
    subtitle: "WDK",
    description: "Agentes duraderos que pausan, reintentan y recuerdan su progreso.",
    href: "/track-1",
    available: true,
  },
  {
    id: "track-2",
    number: "02",
    title: "v0 + MCPs",
    subtitle: "MCP",
    description: "Apps conectadas a MCPs oficiales como Notion, Airtable, Zapier o Asana.",
    href: "/track-2",
    available: true,
  },
  {
    id: "track-3",
    number: "03",
    title: "ChatSDK",
    subtitle: "Agents",
    description: "Bots conversacionales para Slack, Discord, Teams y mas.",
    href: "/track-3",
    available: true,
  },
]

export function DeckSelectorSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 overflow-y-auto py-16 sm:py-0 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6 text-center">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            Tracks
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6 text-center">
          Elige tu track
        </h2>

        <p className="slide-animate text-neutral-400 text-base sm:text-lg max-w-xl mx-auto mb-10 sm:mb-14 leading-relaxed text-center">
          Cada track tiene contenido especializado para que puedas construir sin empezar desde cero.
        </p>

        {/* Deck cards */}
        <div className="slide-animate grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {decks.map((deck) => (
            <div key={deck.id} className="relative">
              {deck.available ? (
                <Link
                  href={deck.href}
                  className="block p-6 sm:p-8 border border-neutral-800 hover:border-white transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-neutral-600 font-mono text-xs tracking-wider">
                      {deck.number}
                    </span>
                    <svg 
                      className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white mb-1 group-hover:text-white transition-colors">
                    {deck.title}
                  </h3>
                  <p className={`${GeistPixelSquare.className} text-lg sm:text-xl text-neutral-400 group-hover:text-white transition-colors mb-3`}>
                    {deck.subtitle}
                  </p>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {deck.description}
                  </p>
                </Link>
              ) : (
                <div className="p-6 sm:p-8 border border-neutral-900 opacity-50 cursor-not-allowed">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-neutral-700 font-mono text-xs tracking-wider">
                      {deck.number}
                    </span>
                    <span className="text-neutral-700 font-mono text-xs">
                      Proximamente
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-neutral-600 mb-1">
                    {deck.title}
                  </h3>
                  <p className={`${GeistPixelSquare.className} text-lg sm:text-xl text-neutral-700 mb-3`}>
                    {deck.subtitle}
                  </p>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {deck.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="slide-animate mt-10 sm:mt-14 text-center">
          <p className="text-neutral-600 text-xs sm:text-sm">
            Navega hacia atras para ver el deck principal
          </p>
        </div>
      </div>
    </section>
  )
}
