// !JavaScript Conditional Task - 01! //
/**
 * Task-1
 * Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
 */

// let burgerPrice = 501;
// let cokePrice = 30;

// if (burgerPrice > 500) {
//     console.log("You won a free coke for drink");
// } else {
//     console.log("You have to buy a coke 30 taka");
// }

// !JavaScript Conditional Task - 02! //
/**
 * Task-2 
 * BMI Calculator and Health Category
 * Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
 */

// let BMI = 20.5;
// if (BMI < 18.5) {
//   console.log("You are underweight.");
// } else if (BMI >= 18.5 && BMI <= 24.5) {
//   console.log("You are normal.");
// } else if (BMI >= 25 && BMI <= 29.9) {
//   console.log("You are overweight.");
// } else {
//   console.log("You are obese.");
// }

// !JavaScript Conditional Task - 03! //
/**
 * Task-3
 * Grade Calculator

 * Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
 */

// const grade = 3;
// if (grade >= 90 && grade <= 100) {
//   console.log("A");
// } else if (grade >= 80 && grade <= 89) {
//   console.log("B");
// } else if (grade >= 70 && grade <= 79) {
//   console.log("C");
// } else if (grade >= 60 && grade <= 69) {
//   console.log("D");
// } else if (grade >= 0 && grade <= 59) {
//   console.log("F");
// } else {
//   console.log("Your Roll No is not valid.");
// }

// !JavaScript Conditional Task - 04! //
/**
 * Task-4
 * if you get more then 80 then inside your friend score. 
   -If your friend get more than 80. then go for a lunch. 
   -if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
   -if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
   -if your friend get less than 40, block your friend
   -if you get less than 80 go to home and sleep and act sad

 * Note: 
   use nested if-else-if-else
 */

// let myMark = 90;
// let FriendMark = 85;

// if (myMark > 80) {
//   if (FriendMark > 80) {
//     console.log("Go to a lunch.");
//   } else if (FriendMark < 80 && FriendMark >= 60) {
//     console.log("Goog luch next time.");
//   } else if (FriendMark < 60 && FriendMark >= 40) {
//     console.log("Keep your friend's message unseen.");
//   } else if (FriendMark < 40) {
//     console.log("Block your friend mobile number");
//   }
// } else {
//   console.log("Go to your home and sleep and act you are vary sad.");
// }

// !JavaScript Conditional Task - 05! //
/**
 * Task-5
 * you have two numbers in two variables, called: num1, num2

 * now declare a variable called result. 
 * if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1  and num2.

 * write a simple if-else. 

 * also, write it using ternary operator.
 */

// let num1 = 15;
// let num2 = 20;
// let result;

// if (num1 > num2) {
//   result = num1 * 2;
// } else {
//   result = num1 + num2;
// }
// console.log(result);

// let num1 = 25;
// let num2 = 20;
// let result;

// num1 > num2 ? (result = num1 * 2) : (result = num1 + num2);
// console.log(result);

// !JavaScript Conditional Task - 06! //
/**
 * Task-6
 * Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// let children = true;
// let childrenAge = 18;
// let student = false;
// let seniorCitizens = true;
// let seniorAge = 55;
// let ticketPrice = 800;

// if (children === true && childrenAge < 10) {
//   console.log("You can entry the fare free."); //* ticket price free for children.
// } else if (student === true) {
//   discountPrice = (ticketPrice * 50) / 100; //* ticket price 50% discount for student.
//   payAmount = ticketPrice - discountPrice;
//   console.log(`You pay now ${payAmount} taka.`);
// } else if (seniorCitizens === true && seniorAge >= 60) {
//   discountPrice = (ticketPrice * 15) / 100; //* ticket price 15% discount for senior citizens;
//   payAmount = ticketPrice - discountPrice;
//   console.log(`You pay now ${payAmount} taka.`);
// } else {
//   console.log(`You pay now ${ticketPrice} taka.`);
// }
