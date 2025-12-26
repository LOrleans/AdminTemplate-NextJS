import { MoonIcon, SunIcon } from "../icons"

interface ButtonSwitchThemeProps {
  theme?: string
  switchTheme?: () => void
}

export default function ButtonSwitchTheme(props: ButtonSwitchThemeProps){
  return props.theme === 'dark' ? (
    <div 
      onClick={props.switchTheme}
      className={`bg-linear-to-r from-gray-500 to-gray-900 items-center justify-end cursor-pointer p-1 rounded-full
        hidden h-8 w-14
        sm:flex  
        lg:w-24 
        `}>
      <div className={`hidden lg:flex items-center mr-2 text-gray-300`}>
        <span className="text-sm">Escuro</span>
      </div>
      <div className={`flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full`}>
        {MoonIcon}
      </div>
    </div>
  ) : (
    <div 
      onClick={props.switchTheme}
      className={`bg-linear-to-r from-yellow-300 to-yellow-600 items-center cursor-pointer p-1 rounded-full
        hidden h-8 w-14
        sm:flex  
        lg:w-24 
        `}>
      <div className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}>
        {SunIcon}
      </div>
      <div className={`hidden lg:flex items-center ml-3 text-white`}>
        <span className="text-sm">Claro</span>
      </div>
    </div>
  )
}