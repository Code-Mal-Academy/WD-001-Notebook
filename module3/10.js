const inputBox = document.getElementById("inputBox")
const listNode = document.getElementById("list")
const listItemNode = listNode.querySelectorAll("li")


//! keyup, vs keydown
inputBox.addEventListener("keyup", (e) => {

    const inputValue = e.target.value

    for (let i = 0; i < listItemNode.length; i++) {

        //! WHY .includes instead of ===

        //! .toLowerCase() can be removed for case-sensitive

        if (listItemNode[i].innerText.toLowerCase().includes(inputValue.toLowerCase())) {
            listItemNode[i].style.display = "block"
        } else {
            listItemNode[i].style.display = "none"
        }
    }


})