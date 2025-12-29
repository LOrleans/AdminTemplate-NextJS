'use client'

import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | ''

interface AppContextProps {
  theme?: string
  switchTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any){
  const [theme, setTheme] = useState('dark')

  function switchTheme(){
    const newTheme = theme === '' ? 'dark' : '' 
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const saveTheme: string = localStorage.getItem('theme') ?? 'dark'
    setTheme(saveTheme)
  }, [])

  return (
    <AppContext.Provider value={{
      theme,
      switchTheme
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
