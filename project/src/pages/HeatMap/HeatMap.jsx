import { HeatMapContainer } from "./HeatMapContainer"

export const HeatMap = () => {
  return (
    <>
      <h2>Mapa de Calor</h2>
      <HeatMapContainer zoom={15} />
    </>
  )
}
