import axios from "axios"
import { loadAbort } from "../utilities"
import { BACK_URL } from "../constants"

export const refresh = () => {
  const controller = loadAbort()

  return {
    call: () =>
      axios.post(`${BACK_URL}/refresh/`, undefined, {
        withCredentials: true,
        signal: controller.signal,
      }),
    controller,
  }
}
