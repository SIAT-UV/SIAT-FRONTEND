import { Controller } from "react-hook-form"
import { FileForm } from "./FileForm"
import { fileButton, fileSelected } from "./FileInput.module.css"
import { ErrorForm } from "../../../../components/ErrorForm"

export const FileInput = ({ name, control, accept, error }) => {
  return (
    <FileForm label="Evidencia">
      <label htmlFor={name} className={fileButton}>
        Seleccionar archivo
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <input
              id={name}
              type="file"
              hidden
              accept={accept}
              onChange={(event) => onChange(event.target.files?.[0] || null)}
            />
            <p className={fileSelected}>
              {value?.name ?? "Ningún archivo seleccionado"}
            </p>
          </>
        )}
      />
      <ErrorForm error={error} />
    </FileForm>
  )
}
