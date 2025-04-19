import { cn } from "@/lib/utils"
import AnimatedGradientText from "./animated-gradient-text"

const AnimatedBadge = () => {
  return (
    <div className=" w-72 group relative mx-auto flex items-center justify-center rounded-full px-8 py-1.5 cursor-pointer transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
      <span
        className={cn(
          "absolute  h-full w-full  rounded-[inherit] bg-gradient-to-r from-[#0000FF]  to-[#00FF00] p-[1px] ",
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      🎉
      <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
      <AnimatedGradientText className="text-md font-medium">
        Welcome to Shiva Ui
      </AnimatedGradientText>

    </div>
  )
}
export default AnimatedBadge