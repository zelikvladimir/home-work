console.log(isPositiveNumFromArr([1,2,-4,3,-9,-1,7,0]));
// console.log(isPositiveNumFromArr('err'));
console.log(isPositiveNumFromArr([1,2,'-4',3,-9,-1,7,0]));

function isPositiveNumFromArr(arr) {
    if (!Array.isArray(arr)) throw new Error('parameter type is not Array');

    let newArr = [];

    arr.forEach(el => {
        if (isPositiveNum(el)) {
            newArr.push(el);
        }
    });

    return newArr;
    // return arr.filter(el => isPositiveNum(el));
}

function isPositiveNum(num) {
    if (typeof num !== 'number') throw new Error('parameter type is not Number');

    return num > 1;
}
