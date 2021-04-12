function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(bouncer([4, false, null, 0, NaN, undefined, "", 3]))