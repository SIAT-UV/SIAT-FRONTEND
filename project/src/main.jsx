import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { Formulario } from "./components/Register/"
import "./index.css"
import { Inicio } from "./components/Inicio/Inicio"
import { axiosService } from "./services"

axiosService.initAxios()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
