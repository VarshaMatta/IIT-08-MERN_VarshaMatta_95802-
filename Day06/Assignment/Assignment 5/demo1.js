// Q1)Data types
//Number
let num = 25;
console.log(`Number value: ${num}`);
console.log(`Type: ${typeof num}`);

// String
let str = "Varsha Matta";
console.log(`\nString value: ${str}`);
console.log(`Type: ${typeof str}`);

// Boolean
let isStudent = true;
console.log(`\nBoolean value: ${isStudent}`);
console.log(`Type: ${typeof isStudent}`);

// Undefined
let x;
console.log(`\nUndefined value: ${x}`);
console.log(`Type: ${typeof x}`);

// Null
let Value = null;
console.log(`\nNull value: ${Value}`);
console.log(`Type: ${typeof Value}`);

// Object
let student = {
  name: "Varsha",
  age: 21,
  branch: "Engineering"
};
console.log(`\nObject value: ${JSON.stringify(student)}`);
console.log(`Type: ${typeof student}`);

// Array
let numbers = [10, 20, 30, 40];
console.log(`\nArray value: ${numbers}`);
console.log(`Type: ${typeof numbers}`);

//Q2)Basic operations
let a=10;
let b=3;
console.log("\nBasic operations");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

//Q3)String Operation
let fullName = "Varsha Matta";

console.log("\nString Operations");
console.log("String:", fullName);
console.log("Length:", fullName.length);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First character:", fullName[0]);

//Q4) simple function
function greet() {
  console.log("\nHello, Welcome to JavaScript!");
}
greet();//function call

//Q5)Function with parameters
function add(a, b) {
  let sum = a + b;
  console.log("Sum:", sum);
  return sum;
}
add(5, 7);

//Q6)Function with return stmt
function isEven(num) {
  return num % 2 === 0;
}
console.log("\nIs 10 even?", isEven(10));
console.log("Is 7 even?", isEven(7));

//Q7)Arrow Function
const square = (num) => num * num;
console.log("\nSquare of 5:", square(5));

//Q8)Default parameters
function concatenate(x = 5, y = 5, z = 10) {
  let sum = x + y + z;
  console.log(`The sum is: ${x} + ${y} + ${z} = ${sum}`);
}
concatenate();        
concatenate(2, 3);    
concatenate(1, 2, 3);