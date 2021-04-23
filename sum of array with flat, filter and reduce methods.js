let arr = [1, 2, 3, 5, 2, [4], [4, 8]];

const sumArray = (arr) => {
    return  arr.flat().filter((el, i) => i % 2 === 0).reduce((a, b) => a + b, 0)

}
console.log(sumArray([1, 2, 3, 5, 2, [4], [4, 8]]))