function expression(a, b, c){
    return +(Math.sqrt(a) + (Math.sqrt(Math.abs(b - c))/(a**3 + b**2 + c**4))).toFixed(2);
}
//console.log(expression(16, 12, 18)) === 4;