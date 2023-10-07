console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0) // false
console.log(null == 0) // false here null will be converted to NaN
console.log(null >= 0) // true

// equality check and comparison work differently.
// Comparisons convert null to a number treating it as 0. So null >= 0 is true and null > 0 is false.


console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false
// same case with undefined

//=== - strict check with data type

console.log("2" === 2)
console.log("2" == 2)