import { Controller } from "react-hook-form"

export const InputForm = ({ name, control, label, type, step, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller name={name} control={control} render={({ field }) => <input id={name} type={type} step={step} {...field} />} />
      {error && <p>{error.message}</p>}
    </div>
  )
}
