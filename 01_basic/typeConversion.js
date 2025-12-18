let score = "33"

console.log(typeof score)
console.log(typeof(score))

let scoreInNumber = Number(score)

console.log(scoreInNumber)
console.log(typeof scoreInNumber)

// "33" => 33
// "33abs" => NAN
// null => 0
// undefined => NAN
//true => 1   flase => 0


let isLoggedIn = "Hitesh"

let boolIsLoggedIn = Boolean(isLoggedIn)

console.log(boolIsLoggedIn)
console.log(typeof boolIsLoggedIn)

// 1 => true  0 => false
// "vipin" => true    "" => false


let str1 = "Vipin"
let str2 = "Sharma"

let str3 = str1 + str2

console.log(str3)

console.log(1 + 2)
console.log("1" + 2)
console.log(1 + "2")
console.log(1 + 2 + "3")
console.log("1" + 2 + 3)
console.log("1" + "2")


console.log(+true)
console.log(+"")


let = x = 100
console.log(x++)
console.log(++x)