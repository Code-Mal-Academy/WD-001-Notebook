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

const container = document.getElementById("container")
const listContainer = document.createElement("ul")

container.appendChild(listContainer)

objectArray.forEach((x) => {
    console.log(x)
    const list = document.createElement("li")
    list.innerText = `Name: ${x.name}; Age: ${x.age}; Male: ${x.male}`
    listContainer.appendChild(list)
})

//! The Object Array Is The Highly Used Data Structure In Javascript