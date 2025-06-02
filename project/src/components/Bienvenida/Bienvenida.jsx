import {
    bienvenida,
    bienvenida__title,
    bienvenida__titleBold,
    bienvenida__info
  } from './Bienvenida.module.css'
  
export function Bienvenida ({ children, titulo , subtitulo}) {
    return (
      <section className={bienvenida}>
        <h4 className={`${bienvenida__title} ${bienvenida__titleBold}`}>{titulo} </h4>
        <h5 className={bienvenida__title}>{subtitulo} </h5>
        <p className={bienvenida__info}>{children}</p>
      </section>
    )
  }