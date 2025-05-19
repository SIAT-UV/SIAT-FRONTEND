export const ACCIDENTS_ENUM = {
  trafficControls: ["Semáforo", "Horizontales", "Verticales", "No Informa"],
  accidentType: ["Choque", "Atropello", "Volcamiento"],
  serviceType: ["Particular", "Público", "No Informa"],
  accidentSeverity: ["Con Heridos", "Solo Daños", "Con Muertos", "No Informa"],
  vehicleType: ["Motocicleta", "Camión", "Taxi", "Automóvil", "Bus"],
  accidentArea: ["Urbana", "Rural"],
}

export const ACCIDENTS_FILTERS = {
  filterMap: ["Clase de Servicio", "Gravedad del Accidente"],
  filterAccident: ["Fecha del Accidente", "Dirección del Accidente"],
  "Clase de Servicio": ACCIDENTS_ENUM.serviceType,
  "Gravedad del Accidente": ACCIDENTS_ENUM.accidentSeverity,
}
