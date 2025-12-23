import Content from "./Content"
import Header from "./Header"
import SideMenu from "./SideMenu"

interface LayoutProps {
  title: string
  subtitle: string
  children?: any
}

export default function Layout(props: LayoutProps){


  return (
    <div>
      <SideMenu />
      <Header title={props.title} subtitle={props.subtitle}/>
      <Content>
        {props.children}
      </Content>
    </div>
  )
}