import { SnackbarProvider } from "notistack"
import { BrowserRouter } from "react-router-dom"
import { SnackbarConfigurator } from "./components/Snackbar"
import { UserAuthContextProvider } from "./context/AuthContext"
import { ErrorBoundary } from "./components/ErrorBoundary"

export const AppProviders = ({ children }) => {
  return (
    <ErrorBoundary>
      <UserAuthContextProvider>
        <BrowserRouter>
          <SnackbarProvider>
            <SnackbarConfigurator />
            {children}
          </SnackbarProvider>
        </BrowserRouter>
      </UserAuthContextProvider>
    </ErrorBoundary>
  )
}
