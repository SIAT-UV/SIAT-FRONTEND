import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../hooks"

export const PrivateGuard = () => {
  const { user } = useAuthContext()

  return user ? <Outlet /> : <Navigate to="/login" replace />
}
