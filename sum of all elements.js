const sum = (digit) => {
    let sum = 0;
    let str = digit + '';
    for (let i = 0; i < str.length; i++) {
        sum = sum + +str[i];
    }
    return sum;
}
console.log(sum(123))