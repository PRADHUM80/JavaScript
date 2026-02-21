// MAP:-  Creates a new Array with the results of some operation. the value its  callback returns are used to form new Array.

// arr.map(callbackFnx(value,index,array))

// let newArr = arr.map((val) => {
    // return val * 2;
    // })

    let nums = [67, 68, 69, 70];

    nums.map((val) => {
        console.log(val);
    });

    // or 

    let newArr = nums.map((val) => {
        return val;
    });
    console.log(newArr);



    // FILTER()...
    // let newArr = arr.filter((val) => {
        // return val %2 === 0;
        // })

        let arr = [1, 2,3, 4,5 ,6,7,8,9, 10];

        let evenArr = arr.filter((val) => {
            // return val % 2 === 0;
            return val > 3;
        });
        console.log(evenArr);




        // REDUCE() 
        const output = arr.reduce((res, curr) => {
            return res + curr;
        });
        console.log(output);

        // Q

        let arr1 = [5, 6, 7, 8,9];

        const output1 = arr1.reduce((prev, curr) => {
            return prev > curr ? prev : curr;
        });

        console.log(output1);