import { Navigate, Route, Routes } from "react-router-dom"
import { Route404 } from "./Route404"

export const RoutesNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<Route404 />} />
    </Routes>
  )
}
