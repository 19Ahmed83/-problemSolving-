function test(arr1, arr2, n) {
    let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1)
    return newArr;
}

console.log(test([1, 2, 3], [8, 7, 6], 1))