import { Controller } from "react-hook-form"
import { ErrorForm } from "../ErrorForm"

export const InputForm = ({ name, control, label, className, type, step, placeholder, error }) => {
  const setMaxDate = (event) => {
    if (type !== "date") return

    const now = new Date().toISOString().split("T")[0]
    event.target.setAttribute("max", now)
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input id={name} type={type} placeholder={placeholder} step={step} className={className} onFocus={setMaxDate} {...field} />
        )}
      />
      <ErrorForm error={error} />
    </div>
  )
}
