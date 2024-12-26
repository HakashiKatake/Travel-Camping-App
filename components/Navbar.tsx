import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
const Navbar = () => {
  return (
    <nav className="border-red-500 flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
         <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
         </Link> 

         <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:text-green-50">{link.label}
            </Link>
            ))}
         </ul>

         <div className="hidden lg:flexCenter">
            <Button 
            type="button" 
            title="Sign In" 
            variant="btn_dark_green" />
         </div>
         
         <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg-hidden">
          </Image>
        
    </nav>

  )
}

export default Navbar