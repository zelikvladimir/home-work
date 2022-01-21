console.log(getDivisors(12));

function getDivisors(num) {
    if (typeof num !== 'number') throw new Error('parameter type is not Number');

    let divisors = [];
    let halfNum = num / 2;

    for (let i = 1; i <= halfNum; i++) {
        console.log(i);
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    divisors.push(num);

    return divisors;
}