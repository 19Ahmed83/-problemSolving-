function twoMax3(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    arr.sort((a, b) => b - a);
    return [arr[1], arr[0]];
}

//console.log(twoMa([2, 5, 8, 5, -5, 13],[6, 4, -8, 45, 0]))===>[13,45]