Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
 - Parameter: seperator(optional)
 - Return: A string with all array elements joined.
 - Example: 
```Js
 let studentsName = ["Ryan", "Ramesh", "Deepak", "Olivia"];
studentsName.join(); //`Ryan,Ramesh,Deepak,Olivia`
studentsName.join(""); // `RyanRameshDeepakOlivia`
studentsName.join(" "); // `Ryan Ramesh Deepak Olivia`
```
`join` method creates and returns a new string by concatenating all of the elements in and array.

3. `flat`

- Parameter: depth - optional - The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
- Return: A new array with the sub-array elements concatenated into it.

- Example:
```Js
const studentsName = ["Amish", "Olivia", "Alexa", ["Naveen", "Ryan"]];

 studentsName.flat(); // ["Amish", "Olivia", "Alexa", "Naveen", "Ryan"]
 const studentsName = ["Amish", "Olivia", ["Alexa", ["Naveen", "Ryan"]]];
 studentsName.flat(); // ["Amish", "Olivia", "Alexa", ["Naveen", "Ryan"]]]
 const studentsName = ["Amish", "Olivia", ["Alexa", ["Naveen", "Ryan"]]];
 studentsName.flat(2); // ["Amish", "Olivia", "Alexa", "Naveen", "Ryan"]
 studentsName.flat(Infinity); // ["Amish", "Olivia", "Alexa", "Naveen", "Ryan"]
```
`flat`flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

4. `push`

- Parameter: ElementN - The element(s) to add to the end of the array.
- Return: The new length property of the object upon which the method was called.

- Example:
```Js
const animals =["cow", "Bull", "Goat"];
animals.length; // 3
animals.push("Elephant");
animals.length; // 4
animals; // ["cow", "Bull", "Goat", "Elephant
animals.push("pig", "Jackal","dog");
animals; // ["cow", "Bull", "Goat", "Elephant", "pig", "Jackal", "dog"];
```
`push` method adds one or more elements to the end of an array and returns the new length of the array.It mutates the original array.

5. `indexOf`

- Parameter: searchElement - Element to locate in the array. fromIndex - optional - The index to start the search at.

- Return: The first index of the element in the array, and -1 if not found.

- Example:

```Js
const studentsName = ["Ryan", "Rahul", "Azad", "Naveen", "Bob"];
studentsName.indexOf("Azad"); // 2
const studentsName = ["Ryan", "Rahul", "Amar", "Naveen","Rahul", "Bob"];
studentsName.indexOf("Rahul", 2); // 4
studentsName.indexOf("Olivia"); // -1
```
`indexOf` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

6. `lastIndexOf`

- Parameter: 
  searchElement - Element to locate in the array. 
  fromIndex - optional - The index at which to start searching backwards.

- Return: The last index of the element in the array, and -1 if not found.
    
- Example:

```Js
const animals =["Cow", "Elephant", "buffallow", "Dog", "Dear"];
animals.lastIndexOf("Dog"); // 3
animals.lastIndexOf("Cow"); // 4
const studentsName = ["Ryan", "Rahul", "Bob", "Naveen","Akash", "Tamanah"];
studentsName.lastIndexOf("Akash"); // 4
```
`lastIndexOf` method turns the last index at which a given element can be found in the array, or -1 if it is not present.

7. `includes`

- Parameter: searchElement - The value to search for. 
             fromIndex - optional - The position in this array at which to begin searching for searchElement.

- Return: A boolean value which is true if the value searchElement is found within the array indicated by the index fromindex, if specified.
- 
Example:
```Js
const arr = [1, 4, 8, 9];
arr.includes(8); // true
arr.includes(3); // false
let pets = ["Rat", "Donkey", "Cow"];
pets.includes("at"); // false
pets.includes("Cow"); // true
```
`includes` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

8. `reverse`

- Parameter: ()

- Return: The reversed array.

- Example:
```Js
const arr = [1, 4, 8, 9];
arr.reverse(); // [9, 8, 4, 1]
let pets = ["cat", "dog", "parrot"];
pets.reverse(); // ["parrot", "dog", "cat"];
const animals =["cow", "goat", "buffallow", "dog", "cow"];
animals.reverse(); // ["cow", "dog", "buffallow", "goat", "cow"]
```
`reverse` method reverses an array. The first array element becomes the last, and the last array element becomes the first.

9. `every`

- Parameter: callback, index(optional), array(optional), thisArg(optiona).

- Return: true if the callback function returns a truthy value for every array element. Otherwise, false.

