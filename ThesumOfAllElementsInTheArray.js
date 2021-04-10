function test(arr) {
    let newArr = arr.flat();
    for (let i = 0; i < newArr.length; i++) {
        sum = sum + newArr[i]
    }
    return sum
}

console.log(test([[1, 2, 3], [3, 4, 5], [5, 6, 7]]))