import { delay, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { DEVOUCH_LINK } from '../../../utils/config'
import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'

const EcosystemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    margin: '0px 100px -50px 0px'
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
      className="m-4 my-8 sm:my-20 start-col sm:center-row"
    >
      {/* top vouched project on devouch */}
      <motion.a
        target="_blank"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          'bg-[#D6D8FE] no-underline  sm:w-[300px] text-[#3742FA] start-col p-4 cursor-pointer sm:p-6 rounded-xl text-xl text-s-text font-bold shadow-sm hover:shadow-lg'
        )}
        href={DEVOUCH_LINK}
      >
        <motion.div
          variants={itemVariants}
          className="start-center-row gap-x-1"
        >
          <img
            src={'https://devouch.xyz/images/logo.svg'}
            className="w-8 sm:w-10 h-8 sm:h-10"
          />
          <img
            src={'https://devouch.xyz/images/logotype.svg'}
            className="h-8 sm:h-10"
          />

          <ArrowUpRight className="text-[#3742FA] ml-3" size={30} />
        </motion.div>
        <motion.div variants={itemVariants} className="mt-3 text-[#3742FA]">
          <span>Most Vouched Project on Devouch</span>
        </motion.div>
      </motion.a>
    </motion.div>
  )
}

export default EcosystemSection
