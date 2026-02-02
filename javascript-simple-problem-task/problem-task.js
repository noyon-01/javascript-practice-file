// !JavaScript Simple Problem Practice Task - 01! //
/**
 * Task-1:
 * Write a function to convert temperature from Celsius to Fahrenheit.
 */

// function celsiusToFahrenheit(celsius) {
//   const fahrebheit = (celsius * 9) / 5 + 32;
//   return fahrebheit;
// }
// const result = celsiusToFahrenheit(11);
// console.log(result);

// !JavaScript Simple Problem Practice Task - 02! //
/**
 * Task-2:
 * You are given an array of numbers. Count how many times the a number is repeated in the array.
 * sample-input: numbers = [5,6,11,12,98, 5]
 * find: 5
 * output: 2
 
 * sample-input: numbers = [5,6,11,12,98, 5]
 * find: 25
 * output: 0
 */

// function countNumber(numbers) {
//   let count = 0;
//   for (const number of numbers) {
//     if (number === 25) {
//       count++;
//     }
//   }
//   return count;
// }
// const numbers1 = [5, 6, 11, 12, 98, 5];
// const result1 = countNumber(numbers1);
// console.log(result1);

// const numbers2 = [5, 6, 11, 12, 98, 5];
// const result2 = countNumber(numbers2);
// console.log(result2);

// !JavaScript Simple Problem Practice Task - 03! //
/**
 * Task-3:
 * Write a function to count the number of vowels in a string.
 */

// function countVowels(text) {
//   let count = 0;
//   for (const vowels of text) {
//     const vowel = vowels.toLowerCase();
//     if (
//       vowel === "a" ||
//       vowel === "e" ||
//       vowel === "i" ||
//       vowel === "o" ||
//       vowel === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// const text = "I Love My Country My Country is Bangladesh";
// const result = countVowels(text);
// console.log(result);

// !JavaScript Simple Problem Practice Task - 04! //
/**
 * Task-4:
 * Write a function to find the longest word in a given string.
 * sample-input: I am learning Programming to become a programmer.
 * sample-output: Programming.
 */

// function longestWord(text) {
//   const words = text.split(" ");
//   let longestWord = "";
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// const text = "I am learning Programming to become a programmer";
// const result = longestWord(text);
// console.log(result);

// !JavaScript Simple Problem Practice Task - 05! //
/**
 * Task-5:
 * Generate a random number between 10 to 20.
 */

// let max = 20;
// let min = 10;

// const randomNumber = Math.random() * (max - min + 1);
// const roundNumber = Math.round(randomNumber) + min;
// console.log(roundNumber);
