import AnimateButton from "@/components/ui/animate-button"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-base-100 h-32">
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
      <AnimateButton label="Get Started" />
    </div>
  )
}
export default Navbar
