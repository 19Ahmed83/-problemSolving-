function app(arr) {
    return arr.map((el, index) => index % 2 === 0 ? el + 1 : el).filter(el => el > 0)
}

console.log(app([4, 5, 7, 4, 0]))