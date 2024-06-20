//! Error And Try Catch

const ErrorFunction = () => {
    const num = Math.random()
    if (num > 0.5) {
        throw Error("Error No.1")
    } else {
        console.log("No Error")
    }
}

try {
    ErrorFunction()
} catch (e) {
    console.log(e)
}

//? Promises, Callback, Async Function. Those are the things that can caused error
//? For examples, due to internet latency, or Memory dump