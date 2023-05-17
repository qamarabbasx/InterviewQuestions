
// Write a function that accepts an array of names and returns the names but with its first letter in uppercase.
function capitalizeFirstLetter(names) {
  return names.map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });
}

const names = ["bilal", "usama", "hassan", "masood"];
const capitalizedNames = capitalizeFirstLetter(names);
console.log(capitalizedNames);
// Output: ["Bilal", "Usama", "Hassan", "Masood"]

// using for loop
function capitalizeFirstLetter(names) {
  const capitalizedNames = [];
  
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    capitalizedNames.push(capitalized);
  }
  
  return capitalizedNames;
}

const names = ["bilal", "usama", "hassan", "masood"];
const capitalizedNames = capitalizeFirstLetter(names);
console.log(capitalizedNames);
// Output: ["Bilal", "Usama", "Hassan", "Masood"]

