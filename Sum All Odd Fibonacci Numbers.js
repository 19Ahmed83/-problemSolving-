function fib(num) {
    let start = 0;
    let next = 1;
    let current;
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        current = start + next;
        start = next;
        next = current;
        if (current % 2 !== 0 && current <= num) {
            sum = sum + current
        }
    }
    return sum + 1;
}

console.log(fib(4))