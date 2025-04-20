"use client"
import { Button } from "@/components/ui/button"
import { Book, ClipboardCheck, Copy } from "lucide-react"
import { useState } from "react"
import {redirect} from "next/navigation"

const ButtonSection = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i shivaui")
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Button
        className="bg-white h-12"
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
