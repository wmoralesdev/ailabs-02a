"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

import { TrackChromeActions } from "@/components/slides/track-chrome-actions"
import { BottomChrome } from "@/components/slides/bottom-chrome"
import {
  Track3ArchitectureRecapSlide,
  Track3BuildFirstSlide,
  Track3DemoScriptSlide,
  Track3FlowSlide,
  Track3MvdChecklistSlide,
  Track3MockFirstSlide,
  Track3MistakesSlide,
  Track3PlainLanguageSlide,
  Track3ProblemSlide,
  Track3PromptingSlide,
  Track3QuickStartSlide,
  Track3RecapSlide,
  Track3RecipesSlide,
  Track3ResourcesSlide,
  Track3StackSlide,
  Track3StarterPromptSlide,
  Track3StuckSlide,
  Track3TitleSlide,
  Track3UseCasesSlide,
} from "@/components/slides/track3/slides"

const TOTAL_SLIDES = 19

export default function Track3Page() {
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
        <Track3TitleSlide isActive={currentSlide === 0} />
        <Track3ProblemSlide isActive={currentSlide === 1} />
        <Track3PlainLanguageSlide isActive={currentSlide === 2} />
        <Track3FlowSlide isActive={currentSlide === 3} />
        <Track3StackSlide isActive={currentSlide === 4} />
        <Track3QuickStartSlide isActive={currentSlide === 5} />
        <Track3UseCasesSlide isActive={currentSlide === 6} />
        <Track3RecipesSlide isActive={currentSlide === 7} />
        <Track3BuildFirstSlide isActive={currentSlide === 8} />
        <Track3StarterPromptSlide isActive={currentSlide === 9} />
        <Track3MockFirstSlide isActive={currentSlide === 10} />
        <Track3MvdChecklistSlide isActive={currentSlide === 11} />
        <Track3DemoScriptSlide isActive={currentSlide === 12} />
        <Track3MistakesSlide isActive={currentSlide === 13} />
        <Track3StuckSlide isActive={currentSlide === 14} />
        <Track3PromptingSlide isActive={currentSlide === 15} />
        <Track3ResourcesSlide isActive={currentSlide === 16} />
        <Track3ArchitectureRecapSlide isActive={currentSlide === 17} />
        <Track3RecapSlide isActive={currentSlide === 18} />
      </div>

      <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 font-mono text-xs text-muted-foreground">
        Track 03 / ChatSDK
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
