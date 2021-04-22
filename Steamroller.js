const steamrollArray = (arr) => {
    let arr1 = arr.flat();
    let newArr = arr1.flat()
    return newArr.flat()
}
console.log(steamrollArray([1, [2], [], [3, [[4]]]]));