import { header, buttonsItem, loginButton, registerButton } from "./Header.module.css"
import { Logo } from "../Logo"
import { NavBar } from "../NavBar"
import { Button } from "../Buttons"
import { useAuthContext, useMobile, useModalContext } from "../../hooks"
import { Profile } from "../Profile"

export const Header = ({ children }) => {
  const { user } = useAuthContext()
  const { openModal } = useModalContext()
  const isMobile = useMobile()

  const handleClickModal = (modalId) => () => openModal(modalId)

  return (
    <header className={header}>
      <Logo />
      <NavBar>
        {!user && (
          <li className={buttonsItem}>
            <Button handleClick={handleClickModal("login")} otherClass={loginButton} alternate={isMobile}>
              Iniciar sesión
            </Button>
            <Button handleClick={handleClickModal("register")} otherClass={registerButton} alternate={isMobile}>
              Registrarse
            </Button>
          </li>
        )}
      </NavBar>
      <Profile />
      {children}
    </header>
  )
}
