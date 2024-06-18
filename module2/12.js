//! Functions

const person = { name: "Max", age: 10 }
const person2 = { name: "Pete", age: 5 }
const person3 = { name: "Aeon", age: 20 }


function ageValidation(age) {
    if (age < 18) {
        return false
    }
    else {
        return true
    }

}

const person1checked = ageValidation(person.age)
const person2checked = ageValidation(person2.age)
const person3checked = ageValidation(person3.age)

console.log(person3checked)


//? If you want to assigned a function value to a variable, you need to pass a return. 
