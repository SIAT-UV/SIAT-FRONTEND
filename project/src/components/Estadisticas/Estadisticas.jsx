import React, { useEffect, useState } from "react"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts"
import "./Estadisticas.css"

export const Estadisticas = ({onClose}) => {
  const [datos, setDatos] = useState([])
  const [anioSeleccionado, setAnioSeleccionado] = useState("2025")

  // Datos simulados por año
  const datosPorAnio = {
    "2023": [
      { mes: "Ene", accidentes: 10 },
      { mes: "Feb", accidentes: 8 },
      { mes: "Mar", accidentes: 12 },
      { mes: "Abr", accidentes: 7 },
      { mes: "May", accidentes: 14 },
      { mes: "Jun", accidentes: 9 },
      { mes: "Jul", accidentes: 13 },
      { mes: "Ago", accidentes: 11 },
      { mes: "Sep", accidentes: 10 },
      { mes: "Oct", accidentes: 15 },
      { mes: "Nov", accidentes: 9 },
      { mes: "Dic", accidentes: 12 },
    ],
    "2024": [
      { mes: "Ene", accidentes: 14 },
      { mes: "Feb", accidentes: 16 },
      { mes: "Mar", accidentes: 13 },
      { mes: "Abr", accidentes: 17 },
      { mes: "May", accidentes: 19 },
      { mes: "Jun", accidentes: 18 },
      { mes: "Jul", accidentes: 15 },
      { mes: "Ago", accidentes: 16 },
      { mes: "Sep", accidentes: 20 },
      { mes: "Oct", accidentes: 21 },
      { mes: "Nov", accidentes: 22 },
      { mes: "Dic", accidentes: 23 },
    ],
    "2025": [
      { mes: "Ene", accidentes: 12 },
      { mes: "Feb", accidentes: 15 },
      { mes: "Mar", accidentes: 9 },
      { mes: "Abr", accidentes: 14 },
      { mes: "May", accidentes: 20 },
      { mes: "Jun", accidentes: 18 },
      { mes: "Jul", accidentes: 22 },
      { mes: "Ago", accidentes: 19 },
      { mes: "Sep", accidentes: 17 },
      { mes: "Oct", accidentes: 23 },
      { mes: "Nov", accidentes: 21 },
      { mes: "Dic", accidentes: 25 },
    ],
  }

  useEffect(() => {
    // Cargar datos simulados del año seleccionado
    setDatos(datosPorAnio[anioSeleccionado] || [])
  }, [anioSeleccionado])

  const handleChange = (e) => {
    setAnioSeleccionado(e.target.value)
  }

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Accidentes en el año -  {anioSeleccionado}</h3>
        <select value={anioSeleccionado} onChange={handleChange}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        <button onClick={onClose} className="close-button">Cerrar</button>
      </div>

      <ResponsiveContainer>
        <LineChart data={datos}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="accidentes" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>

  )
}
