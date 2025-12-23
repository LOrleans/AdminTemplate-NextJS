import { SettingsIcon, HomeIcon, BellIcon } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function SideMenu(){
  return(
    <aside>
      <div 
        className={`flex flex-col items-center justify-center bg-linear-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul>
        <ItemMenu url="/" text="Home" icon={HomeIcon}/>
        <ItemMenu url="/Settings" text="Settings" icon={SettingsIcon}/>
        <ItemMenu url="/Notifications" text="Notifications" icon={BellIcon}/>
      </ul>
    </aside>
  )
}