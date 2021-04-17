function nonMutatingSort(arr) {
    return [].concat(arr).sort((a, b) => a - b)
}

console.log(nonMutatingSort([140000, 104, 99]))