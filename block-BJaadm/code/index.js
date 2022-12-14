let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map(person => person.name);
console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map(person => person.grade);

console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map(person => person.sex);

console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let filterName = peopleName.filter(name => 
        name.startsWith("J") ||
        name.startsWith("P"));
  
   console.log(filterName);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let filterNameAOrC = peopleName.filter(name => 
        name.startsWith("A") ||
        name.startsWith("C"));

  
   console.log(filterNameAOrC.length);
   
// Log all the filtered male ('M') in persons array

let malePersons = peopleSex.filter(sex => sex === 'M');

console.log(malePersons);


// Log all the filtered female ('F') in persons array

let femalePerson = peopleSex.filter(sex => sex === 'F');

console.log(femalePerson);


// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
 
console.log(
  persons.filter((person) => person.sex == 'F')
  .filter((person) => 
    person.name.startsWith("C") ||
    person.name.startsWith("J")
    )
);

// Log all the even numbers from peopleGrade array

let evenNumbers = persons.filter(
        (person) => person.grade % 2 === 0);

        console.log(evenNumbers);

// console.log(
//   peopleGrade.filter((peopleGrade) =>
//   peopleGrade % 2 === 0 )
// );


// Find the first name that starts with 'J' in persons array and log the object

let firstNameWithJ = persons.find(
  (person) => person.name.startsWith("J"));

console.log(firstNameWithJ);


// Find the first name that starts with 'P' in persons array and log the object

// let firstNameWithP = persons.find(
//   (person) => person.name.startsWith("P"));

//   console.log(firstNameWithP);

  console.log(
    persons.find((person) => person.name.startsWith("P"))
  );

// Find the first name that starts with 'J', grade is greater than 10 and is a female

let femaleFirstNameWithJ = persons.find(
  (person) => person.name.startsWith("J") &&
  person.grade > 10 && 
  person.sex === "F"
);

    console.log(femaleFirstNameWithJ);


// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter((person) => person.sex === "F");

// Filter all the male from persons array and store in malePersons array

let malePerson = persons.filter(person => person.sex === "M");
console.log(malePerson);


// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce(
  (acc, val) => acc += val
);

console.log(gradeTotal);

// Find the average grade

console.log(gradeTotal / peopleGrade.length);


// Find the average grade of male

let gradeOfMale = persons
    .filter(person => person.sex === "M")
    .map(people => people.grade);
  let totalGradeOfMale = gradeOfMale.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0)
    let averageGradeOfMale = totalGradeOfMale / gradeOfMale.length;
console.log(averageGradeOfMale);

// Find the average grade of female
let gradeOfFemale = persons
    .filter(person => person.sex === "F")
    .map(people => people.grade);
  let totalGradeOfFemale = gradeOfFemale.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0)
    let averageGradeOfFemale = totalGradeOfFemale / gradeOfFemale.length;
console.log(averageGradeOfFemale);

// Find the highest grade

console.log(
  [...peopleGrade].sort((a, b) => a - b).pop()
);

// Find the highest grade in male
console.log(
  [...gradeOfMale].sort((a, b) => a - b).pop()
);

// Find the highest grade in female

console.log(
  [...gradeOfFemale].sort((a, b) => a - b).pop()
);


// Find the highest grade for people whose name starts with 'J' or 'P'


let firstNameWithJOrP = persons.filter(
  (person) => 
    person.name.startsWith("J") ||
    person.name.startsWith("P")
    );

    let gradeWithJOrP = firstNameWithJOrP.map(
      (person) => person.grade
    );

    console.log(
      [...gradeWithJOrP].sort((a, b) => a - b).pop()
    );

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

console.log(
  [...peopleGrade].sort((a, b) => a - b)
);


// Sort the peopleGrade in descending order

console.log(
  [...peopleGrade].sort((a, b) => b - a)
);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

console.log(
  [...peopleGrade].sort((a, b) => b - a)
);


// Sort the array peopelName in ascending `ABCD..Za....z`

console.log(peopleName.sort());


// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

console.log(
  [...peopleName].sort()
)