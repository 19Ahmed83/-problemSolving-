const squareList = (arr) => {
    return arr.filter(el => el > 0 && el % 1 === 0).map(el => el * el)
}
console.log(squareList([-3, 4.8, 5, 3, -3.2]))