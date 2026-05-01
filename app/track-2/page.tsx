"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

import { TrackChromeActions } from "@/components/slides/track-chrome-actions"
import { BottomChrome } from "@/components/slides/bottom-chrome"
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

      <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 font-mono text-xs text-muted-foreground">
        Track 02 / MCP
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
