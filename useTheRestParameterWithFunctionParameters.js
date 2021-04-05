const sum = (...n) => {
    return n.reduce((a, b) => a + b, 1)
}
console.log(sum(1, 2, 3))