import { loadAbort } from "../utilities/index.js"
import { axiosService } from "./axios.service.js"

export const filterGravityAccident = (fecha) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  return {
    call: axios.get(`accidentes/accidentByGravity`, {
      signal: controller.signal,
    }),
    controller,
  }
}