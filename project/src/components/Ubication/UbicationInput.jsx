import { cloneElement } from "react"
import { useAddressMarker } from "../../hooks"
import { useFormContext } from "react-hook-form"

export const UbicationInput = ({ onPlaceSelect, markerPosition, children }) => {
  const { register, setValue } = useFormContext()
  const { inputRef } = useAddressMarker(onPlaceSelect, setValue, markerPosition)

  return (
    <>
      {cloneElement(children, {
        ...register("accidentAddress"),
        ref: (elm) => {
          register("accidentAddress").ref(elm)
          inputRef.current = elm
        },
      })}
      <input type="hidden" {...register("accidentGeo")} />
    </>
  )
}
