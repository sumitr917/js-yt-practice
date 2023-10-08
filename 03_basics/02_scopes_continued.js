// hoisting
addOne(5) // success

function addOne(num){
    return num+1
}


addTwo(5) // Cannot access 'addTwo' before initialization
const addTwo = function(num){ // functional expression
    return num + 2
}

