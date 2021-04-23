let a = [[1, 2], [3, 4]];
let b = [[5, 6], [7, 8]];

const sumArray = (a, b) => {
    let c = [[], []]
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            c[i][j] = a[i][j] + b[i][[j]]
        }
    }
    return c
}
console.log(sumArray(a, b))