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
    }
  }

  getToken() {
    return this.#state.token
  }

  setToken(token) {
    this.#state = { ...this.#state, token }
    this.notify()
  }

  getSnapshot() {
    return this.#state
  }
}

export const tokenService = new TokenService()
