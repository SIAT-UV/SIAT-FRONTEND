import { Controller } from "react-hook-form"
import { ErrorForm } from "../ErrorForm"
import { inputStyle } from "./InputForm.module.css"

export const InputForm = ({
  name,
  control,
  label,
  className,
  type,
  step,
  placeholder,
  error,
}) => {
  const setMaxDate = (event) => {
    if (type !== "date") return

    const now = new Date().toLocaleDateString("en-ca")
    event.target.setAttribute("max", now)
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            step={step}
            className={className ? `${inputStyle} ${className}` : inputStyle}
            onFocus={setMaxDate}
            {...field}
          />
        )}
      />
      <ErrorForm error={error} />
    </div>
  )
}
