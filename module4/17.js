let items = ["Apple", "Banana", "Pear", "Kiwi"]

class Seller {

    constructor(sellerName) {
        this.sellerName = sellerName
    }

    sellItem(name) {
        return items = items.filter((item) => item !== name)
    }

}

class Owner extends Seller {

    //? Super() allows the Inheritance to pass down constructor
    constructor(ownerName) {
        super(ownerName)
        this.ownerName = ownerName
    }

    restockItem(name) {
        return items.push(name)
    }
}

const seller = new Seller("Luke")
const owner = new Owner("Tom")

seller.sellItem("Apple")
owner.restockItem("Banana")
owner.sellItem("Kiwi")

console.log(items)