import { ReactNode } from "react"
import SpotlightContainer from "../(app)/_components/spotlight-container"

const DocsLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => (
  <>
    <SpotlightContainer />
    {children}
  </>
)
export default DocsLayout
