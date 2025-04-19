
import ButtonSection from "../_sections/button-section"
import AnimatedBadge from "./animated-text-wrapper"
import { RetroGrid } from "./retro-grid"

const RetroGridWrapper = () => {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-evenly overflow-hidden rounded-lg border bg-background">
      <AnimatedBadge />
      <span className=" w-[1024px] pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#0000FF]  to-[#00FF00] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Build Your Website &gt; Ship Faster &gt; Use Shiva Ui
      </span>
      <p className="text-blue-100 text-lg w-[1200px] text-center">
        Access an ever-growing collection of premium, meticulously crafted
        templates and component packs. Save time and focus on what
        matters—building standout websites that captivate your audience.
      </p>
      <ButtonSection />
      <RetroGrid />
    </div>
  )
}
export default RetroGridWrapper
