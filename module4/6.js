//! Then, Catch, and Async/Await

const getData = () => new Promise((resolve, reject) => {
    const num = Math.random()

    if (num > 0.5) {
        setTimeout(() => {
            const data = "Promise Succeed";
            resolve(data);
        }, 1000);
    } else {
        const data = "Promise Failed"
        reject(data)
    }

});

//? Then/Catch Is For Callback Enjoyer
getData().then((x) => console.log(x)).catch((err) => console.log(err))

//? Async/Await Is For Try/Catch Enjoyer 
try {
    const data = await getData()
    console.log(data)
} catch (e) {
    console.log(e)
}