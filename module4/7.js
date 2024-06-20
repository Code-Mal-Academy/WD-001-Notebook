//! Async/Await 

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}



// getData()

// fetch('https://jsonplaceholder.typicode.com/users').then(
//     res => res.json()
//         .then(x => console.log(x)))
//     .catch(err => err)



