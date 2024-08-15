import './globals.css'
import type { Metadata } from 'next'
import WrappersWithOnlyPwa from '../components/wrappers/Wrappers'
import Wrappers from '../components/wrappers/Wrappers'

declare global {
  interface Navigator {
    standalone?: boolean
  }
}

export const metadata: Metadata = {
  manifest: '/manifest.json', // we are accessing our manifest file here
  title: 'Hand Protocol',
  description: 'Supporting Public Good Projects in a fun way'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Wrappers>{children}</Wrappers>
      </body>
    </html>
  )
}
