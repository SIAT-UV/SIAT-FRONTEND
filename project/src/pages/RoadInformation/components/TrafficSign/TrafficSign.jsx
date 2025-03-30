import { signContainer, sign, signTitle } from "./TrafficSign.module.css"

export const TrafficSign = ({ title, img, children }) => {
  return (
    <article className={signContainer}>
      <h3 className={signTitle}>{title}</h3>
      <img src={img} alt="señal de trásnito" className={sign} />
      {children}
    </article>
  )
}
