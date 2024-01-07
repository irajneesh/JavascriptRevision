const score = 1131235 //automatic  assigns to number 

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length) //shows the balance length
console.log(balance.toFixed(1)) //value you want after decimal , especially for ecom. pricing values


//precision value
console.log(score.toPrecision(4)) // focus on the precise values

console.log(score.toLocaleString('en-IN')) //indian standard value

//  Maths library

console.log(Math) // **check it in browser console** --->

//methods
//ceil , round , floor, abs , sqrt , pow , max , min ,
console.log(Math.abs(-4)) //absolute value=>negative will be positive

console.log(Math.random()) //gives value between 0 to 1.

console.log((Math.random()*10)+1)

console.log(Math.floor(Math.random()*10)+1) //1 to 9

const max = 20
const min = 10
// max - min + 1 => to get the value between max and min range.
// adding 1 to avoid zero.

// console.log(Math.floor(Math.random()*(max - min + 1) + min));
// Math.random()*(max - min + 1) + min

