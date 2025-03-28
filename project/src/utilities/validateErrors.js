export const getValidateErrors = (errorCode) => {
  const matcedError = {
    ERR_BAD_REQUEST: "No existe una cuenta activa con las credenciales ingresadas",
  }

  return matcedError[errorCode]
}
