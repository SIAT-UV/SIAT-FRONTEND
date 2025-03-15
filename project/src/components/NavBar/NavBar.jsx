import { NavLink } from "../NavLink"
import { nav, menu } from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <nav className={nav}>
      <ul className={menu}>
        <li>
          <NavLink to="/mapa">Mapa</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/reportes">Reportes</NavLink>
        </li>
        <li>
          <NavLink to="/analiticas">Analiticas</NavLink>
        </li>
      </ul>
    </nav>
  )
}
