const add = (a, b) => a + b;

function myReduceRight(arr, cb, acc) {
    let typeAcc = typeof acc;

    if (!Array.isArray(arr)) throw new TypeError("first parameter is not Array");
    if (typeof cb !== "function") throw new TypeError("second parameter is not Function");
    if (typeAcc !== "number" && typeAcc !== "string") throw new TypeError("third parameter must be a string or a number");

    let length = arr.length;
    let i = length - 1;
    let arrO = Object(arr);
    let result = acc;

    if (length === 0) throw TypeError("Array must not be empty");

    for (;i >= 0; i--) {
        if (i in arrO) {
            result = cb(result, arrO[i], i, arrO);
        }
    }

    return result;
};

console.log(myReduceRight([1,2,3], add, ''));
console.log(myReduceRight(['a', 'b', 'c'], add, ''));
