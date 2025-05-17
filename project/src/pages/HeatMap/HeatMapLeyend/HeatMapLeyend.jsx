import { Popup } from "../../../components/Popup"
import { HeatMapLeyendHeader } from "./HeatMapLeyendHeader/HeatMapLeyendHeader"
import { HeatMapLeyendMenu } from "./HeatMapLeyendMenu/HeatMapLeyendMenu"
import { popupMenu } from "./HeatMapLeyend.module.css"

export const HeatMapLeyend = () => {
  return (
    <Popup
      header={<HeatMapLeyendHeader />}
      menu={<HeatMapLeyendMenu />}
      className={popupMenu}
    />
  )
}
