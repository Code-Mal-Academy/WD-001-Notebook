//! Global Scope

let y = false

function valueChanger() {
    const x = true
    y = true
}


console.log(x)


//! Javascript Hoisting
//! Using let can change global scope. That's why you need to be careful.