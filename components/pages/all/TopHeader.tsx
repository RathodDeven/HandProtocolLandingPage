'use client'
import React, { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  APP_NAME,
  DEVOUCH_LINK,
  DISCORD_INVITE_LINK,
  DOCS_LINK,
  GITHUB_LINK,
  GIVETH_LINK,
  INIT_PROJECTS,
  LENS_LINK,
  X_LINK
} from '@/utils/config'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useIsMobile from '../../../utils/hooks/useIsMobile'
import MenuItem, { MenuItemProps } from './MenuItem'

export const menuItems: MenuItemProps[] = [
  {
    name: 'Team',
    link: '/',
    target: '_self'
  },
  {
    name: 'Impact',
    link: '/',
    target: '_self'
  },
  {
    name: 'Docs',
    link: '/',
    target: '_self'
  },
  {
    name: 'Community',
    subItems: [
      {
        name: 'Lens',
        link: LENS_LINK,
        target: '_blank'
      },
      {
        name: 'Discord',
        link: DISCORD_INVITE_LINK,
        target: '_blank'
      },
      {
        name: 'Github',
        link: GITHUB_LINK,
        target: '_blank'
      },
      {
        name: 'X',
        link: X_LINK,
        target: '_blank'
      },
      {
        name: 'Giveth',
        link: GIVETH_LINK,
        target: '_blank'
      },
      {
        name: 'Devouch',
        link: DEVOUCH_LINK,
        target: '_blank'
      }
    ]
  },
  {
    name: 'Projects',
    subItems: [
      {
        name: 'Schools',
        link: INIT_PROJECTS[0].link,
        target: '_blank'
      },
      {
        name: 'Animals/pets',
        link: 'https://www.tiktok.com/@animalwelfarecattery',
        target: '_blank'
      },
      {
        name: 'Human Rights',
        link: INIT_PROJECTS[1].link,
        target: '_blank'
      },
      {
        name: 'Music',
        link: INIT_PROJECTS[2].link,
        target: '_blank'
      }
    ]
  }
]
// import { useTheme } from '../../wrappers/TailwindThemeProvider'
const TopHeader = () => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > scrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

  const headerVariants = {
    hidden: { y: -100, transition: { duration: 0.3 } },
    visible: { y: 0, transition: { duration: 0.3 } }
  }

  const isMobile = useIsMobile()

  // const { theme, toggleTheme } = useTheme()
  return (
    <motion.div
      className="flex h-14 sm:h-20 flex-row items-center justify-between px-3 sm:px-14 bg-p-bg backdrop-blur-md backdrop-filter"
      style={{
        zIndex: 1000
      }}
      variants={headerVariants}
      initial="visible"
      // animate={scrollDirection === 'down' ? 'hidden' : 'visible'}
      animate={'visible'}
    >
      <div className="start-center-row gap-x-2 sm:gap-x-4 text-p-text no-underline">
        <Link href={'/'} target="_self">
          <img
            src="/logo.png"
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
          />
        </Link>
        <div className="text-md sm:text-xl font-bold">{APP_NAME}</div>

        {!isMobile && (
          <nav className="ml-8 start-center-row gap-x-8">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </nav>
        )}
      </div>
      <ConnectButton
        accountStatus={isMobile ? 'avatar' : 'full'}
        chainStatus={isMobile ? 'icon' : 'full'}
        showBalance={!isMobile}
      />
      {/* <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button> */}
    </motion.div>
  )
}

export default TopHeader
