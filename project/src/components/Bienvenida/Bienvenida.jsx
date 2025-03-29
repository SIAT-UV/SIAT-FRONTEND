import {
    bienvenida,
    bienvenida__title,
    bienvenida__titleBold,
    bienvenida__info
  } from './Bienvenida.module.css'
  
export function Bienvenida ({ children }) {
    return (
      <section className={bienvenida}>
        <h4 className={`${bienvenida__title} ${bienvenida__titleBold}`}>SIAT</h4>
        <h5 className={bienvenida__title}>Sistema de Informacion de Accidentes de Transito</h5>
        <p className={bienvenida__info}>{children}</p>
      </section>
    )
  }