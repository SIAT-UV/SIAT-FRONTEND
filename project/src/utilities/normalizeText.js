export const normalize = (cadena) => {
  const replaceText = cadena.replace(/ñ/g, "__enie__").replace(/Ñ/g, "__ENIE__")

  const sinTilde = replaceText.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  const normalizeText = sinTilde
    .replace(/__enie__/g, "ñ")
    .replace(/__ENIE__/g, "Ñ")

  return normalizeText
}
