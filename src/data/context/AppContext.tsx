'use client'

import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps {
  theme?: Tema
  switchTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any){
  const [theme, setTheme] = useState<Tema>('dark')

  function switchTheme(){
    setTheme(theme === '' ? 'dark' : '')
  }

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
