const rev = (x) => {
    return +(x.toString().split('').reverse().join(''))
}
console.log(rev(123))