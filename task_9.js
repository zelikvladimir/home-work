let arr = [1, 6, 3, 5, 4, 2];

for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    let wasExchange= false;

    for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];

            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            wasExchange = true;
        }
    }

    if (!wasExchange) break;
}

console.log(arr);
