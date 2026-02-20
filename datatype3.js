// Datatypes:-
// 1. Primitive DataTypes :- 7
// i. Number
let age = 24;

let price = 100.40;

// ii. String..
let name = "Pradhum Kumar";

// iii. Boolean..
isboolean = false;

isfollow = true;


// iv. undefined..
let x;

// v. Null...


// vi. BigInt..
let a = BigInt("123");

// vii. Symbol...
let b = Symbol("Hello !");


// 2. Non Permitive DataType.
// Objects.. :- collections of values.
// student object
const student = {
    name : "Rahul Kumar",
    age : 25,
    marks : 8.2,
    isPass : true
};

console.log(student["name"]); 
console.log(student.age); // differnt obj.key

// increase 1 year age
student["age"] = student["age"] + 1;
console.log(student["age"])

