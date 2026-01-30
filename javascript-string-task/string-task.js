// !JavaScript String Task - 01 Starts Here! //
/**
 * Task-1:
 * Count how many times a string has the letter a
 */

// const schoolName = "Azim Hakim School and Collage";
// let count = 0;

// for (const character of schoolName) {
//   if (character.toLowerCase() === "a") {
//     count++;
//   }
// }
// console.log(count);

// !JavaScript String Task - 02 Starts Here! //
/**
 * Task-2:
 * Count how many times a string has the letter a or A
 */

// const text = "Azim Hakim School And Collage || Chattogram Model School And Collage";
// let count_a = 0;
// let count_A = 0;

// for (let character of text) {
//   if (character === "a") {
//     count_a++;
//   } else if (character === "A") {
//     count_A++;
//   }
// }

// console.log("Tatal Count of a :", count_a);
// console.log("Total Count of A :", count_A);

// !JavaScript String Task - 03 Starts Here! /
/**
 * Task-3:
 * Check whether a string contains all the vowels a, e, i, o, u
 */

// const text = "abce efgh ijkl mnop qrst uvwx yz";
// const vowels = ["a", " e", "i", "o", "u"];
// const hasAll = true;
// const hasNot = false;

// for (let vowel of vowels) {
//   if (text.includes(vowel)) {
//     console.log(hasAll);
//   } else {
//     console.log(hasNot);
//   }
// }
// !JavaScript String Task - 04 Starts Here! //
/**
 * Task-4:
 * If a given string has either x, replace x by y. if the given string has X, replace it by Y.
 ** Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
 */

// let text = "Extrim Level of Coding And X";
// let newText = text.replace("x", "y").replace("X", "Y");
// console.log(newText);

// !JavaScript String Task - 05 Starts Here! //
/**
 * Task-5:
 * Capitalize Every first Letter of each word in a String
 */

// let text = "i have a pencil for writing a letter.";
// console.log(
//   `${text[0].toUpperCase()} ${text[2].toUpperCase()}ave ${text[7].toUpperCase()} ${text[9].toUpperCase()}encil ${text[16].toUpperCase()}or ${text[20].toUpperCase()}riting ${text[28].toUpperCase()} ${text[30].toUpperCase()}etter.`,
// );
