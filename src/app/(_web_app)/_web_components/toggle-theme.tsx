"use client"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme()
  return (
    <>
      {theme === "dark" ? (
        <Sun className="cursor-pointer" onClick={() => setTheme("light")} />
      ) : (
        <Moon className="cursor-pointer" onClick={() => setTheme("dark")} />
      )}
    </>
  )
}
export default ToggleTheme
