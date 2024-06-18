let score = '33';
let nanScore = '33abc';
console.log(typeof score);

let valueInNumber = Number(score);
let nanValueInNumber = Number(nanScore);
// Notice for most datatypes we getg typeof value in all small caps but while in type conversion we use capital eg - Number()
console.log(typeof valueInNumber);
console.log(typeof nanValueInNumber);
console.log(nanValueInNumber);
// "33" => 33
// "33abc" => NaN
// true =>1 ; false => 0

// ************************ Operations **********************

console.log(1+2+"3"); //33
console.log("1"+2+4);//124
console.log(+true); //1
console.log(+""); //0

let gameCounter = 100;
gameCounter++;
++gameCounter;
console.log(gameCounter);








