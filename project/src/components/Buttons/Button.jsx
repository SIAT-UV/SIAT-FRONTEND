import { button, buttonAlternate } from "./Button.module.css"

export const Button = ({ children, alternate, otherClass }) => {
  return (
    <button type="button" className={`${button} ${otherClass ?? ''} ${alternate ? buttonAlternate : ''}`}>{children}</button>
  )
}
