//  var.. :- Variable can be re-declared & update. A global scope.

var age = 24;
var age = 86;
console.log(age);

// using Let variables:-
// Variable cannot be re-declared but can be updated. A block scope variable.

let name = "Tony stark";
console.log(name);

let age1 = 24;
console.log(age1);

// const:- cannot be Re-declared or Updated.
const pi =3.14;
console.log(pi);



// Block of scope..
 {
    let a = 5;
    console.log(a);
 }

 {
    let a = 10;
    console.log(a);
 }