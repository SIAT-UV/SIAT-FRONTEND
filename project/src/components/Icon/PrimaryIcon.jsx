import { iconContainer } from "./PrimaryIcon.module.css"

export const PrimaryIcon = ({ children, otherClass }) => {
  return <span className={`${iconContainer} ${otherClass ?? ""}`}>{children}</span>
}
