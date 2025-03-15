import { NavLink as NavLinkRouter } from "react-router-dom"
import { menuLink } from "./NavLink.module.css"

export const NavLink = ({ children, to, handleClick, className = menuLink, ...props }) => {
  return (
    <NavLinkRouter to={to} onClick={handleClick} className={className} {...props}>
      {children}
    </NavLinkRouter>
  )
}
