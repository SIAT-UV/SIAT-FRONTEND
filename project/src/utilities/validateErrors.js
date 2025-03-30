export const getValidateErrors = (errorCode) => {
  const matcedError = {
    ERR_NETWORK: "No se pudo conectar con el servidor",
    ERR_BAD_REQUEST: "No existe una cuenta activa con las credenciales ingresadas",
  }

  return matcedError[errorCode]
}
