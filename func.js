function capitalize (string){
  string = string.toLowerCase()
  return string.charAt(0).toUpperCase() + string.substring(1)
}

function reverseString (string){
  return string.split('').reverse().join('')
}

const calculator = {
  add: function (a, b) {
    return a + b
  },
  substract: function (a, b) {
    return a - b
  },
  multiply: function (a, b) {
    return a * b
  },
  divide: function (a, b) {
    return a / b
  },
}

function caesarCipher(string,n){
  const alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  string = string.split('')

  for (let i = 0; i < string.length; i++) {
    let charToReplace
    if(string[i] === string[i].toLowerCase()){
      string[i] = findChar(alphabetLower,string,charToReplace,i,n)
    }else{
      string[i] = findChar(alphabetUpper,string,charToReplace,i,n)
    }
  }

  return string.join('')
}

const findChar = (alphabet,string,charToReplace,i,n) =>{
  charToReplace = alphabet.findIndex(index => index === string[i])  
  return charToReplace !== -1 ? alphabet[charToReplace + n] : string[i] 
}

function analyzeArray (array){
  let object = {
    average: (array.reduce((prev,curr) => (prev + curr ),0) / array.length) ,
    min: array.reduce((prev,curr) => curr < prev ? curr : prev),
    max: array.reduce((prev,curr) => prev < curr ? curr : prev, 0),
    length: array.length
  }

  return object
}
module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray }