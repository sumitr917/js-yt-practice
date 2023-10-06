const score = 500
console.log(score)
const balance = new Number(100)

console.log(balance)


console.log(balance.toString().length)
console.log(balance.toFixed(2))


const otherNumber = 23.896
console.log(otherNumber.toPrecision(3))

const oneMoreNumber = 123.8966

console.log(oneMoreNumber.toPrecision(3))


const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'))



// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++

console.log(Math)

console.log(Math.abs(-4))

console.log(Math.round(4.3))

console.log(Math.ceil(4.2))

console.log(Math.floor(4.6))

console.log(Math.min(3,4,5,6,2,1,3,4))


console.log(Math.floor((Math.random()*10)) + 1)


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)