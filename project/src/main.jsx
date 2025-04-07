import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { AppProviders } from "./AppProviders"
import "./index.css"
import { axiosService } from "./services"
import { Dashboard } from "./components/Dashboard/Dashboard"


axiosService.initAxios()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
