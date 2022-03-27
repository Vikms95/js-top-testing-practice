const func = require('./func.js')

// capitalize test

test('enter lowercase string' , () =>{
  expect(func.capitalize('house')).toBe('House')
})

test('enter uppercase string', () =>{
  expect(func.capitalize('HOUSE')).toBe('House')
})

// reverseString test

test('reverse string', () =>{
  expect(func.reverseString('House')).toBe('esuoH')
})

// calculator test

test('calculator add', () =>{
  expect(func.calculator.add(5,5)).toBe(10)
})

test('calculator substract', () =>{
  expect(func.calculator.substract(5,5)).toBe(0)
})

test('calculator multiply', () =>{
  expect(func.calculator.multiply(5,5)).toBe(25)
})

test('calculator divide', () =>{
  expect(func.calculator.divide(5,5)).toBe(1)
})

test('shift 5 places', () =>{
  expect(func.caesarCipher('Madrid',5)).toBe('Rfiwni')
})

test('shift with symbols and numbers', () =>{
  expect(func.caesarCipher('a145487@a.a/a',1)).toBe('b145487@b.b/b')
})

test('test', () =>{
  expect(func.analyzeArray([1,5,8,7])).toStrictEqual(
    {
      average: 5.25,
      min:1,
      max:8,
      length: 4
  }
  )})

 