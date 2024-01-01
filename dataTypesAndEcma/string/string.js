//string
// most powerful 

const name = "Rajneesh kumar"
const age = 24 

//concatenation
console.log(name + age)
console.log(`my name is ${name} and my age is ${age}`)


// typeof => object

const gameName = new String('Rajneesh')

console.log(gameName)

// methods

console.log(gameName.length)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('R'))

const newString =gameName.substring(2,6) //6 will not get included
console.log(newString)

const str1 = gameName.slice(0,4)
console.log(str1)

//trim method
const str2 = "   Rajneesh     "
console.log(str2)
console.log(str2.trim())
//mdn docs

// write an article about string methods
//replace method.
//includes method 


//string to array

//split method.
console.log(gameName.split(""));



