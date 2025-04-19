import { SnackbarProvider } from "notistack"
import { BrowserRouter } from "react-router-dom"
import { SnackbarConfigurator } from "./components/Snackbar"
import { ModalContextProvider, UserAuthContextProvider } from "./context"
import { ErrorBoundary } from "./components/ErrorBoundary"

export const AppProviders = ({ children }) => {
  return (
    <ErrorBoundary>
      <UserAuthContextProvider>
        <BrowserRouter>
          <ModalContextProvider>
            <SnackbarProvider>
              <SnackbarConfigurator />
              {children}
            </SnackbarProvider>
          </ModalContextProvider>
        </BrowserRouter>
      </UserAuthContextProvider>
    </ErrorBoundary>
  )
}
