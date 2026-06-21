import { SiteHeader } from '../components/site-header'
import { HeroSection } from '../components/hero-section'
import { NarrativeSection } from '../components/narrative-section'
import { PortfolioGrid } from '../components/portfolio-grid'
import { StudioSection } from '../components/studio-section' 
import { ContactFooter } from '../components/contact-footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white">
      <SiteHeader />
      
      {/* 1. Hero Anchor */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* 2. Process Anchor */}
      <div id="process">
        <NarrativeSection />
      </div>

      {/* 3. Work Anchor (This already has id="work" inside your file!) */}
      <PortfolioGrid />

      {/* 4. Studio Section */}
      <section id="studio" className="py-32 px-8 md:px-16 max-w-[1600px] mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <span className="col-span-4 font-mono text-xs uppercase text-white/40">[ 003 — STUDIO PROFILE ]</span>
          <p className="col-span-8 text-xl md:text-3xl font-light leading-relaxed tracking-tight text-white/90">
            Abija Lab operates as a spatial research collective. We do not design mere enclosures; we analyze environmental fields, tectonic assembly layers, and geometric phenomena to manifest pristine physical artifacts.
          </p>
        </div>
      </section>

      {/* 5. Contact Section */}
      <footer id="contact" className="py-32 px-8 md:px-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-12">
          <span className="col-span-4 font-mono text-xs uppercase text-white/40">[ 004 — INQUIRIES ]</span>
          <div className="col-span-8 flex flex-col gap-6">
            <a href="mailto:studio@abijalab.com" className="text-4xl md:text-6xl font-bold tracking-tighter hover:text-blue-400 transition-colors duration-300">
              STUDIO@ABIJALAB.COM
            </a>
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest mt-8">
              ADDIS ABABA, ETHIOPIA // © 2026 ABIJA LAB. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}