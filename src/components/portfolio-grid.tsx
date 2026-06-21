"use client"

import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef } from 'react'

type Project = {
  index: string
  title: string
  location: string
  year: string
  image: string
  span: string
  aspect: string
}

const projects: Project[] = [
  {
    index: '01',
    title: 'Monolith House',
    location: 'Girona, ES',
    year: '2023',
    image: '/project-feature.webp', // Your 1st original image
    span: 'md:col-span-7',
    aspect: 'aspect-[4/3]',
  },
  {
    index: '02',
    title: 'Civic Atrium',
    location: 'Lyon, FR',
    year: '2022',
    image: '/atrium.webp',          // Your new Midjourney render 1
    span: 'md:col-span-5',
    aspect: 'aspect-[4/5]',
  },
  {
    index: '03',
    title: 'Cantilever Stair',
    location: 'Porto, PT',
    year: '2024',
    image: '/stair.webp',           // Your new Midjourney render 2
    span: 'md:col-span-5',
    aspect: 'aspect-[4/5]',
  },
  {
    index: '04',
    title: 'Grid Pavilion',
    location: 'Basel, CH',
    year: '2021',
    image: '/project-detail.webp',  // Your 2nd original image
    span: 'md:col-span-7',
    aspect: 'aspect-[4/3]',
  },
]

export function PortfolioGrid() {
  return (
    <section id="work" aria-labelledby="work-title">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        
        {/* Border Grid Header */}
        <div className="grid grid-cols-12 gap-px border-b border-white/10 py-6">
          <h2
            id="work-title"
            className="col-span-6 font-mono text-xs uppercase tracking-[0.2em] text-white/40"
          >
            002 — Selected Work
          </h2>
          <p className="col-span-6 text-right font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            04 of 24
          </p>
        </div>

        {/* Dynamic Project Grid Container */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 py-16 md:grid-cols-12">
          {projects.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}

// Extracted Sub-Component to manage isolated mouse listeners cleanly
function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Set up smooth physics interpolation constants
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    // Calculate relative cursor coordinates inside the specific image viewport boundaries
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    mouseX.set(x * 0.12) // Subtle structural dampening multiplier (12% of true delta)
    mouseY.set(y * 0.12)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <article className={`group ${project.span}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full overflow-hidden border border-white/10 bg-neutral-900 ${project.aspect}`}
      >
        {/* Motion image layer wrapper executing a 3D structural skew transformation */}
        <motion.div 
          style={{ x: springX, y: springY }}
          className="relative w-full h-full scale-105"
        >
          <Image
            src={project.image}
            alt={`${project.title}, ${project.location}`}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={project.index === '01'}
            className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
          />
        </motion.div>
      </div>

      {/* Meta Text Footer */}
      <div className="mt-4 flex items-baseline justify-between border-t border-white/10 pt-4">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-white/40">
            {project.index}
          </span>
          <h3 className="font-sans text-lg tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-blue-400">
            {project.title}
          </h3>
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
          {project.location} / {project.year}
        </span>
      </div>
    </article>
  )
}