import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service.js"

export const accidentApproval = (id) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  const promise = axios.post(`accidentes/${id}/aprobar/`, {}, { signal: controller.signal })
  return { promise, controller }
}
