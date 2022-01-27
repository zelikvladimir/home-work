const lessThenTen = (item, i, arr) => item > 10;

function myFilter(arr, cb) {
    if (!Array.isArray(arr)) throw new TypeError("first parameter is not Array");
    if (typeof cb !== "function") throw new TypeError("second parameter is not Function");

    let newArr = [];
    let length = arr.length;
    let arrO = Object(arr);

    for (let i = 0; i < length; i++) {
        if (i in arrO && cb(arr[i], i, arr)) newArr.push(arr[i]) ;
    }

    return newArr;
}

console.log(myFilter([2,2,2,10], lessThenTen));
console.log(myFilter([27,2,5,8,12], lessThenTen));
console.log(myFilter([21,,15,null,5,,34], lessThenTen));