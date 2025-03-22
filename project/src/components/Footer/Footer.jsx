import { Logo } from "../Logo/Logo"

export const Footer = () => {
  return (
    <footer>
      <section>
        <Logo />
        <div>
          <h4>Lineas de atención</h4>
          <ul>
            <li>Calle 15 #25-56, Tulúa - Valle del Cauca</li>
            <li>Lunes a Sabado de 8:00 am - 5 pm</li>
            <li>Celular: 3158653465</li>
          </ul>
        </div>
        <div>
          <h4>Redes Sociales</h4>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem dolores nisi doloremque, doloribus facilis similique ab harum
            repudiandae eligendi fugiat odit minus, maiores, at explicabo quo eum maxime velit!
          </div>
        </div>
      </section>
      <section>
        <ul>
          <li>Políticas</li>
          <li>Mapa del sitio</li>
          <li>Terminos y condiciones</li>
        </ul>
      </section>
    </footer>
  )
}
