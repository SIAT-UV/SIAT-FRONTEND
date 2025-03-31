import { cloneElement } from "react"
import { useAddressMarker } from "../../hooks"
import { useEffect } from "react"

export const UbicationInput = ({ onPlaceSelect, markerPosition, children }) => {
  const { address, setAddress, inputRef, apiIsLoaded } = useAddressMarker(onPlaceSelect)

  useEffect(() => {
    if (!markerPosition || !apiIsLoaded || !inputRef.current) return

    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ location: markerPosition }, (results, status) => {
      if (status !== "OK" || !results[0]) return
      setAddress(results[0].formatted_address)
    })
  }, [markerPosition, apiIsLoaded, inputRef, setAddress])

  return cloneElement(children, { ref: inputRef, value: address, onChange: (e) => setAddress(e.target.value) })
}
