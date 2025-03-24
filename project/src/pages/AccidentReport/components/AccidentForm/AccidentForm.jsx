import { InputForm } from "../InputForm"
import { SelectForm } from "../SelectForm"
import { Button } from "../../../../components/Buttons"
import { ACCIDENTS_ENUM } from "../../constants/accident"
import { formGeneral, form, formTitle, formFile } from "./AccidentForm.module.css"
import { FileInput } from "../FileForm/FileInput"

export const AccidentForm = ({ control, handleSubmit, errors }) => {
  return (
    <div className={form}>
      <h3 className={formTitle}>Información General</h3>
      <form onSubmit={handleSubmit}>
        <div className={formGeneral}>
          <InputForm name="accidentDate" control={control} label="Fecha del Accidente" type="date" error={errors.accidentDate} />
          <InputForm name="accidentTime" control={control} label="Hora del Accidente" type="time" step="1" error={errors.accidentTime} />
          <SelectForm
            name="trafficControls"
            control={control}
            label="Controles de Tránsito"
            options={ACCIDENTS_ENUM.trafficControls}
            error={errors.trafficControls}
          />
          <SelectForm
            name="accidentType"
            control={control}
            label="Tipo de Accidente"
            options={ACCIDENTS_ENUM.accidentType}
            error={errors.accidentType}
          />
          <SelectForm
            name="serviceType"
            control={control}
            label="Clase de Servicio"
            options={ACCIDENTS_ENUM.serviceType}
            error={errors.serviceType}
          />
          <SelectForm
            name="accidentSeverity"
            control={control}
            label="Gravedad del Accidente"
            options={ACCIDENTS_ENUM.accidentSeverity}
            error={errors.accidentSeverity}
          />
          <SelectForm
            name="vehicleType"
            control={control}
            label="Clase de Vehiculo"
            options={ACCIDENTS_ENUM.vehicleType}
            error={errors.vehicleType}
          />
          <SelectForm
            name="accidentArea"
            control={control}
            label="Área del Accidente"
            options={ACCIDENTS_ENUM.accidentArea}
            error={errors.accidentArea}
          />
          {/* <InputForm */}
          {/*   name="accidentAddress" */}
          {/*   control={control} */}
          {/*   label="Dirección del Accidente" */}
          {/*   type="text" */}
          {/*   placeholder="Ingrese la ubicación completa" */}
          {/*   error={errors.accidentAddress} */}
          {/* /> */}
        </div>
        <div className={formFile}>
          <FileInput name="accidentImage" control={control} accept="image/jpeg, image/png" error={errors.accidentImage} />
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </div>
  )
}
