"use client"

import { useState } from "react"

interface BottomChromeProps {
  currentSlide: number
  totalSlides: number
  isAnimating: boolean
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
}

export function BottomChrome({
  currentSlide,
  totalSlides,
  isAnimating,
  onPrev,
  onNext,
  onGoTo,
}: BottomChromeProps) {
  const [visible, setVisible] = useState(true)

  return (
    <>
      {/* Toggle button — always visible */}
      <button
        onClick={() => setVisible((v) => !v)}
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 w-7 h-7 flex items-center justify-center border border-border bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:border-foreground hover:text-foreground"
        aria-label={visible ? "Ocultar controles" : "Mostrar controles"}
        title={visible ? "Ocultar controles" : "Mostrar controles"}
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {visible ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          )}
        </svg>
      </button>

      {/* Navigation controls */}
      <div
        className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-6 z-50 transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <button
          onClick={onPrev}
          disabled={currentSlide === 0 || isAnimating}
          className="w-8 h-8 sm:w-10 sm:h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Slide anterior"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-1 sm:gap-1.5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoTo(index)}
              disabled={isAnimating}
              className={`transition-all ${
                index === currentSlide
                  ? "w-4 sm:w-6 h-1.5 bg-foreground"
                  : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1 || isAnimating}
          className="w-8 h-8 sm:w-10 sm:h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Siguiente slide"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide counter */}
      <div
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 font-mono text-xs sm:text-sm text-muted-foreground transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="text-foreground">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(totalSlides).padStart(2, "0")}</span>
      </div>
    </>
  )
}
