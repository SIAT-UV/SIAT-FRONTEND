import axios from "axios"
import { tokenService } from "./"
import { BACK_URL } from "../constants"
import { snackbarManager } from "./snackbarManager"
import { getValidateErrors } from "../utilities"

class AxiosInterceptors {
  #axios

  constructor(baseURL) {
    this.#axios = axios.create({ baseURL, withCredentials: true })
  }

  setUpRequest() {
    this.#axios.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  setUpResponse() {
    this.#axios.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        const originalRequest = error.config

        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true

          axios
            .post(`${BACK_URL}/api/refresh/`, tokenService.getToken(), { withCredentials: true })
            .then((res) => {
              tokenService.setToken(res.data.access)
              originalRequest.headers["Authorization"] = `Bearer ${res.data.access}`

              this.#axios(originalRequest)
            })
            .catch((err) => {
              snackbarManager.error(getValidateErrors(err?.code))
              return Promise.reject(err)
            })
        }

        console.log(error)
        snackbarManager.error(getValidateErrors(error.code))

        return Promise.reject(error)
      },
    )
  }

  initAxios() {
    this.setUpRequest()
    this.setUpResponse()
  }

  getAxios() {
    return this.#axios
  }
}

export const axiosService = new AxiosInterceptors(BACK_URL)