- Example:
```js
let numbers = [4, 7, 9, 29, 35];
let ret = numbers.every(function(number) {
  return number > 5;
}); // false, as every number is not greater than 5.
 let ret = numbers.every(function(number) {
  return number > 0;
}); // true
 let numbers = [4, 7, 9, 29, 35];
let ret = numbers.every(function(number) {
  return number > 100;
}); // false
```
`every` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

10. `shift`

- Parameter: ()

- Return: The removed element from the array; undefined if the array is empty.

- Example:
```Js
let numbers = [4, 7, 9, 29, 35];
numbers.shift(); // [7, 9, 29, 35]
let pets = ["cat", "dog", "parrot"];
pets.shift(); // ["dog", "parrot"]
let colors = ["red", "black", "yellow", "green"];
colors.shift(); // ["black", "yellow", "green"]
```
`shift` method removes the first element from an array and returns that removed element. This method changes the length of the array.It mutates the array.

11. `splice`

- Parameter: 
            start - The index at which to start changing the array. 
            deleteCount - optional - An integer indicating the number of elements in the array to remove from start.

- Return: An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

- Example:

```Js
  let colors = ["red", "black", "yellow", "green"];
  colors.splice(1); // ["black", "yellow", "green"]
  colors; // ["red"]
     let colors = ["red", "black", "yellow", "green"];
  colors.splice(1, 0); // []
  colors; // ["red", "black", "yellow", "green"]
     let colors = ["red", "black", "yellow", "green"];
     colors.splice(1, 0, "blue"); // []
     colors; // ["red", "blue", "black","green"]
     let colors = ["red", "black", "yellow", "green"];
     colors.splice(1,1,"blue"); // ["black"]
     colors; //
```
`splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it.It mutates the value.

12. `find`

- Parameter:
        callbackFn - Function to execute on each value in the array, taking 3 arguments:
            element- The current element in the array.
            index - optional - The index (position) of the current element in the array. array - optional - The array that find was called on. thisArg - optional - Object to use as this inside callbackFn.
- Return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

- Example:
```Js
    let numbers = [23, 34, 45, 56, 67];
    function finds(num) {
      return num > 30;
    }
    numbers.find(finds); // 34
    function finds(num) {
      return num > 10;
    }
    numbers.find(finds); // 23

      function finds(num) {
      return num / 2 !== 0;
    }
    numbers.find(finds); // 23
```
`find` method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.It does not mutate the value.

13. `unshift`

- Parameter: elementN - The elements to add to the front of the arr.

- Return: The new length property of the object upon which the method was called.

- Example:
```Js
let numbers = [1,3, 5, 6];
numbers.unshift(7); // 5
numbers; // [7, 1, 3, 5, 6];
let colors = ["red", "black", "yellow", "green"];
colors.unshift("blue"); // 5
colors; // ["blue", "red", "black", "yellow", "green"]
colors.unshift("darkblue", "aqua"); // 7
colors; // ["darkblue", "aqua", "blue", "red", "black", "yellow", "green"], As it mutates the value.
```
`unshift` method adds one or more elements to the beginning of an array and returns the new length of the array.It mutates the value.

14. `findIndex`

- Parameter: callbackFn - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.It takes three arguments:
        element - The current element being processed in the array.
        index - optional - The index of the current element being processed in the array.
        array - optional - The array findIndex() was called upon.
        thisArg - optional - Optional object to use as this when executing callbackFn.

- Return: The index of the first element in the array that passes the test. Otherwise, -1.

- Example:
```Js
  let numbers = [23, 34, 45, 56, 67];
  function finds(num) {
    return num < 30;
  }
  numbers.findIndex(finds); // 0

  function finds(num) {
    return num > 40;
  }
  numbers.findIndex(finds); // 2
      function finds(num) {
    return num < 0;
  }
  numbers.findIndex(finds); // -1
```
`findIndex` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.It does not mutate the value.

15. `filter`

- Parameter:
        callbackFn - Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.It accepts three arguments:
        element - The current element being processed in the array.
        index - optional - The index of the current element being processed in the array.
        array - optional - The array on which filter() was called.
        thisArg - optional - Value to use as this when executing callbackFn.
- Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

- Example:
```Js
let numbers = [23, 34, 45, 56, 67];
 function number(num) {
   return num < 30;
 }
 numbers.filter(number); // [23]
 numbers; // [23, 34, 45, 56, 67]

 function number(num) {
   return num > 30;
 }
 numbers.filter(number); // [34, 45, 56, 67]
 numbers; // [23, 34, 45, 56, 67]

   function number(num) {
   return num < 0;
 }
 numbers.filter(number); // []
