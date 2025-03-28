import { button, buttonAlternate } from "./Button.module.css"

export const Button = ({ children, alternate, otherClass, type = "button", handleClick }) => {
  return (
    <button onClick={handleClick} type={type} className={`${button} ${otherClass ?? ""} ${alternate ? buttonAlternate : ""}`}>
      {children}
    </button>
  )
}
