//! Loops

let x = 5

// while (x < 10) {
//     console.log(x)
// }

// do {
//     console.log(x)
//     x = x + 1
// }
// while (x < 10)

//? Difference between while, and do-while is do-while will run once
//?  no matter the condition

// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }

//! Difference between while, and for loops is for-loop will specific amount of time 
//! but, while will run until the condition is met

const personObject = { name: "Tom", age: 18 }


//! For In Is Used When You Want To Get Key From The Object/Array
for (let x in personObject) {
    console.log(x)
}

//! You Can Use This When You Want Values From Obkect
for (let x in personObject) {
    console.log(personObject[x])
}

const personArray = ["Tom", 18]

//! Key In Array Are Technically Their Indexes
for (let x in personArray) {
    console.log(x)
}

//! For Of Is Used When You Want To Get Values From Array
for (let x of personArray) {
    console.log(x)
}

const ageArray = [13, 20]

for (let x in ageArray) {
    if (ageArray[x] < 18) {
        console.log("Underage")
        break
        //! Break Stop The Loop When Conditions Are Met. That Is Why For Loop Stopped
    } else {
        console.log("Legal")
    }
}