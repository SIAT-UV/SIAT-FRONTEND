import { PrimaryIcon } from "../Icon"
import { NavLink } from "../NavLink"
import { navBar, labelMenu, hamburger, menu } from "./NavBar.module.css"
import dashboardIcon from "../../assets/icons/dashboardIcon.svg"
import mapIcon from "../../assets/icons/map.svg"
import reportIcon from "../../assets/icons/reportIcon.svg"
import analiticsIcon from "../../assets/icons/analiticsIcon.svg"
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
          <PrimaryIcon>
          </PrimaryIcon>
          <NavLink to="/mapa">Mapa</NavLink>
        </MenuItem>
        <MenuItem>
          <PrimaryIcon icon={dashboardIcon} />
          <NavLink to="/dashboard">Dashboard</NavLink>
        </MenuItem>
        <MenuItem>
          <PrimaryIcon icon={reportIcon} />
          <NavLink to="/reportes">Reportes</NavLink>
        </MenuItem>
        <MenuItem>
          <PrimaryIcon icon={analiticsIcon} />
          <NavLink to="/analiticas">Analiticas</NavLink>
        </MenuItem>
        {children}
      </ul>
    </nav>
  )
}
