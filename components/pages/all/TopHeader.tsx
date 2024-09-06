'use client'
import React, { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  APP_NAME,
  DISCORD_INVITE_LINK,
  DOCS_LINK,
  GITHUB_LINK,
  LENS_LINK,
  X_LINK
} from '@/utils/config'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MoveUpRight, ChevronUp, ArrowUpRight } from 'lucide-react'

interface MenuItemProps {
  name: string
  link?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  subItems?: MenuItemProps[]
}
// import { useTheme } from '../../wrappers/TailwindThemeProvider'
const TopHeader = () => {
  const menuItems: MenuItemProps[] = [
    {
      name: 'Team',
      link: '/team',
      target: '_self'
    },
    {
      name: 'Impact',
      link: '/impact',
      target: '_self'
    },
    {
      name: 'Docs',
      link: DOCS_LINK,
      target: '_blank'
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
        }
      ]
    },
    {
      name: 'Projects',
      subItems: [
        {
          name: 'Schools',
          link: '/schools',
          target: '_self'
        },
        {
          name: 'Animals/pets',
          link: '/animals',
          target: '_self'
        }
      ]
    }
  ]

  const MenuItem: React.FC<{ item: MenuItemProps }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)

    const variants = {
      open: { opacity: 1, y: 0, display: 'block' },
      closed: { opacity: 0, y: 20, transitionEnd: { display: 'none' } }
    }

    const iconVariants = {
      hidden: { opacity: 0, x: -5, y: 5 },
      visible: { opacity: 1, x: 0, y: 0 }
    }

    const chevronVariants = {
      up: { rotate: 0 },
      down: { rotate: 180 }
    }

    return (
      <div
        className="relative text-lg text-s-text flex items-center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {item.link ? (
          <Link
            className="text-s-text no-underline flex items-center"
            href={item.link}
            target={item.target}
          >
            <motion.div
              className="mr-1"
              animate={
                isOpen ? { color: 'var(--p-text)' } : { color: 'var(--s-text)' }
              }
              transition={{ duration: 0.3 }}
            >
              {item.name}
            </motion.div>
            {item.target === '_blank' && (
              <motion.div
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                variants={iconVariants}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight size={16} />
              </motion.div>
            )}
          </Link>
        ) : (
          <span className="flex items-center">
            <motion.span
              className="mr-1"
              animate={
                isOpen ? { color: 'var(--p-text)' } : { color: 'var(--s-text)' }
              }
            >
              {item.name}
            </motion.span>
            {item.subItems && (
              <motion.div
                initial="up"
                animate={isOpen ? 'up' : 'down'}
                variants={chevronVariants}
                transition={{ duration: 0.3 }}
              >
                <ChevronUp size={16} />
              </motion.div>
            )}
          </span>
        )}
        {item.subItems && (
          <motion.div
            className="absolute left-0 top-4 mt-2 w-fit bg-s-bg shadow-lg p-4 pr-8 space-y-4 rounded-xl"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
          >
            {item.subItems.map((subItem, index) => (
              <MenuItem key={index} item={subItem} />
            ))}
          </motion.div>
        )}
      </div>
    )
  }
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    const handleScroll = () => {
      console.log('scrolling')
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

  // const { theme, toggleTheme } = useTheme()
  return (
    <motion.div
      className="flex h-20 flex-row items-center justify-between px-6 bg-transparent backdrop-blur-sm backdrop-filter "
      variants={headerVariants}
      initial="visible"
      animate={scrollDirection === 'down' ? 'hidden' : 'visible'}
    >
      <div className="start-center-row gap-x-4 text-p-text no-underline">
        <Link href={'/'} target="_self">
          <img src="/logo.png" className="w-12 h-12 rounded-full" />
        </Link>
        <div className="text-xl font-bold">{APP_NAME}</div>
        <nav className="ml-8 start-center-row gap-x-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </nav>
      </div>
      <ConnectButton />
      {/* <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button> */}
    </motion.div>
  )
}

export default TopHeader
