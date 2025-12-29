import useAuth from "@/src/data/hook/useAuth"
import Link from "next/link"

interface AvatarUserProps {
  className?: string
}

export default function AvatarUser(props: AvatarUserProps){
  const { user } = useAuth()

  return (
    <Link href='/Profile'>
      <img
       src={user?.imgUrl ?? '/images/avatar.svg'}
       alt="Avatar User" 
       className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}/>
    </Link>
  )
}