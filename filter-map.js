function app(arr) {
    return arr.filter(el => el % 2 !== 0).map(el => el * 2)
}

//console.log(app([4, 6, 7, 4, 9, 0]))===>[14, 18]