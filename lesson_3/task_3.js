console.log(firstNumMinusSecondAndDividingByThird(9,3,2));
console.log(firstNumMinusSecondAndDividingByThird(9,2,3));
console.log(firstNumMinusSecondAndDividingByThird('s',3,2));

function firstNumMinusSecondAndDividingByThird(a, b, c) {
    if (arguments.length < 3) throw new Error('parameters must contain three numbers');
    if (!isTypeNum(a) || !isTypeNum(b) || !isTypeNum(c)) throw new Error('all parameters type should be Number');

    return (a - b) / c;
}

function isTypeNum(num) {
    return typeof num === 'number';
}
