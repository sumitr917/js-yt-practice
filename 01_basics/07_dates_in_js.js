let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString())

let myCreateddate3 = new Date("01-14-2023")
console.log(myCreateddate3.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)


