'use client'
import './globals.css'

import FeaturedProjects from '../components/pages/home/FeaturedProjects'
import LandingScene from '../components/pages/home/LandingScene'

export default function Home() {
  return (
    <div className="w-full h-full start-col relative overflow-hidden">
      <LandingScene />
      {/* projects */}
      <FeaturedProjects />
    </div>
  )
}
