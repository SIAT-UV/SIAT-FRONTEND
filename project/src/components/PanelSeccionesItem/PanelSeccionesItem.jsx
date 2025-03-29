import { scrollToTop } from '../../utilities/scroll-helper'
import { NavLink } from 'react-router-dom'
import {
  panel__item,
  panel__item__img,
  panel__item__link,
  panel__item__link__icon,
  panel__item__title
} from './PanelSeccionesItem.module.css'

export function PanelSeccionesItem({ background, icon, href, children }) {
  const handleClick = () => {
    scrollToTop()
  }

  return (
    <div className={panel__item}>
      <img src={background} alt="" className={panel__item__img} />
      <NavLink to={href} className={panel__item__link} onClick={handleClick}>
        <img src={icon} alt="" className={panel__item__link__icon} />
        <span className={panel__item__title}>{children}</span>
      </NavLink>
    </div>
  )
}
