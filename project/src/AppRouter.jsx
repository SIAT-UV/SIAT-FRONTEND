import { Routes, Route, Navigate } from "react-router-dom"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mapa" />} />
      <Route path="/mapa" element={<h2>Mapa</h2>} />
    </Routes>
  )
}
