"use client"

import { GeistPixelSquare } from 'geist/font/pixel'

interface SlideProps {
  isActive: boolean
}

export function Track1TitleSlide({ isActive }: SlideProps) {
  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Track label */}
        <div className="slide-animate mb-6 sm:mb-8">
          <span className="text-neutral-600 font-mono text-xs tracking-[0.2em] uppercase">
            Track 01
          </span>
        </div>

        {/* Title */}
        <h1 className="slide-animate text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-none mb-4">
          Vercel Workflow
        </h1>
        <h2 className={`slide-animate ${GeistPixelSquare.className} text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-500 leading-none mb-8 sm:mb-10`}>
          WDK
        </h2>

        {/* Subtitle */}
        <p className="slide-animate text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed mb-8 sm:mb-12">
          Construye agentes que terminan un proceso, aunque tengan que esperar, reintentar, pedir aprobación o continuar después de un deploy.
        </p>

        {/* Key point */}
        <div className="slide-animate">
          <p className="text-neutral-500 text-sm sm:text-base border-l-2 border-neutral-700 pl-4">
            En palabras simples: no vamos a construir un chatbot. Vamos a construir una app que inicia trabajo, lo divide en pasos y muestra hasta dónde llegó.
          </p>
        </div>
      </div>
    </section>
  )
}
