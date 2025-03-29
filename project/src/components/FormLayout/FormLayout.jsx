import { box } from "./FormLayout.module.css"

export const FormLayout = ({ children }) => {
  return (
    <div>
      <div className={box}>{children}</div>
    </div>
  )
}

