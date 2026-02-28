//! JavaScript এ ৩ ধরনের Scope আছে !//

//! Global Scope Starts Here !//
// যে variable function এর বাইরে declare করা হয়, সেটাকে বলে Global Variable।

let name = "Shahadat Hosen Noyon";
function greet() {
  console.log(name);
}
greet();

// এখানে কী হলো?
// name function এর বাইরে আছে
// তাই পুরো program থেকে access করা যাচ্ছে
// Global variable সবাই ব্যবহার করতে পারে।

//! Function Scope Starts Here !//
// যে variable function এর ভিতরে declare করা হয়, সেটাকে বলে Function Scope Variable।

function greet() {
  let message = "Hello World";
  console.log(message);
}
greet();
// console.log(message); // ❌ Error

// message শুধু greet() function এর ভিতরে আছে
// বাইরে থেকে access করলে error হবে
// Function এর ভিতরের variable বাইরে ব্যবহার করা যায় না।

//! Block Scope Starts Here !//
// Block মানে { } এর ভিতরের অংশ।
// let এবং const block scope follow করে।

if (true) {
  let age = 25;
  console.log(age); // 25
}

// console.log(age); // ❌ Error


//! Scope Chain Starts Here !//
// একটা function যখন variable খুঁজে পায় না, তখন সে বাইরে খুঁজতে থাকে।

let a = 10;

function outer() {
  function inner() {
    console.log(a);
  }
  inner();
}

outer();

// inner() নিজের ভিতরে a পায়নি
// তাই বাইরে গিয়ে খুঁজেছে
// Global এ পেয়েছে
// এটাকেই বলে Scope Chain।