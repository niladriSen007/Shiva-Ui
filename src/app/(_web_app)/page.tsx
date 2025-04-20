import GridBackground from "./_web_components/grid-background"
import RetroGridWrapper from "./_web_components/retro-grid-wrapper"


const page = () => {
  return (
    <div className=" h-screen mx-24 mt-10">
      <RetroGridWrapper />
      <GridBackground />
    </div>
  )
}
export default page
