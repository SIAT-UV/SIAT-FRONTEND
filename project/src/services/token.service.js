class Service {
  #observers

  constructor() {
    this.#observers = []
  }

  subscribe(observer) {
    this.#observers = [...this.#observers, observer]

    return () => {
      this.#observers = this.#observers.filter((obs) => obs !== observer)
    }
  }

  notify() {
    this.#observers.forEach((observer) => {
      observer()
    })
  }
}

class TokenService extends Service {
  #state

  constructor() {
    super()
    this.#state = {
      token: null,
      isAuthenticated: false,
    }
  }

  getToken() {
    return this.#state.token
  }

  setToken(token) {
    this.#state = { ...this.#state, token }
    this.notify()
  }

  getIsAuthenticated() {
    return this.#state.isAuthenticated
  }

  setIsAuthenticated(isAuthenticated) {
    this.#state = { ...this.#state, isAuthenticated }
    this.notify()
  }

  getSnapshot() {
    return this.#state
  }
}

export const tokenService = new TokenService()
