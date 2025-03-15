import { Button } from "../Buttons"
import { Logo } from "../Logo"
import { NavBar } from "../NavBar"
import { header } from "./Header.module.css"

export const Header = () => {
  return (
    <header className={header}>
      <Logo />
      <NavBar />
      <div>
        <Button>Iniciar Sesión</Button>
      </div>
    </header>
  )
}
