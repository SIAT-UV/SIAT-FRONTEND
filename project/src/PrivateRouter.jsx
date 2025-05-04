import { Navigate, Route } from "react-router-dom"
import { AccidentReport } from "./pages/AccidentReport"
import { RoutesNotFound } from "./components/RoutesNotFound"
import { UserProfile } from "./components/UserProfile/UserProfile"

export const PrivateRouter = () => {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to="/registrar-accidente" />} />
      <Route path="/registrar-accidente" element={<AccidentReport />} />
      <Route path="/perfil" element={<UserProfile />} />
    </RoutesNotFound>
  )
}
