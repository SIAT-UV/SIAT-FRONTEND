import { loadAbort } from "../utilities"
import { axiosService } from "./axios.service"

export const filterAccidentByDate = ({ startDate, endDate }) => {
  const controller = loadAbort()
  const axios = axiosService.getAxios()

  return {
    call: () =>
      axios.get(
        `/accidentes/accidentByDate?start_date=${startDate}&end_date=${endDate}`,
        { signal: controller.signal },
      ),
    controller,
  }
}
