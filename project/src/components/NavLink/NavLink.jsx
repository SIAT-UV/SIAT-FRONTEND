import { NavLink as NavLinkRouter } from "react-router-dom"
import { menuLink } from "./NavLink.module.css"

export const NavLink = ({ children, to, handleClick, className = menuLink, active, ...props }) => {
  return (
    <NavLinkRouter to={to} onClick={handleClick} className={({ isActive }) => {
      const hasActive = active ?? ""
      return isActive && hasActive ? `${className} ${hasActive}` : className
    }} {...props}>
      {children}
    </NavLinkRouter>
  )
}
