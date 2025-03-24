import { Controller } from "react-hook-form"
import { input } from "./InputForm.module.css"

export const InputForm = ({ name, control, label, type, step, placeholder, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <input id={name} type={type} placeholder={placeholder} step={step} className={input} {...field} />}
      />
      {error && <p>{error.message}</p>}
    </div>
  )
}
