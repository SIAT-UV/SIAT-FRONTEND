export const getValidateErrors = (errorCode) => {
  const matcedError = {
    ERR_NETWORK: "No se logro conectar con el servidor",
    ERR_BAD_REQUEST: "Se envio una solicitud incorrecta",
    AUTH_ERROR: "No existe una cuenta activa con las credenciales ingresadas",
    USER_NOT_FOUND: "El usuario no se encuentra registrado",
    SERVER_ERROR: "Ocurrio un error inesperado en el servidor. Intente nuevamente",
  }

  return matcedError[errorCode]
}
