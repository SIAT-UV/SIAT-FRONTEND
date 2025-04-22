import { Outlet } from "react-router-dom"
import { fullContainer } from "./FullPageLayout.module.css"

export const FullPageLayout = () => {
  return (
    <div className={fullContainer}>
      <Outlet />
    </div>
  )
}
