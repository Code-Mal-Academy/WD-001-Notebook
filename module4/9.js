//! Constructor

class Human {

    name = "Lex"

    walk() {
        console.log("He Is Walking")
    }

    run() {
        console.log("He Is Running")
    }
}

// const human1 = new Human()

//? Same As 

// const Human = {
//     name: "Hey, There",

//     walk() {
//         console.log("He Is Walking")
//     },

//     run() {
//         console.log("He Is Running")
//     }
// }

const human1 = new Human()

//? What OOP allows is Create The Same Instance Of Object Without Writing The Objects
//? Again, and Again

human1.walk()
human1.run()
console.log(human1.name)