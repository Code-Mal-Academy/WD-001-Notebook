//! GET REQUEST
const fetchDiv = document.getElementById('fetch')


document.addEventListener("DOMContentLoaded", async () => {
    const users = await getData()
    users.forEach(user => {
        const liTag = document.createElement("li")
        const pTag = document.createElement("p")
        const btnTag = document.createElement("button")

        liTag.id = user.id
        btnTag.id = user.id

        pTag.innerText = `Id: ${user.id}; Name: ${user.name}; Age: ${user.age}; Gender: ${user.gender}`
        btnTag.innerText = "DELETE"

        liTag.appendChild(pTag)
        liTag.append(btnTag)

        btnTag.onclick = () => deleteData(Number(btnTag.id))

        fetchDiv.appendChild(liTag)
    });
})

const getData = async () => {
    try {
        const req = await fetch("http://localhost:8080/")
        const data = await req.json()
        return data
    } catch (e) {
        console.log(e)
    }
}

//! POST REQUEST
const addUserSection = document.getElementById('addUserSection')

//! getElementById
const submitAddButton = addUserSection.querySelector("#submitBtn")

submitAddButton.addEventListener("click", async () => {
    const name = addUserSection.querySelector("#name").value
    const age = addUserSection.querySelector("#age").value
    const gender = addUserSection.querySelector("#gender").value

    const user = await createData(name, age, gender)

    const liTag = document.createElement("li")
    const pTag = document.createElement("p")
    const btnTag = document.createElement("button")


    liTag.id = user.id
    btnTag.id = user.id


    pTag.innerText = `Id: ${user.id}; Name: ${user.name}; Age: ${user.age}; Gender: ${user.gender}`
    btnTag.innerText = "DELETE"

    liTag.appendChild(pTag)
    liTag.append(btnTag)

    btnTag.onclick = () => deleteData(Number(btnTag.id))

    fetchDiv.appendChild(liTag)
})

const createData = async (name, age, gender) => {
    try {

        const req = await fetch('http://localhost:8080/', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                age: age,
                gender: gender,
            }),
            headers: {
                'Content-type': 'application/json;',
            },
        })
        const data = await req.json()
        return data
    } catch (e) {
        console.log(e)
    }
}

//! PUT REQUEST
const editUserSection = document.getElementById('editUserSection')
const submitEditButton = editUserSection.querySelector("#submitBtn")

submitEditButton.addEventListener("click", async () => {
    const id = editUserSection.querySelector('#id').value
    const name = editUserSection.querySelector("#name").value
    const age = editUserSection.querySelector("#age").value
    const gender = editUserSection.querySelector("#gender").value

    const user = await updateData(id, name, age, gender)

    const liTag = fetchDiv.querySelector(`[id='${id}']`)
    const btnTag = liTag.querySelector("button")

    const pTag = liTag.querySelector("p")

    liTag.id = user.id
    btnTag.id = user.id

    pTag.innerText = `Id: ${user.id}; Name: ${user.name}; Age: ${user.age}; Gender: ${user.gender}`

})

const updateData = async (id, name, age, gender) => {
    try {
        const req = await fetch('http://localhost:8080/', {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                name: name,
                age: age,
                gender: gender,
            }),
            headers: {
                'Content-type': 'application/json;',
            },
        })
        const data = await req.json()
        return data
    } catch (e) {
        console.log(e)
    }
}


//! DELETE REQUEST
const deleteUserSection = document.getElementById('deleteUserSection')
const submitDeleteBtn = deleteUserSection.querySelector("#submitBtn")


submitDeleteBtn.addEventListener("click", async () => {
    const id = deleteUserSection.querySelector('#id').value
    await deleteData(id)



})

const deleteData = async (id) => {
    try {
        const req = await fetch('http://localhost:8080/', {
            method: 'DELETE',
            body: JSON.stringify({
                id: id,
            }),
            headers: {
                'Content-type': 'application/json;',
            },
        })


        const liTag = fetchDiv.querySelector(`[id='${id}']`)
        fetchDiv.removeChild(liTag)


    } catch (e) {
        console.log(e)
    }
}