function powersOfTwo(n){
    let arr = [];
    let i = 0;
    while(i <= n){
        arr.push(Math.pow(2,i));
        i++
    }
    return arr;
}
//console.log(powersOfTwo(2)) === [1, 2, 4]