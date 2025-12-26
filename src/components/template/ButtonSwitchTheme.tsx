import { MoonIcon, SunIcon } from "../icons"

interface ButtonSwitchThemeProps {
  theme?: string
  switchTheme?: () => void
}

export default function ButtonSwitchTheme(props: ButtonSwitchThemeProps){
  return props.theme === 'dark' ? (
    <div 
      onClick={props.switchTheme}
      className={`bg-linear-to-r from-yellow-300 to-yellow-600 items-center cursor-pointer p-1 rounded-full
        hidden h-8 w-14
        sm:flex  
        lg:w-24 
        `}>
      <div className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}>
        {SunIcon(4)}
      </div>
      <div className={``}>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div className={``}></div>
  )
}