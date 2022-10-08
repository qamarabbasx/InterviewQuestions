console.log('Search All occurrences in array ');
let size,
  i,
  j,
  toSearch,
  found = 0;
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

// input element to search
toSearch = parseInt(prompt('Enter Element to Search'));
console.log('Element To Search= ', toSearch);

for (i = 0; i < size; i++) {
  if (arr[i] == toSearch) {
    found = 1;
    console.log(`${toSearch} found at position ${i + 1} and at index ${i}`);
    break; // if break is applied it will only search first element
  }
}
if (found == 0) {
  console.log(`${toSearch} is not found in the whole array`);
}
