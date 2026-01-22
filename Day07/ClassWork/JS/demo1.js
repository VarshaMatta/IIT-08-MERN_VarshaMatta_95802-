//JS objects. Properties can be added using dot operator or [] operator
const s1={} //empty object
s1.name= "Anil";// adding properties
s1.age=25;
console.log(s1);
console.log(`type of s1: ${typeof(s1)}`)

const s2={}
s2["name"]="Suresh";
s2["age"] = 28;
console.log(s2)

//JSON
const s3={
    "name": "om",
    "age":28,
    "canVote":true
}
s3["city"]="Pune"
console.log(s3)
