import Navbar from "./_web_components/navbar"


const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default HomeLayout
