import AnimateButton from "@/library-components/ui/button/animate-button"
import Link from "next/link"
import ToggleTheme from "./toggle-theme"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-base-100 h-20 mx-24">
      <Link href={"/"} className="text-2xl font-bold">
        ShivaUi
      </Link>

      <div>
        <ul className="flex items-center justify-between gap-24">
          <Link href={"/components"}>Components</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Showcases</Link>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <ToggleTheme />
        <AnimateButton label="Get Started" />
      </div>
    </div>
  )
}
export default Navbar
