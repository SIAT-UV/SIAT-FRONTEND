import { Routes, Route } from "react-router-dom"
import { AccidentReport } from "./pages/AccidentReport"
import { Inicio } from "./components/Inicio/Inicio"
import { RoadInformation } from "./pages/RoadInformation"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/mapa" element={<h2>Mapa</h2>} />
      <Route path="/registrar-accidente" element={<AccidentReport />} />
      <Route path="/informacion-vial" element={<RoadInformation />} />
    </Routes>
  )
}
