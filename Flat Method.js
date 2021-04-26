let arr = [1, 2, [4, [5, 6, [7, 3, [5, 0]]]]]

const sumArray = (arr) => {
    return arr.flat(Infinity).reduce((a, b) => a + b, 0)
}
console.log(sumArray(arr))