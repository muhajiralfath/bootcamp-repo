let fruits = ['apple', 'banana', 'orange'];

// push(): Adds elements at the end of the array
fruits.push('grape', 'mango'); // fruits: ['apple', 'banana', 'orange', 'grape', 'mango']

// pop(): Removes the last element from the array
let removedFruit = fruits.pop(); // removedFruit: 'mango', fruits: ['apple', 'banana', 'orange', 'grape']

// shift(): Removes the first element from the array
let firstFruit = fruits.shift(); // firstFruit: 'apple', fruits: ['banana', 'orange', 'grape']

// unshift(): Adds elements to the beginning of the array
fruits.unshift('pear', 'kiwi'); // fruits: ['pear', 'kiwi', 'banana', 'orange', 'grape']

// splice(): Adds new elements at a specific index and/or removes elements
fruits.splice(2, 0, 'cherry'); // fruits: ['pear', 'kiwi', 'cherry', 'banana', 'orange', 'grape']
fruits.splice(3, 1, 'watermelon', 'pineapple'); // fruits: ['pear', 'kiwi', 'cherry', 'watermelon', 'pineapple', 'orange', 'grape']

// slice(): Returns a new array with elements removed according to index
let slicedFruits = fruits.slice(1, 4); // slicedFruits: ['kiwi', 'cherry', 'watermelon']

// Displaying the results in the console
console.log('Initial Fruits Array:', fruits);
console.log('Removed Fruit (pop()):', removedFruit);
console.log('First Fruit (shift()):', firstFruit);
console.log('Updated Fruits Array (unshift()):', fruits);
console.log('Sliced Fruits Array (slice()):', slicedFruits);


// destructuring array
// Deklarasi sebuah array
const fruitss = ['apple', 'banana', 'orange', 'grape'];

// Destructuring array
const [fruit1, fruit2, ...otherFruits] = fruitss;

// Menampilkan hasil
console.log(fruit1); // Output: 'apple'
console.log(fruit2); // Output: 'banana'
console.log(otherFruits); // Output: ['orange', 'grape']

// MUTABLE
// copy by reference

let animals = ["Singa", "Harimau", "Kambing"]

// Mutable
// Copy by reference
let hewan = animals;

console.log(hewan)

