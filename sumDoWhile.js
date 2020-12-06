function app(n) {
    let res = 0
    let last;
    do {
        last = n % 10;
        n = (n - last) / 10;
        res = res + last
    } while (n > 0)
    return res
}

//console.log(app(123))===>6