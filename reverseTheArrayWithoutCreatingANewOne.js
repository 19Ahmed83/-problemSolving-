let arr = [2, 5, 4, 0, -8];
for (let i = arr.length - 1; i >= 0; i++) {
    arr.push(arr[i]);
}
arr.splice(0, arr.length / 2)
//console.log(arr)===>[-8,0,4,5,2]