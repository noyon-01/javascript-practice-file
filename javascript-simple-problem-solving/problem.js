// !JavaScript Simple Problem Solving - 01! //
// function inchToFeet(inch) {
//   const feet = inch / 12;
//   const feet2 = parseInt(feet);
//   const inch2 = inch % 12;

//   const feetAndInch = feet2 + " feet" + " " + inch2 + " inch.";
//   return feetAndInch;
// }
// const feet = inchToFeet(70);
// console.log(feet);

// function feetToInch(feet) {
//   const inch = feet * 12;
//   return inch;
// }
// const result = feetToInch(6);
// console.log(result);

// !JavaScript Simple Problem Solving - 02! //
// function milesToKilomiter(miles) {
//   const km = miles * 1.60934;
//   return km;
// }
// const result = milesToKilomiter(12);
// console.log(result);

// function kilomiterToMiles(km) {
//   const miles = km * 0.621371;
//   return miles;
// }
// const result = kilomiterToMiles(30);
// console.log(result);

// !JavaScript Simple Problem Solving - 03! //
// function leapYear(year) {
//   if (year % 100 !== 0 && year % 4 === 0) {
//     return true;
//   } else if (year % 100 === 0 && year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const result = leapYear(2004);
// console.log(result);

// !JavaScript Simple Problem Solving - 04! //
// function averageOfOddNumber(numbers) {
//   const oddNumber = [];
//   let sum = 0;
//   for (const number of numbers) {
//     if (number % 2 === 1) {
//       oddNumber.push(number);
//     }
//   }
//   const length = oddNumber.length;
//   for (const odd of oddNumber) {
//     sum = sum + odd;
//   }
//   const averageOddNumber = sum / length;
//   return averageOddNumber;
// }
// const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// const result = averageOfOddNumber(numbers);
// console.log(result);

// function averageOfEvenNumber(numbers) {
//   const evenNumber = [];
//   let sum = 0;
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       evenNumber.push(number);
//     }
//   }
//   const length = evenNumber.length;
//   for (const even of evenNumber) {
//     sum = sum + even;
//   }
//   const averageEvenNumber = sum / length;
//   return averageEvenNumber;
// }
// const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// const result = averageOfEvenNumber(numbers);
// console.log(result);

// !JavaScript Simple Problem Solving - 05! //
// function removeDuplicatiNumber(numbers) {
//   const uniqueNumber = [];
//   for (const number of numbers) {
//     if (uniqueNumber.includes(number) === false) {
//       uniqueNumber.push(number);
//     }
//   }
//   return uniqueNumber;
// }
// const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7, 7, 8, 1, 4, 9];
// const result = removeDuplicatiNumber(numbers);
// console.log(result);
