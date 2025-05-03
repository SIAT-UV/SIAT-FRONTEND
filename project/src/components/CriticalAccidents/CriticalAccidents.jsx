// src/components/CriticalAccidents.jsx
import React from 'react'
import { AccidentTable } from '../AccidentTable/AccidentTable'
import { FilterMonth } from '../../services/FilterMonth'

export const CriticalAccidents = ({ onClose }) => {
  // Consideramos “crítico” si GRAVEDAD es "GRAVE" o contiene heridos/muertos, puedes ajustar esta lógica
  const isCritical = (acc) =>
    acc.GRAVEDAD?.toLowerCase().includes('grave') ||
    acc.GRAVEDAD?.toLowerCase().includes('muerto') ||
    acc.GRAVEDAD?.toLowerCase().includes('herido')

  return (
    <AccidentTable
      onClose={onClose}
      title="Accidentes Críticos"
      fetchFunction={FilterMonth}
      filterFunction={isCritical}
    />
  )
}
