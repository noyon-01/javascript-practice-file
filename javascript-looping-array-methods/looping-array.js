// !JavaScript For Of Looping in Array Starts Here! //
// const friends = ["Elon", "Bill", "Mark", "Waren"];

// for (const friend of friends) {
//   console.log(friend);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// for (const number of numbers) {
//   console.log(number);
// }

// !JavaScript For Looping in Array Starts Here! //
// const fruits = ["apple", "lemon", "orange", "coconut", "mengo"];

// for (let i = 0; i < fruits.length; i++) {
// console.log(i);
//   console.log(fruits[i]);
// }

// const num = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// for (let n = 0; n < num.length; n++) {
//   console.log(n);
//   console.log(num[n]);
// }

// !JavaScript While Looping in Array Starts Here! //
// const names = ["hablu", "lablu", "kablu", "sablu", "jablu"];

// let x = 0;
// while (x < names.length) {
//   console.log(x);
//   console.log(names[x]);
//   x++;
// }

// const numbers = [12, 23, 34, 45, 56, 67, 78, 89];

// let a = 0;
// while (a < numbers.length) {
//   console.log(a);
//   console.log(numbers[a]);
//   a++;
// }

// !JavaScript Array Reverse Methods 01 Starts Here! //
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let reverseNumbers = numbers.reverse();
// console.log(reverseNumbers);

// !JavaScript Array Reverse Methods 02 Starts Here! //
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let reverseNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   reverseNumbers.unshift(numbers[i]);
// }
// console.log(reverseNumbers);

// let nums = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// let rev_nums = [];

// for (const num of nums) {
//   rev_nums.unshift(num);
//   console.log(num);
// }
// console.log(rev_nums);

// !JavaScript Array Reverse Methods 03 Starts Here! //
// const numbers = [12, 23, 34, 45, 56, 67, 78, 89];
// const rev_num = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
//   rev_num.push(numbers[i]);
// }
// console.log(rev_num);

// !JavaScript Array Sort Methods Starts Here! //
// let nums = [4, 2, 3, 18, 6, 9, 11, 5, 7]; // * This Sort() Methods is not Working All Times!

// nums.sort();
// console.log(nums);

// let colors = ["red", "green", "yellow", "blue", "brown", "aqua", "tomato"];

// colors.sort();
// console.log(colors);

// * Ascending Sort Methods Starts Here
// let asc_nums = [4, 1, 52, 3, 18, 6, 9, 11, 5, 37];

// asc_nums.sort(function (a, b) {
//   return a - b;
// });
// console.log(asc_nums);

// * Decending Sort Methods Starts Here
// let dec_nums = [4, 2, 3, 18, 6, 9, 11, 5, 7];

// dec_nums.sort(function (a, b) {
//   return b - a;
// });
// console.log(dec_nums);
