import { Link } from "react-router-dom"
import { termList } from "./Terms.module.css"

export const Terms = ({ className = termList }) => {
  return (
    <ul className={className}>
      <li>
        <Link to="/">Políticas</Link>
      </li>
      <li>
        <Link to="/">Mapa del sitio</Link>
      </li>
      <li>
        <Link to="/">Terminos y condiciones</Link>
      </li>
      <li>
        <Link to="/informacion-vial">Información vial</Link>
      </li>
    </ul>
  )
}
