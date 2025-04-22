import { Link } from "react-router-dom"
import { container, card, title, message, link } from "./Route404.module.css"
import { Button } from "../Buttons"

export const Route404 = () => {
  return (
    <div className={container}>
      <div className={card}>
        <h1 className={title}>404</h1>
        <p className={message}>La página que buscas no fue encontrada.</p>
        <Button>
          <Link to="/" className={link}>
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  )
}
