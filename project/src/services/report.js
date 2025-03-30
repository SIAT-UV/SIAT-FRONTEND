import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service"

export const report = (data) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  return { call: axios.post("/api/accidentes/", data, { signal: controller.signal }), controller }
}
