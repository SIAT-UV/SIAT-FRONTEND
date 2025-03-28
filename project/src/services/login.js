import axios from "axios"
import { BACK_URL } from "../constants"
import { LOGIN_FIELDS } from "../constants"
import { formatData } from "../utilities/formatData"
import { loadAbort } from "../utilities"

export const login = (data) => {
  const controller = loadAbort()
  return { call: axios.post(`${BACK_URL}/api/login/`, formatData(data, LOGIN_FIELDS), { signal: controller.signal }), controller }
}
