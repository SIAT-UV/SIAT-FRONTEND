import { header, buttonsItem, loginButton, registerButton } from "./Header.module.css"
import { Logo } from "../Logo"
import { NavBar } from "../NavBar"
import { Button } from "../Buttons"
import { useMobile, useModalContext } from "../../hooks"

export const Header = ({ children }) => {
  const { openModal } = useModalContext()
  const isMobile = useMobile()

  const handleClickModal = (modalId) => () => openModal(modalId)

  return (
    <header className={header}>
      <Logo />
      <NavBar>
        <li className={buttonsItem}>
          <Button handleClick={handleClickModal("login")} otherClass={loginButton} alternate={isMobile}>
            Iniciar sesión
          </Button>
          <Button handleClick={handleClickModal("register")} otherClass={registerButton} alternate={isMobile}>
            Registrarse
          </Button>
        </li>
      </NavBar>
      {children}
    </header>
  )
}
