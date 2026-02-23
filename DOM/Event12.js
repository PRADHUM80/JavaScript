// Event :- The change in the state of an object is known as of an event.
// EX:-  mouse event
// Keyboard Event


let btn1 = document.querySelector('#btn1');

btn1.onclick = () => {
    console.log("btn was clicked!");
    let a = 25;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmousemove = () => {
    console.log("you are inside div");
};