'use client'
import './globals.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DISCORD_INVITE_LINK, GITHUB_LINK } from '../utils/config'
import Confetti from 'react-confetti'
import { sleep } from '../utils/helpers'

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
        className=" h-full centered-col text-center w-full px-4 sm:px-0 sm:w-[600px] gap-y-4 sm:gap-y-10 -mt-20 sm:-mt-36"
      >
        <motion.div
          variants={childVariants}
          className="relative w-fit h-fit px-12 sm:px-0 "
        >
          {/* <img src="/handThumbnail.png" width={350} height={350} /> */}
          <img
            className="unselectable w-[250px] sm:w-[350px]"
            src="handAnimation.gif"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/90 via-transparent to-black/90"></div>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="text-2xl px-4 sm:px-0 sm:text-4xl font-bold"
          transition={{ duration: 0.3, type: 'spring' }}
        >
          Empowering Public Good Projects
        </motion.div>
        <motion.div
          variants={childVariants}
          className="text-s-text px-2 sm:px-0 font-semibold text-md sm:text-xl"
          transition={{ duration: 0.3, type: 'spring' }}
        >
          The $HAND Protocol is here to reshape how we support public goods. By
          using blockchain, media, and community power, we're building better
          ways to fund and grow impact projects. Join us in making a real
          difference together.
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            show: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 0.3, type: 'spring', staggerChildren: 0.3 }}
          className="centered-col sm:centered-row gap-y-4 sm:gap-x-6"
        >
          <motion.button
            variants={childVariants}
            whileTap={{
              scale: 0.9,
              opacity: 0.8
            }}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, type: 'spring' }}
            className="bg-p-text shrink-0 cursor-grab active:cursor-grabbing centered-row border-none gap-x-4 font-bold text-lg text-p-bg px-10 py-4 rounded-2xl"
          >
            <img src="/discord-icon.svg" width={24} height={24} />
            Join the Movement
          </motion.button>
          <motion.button
            variants={childVariants}
            whileTap={{
              scale: 0.9,
              opacity: 0.8
            }}
            onClick={async () => {
              await sleep(300)
              window.open(GITHUB_LINK, '_blank')
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, type: 'spring' }}
            className="bg-s-bg cursor-grab shrink-0 active:cursor-grabbing centered-row border-none gap-x-4 font-bold text-lg text-p-text px-10 py-4 rounded-2xl"
          >
            <img src="/github-icon.svg" width={24} height={24} />
            Github
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
