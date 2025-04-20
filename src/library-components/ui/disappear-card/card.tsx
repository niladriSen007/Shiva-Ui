"use client"
import { cn } from "@/lib/utils"
import { IconMessage, IconX } from "@tabler/icons-react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

const Card = () => {
  const [open, setOpen] = useState(true)
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px),",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px),",
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px),",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={cn(
            "relative group w-96 min-h-[26rem] h-[26rem] rounded-xl",
            "shadow-[0px_1px_1px_rgba(0,0,0,0.05),0px_4px_6px_rgba(34,42,53,0.04),0px_24px_68px_rgba(47,48,55,0.05),0px_2px_3px_rgba(0,0,0,0.04)] ",
            "flex flex-col p-4 gap-3",
            "dark:hover:shadow-[0px_1px_1px_rgba(0,0,0,0.05),0px_4px_6px_rgba(34,42,53,0.04),0px_24px_68px_rgba(47,48,55,0.05),0px_2px_3px_rgba(0,0,0,0.04)]",
            "dark:bg-neutral-900 dark:text-white"
          )}
        >
          <h2 className="font-medium text-xl">Shiva Ui Components</h2>
          <p className="text-neutral-600 text-sm">
            A collection of beautiful Ui components, let&apos;s get on with it
          </p>
          <div className="flex items-center justify-center">
            <button className="flex items-center gap-2 shadow-[0px_1px_1px_rgba(0,0,0,0.05),0px_4px_6px_rgba(34,42,53,0.04),0px_24px_68px_rgba(47,48,55,0.05),0px_2px_3px_rgba(0,0,0,0.04)] ">
              <Image
                className="size-4"
                width={50}
                height={50}
                src="/vercel.svg"
                alt="arrow"
              />
              <span className="text-sm">Vercel</span>
              <IconX
                className="text-neutral-500"
                onClick={() => {
                  setOpen(false)
                }}
              />
            </button>
          </div>
          <div className="relative bg-gray-800 border border-dashed border-neutral-800 rounded-md mt-4 flex-1">
            {/* Motion Divs */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              whileHover={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-full h-full bg-white rounded-md divide-y divide-amber-800"
            >
              <div className="flex gap-2 p-4 items-center bg-slate-900">
                <div className="size-7 flex-shrink-0 bg-slate-900 shadow-[0_1px_1px_rgba(0,0,0,0.05), 0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <IconMessage className="size-6 bg-slate-900 rounded-md" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-white">jhjgkjgb</p>
                  <p className="text-xs mt-1 text-neutral-400">
                    jhjgkjjnhjkgjhgjk jhkgg jkg jkgkjggb
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="flex gap-2 p-4 items-center bg-slate-900">
                <div className="size-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05), 0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <IconMessage className="size-6 bg-neutral-400 rounded-md" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-neutral-600">jhjgkjgb</p>
                  <p className="text-xs mt-1 text-neutral-400">
                    jhjgkjjnhjkgjhgjk jhkgg jkg jkgkjggb
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="flex gap-2 p-4 items-center bg-slate-900">
                <div className="size-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05), 0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <IconMessage className="size-6 bg-neutral-400 rounded-md" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-neutral-600">jhjgkjgb</p>
                  <p className="text-xs mt-1 text-neutral-400">
                    jhjgkjjnhjkgjhgjk jhkgg jkg jkgkjggb
                  </p>
                  <p></p>
                </div>
              </div>
            </motion.div>
            {/* Motion divs end */}
          </div>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
          <span className="absolute opacity-0 group-hover:opacity-100 duration-500 transition-opacity inset-x-0 -bottom-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[9px] w-full mx-auto blur-sm"></span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default Card
