const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let count=0;
function test(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        count +=1
        if (arr[i] === item) {
            return i
        }
    }
    return null
}

console.log(test(arr, 8))
console.log('count =', count)