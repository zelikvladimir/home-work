console.log(sumAllNum(1,2,3));
console.log(sumAllNum(1,1,1,1,1,1,1,1));
console.log(sumAllNum(1,2,'3',4));
console.log(sumAllNum(1));
function sumAllNum(...num) {
    let result = 0;

    if (num === 1) return 1;

    for (let val of arguments) {
        if (typeof val !== 'number') {
            throw new Error('all parameters should be a Number');
        } else {
            result += val;
        }
    }

    return result;
}
