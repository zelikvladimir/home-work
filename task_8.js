let arr = [1, 2, 8, 4];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] % 2 === 0) {
        result += arr[i];
    }
}

console.log(result);