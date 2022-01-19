let arr = [1, 2, 5, 9, 4, 14, 4, 10];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log('Есть!');
        break;
    }
}