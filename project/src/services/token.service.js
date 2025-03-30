class TokenService {
  #token

  constructor() {
    this.#token = null
  }

  setToken(token) {
    this.#token = token
  }

  getToken() {
    return this.#token
  }
}

export const tokenService = new TokenService()
