//? Primitive

const stringDataType = "Hello"

const numberDataType = 100

const bigIntDataType = BigInt(111111111111111111111111111111111111111111111111111111)

const booleanDataType = false

const undefinedDataType = undefined

const nullDataType = null

const symbolDataType = Symbol(12345)

// //? Non-Primitive

const objectDataType = { name: "Tom", age: 18 }

const arrayDataType = ["Tom", 18]

const dateDataType = new Date()

console.log(typeof objectDataType)
console.log(typeof arrayDataType)
console.log(typeof dateDataType)

//! Primative vs Non-Primative
stringDataType.name = "hello"

console.log(stringDataType.name)
console.log(stringDataType.length)


dateDataType.getVarDate = 10
console.log(dateDataType.getVarDate)

// //? You can check type of a variables by using typeof 

console.log(typeof stringDataType)