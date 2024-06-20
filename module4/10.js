//? this


class Human {

    //? This Reference the Scope That Is Currently In
    constructor(firstName, lastName) {
        this.fName = firstName
        this.lName = lastName
    }

    fullName() {
        return this.fName + " " + this.lName
    }

}

const person1 = new Human("Tom", "Everson")
const person2 = new Human("Max", "Plex")
const person3 = new Human("Alex", "Hugo")

console.log(person1.fullName())
console.log(person2.fullName())
console.log(person3.fullName())