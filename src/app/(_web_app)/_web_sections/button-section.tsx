"use client"

import { Button } from "@/library-components/ui/button/button"
import SparklingButton from "@/library-components/ui/button/sparkling-button"
import { Book, ClipboardCheck, Copy } from "lucide-react"
import { useTheme } from "next-themes"
import { redirect } from "next/navigation"
import { useState } from "react"

const ButtonSection = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const { theme } = useTheme()

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i shivaui")
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="flex w-full items-center justify-center gap-4">
      {theme === "darak" ? (
        <Button
          className="dark:bg-white bg-black h-12"
          onClick={() => {
            redirect("/docs")
          }}
          label={
            <span className="flex items-center gap-2">
              <Book /> Get Documentation
            </span>
          }
          variant={"animate"}
        />
      ) : (
        <SparklingButton />
      )}
      <Button
        className="h-12"
        onClick={handleCopy}
        label={
          <span className="flex items-center gap-2 px-2 text-lg">
            {isCopied ? (
              <>
                {" "}
                <ClipboardCheck /> Copied !
              </>
            ) : (
              <>
                {" "}
                <Copy /> npm i shivaui
              </>
            )}
          </span>
        }
        variant={"secondary"}
      />
    </div>
  )
}
export default ButtonSection
