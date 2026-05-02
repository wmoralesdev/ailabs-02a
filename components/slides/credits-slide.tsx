"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"
import QRCode from "qrcode"

interface SlideProps {
  isActive: boolean
}

const creditsUrl = "https://v0.link/7P6EJk3"
const QR_SIZE = 200

export function CreditsSlide({ isActive }: SlideProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return
    const isDark = resolvedTheme === "dark" || resolvedTheme === undefined
    QRCode.toCanvas(canvasRef.current, creditsUrl, {
      width: QR_SIZE,
      margin: 1,
      color: isDark
        ? { dark: "#ffffff", light: "#000000" }
        : { dark: "#000000", light: "#ffffff" },
    })
  }, [resolvedTheme])

  return (
    <section
      className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 ${isActive ? "pointer-events-auto" : "pointer-events-none"
        }`}
    >
      {/* Background triangle */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] text-foreground" viewBox="0 0 76 65" fill="currentColor">
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto w-full text-center relative z-10">
        {/* Section label */}
        <div className="slide-animate mb-4 sm:mb-6">
          <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            06 / Regalo
          </span>
        </div>

        {/* Title */}
        <h2 className="slide-animate text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-foreground mb-4 sm:mb-6">
          $30 USD
        </h2>

        <p className="slide-animate text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6 sm:mb-8">
          en créditos de v0
        </p>

        <p className="slide-animate text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          Como asistente del evento, tendrás un link privado. Ábrelo, inicia sesión con tu cuenta de Vercel y los créditos se aplican automáticamente.
        </p>

        <div className="slide-animate flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 p-6 sm:p-10 border border-border bg-background/50">
          <div className="flex flex-col items-center shrink-0">
            <div className="p-3 sm:p-4 border border-border bg-background">
              <canvas ref={canvasRef} className="block h-[200px] w-[200px] max-w-full" />
            </div>
            <p className="mt-3 font-mono text-xs text-muted-foreground">Escanea para abrir</p>
          </div>

          <div className="inline-flex flex-col items-center sm:items-start max-w-sm">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-foreground/50 flex items-center justify-center mb-4 sm:mb-6">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-foreground/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>

            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 sm:text-left">
              Paso obligatorio antes de build time
            </p>

            <a
              href={creditsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-secondary text-muted-foreground hover:text-foreground font-mono text-xs sm:text-sm border border-border hover:border-border transition-colors"
            >
              v0.link/PB3HQk7
            </a>
          </div>
        </div>

        <p className="slide-animate text-muted-foreground text-xs sm:text-sm mt-6 sm:mt-8">
          Un link por evento. Si no funciona, avísanos de inmediato para resolverlo con el equipo de Vercel.
        </p>
      </div>
    </section>
  )
}
