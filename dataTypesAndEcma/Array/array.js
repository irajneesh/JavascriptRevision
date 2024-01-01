// ()=> paranthesis , {} => braces , [] => brackets.
//arrays are resizable.
//shallow copies. ==> 
//array can be copied , but if you change anything in the array , it will also change into original array.
// read mdn

const arr = [1,2,3,4,5,6];
const superheroes = ["saktimaan" , "batman" , "ironman" , "thor", "spiderman" ];

// console.log(arr.length);
// console.log(arr);
// console.log(superheroes[1]);


// Array methods

// push 

    // arr.push(9) //adds value in the array 
    // arr.push(10)
    // console.log(arr);

// pop method

    // arr.pop(); //deletes last element

// shift method 

    // arr.shift() //removes first element of the array.
    // console.log(arr);

// unshift method

    // arr.unshift(0) //adds 0 at first place in array
    // console.log(arr);

// includes method

    // arr.includes(9) //tells you the value that exists in the array or not. (o/p ==> true /false value)

// indexOf method

    // arr.indexOf(4); //if value exists then it gives the index value.

// Join method

    // const newArr = arr.join() // binds the array elements and converts the array to string.
    // console.log(newArr);
    // console.log(typeof newArr);

// slice method

    // const newArr = arr.slice(1,3)

    // console.log(newArr)
    // console.log(arr);

    //(important)slice does not manipulates the original array.

// Splice method

    // console.log(arr);
    // console.log(newArr);
    // const newArr =  arr.splice(2,4); 
    
    //(important) the original array is also changed .



// superheroes.push(arr) 
// console.log(superheroes);
// console.log(superheroes[4][4]);

// concat method 

    // returns new array 

    // const All = superheroes.concat(arr)  
    // console.log(All); 

// spread operator. 

    // const allElement = [...arr , ...superheroes]
    // console.log(allElement);

// flat operator. 

    // => returns a new array with all array elements of nested array .

    // const array1 = [1,2,3,4,[5,6],[7,8,[9,10,11,"Rajneesh"]],"Babu"]
    // const flatArray = array1.flat(Infinity)
    // console.log(flatArray);

// from 

 console.log(Array.isArray("Rajneesh"));
 console.log(Array.from("Rajneesh")); //read mdn docs
console.log(Array.from({name:"Rajneesh"})); //interesting ==> read mdn docs

// of

 let s1=100
 let s2= 200
 let s3 =300
console.log(Array.of(s1,s2,s3));
