//! Classes

class Human {

    name = "Lex"

    walk() {
        console.log("He Is Walking")
    }

    run() {
        console.log("He Is Running")
    }
}

const human1 = new Human()
const human2 = new Human()

human1.run()
human1.walk()

//? Same As 

// const Human = {
//     name: "Lex",

//     walk() {
//         console.log("He Is Walking")
//     },

//     run() {
//         console.log("He Is Running")
//     }
// }


// //? What OOP allows is Create The Same Instance Of Object Without Writing The Objects
// //? Again, and Again

// human1.walk()
// human1.run()
// console.log(human1.name)