import { Route } from "react-router-dom"
import { Inicio } from "./components/Inicio/Inicio"
import { RoadInformation } from "./pages/RoadInformation"
import { Dashboard } from "./pages/Dashboard"
import { AccidentReport } from "./pages/AccidentReport"
import { UserProfile } from "./components/UserProfile/UserProfile"
import { Login } from "./components/Login"
import { MainLayout } from "./layouts/MainLayout"
import { FullPageLayout } from "./layouts/FullPageLayout"
import { Formulario } from "./components/Register"
import { PrivateRouter } from "./PrivateRouter"
import { PrivateGuard } from "./guard/PrivateGuard"
import { RoutesNotFound } from "./components/RoutesNotFound"

export const AppRouter = () => {
  return (
    <RoutesNotFound>
      <Route element={<MainLayout />}>
        <Route index element={<Inicio />} />
        <Route path="/mapa" element={<h2>Mapa</h2>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/informacion-vial" element={<RoadInformation />} />
        <Route path="/registrar-accidente" element={<AccidentReport />} />
        <Route path="/userprofile" element={<UserProfile />} />
        
        <Route element={<PrivateGuard />}>
          <Route path="/private/*" element={<PrivateRouter />} />
        </Route>
      </Route>
      <Route element={<FullPageLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Formulario />} />
      </Route>
    </RoutesNotFound>
  )
}
