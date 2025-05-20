import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service.js"

export const profileUser = (data) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  return { call: axios.get("getDataUser/", { signal: controller.signal }), controller }
}

