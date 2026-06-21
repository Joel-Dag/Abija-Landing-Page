"use client"

import { motion } from "motion/react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between p-8 md:p-16 border-b border-white/10 overflow-hidden bg-[#121212]">
      {/* Top Architectural Meta Grid */}
      <div className="flex justify-between items-start font-mono text-xs tracking-widest text-white/40 uppercase">
        <div>[ ABIJA LAB ]</div>
        <div className="text-right">ADDIS ABABA / LONDON<br />CYCLE — 2026</div>
      </div>

      {/* Massive Splitting Typography */}
      <div className="my-auto select-none">
        <h1 className="text-[12vw] font-bold leading-[0.8] tracking-tighter uppercase flex flex-col">
          {/* First line slides in from left */}
          <motion.span 
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="block text-white"
          >
            Structural
          </motion.span>
          
          {/* Second line slides in from right with an outline treatment */}
          <motion.span 
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block text-right stroke-text"
          >
            Prestige
          </motion.span>
        </h1>
      </div>

      {/* Bottom Layout Anchors */}
      <div className="flex justify-between items-end font-mono text-xs tracking-widest text-white/40">
        <div>01 // SYSTEM KINETICS</div>
        <div>SCROLL TO DECONSTRUCT ↓</div>
      </div>
    </section>
  )
}