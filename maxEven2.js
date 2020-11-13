function maxEven(arr){
    let a = arr.filter(el => el % 2 === 0).sort((a,b)=>b-a);
    return a[0];
}
//console.log(maxEven([4, 7, 22, 5, 37])) ===> 22