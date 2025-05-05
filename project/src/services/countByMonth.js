import { loadAbort } from "../utilities/index.js"
import { axiosService } from "./axios.service.js"

export const countByMonth = (fecha) => {
    const controller = loadAbort()
    const axios = axiosService.getAxios()
    return {
        call: axios.get(`/accidentes/countByMonth/?fecha=${fecha}`, { signal: controller.signal }), controller,}
}