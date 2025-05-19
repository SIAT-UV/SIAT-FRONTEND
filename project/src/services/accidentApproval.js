import { loadAbort } from "../utilities/index.js";
import { axiosService } from "./axios.service.js";

export const accidentApproval = (accidenteId, token) => {
  const controller = loadAbort();
  const axios = axiosService.getAxios();

  return {
    call: axios.post(
      `accidentes/${accidenteId}/aprobar/`, {},
      {
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
    controller,
  };
};
