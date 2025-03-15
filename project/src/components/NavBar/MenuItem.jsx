import { menuItem } from "./MenuItem.module.css"

export const MenuItem = ({ children }) => {
  return (
    <li className={menuItem}>
      {children}
    </li>
  )
}
