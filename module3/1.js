//! Method 

const array = [4, 9, 8, 16]

//? Methods Accepts Both CallBack Function and Normal Function
//! Make Sure To Read Description


//* Call Back
console.log(array.sort((a, b) => a - b))
console.log(array.map((a) => a + 10))
console.log(array.filter((a) => a > 10))


//* Normal Function
console.log(array.sort(function (a, b) {
    return a - b
}))

//! You Don't Need To Name The Function Inside The Methods. 
//! However, you can insert function

function sorter(a, b) {
    return a - b
}

console.log(array.sort(sorter))