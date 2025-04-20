import { ArrowRight } from "lucide-react"
import Link from "next/link"

const SparklingButton = () => {
  return (
    <div className="relative">
      <Link
        href={"#"}
        className="group relative inline-flex h-12 z-10 items-center  justify-center overflow-hidden rounded-xl bg-blue-600 shadow-xl px-6 md:px-8 font-bold text-white transition-transform duration-300 hover:scale-105"
      >
        <span className="relative z-10 flex items-center font-['GeistMono']">
          Get Documentation <ArrowRight />
        </span>
        <div className="absolute inset-0 z-0 w-0 bg-gradient-to-r from-[#0000FF]/90 to-[#00FF00]/60 transition-all duration-500 ease-out group-hover:w-full"></div>
      </Link>
    </div>
  )
}
export default SparklingButton
