import { button, buttonAlternate } from "./Button.module.css"

export const Button = ({ children, alternate, otherClass, type = "button" }) => {
  return (
    <button type={type} className={`${button} ${otherClass ?? ""} ${alternate ? buttonAlternate : ""}`}>
      {children}
    </button>
  )
}
