import React, { useEffect, useState } from "react"
import { accidentNoApproval } from "../../services/accidentNoApproval"
import { accidentApproval } from "../../services/accidentApproval"
import "./AccidentNoApproval.css"

export const AccidentNoApproval = () => {
  const [accidents, setAccidents] = useState([])
  const [mensajeExito, setMensajeExito] = useState("")

  const fetchAccidents = () => {
    const { call, controller } = accidentNoApproval()
    call
      .then((response) => {
        setAccidents(response.data.results)
      })
      .catch((error) => {
        if (error.name !== "CanceledError") {
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
    console.log("Aprobando accidente:", accidente)
    const { call, controller } = accidentApproval(accidente["ID de reporte"])
  
    call
      .then((response) => {
        const { confirmado } = response.data
  
        setAccidents((prev) => prev.filter((a) => a.id !== accidente.id))
  
        if (confirmado) {
          setMensajeExito("Accidente aprobado con exito.")

          setTimeout(() => {
            setMensajeExito("")
          }, 3000)
        }
      })
      .catch((error) => {
        const code = error.response?.data?.CODE_ERR
        if (code === "ALREADY_APPROVED") {
          alert("Ya aprobaste este accidente.")
        } else if (code === "ACCIDENT_ALREADY_CONFIRMED") {
          alert("Este accidente ya fue confirmado.")
          setAccidents((prev) => prev.filter((a) => a.id !== accidente.id))
        } else if (code === "INVALID_TOKEN") {
          alert("Tu sesión ha expirado. Inicia sesión nuevamente.")
        } else {
          console.error("Error inesperado al aprobar accidente:", error)
        }
      })
  }

  return (
    <div className="accident-no-approval">
      <div className="titulo"> Accidentes por Aprobar</div>
      {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}
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
                  <td>{acc["Numero de aprobaciones"]}</td>
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
        <p>No hay accidentes por confirmar.</p>
      )}
    
    </div>
  )
}

