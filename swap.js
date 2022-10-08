console.log('Swap code');
var A = prompt('Enter a number');
var B = prompt('Enter second number');
A = parseInt(A);
B = parseInt(B);
console.log('Value of A=', A);
console.log('Value of B=', B);
A = A + B;
B = A - B;
A = A - B;

console.log('Value of A=', A);
console.log('Value of B=', B);
