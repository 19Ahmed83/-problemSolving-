function app(arr) {
    let arr1 = [];
    let arr2;
    let newArr = arr.flat();
    for (let i = 0; i < newArr.length; i++) {
        arr1.push(newArr[i] + newArr[i + 1]);
        arr2 = arr1.filter((el, i) => i % 2 === 0 ? el : 0)
    }
    return arr.length === 0 ? null : Math.max(...arr2) * 2;
}

//console.log(app([[2, 3], [5, 6], [2, 7]]))===>22