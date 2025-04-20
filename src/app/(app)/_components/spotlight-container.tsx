import { cn } from "@/lib/utils"
import Spotlight from "./spotlight"
import Navbar from "./navbar"
import DocsContainer from "@/app/docs/_container/docs-container"

const SpotlightContainer = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased ">
      <Navbar />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:20px_20px] select-none"
        )}
      />

   {/*    <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#0000FF"
      />
      <Spotlight
        className="-top-20 right-96 md:-top-44 md:right-60"
        fill="#00FFFF"
      /> */}

      <div className="relative z-10 mx-32 w-full mt-12 p-4 m md:pt-0 ">
        <DocsContainer />
      </div>
    </div>
  )
}
export default SpotlightContainer
