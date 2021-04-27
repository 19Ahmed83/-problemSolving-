const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return (number + " is not a prime number. ")
        }
    }
    return (number + " is a prime number");
}
const number = 6
console.log(isPrime(number));