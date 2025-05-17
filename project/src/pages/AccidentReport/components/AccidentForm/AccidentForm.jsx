import { InputForm } from "../../../../components/InputForm"
import { SelectForm } from "../../../../components/SelectForm"
import { Button } from "../../../../components/Buttons"
import { ACCIDENTS_ENUM } from "../../constants/accident"
import {
  formGeneral,
  container,
  form,
  formTitle,
  formFile,
  input,
  select,
  ubicationInput,
} from "./AccidentForm.module.css"
import { FileInput } from "../FileForm/FileInput"
import { UbicationForm } from "../UbicationForm"

export const AccidentForm = ({ control, handleSubmit, errors }) => {
  return (
    <div className={container}>
      <h3 className={formTitle}>Información General</h3>
      <form onSubmit={handleSubmit} className={form}>
        <div className={formGeneral}>
          <InputForm
            name="accidentDate"
            control={control}
            label="Fecha del Accidente"
            className={input}
            type="date"
            error={errors.accidentDate}
          />
          <InputForm
            name="accidentTime"
            control={control}
            label="Hora del Accidente (Ej: 05:30:00 pm)"
            className={input}
            type="time"
            step="1"
            error={errors.accidentTime}
          />
          <SelectForm
            name="trafficControls"
            control={control}
            label="Controles de Tránsito"
            className={select}
            options={ACCIDENTS_ENUM.trafficControls}
            error={errors.trafficControls}
          />
          <SelectForm
            name="accidentType"
            control={control}
            label="Tipo de Accidente"
            className={select}
            options={ACCIDENTS_ENUM.accidentType}
            error={errors.accidentType}
          />
          <SelectForm
            name="serviceType"
            control={control}
            label="Clase de Servicio"
            className={select}
            options={ACCIDENTS_ENUM.serviceType}
            error={errors.serviceType}
          />
          <SelectForm
            name="accidentSeverity"
            control={control}
            label="Gravedad del Accidente"
            className={select}
            options={ACCIDENTS_ENUM.accidentSeverity}
            error={errors.accidentSeverity}
          />
          <SelectForm
            name="vehicleType"
            control={control}
            label="Clase de Vehiculo"
            className={select}
            options={ACCIDENTS_ENUM.vehicleType}
            error={errors.vehicleType}
          />
          <SelectForm
            name="accidentArea"
            control={control}
            label="Área del Accidente"
            className={select}
            options={ACCIDENTS_ENUM.accidentArea}
            error={errors.accidentArea}
          />
          <InputForm
            name="accidentNeighbor"
            control={control}
            label="Barrio del Accidente"
            placeholder="Ingrese el barrio del accidente"
            className={input}
            error={errors.accidentNeighbor}
          />
        </div>
        <div className={formFile}>
          <UbicationForm error={errors.accidentAddress}>
            <input
              type="text"
              placeholder="Ingrese la ubicación del accidente"
              className={`${input} ${ubicationInput}`}
            />
          </UbicationForm>
          <FileInput
            name="accidentImage"
            control={control}
            accept="image/jpeg, image/png"
            error={errors.accidentImage}
          />
          <Button type="submit">Registrar accidente</Button>
        </div>
      </form>
    </div>
  )
}
