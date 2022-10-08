let num = parseInt(prompt('Enter a number'));
// & is bitwise operator num & 1 means num&1 == 1
if (num & 1) {
  console.log(`${num} is Odd number`);
} else console.log(`${num} is EVEN number`);
