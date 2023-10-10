const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    // console.log(key) // op - 0,1,2,3,4
    console.log(programming[key])
}

// NOTE : 
// map is not iteratible

const map = new Map()
map.set('IN', "India")
map.set('US', "United States Of America")
map.set('FR', "France")

for(const key in map){
    console.log(key) // no op
}