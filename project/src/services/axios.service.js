import axios from "axios"
import { tokenService } from "./"
import { snackbarManager } from "./snackbarManager"
import { getValidateErrors } from "../utilities"
import { BACK_URL } from "../constants"

class AxiosInterceptors {
  #axios

  constructor(baseURL) {
    this.#axios = axios.create({ baseURL, withCredentials: true })
  }

  setUpRequest() {
    this.#axios.interceptors.request.use(
      (config) => {
        const token = tokenService.getToken()

        if (token) config.headers["Authorization"] = `Bearer ${token}`

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
      async (error) => {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true
          console.log("Refresh")

          try {
            const response = await axios.post("/api/refresh/", undefined, { withCredentials: true })

            tokenService.setToken(response.data.access)
            this.#axios(originalRequest)
          } catch (errorRefresh) {
            console.log(errorRefresh)
            if (errorRefresh.response.data?.CODE_ERR) snackbarManager.error(getValidateErrors(errorRefresh.response.data.CODE_ERR))

            return Promise.reject(errorRefresh)
          }
        }

        console.log(error)
        if (error.response.data?.CODE_ERR) snackbarManager.error(getValidateErrors(error.response.data.CODE_ERR))

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
