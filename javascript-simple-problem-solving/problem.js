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

// !JavaScript Simple Problem Solving - 06! //
// *Find The Largest Number in a Array
// function maxNumber(numbers) {
//   let max = numbers[0];
//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// }
// const numbers = [99, 145, 36, 83, 32, 188, 22, 65, 27];
// const result = maxNumber(numbers);
// console.log(result);

// *Other Simple Solution in Below
// const max = Math.max(21, 2, 13, 4, 5, 6, 7, 8, 9);
// console.log(max);

// *Find The Smallest Number in a Array
// function minNumber(numbers) {
//   let min = numbers[0];
//   for (const number of numbers) {
//     if (number < min) {
//       min = number;
//     }
//   }
//   return min;
// }
// const numbers = [19, 145, 36, 83, 12, 188, 22, 65, 27];
// const result = minNumber(numbers);
// console.log(result);

// *Other Simple Solution in Below
// const min = Math.min(23, 16, 85, 86, 34, 15, 45);
// console.log(min);

// !JavaScript Simple Problem Solving - 07! //
// function woodRequirments(chairQuantity, tableQuantity, badQuantity) {
//   let chairWood = 500;
//   let tableWood = 1000;
//   let badWood = 4000;

//   const chairPrice = chairWood * chairQuantity;
//   const tablePrice = tableWood * tableQuantity;
//   const badPrice = badWood * badQuantity;

//   const totalPrice = chairPrice + tablePrice + badPrice;
//   return totalPrice;
// }
// const result = woodRequirments(2, 1, 1);
// console.log(result);

// !JavaScript Simple Problem Solving - 08! //
// *Find Cheap Phone of an Array
// const phones = [20000, 35000, 12500, 100000, 30000];
// function cheapestPhone(phones) {
//   let cheapPhone = phones[0];
//   for (const phone of phones) {
//     if (phone < cheapPhone) {
//       cheapPhone = phone;
//     }
//   }
//   return cheapPhone;
// }
// const result = cheapestPhone(phones);
// console.log(result);

// const phones = [20000, 35000, 12500, 100000, 30000];
// function expensivePhone(phones) {
//   let expensivePhone = phones[0];
//   for (const phone of phones) {
//     if (phone > expensivePhone) {
//       expensivePhone = phone;
//     }
//   }
//   return expensivePhone;
// }
// const result = expensivePhone(phones);
// console.log(result);

// *Find Cheap Phone of an Object
// const phones = [
//   { name: "samsung", price: 40000 },
//   { name: "samsung", price: 35000 },
//   { name: "samsung", price: 50000 },
//   { name: "samsung", price: 15000 },
//   { name: "samsung", price: 20000 },
// ];

// function cheapestPhone(phones) {
//   let cheapPhone = phones[0].price;
//   for (const phone of phones) {
//     if (phone.price < cheapPhone) {
//       cheapPhone = phone.price;
//     }
//   }
//   return cheapPhone;
// }
// const result = cheapestPhone(phones);
// console.log(result);

// !JavaScript Simple Problem Solving - 09! //
// function totalShopingPrice(shirtQuantity, pantQuantity, showQuantity) {
//   const shirtPrice = 500;
//   const pantPrice = 800;
//   const showPrice = 1200;

//   const totalShirtPrice = shirtPrice * shirtQuantity;
//   const totalPantPrice = pantPrice * pantQuantity;
//   const totalShowPrice = showPrice * showQuantity;

//   const totalProductPrice = totalShirtPrice + totalPantPrice + totalShowPrice;
//   return totalProductPrice;
// }
// const result = totalShopingPrice(1, 1, 1);
// console.log(result);

// !JavaScript Simple Problem Solving - 10! //
// *If you buy 100 ticket you pay now 100 taka per ticker.
// *If you buy 101 - 200 ticket you pay now 90 taka per ticker.
// *If you buy above 200 ticket you pay now 80 taka per ticker.
// function discountPrice(quantity) {
//   const first100Price = 10;
//   const second100Price = 9;
//   const above200Price = 7;

//   if (quantity <= 100) {
//     const totalPrice1 = first100Price * quantity;
//     console.log(totalPrice1);
//     return totalPrice1;
//   } else if (quantity <= 200) {
//     const first100Total = 100 * first100Price;
//     const remainingTotal = quantity - 100;
//     const remainingTotalPrice = remainingTotal * second100Price;
//     const totalPrice2 = first100Total + remainingTotalPrice;
//     console.log(totalPrice2);
//     return totalPrice2;
//   } else {
//     const first100Total = 100 * first100Price;
//     const second100Total = 100 * second100Price;
//     const remainingTotal = quantity - 200;
//     const remainingTotalPrice = remainingTotal * above200Price;
//     const totalPrice3 = first100Total + second100Total + remainingTotalPrice;
//     console.log(totalPrice3);
//     return totalPrice3;
//   }
// }
// const result = discountPrice(300);
// console.log(result);

// !JavaScript Simple Problem Solving - 11! //
// function addition(x, y) {
//   const add = x + y;
//   return add;
// }

// function subtraction(x, y) {
//   const sub = x - y;
//   return sub;
// }

// function multiply(x, y) {
//   const mult = x * y;
//   return mult;
// }

// function divide(x, y) {
//   const div = x / y;
//   return div;
// }

// function calculate(x, y, z) {
//   if (z === "add") {
//     return addition(x, y);
//   } else if (z === "sub") {
//     return subtraction(x, y);
//   } else if (z === "mult") {
//     return multiply(x, y);
//   } else {
//     return divide(x, y);
//   }
// }

// const resultAdd = calculate(10, 5, "add");
// console.log("Total of add:", resultAdd);
// const resultSub = calculate(10, 5, "sub");
// console.log("Total of sub:", resultSub);
// const resultMult = calculate(10, 5, "mult");
// console.log("Total of mult:", resultMult);
// const resultDiv = calculate(10, 5, "div");
// console.log("Total of div:", resultDiv);

// !JavaScript Simple Problem Solving - 12! //
// *Checking Data Validation
// function addition(number1, number2) {
//   if (typeof number1 !== "number") {
//     return "number 1 is not a valid number";
//   } else if (typeof number2 !== "number") {
//     return "number 2 is not a valid number";
//   } else {
//     const add = number1 + number2;
//     return add;
//   }
// }
// const resultAdd = addition("9", 3);
// console.log("Total of additon is:", resultAdd);

// function fullName(first, medal, last) {
//   if (typeof first !== "string") {
//     return "first is not a valid name";
//   } else if (typeof medal !== "string") {
//     return "second is not a valid name";
//   } else if (typeof last !== "string") {
//     return "last is not a valid name";
//   } else {
//     const fullName = first + " " + medal + " " + last;
//     return fullName;
//   }
// }
// const result = fullName("Shahadat", "Hosen", 1);
// console.log(result);
