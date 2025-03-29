import { panel } from "./PanelSecciones.module.css";

export function PanelSecciones({ children }) {
  return <section className={panel}>{children}</section>
}