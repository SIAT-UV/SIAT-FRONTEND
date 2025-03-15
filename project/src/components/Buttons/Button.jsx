import { button } from "./Button.module.css"

export const Button = ({ children, alternate }) => {
  return (
    <button type="button" className={button}>{children}</button>
  )
}
