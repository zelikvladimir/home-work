console.log(cubedNum(2));
console.log(cubedNum("text"));

function cubedNum(num) {
    if (typeof num !== "number") {
        throw new Error("parameter type is not a Number");
    } else {
        if (num !== 1) {
            return num * num * num;
        } else {
            return num;
        }
    }
}
