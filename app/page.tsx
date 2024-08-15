'use client'
import './globals.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DISCORD_INVITE_LINK } from '../utils/config'
import Confetti from 'react-confetti'

export default function Home() {
  const [isConfettiActive, setIsConfettiActive] = useState(false)
  const staggerContainer = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  }

  const handleButtonClick = () => {
    setIsConfettiActive(true)
    setTimeout(() => {
      setIsConfettiActive(false)
      window.open(DISCORD_INVITE_LINK, '_blank')
    }, 2000) // Duration of the confetti animation
  }

  useEffect(() => {
    const videoElement = document.getElementById(
      'handAnimationVideo'
    ) as HTMLVideoElement

    console.log('videoElement', videoElement)
    if (videoElement) {
      videoElement.play()
    }
  }, [])
  return (
    <div className="h-full w-full centered-col cursor-grab selection:cursor-grabbing">
      {isConfettiActive && <Confetti wind={0.03} numberOfPieces={300} />}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.3, type: 'spring' }}
        className=" h-full centered-col text-center w-[600px] gap-y-10 -mt-36"
      >
        <motion.div variants={childVariants} className="relative w-fit h-fit">
          {/* <img src="/handThumbnail.png" width={350} height={350} /> */}
          <video src="handAnimation.mp4" width={350} autoPlay muted loop />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/90 via-transparent to-black/90"></div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="text-4xl font-bold"
          transition={{ duration: 0.3, type: 'spring' }}
        >
          Empowering Public Good Projects in a fun way
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="text-s-text font-semibold text-xl"
          transition={{ duration: 0.3, type: 'spring' }}
        >
          The $HAND Protocol is here to reshape how we support public goods. By
          using blockchain, media, and community power, we're building better
          ways to fund and grow impact projects. Join us in making a real
          difference together.
        </motion.div>

        <motion.button
          variants={staggerContainer}
          whileTap={{
            scale: 1,
            opacity: 0.8
          }}
          onClick={handleButtonClick}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, type: 'spring' }}
          className="bg-p-text cursor-grab active:cursor-grabbing centered-row border-none gap-x-4 font-bold text-lg text-p-bg px-10 py-4 rounded-2xl"
        >
          <img src="/discord-icon.svg" width={24} height={24} />
          Join the Movement
        </motion.button>
      </motion.div>
    </div>
  )
}
