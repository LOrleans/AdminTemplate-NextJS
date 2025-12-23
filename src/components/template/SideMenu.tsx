import { SettingsIcon, HomeIcon, BellIcon } from "../icons";
import ItemMenu from "./ItemMenu";

export default function SideMenu(){
  return(
    <aside>
      <ul>
        <ItemMenu url="/" text="Home" icon={HomeIcon}/>
        <ItemMenu url="/Settings" text="Settings" icon={SettingsIcon}/>
        <ItemMenu url="/Notifications" text="Notifications" icon={BellIcon}/>
      </ul>
    </aside>
  )
}