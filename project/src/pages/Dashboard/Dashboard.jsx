import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Dashboard.css"
import { Button } from "../../components/Buttons"
import { RecentAccidents } from "../../components/RecentAccidents/RecentAccidents"
import { MonthlyAccidents } from "../../components/MonthlyAccidents/MonthlyAccidents"
import { CriticalAccidents } from "../../components/GravityAccident/GravityAccident"
import { Estadisticas } from "../../components/Estadisticas/Estadisticas"
import { AccidentNoApproval } from "../../components/AccidentsList/AccidentNoApproval"



export const Dashboard = () => {
  const [showMonthlyAccidents, setShowMonthlyAccidents] = useState(false)
  const userToken = localStorage.getItem("token");
  const [showAccidentCritical, setShowCritical] = useState(false)
  const [showEstadisticas, setShowEstadisticas] = useState(false)

  const handleCardClick = (title) => {
    if (title === "Accidentes Mensuales") {
      setShowMonthlyAccidents(true)
      setShowCritical(false)
    }
    if (title === "Accidentes por Gravedad") {
      setShowCritical(true)
      setShowMonthlyAccidents(false)
    }
    if (title === "Áreas de Alto Riesgo") {
      navigate("/mapa")
    }
  }

  const handleEstadisticasClick = () => {
    setShowEstadisticas(true)
  }

  const navigate = useNavigate()
  const reportarAccidente = () => {
    navigate("/private/registrar-accidente", { replace: true })
  }

  const cards = [
    {
      title: "Accidentes Mensuales",
      value: "Muestra de todos los accidentes registrados por mes",
      button: "Ver Detalles",
    },
    {
      title: "Accidentes por Gravedad",
      value: "Muestra de todos los accidentes filtrados por el tipo de gravedad registrados por mes",
      button: "Ver Detalles",
    },
    {
      title: "Áreas de Alto Riesgo",
      value: "Muestra de las áreas de alto riesgo en el mapa de calor",
      button: "Ver Mapa",
    },
  ]

  return (
    <div className="dashboard">
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <p>{card.value}</p>
            <Button handleClick={() => handleCardClick(card.title)}>
              {card.button}
            </Button>
          </div>
        ))}
      </div>

      {/* Mostrar MonthlyAccidents solo si se activó */}
      {showMonthlyAccidents && (
        <MonthlyAccidents onClose={() => setShowMonthlyAccidents(false)} />
      )}

      {showAccidentCritical && (
        <CriticalAccidents onClose={() => setShowCritical(false)} />
      )}

      < AccidentNoApproval />

      <RecentAccidents />

      <div className="quick-actions">
        <h3>Acciones Rápidas</h3>
        <div className="action-buttons">
          <Button handleClick={reportarAccidente}> Reportar accidente</Button>
          <Button handleClick={() => handleEstadisticasClick()}>
            Ver estadísticas
          </Button>
          {showEstadisticas && (
            <Estadisticas onClose={() => setShowEstadisticas(false)} />
          )}
        </div>
      </div>
    </div>
  )
}
