const ERROR_PARAMETER = "Первый параметр обязателен и может принимать только массив";
const ERROR_IS_NOT_NUMBER = "Один из элементов не является массивом или числом";
const add = (a, b) => a + b;

function sumArray(arr) {
    if (!Array.isArray(arr)) throw new TypeError(ERROR_PARAMETER);

    let newArray = arr.flat(Infinity);
    let includesNonNumber = newArray.some(el => typeof el !== 'number');

    if (includesNonNumber) {
        throw new TypeError(ERROR_IS_NOT_NUMBER);
    }

    return newArray.reduce(add, 0);
}

// console.log(sumArray());
console.log(sumArray([3,2,1]));
console.log(sumArray([[[2, 2], [2, 2]], [[2, 2], [2, 2]]]));
console.log(sumArray([[[[[1,2]]]]]));
console.log(sumArray([[[[[4,3]]],2],1]));
console.log(sumArray([[[[[]]]]]));
console.log(sumArray([[[[[],3]]]]));
// console.log(sumArray([[[2, 4], 'zx'], [[3, 5], [7, 9]]]));
