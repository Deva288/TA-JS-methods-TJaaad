Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.


2. `toUpperCase`
- Parameter: - string data type.

- Return: A new string representing the calling string converted to upper case.

- Example:

```Js
let name = "Devanand Kumar";
name.toUpperCase(); // `DEVANAND KUMAR`
let villageName = "Mahui";
villageName.toupperCase(); // `MAHUI`
let distName = "West Champaran";
distName.toUpperCase(); // `WEST CHAMPARAN`
```
`toUpperCase` methods returns the calling string value converted in to uppercase.

3. `toLowerCase`


- Parameter: - string data type.

- Return: A new string representing the calling string converted to lower case.

- Example:

```Js
let name = "Devanand Kumar";
name.toLowerCase();  // `devanand kumar`
let villageName = "Mahui";
villageName.toLOwerCase(); // `mahui`
let distName = "West Champaran";
distName.toLowerCase(); // `west champaran`
```

`toLowerCase` methods returns the calling string value converted in to lowercase.


4. `trim`

- Parameter: - string data type.

- return: - it removes all the white space around specific string.

- examples: -

```Js
let message = "  Hello World  ";
message.trim();  // "Hello World"
let name = "   Devanand kumar  ";
name.trim();  // "Devanand kumar"
let school = "   AltCampus   ";
school.trim();  // "AltCampus"
```

`trim` methods returns to calling value all the white slpaces removes around the string.


5. `trimEnd`

- Parameter: - string data type.

- return: - it removes all the white space to end of any specific string.

- examples: 

```Js
let message = "  Hello World  ";
message.trimEnD();  // "  Hello World"
let name = "   Devanand kumar  ";
name.trimEnd();  // "  Devanand kumar"
let school = "   AltCampus   ";
school.trimEnd();  // "  AltCampus"
```
`trimEnd` methods returns to calling value all the white slpaces removes from end to the specific string.

6. `trimStart`

- Parameter: - string data type.

- return: - it removes all the white space from start    of  the string.

- examples: 

```Js
let message = "  Hello World  ";
message.trimStart();  // "Hello World  "
let name = "   Devanand kumar  ";
name.trimStart();  // "Devanand kumar  "
let school = "   AltCampus   ";
school.trimStart();  // "AltCampus  "
```
`trimStart` methods returns to calling value all the white slpaces from start of string.

7. `concat`

- Parameter: - string to concatenate.

- return: - A new string concatenating the combined text of the of them.

- example : 

```Js
let name = "Devanand Kumar";
let schoolName = "Sainik School GopalGanj";
let houseName = "Vikramshila";
name.concat(` `,`,`, schoolName); // `Devanand Kumar,Sainik School Gopalganj`
name.conact(` `, `is from`, ` `,schoolName,`!`); // `Devanand kumar is from Sainik School Goplaganj!`
name.concat(` `,`is from`,` `,schoolName,` `,`of `,houseName,` house`,`!`); // 'Devanand is from Sainik School GopalGanj of Vikramshila house!'
```
`concat` mehods concatenates the string arguments to the calling string and return a new string.

8. `endsWith`
- Parameter:- searchString -charecter to be searched for at the end of str.
    - length - optional - If provided, it is used as the length of string.

- return: - true if the given charecter are found at the end of string, otherwise false.

- example: 

```Js
let name = "Devanand Kumar";
let schoolName = "Sainik School GopalGanj";
let houseName = "Vikramshila";
name.endsWith("umar");  // true
schoolName.endsWith("kliu"); // fals
houseName.endsWith("shila");  // true
houseName.endsWith("a", 0);  //  false
```
`endsWith` methods determines wheather a string ends with the same charecter or not and return into true or false.

9. `includes`
- Parameter: - searchingString 
               A string to be search for within str.
             - optional -   The position within the string at which to begin searching for searchString.(Defaults to 0.)
- return: -  returns true if search is found anywhere within given string othrwise, it is false.

- Examples:

```Js
let name = "Devanand Kumar";
let schoolName = "Sainik School GopalGanj";
let houseName = "Vikramshila";
name.includes("and");  // false
schoolName.includes("pal"); //  true
houseName.includes("shila")  //  true
```
`includes` methods determine wheather string is found within given string or not and returns true and false.

10. `indexOf`

