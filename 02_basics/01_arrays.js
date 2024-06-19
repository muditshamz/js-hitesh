//  arrays
const myArray = [0,1,2,3,4,5];
const myHeros = ['batman','superman'];
const myArray2 = new Array(1,2,3,4,5);
console.log(myArray[0]);

// Array methods
myArray.unshift(9); // adds towards the start
console.log(myArray);
myArray.shift(); // remove from start
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(3)); // return -1 when not present
console.log(myArray.join().replaceAll(',',''));


//slice, splice
console.log('A',myArray);
const myn1 = myArray.slice(1,4);// last not included
console.log('B',myArray);
console.log(myn1);

console.log('C',myArray);
const myn2 = myArray.splice(1,4);
console.log('D',myArray);
console.log(myn2);

/* Splice modifies the original array while slice does not, this aprt from when passing index splice includes the ending index while slice ignores the ending index in parameters */