const isEven = (item, i, arr) => item % 2 === 0;

function mySome(arr, cb) {
    if (!Array.isArray(arr)) throw new TypeError("first parameter is not Array");
    if (typeof cb !== "function") throw new TypeError("second parameter is not Function");

    let i = 0;
    let length = arr.length;
    let arrO = Object(arr);

    while (i < length) {
        if (i in arrO && cb(arrO[i], i, arrO)) return true;
        i++;
    }

    return false;
}

console.log(mySome([3,123,1,61], isEven));
console.log(mySome([null,1,1,1], isEven));
console.log(mySome([1,'',3,15], isEven));