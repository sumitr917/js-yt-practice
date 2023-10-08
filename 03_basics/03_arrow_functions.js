// context


const user = {
    username: "sumit",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this) // current context
    }

}

// user.welcomeMessage()

user.username = "sam"

// user.welcomeMessage()


// console.log(this) // global context

// function chai(){
//     // console.log(this) // 
//     let user = "sumit"
//     console.log(this.user) // undefined
// }

// chai()


// const chai = () => {
//         let user = "sumit"
//         console.log(this) // {}
//     }
    
//     chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => (num1 + num2)

// must use return keyword when curly braces are used
// when () is used , return keyword need not to be used


const addTwo2 = (num1, num2) => ({username: "sumit"})

