function repeatStringNumTimes(str, num) {
    let newStr = '';
    let i = 0;
    while (i < num) {
        newStr = newStr + str;
        i++;
    }
    return num > 0 ? newStr : ''
}

console.log(repeatStringNumTimes('abc', 3))