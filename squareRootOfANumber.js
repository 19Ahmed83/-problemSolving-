function squareRoot(x){
    if(x >= 0){
        return +Math.sqrt(x).toFixed(2);
    }else if(x < 0){
        return 'Root of a negative number is NaN';
    }
} //console.log(squareRoot(83)) === 9.11