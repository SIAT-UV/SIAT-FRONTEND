import { iconContainer } from "./PrimaryIcon.module.css"

export const PrimaryIcon = ({ children }) => {
  return (
    <span className={iconContainer}>
      {children}
    </span>
  )
}
