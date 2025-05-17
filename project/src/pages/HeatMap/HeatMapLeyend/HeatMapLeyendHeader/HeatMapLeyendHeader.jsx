import { header, buttonLegend } from "./HeatMapLeyendHeader.module.css"
import caretDown from "../../../../assets/icons/caret-down-fill.svg"

export const HeatMapLeyendHeader = () => {
  return (
    <div className={header}>
      <button type="button" className={buttonLegend}>
        Mostrar leyenda
      </button>
      <img src={caretDown} alt="Toggle legend" />
    </div>
  )
}
