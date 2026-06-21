"use client"

import React from 'react'

export function ContactFooter() {
  return (
    <footer id="contact" className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto bg-[#121212]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10">
        
        {/* Left column marker */}
        <div className="col-span-1 md:col-span-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            [ 004 — INQUIRIES ]
          </span>
        </div>

        {/* Right column dynamic email links */}
        <div className="col-span-1 md:col-span-8 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-sm text-white/60 tracking-wide max-w-sm">
              We collaborate worldwide with ambitious institutions, developers, and private collectors. Let's trace new blueprints together.
            </p>
            <a 
              href="mailto:studio@abijalab.com" 
              className="inline-block text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white hover:text-blue-400 transition-colors duration-400 mt-6 uppercase break-all"
            >
              STUDIO@ABIJALAB.COM
            </a>
          </div>

          {/* Sub-footer metadata rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 pt-8 border-t border-white/5 font-mono text-[10px] text-white/30 uppercase tracking-[0.15em]">
            <div>
              © 2026 ABIJA LAB. ALL RIGHTS RESERVED.
            </div>
            <div className="sm:text-right">
              DEVELOPED AT THE INTERSECTION OF MATERIAL & LIGHT
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}