//Q1.Student Object and JSON Handling
// Create student object
let student={
studentId :132,
studentName:"Varsha Matta",
email: "varsha@gmail.com",
course:"Information Technology",
marks:[75,90,84,69]
}

//convert object to JSON string
let jsonStudent=JSON.stringify(student);
console.log("JSON String:");
console.log(jsonStudent);

//convert json string back to javascript object
let objectStudent=JSON.parse(jsonStudent);
console.log("JavaScript Object:");
console.log(objectStudent);