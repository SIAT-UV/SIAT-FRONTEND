import { UserReport } from "./components/UserReport"
import { useFetchData } from "../../hooks"
import { getUserAccidents } from "../../services"
import { Loader } from "../../components/Loader"
import { REPORT_FIELDS } from "./constants"

export const UserReports = () => {
  const { loading, data } = useFetchData(getUserAccidents, { autoFetch: true })
  const reports = data && data.resultado
  const accidentTotal = data && data[REPORT_FIELDS.ACCIDENT_TOTAL]

  if (loading) return <Loader />

  return (
    <>
      <h2>Reportes Registrados {accidentTotal}</h2>
      {accidentTotal > 0 ? (
        reports.map((report) => {
          return (
            <UserReport report={report} key={report[REPORT_FIELDS.REPORT_ID]} />
          )
        })
      ) : (
        <h3>No hay reportes registrados</h3>
      )}
    </>
  )
}
