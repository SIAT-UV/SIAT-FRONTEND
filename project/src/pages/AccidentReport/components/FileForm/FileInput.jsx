import { Controller } from "react-hook-form"
import { FileForm } from "./FileForm"
import { fileButton, fileSelected } from "./FileInput.module.css"

export const FileInput = ({ name, control, accept, error }) => {
  return (
    <FileForm>
      <label htmlFor={name} className={fileButton}>
        Seleccionar archivo
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, ref, value } }) => (
          <>
            <input id={name} type="file" hidden accept={accept} ref={ref} onChange={(event) => onChange(event.target.files?.[0] || null)} />
            <p className={fileSelected}>{value ? value.name : "Ningún archivo seleccionado"}</p>
          </>
        )}
      />
      {error && <p>{error.message}</p>}
    </FileForm>
  )
}
