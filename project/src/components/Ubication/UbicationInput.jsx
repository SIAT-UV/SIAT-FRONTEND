import { cloneElement } from "react"
import { useAddressMarker } from "../../hooks"
import { useEffect } from "react"
import { useFormContext } from "react-hook-form"
import { useRef } from "react"
import { useApiIsLoaded, useMap, useMapsLibrary } from "@vis.gl/react-google-maps"

const options = {
  componentRestrictions: { country: "co" },
}

export const UbicationInput = ({ onPlaceSelect, markerPosition, children }) => {
  const { register, setValue } = useFormContext()
  const inputRef = useRef(null)
  const map = useMap()
  const apiIsLoaded = useApiIsLoaded()
  const places = useMapsLibrary("places")

  useEffect(() => {
    if (!apiIsLoaded || !inputRef.current || !places) return

    const autocomplete = new places.Autocomplete(inputRef.current, options)

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace()

      if (place?.formatted_address) {
        setValue("accidentAddress", place.formatted_address, { shouldValidate: true })
      }

      if (place?.geometry?.location) {
        const selectedLocation = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
        onPlaceSelect(selectedLocation)
        map.panTo(selectedLocation)
      }
    })

    return () => autocomplete.unbindAll()
  }, [apiIsLoaded, onPlaceSelect, places, map, setValue])

  useEffect(() => {
    if (!markerPosition || !apiIsLoaded || !inputRef.current) return

    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ location: markerPosition }, (results, status) => {
      if (status !== "OK" || !results[0]) return

      setValue("accidentAddress", results[0].formatted_address, { shouldValidate: true })
      inputRef.current.setAttribute("data-location", JSON.stringify(markerPosition))
    })
  }, [markerPosition, apiIsLoaded, inputRef, setValue])

  return cloneElement(children, {
    ...register("accidentAddress"),
    ref: (elm) => {
      register("accidentAddress").ref(elm)
      inputRef.current = elm
    },
  })
}
