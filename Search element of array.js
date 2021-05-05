let arr = [1, 3, 5, 12, 16, 24, 25, 27, 33, 37, 42, 45, 50, 53, 56, 64, 65, 77, 80, 83, 86, 89, 99, 112];

const searchEl = (arr, value) => {
    return arr.filter(el => el === value);
}
console.log(searchEl(arr, 99))