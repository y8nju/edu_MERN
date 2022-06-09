const read = require("readline-sync");

console.log("Choose drink! ")

let select = read.keyInSelect(["Cola", "Coffe(SO)", "Juice(SO)" ]);
console.log(select,  typeof select);