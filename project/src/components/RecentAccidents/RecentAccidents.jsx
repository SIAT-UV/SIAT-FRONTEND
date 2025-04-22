import React, { useEffect, useState } from "react"
import { RequestRecentAccidents } from "../../services/RequestRecentAccidents"
import "./RecentAccidents.css"

export const RecentAccidents = () => {
  const [accidents, setAccidents] = useState([])

  const fetchAccidents = () => {
    const { call, controller } = RequestRecentAccidents()
    call
      .then((response) => {
        console.log("Respuesta de accidentes recientes:", response.data.results)
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
      {console.log("Estado de accidentes:", accidents)}
      {accidents.length > 0 ? (
        accidents.map((acc, i) => (
          <div className="accident-row" key={i}>
            <span>{acc.FECHA && acc.HORA ? new Date(`${acc.FECHA}T${acc.HORA}`).toLocaleDateString("es-CO") : "Fecha no disponible"}</span>
            <span>
              {acc.FECHA && acc.HORA
                ? new Date(`${acc.FECHA}T${acc.HORA}`).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })
                : "Hora no disponible"}
            </span>
            <span>{acc.BARRIO_HECHO}</span>
            <span>{acc.CLASE_DE_ACCIDENTE}</span>
            <span>{acc.CLASE_DE_SERVICIO}</span>
            <span>{acc.GRAVEDAD_DEL_ACCIDENTE}</span>
          </div>
        ))
      ) : (
        <p>No hay accidentes recientes.</p>
      )}
    </div>
  )
}
