function fib(n) {
    let start = 0;
    let next = 1;
    let current;
    let result = 0
    for (let i = 0; i <= n; i++) {
        current = start + next;
        start = next;
        next = current;
        if (current % 2 === 0 && current <= n) {
            result = result + current;
        }
    }
    return result;
}

console.log(fib(34))