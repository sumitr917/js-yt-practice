//const tinderUser = new Object()

const tinderUser = {} // using both ways we get same empty object but object created by new Object() is singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sumit",
            lastname: "ranjan"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname) // ? to check it is not null

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2) // {} - target, rest are source

const obj3 = {...obj1, ...obj2}

// console.log(obj3)
//console.log(obj4)

const users = [
    {
        id: 1,
        email: "test@test.com"
    },
    {
        id: 1,
        email: "test@test.com"
    },
    {
        id: 1,
        email: "test@test.com"
    },
    {
        id: 1,
        email: "test@test.com"
    },
    {
        id: 1,
        email: "test@test.com"
    },
    {
        id: 1,
        email: "test@test.com"
    }
]

// console.log(users[1])

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // returns keys of the object as an array

// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser)) // array of array having key value 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))




// de-structuring (applicable to arrays and objects)


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "sumit"
}

const {courseInstructor: instructor} = course

console.log(instructor)

// {
//     "name" : "sumit",
//     "courseName": "js in hindi",
//     "price": "free" 
// }

