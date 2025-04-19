import "./Dashboard.css"
import { Button } from "../../components/Buttons"

export const Dashboard = () => {
  const accidents = [
    { time: "Hoy 10:30", place: "Chiminang", type: "Colisión de vehículos", details: "2 Vehículos", status: "En Progreso" },
    { time: "Hoy 09:15", place: "Príncipe", type: "Accidente Peatonal", details: "1 persona", status: "Crítico" },
    { time: "Ayer", place: "Villa Campestre", type: "Colisión menor", details: "2 Vehículos", status: "Resuelto" },
  ]

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
            <Button>{card.button} </Button>
          </div>
        ))}
      </div>

      <div className="recent-accidents">
        <h3>Accidentes Recientes</h3>
        {accidents.map((acc, i) => (
          <div className="accident-row" key={i}>
            <span>{acc.time}</span>
            <span>{acc.place}</span>
            <span>{acc.type}</span>
            <span>{acc.details}</span>
            <span>{acc.status}</span>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <h3>Acciones Rápidas</h3>
        <div className="action-buttons">
          <Button>Reportar accidente</Button>
          <Button>Ver estadísticas</Button>
        </div>
      </div>
    </div>
  )
}
