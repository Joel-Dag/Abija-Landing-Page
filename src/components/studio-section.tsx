"use client"

import React from 'react'
import { motion } from 'motion/react'

export function StudioSection() {
  return (
    <section 
      id="studio" 
      className="py-32 px-6 md:px-10 max-w-[1600px] mx-auto border-b border-white/10 bg-[#121212]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10">
        
        {/* Left column marker */}
        <div className="col-span-1 md:col-span-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            [ 003 — STUDIO PROFILE ]
          </span>
        </div>

        {/* Right column narrative content */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl font-light leading-relaxed tracking-tight text-white/90"
          >
            Abija Lab operates as a spatial research collective. We do not design mere enclosures; we analyze environmental fields, tectonic assembly layers, and geometric phenomena to manifest pristine physical artifacts.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 font-mono text-xs text-white/50 leading-relaxed uppercase tracking-wider">
            <div>
              <h4 className="text-white font-bold mb-2">// CORE RESEARCH</h4>
              <p>Computational Form-Finding<br />Brutalist Material Assemblies<br />Spatial Topology Systems</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">// LOCATIONS</h4>
              <p>Addis Ababa, ET — Main Lab<br />London, UK — Studio Satellite</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}