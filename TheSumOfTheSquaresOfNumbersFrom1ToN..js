function sumOfSquares(n){
    let sum = 0;
    let i = 0;
    while(i <= n){
        sum = sum + Math.pow(i,2);
        i++;
    }
    return sum;
}
//console.log(sumOfSquares(4)) === 30;