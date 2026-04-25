"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function TrackChromeActions() {
  return (
    <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.14em]">
      <ThemeToggle />
      <Link
        href="/?slide=tracks"
        className="border border-neutral-800 bg-background/70 px-3 py-2 text-muted-foreground backdrop-blur transition-colors hover:border-foreground hover:text-foreground"
      >
        Tracks
      </Link>
      <a
        href="https://ailabs.sv/links"
        target="_blank"
        rel="noreferrer"
        className="border border-neutral-800 bg-background/70 px-3 py-2 text-muted-foreground backdrop-blur transition-colors hover:border-foreground hover:text-foreground"
      >
        Links
      </a>
    </div>
  )
}
