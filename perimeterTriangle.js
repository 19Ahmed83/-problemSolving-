function perimeter(x1, y1, x2, y2, x3, y3){
    let a = Math.pow((x2-x1),2);
    let a1 = Math.pow((y2-y1),2);
    let b = Math.pow((x3-x1),2);
    let b1 = Math.pow((y3-y1),2);
    let c = Math.pow((x3-x2),2);
    let c1 = Math.pow((y3-y2),2);
    let A = Math.sqrt(a+a1);
    let B = Math.sqrt(b+b1);
    let C = Math.sqrt(c+c1);
    return +(A+B+C).toFixed(2);
}//console.log(perimeter(1, 1, 4, 1, 1, 5)) === 12