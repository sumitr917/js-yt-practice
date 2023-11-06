let myHeroes = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.sumit = function(){
    console.log(`sumit is present in all objects`)
}

Array.prototype.heySumit = function(){
    console.log(`hey sumit!`)
}
heroPower.sumit()

myHeroes.sumit()

// heroPower.heySumit()

myHeroes.heySumit()


// inheritence
// old approach
const User = {
    name: 'chai',
    email: 'chai@gmail.com'
}




const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User



// new approach
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = 'sample               '



String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUserName.trueLength()