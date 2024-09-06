'use client'
import clsx from 'clsx'
import React from 'react'

import { Inter } from 'next/font/google'
import TopHeader from '@/components/pages/all/TopHeader'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

interface Props {
  // Define any props that the component will accept
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

const UILayout: React.FC<Props> = (props) => {
  // Define the component's logic and rendering here

  return (
    <div
      className={clsx(inter.className, 'relative z-10 text-p-text bg-p-bg')}
      onScroll={() => {
        console.log('scrolling')
      }}
    >
      <div
        id="MasterParentPage"
        className="flex h-full w-full pt-20 overflow-y-auto"
      >
        {props.children}
      </div>
      <div className="w-full fixed left-0 right-0 top-0">
        <TopHeader />
      </div>
    </div>
  )
}

export default UILayout
