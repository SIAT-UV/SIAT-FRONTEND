import { cloneElement, useState } from "react"
import { useApiIsLoaded, useMap, useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect } from "react"
import { useRef } from "react"

export const UbicationInput = ({ onPlaceSelect, markerPosition, children }) => {
  const [address, setAddress] = useState("")
  const inputRef = useRef(null)
  const map = useMap()
  const apiIsLoaded = useApiIsLoaded()
  const places = useMapsLibrary("places")

  useEffect(() => {
    if (!markerPosition || !apiIsLoaded || !inputRef.current) return

    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ location: markerPosition }, (results, status) => {
      if (status !== "OK" || !results[0]) return
      setAddress(results[0].formatted_address)
    })
  }, [markerPosition, apiIsLoaded])

  useEffect(() => {
    if (!apiIsLoaded || !inputRef.current) return

    const autocomplete = new places.Autocomplete(inputRef.current)

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace()
      if (place.geometry?.location) {
        const selectedLocation = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
        onPlaceSelect(selectedLocation)
        map.panTo(selectedLocation)
      }
    })

    return () => autocomplete.unbindAll()
  }, [apiIsLoaded, onPlaceSelect, places, map])

  return cloneElement(children, { ref: inputRef, value: address, onChange: (e) => setAddress(e.target.value) })
}
