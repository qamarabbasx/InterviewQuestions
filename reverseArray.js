console.log('reverse  the given array');
let size, i, j, arrIndex, revIndex, temp;
let arr = [];
let revArray = [];

// input size of array
size = parseInt(prompt('Enter size of the array'));
console.log(size);
console.log(typeof size);

// input elements in the array
for (i = 0; i < size; i++) {
  arr[i] = parseInt(prompt('Enter elements in the Array:'));
}
console.log('array', arr);

arrIndex = size - 1;
revIndex = 0;
// Reversing the array by storing reversed array in new array
while (arrIndex >= 0) {
  revArray[revIndex] = arr[arrIndex];
  arrIndex--;
  revIndex++;
}

console.log('New Array(reversed) is :', revArray);

arrIndex = size - 1;
revIndex = 0;
//Reversing the array without using other array
while (revIndex < arrIndex) {
  temp = arr[revIndex];
  arr[revIndex] = arr[arrIndex];
  arr[arrIndex] = temp;
  arrIndex--;
  revIndex++;
}

console.log('New Array(reversed) is :', arr);
