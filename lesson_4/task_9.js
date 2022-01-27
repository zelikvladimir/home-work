const ERROR_PARAMETER = "Данная функция принимает два обязательных правметра, первый - число, строка, объект, массив, второй только число";
const ERROR_TYPE_FIRST_PARAMETER = "Первый параметр может принимать только число, строку, объект, массив";
const ERROR_TYPE_SECOND_PARAMETER = "Второй параметр может принимать только число";

function isPossibleTypeFiller(filler) {
    let type = typeof filler;
    let result = false;

    if (filler == null) return false;

    switch (type) {
        case 'number':
        case 'string':
        case 'object':
            result = true;
            break;
        default:
            break;
    }

    return result;
}

function arrayFill(filler, length) {
    let checkFiller = !isPossibleTypeFiller(filler);
    let newArray = [];

    if (arguments.length < 2) throw new TypeError(ERROR_PARAMETER);
    if(checkFiller) throw new TypeError(ERROR_TYPE_FIRST_PARAMETER);
    if (typeof length !== 'number') throw new TypeError(ERROR_TYPE_SECOND_PARAMETER);

    for (let i = 0; i < length; i++) {
        newArray.push(filler);
    }

    return newArray;
}

console.log(arrayFill('zx', 3));
console.log(arrayFill([3,7], 3));
console.log(arrayFill( 3));
