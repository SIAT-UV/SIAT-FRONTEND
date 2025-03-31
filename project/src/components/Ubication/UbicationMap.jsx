import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps"
import { GOOGLE_MAP_API_KEY, MAP_ID } from "../../constants"
import { UbicationInput } from "./UbicationInput"
import { useState } from "react"
import { useCallback } from "react"

const defaultCenter = {
  lat: 4.089954508094611,
  lng: -76.19161172020155,
}

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
    <APIProvider apiKey={GOOGLE_MAP_API_KEY} libraries={librearies}>
      <UbicationInput onPlaceSelect={handlePlaceSelect} markerPosition={markerPosition}>
        {children}
      </UbicationInput>
      <Map mapId={MAP_ID} defaultCenter={defaultCenter} style={containerStyles} defaultZoom={zoom} onClick={handleClick}>
        <AdvancedMarker position={markerPosition} clickable onDragEnd={handleMarkerDragEnd} />
      </Map>
    </APIProvider>
  )
}
