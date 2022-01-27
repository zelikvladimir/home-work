const log = (item, i, arr) => console.log(item);

const myForEach = function (arr, cb) {
    if (!Array.isArray(arr)) throw new TypeError("first parameter is not Array");
    if (typeof cb !== "function") throw new TypeError("second parameter is not Function");

    let length = arr.length;
    let arrO = Object(arr);

    for (let i = 0; i < length; i++) {
        if (i in arrO) cb(arr[i], i, arr);
    }
}

myForEach([2,5,7], log);
console.log("-------------");
myForEach([3,4,8,,null,,223], log);

