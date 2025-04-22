import { loadAbort } from "../utilities/index.js"
import { axiosService } from "./axios.service.js"

export const FilterMonth = (fecha) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  return {call: axios.get(`/accidentes/filterByMonth/?fecha=${fecha}`, {signal: controller.signal,}), controller,}
}