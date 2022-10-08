console.log('Sort the given array');
let size, i, j, temp;
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

// Outer loop to loop over array
for (i = 0; i < size; i++) {
  // Inner loop to compare
  for (j = i + 1; j < size; j++) {
    // Ascending Order
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log('sorted array in Ascending order :', arr);

// Outer loop to loop over array
for (i = 0; i < size; i++) {
  // Inner loop to compare
  for (j = i + 1; j < size; j++) {
    // Descending Order
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log('sorted array in Descending order :', arr);
