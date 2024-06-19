const score = 400;
console.log(score);

const balance = new Number(4000);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

let otherNumber = 23.8976;
console.log(otherNumber.toPrecision(3));
otherNumber = 123.8976;
console.log(otherNumber.toPrecision(3));
otherNumber = 1123.8976;
console.log(otherNumber.toPrecision(3));

const otherBigNumber = 1000000000;
console.log(otherBigNumber.toLocaleString());
console.log(otherBigNumber.toLocaleString('en-IN'));

console.log(Number.MAX_SAFE_INTEGER); //Others can be found as well
