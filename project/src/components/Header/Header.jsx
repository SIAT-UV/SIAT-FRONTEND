import { header, buttonsItem, loginButton, registerButton } from "./Header.module.css"
import { Logo } from "../Logo"
import { NavBar } from "../NavBar"
import { Button } from "../Buttons"

export const Header = ({ children }) => {
  return (
    <header className={header}>
      <Logo />
      <NavBar>
        <li className={buttonsItem}>
          <Button otherClass={loginButton}>Iniciar sesión</Button>
          <Button otherClass={registerButton}>Registrarse</Button>
        </li>
      </NavBar>
      {children}
    </header>
  )
}
