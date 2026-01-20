// types of functions- parameterized functions, non parameterized function.
function f1(){
    console.log("Non-Parameterized Function");
}
f1();

function f2(name, age){
    console.log("Parameterized Function");
    console.log("Name: "+name);
    console.log("Age: "+age);
}
f2("Abby",25);
f2("Bob");
