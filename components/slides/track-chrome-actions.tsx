"use client"

import Link from "next/link"

export function TrackChromeActions() {
  return (
    <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.14em]">
      <Link
        href="/?slide=tracks"
        className="border border-neutral-800 bg-black/70 px-3 py-2 text-neutral-400 backdrop-blur transition-colors hover:border-white hover:text-white"
      >
        Tracks
      </Link>
      <a
        href="https://ailabs.sv/links"
        target="_blank"
        rel="noreferrer"
        className="border border-neutral-800 bg-black/70 px-3 py-2 text-neutral-400 backdrop-blur transition-colors hover:border-white hover:text-white"
      >
        Links
      </a>
    </div>
  )
}
