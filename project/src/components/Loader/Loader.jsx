import { container, svg, circle } from "./Loader.module.css"

export function Loader() {
  return (
    <div className={container}>
      <svg className={svg} viewBox="25 25 50 50">
        <circle className={circle} r={20} cy={50} cx={50} />
      </svg>
    </div>
  )
}
