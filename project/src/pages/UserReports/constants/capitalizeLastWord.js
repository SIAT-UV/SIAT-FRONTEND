export const capitalizeLastWord = (str) => {
  if (!str) return str

  const words = str.split(" ")
  const lastIndex = words.length - 1
  const lastWord = words[lastIndex]

  if (!lastWord) return str

  words[lastIndex] = lastWord[0].toUpperCase() + lastWord.slice(1)
  return words.join(" ")
}
