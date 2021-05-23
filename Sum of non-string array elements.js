let arr = ['23', 8, ['5', [17, ['15']]], 9, '11', 6];

const sum = (arr) => {
    return arr.flat(Infinity).filter(el => typeof (el) === 'number').reduce((a, b) => a + b, 0)
}
console.log(sum(arr))