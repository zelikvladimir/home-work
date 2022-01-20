console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(28));
console.log(isEven('err'));

function isEven(num) {
    if (typeof num !== 'number') throw new Error('parameter type is not Number');

    return num % 2 === 0;
}