import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service"

export const geoAccidents = () => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  return {
    call: axios.get("/accidentes/list", { signal: controller.signal }),
    controller,
  }
}
