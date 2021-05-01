const part = (arr) => {
    return arr.sort((a, b) => a - b).filter((el, i) => i === arr.indexOf(el))
}
console.log(part([1, 3, 8, 3, 9, 0, 1]))