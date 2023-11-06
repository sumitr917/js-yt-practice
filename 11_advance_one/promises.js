const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('Async task complete')
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('promise consumed')
})


new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('async task 2')
        resolve()
    }, 1000)
}).then(()=>{
    console.log('Async 2 resolved')
})


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve({username: "chai", email:"chai@ex.com"})
    })
}, 1000)

promiseThree.then((user)=>{
    console.log(user)
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:'sumit', password: 'sumit@123'})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(() => {
    console.log('Promise is either resolved or rejected')
})



const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:'javascript', password: 'sumit@123'})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response)
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()


async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((jsonResponse)=>{
    console.log(jsonResponse)
})
.catch((error)=>{
    console.log(error)
})
