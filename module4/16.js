//! Inheritance

class Human {

    walk() {
        return "It is Walking"
    }

}

class Student extends Human {
    learn() {
        return "It is Learning"
    }
}

const human1 = new Human()

const student1 = new Student()

console.log(student1.learn())
console.log(student1.walk())

// console.log(human1.learn())


//! Method Chaining
class Group {

    constructor() {
        this.students = new Student()
        this.human = new Human()
    }
}

class School {

    constructor() {
        this.groupOne = new Group()
        this.groupTwo = new Group()
    }

}

const codeMal = new School()
n