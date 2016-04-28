var calc1 = require('./lib/calc1');   // require returns the variable coming from the file
var calc2 = require('./lib/calc2');
var calc3 = require('./lib/calc3')();

console.log(calc1(1, 2));            // Prints "3"
console.log(calc2.sum(1, 2));
console.log(calc3.sum(1, 2));
console.log(calc3.sum(1, 2));
console.log(calc3.getCallCount());   // Prints "2"