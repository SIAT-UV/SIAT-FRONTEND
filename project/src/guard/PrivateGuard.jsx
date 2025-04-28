import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks"
import { STATUS } from "../constants"
import { Loader } from "../components/Loader"

export const PrivateGuard = () => {
  const location = useLocation()
  const { status } = useAuthContext()

  if (status === STATUS.loading) return <Loader />

  return status === STATUS.authenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}
