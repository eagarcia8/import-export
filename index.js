const _ = require("lodash");
const math = require("./math.js");

_.random();

console.log(math.product(10, 20));

console.log(math.subtract(10, 20, true));

console.log(math.addTwoNumbers(math.product(10, 20), math.quotient(10, 20)));

console.log("The secret password is: " + math.secretPassword);

