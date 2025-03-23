import { Controller } from "react-hook-form"

export const FileForm = ({ name, control, label, accept, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, ref } }) => (
          <input id={name} type="file" accept={accept} ref={ref} onChange={(event) => onChange(event.target.files?.[0] || null)} />
        )}
      />
      {error && <p>{error.message}</p>}
    </div>
  )
}
