const arr = [5, 10];

function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = 0;
    let newArray = [];
    for (let i = min; i <= max; i++) {
        newArray.push(i);
        sum = sum + i
    }
    return sum
}

console.log(sumAll(arr))