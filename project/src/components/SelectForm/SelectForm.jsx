import { Controller } from "react-hook-form"

export const SelectForm = ({ children, name, control, label, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select id={name} {...field}>
            {children}
          </select>
        )}
      />
      {error && <p>{error.message}</p>}
    </div>
  )
}
