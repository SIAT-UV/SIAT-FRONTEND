import { Component } from "react"
import { wrapper, card, icon, title, description } from "./ErrorBoundary.module.css"
import errorIcon from "../../assets/icons/error-icon.webp"

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Ocurrio un error en la aplicación:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className={wrapper}>
            <div className={card}>
              <img src={errorIcon} alt="Error" className={icon} />
              <h1 className={title}>Ha ocurrido un problema inesperado</h1>
              <p className={description}>{this.state.error?.message || "Se desconoce la fuente del error."}</p>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
