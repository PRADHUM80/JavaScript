console.dir(document.body.childNodes[1]);

// Dom Manipulation..

// 1. Selecting with id :-
let heading = document.getElementById("heading");  // h1
console.dir(heading)

// 2. using class Name:-
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

// 3. using the Tags:- 
let para = document.getElementsByTagName("p");
console.log(para);

// 4.QuerySelector:- Retrun myid, myClass, tag
let elements = document.querySelector("p");
console.dir(elements);
console.log(elements);


// 
let div = document.querySelector("div");
console.dir(div);

// 

let heading1 = document.querySelector("h1");
