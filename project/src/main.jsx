import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { Formulario } from "./components/Register/"
import "./index.css"
import { Login } from "./components/Login"
import { axiosService } from "./services"
import { SnackbarProvider } from "notistack"
import { SnackbarConfigurator } from "./components/Snackbar"

axiosService.initAxios()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider>
      <SnackbarConfigurator />
      <Login />
    </SnackbarProvider>
  </StrictMode>,
)
