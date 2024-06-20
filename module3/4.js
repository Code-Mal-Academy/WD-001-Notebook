//! Arrow Function

function sayHelloFunction() {
    console.log("Hello")
}

const sayHelloArrowFunction = () => {
    console.log("Hello")
}

//? They are Mostly The Same Except From Syntax, and below steps

//* 1. Return
function returnNumberFunction() {
    return 5
}

//! The Lower Function Returns Automatically Without Return Statement and {}
const returnNumberArrowFunction = () => 5

//* 2. This 
//? This is a Scope Checker. This Reference the scope that is currently in

const object = {
    fName: "Chris",
    lName: "Pratt",
    fullName: function () {
        return `${this.fName} ${this.lName}`
    },
    //* The Arrow Function Will Return an Error. That is because ArrowFunction Are 
    //* Anonymus, and doesn't recognise its scope. So, it can easily avoid side-effects
    //* and Errors
    fullNameArrowFunction: () => `${this.fName} ${this.lName}`
}

console.log(object.fullName())
console.log(object.fullNameArrowFunction())