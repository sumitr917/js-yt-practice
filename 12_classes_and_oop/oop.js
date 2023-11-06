// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log('Got user details')
//         console.log(`Username: ${this.username}`)
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails())


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this - it is implicitly returned so no need to write
}

// const user1 = User('Sumit', 12, true)
// const user2 = User('Ranjan', 13, false)
// console.log(user1) // overridden by user2 values

// So , new keyword is used

const user1 = new User('Sumit', 12, true)
const user2 = new User('Ranjan', 13, false)

console.log(user1.constructor)
console.log(user1)