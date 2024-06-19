const myDate = new Date();
console.log(myDate);// 2024-06-19T07:31:42.518Z
console.log(myDate.toString());// Wed Jun 19 2024 07:31:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());// Wed Jun 19 2024
console.log(myDate.toISOString());// 2024-06-19T07:31:42.518Z
console.log(myDate.toJSON());// 2024-06-19T07:31:42.518Z
console.log(myDate.toLocaleDateString());// 6/19/2024
console.log(myDate.toLocaleString());// 6/19/2024, 7:31:42 AM

console.log(typeof myDate); // object

let myCreatedDate = new Date(2024,0,29); // month start from 0
console.log(myCreatedDate.toLocaleString());
let myCreatedDate2 = new Date(2024,0,29,5,3);
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("02-29-2024");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();


let newDateMethods = new Date();

console.log(newDateMethods.getDate());
console.log(newDateMethods.getDay());
console.log(newDateMethods.getMonth());


console.log((newDateMethods.toLocaleString('default',{
    month:"long",
    day:"2-digit"
})));









