import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service.js"

export const RequestRecentAccidents = (data) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  return { call: axios.get("/accidentes/recentlyAccident", { signal: controller.signal }), controller }
}

