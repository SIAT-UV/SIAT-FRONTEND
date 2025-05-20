import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service.js"

export const accidentNoApproval = (data) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  return { call: axios.get("accidentes/accidentNoAprobado", { signal: controller.signal }), controller }
}