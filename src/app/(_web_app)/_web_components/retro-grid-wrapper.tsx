import ButtonSection from "../_web_sections/button-section"
import HeadlineSection from "../_web_sections/headline-section"
import AnimatedBadge from "./animated-text-wrapper"
import { RetroGrid } from "./retro-grid"

const RetroGridWrapper = () => {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-evenly overflow-hidden rounded-lg border bg-background">
      <AnimatedBadge />
      <HeadlineSection />
      <ButtonSection />
      <RetroGrid />
    </div>
  )
}
export default RetroGridWrapper
