import axios from "axios"
import { BACK_URL } from "../constants"
import { REGISTER_FIELDS } from "../constants"
import { formatData } from "../utilities/formatData"

export const register = async (data) => {
  return await axios.post(`${BACK_URL}/api/registro`, formatData(data, REGISTER_FIELDS))
}
