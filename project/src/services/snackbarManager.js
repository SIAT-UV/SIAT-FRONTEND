class SnackbarManager {
  #snackbarRef
  #options

  constructor(options) {
    this.#options = options
  }

  setSnackbarRef(snackbarRef) {
    this.#snackbarRef = snackbarRef
  }

  toast(message, variant) {
    this.#snackbarRef.enqueueSnackbar(message, { variant, ...this.#options })
  }

  error(message) {
    this.toast(message, "error")
  }

  success(message) {
    this.toast(message, "success")
  }
}

export const snackbarManager = new SnackbarManager(null)
