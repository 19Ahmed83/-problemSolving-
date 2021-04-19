function pairElement(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') arr.push([str[i], 'T'])
        if (str[i] === 'T') arr.push([str[i], 'A'])
        if (str[i] === 'C') arr.push([str[i], 'G'])
        if (str[i] === 'G') arr.push([str[i], 'C'])
    }
    return arr
}

console.log(pairElement("TTGAG"))