import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { HandCoins } from 'lucide-react'
import { DISCORD_INVITE_LINK } from '../../../utils/config'
import useIsMobile from '../../../utils/hooks/useIsMobile'
import Spline from '@splinetool/react-spline'

const LandingSection = ({ scrollToProjects }) => {
  const isMobile = useIsMobile()
  const [isConfettiActive, setIsConfettiActive] = useState(false)
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, x: -20, scale: 1.5 },
    show: { opacity: 1, x: 0, scale: 1 }
  }

  const handleButtonClick = () => {
    setIsConfettiActive(true)
    setTimeout(() => {
      setIsConfettiActive(false)
      if (typeof window === 'undefined') return
      if (isMobile) {
        // just redirect to discord invite link
        window.open(DISCORD_INVITE_LINK, '_blank')
      }
      const width = 500
      const height = 300
      const left = window.screen.width / 2 - width / 2
      const top = window.screen.height / 2 - height / 2

      window.open(
        DISCORD_INVITE_LINK,
        'popup',
        `width=${width},height=${height},left=${left},top=${top}`
      )
      scrollToProjects()
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
    <div>
      {isConfettiActive && <Confetti wind={0.03} numberOfPieces={300} />}

      {/* landing component with title and description */}
      <div className="w-screen h-[calc(180vh)] sm:h-screen  box-border  -mt-14 sm:-mt-20 flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:px-16 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.3, type: 'spring' }}
          className=" h-[120vh] flex flex-col justify-center items-center text-center sm:text-left sm:items-start w-full px-4 sm:px-0 sm:w-[600px] gap-y-10"
        >
          <motion.div
            variants={childVariants}
            className="text-4xl px-4 sm:px-0 sm:text-6xl font-bold"
            transition={{ duration: 0.3, type: 'spring' }}
          >
            Empowering Public Good Projects
          </motion.div>
          <motion.div
            variants={childVariants}
            className="text-s-text px-2 sm:px-0 font-semibold text-xl sm:text-2xl"
            transition={{ duration: 0.3, type: 'spring' }}
          >
            Our platform connects impactful projects with generous donors,
            streamlining the giving process to maximize contributions. We
            actively seek out, onboard and support diverse initiatives, handling
            all logistics to ensure your donation makes the greatest possible
            difference.
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0 },
              show: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.3, type: 'spring', staggerChildren: 0.3 }}
            className="center-col sm:start-center-row gap-y-4 sm:gap-x-6"
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
              className="bg-p-text shrink-0 cursor-grab active:cursor-grabbing center-row border-none gap-x-4 font-bold text-lg text-p-bg px-10 py-4 rounded-2xl"
            >
              <HandCoins width={24} height={24} />
              Lend A Hand
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="relative w-full sm:w-2/3 h-1/2 sm:h-full sm:-mr-20 "
          initial="hidden"
          animate="show"
        >
          <div className="absolute bg-p-bg w-full h-16 sm:h-24 bottom-0 left-0 right-0 z-10" />
          <Spline scene="https://prod.spline.design/IxRYPtXdWd3qBqXH/scene.splinecode" />
        </motion.div>
      </div>
    </div>
  )
}

export default LandingSection
