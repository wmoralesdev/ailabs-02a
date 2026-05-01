"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"
import QRCode from "qrcode"

interface SlideProps {
  isActive: boolean
}

export function QRSlide({ isActive }: SlideProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return
    const isDark = resolvedTheme === "dark" || resolvedTheme === undefined
    QRCode.toCanvas(canvasRef.current, "https://02a.ailabs.gt", {
      width: 280,
      margin: 0,
      color: isDark
        ? { dark: "#ffffff", light: "#000000" }
        : { dark: "#000000", light: "#ffffff" },
    })
  }, [resolvedTheme])

  return (
    <section
      className={`absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8 md:px-16 lg:px-24 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="slide-animate flex flex-col items-center">
        <div className="p-4 sm:p-6 bg-background border border-border">
          <canvas ref={canvasRef} className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px]" />
        </div>

        <p className="mt-6 sm:mt-8 font-mono text-sm sm:text-base text-muted-foreground">
          02a.ailabs.gt
        </p>
      </div>
    </section>
  )
}
