import { FilterAccidentsForm } from "./components/FilterForm"

export const FilterAccidents = () => {
  const submitData = (data) => {
    if (data.type === "Fecha del Accidente") {
      const { startDate, endDate } = data
    }
  }

  return (
    <>
      <h2>Filtrar Accidentes</h2>
      <FilterAccidentsForm submitData={submitData} />
    </>
  )
}
