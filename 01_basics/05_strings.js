let name = "Mudit";
const repoCount = 100;
// String interpolation (always use this)
console.log(`Hi my name is ${name}, and my repo count is ${repoCount}`);


const gameName = new String('MuditObjectString');
// inside gameName we get string value in key value pair i.e ganeName[2] = 'd'
// to access prototype
console.log(gameName.__proto__);

// String methods
const newString = gameName.substring(0,4) // end is non inclusive
console.log(newString);

const sliceString = gameName.slice(-8,4);//slice takes -ve value for backward compatibility

const untrimString = '    mudit      ';
console.log(untrimString);
console.log(untrimString.trim());

const url = 'https://mudit.com/mudit%20sharma';
console.log(url.replace("%20","-"));

// splitting of string
console.log(url.split('/'));