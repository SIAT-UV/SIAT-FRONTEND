import { SnackbarProvider } from "notistack"
import { BrowserRouter } from "react-router-dom"
import { SnackbarConfigurator } from "./components/Snackbar"
import { ModalContextProvider } from "./context/ModalContext"

export const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <SnackbarProvider>
          <SnackbarConfigurator />
          {children}
        </SnackbarProvider>
      </ModalContextProvider>
    </BrowserRouter>
  )
}
