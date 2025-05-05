import { AdvancedMarker, Map } from "@vis.gl/react-google-maps"
import { DEFAULT_CENTER, MAP_ID, MAP_IDS } from "../../constants"
import { UbicationInput } from "./UbicationInput"
import { useState } from "react"
import { useCallback } from "react"

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
    <>
      <UbicationInput
        onPlaceSelect={handlePlaceSelect}
        markerPosition={markerPosition}
      >
        {children}
      </UbicationInput>
      <Map
        id={MAP_IDS.ADDRESS}
        mapId={MAP_ID}
        defaultCenter={DEFAULT_CENTER}
        style={containerStyles}
        defaultZoom={zoom}
        onClick={handleClick}
        reuseMaps
      >
        <AdvancedMarker
          position={markerPosition}
          clickable
          onDragEnd={handleMarkerDragEnd}
        />
      </Map>
    </>
  )
}
