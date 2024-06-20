//! Callback Function

//* Callback Function Are Function That Accept Function As An Arguement
//* Map/Filter/Reduce/Sort all accept callback as Function

const array = [1, 3, 4, 6]

array.map((x) => x + 10)

const mathFunction = (a, b, func) => func(a, b)

const sumFunction = (a, b) => a + b
const multiplyFunction = (a, b) => a * b

console.log(mathFunction(1, 4, sumFunction))
console.log(mathFunction(1, 3, multiplyFunction))
