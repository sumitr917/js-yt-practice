// array
// collection of multiple elements in single variable
// not associative
// array copy operation creates shallow copy (properties of object share same reference)
// (in deep copy properties of the object do not share same reference)

const myArr = [0,1,2,3,4,5]

const myHeroes = ["Shaktiman", "Nagraj"]

const myArr2 = new Array(1,2,3,4)

// array methods
myArr.push(6)
console.log(myArr)
//myArr.pop()

myArr.unshift(0) // inserts at beginning
console.log(`after unshift ${ myArr }`)

myArr.shift()
console.log(`after shift ${ myArr }`)

console.log(`myArr includes 9 : ${myArr.includes(9)}`)
console.log(`myArr indexOf(3)${myArr.indexOf(3)}`)


const newArr = myArr.join()

console.log(`newArr created by myArr.join : ${newArr}`)


// slice, splice

console.log("before slice myArr : ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(`after slice myn1 : ${myn1}`)
console.log(`after slice myArr : ${myArr}`)


console.log("before splice myArr : ", myArr)

const myn2 = myArr.splice(1,3)

console.log(`after splice myn2 : ${myn2}`)
console.log(`after splice myArr : ${myArr}`)

// splice modifies the array , slice doesn't