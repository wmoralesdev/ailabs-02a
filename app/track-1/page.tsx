"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

import { TrackChromeActions } from "@/components/slides/track-chrome-actions"
import { BottomChrome } from "@/components/slides/bottom-chrome"

// Track 1 slide components
import { Track1TitleSlide } from "@/components/slides/track1/title-slide"
import { Track1ProblemSlide } from "@/components/slides/track1/problem-slide"
import { Track1DurableSlide } from "@/components/slides/track1/durable-slide"
import { Track1EnablesSlide } from "@/components/slides/track1/enables-slide"
import { Track1MentalModelsSlide } from "@/components/slides/track1/mental-models-slide"
import { Track1WaitingSlide } from "@/components/slides/track1/waiting-slide"
import { Track1ObservabilitySlide } from "@/components/slides/track1/observability-slide"
import { Track1BestProjectsSlide } from "@/components/slides/track1/best-projects-slide"
import { Track1StarterRecipesSlide } from "@/components/slides/track1/starter-recipes-slide"
import { Track1IdeasMenuSlide } from "@/components/slides/track1/ideas-menu-slide"
import { Track1PromptV0Slide } from "@/components/slides/track1/prompt-v0-slide"
import { Track1StarterPromptSlide } from "@/components/slides/track1/starter-prompt-slide"
import { Track1MockDataSlide } from "@/components/slides/track1/mock-data-slide"
import { Track1DemoExampleSlide } from "@/components/slides/track1/demo-example-slide"
import { Track1PatternsSlide } from "@/components/slides/track1/patterns-slide"
import { Track1DemoChecklistSlide } from "@/components/slides/track1/demo-checklist-slide"
import { Track1V0StuckSlide } from "@/components/slides/track1/v0-stuck-slide"
import { Track1MistakesSlide } from "@/components/slides/track1/mistakes-slide"
import { Track1RecapSlide } from "@/components/slides/track1/recap-slide"

const TOTAL_SLIDES = 19

export default function Track1Page() {
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

  // Initial animation
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

  // Hide non-active slides initially
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
      {/* Slides Container */}
      <div ref={slidesRef} className="w-full h-full relative">
        <Track1TitleSlide isActive={currentSlide === 0} />
        <Track1ProblemSlide isActive={currentSlide === 1} />
        <Track1DurableSlide isActive={currentSlide === 2} />
        <Track1EnablesSlide isActive={currentSlide === 3} />
        <Track1MentalModelsSlide isActive={currentSlide === 4} />
        <Track1WaitingSlide isActive={currentSlide === 5} />
        <Track1ObservabilitySlide isActive={currentSlide === 6} />
        <Track1BestProjectsSlide isActive={currentSlide === 7} />
        <Track1StarterRecipesSlide isActive={currentSlide === 8} />
        <Track1IdeasMenuSlide isActive={currentSlide === 9} />
        <Track1PromptV0Slide isActive={currentSlide === 10} />
        <Track1StarterPromptSlide isActive={currentSlide === 11} />
        <Track1MockDataSlide isActive={currentSlide === 12} />
        <Track1DemoExampleSlide isActive={currentSlide === 13} />
        <Track1PatternsSlide isActive={currentSlide === 14} />
        <Track1DemoChecklistSlide isActive={currentSlide === 15} />
        <Track1V0StuckSlide isActive={currentSlide === 16} />
        <Track1MistakesSlide isActive={currentSlide === 17} />
        <Track1RecapSlide isActive={currentSlide === 18} />
      </div>

      {/* Track indicator */}
      <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 font-mono text-xs text-muted-foreground">
        Track 01 / WDK
      </div>

      <TrackChromeActions />

      <BottomChrome
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        isAnimating={isAnimating}
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoTo={goToSlide}
      />
    </div>
  )
}
