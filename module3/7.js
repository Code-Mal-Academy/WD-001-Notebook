//* forEach, Sort, Map, Filter, and Reduce 

//! IMPORTANT !!!!
//! None of these methods Changes the Orignal Array

//* For Each

const array = [6, 8, 2, 10]

array.forEach((x) => console.log(x))

//! forEach Return Nothing

const newForEachArray = array.forEach((x) => x + 10)

console.log(newForEachArray)

//! It is used with Global Scope To Mutate The Value

let total = 0;

array.forEach((x) => total = total + x)

console.log(total)

//* Sort

//! THIS METHODS DOESN'T SORT THE ARRAY. YOU NEED TO PROVIDE INFO
console.log(array.sort())

//! To Simply Explain, the b argument is highest value. a arguement is lowest value. 
//! b - a meant SORT FROM HIGHEST TO LOWEST
//! a - b will SORT FROM LOWEST TO HIGHEST
console.log(array.sort((b, a) => b - a))

//! sort Returns

const newSortedArray = array.sort((a, b) => b - a)
console.log(newSortedArray)

//* Map

//! Map is used when mutation every value inside array
console.log(array.map((x) => x + 10))

//! Map accepts 2 args. First is current value, and other is its index
console.log(array.map((current, index) => current + index))

//! Map Returns 

const mappedArray = array.map((x) => x + 10)
console.log(mappedArray)

//* Filter

console.log(array.filter((x) => x > 8))

//! Filter also accepts 2 args. First is current value, and other is its index

//! Filter Returns 
const filteredArray = array.filter((x) => x < 9)
console.log(filteredArray)

//! Reduce 

//! Reduce is used when Reducing an Array To Single Value

console.log(array.reduce((current, next) => current + next))
console.log(array.reduce((current, next) => current > next))

//! Reduce Returns

const reducedArray = array.reduce((x, y) => x + y)
