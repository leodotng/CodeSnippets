const numbers = [1, 2, 3];
/* similar to numbers.push(4) but instead returns a new array */
const numbersExtended = [...numbers, 4];

console.log(numbersExtended); // => [ 1, 2, 3, 4 ]

/* or use it to insert whereever you'd like */
const insertInMiddle = [0, ...numbers, 4];

console.log(insertInMiddle); // => [ 0, 1, 2, 3, 4 ]

/* you can also use spread to copy an array */
const copyNumbers = [...numbers];

console.log(copyNumbers); // => [1, 2, 3]

const moreNumbers = [4, 5, 6];

/* similar to numbers.concat(moreNumbers) */
const mergedNumbers = [...numbers, ...moreNumbers];

console.log(mergedNumbers); // => [ 1, 2, 3, 4, 5, 6 ]

const person = {firstName: 'Marius'};

/* also handy in expanding objects into another object */
const personExtended = {...person, lastName: 'Espejo'};

console.log(personExtended); // => { firstName: 'Marius', lastName: 'Espejo'}

