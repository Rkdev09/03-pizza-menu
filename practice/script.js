/*
// Destructuring Object and Arrays
// Normal way
const fruits = ["Apple", "Banana", "Mango"];
const first = fruits[0];
const second = fruits[1];

console.log(first);
console.log(second);

// Using Destructuring
const fruits = ["Apple", "Banana", "Mango"];
const [first, second, third] = fruits;
console.log(first);
console.log(second);
console.log(third);

// Skipping Value
const numbers = [10, 20, 30];
const [first, , third] = numbers;

console.log(first);
console.log(third);

// Default Value in Arrays
const color = ["Red"];
const [first, second = "blue"] = color;
console.log(first);
console.log(second);

// Rest Operator in Arrays Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);

// Swapping Variables
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);

// Part:2 Object Destructuring
// Normal way
const student = {
  name: "Ritika",
  age: 20,
};

const name = student.name;
const age = student.age;

console.log(name);
console.log(age);

//Using Destructuring
const student = {
  name: "Ritika",
  age: 20,
};

const { name, age } = student;
const { name: studentName, age: studentAge } = student;
console.log(name);
console.log(age);
console.log(studentName);
console.log(studentAge);

// Default Value
const student = {
  name: "Antima",
};
const { name, age = 20 } = student;
console.log(name);
console.log(age);

// Rest Operator in Object
const student = {
  name: "Ritika",
  age: 23,
  city: "GKP",
};
const { name, age, ...rest } = student;
console.log(name);
console.log(age);
console.log(rest);

//Nasted Destructuring
// Nasted Arrays
const numbers = [1, 2, [3, 4]];
const [first, second, [third, fourth]] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// Nasted Object
const user = {
  name: "Ritika",
  address: {
    city: "GKP",
    country: "India",
  },
};

const {
  name,
  address: { city, country },
} = user;

console.log(name);
console.log(city);
console.log(country);

// Spread Operator with Arrays
// Copy Arrays
const numbers = [1, 2, 3, 4, 5];
const copyNumber = [...numbers];
console.log(copyNumber);

// Combine Arrays
const frontend = ["HTML", "CSS", "JS"];
const backend = ["Node.js", "Express"];
const fullStack = [...frontend, ...backend];
console.log(fullStack);

// Add New Value
const numbers = [2, 3];
const addNumber = [1, ...numbers, 4];
console.log(addNumber);

// Spread Operator with Object
// Copy Object
const student = {
  name: "Ritika",
  age: 20,
};
const copyStudent = { ...student };
console.log(copyStudent);

// Add New Properties
const student = {
  name: "Ritika",
  age: 20,
};
const updatedStudent = {
  ...student,
  city: "GKP",
};
console.log(updatedStudent);

// Update Property
const student = {
  name: "Ritika",
  age: 20,
};
const updatedStudent = {
  ...student,
  age: 23,
};
console.log(updatedStudent);

const name = "Ritika";
const letters = [...name];
console.log(...letters);

// Important: Spread makes a Shallow copy
const user = {
  name: "Ritika",
  address: {
    city: "GKP",
  },
};
const copyUser = { ...user };
copyUser.address.city = "Delhi";
console.log(user.address.city);

// Ternary Operator Instead of if...Else Statement.
// if...Else
const age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Ternary Operator
const age = 20;
age >= 18 ? console.log("Adult") : console.log("Minor");

// Sorting The Result in a Variable
const age = 20;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// Even Odd
const number = 7;
const result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);
*/

/*
// Arrow Function
// 1. No Parameter
const greet = () => {
  console.log("Hello");
};
greet();

const greet = () => console.log("Hello");
greet();

// 2. One Parameter
const square = (num) => {
  return num * num;
};

console.log(square(8));

const square = (num) => num * num;
console.log(square(10));

const square = (num) => num * num;
console.log(square(9));

// 3. Multiple Parameters
const calculate = (a, b) => {
  const sum = a + b;
  const result = sum * 2;
  
  return result;
};
console.log(calculate(2, 6)); // 18

// 5. Returning an Object
const user = () => ({
  name: "Ritika",
  age: 20,
});

// Array & Arrays Methode
const nums = [4, 15, 8, 23];

const doubled = nums.map((n) => n * 2);
const evens = nums.filter((n) => n % 2 === 0);
const found = nums.find((n) => n > 10);
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(doubled);
console.log(evens);
console.log(found);
console.log(sum);

// Map()
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num / 2);
console.log(result);

const numbers = [10, 20, 30];

const result = numbers.map((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
  
  return value * 2;
});
// console.log(result);

const numbers = [10, 20, 30];

const result = numbers.map((value, index) => {
  return `${index}: ${value}`;
});

console.log(result);


// Self Revesion
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.push(5);
console.log(result);
console.log(numbers.push(3));
*/

