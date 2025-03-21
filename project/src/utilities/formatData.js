export const formatData = (data, format) => {
  if (!(data instanceof Object)) return

  const dataKeys = Object.keys(data)

  if (dataKeys.length !== format.length) return
  const formattedData = {}

  dataKeys.forEach((key, index) => {
    formattedData[format[index]] = data[key]
  })

  return formattedData
}
