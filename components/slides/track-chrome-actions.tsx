"use client"

import Link from "next/link"

import { ThemeToggle } from "@/components/ui/theme-toggle"

export function TrackChromeActions() {
  return (
    <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.14em]">
      <Link
        href="/?slide=hero"
        className="border border-border bg-background/80 px-3 py-2 text-muted-foreground backdrop-blur transition-colors hover:border-foreground hover:text-foreground"
      >
        Inicio
      </Link>
      <Link
        href="/?slide=tracks"
        className="border border-border bg-background/80 px-3 py-2 text-muted-foreground backdrop-blur transition-colors hover:border-foreground hover:text-foreground"
      >
        Tracks
      </Link>
      <a
        href="https://ailabs.sv/links"
        target="_blank"
        rel="noreferrer"
        className="border border-border bg-background/80 px-3 py-2 text-muted-foreground backdrop-blur transition-colors hover:border-foreground hover:text-foreground"
      >
        Links
      </a>
      <ThemeToggle />
    </div>
  )
}
