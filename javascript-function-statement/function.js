// !JavaScript Function Syntex Starts Here! //
// function myName() {
//   console.log("My Name is : Shahadat Hosen Noyon");
// }
// myName();

// function myNumber() {
//   console.log("My Teletalk Mobile Number is : 01585735520");
// }
// myNumber();

// !JavaScript Funtion Parameters Handle Starts Here! //
// function addition(num1, num2) {
//   const addition = num1 + num2;
//   console.log(addition);
// }
// addition(5, 7);

// function subtraction(num1, num2) {
//   const subtraction = num1 - num2;
//   console.log(subtraction);
// }
// subtraction(19, 4);

// function multiplication(x) {
//   const multiplication = x * x;
//   console.log(multiplication);
// }
// multiplication(4);

// function division(x, y) {
//   const division = x / y;
//   console.log(division);
// }
// division(125, 5);

// !JavaScript Funtion Return Starts Here! //
// function sumOfNumbers(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }
// const result = sumOfNumbers(20, 30);
// console.log(result);

// function myName(name1, name2, name3) {
//   const names = name1 + " " + name2 + " " + name3;
//   return names;
// }
// const names = myName("Shahadat", "Hosen", "Noyon");
// console.log(names);

// function multiplication(x, y) {
//   const multi = x * y;
//   return multi;
// }
// const multiNums = multiplication(4, 6);
// console.log(multiNums);

// !JavaScript Funtion of Array, Conditional and Loop Return Starts Here! //
// function number(numbers) {
//   for (const number of numbers) {
//     console.log(number);
//   }
// }
// number([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// function evenNumber(numbers) {
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       console.log(number);
//     }
//   }
// }
// const result = evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// function sumOfEvenNumber(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       sum = sum + number;
//     }
//   }
//   return sum;
// }
// const result = sumOfEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(result);

// function sumOfOddNumber(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     if (number % 2 === 1) {
//       console.log(number);
//       sum = sum + number;
//     }
//   }
//   return sum;
// }
// const result = sumOfOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(result);

// !JavaScript Arrow Function Starts Here! //
// !Normal Function vs Arrow Function
//  ?Normal Function
// function greet(name) {
//   return "Hello " + name;
// }
// console.log(greet("Noyon"));

// ?Arrow Function
// const greet = (name) => {
//   return "Hello " + name;
// };
// console.log(greet("Noyon"));

// ?Arrow Function
const square = num => {
  return num * num;
};
console.log(square(5));

// ?Arrow Function
const squares = num => num * num;
console.log(squares(5));

// ?Arrow Function
const add = (a, b) => a + b;
console.log(add(3, 4));