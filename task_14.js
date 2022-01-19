let n = 1000;
let num = 0;

while (n / 2) {
    n = n / 2;
    num++;
    console.log(n);
    if (n < 50) break;
}

console.log('-----');
console.log(num);
