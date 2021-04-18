let arr = [1, 2, 3, 1, 2, 3]

function destroyer(arr, ...args) {
    return arr.filter(el => !args.includes(el))
}

console.log(destroyer(arr, 2, 3))