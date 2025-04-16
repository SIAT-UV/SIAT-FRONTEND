import { banner } from "./Banner.module.css"

export const Banner = ({ imgUrl }) => {
  return <div className={banner} style={{ backgroundImage: `url(${imgUrl})` }}></div>
}

