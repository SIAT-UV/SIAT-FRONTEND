import { signsContainer } from "./TrafficSigns.module.css"

export const TrafficSigns = ({ children }) => {
  return <section className={signsContainer}>{children}</section>
}
