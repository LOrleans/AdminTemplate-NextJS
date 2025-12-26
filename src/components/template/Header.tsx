import useAppData from "@/src/data/hook/useAppData"
import ButtonSwitchTheme from "./ButtonSwitchTheme"
import Title from "./Title"

interface HeaderProps {
  title: string
  subtitle: string
}

export default function Header(props: HeaderProps){
  const {theme, switchTheme} = useAppData()

  return (
    <div className={`flex `}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`flex grow justify-end`}>
        <ButtonSwitchTheme theme={theme} switchTheme={switchTheme}/>
      </div>
    </div>
  )
}