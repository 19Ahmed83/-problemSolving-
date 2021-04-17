const average = (...args) => args.reduce((a, b) => a + b / args.length, 0)
console.log(average(1, 2, 3, 4))