```
`filter` method creates a new array with all elements that pass the test implemented by the provided function.
It does not mutate the value.


16. `flat`

- Parameter: 
            depth - optional - The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
- Return: A new array with the sub-array elements concatenated into it.

- Example:
```Js
const numbers = [0, 1, 2, [3, 4]];
numbers.flat(); // [0, 1, 2, 3,4]
numbers.flat(0); // [0, 1, 2, [3, 4]]

const numbers2 = [0, 1, 2, [[[3, 4]]]]
numbers2.flat(1); // [0, 1, 2, [[3, 4]]]
numbers.flat(Infinity); // [0, 1, 2, 3, 4]
```
`flat` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.It does not mutate the value.

17. `forEach`

- Parameter:
        callbackFn - Function to execute on each element. It accepts between one and three arguments:
        element - The current element being processed in the array.
        index - optional - The index of element in the array.
        array - optional- The array forEach() was called upon.

- Return: undefined.

- Example:
```Js
let colors = ["red", "green", "yellow", "blue"];
colors.forEach((color) => console.log(color)); // output will be one by one as, red green yellow blue
let numbers = [1, 3, 5, 8, 23];
numbers.forEach((num) => console.log(num)); // output will be one by one as, 1 3 5 8 23
let students = ["Abhishek", "Rahul", "Bimlendu"];
students.forEach((student) => console.log(student)); //output will be one by one as, Abhishek Rahul Bimlendu
```
`forEach` method executes a provided function once for each array element.It does not mutate the value.

18. `map`

- Parameter:
        callbackFn - Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.The callbackFn function accepts the following arguments:
        element - The current element being processed in the array.
        index - optional - The index of the current element being processed in the array.
        
- Return: A new array with each element being the result of the callback function.
- Example:
```Js
let numbers = [3, 5, 7, 9, 14];
numbers.map((num) => num * 2); // [6, 10, 14, 18, 28]
numbers.map((num) => num % 2 === 0); // [false, false, false, false, true]
numbers.map((num) => num / 3); // [1, 1.66, 2.33, 3, 4.66]
```
`map` method creates a new array populated with the results of callling a provided function on every element in the calling array.It does not mutate the array.

19. `pop`

- Parameter: ()

- Return: The removed element from the array; undefined if the array is empty.

- Example:
```Js
let numbers = [12, 23, 34, 45, 56, 67];
numbers.pop(); // 67
numbers; [12, 23, 34, 45, 56];
let animals = ["lion", "tiger", "hyna", "leopard"];
animals.pop(); // "leopard"
animals; // ["lion", "tiger", "hyna"]
```
`pop` method removes the last element from an array and returns that element. This method changes the length of the array.It mutates the array.

20. `reduce`

- Parameter:
        callbackFn - A "reducer" function that takes four arguments:
            previousValue - The value resulting from the previous call to callbackfn.
            currentValue - The value of the current element.
            currentIndex - optional.
            array - The array to reverse- optional.
    initialValue - optional - A value to which previousValue is initialised the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialised to the first value in the array. If initialValue is not specified, previousValue is initialised to the first value in the array, and currentValue is initialised to the second value in the array.
- Return: The value that results from running the "reducer" callback function to completion over the entire array.

- Example:
```Js
let numbers = [4, 5, 64, 23, 52, 87];
let sum = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(sum); // 235

let colors = ["red", "yellow", "aqua"];
let allColors = colors.reduce((acc, color) => {
  return acc + color;
}, "");
console.log(allColors); // redyellowaqua
allColors; 'redyellowaqua'
```
`reduce` method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.It does not mutate the array.

21. `slice`

- Parameter: 
            start - optional - Zero-based index at which to start extraction. A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence. If start is undefined, slice strats from 0. If start is greater than the index range of the sequence, an empty array is returned.
            end - optional - Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
- Return: A new array containing the extracted elements.

- Example:
```Js
let numbers = [4, 5, 64, 23, 52, 87];
numbers.slice(2); // [64, 23, 52, 87]
numbers.slice(2, 3); // [64]
numbers.slice(1, 3); // [5, 64]
```
`slice` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.It does not mutate the value.

22. `some`

- Parameter:
        callbackFn - A function to test for each element, taking three arguments:
            element - The current element being processed in the array.
            index - optional - The index of the current element being processed in the array. array - optional -The array some() was called upon.
    thisArg - optional - A value to use as this when executing callbackFn.

- Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.

- Example:
  
```Js
let numbers = [1, 5, 8, 23, 34];
let evenNumber = numbers.some((num) => num % 2 === 0);
console.log(evenNumber); // true
let oddNumber = numbers.some((num) => num % 2 !== 0);
console.log(oddNumber); // true
let uniqueNumber = numbers.some((num) => num > 100);
console.log(uniqueNumber); // false
```
`some` method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.It does not mutate the value.
