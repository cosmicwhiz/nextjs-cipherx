import Link from "next/link"
import Image from "next/image"

interface NavInterface {
  launchedApp: boolean
}

const Nav = ({ launchedApp }: NavInterface) => {

  return (
    <nav className="nav_container">
        <Link href="/" className="navlogo_link">
            <Image src="/images/logo.png" alt="CipherX Logo" width={32} height={32}></Image>
            <p className="logo_text">CipherX</p>
        </Link>
        <div className="nav_buttons">
        {
          launchedApp ? <Link href="/" className="go_back_button no_margin">Go Back</Link> :
            <Link href="/cipherApp" className="nav_button white_button">
                Launch App
            </Link>
        }
        </div>
    </nav>
  )
}

export default Nav
