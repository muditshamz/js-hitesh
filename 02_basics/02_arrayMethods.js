const marval_heros = ['thor','ironman','spiderman'];
const dc_heros = ['batman','wonder women','superman'];

const newConcat = marval_heros.concat(dc_heros);
console.log(newConcat);

//spread operator
const allNewHeros = [...marval_heros,...dc_heros];
console.log(allNewHeros);

//flatten array
const indentedArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const flatenedArray =  indentedArray.flat(Infinity);
console.log(flatenedArray);

//Array from
console.log(Array.isArray('Mudit'));
console.log(Array.from('Mudit'));
console.log(Array.from({name:"Mudit", age:22})); // returns empty array as we need to specify which values to include in array i.e key/value

//Array of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

