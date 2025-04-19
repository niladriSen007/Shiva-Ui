import GridBackground from "./_components/grid-background"
import Navbar from "./_components/navbar"
import RetroGridWrapper from "./_components/retro-grid-wrapper"

const page = () => {
  return (
    <div className=" h-screen mx-24">
      <Navbar />
      <RetroGridWrapper />
      <GridBackground />
    </div>
  )
}
export default page
