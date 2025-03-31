import { useApiIsLoaded, useMap, useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

export const useAddressMarker = ({ onPlaceSelect, setValue }) => {
  const inputRef = useRef(null)
  const map = useMap()
  const apiIsLoaded = useApiIsLoaded()
  const places = useMapsLibrary("places")

  useEffect(() => {
    if (!apiIsLoaded || !inputRef.current || !places) return

    const autocomplete = new places.Autocomplete(inputRef.current, options)

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace()
      console.log(onPlaceSelect)

      // if (place?.formatted_address && setValue) {
      //   setValue("accidentAddress", place.formatted_address, { shouldValidate: true })
      // }

      if (place?.geometry?.location) {
        const selectedLocation = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
        onPlaceSelect(selectedLocation)
        map.panTo(selectedLocation)
      }
    })

    return () => autocomplete.unbindAll()
  }, [apiIsLoaded, onPlaceSelect, places, map, setValue])

  return { inputRef, apiIsLoaded }
}
