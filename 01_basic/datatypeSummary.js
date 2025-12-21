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