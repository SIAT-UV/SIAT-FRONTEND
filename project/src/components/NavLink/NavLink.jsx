import { NavLink as NavLinkRouter } from "react-router-dom"
import { menuLink } from "./NavLink.module.css"

export const NavLink = ({ children, to, handleClick, className = menuLink, active, ...props }) => {
  return (
    <NavLinkRouter
      to={to}
      onClick={handleClick}
      className={({ isActive }) => {
        return isActive ? `${className} ${active}` : className
      }}
      {...props}
    >
      {children}
    </NavLinkRouter>
  )
}
