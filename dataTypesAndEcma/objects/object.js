//object

// singleton => created when object is created by constructor method ==> object.create 

// object literals

    // object literals never creates singleton 

    // const user = {
    //    name     : "Rajneesh",
    //    "full name"   :"Rajneesh kumar singh",
    //    age      : 24,
    //    location : "Patna"
    // }

// console.log(user);

// value accessing

    // dot method
    // console.log(user.name); 

    // bracket method
    // console.log(user["name"])

console.log(user["full name"]); //no other option to access full name (key)

//symbol as key

 let mysym = Symbol("key1");

    //  const user = {
    //        name     :  "Rajneesh",
    //        age      : 24,
    //        location : "Patna",
    //        [mysym]  : "mysum1",
    //     }

//  console.log(user[mysym]); // type - symbol
//read mdn

// value add and change

    // user.age =25; //changes the age from 24 to 25.
    // console.log(user);


//object.freeze method.

    //  Object.freeze(user);
    //no changes can be made now

    //read mdn

const user = {
    name     : "Rajneesh",
    age      : 24,
    location : "Patna",
    [mysym]  : "mysum1",
 }

user.greeting = function(){
    console.log("Hello user");
}

// string interpulation
user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`); //refers the same object
}

 console.log(user.greeting());
 console.log(user.greetingTwo());

// 

const instaUser = new Object();

    instaUser.id = "1"
    instaUser.name = "sunny"
    instaUser.isLoggedIn = false

console.log(instaUser);

//nested objects

    const regularUser = {
        email       :   "sunny@gmail.com",
        fullname    :   {
            userfullname    :   {
                firstname   :   "sunny",
                lastname    :   "singh"
            }
                
        }
    }

// console.log(regularUser.fullname.userfullname.firstname);

// Object.assign method

    const o1 ={a: 1, b: 2}
    const o2 ={c: 3, d: 4}
    const o3 ={e: 5, f: 6}

    const o4 = Object.assign({}, o1, o2, o3);
    console.log(o4);

const o5 = {...o1,...o2,...o3} //spread operator
console.log(o5);

//nested array and objects

    const Arr = [
        {
            id: 1,
            gmail   :   "1@mail.com"
        },
        {
            id: 2,
            gmail   :   "12@mail.com"
        },
        {
            id: 3,
            gmail   :   "123@mail.com"
        }
    ];

Arr[1].gmail;

console.log(instaUser);

// Object. methods 

    console.log(Object.keys(instaUser)); // returns keys array of instaUser object.
    console.log(Object.values(instaUser)); // returns value array
    console.log(Object.entries(instaUser));

// Object De-structure

// 4.25.0 hours javascript 1 video offline.

