import { Controller } from "react-hook-form"
import { ErrorForm } from "../ErrorForm"
import { selectInput } from "./SelectForm.module.css"

export const SelectForm = ({
  name,
  control,
  label,
  defaultOption = "Seleccione una opción",
  className,
  options,
  error,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            id={name}
            className={className ? `${selectInput} ${className}` : selectInput}
            {...field}
          >
            <option value="">{defaultOption}</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      <ErrorForm error={error} />
    </div>
  )
}
