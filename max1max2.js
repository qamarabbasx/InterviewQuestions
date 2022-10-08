console.log('Find Maximum and second maximum number');
let size, i, j, max1, max2, max3;
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
max1 = arr[0];
max2 = arr[0];
max3 = arr[0];

// Outer loop to loop over array
for (i = 0; i < size; i++) {
  if (arr[i] > max1) {
    max3 = max2;
    max2 = max1;
    max1 = arr[i];
  } else if (arr[i] > max2) {
    max3 = max2;
    max2 = arr[i];
  } else if (arr[i] > max3) {
    max3 = arr[i];
  }
}
console.log('Highest value is :', max1);
console.log('Second highest value is :', max2);
console.log('Third highest value is :', max3);
