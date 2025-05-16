// src/components/CriticalAccidents.jsx
import React from 'react'
import { AccidentTable } from '../AccidentTable/AccidentTable'
import { FilterMonth } from '../../services/FilterMonth'
import { filterGravityAccident } from '../../services/filterGravityAccident'

export const CriticalAccidents = ({ onClose }) => {

  return (
    <AccidentTable
      onClose={onClose}
      title="Accidentes por gravedad del"
      fetchFunction={FilterMonth}
      showGravedadFilter={filterGravityAccident}
    />
  )
}
