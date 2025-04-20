import Navbar from "./_components/navbar"

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
