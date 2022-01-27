let arr = ['abcd', 'abcde', 'ab', 'abc', 'asdfgzxcvb'];
let arrLength = arr.map((item, i, arr) => arr[i].length);

console.log(arrLength);