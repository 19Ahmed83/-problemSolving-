function app(arr) {
    return arr.flat().reduce((acc, curr) => acc + curr, 0)
}

// console.log(app([[3, 4], [8, 1], [2, 3]]))===>21