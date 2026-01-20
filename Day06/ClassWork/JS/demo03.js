//data types- number, string, boolean, undefined, object, null
let age = 21;
let name = "Varsha";
let isStudent = true;
let result;
let data = null;
let student = { //object
    name: "Varsha",
    age: 21
};
//number
console.log("Age is:" + age);
console.log(`Data type is ${typeof age}`);
//string
console.log(`Name is: ${name}`);
console.log(`Data type is ${typeof name}`);
//boolean
console.log(`is student: ${isStudent}`);
console.log(`Data type is ${typeof isStudent}`);
//undefined
console.log(`Result: ${result}`);
console.log(`Data type is ${typeof result}`);
//null
console.log(`Data present: ${data}`);
console.log(`Data type is ${typeof data}`);
//object
console.log(`Student details: ${JSON.stringify(student)}`);
console.log(`Data type is ${typeof student}`);

