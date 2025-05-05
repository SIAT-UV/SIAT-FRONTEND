import {
  Map,
  useApiIsLoaded,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps"
import { DEFAULT_CENTER, MAP_IDS } from "../../../constants"
import { heatMapContainer, heatMap } from "./HeatMapContainer.module.css"
import { useEffect } from "react"

export const HeatMapContainer = ({ zoom, data }) => {
  const map = useMap(MAP_IDS.HEAT_MAP)
  const visualization = useMapsLibrary("visualization")
  const apiIsLoaded = useApiIsLoaded()

  useEffect(() => {
    if (!apiIsLoaded || !map || !visualization || !data || !window) return

    const heatmap = new visualization.HeatmapLayer({
      data,
      map,
    })

    return () => {
      heatmap.setMap(null)
    }
  }, [apiIsLoaded, visualization, map, data])

  return (
    <div className={heatMapContainer}>
      <Map
        id={MAP_IDS.HEAT_MAP}
        mapId={import.meta.env.VITE_GOOGLE_MAPS_HEAT_MAP_ID}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={zoom}
        minZoom={13}
        className={heatMap}
        clickableIcons={false}
        disableDefaultUI
        reuseMaps
      ></Map>
    </div>
  )
}
