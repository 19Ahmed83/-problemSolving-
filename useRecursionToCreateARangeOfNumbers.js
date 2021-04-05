function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum]
    } else {
        const number = rangeOfNumbers(startNum, endNum - 1);
        number.push(endNum)
    }
    return number;
}

console.log(rangeOfNumbers(1, 7))