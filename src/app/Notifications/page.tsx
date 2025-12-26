'use client'

import Layout from "@/src/components/template/Layout";
import useAppData from "@/src/data/hook/useAppData";

export default function Notifications() {
  const { switchTheme } = useAppData()

  return (
      <Layout 
        title="Notifications" 
        subtitle="Developing..."
      >
        <button onClick={switchTheme} className="hover:cursor-pointer">click</button>
      </Layout>
  );
}