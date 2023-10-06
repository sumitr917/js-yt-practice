// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(id == anotherId)


const bigNumber = 4242342423423423423413245645645n


//Reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"]

let myObj = {
    name: "Sumit",
    age: 25,
}

let myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof bigNumber)
console.log(typeof null)
console.log(typeof myFunction)
console.log(typeof heroes)
console.log(typeof id)
console.log(typeof undefined)




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "sumit-ranjan"

let anotherName = myName

anotherName = "changed"

console.log(myName)
console.log(anotherName)


let userOne = {
    email: "abc@123.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "changed@abc123.com"

console.log(userOne.email)