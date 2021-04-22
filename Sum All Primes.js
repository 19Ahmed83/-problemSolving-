const sumPrime = (num) => {
    let sum = 0;

    function isPrime(i) {
        for (let k = 2; k < i; k++) {
            if (i % k === 0) {
                return false
            }
        }
        return true;
    }

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumPrime(977))