"use client"
import { REVIEWS } from "@/lib/constant"
import Marquee from "./marquee"
import { ReviewCard } from "./review-card"
import { motion } from "framer-motion"

const GradientY = () => (
  <>
    <span className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-blue-700 to-transparent h-px w-3/4 mx-auto"></span>
    <span className="absolute opacity-0 group-hover:opacity-100 duration-300 transition-opacity inset-x-0 top-px bg-gradient-to-r from-transparent via-blue-700 to-transparent h-[8px] w-full mx-auto blur-sm"></span>
    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4 mx-auto"></span>
    <span className="absolute opacity-0 group-hover:opacity-100 duration-300 transition-opacity inset-x-0 bottom-px bg-gradient-to-r from-transparent via-green-500 to-transparent h-[8px] w-full mx-auto blur-sm"></span>
    <span className="absolute opacity-0 group-hover:opacity-100 duration-300 transition-opacity inset-x-0 top-[50%] bg-gradient-to-r from-transparent via-cyan-700 to-transparent h-[6px] w-full mx-auto blur-sm"></span>
  </>
)

const MarqueeWrapper = () => {
  const firstRow = REVIEWS.slice(0, REVIEWS.length / 2)
  const secondRow = REVIEWS.slice(REVIEWS.length / 2)
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="group cursor-pointer relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r bg-black p-2"
    >
      <GradientY />
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </motion.div>
  )
}
export default MarqueeWrapper
