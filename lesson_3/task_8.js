console.log(printArr([1,2,3,4]));

function printArr(arr) {
    if (!Array.isArray(arr)) throw new Error('parameter type is not Array');

    let firstItem = arr.splice(0, 1);

    console.log(firstItem[0]);
    if (arr.length) {
        return printArr(arr);
    }
}
