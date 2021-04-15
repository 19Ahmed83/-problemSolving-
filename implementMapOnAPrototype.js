const arr = [3, 5, 2, 6, 8]

Array.prototype.MyMap = function (callback) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]))
    }
    return newArr;
}

let new_arr = arr.MyMap(function (item) {
    return item * 2
})
console.log(new_arr)