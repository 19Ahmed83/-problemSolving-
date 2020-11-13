function maxEven(arr) {
    let arr1 = [];
    for (let el of arr) {
        if (el % 2 === 0) {
            arr1.push(el);
            arr1.sort((a, b) => b - a);
        }
    }
    return [arr1[0]]
}

//console.log(maxEven([4, 7, 22, 5, 37])) ===> [22]