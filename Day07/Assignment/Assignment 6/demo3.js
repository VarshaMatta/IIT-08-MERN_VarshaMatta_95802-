//Q3.Marks Processing Using Array Methods
let marks = [35, 67, 82, 49, 90, 58];

//Create a new array containing marks of students who have passed (marks ≥ 50)
let passedStudents= marks.filter(mark => mark >= 50);
console.log("Passed student marks:");
console.log(passedStudents);

//Create a new array that converts marks into percentage format
let percentageMarks = marks.map(mark => mark + "%");
console.log("Marks in percentage format:");
console.log(percentageMarks);


// Check and display whether any student has scored above 85
let above85 = marks.some(mark => mark > 85);
console.log("Any student scored above 85?");
console.log(above85);