import axios from "axios"
import { BACK_URL } from "../constants"
import { snackbarManager } from "./snackbarManager"
import { getValidateErrors } from "../utilities"
import { tokenService } from "./token.service"

class AxiosInterceptors {
  #axios

  constructor(baseURL) {
    this.#axios = axios.create({ baseURL })
  }

  setUpRequest() {
    this.#axios.interceptors.request.use(
      (config) => {
        const token = tokenService.getToken()

        // if (token) config.headers.set(`Authorization Bearer ${token}`)

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
        console.log(error)
        snackbarManager.error(getValidateErrors(error?.code))
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
