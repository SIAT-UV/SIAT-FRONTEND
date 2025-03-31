import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps"
import { DEFAULT_CENTER, GOOGLE_MAPS_API_KEY, MAP_ID } from "../../constants"
import { UbicationInput } from "./UbicationInput"
import { useState } from "react"
import { useCallback } from "react"

const librearies = ["places"]

export const UbicationMap = ({ containerStyles, zoom, children }) => {
  const [markerPosition, setMarkerPosition] = useState(null)

  const handleClick = (event) => {
    setMarkerPosition(event.detail.latLng)
  }

  const handleMarkerDragEnd = (event) => {
    setMarkerPosition(event.latLng)
  }

  const handlePlaceSelect = useCallback((location) => {
    setMarkerPosition(location)
  }, [])

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY} libraries={librearies}>
      <UbicationInput onPlaceSelect={handlePlaceSelect} markerPosition={markerPosition}>
        {children}
      </UbicationInput>
      <Map mapId={MAP_ID} defaultCenter={DEFAULT_CENTER} style={containerStyles} defaultZoom={zoom} onClick={handleClick}>
        <AdvancedMarker position={markerPosition} clickable onDragEnd={handleMarkerDragEnd} />
      </Map>
    </APIProvider>
  )
}
