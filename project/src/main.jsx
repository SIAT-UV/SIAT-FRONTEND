import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from "./App"
import { Formulario } from "./components/Register/Formulario"
import { Login } from "./components/Login/Login"
import "./index.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
