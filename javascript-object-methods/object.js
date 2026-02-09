// !JavaScript Object Methods Starts Here! //
// const person = {
//   name: "Noyon",
//   age: 22,
//   perfession: "student",
//   isMarrid: false,
//   id: 1,
//   phone: "01585735520",
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person["id"]);
// console.log(person["phone"]);

// let car = {
//   name: "BMW",
//   id: 1,
//   color: ["red", "golden", "white", "black", "yellow"],
//   price: 12500000,
//   stock: 10,
// };

// console.log(car);
// console.log(car.color);
// console.log(car.color[3]);
// console.log(car['color'][1]);
// console.log(car.stock);

// !JavaScript Object Add Methods Starts Here! //
// const smartPhone = {
//   brande: "Samsung",
//   model: "S24 Ultra",
//   display: "FHD IPS Display",
//   price: 175000,
//   id: "S24",
// };

// smartPhone["stock"] = 150;
// smartPhone.location = ["USA", "UK", "Australia", "Canada", "Japan", "China"];

// console.log(smartPhone);
// const keys = Object.keys(smartPhone);
// console.log(keys);

// const values = Object.values(smartPhone);
// console.log(values)

// !JavaScript Object Change Methods Starts Here! //
// const student = {
//   name: "noyon",
//   profession: "Student",
//   age: 22,
//   collage: "Phatiya Govt Collage",
//   study: "Honurs",
//   subject: "Economics",
//   skills: ['html', 'css', 'js']
// };

// student.name = "Hablu";
// student['age'] = 23;
// student.skills[3] = "react";
// student['skills'][1] = "tailwind css";

// console.log(student);

// !JavaScript Object Delete Methods Starts Here! //
// const pen = {
//   name: "Fresh All Time",
//   price: 10,
//   brande: "Fresh",
//   id: "F10",
//   stock: "Available",
// };

// delete pen.price;
// delete pen.brande;
// console.log(pen);

// !JavaScript Nested Object All Methods Starts Here! //
// const laptop = {
//   brande: "HP",
//   price: {
//     modelG1: {
//       id: 1,
//       price: 30000,
//       display: "HD LED Display",
//       location: ["Dhaka", "Chattogram", "Golsan", "Bonani", "GEC", "Agrabad"],
//     },
//     modelG4: {
//       id: 2,
//       price: 50000,
//       display: "FHD IPS Display",
//       location: ["USA", "UK", "Australia", "Japan", "China"],
//     },
//   },
// };

// console.log(laptop);
// console.log(laptop.brande);
// console.log(laptop.price.modelG1);
// console.log(laptop.price.modelG1.price);
// console.log(laptop['price']['modelG1']['location'][1]);

// laptop.price.modelG4.location[0] = "Canada";
// console.log(laptop.price.modelG4);

// delete laptop.price.modelG1.location;
// delete laptop.price.modelG4.display;
// console.log(laptop.price);

// !JavaScript Create Object Methods Starts Here! //
// const pencil = new Object();

// console.log(pencil);
// console.log(typeof pencil);

// pencil.brange = "Fresh";
// pencil.id = "F-10"
// pencil.price = 10;
// console.log(pencil);

// const person = Object.create({});

// console.log(person);
// console.log(typeof person);

// person.name = "Hablu Programmer";
// person.age = 25;
// person.perfession = "Student";
// person["study"] = "Master";
// person["subject"] = "Economics";
// person.isMarrid = "False";

// console.log(person);

// for (const student in person) {
//   console.log(student, ":", person[student]);
// }

// delete person.isMarrid;
// console.log(person);

// !JavaScript Nested Object Starts Here! //
// const persons = {
//   id: 1,
//   name: "Doclas Hablu",
//   age: 30,
//   profession: "Programmer",
//   subject: "Economics",
//   act: function () {
//     console.log("I am Hablu a Programmer.");
//   },
//   cars: {
//     brand: "BMW",
//     price: 10000000,
//     id: 101,
//     made: 2025,
//   },
//   dream: {
//     dream_01: "Australia",
//     dream_02: "China",
//     dream_03: "Japan",
//   },
//   like: ["apple", "Lemon", "Orange", "WaterMelon"]
// };

// console.log(persons);
// persons.act()

// !JavaScript Object of Array Search for Match Starts Here! //
// const products = [
//   { id: 1, name: "xiaomi phone", price: 20000 },
//   { id: 2, name: "apple iphone", price: 20000 },
//   { id: 3, name: "samsung Phone", price: 20000 },
//   { id: 4, name: "oppo phone", price: 20000 },
//   { id: 5, name: "xiaomi Laptop", price: 20000 },
//   { id: 6, name: "macboc laptop", price: 20000 },
//   { id: 7, name: "Nokia Phone", price: 20000 },
//   { id: 8, name: "samponi phone", price: 20000 },
//   { id: 9, name: "hp laptop", price: 20000 },
// ];

// function matchProduct(products, search) {
//   const phones = [];
//   for (const product of products) {
//     if (product.name.toLowerCase().includes(search.toLowerCase())) {
//       phones.push(product);
//     }
//   }
//   return phones;
// }
// const result = matchProduct(products, "phone");
// console.log(result);
