function app(arr) {
    let arr1 = arr.filter(el => typeof (el) === 'string' && el.length >= 4)
    return arr1;
}

//console.log(app[34, 76, 3, 9, 'wer', -6, 0, 'dgffdg'])===>'dgffdg'