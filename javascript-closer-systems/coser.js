//! JavaScript Closer Starts Here !//
//! Closer Test 01
function outer() {
  let name = "Shahadat";

  function inner() {
    console.log(name);
  }

  inner();
}
outer();

//! Closer Test 02
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();
counter();

//! Closer Test 03
function bankAccount() {
  let balance = 1000;

  return function () {
    balance += 500;
    console.log(balance);
  };
}

const account = bankAccount();
account();
account();

//! Closure কী?
// Closure মানে হলো — একটি function তার নিজের scope + তার বাইরের (parent) function এর variable মনে রাখতে পারে, এমনকি parent function শেষ হয়ে গেলেও।

// সহজ ভাষায়:
// Function তার “পুরোনো environment” মনে রাখতে পারে — এটাকেই Closure বলে।
// Closure হলো এমন একটি function যেটি তার lexical scope এর variable মনে রাখতে পারে, এমনকি parent function execution শেষ হলেও।
