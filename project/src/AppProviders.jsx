import { SnackbarProvider } from "notistack"
import { BrowserRouter } from "react-router-dom"
import { SnackbarConfigurator } from "./components/Snackbar"
import { UserAuthContextProvider } from "./context/AuthContext"
import { ErrorBoundary } from "./components/ErrorBoundary"
import { APIProvider } from "@vis.gl/react-google-maps"
import { GOOGLE_MAPS_API_KEY, libraries } from "./constants"

export const AppProviders = ({ children }) => {
  return (
    <ErrorBoundary>
      <UserAuthContextProvider>
        <BrowserRouter>
          <APIProvider apiKey={GOOGLE_MAPS_API_KEY} libraries={libraries}>
            <SnackbarProvider>
              <SnackbarConfigurator />
              {children}
            </SnackbarProvider>
          </APIProvider>
        </BrowserRouter>
      </UserAuthContextProvider>
    </ErrorBoundary>
  )
}
