//Primitive

// 7 types: String, Number, Boolean, NUll. Undefined, Symbol, BigInt;

const isId = Symbol('123')

const isAnotherId = Symbol('123')

console.log(isId === isAnotherId)





// Referenced(Non-Primitive)ss

//Array, Object, Fucntions


const heroes = ["vipin", "Satyam", "Kunal"]

let myObj = {
    name: "Vipin",
    age: 22
}

const myFuction = function() {
    console.log("Hello World")
}







// Type of Memory


//Stack(Primitive), Heap(Non-Primitive)


let myYoutubeName = "vipin.com"
let anotherYoutubeName = myYoutubeName

anotherYoutubeName = "Satyam.com"

console.log(myYoutubeName)
console.log(anotherYoutubeName)


let upi = {
    id: "12232343445",
    email: "vipin.com"
}

let anotherUpi = upi;

anotherUpi.email = "Satyam.com"

console.log(upi.email)
console.log(anotherUpi.email)

