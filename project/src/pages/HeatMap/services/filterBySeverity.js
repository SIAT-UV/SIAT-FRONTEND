import { axiosService } from "../../../services"
import { loadAbort } from "../../../utilities"

export const filterBySeverity = (severity) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()

  return {
    call: () =>
      axios.get(`/accidentes/gravedad/?gravedad=${severity}`, {
        signal: controller.signal,
      }),
    controller,
  }
}
