//! Promises

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

getData().then((x) => console.log(x)).catch((err) => console.log(err))

//? Why use Promise In First Place ?
//? Database Fetching, Connecting With Server, Background Process 
