import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import "./index.css"
import { axiosService } from "./services"

axiosService.initAxios()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
