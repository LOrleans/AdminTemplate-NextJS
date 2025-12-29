'use client'

import useAuth from "@/src/data/hook/useAuth";
import { SettingsIcon, HomeIcon, BellIcon, LogOutIcon } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function SideMenu(){
  const { logout } = useAuth()

  return(
    <aside className="
        flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900 
      ">
      <div 
        className={`flex flex-col items-center justify-center bg-linear-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="grow">
        <ItemMenu url="/" text="Home" icon={HomeIcon}/>
        <ItemMenu url="/Settings" text="Settings" icon={SettingsIcon}/>
        <ItemMenu url="/Notifications" text="Notifications" icon={BellIcon}/>
      </ul>
      <ul className="">
        <ItemMenu 
          url="/" text="Logout" 
          icon={LogOutIcon} className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white
          "
          onClick={logout}/>
      </ul>
    </aside>
  )
}