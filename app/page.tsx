"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useCallback, useEffect, useRef, useState } from "react"
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
import { TrackChromeActions } from "@/components/slides/track-chrome-actions"
import { BottomChrome } from "@/components/slides/bottom-chrome"

const TOTAL_SLIDES = 11
const INITIAL_SLIDE = 1 // Start at hero slide, but allow navigating back to QR
const TRACK_SELECTOR_SLIDE = TOTAL_SLIDES - 1
/** 0-based; “slide 2” of the main deck = hero */
const HERO_SLIDE_INDEX = 1

function getInitialSlide() {
  if (typeof window === "undefined") return INITIAL_SLIDE

  const params = new URLSearchParams(window.location.search)
  if (params.get("slide") === "tracks") return TRACK_SELECTOR_SLIDE
  if (params.get("slide") === "hero") return HERO_SLIDE_INDEX

  return INITIAL_SLIDE
}

function HomeDeck() {
  const router = useRouter()
  const searchParams = useSearchParams()
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

  const skipQueryDeepLink = useRef(true)

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

  // In-app /?slide=… after first paint (e.g. Inicio/Tracks on same / session); then strip query
  useEffect(() => {
    if (skipQueryDeepLink.current) {
      skipQueryDeepLink.current = false
      return
    }
    const s = searchParams.get("slide")
    if (s === "hero") {
      goToSlide(HERO_SLIDE_INDEX)
      router.replace("/", { scroll: false })
    } else if (s === "tracks") {
      goToSlide(TRACK_SELECTOR_SLIDE)
      router.replace("/", { scroll: false })
    }
  }, [searchParams, goToSlide, router])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-background text-foreground overflow-hidden"
    >
      <TrackChromeActions />
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

export default function HomePage() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-background" />}>
      <HomeDeck />
    </Suspense>
  )
}
