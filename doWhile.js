function sum(n) {
    let s = 0;
    let x = 1;
    do {
        s = s + x;
        x++
    } while (x <= n)
}

console.log(sum(3))//6