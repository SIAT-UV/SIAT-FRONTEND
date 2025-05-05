import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Dashboard.css"
import { Button } from "../../components/Buttons"
import { RecentAccidents } from "../../components/RecentAccidents/RecentAccidents"
import { MonthlyAccidents } from "../../components/MonthlyAccidents/MonthlyAccidents" 
import { CriticalAccidents } from "../../components/CriticalAccidents/CriticalAccidents" 
import { Estadisticas } from "../../components/Estadisticas/Estadisticas"

export const Dashboard = () => {
  const [showMonthlyAccidents, setShowMonthlyAccidents] = useState(false)
  const [showAccidentCritical, setShowCritical] = useState(false)
  const [showEstadisticas, setShowEstadisticas] = useState(false)

  const handleCardClick = (title) => {
    if (title === "Total de Accidentes") {
      setShowMonthlyAccidents(true)
      setShowCritical(false)
    }
    if (title === "Casos Críticos") {
      setShowCritical(true)
      setShowMonthlyAccidents(false)
    }
    if (title === "Área de Alto Riesgo") {
      navigate("/mapa")
    }
  }

  const handleEstadisticasClick = () => {
    setShowEstadisticas(true)
    
  }

  const navigate = useNavigate()
  const reportarAccidente = () => {
    navigate("/registrar-accidente")
  }
  const verMapa = () => {
    navigate("/mapa")
  }

  const cards = [
    { title: "Total de Accidentes", value: "156 incidentes este mes", button: "Ver Detalles" },
    { title: "Casos Críticos", value: "23 casos críticos este mes", button: "Ver casos" },
    { title: "Área de Alto Riesgo", value: "12 zonas identificadas", button: "Ver Mapa" },
  ]

  return (
    <div className="dashboard">
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <p>{card.value}</p>
            <Button handleClick={() => handleCardClick(card.title)}>{card.button}</Button>
          </div>
        ))}
      </div>

      {/* Mostrar MonthlyAccidents solo si se activó */}
      {showMonthlyAccidents && <MonthlyAccidents onClose={() => setShowMonthlyAccidents(false)} />}

      {showAccidentCritical && <CriticalAccidents onClose={() => setShowCritical(false)} />}

      

      <RecentAccidents />

      <div className="quick-actions">
        <h3>Acciones Rápidas</h3>
        <div className="action-buttons">
          <Button handleClick={reportarAccidente} > Reportar accidente</Button>
          <Button handleClick={() => handleEstadisticasClick()} >Ver estadísticas</Button>
        {showEstadisticas && <Estadisticas onClose={() => setShowEstadisticas(false)} />}
          
        </div>
      </div>
    </div>
  )
}
