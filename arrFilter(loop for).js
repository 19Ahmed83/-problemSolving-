function app(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i] === 'string' && arr[i].length === 4)) {
            arr1.push(arr[i]);
        }
    }
    return arr1
}

//console.log(app(['qwe', 45, '657', 21, 'sdgsd', 'errt']));