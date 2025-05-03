import { UserReport } from "./components/UserReport"

const reports = [
  {
    id: 1,
    fecha: "2023-10-01",
    hora: "10:00",
    area: "Urbana",
    barrio: "Principe",
    direccion: "Calle Falsa 123",
    aprobaciones: 1,
  },
  {
    id: 2,
    fecha: "2023-10-01",
    hora: "10:00",
    area: "Urbana",
    barrio: "Principe",
    direccion: "Calle Falsa 123",
    aprobaciones: 1,
  },
  {
    id: 3,
    fecha: "2023-10-01",
    hora: "10:00",
    area: "Urbana",
    barrio: "Principe",
    direccion: "Calle Falsa 123",
    aprobaciones: 1,
  },
]

export const UserReports = () => {
  return (
    <>
      <h2>Reportes Registrados</h2>
      {reports.length !== 0 ? (
        reports.map((report) => <UserReport report={report} key={report.id} />)
      ) : (
        <h3>No hay reportes registrados</h3>
      )}
    </>
  )
}
