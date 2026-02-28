//! JavaScript Var Variable Starts Here !//
//? var → Function Scope
// function test() {
//   var x = 10;
// }
// console.log(x); // ❌ Error

//? কিন্তু block {} এর ভিতরে দিলে:
// if (true) {
//   var a = 5;
// }
// console.log(a); // ✅ 5

// var block মানে না, শুধু function মানে।

//! JavaScript Let & Const Variable Starts Here !//
// let & const → Block Scope
// if (true) {
//   let b = 20;
// }
// console.log(b); // ❌ Error

// if (true) {
//   const c = 30;
// }
// console.log(c); // ❌ Error

// let & const শুধু {} এর ভিতরে কাজ করে।

//! Var & Let Reassign করা যায় -> পরে value পরিবর্তন করা যায় !//
// var name = "Shahadat";
// name = "Hosen";

// let age = 25;
// age = 26;

//! Const Reassign করা যায় না -> পরে value পরিবর্তন করা যায় !//
// const country = "Bangladesh";
// country = "India";

//! Var Redeclare করা যায় -> আবার নতুন করে declare করা যায় !//
// var x = 10;
// var x = 20;

//! Let Redeclare করা যায় না -> আবার নতুন করে declare করা যায় না !//
// let y = 5;
// let y = 6;

//! Const Redeclare করা যায় না -> আবার নতুন করে declare করা যায় না !//
// const z = 100;
// const z = 200;

//! Hoisting (উপরে তুলে নেয়?) !//
// var hoisting হয় undefined দেয়
// console.log(a);
// var a = 10;

//! let & const hoisting হলেও use করা যায় না !//
// console.log(b);
// let b = 20;