/*
// 💻 Exercises — Write the Code Yourself
// Exercise 1
const greet = function () {
  console.log("Hello JavaScript");
};
greet();

// Exercise 2
const greet = function () {
  console.log("Hello JavaScript");
};
const sayHello = greet;
greet();
sayHello();

// Exercise 3
function sayHello() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}
execute(sayHello);

// Exercise 4 — Addition Callback
function add(a, b) {
  return a + b;
  function calculate(operation) {
    return operation + calculate;
  }
}
const first = add(5);
const second = add(3);
console.log(first(3));
console.log(second(7));

// 1
console.log(typeof x);
var x = 10;

// 2
console.log(y);
let y = 10;

// 3
console.log(5 + "5");

// 4
console.log("10" - 5);

// 5
console.log(true + true);

// 6
console.log(0 == "0");
console.log(0 === "0");

// 7
console.log("" == false);

// 8
console.log(null == undefined);
console.log(null === undefined);

// 9
let arr = [];
console.log(Boolean(arr)); // truthy or falsy?

// 10
const person = { name: "Riya" };
person.name = "Ravi";
console.log(person.name); // allowed?

// 11
const age = 21;
let city = "Gorakhpur";
console.log(`${city} me ${age} saal ki umar`);

// 12
console.log(NaN === NaN);

function greet() {
  console.log("Hello");
}
function main() {
  greet();
  console.log("Done");
}
main();
// Call stack: main() → greet() → (pop) → main() continues → (pop)
*/

/* 
// 06-OCT-2026
// Variables & Data Type Revesion
let name = "Riya";
let age = 23;
let isStudent = true;
let city = "Gorakhpur";
console.log(name);
console.log(age);
console.log(isStudent);
console.log(city);

// Operators + Conditionals
let age = 20;
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote!");
}

let marks = 90;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// if Statement
let age1 = 20;
if (age1 >= 18) {
  console.log("Adult");
}

// Nested if
let age = 20;
let hasId = true;
if (age >= 18) {
  if (hasId) {
    console.log("Entry Allowed");
  }
}

// switch
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
    
    case 2:
      console.log("Tuesday");
      break;
      
      case 3:
        console.log("Wednesday");
        break;
        
        default:
          console.log("Invalid day");
        }
        
        let week = 3;
        
        switch (week) {
          case 1:
            console.log("Monday");
            break;
            
            case 2:
              console.log("Tuesday");
              break;
              
              case 3:
                console.log("Wednesday");
                break;
                
                case 4:
                  console.log("Thursday");
                  break;
                  
                  case 5:
                    console.log("Friday");
                    break;
                    
                    case 6:
                      console.log("Saturday");
                      break;
                      
                      case 7:
                        console.log("Sunday");
                        break;
                        
                        default:
                          console.log("Invalid day");
                        }
                        

// Ternary operator
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

let marks = 90;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 40) {
  console.log("Grade D");
} else if (marks < 40) {
  console.log("Fail");
}
*/

// DOM & Events
const container = document.querySelector(".container");
const heading1 = document.getElementById("h1");
const heading2 = document.getElementById("h2");
const para = document.querySelectorAll("p");

// heading1.textContent = "Hello Mango";
heading2.innerHTML = "Hello Manipulation";

const input = document.querySelector("#username");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  console.log(input.value);
});

heading1.style.backgroundColor = "red";
container.style.backgroundColor = "green";

heading1.addEventListener("click", function () {
  // heading1.innerText = "Hey JS!";
  heading1.innerText = "Hello Dom!";
  heading1.style.fontFamily = "arial";
  heading1.style.fontSize = "68px";
  heading1.style.color = "yellow";
});

console.log(document);
heading2.addEventListener("click", function () {
  heading2.innerText = "Ritika";
  heading2.style.color = "blue";
  
});
