const find = (arr) => {
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
            index = i
    }
    return [max,index]
}
console.log(find([12, 90, 5, 34, 0, 90]))