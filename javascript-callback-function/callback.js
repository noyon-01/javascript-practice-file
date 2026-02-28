//! Callback Function কী..? !//
// Callback Function হলো এমন একটি function যেটাকে আমরা অন্য একটি function-এর ভিতরে argument হিসেবে পাঠাই,
// এবং পরে সেই function তাকে ডাক দেয় বা (call) করে।

// Simple Example
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const userName = "Noyon";
  callback(userName);   // এখানে callback function কে call করা হচ্ছে
}

processUser(greet);

// এখানে কী হচ্ছে?
// greet একটা function
// processUser আরেকটা function
// আমরা greet কে processUser এর ভিতরে পাঠিয়েছি
// processUser পরে callback(userName) দিয়ে greet কে call করেছে
// তাই greet হলো একটি callback function


//! কেন Callback ব্যবহার করি?
// ✔ যখন কোনো কাজ শেষ হলে আরেকটা কাজ করতে চাই
// ✔ API call হলে
// ✔ Button click হলে
// ✔ Timer শেষ হলে

//! JavaScript এ অনেক built-in function callback ব্যবহার করে:
// setTimeout()
// addEventListener()
// map()
// filter()
// forEach()

// Real Life Example (Button Click)
// document.getElementById("btn").addEventListener("click", function() {
//   console.log("Button Clicked!");
// });

// এখানে:
// "click" হলে
// যে function দেওয়া হয়েছে সেটা run হবে
// এই function টাই callback