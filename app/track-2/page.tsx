"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

import { TrackChromeActions } from "@/components/slides/track-chrome-actions"
import { track2Slides } from "@/components/slides/track2/slides"

const TOTAL_SLIDES = track2Slides.length

export default function Track2Page() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index < 0 || index >= TOTAL_SLIDES) return
      if (index === currentSlide) return

      setIsAnimating(true)
      const direction = index > currentSlide ? 1 : -1

      const currentSlideEl = slidesRef.current?.children[currentSlide] as HTMLElement
      const nextSlideEl = slidesRef.current?.children[index] as HTMLElement

      if (currentSlideEl && nextSlideEl) {
        gsap.set(nextSlideEl, {
          opacity: 0,
          x: direction * 100,
        })

        gsap.to(currentSlideEl, {
          opacity: 0,
          x: -direction * 50,
          duration: 0.4,
          ease: "power2.inOut",
        })

        gsap.to(nextSlideEl, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
            setIsAnimating(false)
            setCurrentSlide(index)
          },
        })

        const animateElements = nextSlideEl.querySelectorAll(".slide-animate")
        gsap.fromTo(
          animateElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            delay: 0.2,
            ease: "power2.out",
          }
        )
      }
    },
    [currentSlide, isAnimating]
  )

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      goToSlide(currentSlide + 1)
    }
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  useEffect(() => {
    const firstSlide = slidesRef.current?.children[0] as HTMLElement
    if (firstSlide) {
      const animateElements = firstSlide.querySelectorAll(".slide-animate")
      gsap.fromTo(
        animateElements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
        }
      )
    }
  }, [])

  useEffect(() => {
    if (slidesRef.current) {
      Array.from(slidesRef.current.children).forEach((child, index) => {
        if (index !== 0) {
          gsap.set(child, { opacity: 0, x: 100 })
        } else {
          gsap.set(child, { opacity: 1, x: 0 })
        }
      })
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-background text-foreground overflow-hidden"
    >
      <div ref={slidesRef} className="w-full h-full relative">
        {track2Slides.map((Slide, index) => (
          <Slide key={index} isActive={currentSlide === index} />
        ))}
      </div>

      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-6 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0 || isAnimating}
          className="w-8 h-8 sm:w-10 sm:h-10 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-white hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Slide anterior"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-1 sm:gap-1.5">
          {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`transition-all ${
                index === currentSlide
                  ? "w-4 sm:w-6 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-neutral-700 hover:bg-neutral-500"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1 || isAnimating}
          className="w-8 h-8 sm:w-10 sm:h-10 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-white hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Siguiente slide"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 font-mono text-xs sm:text-sm text-neutral-500">
        <span className="text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(TOTAL_SLIDES).padStart(2, "0")}</span>
      </div>

      <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 font-mono text-xs text-neutral-600">
        Track 02 / MCP
      </div>

      <TrackChromeActions />

      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 font-mono text-xs text-neutral-600 hidden md:flex items-center gap-2">
        <kbd className="px-1.5 py-0.5 border border-neutral-700 text-neutral-500">
          {"<-"}
        </kbd>
        <kbd className="px-1.5 py-0.5 border border-neutral-700 text-neutral-500">
          {"->"}
        </kbd>
        <span>para navegar</span>
      </div>
    </div>
  )
}
