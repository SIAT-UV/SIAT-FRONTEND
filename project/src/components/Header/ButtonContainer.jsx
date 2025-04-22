import { Link } from "react-router-dom"
import { Button } from "../Buttons"
import { useAuthContext, useMobile } from "../../hooks"
import { buttonsItem, buttonLink, loginButton, registerButton } from "./ButtonContainer.module.css"

export const ButtonContainer = () => {
  const { user } = useAuthContext()
  const isMobile = useMobile()

  if (user) return null

  return (
    <li className={buttonsItem}>
      <Button otherClass={loginButton} alternate={isMobile}>
        <Link to="/login" className={buttonLink}>
          Iniciar Sesión
        </Link>
      </Button>
      <Button otherClass={registerButton} alternate={isMobile}>
        <Link to="/register" className={buttonLink}>
          Registrarse
        </Link>
      </Button>
    </li>
  )
}
