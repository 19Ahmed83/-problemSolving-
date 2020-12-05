function app(n) {
    let last;
    do {
        last = n % 10;
        n = (n - last) / 10;
        if (last === 2) {
            return true;
        }
    } while (n > 0)
    return false

}

console.log(app(1520))//true