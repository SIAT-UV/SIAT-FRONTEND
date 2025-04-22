import { Link } from "react-router-dom"
import { PATHS } from "../../constants"
import { breadcrum, breadcrumItem, breadcrumLink } from "./BreadcrumNav.module.css"

export const BreadcrumNav = ({ paths }) => {
  if (paths.length === 0) return null

  return (
    <nav>
      <ul className={breadcrum}>
        <li className={breadcrumItem}>
          <Link to="/" className={breadcrumLink}>
            Inicio
          </Link>
        </li>
        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join("/")}`

          if (path === "private") return null

          return (
            <li key={routeTo} className={breadcrumItem}>
              <Link to={routeTo} className={breadcrumLink}>
                {PATHS[path]}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
