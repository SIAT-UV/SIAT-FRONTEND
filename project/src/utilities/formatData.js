export const formatData = (data, format) => {
  if (!(data instanceof Object)) return

  const dataKeys = Object.keys(data)
  const formattedData = {}

  if (dataKeys.length !== format.length) return

  dataKeys.forEach((key, index) => {
    formattedData[format[index]] = data[key]
  })

  return formattedData
}
