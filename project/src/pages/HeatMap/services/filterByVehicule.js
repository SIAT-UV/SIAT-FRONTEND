import { axiosService } from "../../../services"
import { loadAbort } from "../../../utilities"

export const filterByVehicule = (vehicule) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()

  return {
    call: () =>
      axios.get(`/accidentes/vehiculos/?vehiculo=${vehicule}`, {
        signal: controller.signal,
      }),
    controller,
  }
}
