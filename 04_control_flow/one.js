// # IPLICIT SCOPE
const balance = 1000
if(balance > 500) console.log("Hello!"),
console.log("Test2");

// we are not using {} after if() and we are writing multiple lines (or even single line) of code for if block , 
// this is implicit scoping.


// # TRUTHY AND FALSY VALUES

// Truthy -  All except falsy - "0", 'false', " ", [], {}, function(){}

// Falsy - false, 0, -0, BigInt 0n, "", null, undefined, NaN

const users = []
if(users.length === 0){ // always check arrays as empty array is also truthy
    // code
}

const emtyObj = {}

if(Object.keys(emtyObj).length === 0){ // check for empty object
    // code
}

// #NOTE

// false == 0 - true
// false == '' - true
// 0 == '' - true


// # Nullish Coalescing Operator (??) : for null & undefined

let val1

// val1 = 5 ?? 10 - 5
// val1 = null ?? 10 - 10
// val1 = undefined ?? 15 - 15
val1 = null ?? 10 ?? 20 - 10
console.log(val1)

// # Ternary operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")