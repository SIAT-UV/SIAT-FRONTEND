import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service"

export const report = (data) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  return { call: axios.post("/accidentes/", data, { headers: { "Content-Type": "multipart/form-data" }, signal: controller.signal }), controller }
}
