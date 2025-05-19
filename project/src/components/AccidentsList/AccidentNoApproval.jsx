import React, { useEffect, useState } from "react"
import { RequestRecentAccidents } from "../../services/RequestRecentAccidents"
import "./AccidentNoApproval.css"

export const AccidentNoApproval = () => {
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

    const handleUpdate = () => {
      fetchAccidents()
    }

    window.addEventListener("accident-registered", handleUpdate)

    return () => {
      controller.abort()
      window.removeEventListener("accident-registered", handleUpdate)
    }
  }, [])

  const handleAprobar = (accidente) => {
    console.log("Aprobar accidente:", accidente)
    // Aquí puedes agregar lógica para enviar la aprobación al servidor.
  }

  return (
    <div className="accident-no-approval">
      <div className="titulo"> Accidentes por Aprobar</div>

      {accidents.length > 0 ? (
        <div className="table-container">
          <table className="accident-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Barrio</th>
                <th>Gravedad</th>
                <th>Dirección</th>
                <th>Aprobaciones</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {accidents.map((acc, i) => (
                <tr key={i}>
                  <td>
                    {acc["Fecha del accidente"]
                      ? new Date(acc["Fecha del accidente"]).toLocaleDateString("es-CO")
                      : "Fecha no disponible"}
                  </td>
                  <td>
                    {acc["Hora del accidente"]
                      ? new Date(`1970-01-01T${acc["Hora del accidente"]}`).toLocaleTimeString("es-CO", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "Hora no disponible"}
                  </td>
                  <td>{acc["Barrio"]}</td>
                  <td>{acc["Gravedad del accidente"]}</td>
                  <td>{acc["Dirección"]}</td>
                    <td>0</td>
                  <td>
                    <button className="btn-aprobar" onClick={() => handleAprobar(acc)}>
                      Aprobar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No hay accidentes recientes.</p>
      )}
    </div>
  )
}
