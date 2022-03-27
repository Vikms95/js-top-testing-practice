function capitalize (string){
  const char = string.charAt(0).toUpperCase()
  console.log(char + string.substring(0))
  return char + string.substring(1)
}

module.exports = capitalize