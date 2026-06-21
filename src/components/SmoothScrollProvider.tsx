"use client"

import { ReactLenis } from 'lenis/react'
import type { PropsWithChildren } from 'react'

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.07,         // Linear interpolation rate (0.05 - 0.1 is the premium sweet spot)
        syncTouch: true,    // Mirror momentum mechanics on mobile trackpads/screens
        autoRaf: true       // Automatically hook into the system's requestAnimationFrame loop
      }}
    >
      {children}
    </ReactLenis>
  )
}