//Q2.Student List Using Arrays

// create an array of students
let students = ["Varsha", "Nehal", "Eshika", "Mahi"];

//print list of students
console.log("Student List:");
console.log(students);

//add a new student
students.push("Riya");
console.log("Updated student list:");
console.log(students);

//remove first student
students.shift();
console.log("After removing first student:");
console.log(students);

//print total number of students
console.log("Total students:", students.length);

//display last student
console.log("Last student:", students[students.length - 1]);