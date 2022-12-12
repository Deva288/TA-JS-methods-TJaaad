// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
console.log(strings.push("called", "sentence"));
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
console.log(strings.shift());
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes("is"));

// - Find all the words that contain 'is' use string method 'indexOf'
result = strings.filter((item) => {
  return item.indexOf("is") !== -1;
});
console.log(result);

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(num => {
  console.log(num % 3 === 0);
});
// -  Sort Array from smallest to largest
let sortedNumber = [...numbers].sort((a, b) => {
  return a - b;
});

console.log(sortedNumber);
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let largestNumber = [...numbers].sort((a, b) => a - b).pop();
console.log(largestNumber);
// - Find longest string in strings
let longestString = [...strings].sort((a, b) => a.length - b.length).pop();
console.log(longestString);
// - Find all the even numbers
let evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNumbers);
// - Find all the odd numbers
let oddNumbers = numbers.filter((num) => {
  return num % 2 !== 0;
});
console.log(oddNumbers);
// - Place a new word at the start of the array use (unshift)
strings.unshift("It");
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2, 4))
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(numbers.indexOf(12), 1, 1221);
numbers.splice(numbers.indexOf(18), 1, 1881);

console.log(numbers);

// - Replace words in strings array with the length of the word
let outcome = strings.map((str) => str.length);
console.log(outcome);


// - Find the sum of the length of words using above question
result = outcome.reduce((acummulator, cv) => {
  acummulator += cv;
  return acummulator;
}, 0);
console.log(result);


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

result = customers.filter((item) => item.firstname.startsWith("J"));
console.log(result);

// - Create new array with only first name
firstname = customers.map((item) => item.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
customerFullName = customers.map(
  (item) => `${item.firstname} ${item.secondName}`);

  console.log(customerFullName);

// - Sort the array created above alphabetically
console.log([...customerFullName].sort());

// - Create a new array that contains only user who has at least one vowel in the firstname.

vowel = customers.filter((customer) => {
  if (
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u")
  ) {
    return true;
  } else {
    return false
  }
});

console.log(vowel);
