//* https://www.w3schools.com/js/js_operators.asp

//! Math Operators
const sum = 1 + 2
const sub = 2 - 1
const multiply = 3 * 4
const division = 16 / 4
const exponent = 2 ** 2
const modulus = 13 % 4


//! Comparison Operators

//? The Difference between Javascript and Other Langauges are Javascript
//? does type checking when normally comparing. 


console.log(5 == "5")
console.log(5 === "5")
console.log(5 === 5)

console.log(4 != "4")
console.log(4 !== "4")

console.log(10 > 1)
console.log(10 < 5)
console.log(10 >= 10)
console.log(10 <= 10)

//! String Comparison

//? Never does String Comparison whenever possible. Even though, it is built-in,
//? it is like shooting your own leg.

console.log("Max" > "Tom")

//! Mixing String and Number

//! Please don't use this. Use Template Literal If Possible

console.log("5" + 5)
console.log("John " + 10 + " Khant")

//! Javascript Logical Operators

const statement1 = true
const statement2 = false

console.log(statement1 && statement2)
console.log(statement1 || statement2)
console.log(!statement1)