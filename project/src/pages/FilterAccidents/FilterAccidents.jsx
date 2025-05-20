import { useState } from "react"
import { CardReport } from "../../components/CardReport"
import { Loader } from "../../components/Loader"
import { REPORT_FIELDS } from "../../constants"
import { useFetchData } from "../../hooks"
import { filterAccidentByDate } from "../../services"
import { FilterAccidentsForm } from "./components/FilterForm"

export const FilterAccidents = () => {
  const { loading, data, fetch } = useFetchData(filterAccidentByDate)
  const [filterDate, setFilterDate] = useState(null)

  const reports = data && data.resultados
  const accidentTotal = data && data[REPORT_FIELDS.COUNT]
  console.log(data)

  const submitData = (data) => {
    const { startDate, endDate } = data.filterDate
    setFilterDate(data.filterDate)
    fetch({ startDate, endDate })
  }

  if (loading) return <Loader />

  return (
    <>
      <h2>Filtrar Accidentes</h2>
      <FilterAccidentsForm submitData={submitData} filterDate={filterDate} />
      {accidentTotal > 0 ? (
        reports.map((report) => {
          return (
            <CardReport report={report} key={report[REPORT_FIELDS.REPORT_ID]} />
          )
        })
      ) : (
        <h3>No se encontraron accidentes con los filtros seleccionados</h3>
      )}
    </>
  )
}
