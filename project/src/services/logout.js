import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service"

export const logout = () => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()

  return {
    call: () => axios.get("/logout/", { signal: controller.signal }),
    controller,
  }
}
