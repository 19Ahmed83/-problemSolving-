function exspressionValue(a, b, c){
    let a1 = Math.abs(a - c);
    let b1 = Math.abs(b - c);
    let c1 = Math.abs(a + b + c);
    return +((a1 + b1)/c1).toFixed(2);
}