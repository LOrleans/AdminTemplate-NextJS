import Image from "next/image"
import loadingGif from '@/public/images/loading.gif'
import useAuth from "@/src/data/hook/useAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Head from "next/head";

export default function ForceAuth(props: any){
  const { user, loading } = useAuth()

  const router = useRouter()

  useEffect(() => {
      if (!loading && !user?.email) {
          router.push('/Authentication')
      }
    }, [user, loading, router])

  function renderContent(){
    return (
      <>
      <Head>
        <script/>
      </Head>
        {props.children}
      </>
    )
  }

  function renderLoading(){
    return (
      <div className="flex items-center justify-center h-screen"> 
        <Image src={loadingGif} alt="loading"/>
      </div>
    )
  }

  if (!loading && user?.email) {
        return renderContent()
    } else {
        return renderLoading()
    }
  
}