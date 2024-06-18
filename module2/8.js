const age = 100

if (age >= 18) {
    console.log("You Can Drink")
}

if (age >= 18) {
    console.log("You Can Drink")
} else {
    console.log("You Can't Drink")
}

//! Think Carefully of Logic Because if else break once condition are met

if (age >= 18) {
    console.log("You Can Drink")
} else if (age == 70) {
    console.log("You Can Only Drink Small Amount")
} else {
    console.log("You can't drink")
}

if (age < 18) {
    console.log("You Can't Drink")
} else if (age >= 70) {
    console.log("You Can Only Drink Small Amount")
} else {
    console.log("You Can drink")
}

//? break will stop running if condition are met

switch (age) {
    case 16:
        console.log("You can drive")
        break
    case 18:
        console.log("You can drive")
        break
    case 21:
        console.log("You can Engage")
        break
    default:
        console.log("Error")
}

//! Tenary Operators are Important and will be used a lot 

//? The true condition should come if front
console.log(age === 18 ? "Legal To Drink" : "Illegal To Drink")