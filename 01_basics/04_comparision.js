console.log(null > 0); // false
console.log(null == 0); //false
console.log(null >= 0); //true
//the reason is that equality check and camparisions work differently
// comparisions convert null to a number , treating it as zero making null > 0 false and giving null >= 0 as true

// === strict check, checks value as well as datatype
