import { UbicationMap } from "../../../../components/Ubication"
import { ErrorForm } from "../../../../components/ErrorForm"
import { ubicationContainer } from "./UbicationForm.module.css"

const mapContainer = {
  width: "100%",
  height: "400px",
  marginTop: "30px",
}

export const UbicationForm = ({ error, children }) => {
  return (
    <div className={ubicationContainer}>
      <label htmlFor="accidentAddress">Ubicación del accidente</label>
      <UbicationMap containerStyles={mapContainer} zoom={14}>
        {children}
      </UbicationMap>
      <ErrorForm error={error} />
    </div>
  )
}
