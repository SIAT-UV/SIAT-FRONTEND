import React, { useEffect, useState } from 'react'
import { FilterMonth } from '../../services/FilterMonth'
import { motion, AnimatePresence } from 'framer-motion'
import './MonthlyAccidents.css'

export const MonthlyAccidents = ({ onClose }) => {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth() + 1)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const formatDate = (y, m) => {
    const formattedMonth = String(m).padStart(2, '0')
    return `${y}-${formattedMonth}`
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const { call } = FilterMonth(formatDate(year, month))
      const response = await call
      setData(response.data)
    } catch (error) {
      console.error('Error fetching accidents:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [year, month])

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        onClick={handleOverlayClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="modal-content"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="monthly-accidents-header">
            <h2 className="monthly-accidents-title">Accidentes de {month}/{year}</h2>
            <button onClick={onClose} className="close-button">Cerrar</button>
          </div>

          <div className="monthly-accidents-filters">
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}


