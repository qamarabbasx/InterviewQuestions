console.log('Merge two arrays into third');
let size, size2, i, j, index, index2, mIndex, mSize;
let arr = [];
let arr2 = [];
let mergeArr = [];

// input size of array
size = parseInt(prompt('Enter size of the array'));
size2 = parseInt(prompt('Enter size of the array'));
mSize = size + size2;

// input elements in the array
for (i = 0; i < size; i++) {
  arr[i] = parseInt(prompt('Enter elements in the Array:'));
}
for (i = 0; i < size2; i++) {
  arr2[i] = parseInt(prompt('Enter elements in the Array:'));
}
console.log('array', arr);
console.log('array', arr2);
// let's assume
index = 0;
index2 = 0;

// Outer loop to loop over array
for (mIndex = 0; mIndex < mSize; mIndex++) {
  // check if all elements of either array merged to final array then break from loop
  if (index >= size || index2 >= size2) {
    break;
  }
  if (arr[index] < arr2[index2]) {
    mergeArr[mIndex] = arr[index];
    index++;
  } else {
    mergeArr[mIndex] = arr2[index2];
    index2++;
  }
}
while (index < size) {
  mergeArr[mIndex] = arr[index];
  mIndex++;
  index++;
}
while (index2 < size2) {
  mergeArr[mIndex] = arr2[index2];
  mIndex++;
  index2++;
}
console.log('Merged Array is :', mergeArr);
