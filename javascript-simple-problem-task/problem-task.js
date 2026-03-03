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

// !JavaScript Simple Problem Practice Task - 06! //
/**
 * Task-6:
 * Find the lowest number in the array below.
 * const heights = [167, 190, 120, 165, 137];
 */

// function lowestNumber(heights) {
//   let lowestNum = heights[0];
//   for (const height of heights) {
//     if (height < lowestNum) {
//       lowestNum = height;
//     }
//   }
//   return lowestNum;
// }
// const heights = [167, 190, 120, 165, 137];
// const result = lowestNumber(heights);
// console.log(result);

// !JavaScript Simple Problem Practice Task - 07! //
/**
 * Task-7:
 * Find the friend with the smallest name.
 * const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

// function smallestFriend(friends) {
//   let tinyFriend = friends[0];
//   for (const friend of friends) {
//     if (friend.length < tinyFriend.length) {
//       tinyFriend = friend;
//     }
//   }
//   return tinyFriend;
// }
// const friends = ["rahim", "robin", "rafi", "ron", "rashed"];
// const result = smallestFriend(friends);
// console.log(result);

// !JavaScript Simple Problem Practice Task - 08! //
/**
 * Task-8:
 * Your task is to calculate the total budget required to buy electronics:
   laptop = 35000 tk
   tablet = 15000 tk
   mobile = 20000 tk
 * Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

// function calculateElectronicsBudget(
//   laptopQuantity,
//   tabletQuantity,
//   mobileQuantity,
// ) {
//   const laptopPrice = 35000;
//   const tabletPrice = 15000;
//   const mobilePrice = 20000;

//   const totalLaptopPrice = laptopPrice * laptopQuantity;
//   const totalTabletPrice = tabletPrice * tabletQuantity;
//   const totalMobilePrice = mobilePrice * mobileQuantity;

//   const totalProductsPrice =
//     totalLaptopPrice + totalTabletPrice + totalMobilePrice;
//   return totalProductsPrice;
// }
// const result = calculateElectronicsBudget(2, 2, 5);
// console.log(result);

// !JavaScript Simple Problem Practice Task - 09! //
/**
 * Task-9:
 * You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
 * 
 * Input
 * const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
 */

// const phones = [
//   { model: "PhoneA", brand: "Iphone", price: 95000 },
//   { model: "PhoneB", brand: "Samsung", price: 40000 },
//   { model: "PhoneC", brand: "Oppo", price: 26000 },
//   { model: "PhoneD", brand: "Nokia", price: 35000 },
//   { model: "PhoneE", brand: "Iphone", price: 105000 },
//   { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function findAveragePhonePrice(phones) {
//   let totalPhonePrice = 0;
//   let phonesLength = phones.length;
//   for (const phone of phones) {
//     totalPhonePrice = totalPhonePrice + phone.price;
//   }
//   const averagePhonesPrice = totalPhonePrice / phonesLength;
//   const roundAveragePrice = Math.round(averagePhonesPrice);
//   return roundAveragePrice;
// }
// const result = findAveragePhonePrice(phones);
// console.log(result);

// !JavaScript Simple Problem Practice Task - 10! //
/**
 * Task-10: (Hard)
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
 * 
 * Input
 * const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
 */

// const employees = [
//   { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//   { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//   { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//   { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// function employeesSalary(employees) {
//   const totalEmployeesSalary = [];
//   let totalSalary = 0;
//   for (const employee of employees) {
//     const employeeExperience = employee.experience;
//     const employeeStarting = employee.starting;
//     const employeeIncrement = employee.increment;

//     const employeeSalary = employeeIncrement * employeeExperience + employeeStarting;
//     totalEmployeesSalary.push(employeeSalary);
//   }
//   for (const totalEmployeeSalary of totalEmployeesSalary) {
//     totalSalary = totalSalary + totalEmployeeSalary;
//   }
//   return totalSalary;
// }
// const result = employeesSalary(employees);
// console.log(result);
