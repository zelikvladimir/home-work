function myReverse(arr) {
    if (!Array.isArray(arr)) throw new TypeError("Первый параметр обязателен и может принимать только массив");
    if (!arr.length) throw new TypeError("Массив не может быть пустым");

    let newAray = [];
    let length = arr.length - 1;

    for (let i = length; i >= 0; i--) {
        newAray.push(arr[i]);
    }

    return newAray;
}

console.log(myReverse([2,7,13]));
// console.log(myReverse([]));
