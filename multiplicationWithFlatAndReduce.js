const matrix = [
    [1, 2, 3],
    [11, 12, 13, 4],
    [10, 15, 14, 5],
    [9, 8, 7, 6],
];

function multArr(matrix) {
    return matrix.flat().reduce((a, b) => a * b, 1)
}

console.log(multArr(matrix))