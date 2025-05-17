import { HeatMapContainer } from "./HeatMapContainer"
import { useFetchData } from "../../hooks/"
import { geoAccidents } from "../../services"
import { Loader } from "../../components/Loader"
import { useMemo } from "react"
import { HeatMapLeyend } from "./HeatMapLeyend"

export const HeatMap = () => {
  const { loading, data } = useFetchData(geoAccidents, { autoFetch: true })

  const { accidentsCount, geoAccidentsData } = useMemo(() => {
    return {
      accidentsCount: data?.count,
      geoAccidentsData: data?.accidentes?.map(
        ({ lat, lon }) => new window.google.maps.LatLng(lat, lon),
      ),
    }
  }, [data])

  if (loading) return <Loader />

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Total de Accidentes: {accidentsCount}
      </h2>
      <HeatMapLeyend />
      <HeatMapContainer zoom={15} data={geoAccidentsData} />
    </>
  )
}
