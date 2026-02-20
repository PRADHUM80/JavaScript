//  Loops are used to execute a piece of code again & again.

// for(let count = 1; count <= 5; count++) {
//     // console.log("Apna College");
//     console.log(count);
// }


// sum
// let sum = 0;
// let n = 5
// for(let i = 1; i <= n; i++) {
//     sum += i;
// } 
// console.log("Sum : " , sum);



// Whileloop;-

// let i = 1;
// while(i <= 5) {
//     console.log("i", i);
//     i++;
// }

// 


// doWhile Loop...

// let i = 1;
// do {
//     console.log("i = " , i);
//     i++;
// } while (i <= 5);



// for-of Loop..
// let str = "Apna College";

// for(let i of str) {
//     console.log(i);
// }


// for in Loop..    Return Key values.
// let student = {
//     name : "rahul",
//     age : 21,
//     cgpa : 88.8
// };

// for (let i in student) {
//     console.log(i);
// }


// for(let key in student) {
//     console.log("key=", key, " value=", student["key"])
// }




// print even no 0 to 100
// for(let num=0; num<=100; num++) {
//     if(num % 2 == 0) {
//         console.log(num);
//     }
// }

// user  
let gameNum = 25;
let userNum = prompt("Guess the number: ");
while(userNum != gameNum) {
   userNum =  prompt("Guess the number is wrong: ");
}
console.log("Congarts, you enterd the right number");