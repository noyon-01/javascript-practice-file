// !JavaScript Array Introduction Starts Here! //
// let names = ["noyon", "hablu", "bassa", "fojol", "korim"];
// console.log(names);

// let numbers = [24, 57, 34, 86, 46, 74, 64];
// console.log(numbers);

// let mixArray = ["noyon", 23, "hablu", 25, "Josim", 31];
// console.log(mixArray);

// !JavaScript Array Length Methods Starts Here! //
// let array = [2, 3, 4, 2, 6, 4, 7, 4, 2, 6, 7, 9, 4, 2, 8];
// console.log(array.length);

// let newArray = ["html", "css", "tailwind", "jsvascript", "react", "node", "express", "mongo"];
// console.log(newArray);
// console.log(newArray.length);

// !JavaScript Array index Methods Starts Here! //
// let fruits = ["apple", "lemon", "banana", "papaya", "watermilon", "mango"];
// console.log(fruits[0]);
// console.log(fruits[2], fruits[5], fruits[6]);

// fruits[6] = "guava";
// console.log(fruits);
// console.log(fruits[2], fruits[5], fruits[6]);

// fruits[0] = "coconut";
// console.log(fruits);

// !JavaScript Array push Methods Starts Here! //
// let languages = ["HTML", "CSS", "JavaScript", "Node", "Mongo"];
// console.log(languages);

// languages.push("Tailwind CSS");
// console.log(languages);

// languages.push("React");
// console.log(languages);

// languages.push("Express");
// console.log(languages);

// languages.push("Next");
// console.log(languages);

// !JavaScript Array pop Methods Starts Here! //
// let myNumbers = [20, 8, 7, 12, 10, 65, 1, 2, 15, 17];
// console.log(myNumbers);

// myNumbers.pop();
// console.log(myNumbers);

// myNumbers.pop();
// console.log(myNumbers);

// myNumbers.pop();
// console.log(myNumbers);

// !JavaScript Array shift Methods Starts Here! //
// let myNumbers = [20, 8, 7, 12, 10, 65, 1, 2, 15, 17];
// console.log(myNumbers);

// myNumbers.shift();
// console.log(myNumbers);

// myNumbers.shift();
// console.log(myNumbers);

// myNumbers.shift();
// console.log(myNumbers);

// !JavaScript Array unshift Methods Starts Here! //
// let languages = ["Tailwind", "JavaScript", "React", "Node", "Express", "Mongo"];
// console.log(languages);

// languages.unshift("CSS");
// console.log(languages);

// languages.unshift("HTML");
// console.log(languages);

// languages.unshift("Next");
// console.log(languages);

// !JavaScript Array includes Methods Starts Here! //
// let fruits = ["apple", "lemon", "banana", "papaya", "watermilon", "mango"];
// console.log(fruits);

// console.log(fruits.includes("lemon"));
// console.log(fruits.includes("guava"));
// console.log(fruits.includes("mango"));
// console.log(fruits.includes("coconut"));

// !JavaScript Array indexOf Methods Starts Here! //
// let fruits = ["apple", "lemon", "banana", "papaya", "watermilon", "mango"];
// console.log(fruits);

// console.log(fruits.indexOf("lemon"));
// console.log(fruits.indexOf("coconut"));
// console.log(fruits.indexOf("mango"));
// console.log(fruits.indexOf("banana"));

// !JavaScript Array inArray Methods Starts Here! //
// let myFriends = ["Abdullah", "Copil", "Didar", "Emon", "Foisal", "Halal", "Habran", "Jisan" ];
// console.log(Array.isArray(myFriends));

// let myName = {name: "noyon", age: 23, profession: "Student"};
// console.log(Array.isArray(myName));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Array.isArray(numbers));

// let myNumbers = 2087121265121517;
// console.log(Array.isArray(myNumbers));

// !JavaScript Array join Methods Starts Here! //
// let skils = ["html", "css", "tailwind","javascript", "react", "node", "express", "mongo", "next"];
// console.log(skils)

// console.log(skils.join(" "));
// console.log(skils.join(", "));
// console.log(skils.join("/ "));
// console.log(skils.join(" | "));

// let names = ["N", "o", "y", "o", "n", "."];
// console.log(names.join(""));
// console.log(names.join(" "));
// console.log(names.join("  "));
// console.log(names.join(" | "));

// !JavaScript Array concat Methods Starts Here! //
// let firstName = "Shahadat ";
// let middleName = "Hosen ";
// let lastName = "Noyon.";

// const fullName = firstName.concat(middleName).concat(lastName);
// console.log(fullName);

// let num1 = [0, 1, 2, 3, 4];
// let num2 = [5, 6, 7, 8, 9];
// let num3 = [-0, -1, -2, -3, -4];
// let num4 = [-5, -6, -7, -8, -9];

// let nums = num3.concat(num4).concat(num1).concat(num2);
// console.log(nums);

// !JavaScript Array slice Methods Starts Here! //
// let fruits = ["Orange", "Apple", "Banana", "Coconut", "Jackfruit", "Watermilon"];

// let newFruits1 = fruits.slice(1, 4);
// console.log(newFruits1);

// let newFruits2 = fruits.slice(3, 5);
// console.log(newFruits2);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let num1 = numbers.slice(2, 6);
// console.log(num1);

// let num2 = numbers.slice(-3);
// console.log(num2);

// let num3 = numbers.slice(3);
// console.log(num3);

// let num4 = numbers.slice(-6, -2);
// console.log(num4);

// !JavaScript Array splice Methods Starts Here! //
// let color = ["red", "green", "yello", "blue", "brown", "pink"];

// let removeColor = color.splice(1, 4);
// console.log("remove color is", removeColor);
// console.log("Orginal Array color is", color);

// let addColor = color.splice(2, 0, "aqua");
// console.log(color);

// let replaceColor = color.splice(1, 4, "tomato", "white");
// console.log(replaceColor);
// console.log(color);
