import axios from "axios"
import { BACK_URL } from "../constants"

class AxiosInterceptors {
  #axios

  constructor(baseURL) {
    this.#axios = axios.create({ baseURL })
  }

  setUpRequest() {
    this.#axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token")

        if (token) config.headers.set(`Authorization Bearer ${token}`)
        config.headers.set("Content-Type", "application/json")

        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  initAxios() {
    this.setUpRequest()
  }

  getAxios() {
    return this.#axios
  }
}

export const axiosService = new AxiosInterceptors(BACK_URL)
