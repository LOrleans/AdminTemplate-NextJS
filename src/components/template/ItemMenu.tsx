import Link from "next/link"

interface ItemMenuProps {
  url: string
  text: string
  icon: any
}

export default function ItemMenu(props: ItemMenuProps){
  return (
    <ul className={`flex hover:bg-gray-100`}>
      <Link href={props.url} className={`flex flex-col justify-center items-center w-20 h-20`}>
          {props.icon}
          <span className="text-xs font-light text-gray-600">{props.text}</span>
      </Link>
    </ul>
  )
}