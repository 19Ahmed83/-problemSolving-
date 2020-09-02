function isSquare(x){
    if(Math.sqrt(x) % 1 === 0){
        return `${x} is square of ${Math.sqrt(x)}`;
    }else if(Math.sqrt(x) % 1 !== 0){
        return `${x} is not a square`
    }
}
//console.log(isSquare(9)) === "9 is square of  3"