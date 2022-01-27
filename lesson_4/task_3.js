const isEven = (item, i, arr) => item % 2 === 0;

function myEvery(arr, cb) {
    if (!Array.isArray(arr)) throw new TypeError("first parameter is not Array");
    if (typeof cb !== "function") throw new TypeError("second parameter is not Function");

    let i = 0;
    let length = arr.length;
    let arrO = Object(arr);

    while (i < length) {
        if (i in arrO) {
            let res = cb(arrO[i], i, arrO);

            if (!res) return false;
        }
        i++;
    }

    return true;
}

console.log(myEvery([2,12,1,6], isEven));
console.log(myEvery([null,8,4,6], isEven));
console.log(myEvery([,'',2,8], isEven));