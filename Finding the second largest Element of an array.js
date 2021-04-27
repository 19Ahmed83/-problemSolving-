const secondLargest = (arr) => {
    let max = Math.max(...arr);
    let newArr = arr.filter(el => el !== max);
    return Math.max(...newArr);
}
console.log(secondLargest([3, 5, 6, 2, 8, 0]))