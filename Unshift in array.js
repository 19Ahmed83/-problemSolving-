function app(n) {
    let arr = [];
    let last;
    do {
        last = n % 10;
        arr.unshift(last);
        n = (n - last) / 10;
    } while (n > 0)
}

console.log(app(123))//[1,2,3]