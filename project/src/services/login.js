import { LOGIN_FIELDS } from "../constants"
import { formatData } from "../utilities/formatData"
import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service"

export const login = (data) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()
  return { call: axios.post("/api/login/", formatData(data, LOGIN_FIELDS), { signal: controller.signal }), controller }
}
