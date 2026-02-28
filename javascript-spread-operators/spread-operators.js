// !Array এর ক্ষেত্রে Spread Operator! //
// let numbers = [1, 2, 3];
// let newNumbers = [...numbers];
// console.log(newNumbers);

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let merged = [...arr1, ...arr2];
// console.log(merged);

// let numbers = [2, 3, 4];
// let updated = [1, ...numbers, 5];
// console.log(updated);

// !Object এর ক্ষেত্রে Spread Operator! //
// let person = {
//   name: "Rahim",
//   age: 25
// };
// let newPerson = { ...person };
// console.log(newPerson);

// let person = {
//   name: "Rahim",
//   age: 25
// };

// let updatedPerson = {
//   ...person,
//   country: "Bangladesh"
// };

// console.log(updatedPerson);

// let person = {
//   name: "Rahim",
//   age: 25
// };

// let updatedPerson = {
//   ...person,
//   age: 30
// };

// console.log(updatedPerson);

// !Function এ Spread! //
// function add(a, b, c) {
//   return a + b + c;
// }
// let numbers = [1, 2, 3];
// console.log(add(...numbers));

// let user = {
//   name: "Rahim",
//   address: {
//     city: "Dhaka"
//   }
// };

// let newUser = { ...user };
// newUser.address.city = "Chittagong";
// console.log(user.address.city);

// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first);
// console.log(rest);