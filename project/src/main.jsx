import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { Formulario } from "./components/Register/"
import "./index.css"
import { Login } from "./components/Login"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
