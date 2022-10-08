console.log('Find Maximum and Minimum number');
let size, i, min, max;
let arr = [];

// input size of array
size = parseInt(prompt('Enter size of the array'));
console.log(size);
console.log(typeof size);

// input elements in the array
for (i = 0; i < size; i++) {
  arr[i] = parseInt(prompt('Enter elements in the Array:'));
}
console.log('array', arr);
// let's assume
min = arr[0];
max = arr[0];

// Outer loop to loop over array
for (i = 0; i < size; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
}
console.log('Minimum value is :', min);
console.log('Maximum value is :', max);
