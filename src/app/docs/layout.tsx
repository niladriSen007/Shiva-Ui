import { ReactNode } from "react"
import Navbar from "../(_web_app)/_web_components/navbar"

export default function DocsLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
