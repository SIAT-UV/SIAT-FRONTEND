// src/components/AccidentTable.jsx
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './AccidentTable.css'

export const AccidentTable = ({ onClose, title, fetchFunction, showGravedadFilter}) => {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth() + 1)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [gravedadFilter, setGravedadFilter] = useState('')

  const formatDate = (y, m) => `${y}-${String(m).padStart(2, '0')}`

  const fetchData = async () => {
    setLoading(true)
    try {
      const { call } = fetchFunction(formatDate(year, month))
      const response = await call
      let results = response.data?.resultados || []


      if (gravedadFilter) {
        results = results.filter(acc => acc["Gravedad del accidente"] === gravedadFilter)
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
  }, showGravedadFilter ? [year, month, gravedadFilter] : [year, month])
  

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
            {showGravedadFilter && (
              <select
                value={gravedadFilter}
                onChange={(e) => setGravedadFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">Todas las Gravedades</option>
                <option value="CON HERIDOS">Heridos</option>
                <option value="CON MUERTO">Muertos</option>
                <option value="SOLO DAÑOS">Solo Daños</option>
              </select>
            )}
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
                      <td>
                        {accidente["Fecha del accidente"]}</td>
                      <td>{accidente["Barrio"]}</td>
                      <td>{accidente["Clase de accidente"]}</td>
                      <td>{accidente["Clase de Vehículo"]}</td>
                      <td>{accidente["Gravedad del accidente"]}</td>
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
