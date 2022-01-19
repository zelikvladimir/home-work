let arr = [1, 2, 3, -5, -2, 1, -4];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}

console.log(result);
