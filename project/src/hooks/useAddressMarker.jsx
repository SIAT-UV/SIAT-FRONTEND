import {
  useApiIsLoaded,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps"
import { useEffect } from "react"
import { useRef } from "react"
import { MAP_IDS } from "../constants"

const options = {
  componentRestrictions: { country: "co" },
}

export const useAddressMarker = (onPlaceSelect, setValue, markerPosition) => {
  const inputRef = useRef(null)
  const map = useMap(MAP_IDS.ADDRESS)
  const apiIsLoaded = useApiIsLoaded()
  const places = useMapsLibrary("places")

  useEffect(() => {
    if (!apiIsLoaded || !map || !markerPosition) return

    map.panTo(markerPosition)
  }, [map, markerPosition, apiIsLoaded])

  useEffect(() => {
    if (!apiIsLoaded || !inputRef.current || !places) return

    const autocomplete = new places.Autocomplete(inputRef.current, options)

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace()

      if (place?.formatted_address) {
        setValue("accidentAddress", place.formatted_address, {
          shouldValidate: true,
        })
      }

      if (place?.geometry?.location) {
        const selectedLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        }
        onPlaceSelect(selectedLocation)
      }
    })

    return () => autocomplete.unbindAll()
  }, [apiIsLoaded, onPlaceSelect, places, map, setValue])

  useEffect(() => {
    if (!markerPosition || !apiIsLoaded || !inputRef.current) return

    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ location: markerPosition }, (results, status) => {
      if (status !== "OK" || !results[0]) return

      const { lat, lng } = markerPosition
      // console.log(`POINT (${lng} ${lat})`)

      setValue("accidentAddress", results[0].formatted_address, {
        shouldValidate: true,
      })
      setValue("accidentGeo", `POINT (${lng} ${lat})`)
    })
  }, [markerPosition, apiIsLoaded, inputRef, setValue])

  return { inputRef }
}
