import { header } from "./Header.module.css"
import { Logo } from "../Logo"
import { NavBar } from "../NavBar"
import { Profile } from "../Profile"
import { ButtonContainer } from "./ButtonContainer"

export const Header = ({ children }) => {
  return (
    <header className={header}>
      <Logo />
      <NavBar>
        <ButtonContainer />
      </NavBar>
      <Profile />
      {children}
    </header>
  )
}
