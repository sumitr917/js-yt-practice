// # for of

const arr = [2,3,4,5,6]

for (const num  of arr) {
    //console.log(num)
}

const str = "sumit"

for(const char of str){
    // do something
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States Of America")
map.set('FR', "France")


for(const key of map){
    console.log(key)
} // prints complete map entries as diferent arrays

for(const [key, value] of map){ // array destructuring
    console.log(key, ':-' ,value)
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

for(const [key, value] of myObject){
    console.log(key, ':-' ,value) // won't work
}


