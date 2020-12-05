function app(n) {
    let run = n;
    let days = 1;
    do {
        run += run * 0.1;
        days++;
    } while (days < 10)
    return Math.round(run);
}

console.log(app(5))//12