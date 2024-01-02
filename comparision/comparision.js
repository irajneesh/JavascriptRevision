console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)


//the dataType must be same for comparision.

console.log(null == 0) //false
console.log(null >= 0) //true

// explanation

//  == and >= works differently
// comparision operator converts null to a number treating as zero, thats why null >=0 is true and null > 0 is false.