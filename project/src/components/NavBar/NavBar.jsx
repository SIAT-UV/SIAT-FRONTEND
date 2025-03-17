import { NavLink } from "../NavLink"
import { navBar, labelMenu, hamburger, menu } from "./NavBar.module.css"
import { MenuItem } from "./MenuItem"

export const NavBar = ({ children }) => {
  return (
    <nav className={navBar}>
      <label htmlFor="hamburger" className={labelMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </label>
      <input type="checkbox" className={hamburger} name="hamburger" id="hamburger" />
      <ul className={menu}>
        <MenuItem>
          <NavLink to="/mapa">Mapa de Calor</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/dashboard">Panel de Control</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/reportes">Registrar Accidente</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/analiticas">Información Vial</NavLink>
        </MenuItem>
        {children}
      </ul>
    </nav>
  )
}
