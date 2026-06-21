"use client"

import React from 'react'

export function SiteHeader() {
  return (
    // Switched to fixed, locked down the height, and aligned to our stark theme color matrix
    <header className="fixed top-0 left-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-[1600px] h-20 items-center justify-between px-6 md:px-10">
        
        {/* Brand identity anchored cleanly to the top-left */}
        <a 
          href="#hero" 
          className="font-sans text-sm font-bold tracking-widest text-white uppercase transition-opacity duration-300 hover:opacity-70"
        >
          Abija&nbsp;Lab
        </a>

        {/* Keeping your elegant dynamic map loop intact, with upgraded text coloring */}
        <nav className="hidden gap-10 md:flex" aria-label="Primary">
          {['Process', 'Work', 'Studio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Status Block: Combines your signature timeline marker with an active radar node */}
        <div className="flex items-center gap-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
            Est.&nbsp;MMXIV
          </span>
        </div>

      </div>
    </header>
  )
}