let arr1 = [[1, 2], [3, 4]]
let arr2 = [[5, 6], [7, 8]]

const sumEven = (arr1, arr2) => {
    let newArr = arr1.concat(arr2).flat()
    return newArr.filter(el => el % 2 === 0).reduce((a, b) => a + b, 0)

}
console.log(sumEven(arr1, arr2))