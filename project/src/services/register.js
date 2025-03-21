import axios from "axios"
import { BACK_URL } from "../constants/backUrl"
import { REGISTER_FIELDS } from "../constants/DBFields"
import { formatData } from "../utilities/formatData"

export const register = async (data) => {
  return await axios.post(`${BACK_URL}/api/registro`, formatData(data, REGISTER_FIELDS))
}
