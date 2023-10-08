var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a) // error not defined
// console.log(b) // error not defined
console.log(c) // prints 30


function one(){
    const username = "sumit"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website) // error

    two()
}

one()

if(true){
    const username = "sumit"
    if(username === "sumit"){
        const website = "youtube"
        console.log(username + website)
    }
    console.log(website) // error

}
console.log(username) // error