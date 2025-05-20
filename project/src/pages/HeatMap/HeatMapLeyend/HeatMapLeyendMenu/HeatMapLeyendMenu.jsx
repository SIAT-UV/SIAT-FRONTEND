import { colorsLeyend } from "../../constants"
import {
  menuLegend,
  menuListLegend,
  textListLegend,
} from "./HeatMapLeyendMenu.module.css"

export const HeatMapLeyendMenu = () => {
  return (
    <ul className={menuLegend}>
      {colorsLeyend.map((item, index) => (
        <li key={index} className={menuListLegend}>
          <span>{item.color}</span>
          <span className={textListLegend}>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}
