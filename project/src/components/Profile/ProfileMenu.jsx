import { Link } from "react-router-dom"
import { profileMenu, profileItem, profileLink } from "./ProfileMenu.module.css"

export const ProfileMenu = ({ items, children }) => {
  return (
    <ul className={profileMenu}>
      {items.map(({ text, to }, index) => (
        <li key={index} className={profileItem}>
          <Link to={to} className={profileLink}>
            {text}
          </Link>
        </li>
      ))}
      {children && <li className={profileItem}>{children}</li>}
    </ul>
  )
}
