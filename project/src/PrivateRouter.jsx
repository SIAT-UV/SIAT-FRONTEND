import { Navigate, Route } from "react-router-dom"
import { AccidentReport } from "./pages/AccidentReport"
import { RoutesNotFound } from "./components/RoutesNotFound"

export const PrivateRouter = () => {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to="/registrar-accidente" />} />
      <Route path="/registrar-accidente" element={<AccidentReport />} />
    </RoutesNotFound>
  )
}
