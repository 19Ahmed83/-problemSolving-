const fibonnachi = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonnachi(n - 1) + fibonnachi(n - 2)
}
console.log(fibonnachi(8))