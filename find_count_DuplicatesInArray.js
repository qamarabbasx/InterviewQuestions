console.log('find and count duplicates in array ');
let size,
  i,
  j,
  count = 0;
let arr = [];
let duplicates = [];
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
    if (arr[i] == arr[j]) {
      duplicates[count] = arr[i];
      count++;
    }
  }
}
console.log('Duplicates found in Array :', duplicates);
console.log('Number of Duplicate entries :', count);
