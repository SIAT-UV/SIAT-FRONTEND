import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service"

export const userAccidents = () => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()

  return {
    call: axios.get("/accidentes/accidentByUser", {
      signal: controller.signal,
    }),
    controller,
  }
}
