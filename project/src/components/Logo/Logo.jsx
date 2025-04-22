import { Link } from "react-router-dom"
import { logo, logoLink } from "./Logo.module.css"

export const Logo = () => {
  return (
    <div>
      <h1 className={logo}>
        <Link to="/" className={logoLink}>
          SIAT
        </Link>
      </h1>
    </div>
  )
}
