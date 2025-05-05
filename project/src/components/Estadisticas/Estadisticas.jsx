import React, { useEffect, useState } from "react"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts"
import "./Estadisticas.css"
import { countByMonth } from "../../services/countByMonth"
import { set } from "react-hook-form"

export const Estadisticas = ({onClose}) => {
  const [datos, setDatos] = useState([])
  const [anioSeleccionado, setAnioSeleccionado] = useState("2025")

  const fetchDatos = async (anio) => {
    const meses = [
      { clave: "01", nombre: "Enero" }, 
      { clave: "02", nombre: "Febrero" },
      { clave: "03", nombre: "Marzo" },
      { clave: "04", nombre: "Abril" },
      { clave: "05", nombre: "Mayo" },
      { clave: "06", nombre: "Junio" },
      { clave: "07", nombre: "Julio" },
      { clave: "08", nombre: "Agosto" },
      { clave: "09", nombre: "Septiembre" },
      { clave: "10", nombre: "Octubre" },
      { clave: "11", nombre: "Noviembre" },
      { clave: "12", nombre: "Diciembre" }
    ]

    const promesas = meses.map(async (mes) => {
      const fecha= `${anio}-${mes.clave}`
      try {
        const {call} = countByMonth(fecha)
        const response = await call
        return { mes: mes.nombre, accidentes: response.data.total_accidentes || 0 }
      } catch (error) {
        console.error(`Error al obtener datos para ${mes.nombre} ${anio}:`, error)
        return { mes: mes.nombre, accidentes: 0 }
      }
    })

    const resultados = await Promise.all(promesas)
    setDatos(resultados)
  }

  useEffect(() => {
    fetchDatos(anioSeleccionado)} , [anioSeleccionado])

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
