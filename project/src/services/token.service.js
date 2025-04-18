class State {
  constructor() {
    this.observers = new Set()
  }

  subscribe(observer) {
    this.observers.add(observer)

    return () => this.observers.delete(observer)
  }

  notify() {
    this.observers.forEach((observer) => {
      observer()
    })
  }
}

class TokenService extends State {
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
    this.#state.token = token
    this.notify()
  }

  getSnapshot() {
    return this.#state
  }
}

export const tokenService = new TokenService()
