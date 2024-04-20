'use client'

import { useTheme } from 'next-themes'
import { Toggle } from './ui/toggle'

import { Moon, Sun } from 'lucide-react'

export default function ToggleTheme() {
  const { setTheme, theme } = useTheme()

  function handleDarkMode() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <Toggle variant="outline" size="sm" onClick={handleDarkMode}>
        <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Toggle>
    </>
  )
}
