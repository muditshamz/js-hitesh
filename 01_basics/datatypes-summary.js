// Primitive (Call by Value)
/* String
number
Boolean
null
undefined
Symbol 
BigInt*/
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);
const bigNumber = 121324313413513513524345146426n;


// Reference Type (Non Primitive) (typeof for these is always object and function is always function)
/* Array
Objects
Functions */
//Arrays
const heros = ['Batman','superman','spiderman']; // Array
const objectExample = { // Object
    name:"Hello",
    Age:22
}

const myFunction = function(){ //function
    console.log('Hello Ji Hello');
}
// Js is dynamically types language

/*
    1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

