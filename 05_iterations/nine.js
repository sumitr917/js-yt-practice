const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc:${acc} and currVal: ${currVal}`)
//     return acc + currVal
// }, 0) // 0 is for aterting value of accumulator

const myTotal = myNums.reduce( (acc, currVal) => acc+currVal, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "mobile dev",
        price: 9999
    },
    {
        itemName: "java dev",
        price: 999
    },
    {
        itemName: "react dev",
        price: 7678
    },
    {
        itemName: "ios dev",
        price: 5678
    },
    {
        itemName: ".NET dev",
        price: 5647
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay)