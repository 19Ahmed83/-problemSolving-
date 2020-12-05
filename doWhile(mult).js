function app(n) {
    let res = 1;
    let x = 1;
    do {
        res = res * x;
        x++;
    } while (x <= n);
}

console.log(app(4))//24