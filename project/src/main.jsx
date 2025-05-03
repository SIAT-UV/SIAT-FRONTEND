import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import "./index.css"
import { axiosService } from "./services"
import { UserProfile } from "./components/UserProfile/UserProfile"

axiosService.initAxios()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProfile />
  </StrictMode>,
)
