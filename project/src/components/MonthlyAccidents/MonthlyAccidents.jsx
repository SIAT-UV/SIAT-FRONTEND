// src/components/MonthlyAccidents.jsx
import React from 'react'
import { AccidentTable } from '../AccidentTable/AccidentTable'
import { FilterMonth } from '../../services/FilterMonth'

export const MonthlyAccidents = ({ onClose }) => {
  return (
    <AccidentTable
      onClose={onClose}
      title="Accidentes Mensuales"
      fetchFunction={FilterMonth}
      // No se pasa filterFunction porque se quieren todos los accidentes del mes
    />
  )
}
