import Link from "next/link"
import Image from "next/image"

const Nav = () => {

  return (
    <nav className="nav_container">
        <Link href="/" className="navlogo_link">
            <Image src="/images/logo.png" alt="CipherX Logo" width={32} height={32}></Image>
            <p className="logo_text">CipherX</p>
        </Link>
    </nav>
  )
}

export default Nav
