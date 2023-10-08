// iife

(function chai(){
    // named iife
    console.log("DB Connected")
})(); // ; is must to end 

((name) => { // parameterised iife (& anonymous)
    console.log(`DB connected 2 ${name}`)
})('sumit') // error if ; not used in previous iife


