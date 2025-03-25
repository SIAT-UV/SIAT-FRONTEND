import { header, buttonsItem, loginButton, registerButton } from "./Header.module.css"
import { Logo } from "../Logo"
import { NavBar } from "../NavBar"
import { Button } from "../Buttons"
import { useEffect, useState } from "react"

export const Header = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 968)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 968)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className={header}>
      <Logo />
      <NavBar>
        <li className={buttonsItem}>
          <Button otherClass={loginButton} alternate={isMobile}>
            Iniciar sesión
          </Button>
          <Button otherClass={registerButton} alternate={isMobile}>
            Registrarse
          </Button>
        </li>
      </NavBar>
      {children}
    </header>
  )
}
