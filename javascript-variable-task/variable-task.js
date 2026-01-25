// !JavaScript Variable Practice Task - 01! //
/**
 * Task-1
 * You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
 * Input:
   The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

 * Output:
   Print the result.

 * Sample Input:
   1000
   700

 * Sample Output:
   300
 */

// let orange = 100;
// let apple = 200;

// let myAmount = 1000;
// let totalAmount = orange + apple;
// let returnAmount = myAmount - totalAmount;
// console.log(`My Amount is ${myAmount} taka.`);
// console.log(`1kg Orange and Apple Price is ${totalAmount} taka.`);
// console.log(`Shopkepper returm me ${returnAmount} taka.`);

// !JavaScript Variable Practice Task - 02! //
/**
 * Task-2
 * Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

 * Input:
   The first line of the input is the marks of the five subjects mentioned above, respectively.
 
 * Output:
   Print the result in 2 decimal places.

 * Sample Input:
   75.25, 65, 80, 35.45, 99.50

 * Sample Output:
   71.04
 */

// let mathematicsMark = 75.25;
// let biologyMark = 65;
// let chemistryMark = 80;
// let physicsMark = 35.45;
// let banglaMark = 99.50;

// let totalMark = mathematicsMark + biologyMark + chemistryMark + physicsMark + banglaMark;
// let averageMark = totalMark / 5;
// console.log(`Total Average Mark is ${parseFloat(averageMark.toFixed(2))}`);

// !JavaScript Variable Practice Task - 03! //
/**
 * Task-3
 * You task is to divide the given number by 5 and show the remainder as the output.

 * Input:
   The first line of the input contains the number.

 * Output:
   Print the remainder.

 * Sample Input:
   119

 * Sample Output:
   4
 */

// let givenNumber = 119;
// let rimainderNumber = givenNumber % 5;
// console.log(rimainderNumber);

// !JavaScript Variable Practice Task - 04! //
/**
 * Task-4
 * What will be the result of the following codes:

 * var a = isNaN(‘11’);

 * var a = isNaN(2-10);

 * Explain your answers.
 */

//* isNan check the value is number or string. there is a = isNan ('11'). so isNaN convert this '11' string to number so isNaN show the answer is false. because of isNaN show answer false when the value is number and isNaN show answer true when the value is string, NaN, undefined.
// var a = isNaN('11');
// console.log(a);

//* isNaN check the value is number or not. when the value is number isNaN show false and when the value is not a number then its show true. There is (2 - 10) = -8 is a valid number so isNaN show the answer false.
// var a = isNaN(2 - 10);
// console.log(a);
