let myDate = new Date()
console.log(`new Date() toString() : ${myDate.toString()}`)
console.log(`new Date() toLocaleString() : ${myDate.toLocaleString()}`)
console.log(`new Date() toLocaleDateString() : ${myDate.toLocaleDateString()}`)
console.log(`new Date() toLocaleTimeString() : ${myDate.toLocaleTimeString()}`)

console.log(typeof myDate)


let myCreatedDate = new Date(2023, 0, 23)
console.log(`new Date(2023, 0, 23) toDateString() : ${myCreatedDate.toDateString()}`)

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString())

let myCreateddate3 = new Date("01-14-2023")
console.log(myCreateddate3.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)

let newDate = new Date()
console.log(`new Date() : ${newDate}`)
console.log(`new Date() getMonth() : ${newDate.getMonth() + 1}`)
console.log(`new Date() getDay() : ${newDate.getDay()}`)


console.log(`printing newDate with formatted LocalString`)
console.log(newDate.toLocaleString('default',
{
    weekday: 'long',
    month:'long',
}))