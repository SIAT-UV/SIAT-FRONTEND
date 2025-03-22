import { Logo } from "../Logo/Logo"
import { footer, footerContainer, footerSubtitle, atentionFooter, socialFooter, atentionList, footerMain } from "./Footer.module.css"
import { Terms } from "../Terms"
import { Social } from "../Social"

export const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <Logo />
        <section className={footerMain}>
          <div className={atentionFooter}>
            <h4 className={footerSubtitle}>Lineas de atención</h4>
            <ul className={atentionList}>
              <li>Calle 15 #25-56, Tulúa - Valle del Cauca</li>
              <li>Lunes a Sabado de 8:00 am - 5:00 pm</li>
              <li>Celular: 3158653465</li>
              <li>Telefono: (602)2345678</li>
              <li>Correo electronico: nosotros@gmail.com</li>
            </ul>
          </div>
          <div className={socialFooter}>
            <h4 className={footerSubtitle}>Redes Sociales</h4>
            <Social />
          </div>
        </section>
        <section>
          <Terms />
        </section>
      </div>
    </footer>
  )
}
