console.log('make a copy of array');
let size, i, j;
let arr = [];
let arrCopy = [];

// input size of array
size = parseInt(prompt('Enter size of the array'));
console.log(size);
console.log(typeof size);

// input elements in the array
for (i = 0; i < size; i++) {
  arr[i] = parseInt(prompt('Enter elements in the Array:'));
}
console.log('array', arr);

// Outer loop to loop over array
for (i = 0; i < size; i++) {
  arrCopy[i] = arr[i];
}
console.log('New Array is :', arrCopy);
