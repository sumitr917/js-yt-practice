class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const sumit = new User('Sumit')

//console.log(sumit.createId())


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone', 'sssd')

iphone.logMe()

//console.log(iphone.createId())