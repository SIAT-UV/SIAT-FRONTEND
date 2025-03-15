import { header, loginButton, loginItem } from "./Header.module.css"
import { Logo } from "../Logo"
import { NavBar } from "../NavBar"
import { Button } from "../Buttons"

export const Header = ({ children }) => {
  return (
    <header className={header}>
      <Logo />
      <NavBar>
        <li className={loginItem}>
          <Button alternate otherClass={loginButton}>Iniciar sesión</Button>
        </li>
      </NavBar>
      {children}
    </header>
  )
}
