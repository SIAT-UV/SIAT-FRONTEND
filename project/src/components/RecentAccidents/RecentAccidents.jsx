import React, { useEffect, useState } from "react"
import { RequestRecentAccidents } from "../../services/RequestRecentAccidents"
import "./RecentAccidents.css"

export const RecentAccidents = () => {
  const [accidents, setAccidents] = useState([])

  const fetchAccidents = () => {
    const { call, controller } = RequestRecentAccidents()
    call
      .then((response) => {
        setAccidents(response.data.results)
      })
      .catch((error) => {
        if (error.name !== "CanceledError") {
          console.error("Error al cargar accidentes recientes:", error)
        }
      })

    return controller
  }

  useEffect(() => {
    const controller = fetchAccidents()

    // Evento personalizado: refrescar datos al registrar nuevo accidente
    const handleUpdate = () => {
      fetchAccidents()
    }

    window.addEventListener("accident-registered", handleUpdate)

    return () => {
      controller.abort()
      window.removeEventListener("accident-registered", handleUpdate)
    }
  }, [])

  return (
    <div className="recent-accidents">
      <h3>Accidentes Recientes</h3>
      {accidents.length > 0 ? (
        accidents.map((acc, i) => (
          <div className="accident-row" key={i}>
            <span>
              {acc["Fecha del accidente"] && acc["Hora del accidente"]
                ? new Date(
                    `${acc["Fecha del accidente"]}T${acc["Hora del accidente"]}`,
                  ).toLocaleDateString("es-CO")
                : "Fecha no disponible"}
            </span>
            <span>
              {acc["Fecha del accidente"] && acc["Hora del accidente"]
                ? new Date(
                    `${acc["Fecha del accidente"]}T${acc["Hora del accidente"]}`,
                  ).toLocaleTimeString("es-CO", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "Hora no disponible"}
            </span>
            <span>{acc["Barrio"]}</span>
            <span>{acc["Clase de accidente"]}</span>
            <span>{acc["Clase de servicio"]}</span>
            <span>{acc["Gravedad del accidente"]}</span>
          </div>
        ))
      ) : (
        <p>No hay accidentes recientes.</p>
      )}
    </div>
  )
}
