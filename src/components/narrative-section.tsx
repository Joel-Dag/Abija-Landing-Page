"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export function NarrativeSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track the scroll percentage of THIS specific section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Map scroll progress (0 to 1) to fluid structural animation properties
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])
  
  // Staggered text opacity curves (Card 1 shows early, Card 2 shows late)
  const text1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 1, 0])
  const text1Y = useTransform(scrollYProgress, [0, 0.3, 0.5], [50, 0, -50])
  
  const text2Opacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0, 1, 1])
  const text2Y = useTransform(scrollYProgress, [0.5, 0.8, 1], [50, 0, 0])

  return (
    // 1. The Scroll Track (Three viewports long)
    <section ref={containerRef} className="relative h-[300vh] bg-[#121212]">
      
      {/* 2. The Sticky Frame (Locks completely onto the browser window) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        
        {/* Left Side: Staggered Content Narrative Cards */}
        <div className="relative w-full md:w-2/5 h-1/2 md:h-full flex items-center z-10">
          
          {/* Narrative Card 01 */}
          <motion.div 
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute flex flex-col gap-4 max-w-md"
          >
            <span className="font-mono text-xs text-blue-400 tracking-widest">[ METHODOLOGY ]</span>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white">Deconstructing Forms</h2>
            <p className="text-sm leading-relaxed text-white/60">
              We isolate spatial constraints and expand structural vectors. Every blueprint represents a continuous dialogue between physical gravity and programmatic optimization.
            </p>
          </motion.div>

          {/* Narrative Card 02 */}
          <motion.div 
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute flex flex-col gap-4 max-w-md"
          >
            <span className="font-mono text-xs text-blue-400 tracking-widest">[ RESOLUTION ]</span>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white">Materialization</h2>
            <p className="text-sm leading-relaxed text-white/60">
              The blueprint collapses cleanly back into physical matter. Concrete casting, thermal glass panels, and structural steel trusses unify to form architectural monoliths.
            </p>
          </motion.div>

        </div>

        {/* Right Side: The Kinetic Structural Mesh */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
          <motion.div 
            style={{ scale, rotate }}
            className="relative w-72 h-72 md:w-96 md:h-96 border border-white/20 flex items-center justify-center bg-neutral-900/40 backdrop-blur-sm"
          >
            {/* Embedded Structural Matrix Lines simulating blueprint frames */}
            <div className="absolute inset-4 border border-white/10 flex items-center justify-center">
              <div className="absolute inset-8 border border-white/5 flex items-center justify-center">
                <div className="w-0.5 h-full bg-white/10 absolute left-1/2 -translate-x-1/2" />
                <div className="h-0.5 w-full bg-white/10 absolute top-1/2 -translate-y-1/2" />
              </div>
            </div>
            
            {/* Intersecting Corner Crosshairs */}
            <span className="absolute top-2 left-2 font-mono text-[10px] text-white/20">+ NW</span>
            <span className="absolute top-2 right-2 font-mono text-[10px] text-white/20">NE +</span>
            <span className="absolute bottom-2 left-2 font-mono text-[10px] text-white/20">+ SW</span>
            <span className="absolute bottom-2 right-2 font-mono text-[10px] text-white/20">SE +</span>
            
            <span className="font-mono text-xs tracking-widest text-white/30 uppercase animate-pulse">
              [ GRID MATRIX ]
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  )
}