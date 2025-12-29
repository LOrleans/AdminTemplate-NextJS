import useAppData from "@/src/data/hook/useAppData"
import ButtonSwitchTheme from "./ButtonSwitchTheme"
import Title from "./Title"
import AvatarUser from "./AvatarUser"

interface HeaderProps {
  title: string
  subtitle: string
}

export default function Header(props: HeaderProps){
  const {theme, switchTheme} = useAppData()

  return (
    <div className={`flex `}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`flex grow justify-end items-center`}>
        <ButtonSwitchTheme theme={theme} switchTheme={switchTheme}/>
        <AvatarUser className="ml-3"/>
      </div>
    </div>
  )
}