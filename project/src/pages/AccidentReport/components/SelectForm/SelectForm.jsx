import { Controller } from "react-hook-form"
import { ErrorForm } from "../ErrorForm"

export const SelectForm = ({ name, control, label, className, options, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select id={name} className={className} {...field}>
            <option value="">Seleccione una opción</option>
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
