import { UbicationMap } from "../../../../components/Ubication"
import { ubicationContainer } from "./UbicationForm.module.css"

const mapContainer = {
  width: "100%",
  height: "400px",
  marginTop: "30px",
}

export const UbicationForm = ({ children }) => {
  return (
    <div className={ubicationContainer}>
      <label htmlFor="accidentLocation">Ubicación del accidente</label>
      <UbicationMap containerStyles={mapContainer} zoom={14}>
        {children}
      </UbicationMap>
    </div>
  )
}
