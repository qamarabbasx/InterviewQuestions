
//  reverse a string using for loop
const string = 'Is this doable';
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}

// using split reverse and join
const string = 'Is this doable';
const reversedString = string.split('').reverse().join('');
console.log(reversedString); // "elbaod siht sI"