- Parameter:
        searchValue - (string data type)
        fromIndex - optional- An integer representing the index at which to start the search. Default to 0. 
- Return: The index of the first occurrence of searchValue, or -1 if not found. 
- Example:

"Hello world".indexOf(""); // 0
"Hello world".indexOf("l"); // 2
"Hello world".indexOf("ld"); // 9

`indexOf` method returns the index within the calling String object of the first occurrence of the specified value, starting the search at from Index. Returns -1 if the value is not found.


11. `lastIndexOf`

- Parameter: - searchValue - A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned. 
  - fromIndex - optional - The index of the last character in the string to be considered as the beginning of a match.

- Return: The index of the last occurrence of searchValue; -1 if not found. 

- Example:

 "Devanand  Kumar".lastIndexOf(`a`); // 13
 "Devanand Kumar".lastIndexOf(``); // 14
 "Devanand Kumar".lastIndexOf(`a`, 8); // 5

`lastIndexOf` method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

12. `padEnd`

- Parameter:
        targetLength - The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
        padString - optional- ("string data type")
- Return: A String of the specified targetLength with the padString applied at the end of the current str.
- Example:

"Kumar".padEnd(8); // 'Kumar   '
"Kumar".padEnd(5, "Devanand"); // `Kumar`
"Kumar".padEnd(15, "Devanand"); // 'KumarDevanandDe'

`padEnd` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

13. `padStart`

- Parameter: targetLength,   padString - optional

- Return: A String of the specified targetLength with padString applied from the start.

- Example: 

  ```js
  'abc'.padStart(10);         // "       abc"
  'abc'.padStart(10, "foo");  // "foofoofabc"
  'abc'.padStart(6,"123465"); // "123abc"
  ```
`padStart` method pads the current string with another string  until the resulting string reaches the given length. The padding is applied from the start of the current string.

14. `repeat`

- Parameter: count

- Return: A new string containing the specified number of copies of the given string.

- Example: 

  ```js
  'abc'.repeat(2)     // 'abcabc'
  'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
  'abc'.repeat(1/0)   // RangeError
  ```
`repeat` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`

- Parameter:
  pattern - The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction.
    substr- A String that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced. Example:
```Js
const sentence = "The dog is faithful and monkey is naughty";
sentence.replace("dog", "cat"); // 'The cat is faithful and monkey is naughty'
sentence.replace("monkey", "cat"); // 'The dog is faithful and cat is naughty'
 sentence.replace("naughty", "hungry"); // 'The dog is faithful and monkey is hungry'
```
`replace` method returns a new string with some or all matches of a pattern replaced by a replacement. The replacement can be a string or a function. If pattern is a string, only the first occurrence will be replaced.

16. `slice`

- Parameter:
        beginIndex - The zero-based index at which to begin extraction.
        endIndex - optional - The zero-based index before which to end extraction. The character at this index will not be included.
- Return: A new string containing the extracted section of the string. 

- Example:

"India is great".slice(); // 'India is great'
"India is great".slice(4);  // 'a is great'
"India is great".slice(4, -4); // 'a is g'

`slice` method extracts a section of a string and returns it as a new string, without modifying the original string.

17. `split`

- Parameter:
      - separator - optional - The pattern describing where each split should occur. The separator can be a simple string or it can be a regular expression.
      - limit - optional - A non-negative integer specifying a limit on the number of substrings to be included in the array.
- Return: An Array of strings, split at each point where the separator occurs in the given string. 

- Example:
```Js
"AltCampus teaches you to became a web adeveloper.".split(); // ['AltCampus teaches you to became a web adeveloper.']
"AltCampus teaches you to became a web adeveloper.".split(" "); // ['"AltCampus", "teaches", "you", "to", "became", "a", "web", "adeveloper.".']
"AltCampus".split(""); // ["A", "l", "t", "C", "a", "m", "p", "u", "s"]
```
`split` method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

18. `substring`

- Parameter:
        indexStart- The index of the first character to include in the returned substring.
        indexEnd - optional- The index of the first character to exclude from the returned substring.
- Return: A new string containing the specified part of the given string. 

- Example:
```Js
"Devanand".substring(); // `Devanand`
"Devanand".substring(2); // `vanand`
"Devanand".substring(4, 2); // `va`
```
`substring` method returns the part of the string between the start and end indexes, or to the end of the string.