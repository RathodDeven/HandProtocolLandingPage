import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { DEFAULT_THEME } from '../../utils/config'

interface ContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ContextType>({
  theme: DEFAULT_THEME,
  toggleTheme: () => {}
})
// import MUITheme from './MUITheme'
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(DEFAULT_THEME)

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      window.localStorage.setItem('data-theme', 'dark')
      setTheme('dark')
    } else {
      document.body.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
      window.localStorage.setItem('data-theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const theme = window.localStorage.getItem('data-theme')
    if (theme) {
      document.body.classList.add(theme)
      document.documentElement.setAttribute('data-theme', theme)
      // @ts-ignore
      setTheme(theme)
    } else {
      document.body.classList.add(DEFAULT_THEME)
      document.documentElement.setAttribute('data-theme', DEFAULT_THEME)
      window.localStorage.setItem('data-theme', DEFAULT_THEME)
      setTheme(DEFAULT_THEME)
    }
  }, [])
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider
