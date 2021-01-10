function app(arr) {
    return arr.length === 0 ? null : Math.max(...arr.map((el, i) => (el[0] + el[1]) * 2))
}

console.log(app([[1, 2], [3, 4], [5, 6]]))