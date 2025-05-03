// src/components/AccidentTable.jsx
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './AccidentTable.css'

export const AccidentTable = ({ onClose, title, fetchFunction, filterFunction }) => {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth() + 1)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const formatDate = (y, m) => `${y}-${String(m).padStart(2, '0')}`

  const fetchData = async () => {
    setLoading(true)
    try {
      const { call } = fetchFunction(formatDate(year, month))
      const response = await call
      let results = response.data?.resultados || []

      // Aplicar filtro si se proporciona
      if (filterFunction) {
        results = results.filter(filterFunction)
      }

      setData({ resultados: results })
    } catch (error) {
      console.error('Error fetching accidents:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [year, month])

  return (
    <AnimatePresence>
      <motion.div
        className="accident-table-wrapper"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="modal-content">
          <div className="accident-table-header">
            <h2 className="accident-table-title">{title} {month}/{year}</h2>
            <button onClick={onClose} className="close-button">Cerrar</button>
          </div>

          <div className="accident-table-filters">
            <select value={month} onChange={(e) => setMonth(Number(e.target.value))} className="filter-select">
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select value={year} onChange={(e) => setYear(Number(e.target.value))} className="filter-select">
              {[...Array(5)].map((_, i) => {
                const y = today.getFullYear() - i
                return <option key={y} value={y}>{y}</option>
              })}
            </select>
          </div>

          {loading ? (
            <p className="loading-text">Cargando...</p>
          ) : data && data.resultados.length > 0 ? (
            <div className="table-wrapper">
              <table className="accidents-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Lugar</th>
                    <th>Tipo</th>
                    <th>Vehículo</th>
                    <th>Gravedad</th>
                  </tr>
                </thead>
                <tbody>
                  {data.resultados.map((accidente, index) => (
                    <tr key={index}>
                      <td>{accidente.FECHA}</td>
                      <td>{accidente.LUGAR}</td>
                      <td>{accidente.TIPO_ACCIDENTE}</td>
                      <td>{accidente.TIPO_VEHICULO}</td>
                      <td>{accidente.GRAVEDAD}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="no-data-text">No se encontraron accidentes en este mes.</p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
