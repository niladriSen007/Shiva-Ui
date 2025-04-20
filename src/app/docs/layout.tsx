import Navbar from "../(app)/_components/navbar"
import DocsContainer from "./_container/docs-container"
import { ReactNode } from "react"

export default function DocsLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <Navbar />
      <DocsContainer>{children}</DocsContainer>
    </>
  )
}
