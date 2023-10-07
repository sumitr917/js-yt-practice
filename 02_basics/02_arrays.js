const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) // it pushes entire dc_heroes array as an array into marvel_heroes

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)

const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array)

// console.log(Array.isArray("Sumit"))
// console.log(Array.from("Sumit"))
// console.log(Array.from({name: "Sumit"})) // empty array is returned as we didn't specify whether to make array from key or value


let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3))