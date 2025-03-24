import { Controller } from "react-hook-form"
import { select } from "./SelectForm.module.css"

export const SelectForm = ({ name, control, label, options, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select id={name} className={select} {...field}>
            <option value="">Seleccione una opción</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {error && <p>{error.message}</p>}
    </div>
  )
}
