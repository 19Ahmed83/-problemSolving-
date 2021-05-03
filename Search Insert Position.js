function search(nums, target) {
    let newArr = [...nums, target].sort((a, b) => a - b);
    return newArr.indexOf(target)
}

console.log(search([1, 6, 4, 3], 3))