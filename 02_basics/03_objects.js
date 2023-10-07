// singleton - when we create objects through contructor (Object.create) that is singleton object and
// when declared by object literal, that is not singleton

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sumit", // by default name will be treated as "name" (string)
    age: 25,
    "full_name": "Sumit Ranjan",
    "full name": "Sumit Ranjan",
    mySym: "myKey1",
    [mySym]: "myKey1", // to use symbol as key use this syntax (print object to see difference)
    location: "Pune",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]  
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.full_name)
// console.log(JsUser["full_name"])
// console.log(JsUser["full name"]) // access by . notation not possible as key contains space
// console.log(typeof JsUser.mySym) // string , not 'symbol'
// console.log(typeof JsUser[mySym])


JsUser.email = "changed@fjdkf.com"

// Object.freeze(JsUser) // object can't be modified now
JsUser.email = "afterfreeze@jksf.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JsUser")
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting)
console.log(JsUser.greeting()) 
console.log(JsUser.greetingTwo())
