import axios from "axios"
import { refresh, tokenService } from "./"
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

        if (error.response?.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true

          try {
            const { call } = refresh()
            const response = await call

            tokenService.setToken(response.data.access)
            return this.#axios(originalRequest)
          } catch (errorRefresh) {
            console.log(errorRefresh)

            tokenService.setIsAuthenticated(false)

            if (errorRefresh.response.data?.CODE_ERR)
              snackbarManager.error(
                getValidateErrors(errorRefresh.response.data.CODE_ERR),
              )

            return Promise.reject(errorRefresh)
          }
        }

        if (error.code !== "ERR_CANCELED") console.log(error)

        if (error.response?.data?.CODE_ERR)
          snackbarManager.error(
            getValidateErrors(error.response?.data?.CODE_ERR),
          )

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
