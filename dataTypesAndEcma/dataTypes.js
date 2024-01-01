"use strict" //treat all code as newer version of js code.
//alert (3+3) => we are using nodejs not browser.
//for documentation read Mdn.
//original docs (EcmaScript)>> tc39.es
// primitive
// number => having some range
// bigInt => for long values
// string=>""
// boolean=>true/false
// null=> means empty,standAlone value ,special type.
// undefined=>
// symbol=> used to find uniqueness.


// object.
// typeof operator=>to know the data type
console.log(typeof null) //object
console.log(typeof undefined) //undefined

//summary

//object and web events / brower events

// Dynamically typed language

// typeof is used to check the data type of the variable.  //read ecma docs.

// primitive 7 types 
// string Number Boolean null undefined symbol Big int

// reference (Non primitive)  => "return type object"

// Array, Objects, Functions

const heroes=["Thor", "AntMan", "IronMan"]

const obj={
    name: "Rajneesh",
    age : 23,
}

const myFunction = function(){
    console.log("Hello World");
}

