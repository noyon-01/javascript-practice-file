// !JavaScript Loop Break Task - 01 Start Here! //
/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

// for (let i = 1; i <= 200; i++) {
//   if (i === 100) {
//     break;
//   }
//   console.log(i);
// }

// !JavaScript Loop Break Task - 02 Start Here! //
/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let number = 1;
// let sum = 0;

// while (number < 20) {
//   if (sum >= 100) {
//     break;
//   }
//   console.log(number)
//   sum = sum + number;
//   number++;
// }

// console.log("Total sum :", sum);

// !JavaScript Loop Break Task - 03 Start Here! //
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// for (let i = 1; i < 100; i++) {
//   if (i === 2 ** 2) {
//     console.log("Found First Square Number :", i);
//     break;
//   }
//   console.log(i);
// }

// !JavaScript Loop Continue Task - 01 Start Here! //
/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// for (let number = 1; number <= 40; number++) {
//   if (number % 2 === 1) {
//     continue;
//   } else {
//     console.log(number);
//   }
// }

// !JavaScript Loop Continue Task - 02 Start Here! //
/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

// for (let i = 55; i <= 85; i++) {
//   if (i % 2 === 0 || i % 5 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// !JavaScript For Loop Task - 01 Start Here! //
/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
*/

// for (let i = 1; i <= 60; i++) {
//   console.log(i, ":" ,"I will invest at least 6 hrs every single day for next 60 days!",);
// }

// !JavaScript For Loop Task - 02 Start Here! //
/***
 * Subtask-1:
 * Find all the odd numbers from 61 to 100.
 */

// for (let i = 61; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log("Odd Numbers :", i);
//   }
// }

/***
 * Subtask-2:
 * Find all the even numbers from 78 to 98.
 */

// for (let i = 78; i <= 98; i++) {
//   if (i % 2 !== 1) {
//     console.log("Even Numbers :", i);
//   }
// }

// !JavaScript For Loop Task - 03 Start Here! //
/***
 * Subtask-1:
 * Display sum of all the odd numbers from 91 to 129.
 */

// let sum = 0;
// for (let i = 91; i <= 129; i++) {
//   if (i % 2 === 1) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

/***
 * Subtask-2:
 * Display sum of all the even numbers from 51 to 85.
 */

// let sum = 0;
// for (let i = 51; i <= 85; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// !JavaScript For Loop Task - 04 Start Here! //
/***
Generate a multiplication table for number 9
*/

// for (let num = 1; num <= 100; num++) {
//   if (num % 9 === 0){
//     console.log(num)
//   }
// }

// !JavaScript For Loop Task - 05 Start Here! //
/***
Implement a countdown timer that counts down from 81 to 65.
*/

// for (let i = 81; i >= 65; i--) {
//   console.log(i);
// }
