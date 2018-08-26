const puppy = {
    breed: 'Golden Retriever',
    color: 'gold',
    name: 'Dustin'
}

/* The old way to grab object property values */
const puppyName = puppy.name;
const puppyBreed = puppy.breed;

/* Now with Destructuring you can do this instead */
const{name, breed} = puppy;

console.log(`${name} is a ${breed} puppy!`); // => 'Dustin is a Golden Retriever puppy!'

/* If you need to use a different variable name you can do this */
const {color: puppyColor} = puppy; 

console.log(puppyColor); // => 'gold'

/* It's also handy to use destructuring in function parameters */
const bark = ({ name }) => console.log(`${name} is barking!`);

bark(puppy); // => 'Dustin is barking!'

/** Destructuring can also be used on Arrays */
const puppies = ['Dustin', 'Lassie'];

/* Old Way */
const firstPuppy = puppies[0];
const secondPuppy = puppies[1];

/* New way with Array Destructuring */
const [first, second] = puppies;

console.log(`We have ${first} and ${second}!`); // => 'We have Dustin and Lassie!'
