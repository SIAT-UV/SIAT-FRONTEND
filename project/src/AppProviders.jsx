import { SnackbarProvider } from "notistack"
import { BrowserRouter } from "react-router-dom"
import { SnackbarConfigurator } from "./components/Snackbar"

export const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <SnackbarConfigurator />
        {children}
      </SnackbarProvider>
    </BrowserRouter>
  )
}
