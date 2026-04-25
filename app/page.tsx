"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

// Slide content components
import { QRSlide } from "@/components/slides/qr-slide"
import { HeroSlide } from "@/components/slides/hero-slide"
import { WelcomeVideoSlide } from "@/components/slides/welcome-video-slide"
import { FormatSlide } from "@/components/slides/format-slide"
import { TracksSlide } from "@/components/slides/tracks-slide"
import { PrizesSlide } from "@/components/slides/prizes-slide"
import { ResourcesSlide } from "@/components/slides/resources-slide"
import { CreditsSlide } from "@/components/slides/credits-slide"
import { DatesSlide } from "@/components/slides/dates-slide"
import { SocialSlide } from "@/components/slides/social-slide"
import { DeckSelectorSlide } from "@/components/slides/deck-selector-slide"

const TOTAL_SLIDES = 11
const INITIAL_SLIDE = 1 // Start at hero slide, but allow navigating back to QR
const TRACK_SELECTOR_SLIDE = TOTAL_SLIDES - 1

function getInitialSlide() {
  if (typeof window === "undefined") return INITIAL_SLIDE

  const params = new URLSearchParams(window.location.search)
  if (params.get("slide") === "tracks") return TRACK_SELECTOR_SLIDE

  return INITIAL_SLIDE
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(INITIAL_SLIDE)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index < 0 || index >= TOTAL_SLIDES) return
      if (index === currentSlide) return

      setIsAnimating(true)
      const direction = index > currentSlide ? 1 : -1

      // Animate out current slide
      const currentSlideEl = slidesRef.current?.children[currentSlide] as HTMLElement
      const nextSlideEl = slidesRef.current?.children[index] as HTMLElement

      if (currentSlideEl && nextSlideEl) {
        // Set up next slide
        gsap.set(nextSlideEl, {
          opacity: 0,
          x: direction * 100,
        })

        // Animate
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

        // Animate slide content
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

  // Keyboard navigation
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

  // Initial layout and animation
  useEffect(() => {
    const initialSlideIndex = getInitialSlide()
    setCurrentSlide(initialSlideIndex)

    if (slidesRef.current) {
      Array.from(slidesRef.current.children).forEach((child, index) => {
        if (index !== initialSlideIndex) {
          gsap.set(child, { opacity: 0, x: index < initialSlideIndex ? -100 : 100 })
        } else {
          gsap.set(child, { opacity: 1, x: 0 })
        }
      })
    }

    const initialSlide = slidesRef.current?.children[initialSlideIndex] as HTMLElement
    if (initialSlide) {
      const animateElements = initialSlide.querySelectorAll(".slide-animate")
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

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black text-white overflow-hidden"
    >
      {/* Slides Container */}
      <div ref={slidesRef} className="w-full h-full relative">
        <QRSlide isActive={currentSlide === 0} />
        <HeroSlide isActive={currentSlide === 1} />
        <WelcomeVideoSlide isActive={currentSlide === 2} />
        <FormatSlide isActive={currentSlide === 3} />
        <TracksSlide isActive={currentSlide === 4} />
        <PrizesSlide isActive={currentSlide === 5} />
        <ResourcesSlide isActive={currentSlide === 6} />
        <CreditsSlide isActive={currentSlide === 7} />
        <DatesSlide isActive={currentSlide === 8} />
        <SocialSlide isActive={currentSlide === 9} />
        <DeckSelectorSlide isActive={currentSlide === 10} />
      </div>

      {/* Navigation controls */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-6 z-50">
        {/* Prev button */}
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

        {/* Slide indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`transition-all ${
                index === currentSlide
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-white"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
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

      {/* Slide counter */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 font-mono text-xs sm:text-sm text-neutral-500">
        <span className="text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(TOTAL_SLIDES).padStart(2, "0")}</span>
      </div>

      {/* Keyboard hint */}
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
