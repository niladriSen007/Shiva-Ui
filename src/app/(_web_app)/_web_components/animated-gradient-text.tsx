import { AnimatedGradientTextProps } from "@/lib/types"
import { cn } from "@/lib/utils"

const AnimatedGradientText = ({
  children,
  className,
  colorTo = "#0000FF",
  colorFrom = "#00FF00",
  ...props
}: AnimatedGradientTextProps) => {
  return (
    <span style={
      {
        "--color-from": colorFrom,
        "--color-to": colorTo,
      } as React.CSSProperties
    } 
    className={`${cn("inline animate-gradient bg-gradient-to-r from-[var(--color-from)] to-[var(--color-to)] bg-[length:150%_100%] bg-clip-text text-transparent", className)}`}
      {...props}>
      {children}
    </span>
  )
}
export default AnimatedGradientText