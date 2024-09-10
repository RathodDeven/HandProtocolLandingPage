'use client'
import './globals.css'

import FeaturedProjects from '../components/pages/home/FeaturedProjects'
import FooterSection from '../components/pages/home/FooterSection'
import LandingSection from '../components/pages/home/LandingSection'
import EcosystemSection from '../components/pages/home/EcosystemSection'

export default function Home() {
  return (
    <div className="w-full h-full start-col relative overflow-hidden">
      <LandingSection />
      {/* projects */}
      <FeaturedProjects />
      <EcosystemSection />
      <FooterSection />
    </div>
  )
}
