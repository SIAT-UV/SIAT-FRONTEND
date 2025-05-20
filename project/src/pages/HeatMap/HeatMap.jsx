import { HeatMapContainer } from "./HeatMapContainer"
import { useFetchData } from "../../hooks/"
import { geoAccidents } from "../../services"
import { Loader } from "../../components/Loader"
import { useMemo } from "react"
import { HeatMapFilters } from "./HeatMapFilters"
import { FILTER_TYPES } from "./constants"
import { filterBySeverity, filterByVehicule } from "./services"
import { normalize } from "../../utilities"

export const HeatMap = () => {
  const { loading, data, fetch } = useFetchData(geoAccidents, {
    autoFetch: true,
  })

  const { accidentsCount, geoAccidentsData } = useMemo(() => {
    return {
      accidentsCount: data?.count,
      geoAccidentsData: data?.accidentes?.map(
        ({ lat, lon }) => new window.google.maps.LatLng(lat, lon),
      ),
    }
  }, [data])

  const submitData = (data) => {
    const filterOption = normalize(data.value)

    if (data.type === FILTER_TYPES.severity) {
      fetch({ data: filterOption, newApiCall: filterBySeverity })
      return
    }

    if (data.type === FILTER_TYPES.service) {
      fetch({ data: filterOption, newApiCall: filterByVehicule })
      return
    }
  }

  if (loading) return <Loader />

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "0" }}>
        Total de Accidentes: {accidentsCount}
      </h2>
      <HeatMapFilters submitData={submitData} />
      <HeatMapContainer zoom={15} data={geoAccidentsData} />
    </>
  )
}
