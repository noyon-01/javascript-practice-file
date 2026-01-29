// !JavaScript Array Looping Task - 01! //
/**
 * Task 1
 * Write a JavaScript code to reverse the array colors without using the reverse method.
 * Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

 * Output:
 * ['orange', 'yellow', 'green', 'blue', 'red']
 */

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const rev_colors = [];

// for (const color of colors) {
//     rev_colors.unshift(color);
// }
// console.log(rev_colors);

// const colors = ["red", "blue", "green", "yellow", "orange"];
// const rev_colors = [];

// for (let i = colors.length - 1; i >= 0; i--) {
//   rev_colors.push(colors[i]);
// }
// console.log(rev_colors);

// !JavaScript Array Looping Task - 02! //
/**
 * Task 2
 * Write a JavaScript code to get the even numbers from an array using any looping technique.
 * Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

 * Output:
 * [12, 98, 78, 46]
 */

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// }
// console.log(evenNumbers);

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNums = [];

// for (let x = 0; x < numbers.length; x++) {
//   let evenNumbers = numbers[x];
//   if (evenNumbers % 2 === 0) {
//     evenNums.push(evenNumbers);
//   }
// }
// console.log(evenNums);

// !JavaScript Array Looping Task - 03! //
/**
 * Task 3
 * Use a for...of loop to concatenate all the elements of an array into a single string.
 * Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

 * Output:
 * 'TomTimTinTik'
 */

// let numbers = ["Tom", "Tim", "Tin", "Tik"];
// let results = "";

// for (const number of numbers) {
//   results = results.concat(number);
// }
// console.log(results);

// !JavaScript Array Looping Task - 04! //
/**
 * Task 4 (Hard)
 * Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
 * Input: const statement = 'I am a hard working person'
 
 * Output:
 * 'person working hard a am I'
 */

const statement = "I am a hard working person";

const revStatement = statement.split(" ").reverse().join(" ");
console.log(revStatement);
