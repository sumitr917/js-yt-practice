function sayMyName(){
    console.log("sumit ranjan")
}

sayMyName() // sayMyName is reference and sayMyName() is execution

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }

// addTwoNumbers(3, "4") // 34

// addTwoNumbers(3, "a") // 3a

// addTwoNumbers(3, null) // 3

// const res = addTwoNumbers(4, 4)

// console.log(res)

function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
      return number1+number2
}

// console.log(addTwoNumbers(3,54))
// function loginUserName(username = "sumit") // default value
function loginUserMessage(username){
    // if(!username) // this is also used
    if(username === undefined){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sumit"))

// console.log(loginUserMessage())


// when number of args is not known

function calculatecartPrice(...num1){
    return num1
}

function calculatecartPrice2(val1, val2, ...num1){
    // return num1
    return val2 
}
console.log(calculatecartPrice(200)) // [ 200 ]
console.log(calculatecartPrice(200, 300, 400)) // [ 200, 300, 400 ]

console.log(calculatecartPrice2(23)) // [] - empty array, but, will return undefined when val2 is not passed and val2 is returned from function
console.log(calculatecartPrice2(23, 30, 56, 456)) // [ 56, 456 ]

const user = {
    username: "sumit",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is 
    ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "sumit",
    price: 199
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
