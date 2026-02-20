// Arrow Function :- 
//  Compact way of writing a function...

// const functionName = (param1, param2)  => {
    // do some
    // }

    // sum function.
    function sum(a, b) {
        return a + b;
    }
    //  Modern JS
    const arrowSum = (a, b) => {
        console.log(a + b);
    };


    // Multiple..
    function mul(a, b) {
        return a * b;
    }
    const arrowmul =(a, b) => {
        console.log(a * b);
    };

    // Q
    function countVowel(str) {
        let count = 0;
        for(const char of str) {
            if(char === "a" || char === "e" || char ==="o" || char === "i" || char === "u"){
                count++;
            }

            console.log(count);
        }
    }

