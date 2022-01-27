const add = (a, b) => a + b;

function myReduce(arr, cb, acc) {
    let typeAcc = typeof acc;

    if (!Array.isArray(arr)) throw new TypeError("first parameter is not Array");
    if (typeof cb !== "function") throw new TypeError("second parameter is not Function");
    if (typeAcc !== "number" && typeAcc !== "string") throw new TypeError("third parameter must be a string or a number");

    let i = 0;
    let length = arr.length;
    let arrO = Object(arr);
    let result = acc;

    if (length === 0) throw TypeError("Array must not be empty");

    for (;i < length; i++) {
        if (i in arrO) {
            result = cb(result, arrO[i], i, arrO);
        }
    }

    return result;
};

console.log(myReduce([1,2,3], add, 10));
console.log(myReduce([,2,3], add, 10));
console.log(myReduce(['a', 'b', 'c'], add, ''));
