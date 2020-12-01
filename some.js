function app(arr) {
    return arr.some(el => el % 2 === 0)
}

console.log(app([1, 5, 3, 4, 8, 0]))