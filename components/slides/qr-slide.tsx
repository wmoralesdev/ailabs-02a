"use client"

import { useEffect, useRef } from "react"
import QRCode from "qrcode"

interface SlideProps {
  isActive: boolean
}

export function QRSlide({ isActive }: SlideProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, "https://v0.ailabs.sv", {
        width: 280,
        margin: 0,
        color: {
          dark: "#ffffff",
          light: "#000000",
        },
      })
    }
  }, [])

  return (
    <section
      className={`absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8 md:px-16 lg:px-24 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="slide-animate flex flex-col items-center">
        {/* QR Code */}
        <div className="p-4 sm:p-6 bg-black border border-neutral-800">
          <canvas ref={canvasRef} className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px]" />
        </div>

        {/* URL */}
        <p className="mt-6 sm:mt-8 font-mono text-sm sm:text-base text-neutral-500">
          v0.ailabs.sv
        </p>
      </div>
    </section>
  )
}
