import axios from "axios"
import { BACK_URL } from "../constants"
import { REGISTER_FIELDS } from "../constants"
import { formatData } from "../utilities/formatData"
import { loadAbort } from "../utilities"

export const register = (data) => {
  const controller = loadAbort()
  return { call: axios.post(`${BACK_URL}/api/registro/`, formatData(data, REGISTER_FIELDS), { signal: controller.signal }), controller }
}
