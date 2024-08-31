//! Constructor 

class Human {

    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    getInfo() {
        return `${this.name} is ${this.gender}, and is ${this.age} year old`
    }

}

const person1 = new Human("Tom", 18, "Male")
const person2 = new Human("Ryan", 10, "Male")

console.log(person1.getInfo())
console.log(person2.getInfo())