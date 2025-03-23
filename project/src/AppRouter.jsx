import { Routes, Route } from "react-router-dom"
import { AccidentReport } from "./pages/AccidentReport"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<h2>Inicio</h2>} />
      <Route path="/mapa" element={<h2>Mapa</h2>} />
      <Route path="/registrar-accidente" element={<AccidentReport />} />
    </Routes>
  )
}
