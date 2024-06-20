//! Object Array With Map/Filter/Reduce/Sort

const objectArray = [{
    name: "Tom",
    age: 18,
    male: true
}, {
    name: "Max",
    age: 19,
    male: true
}, {
    name: "Ari",
    age: 13,
    male: false
}]

const maleArray = objectArray.filter((x) => x.male === true)
const ageSortedArray = objectArray.sort((a, b) => b.age - a.age)

console.log(maleArray)
console.log(ageSortedArray)

//! Practice This One Cause This One Is Super Important